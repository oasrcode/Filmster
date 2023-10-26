import { GetPoster, IMAGE_SIZES } from "@/app/Config/FetchConfig";
import { getFilmByID } from "../../Service/FilmService";
import Link from "next/link";

export default async function DetailsFilm({ params }) {
  const { id } = params;

  const film = await getFilmByID(id);

  return (
    <div className="flex flex-col w-full h-[865px] " id="loadingFilm">
    
      <img id="loadingImg"
        className="object-cover object-top h-[865px] "
        src={GetPoster(film.backdrop_path, IMAGE_SIZES.backdrop_sizes.original)}
        alt={film.title}
      />

      <div id="filterDetailPage" className="absolute flex-1 w-full  h-[865px]"></div>
      <div className="absolute bottom-10  w-[700px] h-auto ml-10">
        <div className="flex fle-row w-full h-full items-end">
          <img
            className="object-cover rounded-md w-52"
            src={GetPoster(film.poster_path, IMAGE_SIZES.poster_sizes.w342)}
            alt={film.title}
          />

          <div className="w-full h-full pl-10">
            <div className="flex flex-row  items-end justify-start space-x-4 w-auto  mb-6">
              <p className="text-lg border-2 rounded-md p-1">
                {(Math.round(film.vote_average * 100) / 100).toFixed(1)}
              </p>
              <p className="text-md w-full">{film.vote_count + " votos"}</p>
            </div>
            <h1 className="text-4xl font-bold">{film.title}</h1>
            <h2 className="text-xl mt-4">
              {film.genres.map((genre) => genre.name).join(", ")}
            </h2>
            <p className="text-xl mt-2">{`${new Date(
              film.release_date
            ).getFullYear()}  ·  ${film.runtime} minutos`}</p>
          </div>
        </div>
        <p className="text-xl mt-10 text-gray-200 w-auto">{film.overview}</p>
      </div>
      <button
        className="absolute  bottom-10 right-0 px-8 py-2 hover:scale-110   bg-gray-200 mr-20 text-xl rounded-md"
        type="button"
      >
        <Link href={`../trailer/${film.id}`}>
          <svg
            className="w-14 h-14 text-black stroke-black "
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 21L12 17L17 21M7.8 17H16.2C17.8802 17 18.7202 17 19.362 16.673C19.9265 16.3854 20.3854 15.9265 20.673 15.362C21 14.7202 21 13.8802 21 12.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V12.2C3 13.8802 3 14.7202 3.32698 15.362C3.6146 15.9265 4.07354 16.3854 4.63803 16.673C5.27976 17 6.11984 17 7.8 17Z" />
          </svg>
        </Link>
      </button>
    </div>
  );
}
