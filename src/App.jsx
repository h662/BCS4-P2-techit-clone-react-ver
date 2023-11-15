import AlarmBanner from "./components/AlarmBanner";
import Banner from "./components/Banner";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
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
      <AlarmBanner />
      <OnboardingSection />
      <EducationSection />
      <Footer />
    </div>
  );
};

export default App;
