"use client"
import Header from "@components/Header";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { ICharacterCard } from "./types";
import { CardCharacter } from "./components/CardCharacter/CardCharacter";
import { FiClock } from "react-icons/fi";
import Image from "next/image";


const dataDefault: ICharacterCard[] = [
  {
    "id": 1030300,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_01_03.png",
    "character": "/assets/global/es/character/thumb/card_1030300_thumb.png",
    "rarity": "SSR",
    "element": "01",
    "eza": false,
    "date": null,
    "type": "TEQ",
    "ezaType": null
  },
  {
    "id": 1025640,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_01_04.png",
    "character": "/assets/global/es/character/thumb/card_1025640_thumb.png",
    "rarity": "UR",
    "element": "11",
    "eza": true,
    "date": null,
    "type": "TEQ",
    "ezaType": "kyokugen"
  },
  {
    "id": 1024630,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_03_04.png",
    "character": "/assets/global/es/character/thumb/card_1024630_thumb.png",
    "rarity": "UR",
    "element": "23",
    "eza": true,
    "date": null,
    "type": "STR",
    "ezaType": "kyokugen"
  },
  {
    "id": 1020040,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_04_04.png",
    "character": "/assets/global/es/character/thumb/card_1020040_thumb.png",
    "rarity": "UR",
    "element": "14",
    "eza": true,
    "date": null,
    "type": "PHY",
    "ezaType": "kyokugen"
  },
  {
    "id": 1025070,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_04_04.png",
    "character": "/assets/global/es/character/thumb/card_1025070_thumb.png",
    "rarity": "UR",
    "element": "14",
    "eza": true,
    "date": null,
    "type": "PHY",
    "ezaType": "kyokugen"
  },
  {
    "id": 1031100,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_02_04.png",
    "character": "/assets/global/es/character/thumb/card_1031100_thumb.png",
    "rarity": "UR",
    "element": "12",
    "eza": false,
    "date": null,
    "type": "INT",
    "ezaType": null
  },
  {
    "id": 1031090,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_02_03.png",
    "character": "/assets/global/es/character/thumb/card_1031090_thumb.png",
    "rarity": "SSR",
    "element": "02",
    "eza": false,
    "date": null,
    "type": "INT",
    "ezaType": null
  },
  {
    "id": 1031080,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_00_04.png",
    "character": "/assets/global/es/character/thumb/card_1031080_thumb.png",
    "rarity": "UR",
    "element": "10",
    "eza": false,
    "date": null,
    "type": "AGL",
    "ezaType": null
  },
  {
    "id": 1031070,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_00_03.png",
    "character": "/assets/global/es/character/thumb/card_1031070_thumb.png",
    "rarity": "SSR",
    "element": "00",
    "eza": false,
    "date": null,
    "type": "AGL",
    "ezaType": null
  },
  {
    "id": 1021940,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_02_04.png",
    "character": "/assets/global/es/character/thumb/card_1021940_thumb.png",
    "rarity": "UR",
    "element": "12",
    "eza": true,
    "date": null,
    "type": "INT",
    "ezaType": "kyokugen"
  },
  {
    "id": 1021920,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_04_04.png",
    "character": "/assets/global/es/character/thumb/card_1021920_thumb.png",
    "rarity": "UR",
    "element": "14",
    "eza": true,
    "date": null,
    "type": "PHY",
    "ezaType": "kyokugen"
  },
  {
    "id": 1005730,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_03_04.png",
    "character": "/assets/global/es/character/thumb/card_1005730_thumb.png",
    "rarity": "UR",
    "element": "13",
    "eza": true,
    "date": null,
    "type": "STR",
    "ezaType": "super_optimal"
  },
  {
    "id": 1031060,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_04_04.png",
    "character": "/assets/global/es/character/thumb/card_1031060_thumb.png",
    "rarity": "UR",
    "element": "14",
    "eza": false,
    "date": null,
    "type": "PHY",
    "ezaType": null
  },
  {
    "id": 1031050,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_04_03.png",
    "character": "/assets/global/es/character/thumb/card_1031050_thumb.png",
    "rarity": "SSR",
    "element": "04",
    "eza": false,
    "date": null,
    "type": "PHY",
    "ezaType": null
  },
  {
    "id": 1022420,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_04_05.png",
    "character": "/assets/global/es/character/thumb/card_1022420_thumb.png",
    "rarity": "LR",
    "element": "14",
    "eza": true,
    "date": null,
    "type": "PHY",
    "ezaType": "kyokugen"
  },
  {
    "id": 1022380,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_01_05.png",
    "character": "/assets/global/es/character/thumb/card_1022380_thumb.png",
    "rarity": "LR",
    "element": "11",
    "eza": true,
    "date": null,
    "type": "TEQ",
    "ezaType": "kyokugen"
  },
  {
    "id": 1030790,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_00_05.png",
    "character": "/assets/global/es/character/thumb/card_1030790_thumb.png",
    "rarity": "LR",
    "element": "20",
    "eza": false,
    "date": null,
    "type": "AGL",
    "ezaType": null
  },
  {
    "id": 1030780,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_00_04.png",
    "character": "/assets/global/es/character/thumb/card_1030780_thumb.png",
    "rarity": "UR",
    "element": "20",
    "eza": false,
    "date": null,
    "type": "AGL",
    "ezaType": null
  },
  {
    "id": 1030670,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_04_04.png",
    "character": "/assets/global/es/character/thumb/card_1030670_thumb.png",
    "rarity": "UR",
    "element": "14",
    "eza": false,
    "date": null,
    "type": "PHY",
    "ezaType": null
  },
  {
    "id": 1030610,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_04_04.png",
    "character": "/assets/global/es/character/thumb/card_1030610_thumb.png",
    "rarity": "UR",
    "element": "14",
    "eza": false,
    "date": null,
    "type": "PHY",
    "ezaType": null
  },
  {
    "id": 1023620,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_03_05.png",
    "character": "/assets/global/es/character/thumb/card_1023620_thumb.png",
    "rarity": "LR",
    "element": "13",
    "eza": true,
    "date": null,
    "type": "STR",
    "ezaType": "kyokugen"
  },
  {
    "id": 1023520,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_01_05.png",
    "character": "/assets/global/es/character/thumb/card_1023520_thumb.png",
    "rarity": "LR",
    "element": "21",
    "eza": true,
    "date": null,
    "type": "TEQ",
    "ezaType": "kyokugen"
  },
  {
    "id": 1010070,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_02_05.png",
    "character": "/assets/global/es/character/thumb/card_1010070_thumb.png",
    "rarity": "LR",
    "element": "12",
    "eza": true,
    "date": null,
    "type": "INT",
    "ezaType": "super_optimal"
  },
  {
    "id": 1004650,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_01_04.png",
    "character": "/assets/global/es/character/thumb/card_1004650_thumb.png",
    "rarity": "UR",
    "element": "21",
    "eza": true,
    "date": null,
    "type": "TEQ",
    "ezaType": "super_optimal"
  },
  {
    "id": 1030830,
    "background": "/assets/global/es/layout/es/image/character/character_thumb_bg/cha_base_00_04.png",
    "character": "/assets/global/es/character/thumb/card_1030830_thumb.png",
    "rarity": "UR",
    "element": "10",
    "eza": false,
    "date": null,
    "type": "AGL",
    "ezaType": null
  }
]


export default function Home() {
  const [loalding, setLoading] = useState(false);
  const [cards, setCards] = useState<ICharacterCard[]>(dataDefault);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/cards");
      const data = await response.json();
      console.log(data);
      setCards(data.data);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="flex flex-col items-center justify-items-center pb-4 mt-[53px] gap-8 font-[family-name:var(--font-jost)] h-[calc(100svh-55px)] scrollbar">
      <div className="relative">
        <Image style={{ maskImage: "linear-gradient(black 60%, transparent)" }} src="/background.webp" width={500} height={400} alt="Fondo dragon ball personajes" />
        <Image className="absolute -bottom-[10%] left-[25%] w-[50%]" src="/logo_dokkan.webp" width={300} height={200} alt="Fondo dragon ball personajes" />
      </div>
      {/*<Button onClick={getData} loading={loalding}>Scrapear</Button>*/}
      <div className="border border-[--header-border-color] rounded-md">
        <h2 className="flex items-center justify-start gap-4 py-2 pl-4 w-full text-center font-bold text-2xl border-b-[1px] border-b-[--header-border-color] bg-[linear-gradient(to_right,var(--header-color),var(--header-opacity-color))]"><FiClock />Cartas Recientes</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(125px,1fr))] content-start gap-4  w-[calc(100svw-2em)]   max-w-screen-xl p-2">
          {cards.map(card => (
            <CardCharacter key={card.character} card={{ ...card, hasDate: false }} />
          ))}
        </div>
      </div>
    </section>
  );
}
