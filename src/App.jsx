import AlarmBanner from "./components/AlarmBanner";
import Banner from "./components/Banner";
import Header from "./components/Header";
import KdtSection from "./components/KdtSection";
import OnboardingSection from "./components/OnboardingSection";
import ScheduleSection from "./components/ScheduleSection";
import TopBanner from "./components/TopBanner";

const App = () => {
  return (
    <div className="font-pretendard text-techit-gray-300">
      <TopBanner />
      <Header />
      <Banner />
      <KdtSection />
      <ScheduleSection />
      <AlarmBanner />
      <OnboardingSection />
      <section className="mt-20 bg-green-100 max-w-screen-xl mx-auto px-6">
        <div className="bg-red-100 h-[64.5px]">Education</div>
        <div className=" bg-purple-100 grid grid-cols-2 gap-6 justify-items-center">
          <div className="bg-yellow-100 w-[604px] h-[310px]">Card</div>
          <div className="bg-yellow-100 w-[604px] h-[310px]">Card</div>
          <div className="bg-yellow-100 w-[604px] h-[310px]">Card</div>
        </div>
      </section>
      <footer className="mt-40 max-w-screen-xl mx-auto bg-gray-100 h-[418px]">
        Footer
      </footer>
    </div>
  );
};

export default App;
