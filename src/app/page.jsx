import { getFilmsTrending } from "./service/FilmService";
import { HorizontalCarousel } from "./components/HorizontalCarousel";
import { getSerieTrending } from "./service/SerieService";
import LandingContent from "./components/LandingContent";


export default async function Home() {
  const trendingFilmsData = getFilmsTrending();
  const trendingSeriesData = getSerieTrending();

  const [trendingFilms, trendingSeries] = await Promise.all([
    trendingFilmsData,
    trendingSeriesData,
  ]);

  return (
    <main className="flex flex-col h-auto w-full  mb-10">
      <LandingContent/>
      <section className="flex flex-col xl:mx-20 mx-3 space-y-4 mt-20">
        <h2 className="text-3xl border-l-4  border-[#222252] px-5">Peliculas en tendencia</h2>
        <HorizontalCarousel props={trendingFilms} />
      </section>
      <section className="flex flex-col xl:mx-20 mx-3 space-y-4 mt-20">
        <h2 className="text-3xl border-l-4  border-[#222252] px-5">Series en tendencia </h2>
        <HorizontalCarousel props={trendingSeries} />
      </section>
    </main>
  );
}
