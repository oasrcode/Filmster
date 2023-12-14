"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/vercel.svg";
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
    <header className="sticky  h-24 min-w-full">
      <nav className="flex flex-row items-center w-full h-full">
        <Image
          className="ml-4 w-20 lg:ml-10 lg:w-40"
          src={logo}
          alt="logo"
          height={100}
          width={100}
        />
        <ul className="relative flex flex-row ml-10 space-x-10">
          {Links.map(({ label, route }) => (
            <li key={route} className="text-lg">
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <input type="search" placeholder="busca tus películas" />
      </div>
    </header>
  );
}
