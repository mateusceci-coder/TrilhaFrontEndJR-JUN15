import { Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { UserRoundPen, BookUser, Trophy } from 'lucide-react';


export const links = [
  { href: "#profile", label: "Perfil", icon: UserRoundPen },
  { href: "#about", label: "Sobre", icon: BookUser },
  { href: "#motivation", label: "Motivação", icon: Trophy },
];

const Sidebar = () => {
  return (
    <nav className="hidden fixed top-0 left-0 px-2 py-10 bg-red-primary md:grid grid-rows-[auto,1fr,auto] min-h-full w-64">
      <div className="flex justify-center">
      <Sun size={32} />
      </div>
      <div>
        <ul className="flex flex-col gap-1 mt-24">
          {links.map(({ href, label, icon: Icon }) => (
            <Link href={href} key={`${label}`}>
              <li className="hover:bg-red-600 text-lg flex justify-center items-center gap-2 p-3 rounded-xl hover:cursor-pointer">
                 {label} <Icon size={16} />
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex gap-3 justify-center">
        <Image
          src="/linkedin.png"
          alt="linkedin"
          width={40}
          height={40}
          className="w-12 h-12"
        />
        <Image
          src="/github.png"
          alt="linkedin"
          width={40}
          height={40}
          className="w-12 h-12"
        />
        <Image
          src="/whatsapp.png"
          alt="linkedin"
          width={40}
          height={40}
          className="w-12 h-12"
        />
      </div>
    </nav>
  );
};

export default Sidebar;
