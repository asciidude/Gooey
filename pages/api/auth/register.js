import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import connectDb from '../../../middleware/mongodb'
import User from '../../../models/User'

const jwtExp = 60 * 60

const register = async (req, res) => {
    if (req.method === "POST") {
        const { email, password, username } = req.body;


        const emailExists = await User.findOne({ email });
        if (emailExists) return res.status(400).send({ msg: "Email is taken!" });

        const usernameExists = await User.findOne({ username });
        if (usernameExists)
            return res.status(400).send({ msg: "Username is taken!" });

        const salt = await bcrypt.genSalt(13);
        const hashedPass = await bcrypt.hash(password, salt);

        const user = await User.create({
            email,
            password: hashedPass,
            username,
            tunnelVision: [],
            premium: false
        });
        
        await user.save();

        const jwtToken = jwt.sign(
            {
            userId: user._id
            },
            process.env.JWT_SECRET,
            { expiresIn: jwtExp }
        );


        return res.setHeader('Set-Cookie', [`Authorization=${jwtToken}; HttpOnly; Max-Age=${jwtExp}`]).send(user)
    }
}

export default connectDb(register)