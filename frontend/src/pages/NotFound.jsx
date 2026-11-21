import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";
import Button from "../ui/Button";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex flex-col items-center pt-10">
        <div className="w-full max-w-lg mb-2.5">
          <img src="/404.png" alt="404" className="w-full h-auto" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-secondary-800 mb-6 ">
          صفحه ای که دنبالش بودید، پیدا نشد
        </h1>
        <Button variant="secondary" onClick={moveBack} className="flex items-center gap-x-1 px-5 py-2.5 ">
          <HiArrowRight className="w-5 h-5" />
          <span> برگشت</span>
        </Button>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
