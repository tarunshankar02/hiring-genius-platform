
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Search, FileText } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Advanced algorithms match resumes to job descriptions with 95% accuracy",
      gradient: "gradient-primary"
    },
    {
      icon: Target,
      title: "ATS Optimization",
      description: "Scan and optimize resumes to pass Applicant Tracking Systems",
      gradient: "gradient-secondary"
    },
    {
      icon: Search,
      title: "Smart Job Aggregation",
      description: "Find opportunities across 50+ job boards and platforms",
      gradient: "gradient-accent"
    },
    {
      icon: FileText,
      title: "Resume Intelligence",
      description: "Build, analyze, and improve resumes with AI suggestions",
      gradient: "gradient-primary"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 gradient-secondary text-white border-0 px-4 py-2">
            🚀 Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"> Smart Hiring</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powered by advanced AI and machine learning to revolutionize your hiring experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:scale-105 transition-all duration-300 hover:glow-shadow border-border/40 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:animate-float`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
