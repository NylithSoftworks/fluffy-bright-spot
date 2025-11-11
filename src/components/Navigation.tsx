import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-glass bg-glass-bg border-b border-glass-border shadow-glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <img 
            src={logo} 
            alt="MK Grooming" 
            className="h-14 w-auto"
          />
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("before-after")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection("reviews")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </div>
          
          <Button 
            size="lg"
            className="rounded-full shadow-glass hover:shadow-xl transition-all hover:scale-105"
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
