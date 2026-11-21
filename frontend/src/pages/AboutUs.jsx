import Header from "../components/Header";
import Footer from "../components/Footer";
const roles = [
  {
    title: "ادمین",
    description: "مدیریت و تأیید کاربران، ایجاد و مدیریت دسته‌بندی‌ها",
  },
  {
    title: "کارفرما",
    description: "ایجاد و مدیریت پروژه، بررسی پیشنهادها و انتخاب فریلنسر",
  },
  {
    title: "فریلنسر",
    description: "جستجو و فیلتر پروژه‌ها، ارسال پیشنهاد و پیگیری وضعیت آن‌",
  },
];

const features = [
  "مدیریت پروژه و پیشنهادها",
  "جستجو و فیلتر پروژه‌ها",
  "داشبورد اختصاصی کاربران",
  "مدیریت نقش‌ها و دسترسی‌ها",
  "مدیریت و ایجاد دسته‌بندی‌ها",
];

const technologies = [
  "React",
  "TanStack Query",
  "React Hook Form + Yup",
  "Tailwind CSS",
  "Axios",
  "Vite",
  "React Router",
  "Framer Motion",
  "HeadlessUI",
];

export default function AboutProject() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 mt-6 mb-12">
        <div className="space-y-5">
          {/* Header */}
          <header>
            <span className="mb-3 inline-block text-sm font-medium text-primary-500">
              درباره پروژه
            </span>

            <h1 className="text-2xl font-black leading-snug lg:leading-tight text-secondary-800 md:text-3xl">
              یک پلتفرم فریلنسری برای ارتباط
              <span className="text-primary-400"> کارفرما و فریلنسر</span>
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-8 text-secondary-500">
              این یک نمونه‌کار فرانت‌اند با الهام از پلتفرم‌های واقعی فریلنسری
              که با هدف نمایش توانایی طراحی و پیاده‌سازی یک اپلیکیشن چندنقشی و
              تعاملی ساخته شده است.
            </p>
          </header>

          {/* Roles */}
          <section className="rounded-2xl border border-secondary-200 p-4 shadow-sm sm:p-7">
            <h2 className="mb-6 text-xl font-bold text-secondary-800">
              نقش‌های سیستم
            </h2>

            <div className="grid gap-4 sm:grid-cols-3">
              {roles.map((role) => (
                <div
                  key={role.title}
                  className="rounded-xl bg-secondary-50 p-5"
                >
                  <h3 className="font-semibold text-secondary-800">
                    {role.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-secondary-500">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="rounded-2xl border border-secondary-200 p-4 shadow-sm sm:p-7">
            <h2 className="mb-6 text-xl font-bold text-secondary-800">
              امکانات
            </h2>

            <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-600 dark:text-primary-100 text-sm">
                    ✓
                  </span>

                  <span className="text-sm text-secondary-600">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="rounded-2xl border border-secondary-200 p-4 shadow-sm sm:p-7">
            <h2 className="mb-6 text-xl font-bold text-secondary-800">
              تکنولوژی‌های استفاده‌شده
            </h2>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-secondary-50 px-4 py-2 text-sm font-medium text-secondary-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Goal */}
          <section className="rounded-2xl bg-primary-100 dark:bg-primary-600 p-4 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-primary-600 dark:text-primary-100">
              هدف پروژه
            </h2>

            <p className="text-sm leading-7 text-primary-600 dark:text-primary-100">
              تمرکز پروژه روی ساخت تجربه‌ای نزدیک به یک محصول واقعی، با مدیریت
              نقش‌ها، داده‌ها، فرم‌ها و جریان کاری کاربران بوده است.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
