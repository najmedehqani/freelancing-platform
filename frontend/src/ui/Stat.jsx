import { toPersianNumbers } from "../utils/toPersianNumbers";

const colors = {
  primary: "bg-primary-100 text-primary-600",
  blue: "bg-blue-100 text-blue-700",
  orange: "bg-orange-100 text-orange-600",
};

function Stat({ icon, value, title, color }) {
  return (
    <div
      className="col-span-1 grid grid-rows-2 grid-cols-[6.4rem_1fr] bg-secondary-0 p-4 rounded-xl gap-x-4 transition-all duration-300 ease-out 
      shadow-[0_2px_12px_rgba(0,0,0,0.04)]
      hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]
      dark:shadow-[0_2px_12px_rgba(255,255,255,0.02)]
      dark:hover:shadow-[0_4px_12px_rgba(255,255,255,0.06)]"
    >
      <div
        className={`row-span-2 flex items-center justify-center
       p-2 aspect-square rounded-full
       ${colors[color]}
  `}
      >
        {icon}
      </div>
      <h5 className="font-bold text-secondary-500 sm:text-lg self-center">
        {title}
      </h5>
      <p className="text-3xl font-bold text-secondary-900">
        {toPersianNumbers(value)}
      </p>
    </div>
  );
}
export default Stat;
