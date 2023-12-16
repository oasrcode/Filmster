import Image from "next/image";
import Link from "next/link";
import logo from "/public/vercel.svg";
import menu_logo from "/public/vercel.svg";
import SideMenu from "./SideMenu";
const Links = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Peliculas",
    route: "/films",
  },
];

export default function NavBar() {
  return (
    <header className="sticky h-24 xl:mx-20">
      <nav className="flex flex-row items-center justify-start h-full w-full ">
        <Image className="ml-3 xl:ml-0" src={logo} alt="logo" height={100} width={100} />
        <ul className="hidden relative xl:flex flex-row ml-10 space-x-10 mr-20">
          {Links.map(({ label, route }) => (
            <li key={route} className="text-lg">
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
        <SideMenu />
      </nav>
    </header>
  );
}
