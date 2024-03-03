export default function TrailerDisplay({ prop }) {
    //w-[1020px] h-[850px]
  return (
    <div className="flex items-start justify-center bg-black mb-20">
      <iframe className="w-full aspect-video" allowFullScreen frameBorder="0"  src={`https://www.youtube.com/embed/${prop.key}`}></iframe>
    </div>
  );
}
