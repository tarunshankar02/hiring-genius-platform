
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Users, 
  FileText, 
  Search, 
  Target, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Wand2,
  Globe
} from "lucide-react";

const Index = () => {
  const [userType, setUserType] = useState<'candidate' | 'recruiter' | null>(null);

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

  const stats = [
    { number: "10K+", label: "Resumes Processed", icon: FileText },
    { number: "95%", label: "Match Accuracy", icon: Target },
    { number: "500+", label: "Companies", icon: Users },
    { number: "24/7", label: "AI Support", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-xl bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                TalentMatch Pro
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Features
              </Button>
              <Link to="/jd-generator">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  JD Generator
                </Button>
              </Link>
              <Link to="/job-search">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  Job Search
                </Button>
              </Link>
              <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Quick Access Cards */}
      <section className="py-16 bg-gradient-to-r from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Quick Access Tools</h2>
            <p className="text-muted-foreground">Jump straight to our most popular features</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/jd-generator">
              <Card className="cursor-pointer transition-all duration-300 hover:scale-105 hover:glow-shadow border-border/40 hover:border-primary/50 bg-card/50 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center">
                      <Wand2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Smart JD Generator</h3>
                      <p className="text-muted-foreground">Create professional job descriptions with AI in seconds</p>
                    </div>
                  </div>
                  <Badge className="gradient-secondary text-white border-0">
                    For Recruiters
                  </Badge>
                </CardContent>
              </Card>
            </Link>

            <Link to="/job-search">
              <Card className="cursor-pointer transition-all duration-300 hover:scale-105 hover:glow-shadow border-border/40 hover:border-primary/50 bg-card/50 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Job Aggregator</h3>
                      <p className="text-muted-foreground">Search across multiple job boards with resume matching</p>
                    </div>
                  </div>
                  <Badge className="gradient-primary text-white border-0">
                    For Candidates
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Features Section */}
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

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-background/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                TalentMatch Pro
              </span>
            </div>
            <div className="flex items-center space-x-6 text-muted-foreground">
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Enterprise Security
              </span>
              <span>© 2024 TalentMatch Pro</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
