
import { Button } from "@/components/ui/button";
import { Star, TrendingUp } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/10 via-transparent to-blue-500/10">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"> Hiring Process?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of companies and job seekers using AI to make smarter hiring decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary text-white border-0 px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform duration-200 glow-shadow"
            >
              Start Free Trial
              <Star className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/20 hover:bg-primary/10 px-8 py-6 text-lg"
            >
              Schedule Demo
              <TrendingUp className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
