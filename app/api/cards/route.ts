/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextRequest, NextResponse } from "next/server";
import data from "@/app/api/categories/cards.json"
import { chromium } from "@playwright/test";
import { JSDOM } from "jsdom";
import { ICharacterCard } from "@/app/types";

const URL = "https://dokkan.wiki/";

export async function GET(request: NextRequest, response: NextResponse) {

    try {
        const browser = await chromium.launch();

        // await page.goto(URL, { waitUntil: "load", timeout: 60000 });
        const context = await browser.newContext({
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
        });
        const page = await context.newPage();
        await page.goto(URL);



        // Extraer los elementos .card-thumb
        const data = await page.evaluate(() => {
            return Array.from(document.querySelectorAll("div.card-thumb")).map(el => el.innerHTML);
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
        const dom = new JSDOM(htmlString);
        const doc = dom.window.document;

        return {
            background: doc.querySelector<HTMLImageElement>(".card-thumb-bg")?.src || null,
            character: doc.querySelector<HTMLImageElement>(".card-thumb-character")?.src || null,
            rarity: doc.querySelector<HTMLImageElement>(".card-rarity")?.src || null,
            element: doc.querySelector<HTMLImageElement>(".card-element")?.src || null,
            eza: !!doc.querySelector(".card-eza"),
            date: doc.querySelector<HTMLSpanElement>(".card-info-box span")?.textContent?.trim() || null
        };
    });
}
