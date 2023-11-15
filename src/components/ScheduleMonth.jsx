import { useState } from "react";

const monthData = [
  {
    date: "2023년 11월",
    comp: (
      <div className="w-full h-36 rounded-lg border hover:shadow-lg flex">
        <div className="w-52 h-full">
          <img
            className="rounded-l-lg h-full w-full object-cover"
            src="./images/kdt_android.webp"
            alt="kdt_android"
          />
        </div>
        <div className="p-4 flex flex-col justify-center items-start">
          <span className="kdt-ing">모집중</span>
          <h3 className="text-xl mt-2 mb-1 font-bold">앱 스쿨 : Android</h3>
          <h5 className="text-lg mb-1">
            앱 기초부터 앱 배포까지 실무에 능한 주니어 앱 개발자로 성장
          </h5>
          <div className="text-techit-gray-200">23.11.01 ~ 23.11.30 까지</div>
        </div>
      </div>
    ),
  },
  {
    date: "2023년 12월",
    comp: (
      <div className="w-full h-36 rounded-lg border hover:shadow-lg flex">
        <div className="w-52 h-full">
          <img
            className="rounded-l-lg h-full w-full object-cover"
            src="./images/kdt_design.webp"
            alt="kdt_design"
          />
        </div>
        <div className="p-4 flex flex-col justify-center items-start">
          <span className="kdt-alarm">사전알림신청</span>
          <h3 className="text-xl mt-2 mb-1 font-bold">디자인 스쿨 2기</h3>
          <h5 className="text-lg mb-1">
            경쟁력 있는 커리어의 시작, 프로젝트 중심 UX/UI 교육
          </h5>
          <div className="text-techit-gray-200">23.12.01 ~ 23.12.30 까지</div>
        </div>
      </div>
    ),
  },
  {
    date: "2024년 01월",
    comp: (
      <div className="w-full h-36 rounded-lg border hover:shadow-lg flex">
        <div className="w-52 h-full">
          <img
            className="rounded-l-lg h-full w-full object-cover"
            src="./images/kdt_python.webp"
            alt="kdt_python"
          />
        </div>
        <div className="p-4 flex flex-col justify-center items-start">
          <span className="kdt-alarm">사전알림신청</span>
          <h3 className="text-xl mt-2 mb-1 font-bold">
            백엔드 스쿨 9기 : Python
          </h3>
          <h5 className="text-lg mb-1">
            파이썬으로 배우는 백엔드 / 데브옵스 선택형 과정
          </h5>
          <div className="text-techit-gray-200">24.01.01 ~ 24.01.31 까지</div>
        </div>
      </div>
    ),
  },
];

const ScheduleMonth = () => {
  const [currentMonth, setCurrentMonth] = useState(0);

  const onClickPrev = () => {
    if (currentMonth === 0) {
      setCurrentMonth(monthData.length - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const onClickNext = () => {
    if (currentMonth === monthData.length - 1) {
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex">
        <button onClick={onClickPrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 lg:w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <span className="mx-2 text-2xl font-semibold">
          {monthData[currentMonth].date}
        </span>
        <button onClick={onClickNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-5 lg:w-6"
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
      <div className="w-full px-6 mt-4">{monthData[currentMonth].comp}</div>
    </div>
  );
};

export default ScheduleMonth;
