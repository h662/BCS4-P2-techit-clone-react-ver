const TitleBar = ({ title, desc }) => {
  return (
    <div className="h-[64.5px] flex justify-between items-end font-semibold">
      <div className="flex h-full flex-col justify-between">
        <h3 className="text-techit-main">{title}</h3>
        <h5 className="text-[26px]">{desc}</h5>
      </div>
      <button className="flex items-center text-sm">
        자세히 보기
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="ml-2 w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default TitleBar;
