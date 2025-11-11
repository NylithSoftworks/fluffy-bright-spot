import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <div id="home">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-2">© 2024 Paws & Glam Dog Grooming</p>
          <p className="text-background/70">Making tails wag since 2014</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
