
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Wand2, 
  Copy, 
  Download,
  Building,
  DollarSign,
  Clock,
  MapPin
} from "lucide-react";

const SmartJDGenerator = () => {
  const [jobRole, setJobRole] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedJD, setGeneratedJD] = useState("");

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const jd = `
**${jobRole || "Backend Developer"} - Full Time**

**About the Role:**
We are seeking a talented ${jobRole || "Backend Developer"} to join our dynamic team. This role offers an exciting opportunity to work with cutting-edge technologies and contribute to scalable solutions.

**Key Responsibilities:**
• Design and develop robust backend systems and APIs
• Collaborate with cross-functional teams to deliver high-quality software
• Optimize application performance and ensure scalability
• Implement best practices for code quality and security
• Participate in code reviews and technical discussions
• Troubleshoot and resolve technical issues

**Required Skills & Experience:**
${skills.split(',').map(skill => `• ${skill.trim()}`).join('\n')}
• ${experience || "3+"} years of relevant experience
• Strong problem-solving and analytical skills
• Experience with version control systems (Git)
• Understanding of software development lifecycle

**Preferred Qualifications:**
• Bachelor's degree in Computer Science or related field
• Experience with cloud platforms (AWS, Azure, GCP)
• Knowledge of containerization (Docker, Kubernetes)
• Understanding of CI/CD pipelines

**What We Offer:**
• Competitive salary and benefits package
• Flexible working arrangements
• Professional development opportunities
• Health and wellness programs
• Modern office environment

**Location:** ${location || "Remote/Hybrid"}

Ready to take your career to the next level? Apply now!
    `.trim();

    setGeneratedJD(jd);
    setIsGenerating(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedJD);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <Badge className="mb-4 gradient-primary text-white border-0 px-4 py-2">
          🚀 Smart JD Generator
        </Badge>
        <h1 className="text-3xl font-bold mb-2">
          AI-Powered Job Description Generator
        </h1>
        <p className="text-muted-foreground">
          Create professional job descriptions in seconds with AI assistance
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wand2 className="w-5 h-5" />
              Job Details Input
            </CardTitle>
            <CardDescription>
              Provide basic information to generate a comprehensive job description
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="role">Job Role/Title</Label>
              <Input
                id="role"
                placeholder="e.g., Backend Developer, Frontend Engineer"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills">Required Skills (comma-separated)</Label>
              <Textarea
                id="skills"
                placeholder="e.g., Python, Django, REST API, PostgreSQL, Git"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="experience">Experience Required</Label>
                <Input
                  id="experience"
                  placeholder="e.g., 3-5 years"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g., Remote, New York, Hybrid"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            <Button 
              onClick={handleGenerate}
              className="w-full gradient-primary text-white border-0"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Generating JD...
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4 mr-2" />
                  Generate Job Description
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Output Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Generated Job Description
            </CardTitle>
            <CardDescription>
              AI-generated professional job description ready to post
            </CardDescription>
          </CardHeader>
          <CardContent>
            {generatedJD ? (
              <div className="space-y-4">
                <div className="bg-muted/30 p-4 rounded-lg border max-h-96 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm font-mono">
                    {generatedJD}
                  </pre>
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={copyToClipboard}
                    variant="outline"
                    className="flex-1"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy to Clipboard
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download as PDF
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-12">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Fill in the job details and click "Generate" to create your job description</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Templates</CardTitle>
          <CardDescription>
            Start with pre-filled templates for common roles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                role: "Backend Developer",
                skills: "Python, Django, REST API, PostgreSQL, Git, Docker",
                icon: Building
              },
              {
                role: "Frontend Developer", 
                skills: "React, TypeScript, Tailwind CSS, Next.js, Git",
                icon: FileText
              },
              {
                role: "Full Stack Developer",
                skills: "React, Node.js, MongoDB, Express, TypeScript, AWS",
                icon: DollarSign
              }
            ].map((template, index) => (
              <Card 
                key={index}
                className="cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => {
                  setJobRole(template.role);
                  setSkills(template.skills);
                  setExperience("3-5 years");
                  setLocation("Remote/Hybrid");
                }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                      <template.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{template.role}</h3>
                      <p className="text-sm text-muted-foreground">Click to use template</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SmartJDGenerator;
