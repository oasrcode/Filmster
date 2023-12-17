import { getFilmsTrending, getFilmsTopRated } from "./service/FilmService";
import { HorizontalCarousel } from "./components/HorizontalCarousel";
import { getSerieTrending } from "./service/SerieService";
import { LandingContent } from "./components/LandingContent";
export default async function Home() {
  const trendingFilmsData = getFilmsTrending();
  const topRated = getFilmsTopRated();
  const trendingSeriesData = getSerieTrending();

  //wait to load bouth at same time
  const [topRatedResults, trendingFilms, trendingSeries] = await Promise.all([
    topRated,
    trendingFilmsData,
    trendingSeriesData,
  ]);
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const random = randomIntFromInterval(0, 19);

  return (
    <main className="flex flex-col h-screen w-full  space-y-10">
      <section className="flex flex-col xl:mx-20 mx-3">
        <LandingContent content={topRatedResults.results[random]} />
      </section>
      <section className="flex flex-col xl:mx-20 mx-3 space-y-10">
        <h2 className="text-3xl">Películas</h2>
        <HorizontalCarousel props={trendingFilms} />
      </section>
      <section className="flex flex-col xl:mx-20 mx-3 space-y-10">
        <h2 className="text-3xl">Series</h2>
        <HorizontalCarousel props={trendingSeries} />
      </section>
    </main>
  );
}
