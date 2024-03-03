'use server'
import { OPTIONS, URL_SEARCH } from "../config/FetchConfig";

export async function getContentBySearch(search,numberPage) {
  try {
    const response = await fetch(URL_SEARCH(search,numberPage), OPTIONS);
    if (!response) {
      throw new Error(`Error response empty! =>${URL_SEARCH(search)}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(
      `Error at fetching data at getContentBySearch url =>${URL_SEARCH(search)}`
    );
  }
}
