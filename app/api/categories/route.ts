/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import CardDetailsSchema from "@/app/validations/card_schema";
import { prisma } from "@/app/utils/db";

export async function GET(request: NextRequest, response: NextResponse) {
    const data = await prisma?.card.findMany(); // Obtén todos los registros de la tabla card
    return NextResponse.json({ data }, { status: 200 });
}


export async function POST(request: NextRequest) {
    try {
        const data = await request.json(); // Obtén los datos del cuerpo de la solicitud

        // Validación con Zod
        const validatedData = CardDetailsSchema.parse(data);

        // Creación del registro con Prisma
        const cardDetails = await prisma.cardDetails.create({
            data: {
                card: { create: validatedData.card },
                categories: { create: validatedData.categories }
            }

        });

        return NextResponse.json(cardDetails, { status: 201 }); // Devuelve la respuesta con el código 201 (creado)
    } catch (error) {
        if (error instanceof ZodError) {
            // Error de validación
            return NextResponse.json(error.errors, { status: 400 }); // Devuelve los errores de validación con el código 400 (bad request)
        } else {
            // Otro error (puede ser un error de Prisma)
            console.error(error);
            return NextResponse.json({ message: 'Error en la creación del registro' }, { status: 500 }); // Devuelve un error genérico con el código 500 (internal server error)
        }
    }
}