import { Contact } from "@/components/Contact";
import { DevSteps } from "@/components/DevSteps";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Products } from "@/components/Products";
import { Projects } from "@/components/Projects";
import { Team } from "@/components/Team";
import { Typography } from "@/components/Typography";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Typography />
      <Products />
      <Projects />
      <Contact />
      <DevSteps />
      <Team />
      <Faq />
      <Footer />
    </main>
  );
}
