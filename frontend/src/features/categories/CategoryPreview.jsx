import {
  CodeBracketIcon,
  PencilSquareIcon,
  BriefcaseIcon,
  PaintBrushIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import useCategories from "../../hooks/useCategories";
import CategoryPreviewSkeleton from "./CategoryPreviewSkeleton";
import { Reveal } from "../../animations/Reveal";

const categoryMeta = {
  "dev-and-it": {
    icon: CodeBracketIcon,
    from: "#007E46",
    to: "#16A34A",
  },

  "content-and-translation": {
    icon: PencilSquareIcon,
    from: "#7C3AED",
    to: "#A78BFA",
  },

  "design-and-creativity": {
    icon: PaintBrushIcon,
    from: "#0891B2",
    to: "#06B6D4",
  },

  business: {
    icon: BriefcaseIcon,
    from: "#D97706",
    to: "#F59E0B",
  },
};
function CategoryPreview() {
  const { rawCategories, isLoading } = useCategories();
  if (isLoading) return <CategoryPreviewSkeleton />;
  return (
    <Reveal>
      <div className="mt-14 md:mb-24 mb-20">
        <h2 className="font-black text-2xl md:text-3xl text-secondary-800 mb-8">
          دسته‌بندی خدمات
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rawCategories.map((category) => {
            const meta = categoryMeta[category.englishTitle];

            if (!meta) return null;

            const Icon = meta.icon;

            return (
              <Link
                key={category._id}
                to={`/categories/${category._id}`}
                className="group"
              >
                <article
                  className="rounded-3xl border border-secondary-200 p-7 lg:p-4 xl:p-7 transition ease-out duration-300 hover:-translate-y-2 
                 shadow-[0_2px_12px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]
                  dark:shadow-[0_2px_12px_rgba(255,255,255,0.02)]
                   dark:hover:shadow-[0_4px_12px_rgba(255,255,255,0.06)] h-full"
                >
                  <div
                    className="mb-5 flex h-16 w-16 lg:w-14 lg:h-14 xl:h-16 xl:w-16 items-center justify-center rounded-2xl text-white transition duration-300 ease-out group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${meta.from}, ${meta.to})`,
                    }}
                  >
                    <Icon
                      className="w-11 h-11 lg:w-9 lg:h-9 xl:w-11 xl:h-11"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <h3
                      className="text-lg lg:text-base xl:text-lg font-bold text-secondary-700 transition-colors 
                duration-300 ease-out group-hover:text-secondary-900"
                    >
                      {category.title}
                    </h3>

                    <div
                      className="w-11 h-11 rounded-full bg-secondary-100 flex items-center 
                justify-center transition duration-300 ease-out group-hover:-translate-x-1
                 group-hover:bg-secondary-0 shadow-sm 
                 group-hover:shadow-[0px_1.3px_5px_0px_rgba(0,0,0,0.17)] 
                 dark:group-hover:shadow-[0px_2px_8px_rgba(0,0,0,.35)] shrink-0"
                    >
                      <ArrowLeftIcon
                        className="w-6 h-6"
                        style={{ color: meta.from }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

export default CategoryPreview;
