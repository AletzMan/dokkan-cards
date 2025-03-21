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

        const newsData = await page.evaluate(() => {
            const newsSections = Array.from(document.querySelectorAll('a[href^="news/"]'));
            return newsSections.map(col => col.outerHTML);
        });

        await browser.close();

        const parsedNews = parseNews(newsData);

        return NextResponse.json({ data: parsedNews }, { status: 200 });
    } catch (error) {
        console.error("ERROR:", error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}

function parseNews(htmlStringArray: string[]) {
    return htmlStringArray.map(htmlString => {
        const dom = new JSDOM(htmlString);
        const doc = dom.window.document;

        const newsLink = doc.querySelector('a');
        const newsId = newsLink?.href?.split('/').pop() || null;

        const newsImage = doc.querySelector<HTMLImageElement>('img.img-fluid')?.src || null;
        const newsTitle = doc.querySelector('b')?.textContent?.trim() || null;

        let newsDescription = null;
        const descriptionElement = doc.querySelectorAll('div.row div.col.font-size-1');
        if (descriptionElement.length > 1) {
            newsDescription = descriptionElement[0]?.innerHTML?.trim() || null;
        }

        const newsDate = descriptionElement[descriptionElement.length - 1]?.textContent?.trim()?.replace("hora estándar central", "CST").replace("Comienza en:", "Comienza:") || null;

        return {
            id: Number(newsId),
            image: newsImage,
            title: newsTitle,
            description: newsDescription,
            date: newsDate,
        };
    });
}