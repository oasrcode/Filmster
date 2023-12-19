export default function FilterMenu({ children }) {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-28 bg-[#0e0e33] flex flex-row items-center justify-start">
        <button
          type="button"
          className="px-8 py-2 bg-[#0d0d25] rounded-md text-white ml-32"
        >
          Géneros
        </button>
      </div>

      {children}
    </div>
  );
}
