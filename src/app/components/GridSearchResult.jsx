"use client";
import { useCallback, useState } from "react";
import { Card } from "./Card";
import FilterButton from "./FilterButton";

export default function GridSearchResult({ content }) {
  const [sortedResults, setSortedResults] = useState(content.results);

  const sort = useCallback(
    (type) => {
      let sorted;

      switch (type) {
        case "title":
          sorted = [...content.results].sort((a, b) => {
            let aTitle = a.media_type === "tv" ? a.name : a.title;
            let bTitle = b.media_type === "tv" ? b.name : b.title;
            return aTitle.localeCompare(bTitle);
          });
          break;
        case "date":
          sorted = [...content.results].sort((a, b) => {
            let aDate = a.media_type === "tv" ? a.first_air_date : a.release_date;
            let bDate = b.media_type === "tv" ? b.first_air_date : b.release_date;
            return new Date(aDate) - new Date(bDate);
          });
          break;
        case "score":
          sorted = [...content.results].sort((a, b) => {
            return b.vote_average - a.vote_average;
          });
          break;
        default:
          // No sorting
          sorted = content.results;
      }

      setSortedResults(sorted);
    },
    [sortedResults]
  );

  return (
    <>
      <div className="w-full h-10 flex flex-row items-center justify-end">
        <FilterButton callback={sort} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   h-auto w-full ">
        {sortedResults.map((item) => (
          <Card key={item.id} content={item} />
        ))}
      </div>
    </>
  );
}
