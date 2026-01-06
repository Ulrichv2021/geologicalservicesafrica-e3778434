import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Commodities } from "@/components/Commodities";
import { Models3D } from "@/components/Models3D";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Process />
      <Commodities />
      <Models3D />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
