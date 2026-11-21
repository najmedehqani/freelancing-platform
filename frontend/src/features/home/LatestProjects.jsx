import { useEffect, useRef } from "react";
import useProjects from "../projects/useProjects";
import ProjectCard from "../projects/ProjectCard";
import { Link } from "react-router-dom";
import LatestProjectsSkeleton from "./LatestProjectsSkeleton";
import { Reveal } from "../../animations/Reveal";
function LatestProjects() {
  const { isLoading, projects = [] } = useProjects();
  const latestProjects = projects
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
    .slice(0, 5);
  const railRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || latestProjects.length <= 1) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    // Scroll the rail (never the page) to a card, using live geometry so it
    // works identically in LTR and RTL and self-corrects each tick.
    const scrollToCard = (card) => {
      const railRect = rail.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      rail.scrollBy({
        left: cardRect.left - railRect.left,
        behavior: "smooth",
      });
    };

    let index = 0;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      const cards = rail.children;
      if (!cards.length) return;
      index = (index + 1) % cards.length;
      scrollToCard(cards[index]);
    }, 2800);

    return () => clearInterval(id);
  }, [latestProjects.length]);

  if (isLoading) return <LatestProjectsSkeleton />;

  return (
    <Reveal>
      <div className="md:mb-28 mb-20 rounded-xl p-3 md:p-6 bg-secondary-50">
        <div className="flex flex-col md:flex-row md:items-stretch gap-x-10 gap-y-8">
          <div className="flex flex-col items-center justify-start md:items-start md:justify-end gap-y-5 md:gap-y-6 text-secondary-800 flex-shrink-0 pb-0 md:pb-5">
            <h2 className="font-black text-2xl md:text-3xl">
              جدیدترین پروژه ها
            </h2>
            <Link to="/projects" className="btn btn--primary px-8">
              همه پروژه ها
            </Link>
          </div>

          <div className="flex-1 min-w-0">
            <ul
              ref={railRef}
              dir="rtl"
              tabIndex={0}
              aria-label="جدیدترین پروژه ها"
              onMouseEnter={() => (pausedRef.current = true)}
              onMouseLeave={() => (pausedRef.current = false)}
              onFocus={() => (pausedRef.current = true)}
              onBlur={() => (pausedRef.current = false)}
              onTouchStart={() => (pausedRef.current = true)}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-5
            rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {latestProjects.map((project) => (
                <li
                  key={project._id}
                  className="snap-start shrink-0 w-[300px] max-w-[85vw]"
                >
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default LatestProjects;
