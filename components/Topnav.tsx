import { Menu, Sun } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { links } from "./Sidebar";
import Link from "next/link";
import Image from "next/image";
import ToggleTheme from "./ToggleTheme";

const Topnav = () => {
  return (
    <div className="flex fixed right-0 top-0 md:hidden p-4 w-full justify-between items-center z-10">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Menu />
          </MenubarTrigger>
          <MenubarContent className="bg-red-primary">
            {links.map(({ href, label, icon: Icon }) => (
              <Link href={href} key={`${label}`}>
                <MenubarItem className="text-lg flex gap-2">
                  {label} <Icon size={16} />
                </MenubarItem>
              </Link>
            ))}
            <MenubarItem className="flex gap-2">
              <Link href="https://www.linkedin.com/in/mateusceci-coder/">
                <Image
                  src="/linkedin.png"
                  alt="linkedin"
                  width={40}
                  height={40}
                  className="w-8 h-8"
                />
              </Link>
              <Link href="https://github.com/mateusceci-coder">
                <Image
                  src="/github.png"
                  alt="linkedin"
                  width={40}
                  height={40}
                  className="w-8 h-8"
                />
              </Link>
              <Link href="https://wa.me/5548991820135">
                <Image
                  src="/whatsapp.png"
                  alt="linkedin"
                  width={40}
                  height={40}
                  className="w-8 h-8"
                />
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <ToggleTheme />
    </div>
  );
};

export default Topnav;
