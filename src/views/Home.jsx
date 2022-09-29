import AboutSection from "../components/AboutSection/AboutSection";
import BlogSection from "../components/BlogSection/BlogSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import TeamSection from "../components/TeamSection/TeamSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <BlogSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
