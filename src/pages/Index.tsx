import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import FloatingSocialIcons from "@/components/FloatingSocialIcons";
import Hero from "@/components/Hero";
import ToolsSection from "@/components/ToolsSection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import PersonalProjects from "@/components/PersonalProjects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      <FloatingSocialIcons />
      
      <main>
        <Hero />
        <About />
        <ToolsSection />
        <Skills />
        <Experience />
        <Projects />
        <PersonalProjects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
