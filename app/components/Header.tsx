import { ColorModeButton } from "@components/ui/color-mode";

export default function Header() {
    return (
        <header className="flex justify-between bg-[--chakra-colors-bg-subtle] items-center w-full p-4 border-b-[1px] border-b-[--chakra-colors-border-emphasized]">
            <h1 className="text-2xl text-[--chakra-colors-bg-inverted] font-bold">DOKKAN BATTLE</h1>
            <nav className="flex gap-4">
            </nav>
            <ColorModeButton />
        </header>
    );
}