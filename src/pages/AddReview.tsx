import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your review!");
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/30 py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-8"
        >
          ← Back to Home
        </Button>

        <Card className="shadow-glass backdrop-blur-glass bg-glass-bg border-2 border-glass-border p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Share Your Experience
            </h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear about your visit to MK Grooming
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Your Name
              </label>
              <Input 
                required
                placeholder="Enter your name" 
                className="rounded-xl border-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Email (optional)
              </label>
              <Input 
                type="email"
                placeholder="your@email.com" 
                className="rounded-xl border-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-3 text-foreground">
                Your Rating
              </label>
              <div className="flex gap-2 justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-10 h-10 ${
                        star <= (hoveredRating || rating)
                          ? "fill-primary text-primary"
                          : "text-border"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Your Review
              </label>
              <Textarea 
                required
                placeholder="Tell us about your experience..." 
                className="rounded-xl min-h-32 border-2"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full rounded-xl py-6 text-lg shadow-glass hover:shadow-xl transition-all"
              disabled={rating === 0}
            >
              Submit Review
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddReview;
