import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Scissors, Heart } from "lucide-react";
import bathImage from "@/assets/service-bath.jpg";
import haircutImage from "@/assets/service-haircut.jpg";
import nailsImage from "@/assets/service-nails.jpg";

const services = [
  {
    title: "Luxury Bath & Spa",
    description: "Premium shampoo, conditioning treatment, and relaxing spa experience for your pup",
    icon: Sparkles,
    image: bathImage,
    price: "Starting at $45"
  },
  {
    title: "Stylish Haircuts",
    description: "Expert grooming and breed-specific cuts that make your dog look fabulous",
    icon: Scissors,
    image: haircutImage,
    price: "Starting at $60"
  },
  {
    title: "Nail & Paw Care",
    description: "Gentle nail trimming, paw pad care, and massage to keep those paws healthy",
    icon: Heart,
    image: nailsImage,
    price: "Starting at $25"
  }
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer a full range of grooming services tailored to your dog's needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 bg-card"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-primary">
                    {service.price}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
