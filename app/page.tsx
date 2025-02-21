"use client"
import Header from "@/components/Header";
import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { CardDetails } from "./interfaces/card";
import Image from "next/image";
import { Rarity } from "./api/constants/enum";


export default function Home() {
  const [cards, setCards] = useState<CardDetails[]>([]); //

  const handleGetCards = async () => {
    const response = await fetch("/api/cards");
    const data = await response.json();
    console.log(data.data);
    setCards(data.data);
  }

  return (
    <section className="flex flex-col bg-(--background) items-center justify-items-center min-h-svh px-4 pb-4 gap-16 font-[family-name:var(--font-jost)]">
      <Header />
      <Button variant="solid" colorPalette="cyan" onClick={handleGetCards}>Get Cards</Button>
      <Input placeholder="Enter name" />
      {cards.map((card => (
        <div key={card.card.id}>
          <Image src={`https://dokkan.wiki/assets/global/en/character/thumb/card_${card.card.leader_skill_set_id}0_thumb.png`} alt={`Image of ${card.card.name}`} width={100} height={100} />
          <Image src={`https://dokkan.wiki/assets/global/en/layout/en/image/character/character_thumb_bg/cha_base_0${card.card.element.toString().split("")[1]}_04.png`} alt={`Image of ${card.card.name}`} width={100} height={100} />
          <Image src={`https://dokkan.wiki/assets/global/en/layout/en/image/character/cha_type_icon_${card.card.element}.png`} alt={`Image of ${card.card.name}`} width={100} height={100} />
          <Image src={`https://dokkan.wiki/assets/global/en/layout/en/image/character/cha_rare_sm_${Rarity[card.card.rarity]}.png`} alt={`Image of ${card.card.name}`} width={50} height={50} />
          <div>
            <h2>{card.card.name}</h2>
            <p>{card.card.title}</p>
            <p>{card.card.passive_skill_name}</p>
            <p>{card.card.passive_skill_desc}</p>
          </div>
        </div>
      )))

      }
    </section>
  );
}
