/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {

    return NextResponse.json({ status: "Hello World" }, { status: 200 });
}