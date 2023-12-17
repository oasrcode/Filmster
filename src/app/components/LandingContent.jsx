
import { GetPoster, IMAGE_SIZES } from "../config/FetchConfig";

export function LandingContent({ content }) {
    console.log(content)
  return (
    <div className="flex flex-col w-full xl:h-96  bg-black">
        <div className="absolute xl:mt-36 xl:w-2/6">
            <h2 className="text-3xl text-white">{content.title}</h2>
            <h5 className="text-lg text-gray-200">{content.original_title}</h5>
            <p className="">{content.overview}</p>
        </div>
      <img className=" xl:w-[780px] object-cover mx-auto"
        src={GetPoster(content.backdrop_path, IMAGE_SIZES.backdrop_sizes.w780)}
        alt={content.title}
      ></img>
    </div>
  );
}
