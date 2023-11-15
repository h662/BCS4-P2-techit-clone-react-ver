import TitleBar from "./TitleBar";

const ScheduleSection = () => {
  return (
    <section className="bg-blue-100 my-20 max-w-screen-xl mx-auto px-6">
      <TitleBar
        title="테킷 스쿨 일정 확인하기"
        desc="한 눈에 보는 테킷 스쿨 오픈 일정"
      />
      <div className="bg-green-100 h-[280px]">
        <div></div>
      </div>
    </section>
  );
};

export default ScheduleSection;
