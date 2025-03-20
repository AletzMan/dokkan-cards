import { ColorModeButton } from "@components/ui/color-mode";
import Image from "next/image"

export default function Header() {
    return (
        <header className="fixed top-0 z-10 flex justify-between bg-[linear-gradient(45deg,var(--chakra-colors-bg),var(--chakra-colors-bg-emphasized))] items-center w-full px-4 py-2  border-b-[1px] border-b-[--chakra-colors-border-emphasized] overflow-hidden">
            <h1 className="text-xl text-[--chakra-colors-bg-inverted] font-bold pl-14">
                DOKKAN BATTLE
            </h1>
            <Image className="absolute -left-10 opacity-100" style={{ filter: "invert(1)" }} src="/logo.png" width={120} height={120} alt="Logo de Goku" />
            <nav className="flex gap-4">
            </nav>
            <ColorModeButton />
        </header>
    );
}