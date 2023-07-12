import { serverQuery } from "@/lib/query";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();
  try {
    const data = await serverQuery(req);
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json("error");
}
