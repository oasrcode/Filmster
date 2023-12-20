import { Card } from "./Card";

export default function GridSearchResult({ content }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10   h-auto w-full ">
      {content.results.map((item) => (
        <Card key={item.id} content={item} />
      ))}
    </div>
  );
}
