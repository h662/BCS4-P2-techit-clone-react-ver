import OnboardingCard from "./OnboardingCard";
import TitleBar from "./TitleBar";

const onboardingCardData = [
  {
    image: "onboarding_frontend",
    title: "프론트엔드 온보딩 트랙",
    desc: "만들면서 배우는 웹 개발 입문 강의",
    price: "376,200원",
    discountPrice: "37,620원",
  },
  {
    image: "onboarding_backend_java",
    title: "백엔드(Java) 온보딩 트랙",
    desc: "점유율 높은 대세 언어로 코딩 입문",
    price: "321,860원",
    discountPrice: "32,190원",
  },
  {
    image: "onboarding_backend_python",
    title: "백엔드(Python) 온보딩 트랙",
    desc: "활용도 높은 만능 언어로 코딩 입문",
    price: "321,860원",
    discountPrice: "32,190원",
  },
  {
    image: "onboarding_data",
    title: "데이터분석 온보딩 트랙",
    desc: "일잘러가 되고 싶은 직장인을 위한",
    price: "490,000원",
    discountPrice: "49,000원",
  },
  {
    image: "onboarding_blockchain",
    title: "블록체인 온보딩 트랙",
    desc: "초보자도 알기 쉬운 블록체인의 모든 것",
    price: "490,000원",
    discountPrice: "49,000원",
  },
];

const OnboardingSection = () => {
  return (
    <section className="mt-20 max-w-screen-xl mx-auto px-6">
      <TitleBar title="테킷 온보딩 트랙" desc="K-Digital 기초역량훈련 클래스" />
      <div className=" mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
        {onboardingCardData.map((v, i) => (
          <OnboardingCard
            key={i}
            image={v.image}
            title={v.title}
            desc={v.desc}
            price={v.price}
            discountPrice={v.discountPrice}
          />
        ))}
      </div>
    </section>
  );
};

export default OnboardingSection;
