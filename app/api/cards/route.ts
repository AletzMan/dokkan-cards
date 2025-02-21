/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest } from "next/dist/server/web/spec-extension/request";
import { NextResponse } from "next/server";
import data from "@/app/api/categories/cards.json"

export async function GET(request: NextRequest, response: NextResponse) {
    //const data = await prisma?.category.findMany(); // Obtén todos los registros de la tabla card
    return NextResponse.json({ data }, { status: 200 });
}
