
import { NextResponse } from "next/server";
import { connectDb } from "../../../helper/db";
import UserModel from "../../../model/userModel";

await connectDb();
export async function GET(request) {
    //dummy exercise data
    // const users = [
    //   {
    //     name: "sandeep",
    //     age: 45,
    //   },
    //   {
    //     name: "bindu",
    //     age: 15,
    //   },
    //   {
    //     name: "kajal",
    //     age: 35,
    //   },
    // ];

  try {
    const users = await UserModel.find();
    return NextResponse.json(users);
  } catch (error) {
    console.log("Error Occure");
  }
}

export async function POST(request) {
  //fetch data from api/

  const { name, email, password } = await request.json();

  try {
    const newUser = new UserModel({ name, email, password });
    const savedUser = await newUser.save();

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Failed to create user:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
  // const body = request.body;
  // // const jsonData = await request.json();
  // const testData = await request.text();
  // console.log(testData)
  // // console.log(jsonData)
  // console.log(request.nextUrl.searchParams) ///api/user?name%20=%27sandeep%27
  // return NextResponse.json({
  //     message: 'posting User'
  // })
}

export function DELETE(request) {
  console.log("delete request");

  return NextResponse.json(
    {
      message: "deleted",
      status: true,
    },
    { status: 201, statusText: "states" }
  );
}

export async function PUT(request, {params}){
 const { userid } = await params;

  try {
    const result = userid && await UserModel.updateOne({ _id: userid },{$set: {name: 'sandeep'}});
    console.log(result)
    if (result.updatedCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "User updated", success: true });
  } catch (error) {
    console.error("Failed to delete user:", error);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}
