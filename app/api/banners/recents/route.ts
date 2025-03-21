/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { chromium } from "@playwright/test";
import { JSDOM } from "jsdom";

const URL = "https://glbes.dokkaninfo.com/";

export async function GET(request: NextRequest, response: NextResponse) {
    try {
        const browser = await chromium.launch();
        const context = await browser.newContext({
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
        });
        const page = await context.newPage();
        await page.goto(URL);

        const bannerData = await page.evaluate(() => {
            const banners = Array.from(document.querySelectorAll('a[href^="banners/"]'));
            return banners.map(banner => banner.outerHTML);
        });

        await browser.close();

        const parsedBanners = parseBanners(bannerData);

        return NextResponse.json({ data: parsedBanners }, { status: 200 });
    } catch (error) {
        console.error("ERROR:", error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}

function parseBanners(htmlStringArray: string[]) {
    return htmlStringArray.map(htmlString => {
        const dom = new JSDOM(htmlString);
        const doc = dom.window.document;
        const bannerLink = doc.querySelector('a');

        if (!bannerLink) {
            return null;
        }

        const href = bannerLink.href;
        const bannerId = href.split('/').pop();

        const bannerImage = doc.querySelector<HTMLImageElement>('img.img-fluid')?.src || null;
        const bannerTitle = doc.querySelector('b')?.textContent?.trim() || null;
        const bannerDescription = doc.querySelectorAll('div[style="min-height: 75px;"] div.col.container-text-center')[0]?.textContent?.trim() || null;

        // Extraer las fechas correctamente y formatearlas
        const dateRows = doc.querySelectorAll('div.row.padding-top-bottom-5 div.col div.row div.col');
        let startDate = null;
        let endDate = null;

        if (dateRows.length >= 2) {
            const startText = dateRows[0]?.textContent?.trim() || null;
            const endText = dateRows[1]?.textContent?.trim() || null;

            if (startText) {
                startDate = "Del: " + startText.replace("Comienza en: ", "").replace("hora estándar central", "CST");
            }
            if (endText) {
                endDate = "Al: " + endText.replace("El termina en: ", "").replace("hora estándar central", "CST");
            }
        }

        return {
            id: Number(bannerId),
            image: bannerImage,
            title: bannerTitle,
            description: bannerDescription,
            startDate: startDate,
            endDate: endDate,
        };
    }).filter(banner => banner !== null);
}