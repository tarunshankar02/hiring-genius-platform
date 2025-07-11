
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wand2, Globe } from "lucide-react";

const QuickAccess = () => {
  return (
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
  );
};

export default QuickAccess;
