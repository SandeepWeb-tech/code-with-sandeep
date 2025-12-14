import { NextResponse } from "next/server";
import AdminData from "../../../model/email";
import { connectDb } from "../../../helper/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

await connectDb();

export async function POST(request) {
  const { email, password } = await request.json();
  try {
    const newAdminData = new AdminData({
      email,
      password,
    });

    if (!email || !password) {
      return NextResponse.json(
        { msg: "All field is mandatory to used!", success: false },
        { status: 201 }
      );
    }

    const existingUser = await AdminData.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { msg: "User already exists!", success: false },
        { status: 201 }
      );
    }

    const hashPassword = bcrypt.hash(password, 10, function (err, hash) {
      // Store hash in your password DB.
    }); // for storing passord in hash way

    const token = jwt.sign({ email, password }, "asasasa");
    const response = NextResponse.json(
      {
        msg: "user created",
      },
      { status: 201 }
    );

    response.cookies.set("token", token);
    return response;
    const savedUser = await newAdminData.save();

    return NextResponse.json(
      { msg: "data added successfully!", success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to create user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const users = await AdminData.find();

    return NextResponse.json({ success: true, data: users }, { status: 201 });
  } catch (error) {
    console.error("Failed to create user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
