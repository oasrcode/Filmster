import ReturnButton from "@/app/components/ReturnButton";
import TrailerDisplay from "@/app/components/TrailerDisplay";
import { GetFilmTrailerByID } from "@/app/service/FilmService";

export default async function TrailerFilm({ params }) {
  const { id } = params;
  const trailer = await GetFilmTrailerByID(id);

  return (
    <div className="absolute z-[100] top-0 aspect-video h-screen w-full">
      {trailer.results && trailer.results.length > 0 ? (
        <TrailerDisplay
          prop={trailer.results.filter((i) => i.type == "Trailer")[0]}
        />
      ) : (
        <div className="w-full flex flex-col items-center justify-center gap-24">
          <p className="text-center mt-40 text-5xl">Sin Resultados</p>
          <ReturnButton />
        </div>
      )}
    </div>
  );
}
