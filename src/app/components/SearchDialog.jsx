"use client";
import { useState } from "react";
import { getFilmBySearch } from "../Service/FilmService";

import CardSearch from "./CardSearch";
export default function SearchDialog({ isOpen, onHandleDialog }) {
  const [inputValue, setInputValue] = useState("");
  const [timer, setTimer] = useState(null);
  const [films, setFilms] = useState([]);
  const [displayDialog, setDisplayDialog] = useState(false);

  function Search() {
    if (inputValue.length < 5 || /^\s*$/.test(inputValue)) {
      setDisplayDialog(false);
      setFilms([]);
      return;
    }

    getFilmBySearch(inputValue).then(
      (response) => {
        if (response.results.length>0) {
          setFilms(response.results);
          setDisplayDialog(true);
        } else {
          setDisplayDialog(false);
          setFilms([]);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);

    const searchTimer = setTimeout(() => {
      Search(inputValue);
    }, 1500);

    setTimer(searchTimer);
  };

  return (
    <div
      className={
        isOpen
          ? "absolute top-32 left-0 right-0 mx-auto w-[900px] h-[900px] z-50"
          : "hidden"
      }
    >
      <div className="flex flex-row left-0 right-0 mx-auto  h-40 bg-white items-center justify-evenly rounded-lg">
        <span>
          <svg
            className="fill-none stroke-black hover:fill-amber-400 ml-10"
            width="45px"
            height="45px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <input
          value={inputValue}
          type="text"
          placeholder="Busca tu película o serie ..."
          className="py-8 w-full mx-20  focus:outline-none text-black text-4xl  placeholder:text-4xl pt-10"
          spellCheck="true"
          onChange={handleInputChange}
        />
      </div>
      <div
        className={
          displayDialog
            ? "w-full h-[900px] bg-white -mt-2  overflow-y-scroll space-y-2 scroll-smooth"
            : "hidden"
        }
      >
        {films?.map((film, index) => (
          <CardSearch
            key={film.id}
            film={film}
            onHandleDialog={onHandleDialog}
          />
        ))}
      </div>
    </div>
  );
}
