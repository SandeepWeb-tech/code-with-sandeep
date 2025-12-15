import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AdminData from "../../../model/email";
import { connectDb } from "../../../helper/db";

export async function POST(req) {
  await connectDb();

  try {
    const { email, password } = await req.json();

    // Check if user exists
    const data = await AdminData.findOne({ email });
    console.log("password", password);
    if (!data) {
      return NextResponse.json({ msg: "User not found!!!" }, { status: 400 });
    }

    // Verify password
    // const isMatch = data.email === email && data.password === password;
    const isMatch = await bcrypt.compare(password, data.password);
    if (!isMatch) {
      return NextResponse.json({ msg: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign({ id: data._id }, "abcdefghijklm", {
      expiresIn: "1d",
    });

    // Generate JWT
    // const token = jwt.sign(
    //   { userId: data._id, email: data.email },
    //   process.env.JWT_SECRET || "abcdefghijklm",
    //   { expiresIn: "1h" }
    // );

    const response = NextResponse.json(
      {
        msg: "Successfully login!!",
        success: true,
      },
      { status: 200 }
    );
    response.cookies.set("token", token);
    return response;

    // return NextResponse.json(
    //   { msg: "Successfully login!!", success: true, token },
    //   { status: 200 }
    // );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { msg: `Error occurred: ${error.message}` },
      { status: 500 }
    );
  }
}
