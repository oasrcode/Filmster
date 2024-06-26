import TrailerButton from "@/app/components/TrailerButton";
import { GetPoster, IMAGE_SIZES } from "@/app/config/FetchConfig";
import {
  MotionDetailContent,
  MotionDetailImageReveal,
} from "@/app/motions/Motions";

import { getSerieByID } from "@/app/service/SerieService";

export default async function DetailsSerie({ params }) {
  const { id } = params;

  const serie = await getSerieByID(id);
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
      className="absolute top-0 flex flex-col w-full h-screen"
    >
      <div className="absolute mt-24 md:mt-0 w-full h-screen aspect-video z-10 bg-gradient-to-tr from-black from-20% via-gray-950 via-30% to-transparent"></div>

      <img
        className="w-full h-screen mt-24 md:mt-0"
        src={GetPoster(serie.backdrop_path, IMAGE_SIZES.backdrop_sizes.w1280)}
        alt={serie.name}
        width={1280}
        height={1024}
      />

      <div className="relative flex flex-col lg:absolute bottom-0 left-0 lg:right-0  mt-5 z-20 lg:w-11/12 lg:mx-auto mx-10 mb-20 gap-10">
        <div className="flex flex-row gap-5">
          <img
            className="hidden lg:flex lg:object-fill min-w-[185px]  rounded-md"
            src={GetPoster(serie.poster_path, IMAGE_SIZES.poster_sizes.w185)}
            alt={serie.name}
            width={185}
          />
          <div className="flex flex-col items-start justify-end w-full gap-2">
            <div className="flex flex-row items-start justify-between w-full">
              <div className="flex flex-row  items-baseline justify-start space-x-4 w-auto  mb-6">
                <p className="text-lg bg-gray-100 text-black font-semibold border-2 rounded-md p-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                  {serie.vote_average.toFixed(1)}
                </p>
                <p className="text-md w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                  {serie.vote_count + " votos"}
                </p>
              </div>
              <div className="block lg:hidden">
                {" "}
                <TrailerButton path={"serie"} prop={id} />
              </div>
            </div>

            <h1 className="text-5xl font-bold  text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {serie.name}
            </h1>
            <h2 className="text-xl mt-4  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {serie.genres.map((genre) => genre.name).join(", ")}
            </h2>
            <p className="text-xl mt-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">{`Inicio ${new Date(
              serie.seasons[0].air_date
            ).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })} - ${serie.status == "Ended" ? "Finalizado" : "En emisión"}`}</p>
            <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Temporadas {serie.number_of_seasons} - Episodios{" "}
              {serie.number_of_episodes}
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between w-full">
          <p className="w-full lg:w-1/3 mt-7 lg:mt-2 text-left drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {serie.overview}
          </p>
          <div className="hidden lg:block">
          <TrailerButton path={"serie"} prop={id} />
          </div>
        </div>
      </div>
    </MotionDetailContent>
  );
}
