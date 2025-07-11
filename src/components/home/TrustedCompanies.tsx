
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building2 } from 'lucide-react';

// Sample data - in production, this would come from your database
const trustedCompanies = [
  { id: 1, name: 'TechCorp Solutions', logo: null, type: 'Enterprise' },
  { id: 2, name: 'InnovateLabs', logo: null, type: 'Startup' },
  { id: 3, name: 'GlobalTech Inc.', logo: null, type: 'MNC' },
  { id: 4, name: 'StartupXYZ', logo: null, type: 'Startup' },
  { id: 5, name: 'Enterprise Solutions', logo: null, type: 'Enterprise' },
  { id: 6, name: 'SME Partners', logo: null, type: 'SME' },
  { id: 7, name: 'Digital Dynamics', logo: null, type: 'Enterprise' },
  { id: 8, name: 'Future Systems', logo: null, type: 'MNC' },
];

const TrustedCompanies = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Trusted by 500+ Hiring Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join leading companies that trust TalentMatch Pro for their recruitment needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          {trustedCompanies.map((company) => (
            <Card
              key={company.id}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/40"
            >
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center mb-3 group-hover:from-primary/20 group-hover:to-blue-500/20 transition-colors">
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  ) : (
                    <Building2 className="w-6 h-6 text-primary" />
                  )}
                </div>
                <h3 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {company.type}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">
              New companies joining daily
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
