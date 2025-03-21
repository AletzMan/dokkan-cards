"use client"
import { useState } from "react";
import { IBannerData, ICharacterCard, INewData } from "./types";
import { CardCharacter } from "./components/CardCharacter/CardCharacter";
import Image from "next/image";
import { HeaderTitle } from "./components/HeaderTitle";
import { EventCard } from "./components/EventCard";
import { Section } from "./components/Section";


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
    "id": 11494,
    "image": "/assets/global/es/ingame/banners/gasha_top_banner_11494.png",
    "title": "Festival DOKKAN [Goku (niño)]",
    "description": "¡Solo 318 horas! ¡Realiza 3 Invocaciones Múltiples para obtener una gratuita! ¡El nuevo Goku (niño) SSR hace acto de presencia!",
    "startDate": "Del: 18/3/2025\n                               12:18:00 a.m.\n                               CST",
    "endDate": "Al: 31/3/2025\n                               6:17:59 a.m.\n                               CST"
  },
  {
    "id": 11500,
    "image": "/assets/global/es/ingame/banners/gasha_top_banner_11500.png",
    "title": "Festival DOKKAN: Invocación de Ticket [Goku (niño)]",
    "description": "Festival DOKKAN: Invocación de Ticket ¡El nuevo Goku (niño) SSR hace acto de presencia! ¡Un personaje SSR garantizado por Invocación Múltiple!",
    "startDate": "Del: 18/3/2025\n                               12:18:00 a.m.\n                               CST",
    "endDate": "Al: 10/4/2025\n                               1:59:59 a.m.\n                               CST"
  },
  {
    "id": 11502,
    "image": "/assets/global/es/ingame/banners/gasha_top_banner_11128.png",
    "title": "Invocación Ritual misterioso",
    "description": "¡Solo 4 veces! ¡Invocación \"Ritual Misterioso\"! ¡Usa 25 Piedras de Dragón para invocar 5 Kaioshin Anciano!",
    "startDate": "Del: 17/3/2025\n                               11:00:00 p.m.\n                               CST",
    "endDate": "Al: 31/3/2025\n                               10:59:59 p.m.\n                               CST"
  },
  {
    "id": 11460,
    "image": "/assets/global/es/ingame/banners/gasha_top_banner_11460.png",
    "title": "Festival DOKKAN [Vegeta Super Saiyajin 3 (Mini) (DAIMA)]",
    "description": "¡El nuevo Vegeta Super Saiyajin 3 (Mini) (DAIMA) SSR hace acto de presencia en el Festival DOKKAN! ¡No te pierdas su animación de aparición tras realizar el Despertar Dokkan!",
    "startDate": "Del: 3/3/2025\n                               11:00:00 p.m.\n                               CST",
    "endDate": "Al: 18/3/2025\n                               1:59:59 a.m.\n                               CST"
  },
  {
    "id": 11490,
    "image": "/assets/global/es/ingame/banners/gasha_top_banner_11490.png",
    "title": "Festival DOKKAN: Invocación de Ticket [Vegeta Super Saiyajin 3 (Mini) (DAIMA)]",
    "description": "Festival DOKKAN: Invocación de Ticket ¡El nuevo Vegeta Super Saiyajin 3 (Mini) (DAIMA) está aquí! ¡Dos Monedas del Festival Dokkan (limitada) 4 por Invocación Múltiple!",
    "startDate": "Del: 3/3/2025\n                               11:00:00 p.m.\n                               CST",
    "endDate": "Al: 25/3/2025\n                               1:59:59 a.m.\n                               CST"
  },
  {
    "id": 11492,
    "image": "/assets/global/es/ingame/banners/gasha_top_banner_11128.png",
    "title": "Invocación Ritual misterioso",
    "description": "¡Solo 4 veces! ¡Invocación \"Ritual Misterioso\"! ¡Usa 25 Piedras de Dragón para invocar 5 Kaioshin Anciano!",
    "startDate": "Del: 3/3/2025\n                               11:00:00 p.m.\n                               CST",
    "endDate": "Al: 17/3/2025\n                               10:59:59 p.m.\n                               CST"
  }
]

const newsDataDefault: INewData[] = [
  {
    "id": 104478,
    "image": "/assets/global/es/ingame/news/ES_news_banner_adventure_38_2_small.png",
    "title": "¡Nuevos niveles añadidos en Área 38 de Aventura Historia Dokkan!",
    "description": "¡Los nuevos niveles 5 a 8 ya están disponibles!<br> ¡Reúne el tesoro \"Gema insólita\" para <br> intercambiar por objetos y mucho más!",
    "date": "Comienza: 20/3/2025\n                               8:00:00 p.m.\n                               CST"
  },
  {
    "id": 105876,
    "image": "/assets/global/es/ingame/news/ES_news_banner_plain_camp_20250321_small.png",
    "title": "Aventura Dokkan: Campaña de gran batalla del destino Parte 5",
    "description": "¡Parte 5 de la campaña que anima mucho más el modo <br> Aventura, ya disponible! ¡Obtén un regalo con el primer <br> inicio de sesión durante el periodo del evento!",
    "date": "Comienza: 20/3/2025\n                               8:00:00 p.m.\n                               CST"
  },
  {
    "id": 105877,
    "image": "/assets/global/es/ingame/news/ES_news_banner_adventure_29_A_small.png",
    "title": "¡Se han añadido objetos intercambiables con Gemas insólitas!",
    "description": "¡Las Medallas del Despertar de <br> [Final de la tragedia recurrente] Bardock supersaiyajin <br> están disponibles en el Mercado de Baba!",
    "date": "Comienza: 20/3/2025\n                               8:00:00 p.m.\n                               CST"
  },
  {
    "id": 105867,
    "image": "/assets/global/es/ingame/news/ES_news_banner_small.png",
    "title": "¡Información sobre próximos contenidos!",
    "description": null,
    "date": "Comienza: 20/3/2025\n                               2:00:00 a.m.\n                               CST"
  },
  {
    "id": 102220,
    "image": "/assets/global/es/ingame/news/ES_news_banner_event_567_small.png",
    "title": "¡Evolución grandiosa! El saiyajin rutilante en la galaxia",
    "description": "¡Modo Burst disponible!<br> ¡Alcanza una alta puntuación para obtener canciones!",
    "date": "Comienza: 19/3/2025\n                               11:00:00 p.m.\n                               CST"
  },
  {
    "id": 105868,
    "image": "/assets/global/es/ingame/news/ES_news_banner_event_zbattle_172_small.png",
    "title": "¡Lucha Z Extrema ya disponible!",
    "description": "¡Desafía a Goku (niño)!<br> ¡Consigue la victoria en esta Lucha Z Extrema <br> para obtener Medallas del Despertar!",
    "date": "Comienza: 19/3/2025\n                               11:00:00 p.m.\n                               CST"
  }
]


export default function Home() {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState<ICharacterCard[]>(dataDefault);
  const [banners, setBanners] = useState<IBannerData[]>(bannersDefault);
  const [news, setNews] = useState<INewData[]>(newsDataDefault);


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
    <Section>
      <div className="relative">
        <Image style={{ maskImage: "linear-gradient(black 60%, transparent)" }} src="/background.webp" width={500} height={400} alt="Fondo dragon ball personajes" />
        <Image className="absolute -bottom-[10%] left-[25%] w-[50%]" src="/logo_dokkan.webp" width={300} height={200} alt="Fondo dragon ball personajes" />
      </div>
      {/*<Button onClick={getData} loading={loalding}>Scrapear</Button>*/}
      <HeaderTitle title="Cartas Recientes" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(125px,1fr))] content-start place-items-center gap-4  w-[calc(100svw-2em)]   max-w-screen-xl p-2">
        {cards.map(card => (
          <CardCharacter key={card.character} card={{ ...card, hasDate: false }} />
        ))}
      </div>
      <HeaderTitle title="Banners Recientes" />
      {<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-screen-xl">
        {banners.map(banner => (
          <EventCard key={banner.id} banner={banner} />
        ))}
      </div>}
      <HeaderTitle title="Ultimas Noticias" />
      {<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-screen-xl">
        {news.map(banner => (
          <EventCard key={banner.id} banner={banner} aspect_ratio="16/8" />
        ))}
      </div>}
    </Section>
  );
}
