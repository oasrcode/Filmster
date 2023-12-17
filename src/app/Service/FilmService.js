import {
  OPTIONS,
  URL_GET_FILM_BY_ID,
  URL_FILM_SEARCH_TRAILER,
  URL_TOP_RATED_FILMS,
  URL_TRENDING_FILMS,
} from "../config/FetchConfig";



export async function getFilmsTrending() {
  try {
    const response = await fetch(URL_TRENDING_FILMS, OPTIONS);
    if (!response) {
      throw new Error(`Error response empty! =>${URL_TRENDING_FILMS}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(
      `Error at fetching data at getFilmsTrending url =>${URL_TRENDING_FILMS}`
    );
  }
}

export async function getFilmsTopRated() {
  try {
    const response = await fetch(URL_TOP_RATED_FILMS, OPTIONS);
    if (!response) {
      throw new Error(`Error response empty! =>${URL_TOP_RATED_FILMS}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(
      `Error at fetching data at getFilmsTopRated url =>${URL_TOP_RATED_FILMS}`
    );
  }
}

export async function getFilmByID(id) {
  try {
    const response = await fetch(URL_GET_FILM_BY_ID(id), OPTIONS);

    if (!response) {
      throw new Error(`Error response empty! =>${URL_GET_FILM_BY_ID(id)}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(id);
    throw new Error(
      `Error at fetching data at getFilmByID url =>${URL_GET_FILM_BY_ID(
        id
      )} i value ${id}`
    );
  }
}

export async function GetFilmTrailerByID(id) {
  try {
    const response = await fetch(URL_FILM_SEARCH_TRAILER(id), OPTIONS);

    if (!response) {
      throw new Error(`Error response empty! =>${URL_FILM_SEARCH_TRAILER(id)}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(id);
    throw new Error(
      `Error at fetching data at GetFilmTrailerByID url =>${URL_FILM_SEARCH_TRAILER(
        id
      )} id value ${id}`
    );
  }
}
