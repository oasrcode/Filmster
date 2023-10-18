'use client'
export default function SearchButton({ onHandleDialog }) {
  return (
    <button
      type="button"
      className="hover:scale-125  rounded-full"
      onClick={onHandleDialog}
    >
      <svg
        className="fill-none stroke-white hover:fill-amber-400 "
        width="45px"
        height="45px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
