import { GetPoster, IMAGE_SIZES } from "../Config/FetchConfig";
import Link from "next/link";
export function Card({ content }) {
  return (
    <div
      key={content.id}
      className="relative flex-none w-auto mr-20 md:pb-4 cursor-pointer hover:my-rotate-y-180 hover:perspective hover:preserve-3d"
    >
      <Link href={`./${content.media_type=="movie"?"pelicula/":"serie/"}${content.id}`}>
        <img
          className="object-cover w-[342px] rounded-lg "
          src={GetPoster(content.poster_path, IMAGE_SIZES.poster_sizes.w342)}
          alt={content.title}
        />
      </Link>
    </div>
  );
}
