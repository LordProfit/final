import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ParticlesContainer from "./components/ParticlesContainer";
import Testimonials from "./components/Testimonials";
import OrbitControls from "./components/OrbitControls";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#16142c]">
      <Navbar />
      <div className="container items-center px-12 py-4 mx-auto mt-24">
      <ParticlesContainer />

        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <Testimonials />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
