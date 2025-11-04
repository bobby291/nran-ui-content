import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Purpose from "@/components/Purpose";
import Matters from "@/components/Matters";
import Features from "@/components/Features";
import Vision from "@/components/Vision";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Core from "@/components/Core";
import Strategic from "@/components/Strategic";
import Partner from "@/components/Partner";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <Intro />
      <About />
      <Purpose />
      <Matters />
      <Features />
      <Vision />
      <Core />
      <Strategic />
      <Partner />
      <Newsletter  />
      <Footer />

    </>
  );
}
