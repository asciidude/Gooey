import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import emailValidator from 'email-validator'

import connectDb from '../../../middleware/mongodb'
import User from '../../../models/User'

const jwtExp = 60 * 60

const login = async (req, res) => {
    if (req.method === "POST") {
        const { email, password } = req.body;

        const validEmail = await emailValidator.validate(email);
        if (!validEmail || password.length < 8)
            return res
            .status(400)
            .send({ msg: "Your email or password is incorrect!" });

        const user = await User.findOne({ email });
        if (!user)
            return res
            .status(400)
            .send({ msg: "Your email or password is incorrect!" });

        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass)
            return res
            .status(400)
            .send({ msg: "Your email or password is incorrect!" });

        const jwtToken = jwt.sign(
            {
            userId: user._id
            },
            process.env.JWT_SECRET,
            { expiresIn: jwtExp }
        );

        user.password = undefined

        return res.setHeader('Set-Cookie', [`Authorization=${jwtToken}; HttpOnly; Max-Age=${jwtExp}`]).send(user)
    }
}

export default connectDb(login);