import { useRouter } from "next/navigation";
import { GetPoster, IMAGE_SIZES } from "../config/FetchConfig";
export default function CardSearch({ film,onHandleDialog }) {
  const router = useRouter();

  function NavigateToFilmDetail(id) {
    router.replace(`/pelicula/${id}`);
    onHandleDialog();
  }
  return (
    <div
      key={film.id}
      className="flex flex-row w-auto h-auto mx-10 justify-start items-start  bg-gray-50 rounded-md pb-10"
      onClick={() => NavigateToFilmDetail(film.id)}
    >
      <img
        className="hidden object-fill h-auto w-[154px]   rounded-lg "
        src={GetPoster(film.poster_path, IMAGE_SIZES.poster_sizes.w154)}
        alt={film.title}
      />
      <div className="flex flex-col items-start justify-start overflow-hidden h-full">
        {" "}
        <p className="text-black text-3xl ml-10 mt-5">{film.title}</p>
        <p className="text-lg text-gray-600 font-normal ml-10 mt-5">
          {`   ${film.original_title}  ·  ${new Date(
            film.release_date
          ).getFullYear()}`}
        </p>
      </div>
    </div>
  );
}
