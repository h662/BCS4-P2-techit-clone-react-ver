import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const bannerData = [
  {
    title: "TECHIT IT 직무 부트캠프 사전알림",
    desc: "알림 소식 받고, 부트캠프 소식 놓치지 않기!",
    image: "banner_1.webp",
  },
  {
    title: "TECHIT 카카오톡 채널 추가 이벤트",
    desc: "개발자 성장에 필요한 모든 것이 담긴 시크릿 페이지 제공",
    image: "banner_2.webp",
  },
  {
    title: "앱 스쿨 : Android 2기",
    desc: "탄탄한 기본기와 프로젝트 경험을 갖춘 온리원 앱 개발자로 가는 길",
    image: "banner_3.webp",
  },
  {
    title: "TECHIT 온보딩 트랙",
    desc: "수강료 0원 & 취준생, 직장인 누구나 수강 가능한 기초 과정!",
    image: "banner_4.webp",
  },
  {
    title: "DX 교육의 모든 솔루션, 기업 해커톤",
    desc: "상담 신청하고, 테킷 기업 교육을 경험해 보세요!",
    image: "banner_5.webp",
  },
];

const Banner = () => {
  const [page, setPage] = useState(1);

  const sliderRef = useRef();

  const onClickNext = () => {
    sliderRef.current.slickNext();
    getCurrentPage();
  };
  const onClickPrev = () => {
    sliderRef.current.slickPrev();
    getCurrentPage();
  };

  const getCurrentPage = () => {
    const currentPage = sliderRef.current.innerSlider.state.currentSlide;
    setPage(currentPage + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      getCurrentPage();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="bg-blue-100 relative">
      <ul>
        <Slider
          ref={sliderRef}
          arrows={false}
          autoplay={true}
          autoplaySpeed={5000}
          speed={500}
        >
          {bannerData.map((v, i) => (
            <li key={i} className="h-[400px] relative">
              <div className="max-w-screen-xl mx-auto px-6 h-full flex flex-col justify-center">
                <h3 className="text-[32px] font-bold">{v.title}</h3>
                <h5 className="text-[18px] mt-2">{v.desc}</h5>
              </div>
              <img
                className="absolute h-full object-cover top-0 left-0 -z-10"
                src={`./images/${v.image}`}
                alt="banner_1"
              />
            </li>
          ))}
        </Slider>
      </ul>
      <div className="absolute bottom-6 w-[1280px] left-1/2 -translate-x-1/2 px-6">
        <div className="bg-black bg-opacity-30 text-white p-[5px] text-xs flex w-fit rounded-full gap-2 px-3">
          <span>{page} / 5</span>
          <button onClick={onClickPrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button onClick={onClickNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
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
    </div>
  );
};

export default Banner;
