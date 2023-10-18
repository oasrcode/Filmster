"use client";
import Link from "next/link";
import SearchButton from "./SearchButton";
import SearchDialog from "./SearchDialog";
import { useState } from "react";

const Links = [
  {
    label: "Inicio",
    route: "/",
  },
  // {
  //   label: "Peliculas",
  //   route: "/films",
  // },
  // {
  //   label: "Series",
  //   route: "/series",
  // },
];

export default function NavBar() {
  const [openDialog, setOpenDialog] = useState(false);

  function onHandleDialog() {
    setOpenDialog(!openDialog);
  }
  return (
    <header>
      <nav className="flex flex-row items-center justify-end  h-24 min-w-full">
        <ul className="relative flex flex-row justify-center items-center space-x-12 mr-40">
          {Links.map(({ label, route }) => (
            <li key={route} className="text-2xl">
              <Link href={route}>{label}</Link>
            </li>
          ))}
          <SearchButton onHandleDialog={onHandleDialog} />
        </ul>
      </nav>

      <SearchDialog isOpen={openDialog} onHandleDialog={onHandleDialog} />
    </header>
  );
}
