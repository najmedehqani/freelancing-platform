import { Reveal } from "../animations/Reveal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CategoryPreview from "../features/categories/CategoryPreview";
import Features from "../features/home/Features";
import FAQ from "../features/home/FQA";
import HeroSection from "../features/home/HeroSection";
import LatestProjects from "../features/home/LatestProjects";

function Home() {
  return (
    <>
      <Header />
      <div className="container xl:max-w-screen-xl">
        <HeroSection />
        <CategoryPreview />
        <LatestProjects/>
        <Features/>
        <Reveal>
          <FAQ />
        </Reveal>
      </div>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
export default Home;
