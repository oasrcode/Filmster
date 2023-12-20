
import { Card } from "./Card";

export function HorizontalCarousel({ props }) {
  

  return (
    <div className="flex flex-no-wrap overflow-x-scroll gap-4 pb-5 touch-auto">
      {props.results.map((item) => (
        <Card key={item.id} content={item}/>
      ))}
    </div>
  );
}
