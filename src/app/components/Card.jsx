import { GetPoster, IMAGE_SIZES } from "../config/FetchConfig";
import Link from "next/link";
import { MotionCardHoverAnimation } from "../motions/Motions";

const ratingStar = (
  <svg width="20px" height="20px" viewBox="0 -2.12 95.444 95.444">
    <g id="Group_10" transform="translate(-595.671 -698.786)">
      <g id="Group_5" data-name="Group 5">
        <path
          id="Path_61"
          d="M687.689,737.222,667.74,756.675l4.727,27.475a8.46,8.46,0,0,1,.048,1.1c0,1.426-.657,2.748-2.251,2.748a4.444,4.444,0,0,1-2.2-.661l-24.676-12.971-24.676,12.971a4.622,4.622,0,0,1-2.2.661c-1.594,0-2.307-1.322-2.307-2.748a8.559,8.559,0,0,1,.1-1.1l4.727-27.475-20.005-19.453a4.292,4.292,0,0,1-1.37-2.639c0-1.651,1.706-2.308,3.076-2.528l27.592-4.014,12.362-25c.5-1.042,1.426-2.251,2.692-2.251s2.2,1.209,2.692,2.251l12.362,25,27.592,4.014c1.322.22,3.076.877,3.076,2.528A4.1,4.1,0,0,1,687.689,737.222Z"
          fill="#fbb141"
          stroke="#2d4d68"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </g>
    </g>
  </svg>
);
const iconFilm = (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 64 64"
    role="img"
    className="iconify iconify--emojione-monotone"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d="M62 21.148c0-7.756-6.288-14.042-14.042-14.042c-5.888 0-10.922 3.628-13.009 8.767C33.647 8.006 26.832 2 18.595 2C9.431 2 2 9.431 2 18.595c0 8.87 6.963 16.093 15.717 16.552c-.249.395-.399.85-.399 1.321v8.296l-8.936-4.467v19.15l9.021-4.511c.28 1.077 1.28 1.956 2.469 1.956h7.659V62h11.49v-5.107h6.383c1.4 0 2.553-1.221 2.553-2.552v-11.49l6.383 1.276v-8.936l-6.383 1.276c0-.462-.146-.906-.385-1.296c.129.004.254.02.385.02C55.712 35.191 62 28.904 62 21.148m-2.63 2.045a3.22 3.22 0 0 1-6.438 0a3.22 3.22 0 0 1 6.438 0m-6.437-12.365a3.217 3.217 0 1 1 0 6.435a3.217 3.217 0 0 1-3.217-3.217a3.216 3.216 0 0 1 3.217-3.218m-2.097 10.807a.805.805 0 1 1-1.61 0a.805.805 0 0 1 1.61 0m-1.609-3.092a.805.805 0 1 1-.001 1.61a.805.805 0 0 1 .001-1.61m-1.244 3.897a.806.806 0 1 1-.806.804a.806.806 0 0 1 .806-.804m-.439-3.092a.804.804 0 1 1-1.608.004a.804.804 0 0 1 1.608-.004m-.806 2.287a.804.804 0 1 1-1.609.001a.804.804 0 0 1 1.609-.001M24.476 6.398a3.804 3.804 0 1 1 0 7.605a3.804 3.804 0 0 1 0-7.605m-2.479 12.773a.952.952 0 0 1-1.902 0a.95.95 0 1 1 1.902 0m-1.902-3.654a.951.951 0 1 1-.003 1.903a.951.951 0 0 1 .003-1.903m-1.469 4.604a.95.95 0 1 1-.005 1.901a.95.95 0 0 1 .005-1.901m-.52-3.653a.952.952 0 1 1-1.903-.003a.952.952 0 0 1 1.903.003m-.95 2.703a.952.952 0 0 1-1.903 0a.95.95 0 1 1 1.903 0m-8.244 5.644a3.803 3.803 0 1 1 0-7.606a3.803 3.803 0 0 1 0 7.606m0-14.614a3.803 3.803 0 1 1 7.607 0a3.803 3.803 0 0 1-7.607 0m9.683 22.22a3.804 3.804 0 1 1 .002-7.608a3.804 3.804 0 0 1-.002 7.608m9.684-15.212a3.805 3.805 0 0 1 3.804 3.803a3.804 3.804 0 0 1-7.608 0a3.804 3.804 0 0 1 3.804-3.803m-3.298 16.705a16.636 16.636 0 0 0 9.252-9.806c.941 4.377 3.922 7.987 7.898 9.806h-17.15m14.783-7.501a3.217 3.217 0 1 1 0-6.436a3.218 3.218 0 1 1 0 6.436m0-12.368a3.217 3.217 0 0 1 3.219-3.218a3.217 3.217 0 1 1 0 6.435a3.215 3.215 0 0 1-3.219-3.217m4.975 15.585a3.217 3.217 0 0 1 3.219-3.217a3.218 3.218 0 1 1-3.219 3.217"
      fill="white"
    ></path>
  </svg>
);

const iconTVSerie = (
  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
    <path
      d="M22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22L8 22C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16L2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6L16 6C18.8284 6 20.2426 6 21.1213 6.87868C22 7.75736 22 9.17157 22 12V16Z"
      stroke="white"
      strokeWidth="1.5"
    />
    <path
      d="M9 2L12 5.5L15 2"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M16 6V22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M20 16C20 15.4477 19.5523 15 19 15C18.4477 15 18 15.4477 18 16C18 16.5523 18.4477 17 19 17C19.5523 17 20 16.5523 20 16Z"
      fill="white"
    />
    <path
      d="M20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12Z"
      fill="white"
    />
  </svg>
);

const noImage = (
  <svg
    width="50px"
    height="50px"
    viewBox="0 0 24 24"
    fill="#ffffff"
    stroke="#ffffff"
  >
    <path d="M7.828 5l-1-1H22v15.172l-1-1v-.69l-3.116-3.117-.395.296-.714-.714.854-.64a.503.503 0 0 1 .657.046L21 16.067V5zM3 20v-.519l2.947-2.947a1.506 1.506 0 0 0 .677.163 1.403 1.403 0 0 0 .997-.415l2.916-2.916-.706-.707-2.916 2.916a.474.474 0 0 1-.678-.048.503.503 0 0 0-.704.007L3 18.067V5.828l-1-1V21h16.172l-1-1zM17 8.5A1.5 1.5 0 1 1 15.5 7 1.5 1.5 0 0 1 17 8.5zm-1 0a.5.5 0 1 0-.5.5.5.5 0 0 0 .5-.5zm5.646 13.854l.707-.707-20-20-.707.707z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);

export function Card({ content, index }) {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: index * 0.05,
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  return (
    <>
      {content.poster_path && content.backdrop_path ? (
        <MotionCardHoverAnimation
          key={content.id}
          className="relative flex-none cursor-pointer mx-auto my-5"
          whileHover={{
            scale: 1.06,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10,
            },
          }}
          viewport={{ amount: 0 }}
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <Link
            href={`/${content.media_type == "movie" ? "pelicula/" : "serie/"}${
              content.id
            }`}
            prefetch={true}
            replace={false}
          >
            <div className="w-full h-10 rounded-tr-lg rounded-tl-lg bg-[#222252] flex flex-row items-center justify-between">
              <span
                className=" text-white pl-2"
                title={content.media_type == "movie" ? "Película" : "Serie"}
              >
                {content.media_type == "movie" ? iconFilm : iconTVSerie}
              </span>
              <span
                className="flex flex-row items-center gap-2 pr-2"
                title={`${content.vote_count} votos`}
              >
                {" "}
                <p className="backdrop:blur-3xl text-white shadow-black">
                  {content.vote_average.toFixed(1)}
                </p>
                {ratingStar}
              </span>
            </div>
            <img
              className="object-cover h-[342px] rounded-br-lg rounded-bl-lg "
              src={GetPoster(
                content.poster_path,
                IMAGE_SIZES.poster_sizes.w342
              )}
              alt={content.title}
              title={content.name}
            />
          </Link>
        </MotionCardHoverAnimation>
      ) : (
        <div className="relative flex-none cursor-pointer my-5 h-[342px] w-[228px] bg-black rounded-lg items-center justify-center">
          <div className="w-[100%] h-[100%] flex items-center justify-center">
            <span>{noImage}</span>
          </div>
        </div>
      )}
    </>
  );
}
