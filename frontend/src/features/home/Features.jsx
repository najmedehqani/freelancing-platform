import { Link } from "react-router-dom";
import CreateProjectButton from "../owner/projects/CreateProjectButton";
import { Reveal } from "../../animations/Reveal";
function Features() {
  return (
    <>
      <Reveal>
        <div className="mb-20 md:mb-24 bg-secondary-50 p-4 sm:p-8 rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-9 lg:gap-14">
            <div className="w-full self-center">
              <p className="text-sm text-blue-500 mb-4">برای کارفرمایان</p>
              <h2 className="text-2xl md:text-3xl font-black text-secondary-800 mb-4 md:mb-5 leading-snug lg:leading-tight">
                پروژه‌تان را به متخصصان بسپارید
              </h2>
              <p className="text-secondary-500 leading-8 text-base lg:text-lg mb-7">
                پروژه خود را ثبت کنید و پیشنهادهای فریلنسرها را دریافت کنید.
                پیشنهادها را مقایسه کرده و مناسب‌ترین فرد را انتخاب کنید.
              </p>
              <CreateProjectButton />
            </div>
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] xl:aspect-[16/9] overflow-hidden bg-secondary-200 rounded-xl">
              <img
                src="/owner.png"
                loading="lazy"
                decoding="async"
                alt="کارفرما"
                className="absolute inset-0 w-full h-full object-cover object-right"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mb-20 md:mb-24 bg-secondary-50 p-4 sm:p-8 rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-9 lg:gap-14">
            <div className="w-full self-center">
              <p className="text-sm text-blue-500 mb-4">برای فریلنسرها</p>
              <h2 className="text-2xl md:text-3xl font-black text-secondary-800 mb-4 md:mb-5 leading-snug lg:leading-tight">
                فرصت‌های کاری مناسب را پیدا کنید
              </h2>
              <p className="text-secondary-500 leading-8 text-base lg:text-lg mb-7">
                پروژه‌های متناسب با تخصص خود را پیدا کنید، پیشنهاد دهید و با
                انجام موفق آن‌ها درآمد کسب کنید.
              </p>
              <Link
                to="/projects"
                className="btn btn--primary px-8 inline-block"
              >
                لیست پروژه ها
              </Link>
            </div>
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] xl:aspect-[16/9] overflow-hidden bg-secondary-200 rounded-xl">
              <img
                src="/freelancer.png"
                loading="lazy"
                decoding="async"
                alt="فریلنسر"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}

export default Features;
