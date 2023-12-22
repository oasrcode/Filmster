"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [inputText, setInputText] = useState("");
 
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    router.replace(`/busqueda/${inputText}`);
  }

  return (
    <div className="absolute right-5 lg:right-0  top-5">
      <form onSubmit={handleSubmit} >
        <input
          type="search"
          className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none  focus:w-full focus:cursor-text focus:border-neutral-300 focus:lg:pl-60 focus:pl-32  focus:pr-4"
          onChange={(e) => setInputText(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-y-0 my-auto ml-0.5 h-8 w-12 border-r border-transparent stroke-white px-auto peer-focus:border-white peer-focus:stroke-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </form>
    </div>
  );
}
