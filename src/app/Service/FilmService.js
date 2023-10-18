import {
  OPTIONS,
  URL_GET_FILM_BY_ID,
  URL_SEARCH_MOVIE,
  URL_TOP_RATED,
  URL_TRENDING_FILMS,
} from "../Config/FetchConfig";

export async function getFilmBySearch(search) {
  try {
    const response = await fetch(URL_SEARCH_MOVIE(search), OPTIONS);
    if (!response) {
      throw new Error(`Error response empty! =>${URL_SEARCH_MOVIE(search)}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(
      `Error at fetching datta at getFilmBySearch url =>${URL_SEARCH_MOVIE(
        search
      )}`
    );
  }
}

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
      `Error at fetching datta at getFilmsTrending url =>${URL_TRENDING_FILMS}`
    );
  }
}

export async function getTopRated() {
  try {
    const response = await fetch(URL_TOP_RATED, OPTIONS);
    if (!response) {
      throw new Error(`Error response empty! =>${URL_TOP_RATED}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(
      `Error at fetching data at getTopRated url =>${URL_TOP_RATED}`
    );
  }
}

export async function getFilmByID(id) {
  try {
    const response = await fetch(URL_GET_FILM_BY_ID(id), OPTIONS);

    if (!response) {
      throw new Error(`Error response empty! =>${URL_GET_BY_ID(id)}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(id);
    throw new Error(
      `Error at fetching data at getByID url =>${URL_GET_BY_ID(
        id
      )} el id vale ${id}`
    );
  }
}

export async function GetTrailerByID(id) {
  try {
    const response = await fetch(URL_GET_FILM_BY_ID(id), OPTIONS);

    if (!response) {
      throw new Error(`Error response empty! =>${URL_GET_BY_ID(id)}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(id);
    throw new Error(
      `Error at fetching data at getByID url =>${URL_GET_BY_ID(
        id
      )} el id vale ${id}`
    );
  }
}
