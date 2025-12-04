import { NextResponse } from "next/server";
import { connectDb } from "../../../helper/db";
import TasksFavoriate from "../../../model/favoriate";

await connectDb();
export async function GET(request) {
  try {
    const users = await TasksFavoriate.find();
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    return NextResponse.json({ success: false, msg: "data failed" });
  }
}