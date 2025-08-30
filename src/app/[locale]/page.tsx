import Navbar from "../../components/navbar";
import { Footer } from "../../components/footer";
import { ContactSection } from "./pages/contact-section";
import { EducationExperience } from "./pages/education-experience";
import HeroSection from "./pages/hero-section";
import { ProjectsSection } from "./pages/projects";
import SkillsSection from "./pages/skills-section";
import ScrollToTopButton from "@/components/ui/scrollToTopButton";


export default async function Home() {
    return (
        <div>
            <Navbar />
            <div id="hero-section">
                <HeroSection />
            </div>
            <div id="skills-section">
                <SkillsSection />
            </div>
            <div id="education-section">
                <EducationExperience />
            </div>
            <div id="projects-section">
                <ProjectsSection />
            </div>
            <div id="contact-section">
                <ContactSection />
            </div>
            <div className="footer">
                <Footer />
            </div>

            <ScrollToTopButton />
        </div>
    );
}

