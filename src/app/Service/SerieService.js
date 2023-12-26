import {
  OPTIONS,
  URL_GET_TV_BY_ID,
  URL_TRENDING_TV,
} from "../config/FetchConfig.js";

export async function getSerieTrending() {
  try {
    const response = await fetch(URL_TRENDING_TV, OPTIONS);
    if (!response) {
      throw new Error(`Error response empty! =>${URL_TRENDING_TV}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(
      `Error at fetching data at getSerieTrending url =>${URL_TRENDING_TV}`
    );
  }
}

export async function getSerieTopRated() {
  try {
    const response = await fetch(URL_TOP_RATED_TV, OPTIONS);
    if (!response) {
      throw new Error(`Error response empty! =>${URL_TOP_RATED_TV}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(
      `Error at fetching data at getSerieTopRated url =>${URL_TOP_RATED_TV}`
    );
  }
}

export async function getSerieByID(id) {
  try {
    const response = await fetch(URL_GET_TV_BY_ID(id), OPTIONS);

    if (!response) {
      throw new Error(`Error response empty! =>${URL_GET_TV_BY_ID(id)}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(id);
    throw new Error(
      `Error at fetching data at getSerieByID url =>${URL_GET_TV_BY_ID(
        id
      )} id value ${id}`
    );
  }
}

export async function GetTVTrailerByID(id) {
  try {
    const response = await fetch(URL_TV_SEARCH_TRAILER(id), OPTIONS);

    if (!response) {
      throw new Error(`Error response empty! =>${URL_TV_SEARCH_TRAILER(id)}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(id);
    throw new Error(
      `Error at fetching data at GetTVTrailerByID url =>${URL_TV_SEARCH_TRAILER(
        id
      )} id value ${id}`
    );
  }
}
