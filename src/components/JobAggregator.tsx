
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  MapPin, 
  Clock, 
  Building, 
  DollarSign,
  Filter,
  ExternalLink,
  Bookmark,
  BookmarkCheck,
  Target,
  RefreshCw
} from "lucide-react";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
  description: string;
  matchPercentage: number;
  source: string;
  url: string;
  skills: string[];
  isBookmarked: boolean;
}

const JobAggregator = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [bookmarkedJobs, setBookmarkedJobs] = useState<Set<string>>(new Set());

  // Mock job data
  const mockJobs: Job[] = [
    {
      id: "1",
      title: "Senior Backend Developer",
      company: "TechCorp Solutions",
      location: "Remote",
      salary: "₹12-18 LPA",
      type: "Full-time",
      posted: "2 days ago",
      description: "We're looking for a skilled Backend Developer with expertise in Python, Django, and cloud technologies...",
      matchPercentage: 92,
      source: "Indeed",
      url: "#",
      skills: ["Python", "Django", "AWS", "PostgreSQL"],
      isBookmarked: false
    },
    {
      id: "2", 
      title: "Python Developer",
      company: "InnovateLab",
      location: "Bangalore, KA",
      salary: "₹8-12 LPA",
      type: "Full-time",
      posted: "1 day ago",
      description: "Join our team as a Python Developer to build scalable web applications and APIs...",
      matchPercentage: 88,
      source: "Naukri",
      url: "#",
      skills: ["Python", "Flask", "MongoDB", "Docker"],
      isBookmarked: false
    },
    {
      id: "3",
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Mumbai, MH",
      salary: "₹10-15 LPA",
      type: "Full-time", 
      posted: "3 days ago",
      description: "Looking for a versatile Full Stack Developer to work on exciting projects...",
      matchPercentage: 75,
      source: "Internshala",
      url: "#",
      skills: ["React", "Node.js", "MySQL", "Git"],
      isBookmarked: false
    },
    {
      id: "4",
      title: "DevOps Engineer",
      company: "CloudTech Inc",
      location: "Hyderabad, TG",
      salary: "₹15-22 LPA",
      type: "Full-time",
      posted: "1 week ago", 
      description: "Seeking an experienced DevOps Engineer to manage our cloud infrastructure...",
      matchPercentage: 70,
      source: "LinkedIn",
      url: "#",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],
      isBookmarked: false
    }
  ];

  useEffect(() => {
    setJobs(mockJobs);
  }, []);

  const handleSearch = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Filter jobs based on search criteria
    let filteredJobs = mockJobs.filter(job => {
      const matchesQuery = !searchQuery || 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesLocation = !locationFilter || 
        job.location.toLowerCase().includes(locationFilter.toLowerCase());
      
      const matchesType = jobTypeFilter === "all" || 
        job.type.toLowerCase() === jobTypeFilter.toLowerCase();
      
      return matchesQuery && matchesLocation && matchesType;
    });

    setJobs(filteredJobs);
    setIsLoading(false);
  };

  const toggleBookmark = (jobId: string) => {
    const newBookmarked = new Set(bookmarkedJobs);
    if (newBookmarked.has(jobId)) {
      newBookmarked.delete(jobId);
    } else {
      newBookmarked.add(jobId);
    }
    setBookmarkedJobs(newBookmarked);
  };

  const getMatchColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-500";
    if (percentage >= 75) return "text-yellow-500";
    return "text-red-500";
  };

  const getMatchBadgeColor = (percentage: number) => {
    if (percentage >= 90) return "bg-green-500/20 text-green-700 border-green-500/30";
    if (percentage >= 75) return "bg-yellow-500/20 text-yellow-700 border-yellow-500/30"; 
    return "bg-red-500/20 text-red-700 border-red-500/30";
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <Badge className="mb-4 gradient-secondary text-white border-0 px-4 py-2">
          🌍 Job Aggregator
        </Badge>
        <h1 className="text-3xl font-bold mb-2">
          Smart Job Search & Matching
        </h1>
        <p className="text-muted-foreground">
          Find the perfect job across multiple platforms with AI-powered matching
        </p>
      </div>

      {/* Search Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Job Search Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="search">Job Title / Keywords</Label>
              <Input
                id="search"
                placeholder="e.g., Python Developer"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="e.g., Bangalore, Remote"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="jobType">Job Type</Label>
              <select 
                id="jobType"
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                value={jobTypeFilter}
                onChange={(e) => setJobTypeFilter(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <Button 
                onClick={handleSearch}
                className="w-full gradient-primary text-white border-0"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Search Jobs
                  </>
                )}
              </Button>
            </div>
          </div>
          
          {/* Job Sources */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sources:</span>
            {["Indeed", "Naukri", "LinkedIn", "Internshala"].map((source) => (
              <Badge key={source} variant="outline" className="text-xs">
                {source}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar Stats */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Search Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">{jobs.length}</div>
              <div className="text-sm text-muted-foreground">Jobs Found</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>High Match (90%+)</span>
                <span className="font-semibold text-green-500">
                  {jobs.filter(j => j.matchPercentage >= 90).length}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Good Match (75%+)</span>
                <span className="font-semibold text-yellow-500">
                  {jobs.filter(j => j.matchPercentage >= 75 && j.matchPercentage < 90).length}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Bookmarked</span>
                <span className="font-semibold">
                  {bookmarkedJobs.size}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Job Listings */}
        <div className="lg:col-span-3 space-y-4">
          {jobs.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">
                  No jobs found. Try adjusting your search criteria.
                </p>
              </CardContent>
            </Card>
          ) : (
            jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <Badge 
                          className={`${getMatchBadgeColor(job.matchPercentage)} border`}
                        >
                          <Target className="w-3 h-3 mr-1" />
                          {job.matchPercentage}% Match
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {job.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.posted}
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {job.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2 ml-4">
                      <Badge variant="outline" className="text-xs">
                        {job.source}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleBookmark(job.id)}
                        className="p-2"
                      >
                        {bookmarkedJobs.has(job.id) ? (
                          <BookmarkCheck className="w-4 h-4 text-primary" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Resume Match: </span>
                      <span className={`font-semibold ${getMatchColor(job.matchPercentage)}`}>
                        {job.matchPercentage}%
                      </span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm" className="gradient-primary text-white border-0">
                        Apply Now
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default JobAggregator;
