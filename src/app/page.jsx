import { getFilmsTrending, getTopRated } from "./Service/FilmService";
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
    <main className="min-h-screen max-w-screen">
      <section className="flex flex-row w-full h-[500px] bg-neutral-900"></section>

      <section className="flex flex-col mt-20 ">
        <h2 className="relative ml-10 md:mx-20 text-3xl" id="caja">
          Películas en tendencia
        </h2>
        <HorizontalCarousel props={trendingFilms} />
      </section>
    </main>
  );
}
