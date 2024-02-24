import TrailerDisplay from "@/app/components/TrailerDisplay";
import { GetFilmTrailerByID } from "@/app/service/FilmService";

export default async function TrailerFilm({ params }) {
  const { id } = params;
  const trailer = await GetFilmTrailerByID(id);

  return (
    <div>
      {trailer.results && trailer.results.length > 0 ? (
        <TrailerDisplay prop={ trailer.results.filter(i=>i.type=="Trailer")[0]} />
      ) : (
        <p>no se encontró nada</p>
      )}
    </div>
  );
}
