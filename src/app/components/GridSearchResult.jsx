"use client";
import { useCallback, useState } from "react";
import { Card } from "./Card";
import FilterButton from "./FilterButton";

export default function GridSearchResult({ content }) {
  const [sortedResults, setSortedResults] = useState(content.results);
  const [sortDirection, setSortDirection] = useState({
    title: "asc",
    date: "asc",
    score: "asc",
  });

  const sort = useCallback(
    (type) => {
      let sorted;
      const currentDirection = sortDirection[type];
      const toggleDirection = (direction) =>
        direction === "asc" ? "desc" : "asc";
      switch (type) {
        case "title":
          sorted = [...content.results].sort((a, b) => {
            let aTitle = a.media_type === "tv" ? a.name : a.title;
            let bTitle = b.media_type === "tv" ? b.name : b.title;
            return currentDirection === "asc"
              ? aTitle.localeCompare(bTitle)
              : bTitle.localeCompare(aTitle);
          });
          break;
        case "date":
          sorted = [...content.results].sort((a, b) => {
            let aDate =
              a.media_type === "tv" ? a.first_air_date : a.release_date;
            let bDate =
              b.media_type === "tv" ? b.first_air_date : b.release_date;
            return currentDirection === "asc"
              ? new Date(aDate) - new Date(bDate)
              : new Date(bDate) - new Date(aDate);
          });
          break;
        case "score":
          sorted = [...content.results].sort((a, b) => {
            return currentDirection === "asc"
              ? a.vote_average - b.vote_average
              : b.vote_average - a.vote_average;
          });
          break;
        default:
          // No sorting
          sorted = content.results;
      }
      setSortDirection((prevDirection) => ({
        ...prevDirection,
        [type]: toggleDirection(currentDirection),
      }));
      setSortedResults(sorted);
    },
    [sortDirection,content.results]
  );

  return (
    <>
      <div className="w-full h-10 flex flex-row items-center justify-end">
        <FilterButton callback={sort} sortDirection={sortDirection} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   h-auto w-full ">
        {sortedResults.map((item,i) => (
          <Card key={item.id} content={item} index={i}/>
        ))}
      </div>
    </>
  );
}
