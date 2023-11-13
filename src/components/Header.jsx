const Header = () => {
  return (
    <header className="max-w-screen-xl mx-auto h-16 flex justify-between items-center sticky top-0">
      <div className="flex items-center">
        <button className="w-36 h-16 p-6">
          <img
            src="https://techit.education/img/techit_logo.svg"
            alt="TechIT"
          />
        </button>
        <ul className="hidden lg:flex">
          <li className="header-menu">테킷 스쿨</li>
          <li className="header-menu relative">
            <div className="absolute right-2 -top-3 w-4 h-4 text-white bg-[#ef4444] text-[10px] rounded-full flex justify-center items-center">
              N
            </div>
            온보딩 트랙
          </li>
          <li className="header-menu">스타트업 스테이션</li>
          <li className="header-menu border-r">이벤트</li>
          <li className="header-menu">기업 해커톤</li>
        </ul>
      </div>
      <button className="header-menu text-techit-gray-100 hidden lg:inline-block">
        로그인
      </button>
      <div className="flex lg:hidden">
        <button className="px-4 rounded-full font-semibold text-sm border h-9">
          로그인
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-auto w-6 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
