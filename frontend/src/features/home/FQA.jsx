import Accordion from "../../ui/Accordion";
const faqItems = [
  {
    question: "چه زمانی می‌توانم پروژه خود را ثبت کنم؟",
    answer:
      "پس از تأیید پروفایل، می‌توانید پروژه خود را ثبت کرده و اطلاعات و جزئیات موردنیاز آن را وارد کنید.",
  },
  {
    question: "چه زمانی می‌توانم برای یک پروژه Proposal ارسال کنم؟",
    answer:
      "پس از تأیید پروفایل، می‌توانید پروژه‌های فعال را بررسی کرده و برای پروژه‌هایی که با مهارت‌های شما مطابقت دارند Proposal ارسال کنید.",
  },
  {
    question: "چطور فریلنسر مناسب پروژه‌ام را انتخاب کنم؟",
    answer:
      "کارفرما می‌تواند Proposalهای دریافت‌شده برای هر پروژه را در پنل خود بررسی و مقایسه کرده و در نهایت فریلنسر موردنظر خود را انتخاب کند.",
  },
  {
    question: "بعد از ارسال Proposal، چطور از وضعیت آن مطلع شوم؟",
    answer:
      "وضعیت Proposalهای ارسال‌شده از طریق پنل فریلنسر قابل مشاهده است و می‌توانید نتیجه بررسی کارفرما را پیگیری کنید.",
  },
  {
    question: "آیا می‌توانم پروژه‌ای که ایجاد کرده‌ام را ویرایش یا حذف کنم؟",
    answer:
      "بله، کارفرما می‌تواند پروژه‌های ایجادشده را از طریق پنل خود ویرایش یا حذف کند.",
  },
];
function FAQ() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-12 gap-9 mb-20">
      <div className="text-center lg:text-right lg:flex-1">
        <h2 className="text-2xl md:text-3xl font-black text-secondary-800 mb-4 md:mb-5">
          سوالات متداول
        </h2>
        <p className="text-secondary-500 leading-8 text-base lg:text-lg">
          اگر هنگام استفاده از این پلتفرم برایتان سؤالی پیش آمده، احتمالاً پاسخ
          آن را اینجا پیدا می‌کنید. سعی کرده‌ایم به ساده‌ترین شکل به پرسش‌های
          پرتکرار کاربران پاسخ دهیم.
        </p>
      </div>
      <div className="lg:flex-1">
        {faqItems.map((item, index) => (
          <Accordion
            key={item.question}
            wrapperClass="w-full bg-secondary-50 p-5 mb-5 last:mb-0 rounded-2xl"
            buttonClass="group flex items-center justify-between w-full gap-1"
            title={
              <div className="text-secondary-800 text-base font-semibold mb-1">
                {item.question}
              </div>
            }
            iconClass="text-secondary-800 w-4 h-4 sm:w-5 sm:h-5 shrink-0"
            pannelClass=" pt-2 "
            showDivider
          >
            <div className="text-sm md:text-[15px] text-secondary-600 leading-relaxed">
              {item.answer}
            </div>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
