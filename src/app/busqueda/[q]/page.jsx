import GridSearchResult from "@/app/components/GridSearchResult";
import { getContentBySearch } from "@/app/service/CommonContentService";

export default async function Search({ params }) {
  let searchResult = await getContentBySearch(params.q);

  return (
    <div className="flex flex-col h-screen w-full">
      <GridSearchResult content={searchResult} />
    </div>
  );
}
