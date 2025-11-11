import { Award, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Caring Approach",
    description: "We treat every dog with love and patience, ensuring they feel safe and comfortable"
  },
  {
    icon: Award,
    title: "Expert Groomers",
    description: "Our certified professionals have years of experience with all breeds and temperaments"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Open 7 days a week with convenient scheduling to fit your busy lifestyle"
  }
];

const About = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 10 years of experience, we've built a reputation for providing exceptional grooming services with a personal touch. Your dog's comfort and happiness are our top priorities.
            </p>
            
            <div className="space-y-6 pt-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-secondary/30 rounded-2xl">
                        <Icon className="h-6 w-6 text-secondary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl shadow-soft" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-bold text-primary mb-2">10+</div>
                <div className="text-xl text-foreground">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
