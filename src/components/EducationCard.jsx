const EducationCard = ({ image, title, desc, discountPrice, price }) => {
  return (
    <div className="w-[604px] h-[310px] relative">
      <img
        className="rounded-lg absolute top-0 left-0 -z-10"
        src={`./images/${image}.webp`}
        alt={image}
      />
      <div className="p-10">
        <h3 className="mt-1 text-2xl font-bold">{title}</h3>
        <h5 className="whitespace-pre">{desc}</h5>
        <button className="flex items-center text-sm font-semibold text-techit-gray-200 mt-4">
          더 알아보기
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
    </div>
  );
};

export default EducationCard;
