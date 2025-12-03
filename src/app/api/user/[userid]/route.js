import { NextResponse } from "next/server";
import {connectDb} from '../../../../helper/db';
import UserModel from '../../../../model/userModel';

await connectDb();
export async function DELETE(request, { params }) {
  const { userid } = await params;

  try {
    const result = userid && await UserModel.deleteOne({ _id: userid });
    console.log(result)
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "User deleted", success: true });
  } catch (error) {
    console.error("Failed to delete user:", error);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
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