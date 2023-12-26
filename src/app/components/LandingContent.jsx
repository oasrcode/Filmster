import { GetPoster, IMAGE_SIZES } from "../config/FetchConfig";
import { getFilmsTopRated } from "../service/FilmService";

export default async function LandingContent() {
  const trendingFilms = await getFilmsTopRated();

  const randomFilm = selectRandomFilm();

  function selectRandomFilm() {
    let index = getRandomInt(trendingFilms.results.length - 1);
    return trendingFilms.results[index];
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <section
      key={randomFilm.id}
      className="flex flex-col items-center justify-end  w-auto  h-auto bg-black"
    >
      <div className="absolute flex flex-col items-start justify-start z-50 top-40 ml-2 lg:top-48 lg:left-64 lg:w-1/3">
        <h2 className="lg:text-5xl text-2xl">{randomFilm.title}</h2>
        <div className="flex flex-row justify-center items-center space-x-4">
          
          <div className="flex flex-row items-center justify-start mt-3">
            <p>{randomFilm.vote_average.toFixed(2)} </p>
            <svg
              className="mx-1 w-4 h-4 fill-current text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <p className="opacity-50">
              · {randomFilm.vote_count} votos ·{" "}
              {new Date(randomFilm.release_date).getFullYear()}
            </p>
          </div>
        </div>
        <p className="opacity-80 line-clamp-2 lg:line-clamp-6 mt-5">
          {randomFilm.overview}
        </p>
      </div>

      <div
        id="gradientLandingContent"
        className="hidden lg:block absolute left-0 right-0 mx-autow-full h-[439px] z-20"
      ></div>
      <div className="relative z-10 self-end ">
        <img
          className="object-cover opacity-30 lg:opacity-100"
          src={GetPoster(
            randomFilm.backdrop_path,
            IMAGE_SIZES.backdrop_sizes.w780
          )}
          alt={randomFilm.title}
          width={780}
        />
      </div>
    </section>
  );
}
