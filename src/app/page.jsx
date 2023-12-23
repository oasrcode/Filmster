import { getFilmsTrending } from "./service/FilmService";
import { HorizontalCarousel } from "./components/HorizontalCarousel";
import { getSerieTrending } from "./service/SerieService";

export default async function Home() {
  const trendingFilmsData = getFilmsTrending();
  const trendingSeriesData = getSerieTrending();

  const [trendingFilms, trendingSeries] = await Promise.all([
    trendingFilmsData,
    trendingSeriesData,
  ]);

  return (
    <main className="flex flex-col h-auto w-full space-y-10 mb-10">
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
