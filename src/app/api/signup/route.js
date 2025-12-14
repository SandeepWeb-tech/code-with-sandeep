import { NextResponse } from "next/server";
import AdminData from "../../../model/email";
import { connectDb } from "../../../helper/db";
import bcrypt from "bcrypt"; // for encryption and decriptions
import jwt from "jsonwebtoken";

await connectDb();

export async function POST(request) {
  const { name, email, password } = await request.json();
  try {
    const newAdminData = new AdminData({
      name,
      email,
      password,
    });

    if (!name || !email || !password) {
      return NextResponse.json(
        { msg: "All fields are mandatory!", success: false },
        { status: 400 }
      );
    }

    const existingUser = await AdminData.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { msg: "User already exists!", success: false },
        { status: 401 }
      );
    }

    // const hashPassword = bcrypt.hash(password, 10); // for saving password in hash format
    // const newAdminData = new AdminData({
    //   email,
    //   password: hashPassword,
    // });

    await newAdminData.save(); // above both condition is false

    try {
      const token = jwt.sign({ email, password }, "abcdefghijklm");

      //   const token = jwt.sign({ email, password }, "abcdefghijklm", {
      //     expiresIn: "1h",
      //   });
      const response = NextResponse.json(
        {
          msg: "Signup successful!",
        },
        { status: 201 }
      );
      response.cookies.set("token", token);
      return response;
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to create user" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Failed to create user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}

// export async function GET(request) {
//   try {
//     const users = await AdminData.find();

//     return NextResponse.json({ success: true, data: users }, { status: 201 });
//   } catch (error) {
//     console.error("Failed to create user:", error);
//     return NextResponse.json(
//       { error: "Failed to create user" },
//       { status: 500 }
//     );
//   }
// }
