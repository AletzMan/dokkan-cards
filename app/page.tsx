"use client"
import Header from "@components/Header";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { IBannerData, ICharacterCard } from "./types";
import { CardCharacter } from "./components/CardCharacter/CardCharacter";
import { FiClock } from "react-icons/fi";
import Image from "next/image";
import { URL_API } from "./constants";


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

const bannersDefault: IBannerData[] = [
  {
    "id": "11494",
    "image": "/assets/global/es/ingame/banners/gasha_top_banner_11494.png",
    "title": "Festival DOKKAN [Goku (niño)]",
    "description": "¡Solo 318 horas! ¡Realiza 3 Invocaciones Múltiples para obtener una gratuita! ¡El nuevo Goku (niño) SSR hace acto de presencia!",
    "startDate": "¡Solo 318 horas! ¡Realiza 3 Invocaciones Múltiples para obtener una gratuita! ¡El nuevo Goku (niño) SSR hace acto de presencia!",
    "endDate": "Comienza en: 18/3/2025\n                               12:18:00 a.m.\n                               hora estándar central El termina en: 31/3/2025\n                               6:17:59 a.m.\n                               hora estándar central"
  },
  {
    "id": "11500",
    "image": "/assets/global/es/ingame/banners/gasha_top_banner_11500.png",
    "title": "Festival DOKKAN: Invocación de Ticket [Goku (niño)]",
    "description": "Festival DOKKAN: Invocación de Ticket ¡El nuevo Goku (niño) SSR hace acto de presencia! ¡Un personaje SSR garantizado por Invocación Múltiple!",
    "startDate": "Festival DOKKAN: Invocación de Ticket ¡El nuevo Goku (niño) SSR hace acto de presencia! ¡Un personaje SSR garantizado por Invocación Múltiple!",
    "endDate": "Comienza en: 18/3/2025\n                               12:18:00 a.m.\n                               hora estándar central El termina en: 10/4/2025\n                               1:59:59 a.m.\n                               hora estándar central"
  },
  {
    "id": "11502",
    "image": "/assets/global/es/ingame/banners/gasha_top_banner_11128.png",
    "title": "Invocación Ritual misterioso",
    "description": "¡Solo 4 veces! ¡Invocación \"Ritual Misterioso\"! ¡Usa 25 Piedras de Dragón para invocar 5 Kaioshin Anciano!",
    "startDate": "¡Solo 4 veces! ¡Invocación \"Ritual Misterioso\"! ¡Usa 25 Piedras de Dragón para invocar 5 Kaioshin Anciano!",
    "endDate": "Comienza en: 17/3/2025\n                               11:00:00 p.m.\n                               hora estándar central El termina en: 31/3/2025\n                               10:59:59 p.m.\n                               hora estándar central"
  },
  {
    "id": "11460",
    "image": "/assets/global/es/ingame/banners/gasha_top_banner_11460.png",
    "title": "Festival DOKKAN [Vegeta Super Saiyajin 3 (Mini) (DAIMA)]",
    "description": "¡El nuevo Vegeta Super Saiyajin 3 (Mini) (DAIMA) SSR hace acto de presencia en el Festival DOKKAN! ¡No te pierdas su animación de aparición tras realizar el Despertar Dokkan!",
    "startDate": "¡El nuevo Vegeta Super Saiyajin 3 (Mini) (DAIMA) SSR hace acto de presencia en el Festival DOKKAN! ¡No te pierdas su animación de aparición tras realizar el Despertar Dokkan!",
    "endDate": "Comienza en: 3/3/2025\n                               11:00:00 p.m.\n                               hora estándar central El termina en: 18/3/2025\n                               1:59:59 a.m.\n                               hora estándar central"
  },
  {
    "id": "11490",
    "image": "/assets/global/es/ingame/banners/gasha_top_banner_11490.png",
    "title": "Festival DOKKAN: Invocación de Ticket [Vegeta Super Saiyajin 3 (Mini) (DAIMA)]",
    "description": "Festival DOKKAN: Invocación de Ticket ¡El nuevo Vegeta Super Saiyajin 3 (Mini) (DAIMA) está aquí! ¡Dos Monedas del Festival Dokkan (limitada) 4 por Invocación Múltiple!",
    "startDate": "Festival DOKKAN: Invocación de Ticket ¡El nuevo Vegeta Super Saiyajin 3 (Mini) (DAIMA) está aquí! ¡Dos Monedas del Festival Dokkan (limitada) 4 por Invocación Múltiple!",
    "endDate": "Comienza en: 3/3/2025\n                               11:00:00 p.m.\n                               hora estándar central El termina en: 25/3/2025\n                               1:59:59 a.m.\n                               hora estándar central"
  },
  {
    "id": "11492",
    "image": "/assets/global/es/ingame/banners/gasha_top_banner_11128.png",
    "title": "Invocación Ritual misterioso",
    "description": "¡Solo 4 veces! ¡Invocación \"Ritual Misterioso\"! ¡Usa 25 Piedras de Dragón para invocar 5 Kaioshin Anciano!",
    "startDate": "¡Solo 4 veces! ¡Invocación \"Ritual Misterioso\"! ¡Usa 25 Piedras de Dragón para invocar 5 Kaioshin Anciano!",
    "endDate": "Comienza en: 3/3/2025\n                               11:00:00 p.m.\n                               hora estándar central El termina en: 17/3/2025\n                               10:59:59 p.m.\n                               hora estándar central"
  }
]


export default function Home() {
  const [loalding, setLoading] = useState(false);
  const [cards, setCards] = useState<ICharacterCard[]>(dataDefault);
  const [banners, setBanners] = useState<IBannerData[]>(bannersDefault);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/cards/recents");
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
      <div className="border border-[--blue-border-color] rounded-md">
        <h2 className="flex items-center justify-start gap-4 py-2 pl-4 w-full text-center font-bold text-2xl border-b-[1px] border-b-[--blue-border-color] bg-[linear-gradient(to_right,var(--blue-color),var(--blue-opacity-color))]"><FiClock />Cartas Recientes</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(125px,1fr))] content-start gap-4  w-[calc(100svw-2em)]   max-w-screen-xl p-2">
          {cards.map(card => (
            <CardCharacter key={card.character} card={{ ...card, hasDate: false }} />
          ))}
        </div>
      </div>
      <div className="border border-[--blue-border-color] rounded-md">
        <h2 className="flex items-center justify-start gap-4 py-2 pl-4 w-full text-center font-bold text-2xl border-b-[1px] border-b-[--blue-border-color] bg-[linear-gradient(to_right,var(--blue-color),var(--blue-opacity-color))]"><FiClock />Banners Recientes</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] content-start gap-4  w-[calc(100svw-2em)]   max-w-screen-xl p-2">
          {banners.map(banner => (
            <a key={banner.id} href={`/banner/${banner.id}`} className="flex flex-col items-center justify-start gap-4 p-2 border border-[--orange-border-color] rounded-md">
              <Image src={URL_API.concat(banner.image)} width={340} height={259} alt="Fondo de banner de dokkan" />
              <h3 className="text-base font-semibold text-balance text-center bg-[--orange-opacity-color] px-2 py-1 w-full rounded-sm">{banner.title}</h3>
              <p className="text-sm bg-[--blue-opacity-color] p-2">{banner.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
