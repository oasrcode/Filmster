/*-----------------OPTIONS----------------------*/
export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.API_TOKEN,
  },
};
/*------------------- URL Search----------------------- */
export function URL_SEARCH(text,number) {
  return `https://api.themoviedb.org/3/search/multi?query=${text}&include_adult=false&language=es-ES&page=${number}`;
}
/*------------------- URL FILMS----------------------- */
export const URL_TRENDING_FILMS =
  "https://api.themoviedb.org/3/trending/movie/week?language=es-ES";

export const URL_TOP_RATED_FILMS =
  "https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=1";

export function URL_GET_FILM_BY_ID(id) {
  return `https://api.themoviedb.org/3/movie/${id}?language=es-ES/`;
}

export function URL_GET_FILM_TRAILER(id) {
  return `
  
https://api.themoviedb.org/3/movie/${id}/videos?language=es-ES`;
}

/*------------------- URL SERIES----------------------- */
export const URL_TRENDING_TV =
  "https://api.themoviedb.org/3/trending/tv/week?language=es-ES";

export const URL_TOP_RATED_TV =
  "https://api.themoviedb.org/3/tv/top_rated?language=es-ES";

export function URL_GET_TV_BY_ID(id) {
  return `https://api.themoviedb.org/3/tv/${id}?language=es-ES/`;
}
export function URL_GET_TV_TRAILER(id) {
  return `
  https://api.themoviedb.org/3/tv/${id}/videos?language=es-ES`;
}

/*--------------------- IMAGES -------------------- */
export const url_poster = "https://image.tmdb.org/t/p/w220";

export function GetPoster(poster_path, size) {
  if (poster_path) {
    return `https://image.tmdb.org/t/p/${size}/${poster_path}`;
  } else {
    return "https://placehold.co/400";
  }
}

export const IMAGE_SIZES = {
  backdrop_sizes: {
    w300: "w300",
    w780: "w780",
    w1280: "w1280",
    original: "original",
  },
  logo_sizes: {
    w45: "w45",
    w92: "w92",
    w154: "w154",
    w185: "w185",
    w300: "w300",
    w500: "w500",
    original: "original",
  },
  poster_sizes: {
    w92: "w92",
    w154: "w154",
    w185: "w185",
    w342: "w342",
    w500: "w500",
    w780: "w780",
    original: "original",
  },
  profile_sizes: {
    w45: "w45",
    w185: "w185",
    h632: "h632",
    original: "original",
  },
  still_sizes: {
    w92: "w92",
    w185: "w185",
    w300: "w300",
    original: "original",
  },
};
