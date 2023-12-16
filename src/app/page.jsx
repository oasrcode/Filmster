import { getFilmsTrending, getTopRated } from "./service/FilmService";
import { HorizontalCarousel } from "./components/HorizontalCarousel";
export default async function Home() {
  const trendingFilmsData = getFilmsTrending();

  const topRated = getTopRated();

  //wait to load bouth at same time
  const [topRatedResults, trendingFilms] = await Promise.all([
    topRated,
    trendingFilmsData,
    ,
  ]);

  return (
    <main className="flex flex-col h-screen w-full my-10 space-y-10">
      <section className="flex flex-col xl:mx-20 mx-3 space-y-10">
        <h2 className="text-3xl" >
          Mejor Valoradas
        </h2>
        <HorizontalCarousel props={topRatedResults} />
      </section>
      <section className="flex flex-col xl:mx-20 mx-3 space-y-10">
        <h2 className="text-3xl" >
          Películas en tendencia
        </h2>
        <HorizontalCarousel props={trendingFilms} />
      </section>
    </main>
  );
}
