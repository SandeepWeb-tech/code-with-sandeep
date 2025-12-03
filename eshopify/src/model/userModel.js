import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: [true, "Email Required.."],
  },
  password: {
    type: String,
    required: [true, "Password Required.."],
  },
});

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;