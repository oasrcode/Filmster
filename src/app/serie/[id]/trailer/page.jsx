import TrailerDisplay from "@/app/components/TrailerDisplay";
import { GetTVTrailerByID } from "@/app/service/SerieService";

export default async function TrailerSerie({ params }) {
  const { id } = params;

  const trailer = await GetTVTrailerByID(id);

  return (
    <div className="absolute z-[100] top-0 aspect-video h-screen w-full bg-black">
      {/* <div className="absolute flex items-center justify-start w-full h-20 backdrop:blur-xl z-[150] bg-white"><ReturnButton/></div> */}
      {trailer.results && trailer.results.length > 0 ? (
        <TrailerDisplay
          prop={trailer.results.filter((i) => i.type == "Trailer")[0]}
        />
      ) : (
        <p>Sin Resultados</p>
      )}
    </div>
  );
}
