import { Card } from "@/components/ui/card";
import animatedVideo from "@/assets/animated.gif";

const About = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <Card className="overflow-hidden shadow-glass backdrop-blur-glass bg-glass-bg border-2 border-glass-border p-4">
              <img 
                src={animatedVideo} 
                alt="About MK Grooming" 
                className="w-full h-auto rounded-2xl"
              />
            </Card>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              About MK Grooming
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Welcome to MK Grooming, where your dog's comfort and happiness are our top priorities. Based in Northampton, we provide professional grooming services with a personal touch.
              </p>
              
              <p>
                Our experienced groomer understands that every dog is unique, with their own personality and needs. We take the time to ensure your furry friend feels safe and relaxed throughout their grooming experience.
              </p>
              
              <p>
                From nervous first-timers to regular clients, we treat every dog with the same level of care, patience, and expertise. Our goal is not just to make your dog look great, but to ensure they enjoy their visit with us.
              </p>

              <Card className="mt-8 p-6 shadow-glass backdrop-blur-glass bg-glass-bg border-2 border-glass-border">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-foreground font-medium">Qualified & Experienced Groomer</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-foreground font-medium">One-on-One Attention</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-foreground font-medium">Stress-Free Environment</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-foreground font-medium">Premium Products</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
