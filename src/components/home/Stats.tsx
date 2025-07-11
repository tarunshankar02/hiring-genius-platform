
import { FileText, Target, Users, Clock } from "lucide-react";

const Stats = () => {
  const stats = [
    { number: "10K+", label: "Resumes Processed", icon: FileText },
    { number: "95%", label: "Match Accuracy", icon: Target },
    { number: "500+", label: "Companies", icon: Users },
    { number: "24/7", label: "AI Support", icon: Clock }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in-delayed">
              <div className="w-12 h-12 mx-auto gradient-primary rounded-full flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
