import { Card } from "@/components/ui/card";
import { useState } from "react";

const beforeAfterImages = [
  {
    before: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400",
    after: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400",
    breed: "Golden Retriever"
  },
  {
    before: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400",
    after: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400",
    breed: "Poodle"
  },
  {
    before: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400",
    after: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400",
    breed: "Yorkshire Terrier"
  }
];

const BeforeAfter = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            Before & After
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the amazing transformations we create
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {beforeAfterImages.map((item, index) => (
            <Card 
              key={index}
              className="overflow-hidden shadow-glass hover:shadow-xl transition-all duration-500 border-2 border-glass-border backdrop-blur-glass bg-glass-bg"
            >
              <div className="grid grid-cols-2 gap-2 p-2">
                <div className="relative group">
                  <img 
                    src={item.before} 
                    alt={`${item.breed} before grooming`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 left-2 bg-foreground/80 text-background px-3 py-1 rounded-full text-sm font-medium">
                    Before
                  </div>
                </div>
                <div className="relative group">
                  <img 
                    src={item.after} 
                    alt={`${item.breed} after grooming`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    After
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-lg font-semibold text-foreground">{item.breed}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
