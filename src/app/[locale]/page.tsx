import HomeHeroSection from "./components/HomeHeroSection";
import HomeSkillsSection from "./components/HomeSkillsSection";

export default function Home() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-4 md:px-16 container mx-auto space-y-24">
      <HomeHeroSection />
      <HomeSkillsSection />
    </div>
  );
}
