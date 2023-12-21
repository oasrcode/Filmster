"use client";

import { useState } from "react";

export default function FilterButton({ callback }) {
  const [open, setOpen] = useState();
  return (
    <>
      {" "}
      <button
        type="button"
        class="flex flex-row items-center justify-evenly w-24 h-auto  border border-white rounded-md p-1 hover:scale-105 hover:bg-[#2c2c6d] mr-3 lg:mr-0"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
      >
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z"
            fill="white"
          />
        </svg>
        <span className="text-white font-semibold">Ordenar</span>
      </button>
      {open ? (
        <div className="absolute z-50 flex flex-col items-center justify-evenly mt-48 w-36 h-36 bg-[#060613] rounded-md border border-white mr-3 lg:mr-0">
          <button
            className="px-10 py-1 rounded-md border border-white text-white font-semibold  hover:bg-[#222252]"
            onClick={() => {
              callback("title");
              setOpen(false);
            }}
          >
            Título
          </button>{" "}
          <button
            className="px-10 py-1 rounded-md border border-white text-white font-semibold  hover:bg-[#222252]"
            onClick={() => {
              callback("date");
              setOpen(false);
            }}
          >
            Fecha
          </button>
          <button
            className="px-5 py-1 rounded-md border border-white text-white font-semibold  hover:bg-[#222252]"
            onClick={() => {
              callback("score"), setOpen(false);
            }}
          >
            Puntuación
          </button>
        </div>
      ) : null}
    </>
  );
}
