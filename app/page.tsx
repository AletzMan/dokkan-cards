"use client"
import Header from "@components/Header";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { IBannerData, ICharacterCard } from "./types";
import { CardCharacter } from "./components/CardCharacter/CardCharacter";
import { FiClock } from "react-icons/fi";
import Image from "next/image";
import { URL_API } from "./constants";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { GiSparkles } from "react-icons/gi";


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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeSlide = (newIndex: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 500); // Match this with CSS transition duration
  };

  const nextBanner = () => {
    const newIndex = (currentIndex + 1) % banners.length;
    changeSlide(newIndex);
  };

  const prevBanner = () => {
    const newIndex = (currentIndex - 1 + banners.length) % banners.length;
    changeSlide(newIndex);
  };

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
    <section className="flex flex-col items-center justify-items-center pb-4 mt-[53px] gap-8 font-[family-name:var(--font-jost)] h-[calc(100svh-55px)] scrollbar bg-[radial-gradient(ellipse_at_bottom,rgba(83,196,255,0.5)0%,rgba(43,166,255,0)100%)]">
      <div className="relative">
        <Image style={{ maskImage: "linear-gradient(black 60%, transparent)" }} src="/background.webp" width={500} height={400} alt="Fondo dragon ball personajes" />
        <Image className="absolute -bottom-[10%] left-[25%] w-[50%]" src="/logo_dokkan.webp" width={300} height={200} alt="Fondo dragon ball personajes" />
      </div>
      {/*<Button onClick={getData} loading={loalding}>Scrapear</Button>*/}
      <h2 className="relative flex items-center justify-center gap-4 py-4 pl-4 w-full max-w-screen-xl text-center font-bold text-2xl border-b-[1px] border-b-[--blue-border-color] ">Cartas Recientes<span className="absolute text-white/5 text-7xl">Cartas Recientes</span></h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(125px,1fr))] content-start gap-4  w-[calc(100svw-2em)]   max-w-screen-xl p-2">
        {cards.map(card => (
          <CardCharacter key={card.character} card={{ ...card, hasDate: false }} />
        ))}
      </div>
      <h2 className="relative flex items-center justify-center gap-4 py-4 pl-4 w-full max-w-screen-xl text-center font-bold text-2xl border-b-[1px] border-b-[--blue-border-color] ">Banners Recientes<span className="absolute text-white/5 text-7xl">Banners Recientes</span></h2>
      <div className="min-h-screen   text-white w-full max-w-screen-xl">

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 ">
          {/* Banner Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute w-full h-full bg-[linear-gradient(0deg,#000000,transparent)] z-[2]"></div>
              <div className="absolute w-full h-full bg-[linear-gradient(90deg,#000000,transparent_30%)] z-[2]"></div>
              <div className="absolute w-full h-full bg-[linear-gradient(-90deg,#000000,transparent_30%)] z-[2]"></div>
              <div className={`absolute inset-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                <Image
                  src={URL_API.concat(banners[currentIndex].image)}
                  alt={banners[currentIndex].title}
                  width={640} height={360}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-[3]">
                  <h2 className="text-3xl font-bold text-[#ffd700] mb-2">
                    {banners[currentIndex].title}
                  </h2>
                  <p className="text-lg text-gray-200">
                    {banners[currentIndex].description}
                  </p>
                  <p className="text-sm text-[#ff9b00] mt-2">
                    {banners[currentIndex].startDate}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevBanner}
              disabled={isTransitioning}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm px-1 py-4 rounded-l-md hover:bg-[--orange-opacity-color] hover:text-[--orange-color] transition-colors disabled:opacity-50 z-[3]"
            >
              <BiLeftArrow />
            </button>
            <button
              onClick={nextBanner}
              disabled={isTransitioning}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 px-1 py-4 rounded-r-md hover:bg-[--orange-opacity-color] hover:text-[--orange-color] transition-colors disabled:opacity-50 z-[3]"
            >
              <BiRightArrow />
            </button>
          </div>

          {/* Banner Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {banners.map((_, index) => (
              <button
                key={index}
                disabled={isTransitioning}
                onClick={() => changeSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-[#ffd700]' : 'bg-gray-600'
                  } disabled:opacity-50`}
              />
            ))}
          </div>
        </main>
      </div>
      {/*<div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] content-start gap-4  w-[calc(100svw-2em)]   max-w-screen-xl p-2">
          {banners.map(banner => (
            <a key={banner.id} href={`/banner/${banner.id}`} className="flex flex-col items-center justify-start gap-4 p-2 border border-[--orange-border-color] rounded-md hover:border-[--orange-color] bg-[--orange-opacity-color]">
              <h3 className="flex justify-center items-center text-base font-semibold text-balance text-center bg-[--blue-background-color] px-2 py-1 w-full rounded-sm min-h-20">{banner.title}</h3>
              <Image src={URL_API.concat(banner.image)} width={340} height={259} alt="Fondo de banner de dokkan" />
              <p className="text-sm bg-[--blue-opacity-color] p-2">{banner.description}</p>
            </a>
          ))}
        </div>*/}
    </section>
  );
}
