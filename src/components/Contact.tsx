import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Paw Street, Dogtown, DT 12345"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "(555) 123-4567"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@pawsgrooming.com"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Sun: 8am - 6pm"
  }
];

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to book an appointment? We'd love to hear from you!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="p-8 shadow-soft border-2">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Your Name
                  </label>
                  <Input 
                    id="name"
                    placeholder="John Doe" 
                    className="rounded-xl"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="john@example.com" 
                    className="rounded-xl"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                    Phone Number
                  </label>
                  <Input 
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567" 
                    className="rounded-xl"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your pup and what services you're interested in..." 
                    className="rounded-xl min-h-32"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full rounded-xl py-6 text-lg shadow-soft hover:shadow-xl transition-all"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
          
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 shadow-soft hover:shadow-xl transition-all border-2 bg-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-2xl flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-foreground">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {info.details}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
            
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Special Offer! 🎉
              </h3>
              <p className="text-lg text-foreground mb-4">
                First-time customers get 20% off their first grooming service
              </p>
              <Button variant="secondary" className="rounded-xl">
                Claim Your Discount
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
