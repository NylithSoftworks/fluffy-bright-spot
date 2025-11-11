import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Full Groom",
    description: "Complete grooming service including bath, haircut, nail trim, and ear cleaning",
    price: "From £40"
  },
  {
    title: "Bath & Blow Dry",
    description: "Luxury bath with premium products, thorough blow dry and brush out",
    price: "From £30"
  },
  {
    title: "Puppy Introduction",
    description: "Gentle first grooming experience to help puppies feel comfortable",
    price: "From £25"
  },
  {
    title: "Hand Stripping",
    description: "Professional hand stripping for wire-coated breeds",
    price: "From £50"
  },
  {
    title: "Nail Trimming",
    description: "Quick and gentle nail trimming service",
    price: "From £10"
  },
  {
    title: "Teeth Cleaning",
    description: "Professional dental care to maintain oral health",
    price: "From £15"
  }
];

const Services = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional grooming services tailored to your dog's needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group overflow-hidden shadow-glass hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 border-glass-border backdrop-blur-glass bg-glass-bg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <p className="text-2xl font-bold text-primary">
                  {service.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
