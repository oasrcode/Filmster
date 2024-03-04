"use client";
import { useRouter } from "next/navigation";
export default function TrailerButton({ prop, path }) {
  const router = useRouter();
  function navigateToTrailer() {
    router.replace(`/${path}/${prop}/trailer`);
  }
  return (
    <>
      <button
        type="button"
        className="relative  bg-neutral-300 hover:bg-neutral-50 hover:scale-105  text-black rounded-md"
        title="Ver trailer"
        onClick={navigateToTrailer}
      >
        <svg width="50px" height="50px" viewBox="0 0 1024 1024" >
          <path
            d="M892.9 145.2H130.1c-33.5 0-60.7 27.2-60.7 60.7v503.4c0 33.4 27.2 60.7 60.7 60.7h762.8c33.5 0 60.7-27.2 60.7-60.7V205.8c0-33.4-27.3-60.6-60.7-60.6z m8.7 564.1c0 4.8-3.9 8.7-8.7 8.7H130.1c-4.8 0-8.7-3.9-8.7-8.7V205.8c0-4.8 3.9-8.7 8.7-8.7h762.8c4.8 0 8.7 3.9 8.7 8.7v503.5zM719.3 823.9h-416c-14.4 0-26 11.6-26 26s11.6 26 26 26h416.1c14.4 0 26-11.6 26-26s-11.7-26-26.1-26z m-83.2-384.8l-173.4-104c-8-4.8-18-4.9-26.2-0.3-8.1 4.6-13.2 13.3-13.2 22.6v208c0 9.4 5 18 13.2 22.6 4 2.3 8.4 3.4 12.8 3.4 4.6 0 9.3-1.3 13.4-3.7l173.4-104c7.8-4.7 12.6-13.2 12.6-22.3 0-9.1-4.8-17.6-12.6-22.3z"
            fill="#11111"
          />
        </svg>
      </button>
    </>
  );
}
