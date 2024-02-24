import TrailerDisplay from "@/app/components/TrailerDisplay";
import { GetTVTrailerByID } from "@/app/service/SerieService";

export default async function TrailerSerie({ params }) {
  const { id } = params;

  const trailer = await GetTVTrailerByID(id);
 
  return ( <div>
    {trailer.results && trailer.results.length > 0 ? (
      <TrailerDisplay prop={ trailer.results.filter(i=>i.type=="Trailer")[0]} />
    ) : (
      <p>no se encontró nada</p>
    )}
  </div>);
}
