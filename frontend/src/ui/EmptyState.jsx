function EmptyState({ description }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="/empty-projects.svg"
        alt="آیکون وضعیت خالی"
        className="w-[200px] h-auto"
      />
      <p className=" text-secondary-700 text-sm md:text-base text-center font-bold">
        {description}
      </p>
    </div>
  );
}

export default EmptyState;
