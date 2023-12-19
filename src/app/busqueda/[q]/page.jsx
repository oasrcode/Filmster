"use client";
import { getContentBySearch } from "@/app/service/CommonContentService";
import { useEffect, useState } from "react";

export default function Search({ params }) {
  const [content, setContent] = useState([{}]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    setSearch(params);
    if (search != null) {
      getContentBySearch(search)
        .then((response) => {
          console.log(response);
          setContent(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },[search]);

  return (
    <div className="flex flex-col">
      {content.results?.map((resource) => {
        <p key={resource.id} className="text-white">
          {resource.title}
        </p>;
      })}
    </div>
  );
}
