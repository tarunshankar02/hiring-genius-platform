
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Search, ArrowRight } from "lucide-react";

const Hero = () => {
  const [userType, setUserType] = useState<'candidate' | 'recruiter' | null>(null);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center animate-slide-up">
          <Badge className="mb-6 gradient-primary text-white border-0 px-4 py-2">
            ✨ AI-Powered Hiring Intelligence
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
            Smart Hiring Made
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Simple & Intelligent
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your hiring process with AI-driven resume matching, intelligent candidate screening, 
            and automated interview scheduling. Perfect for both job seekers and recruiters.
          </p>
          
          {/* User Type Selection */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-delayed">
            <Card 
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:glow-shadow border-2 ${
                userType === 'candidate' ? 'border-primary bg-primary/10' : 'border-border/40 hover:border-primary/50'
              }`}
              onClick={() => setUserType('candidate')}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto gradient-primary rounded-full flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">I'm a Job Seeker</CardTitle>
                <CardDescription>
                  Find perfect jobs, optimize resumes, and ace interviews
                </CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:glow-shadow border-2 ${
                userType === 'recruiter' ? 'border-primary bg-primary/10' : 'border-border/40 hover:border-primary/50'
              }`}
              onClick={() => setUserType('recruiter')}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto gradient-secondary rounded-full flex items-center justify-center mb-3">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">I'm a Recruiter</CardTitle>
                <CardDescription>
                  Screen candidates, analyze resumes, and hire smarter
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {userType && (
            <div className="animate-slide-up">
              <Button 
                size="lg" 
                className="gradient-primary text-white border-0 px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform duration-200 glow-shadow"
              >
                Get Started as {userType === 'candidate' ? 'Job Seeker' : 'Recruiter'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
