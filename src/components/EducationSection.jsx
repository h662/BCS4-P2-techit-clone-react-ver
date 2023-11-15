import EducationCard from "./EducationCard";
import TitleBar from "./TitleBar";

const educationCardData = [
  {
    image: "education_kdt",
    title: "테킷 KDT 스쿨",
    desc: "100% 전액지원 받고 테킷 KDT스쿨에서\n커리어 목표를 달성해보세요.",
  },
  {
    image: "education_onboarding",
    title: "온보딩 트랙",
    desc: "교육비 지원받고 기본기도 쌓고!\n커리어 완성의 첫 시작을 함께하세요.",
  },
  {
    image: "education_startup",
    title: "스타트업 스테이션",
    desc: "IT스타트업 창업 시작을 위한\n창업 온보딩 교육 함께 도전해요.",
  },
];

const EducationSection = () => {
  return (
    <section className="mt-20 max-w-screen-xl mx-auto px-6">
      <TitleBar title="모든 교육 경험" desc="테킷이 두드리는 새로운 교육" />
      <div className="mt-10 grid grid-cols-1 xl:grid-cols-2 gap-6 justify-items-center">
        {educationCardData.map((v, i) => (
          <EducationCard
            key={i}
            image={v.image}
            title={v.title}
            desc={v.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
