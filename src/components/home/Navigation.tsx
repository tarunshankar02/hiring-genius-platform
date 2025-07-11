
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

const Navigation = () => {
  return (
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
            <Link to="/recruiter/onboarding">
              <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                For Recruiters
              </Button>
            </Link>
            <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
