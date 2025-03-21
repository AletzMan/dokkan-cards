import React from "react"
import Footer from "./Footer"

interface Props {
    children: React.ReactNode
}

export function Section({ children }: Props) {

    return (
        <section className="flex flex-col items-center justify-items-center pb-4 mt-[53px] gap-8 font-[family-name:var(--font-jost)] h-[calc(100svh-55px)] scrollbar bg-[radial-gradient(ellipse_at_top,var(--blue-opacity-color)_0%,rgba(43,166,255,0)100%)]">
            {children}
            <Footer />
        </section>
    )
}