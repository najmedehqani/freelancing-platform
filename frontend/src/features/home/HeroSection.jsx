import Search from "../../ui/Search";

function HeroSection() {
  return (
    <section className="relative w-full aspect-square min-[480px]:aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-secondary-200 rounded-xl mt-2">
      <img
        src="/banner.png"
        alt="بنر"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchpriority="high"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center min-[480px]:justify-end">
        <div className="flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl gap-3 sm:gap-5 md:gap-7 lg:gap-8 p-2 sm:p-5 md:p-6 lg:p-12 ">
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl xl:text-4xl font-extrabold leading-[2] text-white">
            برای هر کاری، یک <span className="text-primary-400">متخصص</span>؛
            <br />
            برای هر متخصص، یک <span className="text-primary-400">فرصت</span>
          </h1>
          <Search pathname="/projects"/>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
