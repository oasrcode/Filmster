import GridSearchResult from "@/app/components/GridSearchResult";
import { getContentBySearch } from "@/app/service/CommonContentService";

const INITIAL_PAGE = 1;
export default async function Search({ params }) {
  let searchResult = await getContentBySearch(params.q, INITIAL_PAGE);

  return (
    <div className="flex flex-col h-auto w-full">
      <GridSearchResult content={searchResult} query={params.q}/>
    </div>
  );
}
