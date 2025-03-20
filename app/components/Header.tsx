import { ColorModeButton } from "@components/ui/color-mode";

export default function Header() {
    return (
        <header className="flex justify-between bg-(--background) items-center p-4">
            <h1 className="text-2xl ">DOKKAN BATTLE</h1>
            <nav className="flex gap-4">
            </nav>
            <ColorModeButton />
        </header>
    );
}