
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CompanyProfile from '@/components/recruiter/CompanyProfile';
import { Building2, Users, FileText, BarChart3, Plus } from 'lucide-react';

// Sample company data - in production, this would come from your database
const sampleCompany = {
  id: '1',
  name: 'TechCorp Solutions',
  website: 'https://techcorp.com',
  location: 'Mumbai, India',
  type: 'Enterprise',
  logo: null,
  recruiterName: 'John Doe',
  businessEmail: 'john@techcorp.com',
  verified: true,
  createdAt: '2024-01-15T10:00:00Z',
};

const RecruiterDashboard = () => {
  const handleEditProfile = () => {
    console.log('Edit profile clicked');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Recruiter Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                Welcome back, {sampleCompany.recruiterName}
              </p>
            </div>
            <Button className="gradient-primary text-white">
              <Plus className="w-4 h-4 mr-2" />
              Post New Job
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Company Profile */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Company Profile</h2>
              <CompanyProfile
                company={sampleCompany}
                onEdit={handleEditProfile}
              />
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <FileText className="w-8 h-8 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg">Create Job Description</CardTitle>
                    <CardDescription>
                      Use AI to generate professional job descriptions
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <Users className="w-8 h-8 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg">Browse Candidates</CardTitle>
                    <CardDescription>
                      Search and filter candidates by skills and experience
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Recruitment Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Active Jobs</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Applications</span>
                  <span className="font-semibold">284</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Interviews</span>
                  <span className="font-semibold">45</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Hired</span>
                  <span className="font-semibold text-green-600">8</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium">New application received</p>
                  <p className="text-muted-foreground">Frontend Developer position</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Interview scheduled</p>
                  <p className="text-muted-foreground">Backend Developer candidate</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Job posted successfully</p>
                  <p className="text-muted-foreground">Product Manager role</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
