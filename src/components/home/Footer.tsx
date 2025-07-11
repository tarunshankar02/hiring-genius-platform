
import { Brain, Shield } from "lucide-react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
