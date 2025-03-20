"use client"
import Header from "@components/Header";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { ICharacterCard } from "./types";
import { CardCharacter } from "./components/CardCharacter/CardCharacter";

const dataDefault: ICharacterCard[] = [
  {
    "background": "/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_01_04.png",
    "character": "/assets/global/en/character/thumb/card_1030300_thumb.png",
    "rarity": "/assets/global/en/layout/en/image/character/cha_rare_sm_ur.png",
    "element": "/assets/global/en/layout/en/image/character/cha_type_icon_11.png",
    "eza": false,
    "date": "21 mar 2025, 12:30 a.m. GMT-6",
    "type": "teq",
    "ezaType": null
  },
  {
    "background": "/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_01_04.png",
    "character": "/assets/global/en/character/thumb/card_1025640_thumb.png",
    "rarity": "/assets/global/en/layout/en/image/character/cha_rare_sm_ur.png",
    "element": "/assets/global/en/layout/en/image/character/cha_type_icon_11.png",
    "eza": true,
    "date": "21 mar 2025, 12:30 a.m. GMT-6",
    "type": "teq",
    "ezaType": "https://glbes.dokkaninfo.com/assets/global/es/layout/es/image/charamenu/dokkan/dok_img_kyokugen.png"
  },
  {
    "background": "/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_03_04.png",
    "character": "/assets/global/en/character/thumb/card_1024630_thumb.png",
    "rarity": "/assets/global/en/layout/en/image/character/cha_rare_sm_ur.png",
    "element": "/assets/global/en/layout/en/image/character/cha_type_icon_23.png",
    "eza": true,
    "date": "21 mar 2025, 12:30 a.m. GMT-6",
    "type": "str",
    "ezaType": "https://glbes.dokkaninfo.com/assets/global/es/layout/es/image/charamenu/dokkan/dok_img_kyokugen.png"
  },
  {
    "background": "/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_04_04.png",
    "character": "/assets/global/en/character/thumb/card_1020040_thumb.png",
    "rarity": "/assets/global/en/layout/en/image/character/cha_rare_sm_ur.png",
    "element": "/assets/global/en/layout/en/image/character/cha_type_icon_14.png",
    "eza": true,
    "date": "21 mar 2025, 12:30 a.m. GMT-6",
    "type": "phy",
    "ezaType": "https://glbes.dokkaninfo.com/assets/global/es/layout/es/image/charamenu/dokkan/dok_img_kyokugen.png"
  },
  {
    "background": "/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_04_04.png",
    "character": "/assets/global/en/character/thumb/card_1025070_thumb.png",
    "rarity": "/assets/global/en/layout/en/image/character/cha_rare_sm_ur.png",
    "element": "/assets/global/en/layout/en/image/character/cha_type_icon_14.png",
    "eza": true,
    "date": "19 mar 2025, 11:00 p.m. GMT-6",
    "type": "phy",
    "ezaType": "https://glbes.dokkaninfo.com/assets/global/es/layout/es/image/charamenu/dokkan/dok_img_kyokugen.png"
  },
  {
    "background": "/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_02_04.png",
    "character": "/assets/global/en/character/thumb/card_1031100_thumb.png",
    "rarity": "/assets/global/en/layout/en/image/character/cha_rare_sm_ur.png",
    "element": "/assets/global/en/layout/en/image/character/cha_type_icon_12.png",
    "eza": false,
    "date": "18 mar 2025, 12:18 a.m. GMT-6",
    "type": "int",
    "ezaType": null
  },
  {
    "background": "/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_00_04.png",
    "character": "/assets/global/en/character/thumb/card_1031080_thumb.png",
    "rarity": "/assets/global/en/layout/en/image/character/cha_rare_sm_ur.png",
    "element": "/assets/global/en/layout/en/image/character/cha_type_icon_10.png",
    "eza": false,
    "date": "18 mar 2025, 12:18 a.m. GMT-6",
    "type": "agl",
    "ezaType": null
  },
  {
    "background": "/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_02_04.png",
    "character": "/assets/global/en/character/thumb/card_1021940_thumb.png",
    "rarity": "/assets/global/en/layout/en/image/character/cha_rare_sm_ur.png",
    "element": "/assets/global/en/layout/en/image/character/cha_type_icon_12.png",
    "eza": true,
    "date": "5 mar 2025, 11:00 p.m. GMT-6",
    "type": "int",
    "ezaType": "https://glbes.dokkaninfo.com/assets/global/es/layout/es/image/charamenu/dokkan/dok_img_kyokugen.png"
  },
  {
    "background": "/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_04_04.png",
    "character": "/assets/global/en/character/thumb/card_1021920_thumb.png",
    "rarity": "/assets/global/en/layout/en/image/character/cha_rare_sm_ur.png",
    "element": "/assets/global/en/layout/en/image/character/cha_type_icon_14.png",
    "eza": true,
    "date": "5 mar 2025, 11:00 p.m. GMT-6",
    "type": "phy",
    "ezaType": "https://glbes.dokkaninfo.com/assets/global/es/layout/es/image/charamenu/dokkan/dok_img_kyokugen.png"
  },
  {
    "background": "/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_03_04.png",
    "character": "/assets/global/en/character/thumb/card_1005730_thumb.png",
    "rarity": "/assets/global/en/layout/en/image/character/cha_rare_sm_ur.png",
    "element": "/assets/global/en/layout/en/image/character/cha_type_icon_13.png",
    "eza": true,
    "date": "5 mar 2025, 11:00 p.m. GMT-6",
    "type": "str",
    "ezaType": "https://glbes.dokkaninfo.com/assets/global/es/layout/es/image/charamenu/dokkan/dok_img_super_optimal.png"
  },
  {
    "background": "/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_04_04.png",
    "character": "/assets/global/en/character/thumb/card_1031060_thumb.png",
    "rarity": "/assets/global/en/layout/en/image/character/cha_rare_sm_ur.png",
    "element": "/assets/global/en/layout/en/image/character/cha_type_icon_14.png",
    "eza": false,
    "date": "3 mar 2025, 11:00 p.m. GMT-6",
    "type": "phy",
    "ezaType": null
  },
  {
    "background": "/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_04_05.png",
    "character": "/assets/global/en/character/thumb/card_1022420_thumb.png",
    "rarity": "/assets/global/en/layout/en/image/character/cha_rare_sm_lr.png",
    "element": "/assets/global/en/layout/en/image/character/cha_type_icon_14.png",
    "eza": true,
    "date": "26 feb 2025, 2:00 a.m. GMT-6",
    "type": "phy",
    "ezaType": "https://glbes.dokkaninfo.com/assets/global/es/layout/es/image/charamenu/dokkan/dok_img_kyokugen.png"
  },
  {
    "background": "/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_01_05.png",
    "character": "/assets/global/en/character/thumb/card_1022380_thumb.png",
    "rarity": "/assets/global/en/layout/en/image/character/cha_rare_sm_lr.png",
    "element": "/assets/global/en/layout/en/image/character/cha_type_icon_11.png",
    "eza": true,
    "date": "26 feb 2025, 2:00 a.m. GMT-6",
    "type": "teq",
    "ezaType": "https://glbes.dokkaninfo.com/assets/global/es/layout/es/image/charamenu/dokkan/dok_img_kyokugen.png"
  },
  {
    "background": "/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_00_05.png",
    "character": "/assets/global/en/character/thumb/card_1030790_thumb.png",
    "rarity": "/assets/global/en/layout/en/image/character/cha_rare_sm_lr.png",
    "element": "/assets/global/en/layout/en/image/character/cha_type_icon_20.png",
    "eza": false,
    "date": "20 feb 2025, 11:00 p.m. GMT-6",
    "type": "agl",
    "ezaType": null
  },
  {
    "background": "/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_04_04.png",
    "character": "/assets/global/en/character/thumb/card_1030670_thumb.png",
    "rarity": "/assets/global/en/layout/en/image/character/cha_rare_sm_ur.png",
    "element": "/assets/global/en/layout/en/image/character/cha_type_icon_14.png",
    "eza": false,
    "date": "20 feb 2025, 11:00 p.m. GMT-6",
    "type": "phy",
    "ezaType": null
  },
  {
    "background": "/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_04_04.png",
    "character": "/assets/global/en/character/thumb/card_1030610_thumb.png",
    "rarity": "/assets/global/en/layout/en/image/character/cha_rare_sm_ur.png",
    "element": "/assets/global/en/layout/en/image/character/cha_type_icon_14.png",
    "eza": false,
    "date": "20 feb 2025, 11:00 p.m. GMT-6",
    "type": "phy",
    "ezaType": null
  },
  {
    "background": "/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_03_05.png",
    "character": "/assets/global/en/character/thumb/card_1023620_thumb.png",
    "rarity": "/assets/global/en/layout/en/image/character/cha_rare_sm_lr.png",
    "element": "/assets/global/en/layout/en/image/character/cha_type_icon_13.png",
    "eza": true,
    "date": "20 feb 2025, 11:00 p.m. GMT-6",
    "type": "str",
    "ezaType": "https://glbes.dokkaninfo.com/assets/global/es/layout/es/image/charamenu/dokkan/dok_img_kyokugen.png"
  },
  {
    "background": "/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_01_05.png",
    "character": "/assets/global/en/character/thumb/card_1023520_thumb.png",
    "rarity": "/assets/global/en/layout/en/image/character/cha_rare_sm_lr.png",
    "element": "/assets/global/en/layout/en/image/character/cha_type_icon_21.png",
    "eza": true,
    "date": "20 feb 2025, 11:00 p.m. GMT-6",
    "type": "teq",
    "ezaType": "https://glbes.dokkaninfo.com/assets/global/es/layout/es/image/charamenu/dokkan/dok_img_kyokugen.png"
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
    <section className="flex flex-col bg-(--background) items-center justify-items-center px-4 pb-4 gap-16 font-[family-name:var(--font-jost)] h-[calc(100svh-2em)]">
      <Header />
      <Button onClick={getData} loading={loalding}>Scrapear</Button>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(112px,1fr))] content-start gap-4 bg-slate-950 w-[calc(100svw-2em)] h-[calc(100svh-2em)] max-w-screen-xl p-2">
        {cards.map(card => (
          <CardCharacter key={card.character} card={{ ...card, hasDate: true }} />
        ))}
      </div>
    </section>
  );
}
