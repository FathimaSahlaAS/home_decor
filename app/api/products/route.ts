import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Handle GET request to fetch all products
export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// Handle POST request to add a new product
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newProduct = await prisma.product.create({ data: body });
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
