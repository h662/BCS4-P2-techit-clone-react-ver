import { useState } from "react";

const TopBanner = () => {
  const [isClose, setIsClose] = useState(false);

  const onClickClose = () => {
    setIsClose(true);
  };

  return (
    <div
      className={`h-[42px] bg-purple-100 font-semibold ${isClose && "hidden"}`}
    >
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between">
        <div className="flex items-center">
          <span>앱 스쿨 사전설명회로 궁금증 해결하기</span>
          <img
            className="w-[52px]"
            src="./images/top_banner.webp"
            alt="top_banner"
          />
        </div>
        <button className="w-5" onClick={onClickClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-full w-full"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
