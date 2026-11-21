import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options, filterLabel }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0)?.value;

  function handleClick(value) {
    if (value === currentFilter) return;
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set(filterField, value);
      return next;
    });
  }

  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>{filterLabel}</span>
      <div
        role="group"
        aria-label={`فیلتر ${filterLabel}`}
        className="flex items-center gap-x-2 p-1 border border-secondary-100 bg-secondary-0 rounded-lg"
      >
        {options.map(({ value, label }) => {
          const isActive = value === currentFilter;
          return (
            <button
              type="button"
              aria-pressed={isActive}
              key={value}
              onClick={() => handleClick(value)}
              className={`whitespace-nowrap rounded-md px-4 py-1 font-bold transition-all duration-300
             ${
               isActive
                 ? "!bg-primary-500 text-white"
                 : "bg-secondary-0 text-secondary-800"
             } 
              `}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Filter;
