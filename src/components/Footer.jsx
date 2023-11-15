const Footer = () => {
  return (
    <footer className="mt-40 border-t">
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        <div className="flex items-start justify-between">
          <img
            src="https://techit.education/img/techit_by_likelion_logo.svg"
            alt="techit_by_likelion"
          />
          <div className="flex">
            <div>
              <h5 className="text-techit-gray-200 text-xs">모든 교육 경험</h5>
              <ul className="mt-4">
                <li className="text-sm font-semibold mb-3">KDT 테킷 스쿨</li>
                <li className="text-sm font-semibold mb-3">온보딩 트랙</li>
                <li className="text-sm font-semibold mb-3">
                  스타트업 스테이션
                </li>
                <li className="text-sm font-semibold mb-3">이벤트</li>
                <li className="text-sm font-semibold mb-3">기업 해커톤</li>
              </ul>
            </div>
            <div className="ml-28">
              <h5 className="text-techit-gray-200 text-xs">회사 소개</h5>
              <ul className="mt-4">
                <li className="text-sm font-semibold mb-3 flex items-center">
                  LIKELION
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </li>
                <li className="text-sm font-semibold mb-3 flex items-center">
                  채용
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t mt-8">
          <ul className="mt-3 flex gap-3">
            <li className="w-6 h-6 flex justify-center items-center bg-pink-400 text-white text-xs font-semibold rounded-full">
              블
            </li>
            <li className="w-6 h-6 flex justify-center items-center bg-pink-400 text-white text-xs font-semibold rounded-full">
              체
            </li>
            <li className="w-6 h-6 flex justify-center items-center bg-pink-400 text-white text-xs font-semibold rounded-full">
              스
            </li>
            <li className="w-6 h-6 flex justify-center items-center bg-pink-400 text-white text-xs font-semibold rounded-full">
              최
            </li>
            <li className="w-6 h-6 flex justify-center items-center bg-pink-400 text-white text-xs font-semibold rounded-full">
              고
            </li>
          </ul>
          <div className="flex items-center mt-6 text-xs text-techit-gray-200">
            <span>이용약관</span>
            <div className="w-1 h-1 bg-techit-gray-200 rounded-full mx-2"></div>
            <span>개인정보처리방침</span>
            <div className="w-1 h-1 bg-techit-gray-200 rounded-full mx-2"></div>
            <span>환불규정</span>
          </div>
          <div className="flex items-center mt-2 text-xs text-techit-gray-200">
            <span className="border-r border-techit-gray-200 pr-2">
              상호명: h662
            </span>
            <span className="ml-2 border-r border-techit-gray-200 pr-2">
              대표: 홍성현
            </span>
            <span className="ml-2 border-r border-techit-gray-200 pr-2">
              contact@h662.com
            </span>
            <span className="ml-2 border-r border-techit-gray-200 pr-2">
              사업자 번호 : 123-45-67890
            </span>
            <span className="ml-2">
              통신판매업 신고번호 : 2019-서울강남-00774
            </span>
          </div>
          <div className="flex items-center mt-1 text-xs text-techit-gray-200">
            <span>
              주소 : 서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층
            </span>
            <span className="mr-2">
              Copyright © 2022 멋쟁이사자처럼 All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
