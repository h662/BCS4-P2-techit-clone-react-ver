import TopBanner from "./components/TopBanner";

const App = () => {
  return (
    <div className="font-pretendard">
      <TopBanner />
      <header className="bg-red-100 h-16">Header</header>
      <div className="bg-blue-100 h-[400px]">Banner</div>
      <section className="mt-20 bg-green-100 max-w-screen-xl mx-auto px-6">
        <div className="bg-red-100 h-[64.5px]">KDT</div>
        <div className=" bg-purple-100 grid grid-cols-4 gap-6 justify-items-center">
          <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
          <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
          <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
          <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
          <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
          <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
          <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
          <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
          <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
          <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
          <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
        </div>
      </section>
      <section className="bg-blue-100 my-20 max-w-screen-xl mx-auto px-6">
        <div className="bg-red-100 h-[64.5px]">TechIT Schedule</div>
        <div className="bg-green-100 h-[280px]">KDT</div>
      </section>
      <section className="bg-gray-100 h-[206px]"></section>
      <section className="mt-20 bg-green-100 max-w-screen-xl mx-auto px-6">
        <div className="bg-red-100 h-[64.5px]">TechIT Onboarding Track</div>
        <div className=" bg-purple-100 grid grid-cols-3 gap-6 justify-items-center">
          <div className="bg-yellow-100 w-[397px] h-[316px]">Card</div>
          <div className="bg-yellow-100 w-[397px] h-[316px]">Card</div>
          <div className="bg-yellow-100 w-[397px] h-[316px]">Card</div>
          <div className="bg-yellow-100 w-[397px] h-[316px]">Card</div>
          <div className="bg-yellow-100 w-[397px] h-[316px]">Card</div>
        </div>
      </section>
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
