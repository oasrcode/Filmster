import Image from "next/image";
import Link from "next/link";
import logo from "/public/vercel.svg";

import SearchBar from "./SearchBar";
const Links = [
  {
    label: "Inicio",
    route: "/",
  },
];

export default function NavBar() {
  return (
    <header className="sticky flex flex-row items-center justify-between top-0 left-0 backdrop-blur-[2px] z-50 h-24 xl:mx-20">
      <nav className="flex flex-row items-center justify-start h-full w-full ">
        <ul className="relative xl:flex flex-row ml-10 space-x-10 mr-20">
          {Links.map(({ label, route }) => (
            <li key={route} className="text-lg">
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <SearchBar />
    </header>
  );
}
