import mongoose from "mongoose";
import UserModel from "../model/userModel";
export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });
    console.log('db connected...')
    // console.log(connection, 'connection are')
    // const uuser = new UserModel({
    //   name: "sandeep",
    //   email: "kigu@gmail.com",
    //   password: "123455667",
    // });
    // // testing only for user

    // await uuser.save();
  } catch (error) {
    console.log(`Error is coming ${error}`);
  }
};
