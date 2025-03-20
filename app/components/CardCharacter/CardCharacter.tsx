import { URL_API, URL_EZA, URL_RARITY, URL_SPRITE_SHEET, URL_TYPE } from "@/app/constants";
import { ICharacterCard } from "@/app/types";
import Image from "next/image";
import styles from "./styles.module.css"
import SpriteCanvas from "../SpriteSelector";
import Link from "next/link";

interface Props extends ICharacterCard {
    hasDate?: boolean
}

export function CardCharacter({ card }: { card: Props }) {
    return (
        <Link href={`/card/${card.id}`}
            key={card.character}
            className={`${styles.card} relative grid h-max w-max gap-1 p-2 rounded-sm border hover:shadow-md 
              ${cardStyles[card.type.toLowerCase()] || "bg-slate-900"}`}
        >
            <div className="relative">
                {card.rarity === "LR" && (
                    <SpriteCanvas
                        className="absolute -left-1 -top-1"
                        scale={0.95}
                        frames={[
                            { height: 130, width: 130, x: 0, y: 155 },
                            { height: 130, width: 129, x: 0, y: 280 },
                        ]}
                    />
                )}
                {card.rarity === "LR" && (
                    <div className={styles.wrapper_light}>
                        <Image
                            className={styles.background_light}
                            src={URL_SPRITE_SHEET}
                            width={90}
                            height={90}
                            alt="Fondo LR"
                        />
                    </div>
                )}
                <Image
                    className="min-w-[107px] min-h-[107px] object-contain"
                    src={URL_API.concat(card.background as string)}
                    alt={`Imagen de ${card.element}`}
                    width={100}
                    height={100}
                />
                <Image
                    className={`absolute -top-4 -left-[13px] object-contain ${styles.card_character}`}
                    src={URL_API.concat(card.character as string)}
                    alt={`Imagen de ${card.element}`}
                    width={200}
                    height={200}
                />
                <Image
                    className="absolute -right-5 -top-4"
                    src={`${URL_TYPE}${card.element as string}.png`}
                    alt={`Imagen de ${card.element}`}
                    width={50}
                    height={50}
                />
                <Image
                    className="absolute -left-3 -bottom-5"
                    src={`${URL_RARITY}${(card.rarity as string).toLowerCase()}.png`}
                    alt={`Imagen de ${card.element}`}
                    width={60}
                    height={60}
                />
                {card.eza && (
                    <Image
                        className="absolute -right-5 -bottom-2"
                        src={`${URL_EZA}${card.ezaType as string}.png`}
                        alt={`Imagen de ${card.element}`}
                        width={60}
                        height={60}
                    />
                )}
            </div>

            {card.hasDate && (
                <span className={`text-xs mt-1 w-[94px] text-wrap px-2 py-1 text-center border ${typeStyles[card.type] || "bg-slate-900"}`}>
                    {card.date!.replace(/\s*GMT[+-]?\d{1,2}(:\d{2})?/gi, "").replace(",", "")}
                </span>
            )}
        </Link>

    );
}

const cardStyles: Record<string, string> = {
    str: "border-[--str-border-color] bg-[--str-opacity-color] hover:shadow-[--str-background-color]",
    teq: "border-[--teq-border-color] bg-[--teq-opacity-color] hover:shadow-[--teq-background-color]",
    phy: "border-[--phy-border-color] bg-[--phy-opacity-color] hover:shadow-[--phy-background-color]",
    agl: "border-[--agl-border-color] bg-[--agl-opacity-color] hover:shadow-[--agl-background-color]",
    int: "border-[--int-border-color] bg-[--int-opacity-color] hover:shadow-[--int-background-color]",
};


const typeStyles: Record<string, string> = {
    str: "border-[--str-border-color] bg-[linear-gradient(to_right,var(--str-background-color),var(--str-border-color))]",
    teq: "border-[--teq-border-color] bg-[linear-gradient(to_right,var(--teq-background-color),var(--teq-border-color))]",
    phy: "border-[--phy-border-color] bg-[linear-gradient(to_right,var(--phy-background-color),var(--phy-border-color))]",
    agl: "border-[--agl-border-color] bg-[linear-gradient(to_right,var(--agl-background-color),var(--agl-border-color))]",
    int: "border-[--int-border-color] bg-[linear-gradient(to_right,var(--int-background-color),var(--int-border-color))]",
};