import Header from "@/components/Header";
import { Button, Input } from "@chakra-ui/react";


export default function Home() {
  return (
    <section className="flex flex-col bg-(--background) items-center justify-items-center min-h-svh px-4 pb-4 gap-16 font-[family-name:var(--font-jost)]">
      <Header />
      <Button variant="solid" colorPalette="cyan" >Get Cards</Button>
      <Input placeholder="Enter name" />

    </section>
  );
}
