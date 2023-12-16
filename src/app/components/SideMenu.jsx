'use client'
export default function SideMenu() {
  return (
    <>
      <button className="absolute top-0 right-0 mt-7 mr-3  xl:hidden">
        <svg
          width="40"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      
      {/* <div className="xl:hidden absolute top-0 left-0 mt-20 flex flex-col w-[100%] h-[700px] bg-black ">

      </div> */}
    </>
  );
}
