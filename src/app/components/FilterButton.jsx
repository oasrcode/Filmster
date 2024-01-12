"use client";

import { useState } from "react";

const arrowDown = () => {
  return (
    <svg fill="white" height="20px" width="20px" viewBox="0 0 330 330">
      <path
        d="M216.358,271.76c-2.322-5.605-7.792-9.26-13.858-9.26H180V15c0-8.284-6.716-15-15-15
c-8.284,0-15,6.716-15,15v247.5h-22.5c-6.067,0-11.537,3.655-13.858,9.26c-2.321,5.605-1.038,12.057,3.252,16.347l37.5,37.5
C157.322,328.536,161.161,330,165,330s7.678-1.464,10.607-4.394l37.5-37.5C217.396,283.816,218.68,277.365,216.358,271.76z"
      />
    </svg>
  );
};
const arrowUp = () => {
  return (
    <svg fill="white" height="20px" width="20px" viewBox="0 0 330 330">
      <path
        d="M213.107,41.894l-37.5-37.5c-5.857-5.858-15.355-5.858-21.213,0l-37.5,37.5
c-4.29,4.29-5.573,10.742-3.252,16.347c2.322,5.605,7.792,9.26,13.858,9.26H150V315c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15
V67.5h22.5c6.067,0,11.537-3.655,13.858-9.26C218.68,52.635,217.397,46.184,213.107,41.894z"
      />
    </svg>
  );
};

export default function FilterButton({ callback, sortDirection }) {
  const [open, setOpen] = useState();
  return (
    <>
      {" "}
      <button
        type="button"
        className="flex flex-row items-center justify-evenly w-24 h-auto  border border-white rounded-md p-1 hover:scale-105 hover:bg-[#2c2c6d] mr-3 lg:mr-0"
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
            className="px-5 py-1 rounded-md border border-white text-white font-semibold  hover:bg-[#222252]"
            onClick={() => {
              callback("title");
              setOpen(false);
            }}
          >
            <span className="flex flex-row gap-4">
              {" "}
              Título
              {sortDirection.title == "asc" ? arrowUp() : arrowDown()}
            </span>
          </button>{" "}
          <button
            className="px-5 py-1 rounded-md border border-white text-white font-semibold  hover:bg-[#222252]"
            onClick={() => {
              callback("date");
              setOpen(false);
            }}
          >
            <span className="flex flex-row gap-4">
              {" "}
              Fecha
              {sortDirection.date == "asc" ? arrowUp() : arrowDown()}
            </span>
          </button>
          <button
            className="py-1 rounded-md border border-white text-white font-semibold  hover:bg-[#222252]"
            onClick={() => {
              callback("score"), setOpen(false);
            }}
          >
            <span className="flex flex-row  mx-2">
              {" "}
              Puntuación
              {sortDirection.score == "asc" ? arrowUp() : arrowDown()}
            </span>
          </button>
        </div>
      ) : null}
    </>
  );
}
