
import { Card } from "./Card";

export function HorizontalCarousel({ props }) {
  

  return (
    <div className="flex flex-no-wrap overflow-x-scroll md:items-start ml-10 mb-10  md:mx-20 mt-10">
      {props.results.map((resource) => (
        <Card key={resource.id} content={resource}/>
      ))}
    </div>
  );
}
