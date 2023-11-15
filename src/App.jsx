import AlarmBanner from "./components/AlarmBanner";
import Banner from "./components/Banner";
import EducationSection from "./components/EducationSection";
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
      <EducationSection />
      <footer className="mt-40 max-w-screen-xl mx-auto bg-gray-100 h-[418px]">
        Footer
      </footer>
    </div>
  );
};

export default App;
