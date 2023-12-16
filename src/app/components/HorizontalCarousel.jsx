
import { Card } from "./Card";

export function HorizontalCarousel({ props }) {
  

  return (
    <div className="flex flex-no-wrap overflow-x-scroll gap-4 pb-5 touch-auto">
      {props.results.map((resource) => (
        <Card key={resource.id} content={resource}/>
      ))}
    </div>
  );
}
