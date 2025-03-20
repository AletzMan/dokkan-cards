
import { IconButton } from "@chakra-ui/react";
import { CloseButton, Drawer, Portal } from "@chakra-ui/react"

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

            <Drawer.Root size="sm">
                <Drawer.Trigger asChild>
                    <IconButton className="border border-gray-400" size="sm" variant="outline">
                        <Image style={{ filter: "invert(1)" }} src="/menu_icon.webp" width={35} height={35} alt="Logo de dragon ball japones" />
                    </IconButton>
                </Drawer.Trigger>
                <Portal>
                    <Drawer.Backdrop />
                    <Drawer.Positioner>
                        <Drawer.Content>
                            <Drawer.Header className="flex justify-between items-center">
                                <Drawer.Title>Menu</Drawer.Title>
                                <Drawer.CloseTrigger asChild>
                                    <CloseButton size="sm" />
                                </Drawer.CloseTrigger>
                            </Drawer.Header>
                            <Drawer.Body>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Drawer.Body>
                            <Drawer.Footer>
                                <Image className=" " style={{ filter: "invert(1)" }} src="/logo.png" width={60} height={600} alt="Logo de Goku" />
                            </Drawer.Footer>
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Portal>
            </Drawer.Root>
        </header>
    );
}