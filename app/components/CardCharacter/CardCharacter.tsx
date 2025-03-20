import { URL_API, URL_SPRITE_SHEET } from "@/app/constants";
import { ICharacterCard } from "@/app/types";
import Image from "next/image";
import styles from "./styles.module.css"
import SpriteCanvas from "../SpriteSelector";

interface Props extends ICharacterCard {
    hasDate?: boolean
}

export function CardCharacter({ card }: { card: Props }) {
    return (
        <article key={card.character} className={`${styles.card} relative grid  h-max w-28 gap-1 bg-slate-900 p-2 rounded-sm border ${card.type === "str" ? "border-red-500" : card.type === "teq" ? "border-green-500" : card.type === "phy" ? "border-yellow-500" : card.type === "agl" ? "border-blue-500" : card.type === "int" ? "border-purple-500" : ""}`}>
            <div className="relative  ">
                {card.rarity?.includes("cha_rare_sm_lr") && <SpriteCanvas className="absolute -left-1 -top-1 " scale={0.95} frames={[{ height: 130, width: 130, x: 0, y: 155 }, { height: 130, width: 129, x: 0, y: 280 }]} />}
                {card.rarity?.includes("cha_rare_sm_lr") && <div className={`${styles.wrapper_light} `}>
                    <Image className={styles.background_light} src={URL_SPRITE_SHEET} width={90} height={90} alt="Fondo LR" />
                </div>}
                <Image className="" src={URL_API.concat(card.background as string)} alt={`Imagen de ${card.element}`} width={100} height={100} />
                {<Image className={`absolute -top-5 -left-4 object-contain  ${styles.card_character}`} src={URL_API.concat(card.character as string)} alt={`Imagen de ${card.element}`} width={200} height={200} />}
                <Image className="absolute -right-5 -top-4" src={URL_API.concat(card.element as string)} alt={`Imagen de ${card.element}`} width={50} height={50} />
                <Image className="absolute -left-3 -bottom-5" src={URL_API.concat(card.rarity as string)} alt={`Imagen de ${card.element}`} width={60} height={60} />
                {card.eza && <Image className="absolute -right-4 -bottom-1" src={(card.ezaType as string)} alt={`Imagen de ${card.element}`} width={60} height={60} />}
            </div>
            {card.hasDate && <span className="text-xs bg-lime-700 w-24 text-wrap px-2 py-1 text-center">{card.date!.replace(/\s*GMT[+-]?\d{1,2}(:\d{2})?/gi, '')}</span>}
        </article>
    );
}