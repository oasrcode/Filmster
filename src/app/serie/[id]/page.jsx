import { GetPoster, IMAGE_SIZES } from "@/app/config/FetchConfig";

import Link from "next/link";
import { getSerieByID } from "@/app/service/SerieService";

export default async function DetailsSerie({ params }) {
  const { id } = params;

  const film = await getSerieByID(id);

  return (
    // <div className="flex flex-col w-full h-[865px] " id="loadingFilm">

    //   <img id="loadingImg"
    //     className="hidden md:block object-cover object-top h-[865px] "
    //     src={GetPoster(film.backdrop_path, IMAGE_SIZES.backdrop_sizes.original)}
    //     alt={film.title}
    //   />

    //   <div id="filterDetailPage" className="absolute flex-1 w-full  h-[865px]"></div>
    //   <div className="absolute bottom-10  md:w-[700px] h-auto ml-10">
    //     <div className="flex w-full h-full items-end">
    //       <img
    //         className="object-cover rounded-md w-52"
    //         src={GetPoster(film.poster_path, IMAGE_SIZES.poster_sizes.w342)}
    //         alt={film.title}
    //       />

    //       <div className="w-full h-full pl-10">
    //         <div className="flex flex-row  items-end justify-start space-x-4 w-auto  mb-6">
    //           <p className="text-lg border-2 rounded-md p-1">
    //             {(Math.round(film.vote_average * 100) / 100).toFixed(1)}
    //           </p>
    //           <p className="text-md w-full">{film.vote_count + " votos"}</p>
    //         </div>
    //         <h1 className="text-4xl font-bold">{film.title}</h1>
    //         <h2 className="text-xl mt-4">
    //           {film.genres.map((genre) => genre.name).join(", ")}
    //         </h2>
    //         <p className="text-xl mt-2">{`${new Date(
    //           film.release_date
    //         ).getFullYear()}  ·  ${film.runtime} minutos`}</p>
    //       </div>
    //     </div>
    //     <p className="text-xl mt-10 text-gray-200 w-auto">{film.overview}</p>
    //   </div>

    // </div>
    <div className="w-full h-screen flex flex-col">
      <img
        id="loadingImg"
        className="object-cover object-top h-[300px] md:h-[866px] "
        src={GetPoster(film.backdrop_path, IMAGE_SIZES.backdrop_sizes.original)}
        alt={film.title}
      />
      <div
        id="filterDetailPage"
        className="hidden md:block absolute flex-1 w-full h-[866px]"
      ></div>
    </div>
  );
}
