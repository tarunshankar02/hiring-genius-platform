
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Globe, MapPin, Edit, CheckCircle2 } from 'lucide-react';

interface CompanyProfileProps {
  company: {
    id: string;
    name: string;
    website: string;
    location: string;
    type: string;
    logo?: string;
    recruiterName: string;
    businessEmail: string;
    verified: boolean;
    createdAt: string;
  };
  onEdit?: () => void;
}

const CompanyProfile: React.FC<CompanyProfileProps> = ({ company, onEdit }) => {
  return (
    <Card className="border-border/40 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-lg border border-border overflow-hidden bg-muted">
            {company.logo ? (
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-muted-foreground" />
              </div>
            )}
          </div>
          <div>
            <CardTitle className="text-2xl flex items-center gap-2">
              {company.name}
              {company.verified && (
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              )}
            </CardTitle>
            <p className="text-muted-foreground">
              Recruiter: {company.recruiterName}
            </p>
          </div>
        </div>
        {onEdit && (
          <Button variant="outline" onClick={onEdit} className="flex items-center gap-2">
            <Edit className="w-4 h-4" />
            Edit Profile
          </Button>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Website</p>
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {company.website}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{company.location}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Company Type</p>
              <Badge variant="secondary" className="text-sm">
                {company.type}
              </Badge>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Business Email</p>
              <p className="font-medium">{company.businessEmail}</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Registered on {new Date(company.createdAt).toLocaleDateString()}</span>
            <Badge variant={company.verified ? "default" : "secondary"}>
              {company.verified ? "Verified" : "Pending Verification"}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyProfile;
