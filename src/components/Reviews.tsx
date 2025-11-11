import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "Amazing service! My Labrador looks fantastic and seemed so comfortable throughout. Highly recommend!",
    date: "2 weeks ago"
  },
  {
    name: "Michael Brown",
    rating: 5,
    comment: "Professional and caring. My nervous rescue dog was treated with such patience and kindness.",
    date: "1 month ago"
  },
  {
    name: "Emma Wilson",
    rating: 5,
    comment: "Best groomer in Northampton! Always does an excellent job with my Poodle's coat.",
    date: "3 weeks ago"
  },
  {
    name: "David Thompson",
    rating: 5,
    comment: "Very impressed with the attention to detail. Will definitely be returning!",
    date: "2 months ago"
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            Client Reviews
          </h2>
          <p className="text-xl text-muted-foreground">
            What our happy customers say
          </p>
        </div>

        <div className="relative">
          <Card className="shadow-glass backdrop-blur-glass bg-glass-bg border-2 border-glass-border">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-4">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-foreground text-center mb-6 min-h-[120px] flex items-center justify-center">
                "{reviews[currentIndex].comment}"
              </p>
              
              <div className="text-center">
                <p className="font-semibold text-lg text-foreground">
                  {reviews[currentIndex].name}
                </p>
                <p className="text-muted-foreground">
                  {reviews[currentIndex].date}
                </p>
              </div>
            </CardContent>
          </Card>

          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-primary text-primary-foreground p-3 rounded-full shadow-glass hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-primary text-primary-foreground p-3 rounded-full shadow-glass hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-8" : "bg-border"
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={() => navigate("/add-review")}
            className="rounded-full px-8 py-6 text-lg shadow-glass hover:shadow-xl transition-all hover:scale-105"
          >
            Share Your Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
