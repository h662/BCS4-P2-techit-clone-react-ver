const AlarmBanner = () => {
  return (
    <section className="bg-[#F0F4F9] h-[206px] relative -z-20 mt-20">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col justify-center h-full">
        <h3 className="text-[#072c56] font-semibold mb-1">
          테킷 스쿨 사전알림
        </h3>
        <h5 className="text-2xl font-semibold mb-4">
          기다리는 스쿨이 있으신가요?
          <br />
          가장 먼저 모집 소식을 보내 드릴게요
        </h5>
        <button className="flex items-center text-sm font-semibold text-techit-gray-200">
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
      <img
        className="mx-auto h-[206px] absolute top-0 left-1/2 -translate-x-1/2 -z-10"
        src="./images/banner_1.webp"
        alt="Alarm"
      />
    </section>
  );
};

export default AlarmBanner;
