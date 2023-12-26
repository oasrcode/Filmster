import { GetPoster, IMAGE_SIZES } from "../config/FetchConfig";
import Link from "next/link";
export function Card({ content }) {

  return (
    <>
      {content.poster_path && content.backdrop_path ? (
        <div
          key={content.id}
          className="flex-none cursor-pointer mx-auto my-5 hover:scale-105  duration-150 ease-in-out-150 "
        >
          <Link
            href={`/${content.media_type == "movie" ? "pelicula/" : "serie/"}${
              content.id
            }`}
            prefetch={true}
            replace={false}
          >
            <img
              className="object-cover h-[342px] rounded-lg "
              src={GetPoster(
                content.poster_path,
                IMAGE_SIZES.poster_sizes.w342
              )}
              alt={content.title}
            />
          </Link>
        </div>
      ) : null}
    </>
  );
}
