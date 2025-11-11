import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="before-after">
          <BeforeAfter />
        </div>
        <div id="reviews">
          <Reviews />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">MK Grooming</h3>
              <p className="text-background/80">
                Professional dog grooming services in Northampton
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-background/80 mb-2">
                (+44) 07445 980009
              </p>
              <p className="text-background/80">
                Sol Central, Mare Fair<br />
                Northampton, England
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <p className="text-background/80">
                Lustrée Nails | Press Me
              </p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-background/80">
              © 2024 MK Grooming. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
