import { GetPoster, IMAGE_SIZES } from "@/app/config/FetchConfig";
import { getFilmByID } from "../../service/FilmService";
import TrailerButton from "@/app/components/TrailerButton";
import { MotionDetailContent } from "@/app/motions/Motions";

export default async function DetailsFilm({ params }) {
  const { id } = params;

  const film = await getFilmByID(id);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };
  return (
    <MotionDetailContent
      variants={container}
      initial="hidden"
      animate="show"
      transition={{ ease: "easeInOut", duration: 1 }}
      className="w-full h-screen flex flex-col"
    >
      <div className="hidden lg:block lg:absolute w-full h-screen z-10 bg-gradient-to-tr from-black to-transparent"></div>
      <img
        className="object-top z-0 w-full h-screen"
        src={GetPoster(film.backdrop_path, IMAGE_SIZES.backdrop_sizes.w1280)}
        alt={film.title}
        width={1280}
        height={1024}
        fetchPriority="high"
      />
      <div className="relative flex flex-col lg:absolute bottom-0 left-0 mx-5 mt-5 mb-10 lg:mt-0 lg:mx-10 lg:gap-5 z-20">
        <div className="flex flex-row gap-5">
          <img
            className="hidden lg:flex lg:object-fill min-w-[185px]  rounded-md"
            src={GetPoster(film.poster_path, IMAGE_SIZES.poster_sizes.w185)}
            alt={film.title}
            width={185}
          />

          <div className="flex flex-col items-start justify-end w-auto gap-2">
            <div className="flex flex-row  items-baseline justify-start space-x-4 w-auto  mb-6">
              <p className="text-lg bg-gray-100 text-black font-semibold border-2 rounded-md p-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                {film.vote_average.toFixed(1)}
              </p>
              <p className="text-md w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                {film.vote_count + " votos"}
              </p>
            </div>

            <h1 className="text-5xl font-bold  text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {film.title}
            </h1>
            <h2 className="text-xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {film.tagline}
            </h2>
            <h3 className="text-xl mt-4  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {film.genres.map((genre) => genre.name).join(", ")}
            </h3>
            <p className="text-xl mt-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">{`${
              film.status == "Released"
                ? "Estreno - " +
                  new Date(film.release_date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                : "Próximamente"
            }`}</p>
          </div>
        </div>

        <p className="w-full lg:w-1/3 mt-7 lg:mt-2 text-left drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] opacity-70">
          {film.overview}
        </p>
      </div>
      <TrailerButton path={"pelicula"} prop={id} />
    </MotionDetailContent>
  );
}
