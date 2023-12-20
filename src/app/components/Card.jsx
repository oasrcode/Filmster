import { GetPoster, IMAGE_SIZES } from "../config/FetchConfig";
import Link from "next/link";
export function Card({ content }) {
  return (
    <div key={content.id} className="flex-none cursor-pointer mx-auto">
      <Link
        href={`/${content.media_type == "movie" ? "pelicula/" : "serie/"}${
          content.id
        }`}
        prefetch={true}
        replace={true}
      >
        <img
          className="object-cover h-[342px] rounded-lg "
          src={GetPoster(content.poster_path, IMAGE_SIZES.poster_sizes.w342)}
          alt={content.title}
        />
      </Link>
    </div>
  );
}
