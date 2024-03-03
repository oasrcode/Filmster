import { Card } from "./Card";

export function HorizontalCarousel({ props }) {
  return (
    <div className="flex flex-no-wrap overflow-x-scroll gap-10 pb-5 touch-auto px-10">
      {props.results.map((item, i) => (
        <Card key={item.id} content={item} index={i} />
      ))}
    </div>
  );
}
