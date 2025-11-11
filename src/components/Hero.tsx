import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import animatedVideo from "@/assets/animated.gif";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/20 to-secondary/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.1),transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <img 
              src={logo} 
              alt="MK Grooming Logo" 
              className="w-48 h-auto"
            />
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Professional Dog Grooming
              <span className="block text-primary mt-2">
                With Care & Love
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
              Expert grooming services for your beloved companion. Making every pup look and feel their best.
            </p>
            
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full shadow-glass hover:shadow-xl transition-all hover:scale-105 bg-primary hover:bg-primary/90"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call to Book: (+44) 07445 980009
            </Button>
          </div>
          
          <div className="relative animate-in fade-in slide-in-from-right duration-1000 delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-glass backdrop-blur-glass border border-glass-border bg-glass-bg p-4">
              <img 
                src={animatedVideo} 
                alt="MK Grooming Services" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
