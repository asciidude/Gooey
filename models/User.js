const { model, Schema, models } = require("mongoose");

const userSchema = new Schema({
  username: String,
  tunnelVision: Array,
  premium: Boolean,
  password: String,
  email: String
})

let User;

try {
  User = model("User");
} catch {
  User = model("User", userSchema)
}

export default User;