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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="w-60 text-black pl-3 h-10 rounded-md ring-0 focus:outline-none"
          type="search"
          onChange={(e) => setInputText(e.target.value)}
        />
      </form>
    </div>
  );
}
