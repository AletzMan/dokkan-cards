/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { chromium } from "@playwright/test";
import { ICharacterCard } from "@/app/types";

const URL = "https://glbes.dokkaninfo.com/";

export async function GET(request: NextRequest, response: NextResponse) {

    try {
        const browser = await chromium.launch();
        const context = await browser.newContext({
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
        });
        const page = await context.newPage();
        await page.goto(URL);

        const data = await page.evaluate(() => {
            return Array.from(document.querySelectorAll("a.card-icon")).map(el => el.innerHTML);
        });

        await browser.close();
        console.log("Cards encontrados:", data);
        const cards = parseCharacterCards(data);
        if (cards.length === 0) {
            return NextResponse.json({ message: "No se encontraron cards", data: cards }, { status: 404 });
        }

        return NextResponse.json({ data: cards }, { status: 200 });
    } catch (error) {
        console.error("ERROR:", error)
        return NextResponse.json({ error: error }, { status: 500 });
    }
}

function parseCharacterCards(htmlStringArray: string[]): ICharacterCard[] {
    return htmlStringArray.map(htmlString => {
        const card: ICharacterCard = {
            id: 0,
            background: null,
            character: null,
            rarity: null,
            element: null,
            eza: false,
            date: null,
            type: "",
            ezaType: null,
        };

        // ID del personaje
        const characterMatch = htmlString.match(/card_(\d+)_thumb\.png/);
        if (characterMatch) {
            card.id = parseInt(characterMatch[1], 10);
        }

        // URL de la imagen de fondo
        const backgroundMatch = htmlString.match(/src="([^"]*cha_base_[^"]*\.png)"/);
        if (backgroundMatch) {
            card.background = backgroundMatch[1];
        }

        // URL de la imagen del personaje
        const characterImageMatch = htmlString.match(/src="([^"]*card_\d+_thumb\.png)"/);
        if (characterImageMatch) {
            card.character = characterImageMatch[1];
        }

        // Rareza del personaje
        const rarityMatch = htmlString.match(/cha_rare_sm_([a-z]+)\.png/);
        if (rarityMatch) {
            card.rarity = rarityMatch[1].toUpperCase();
        }

        // Elemento del personaje
        const elementMatch = htmlString.match(/cha_type_icon_(\d+)\.png/);
        if (elementMatch) {
            card.element = elementMatch[1];
            const elementNumber = parseInt(elementMatch[1], 10);

            // Determinar el tipo basado en el número del elemento
            if ([1, 11, 21].includes(elementNumber)) {
                card.type = "TEQ";
            } else if ([2, 12, 22].includes(elementNumber)) {
                card.type = "INT";
            } else if ([3, 13, 23].includes(elementNumber)) {
                card.type = "STR";
            } else if ([4, 14, 24].includes(elementNumber)) {
                card.type = "PHY";
            } else if ([0, 10, 20].includes(elementNumber)) {
                card.type = "AGL";
            }
        }

        // EZA (Extreme Z-Awakening)
        const ezaMatch = htmlString.match(/dok_img_([a-z_]+)\.png/);
        if (ezaMatch) {
            card.eza = true;
            card.ezaType = ezaMatch[1];
        }

        return card;
    });
}