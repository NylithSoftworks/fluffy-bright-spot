import { Card } from "@/components/ui/card";
import { MapPin, Phone, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to treat yourself? Book an appointment or get in touch with any questions about our services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 shadow-glass backdrop-blur-glass bg-glass-bg border-2 border-glass-border hover:shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-primary/10 rounded-2xl flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Find Us
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sol Central, Mare Fair<br />
                  Northampton, England
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-glass backdrop-blur-glass bg-glass-bg border-2 border-glass-border hover:shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-primary/10 rounded-2xl flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Call Us
                </h3>
                <a 
                  href="tel:+4407445980009"
                  className="text-muted-foreground hover:text-primary transition-colors text-lg"
                >
                  (+44) 07445 980009
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-glass backdrop-blur-glass bg-glass-bg border-2 border-glass-border hover:shadow-xl transition-all md:col-span-2">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-primary/10 rounded-2xl flex-shrink-0">
                <Instagram className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Follow Us
                </h3>
                <p className="text-muted-foreground mb-3">
                  Lustrée Nails | Press Me
                </p>
                <p className="text-sm text-muted-foreground">
                  Check out our Instagram highlights for detailed directions and parking information.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
