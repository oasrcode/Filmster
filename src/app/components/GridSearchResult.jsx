"use client";
import { useState, useEffect } from "react";
import { Card } from "./Card";

import { getContentBySearch } from "@/app/service/CommonContentService";
import { useInView } from "react-intersection-observer";
import ThreeDotsWave from "./ThreeDotsWave";
export default function GridSearchResult({ content, query }) {
  const [allResults, setAllResults] = useState(content.results);

  const [page, setPage] = useState(1);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      loadMoreContent();
    }
  }, [inView]);

  const loadMoreContent = async () => {
    const next = page + 1;
    const apiContent = await getContentBySearch(query, next);

    setAllResults((prevResults) => [...prevResults, ...apiContent.results]);
    setPage(next);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   h-auto w-full ">
        {allResults.map((item, i) => (
          <Card key={i} content={item} index={i} />
        ))}
      </div>
      <div
        className="flex  h-auto w-full items-center justify-center"
        ref={ref}
      >
        <ThreeDotsWave />
      </div>
    </>
  );
}
