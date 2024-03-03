
import GridSearchResult from "@/app/components/GridSearchResult";
import { getContentBySearch } from "@/app/service/CommonContentService";

export default async function Search({ params }) {
  let searchResult = await getContentBySearch(params.q,1);


  return (
    <div className="flex flex-col h-auto w-full">
     
      <GridSearchResult content={searchResult} />
    </div>
  );
}
