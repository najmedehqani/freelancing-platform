import { SiInstagram, SiLinkedin, SiTelegram } from "react-icons/si";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer
      className="py-6 md:py-8 text-secondary-600 border-t-2 border-t-secondary-50 
bg-secondary-50 px-4 rounded-t-3xl dark:bg-secondary-100 dark:border-t-secondary-100"
    >
      <div className="grid gap-8 md:gap-14 grid-cols-4 container md:max-w-screen-xl ">
        <div className="col-span-4 md:col-span-2 flex flex-col">
          <div>
            <h3 className="font-bold md:text-lg"> اپلیکشن فریلنسری</h3>
            <p className="text-sm leading-7 max-w-lg">
              اینجا جایی است برای پیدا کردن فرصت‌های جدید و شکل‌دادن به
              همکاری‌های ارزشمند. ما ارتباط میان متخصصان و کسب‌وکارها را ساده‌تر
              می‌کنیم تا هر پروژه با مهارت و ایده‌های مناسب، مسیر بهتری را طی
              کند. چه به دنبال متخصصی برای اجرای پروژه‌تان باشید و چه بخواهید
              مهارت‌هایتان را در مسیرهای تازه به کار بگیرید، اینجا فضایی برای
              شروع همکاری‌های حرفه‌ای و خلق تجربه‌های موفق است.
              <br /> شما می توانید از طریق اینستاگرام، تلگرام و لینکدین با ما در
              ارتباط باشید.
            </p>
          </div>
          <div className="w-full flex gap-x-8 items-center mt-4">
            <a
              href="#"
              // target="_blank"
              // rel="noopener noreferrer"
              aria-label="اینستاگرام"
              className=" hover:text-primary-500 transition-all ease-out duration-200"
            >
              <SiInstagram className="w-6 h-6 " />
            </a>
            <a
              href="#"
              // target="_blank"
              // rel="noopener noreferrer"
              aria-label="تلگرام"
              className="hover:text-primary-500 transition-all ease-out duration-200"
            >
              <SiTelegram className="w-6 h-6" />
            </a>
            <a
              href="#"
              // target="_blank"
              // rel="noopener noreferrer"
              aria-label="لینکدین"
              className="hover:text-primary-500 transition-all ease-out duration-200"
            >
              <SiLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1">
          <h4 className="font-bold md:text-lg mb-3"> دسترسی سریع</h4>
          <ul className="text-sm space-y-3 list-disc pr-4">
            <li>
              <Link
                className="py-2 hover:text-primary-500 transition-all ease-out duration-200"
                to="/auth"
              >
                ورود یا ثبت نام
              </Link>
            </li>
            <li>
              <Link
                className="py-2 hover:text-primary-500 transition-all ease-out duration-200"
                to="/projects"
              >
                پروژه ها
              </Link>
            </li>
            <li>
              <Link
                className="py-2 hover:text-primary-500 transition-all ease-out duration-200"
                to="#"
              >
                راهنمای کاربران
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-4 md:col-span-1">
          <h4 className="font-bold md:text-lg mb-3"> آنچه باید بدانید</h4>
          <ul className="text-sm space-y-3 list-disc pr-4">
            <li>
              <Link
                className="py-2 hover:text-primary-500 transition-all ease-out duration-200"
                to="/about-us"
              >
                درباره ما
              </Link>
            </li>
            <li>
              <Link
                className="py-2 hover:text-primary-500 transition-all ease-out duration-200"
                to="#"
              >
                قوانین و مقررات
              </Link>
            </li>
            <li>
              <Link
                className="py-2 hover:text-primary-500 transition-all ease-out duration-200"
                to="#"
              >
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
