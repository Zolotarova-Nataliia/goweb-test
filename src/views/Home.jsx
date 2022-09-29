import AboutSection from "../components/AboutSection/AboutSection";
import BlogSection from "../components/BlogSection/BlogSection";
import BusinessSection from "../components/BusinessSection/BusinessSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import TeamSection from "../components/TeamSection/TeamSection";

export default function HashLinkPage() {
  return (
    <div>
      <Header />
      <Hero id="home" />
      <AboutSection id="about" />
      <BusinessSection id="cases" />
      <BlogSection id="blog" />
      <TeamSection />
      <ContactSection id="contact" />
      <Footer />
    </div>
  );
}
