import {
  UserPlusIcon,
  FolderPlusIcon,
  UserGroupIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    icon: UserPlusIcon,
    title: "۱. ثبت نام و ساخت پروفایل",
    description: "در چند دقیقه ثبت‌نام کن و پروفایل حرفه‌ای خودت رو بساز.",
  },
  {
    icon: FolderPlusIcon,
    title: "۲. ایجاد پروژه",
    description: "جزئیات پروژه‌ت رو وارد کن و نیازهات رو مشخص کن.",
  },
  {
    icon: UserGroupIcon,
    title: "۳. انتخاب فریلنسر",
    description: "از بین پیشنهادهای فریلنسرها، بهترین گزینه رو انتخاب کن.",
  },
  {
    icon: RocketLaunchIcon,
    title: "۴. شروع همکاری",
    description: "پروژه رو شروع کن و تا پایان کار در ارتباط باش.",
  },
];

function ProjectRegistrationSteps() {
  return (
    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none">
      {steps.map((step) => {
        const Icon = step.icon;
        return (
          <li key={step.title} className="p-5 flex flex-col gap-3">
            <div className="mb-4 flex w-14 h-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl text-white bg-[linear-gradient(135deg,#007E46,#16A34A)]">
              <Icon className=" w-9 h-9 sm:w-11 sm:h-11" aria-hidden="true" />
            </div>
            <h3 className="font-bold sm:text-lg text-secondary-800">
              {step.title}
            </h3>
            <p className="text-sm sm:text-base text-secondary-600 leading-relaxed">
              {step.description}
            </p>
          </li>
        );
      })}
    </ol>
  );
}

export default ProjectRegistrationSteps;
