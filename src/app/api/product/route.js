import { connectDb } from "../../../helper/db";
import productSchemaNew from "../../../model/product";
import { ObjectId } from "mongodb"; // import ObjectId
import { NextResponse } from "next/server";

await connectDb();

export async function GET(request) {
  try {
    const users = await productSchemaNew.find();
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    return NextResponse.json({ success: false, msg: "data failed" });
  }
}

export async function POST(request) {
  const { isOfferAvailable, image, actualAmount, afterDiscount } = await request.json();

  try {
    const newProduct = new productSchemaNew({
      isOfferAvailable,
      image,
      actualAmount,
      afterDiscount,
    });
    const savedUser = await newProduct.save();

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

export async function DELETE(request) {
  const { _id } = await request.json();

  // Convert string to ObjectId
  await productSchemaNew.deleteOne({ _id: new ObjectId(_id) });

  return NextResponse.json(
    {
      message: "deleted",
      status: true,
    },
    { status: 200, statusText: "OK" } // better to use 200 for delete success
  );
}

