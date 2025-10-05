import "animate.css";
import Hero from "@/components/Hero/hero"
import AboutMe from "@/components/About/aboutme";
import Skill from "@/components/Skill/skill";
import Portfolio from "@/components/Portfolio/portfolio";
import Experience from "@/components/experience/experience";
import Testi from "@/components/Testi/testi";
import Contact from "@/components/contactform/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-sky-600 bg-cover ">
      {/* NAVBAR */}
      {/* HERO */}
        <Hero />
      {/*about me */}
        <AboutMe />
      {/* skill section*/}
        <Skill />
      {/* portfolio section */}
        <Portfolio />
      {/* experience section*/}
        <Experience />
      {/* testimonials section */}
        <Testi />
      {/* contact section */}
        <Contact />
      {/* Footer */}
       <Footer />
    </div>
  );
}