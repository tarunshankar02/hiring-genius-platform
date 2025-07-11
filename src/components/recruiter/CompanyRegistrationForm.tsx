
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Building2, Globe, MapPin, User, Mail, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const companyRegistrationSchema = z.object({
  recruiterName: z.string().min(2, 'Recruiter name must be at least 2 characters'),
  businessEmail: z.string().email('Please enter a valid email address'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  companyWebsite: z.string().url('Please enter a valid website URL'),
  companyLocation: z.string().min(2, 'Company location is required'),
  companyType: z.enum(['Startup', 'SME', 'Enterprise', 'MNC'], {
    required_error: 'Please select a company type',
  }),
  companyLogo: z.any().optional(),
});

type CompanyRegistrationData = z.infer<typeof companyRegistrationSchema>;

const CompanyRegistrationForm = () => {
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [domainMatch, setDomainMatch] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<CompanyRegistrationData>({
    resolver: zodResolver(companyRegistrationSchema),
    mode: 'onChange',
  });

  const watchedEmail = watch('businessEmail');
  const watchedWebsite = watch('companyWebsite');

  // Email domain validation
  React.useEffect(() => {
    if (watchedEmail && watchedWebsite) {
      try {
        const emailDomain = watchedEmail.split('@')[1]?.toLowerCase();
        const websiteDomain = new URL(watchedWebsite).hostname.replace('www.', '').toLowerCase();
        setDomainMatch(emailDomain === websiteDomain);
      } catch {
        setDomainMatch(false);
      }
    } else {
      setDomainMatch(null);
    }
  }, [watchedEmail, watchedWebsite]);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: CompanyRegistrationData) => {
    setIsSubmitting(true);
    
    try {
      // TODO: Replace with actual Supabase integration
      console.log('Company Registration Data:', {
        ...data,
        companyLogo: logoFile,
        timestamp: new Date().toISOString(),
        domainVerified: domainMatch,
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect to dashboard on success
      navigate('/recruiter/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <Card className="border-border/40 shadow-xl">
          <CardHeader className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Company Registration
            </CardTitle>
            <CardDescription className="text-lg">
              Complete your company profile to start recruiting top talent
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Recruiter Name */}
              <div className="space-y-2">
                <Label htmlFor="recruiterName" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Recruiter Name *
                </Label>
                <Input
                  id="recruiterName"
                  {...register('recruiterName')}
                  placeholder="Enter your full name"
                  className={errors.recruiterName ? 'border-destructive' : ''}
                />
                {errors.recruiterName && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.recruiterName.message}
                  </p>
                )}
              </div>

              {/* Business Email */}
              <div className="space-y-2">
                <Label htmlFor="businessEmail" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Business Email *
                </Label>
                <Input
                  id="businessEmail"
                  type="email"
                  {...register('businessEmail')}
                  placeholder="recruiter@company.com"
                  className={errors.businessEmail ? 'border-destructive' : ''}
                />
                {errors.businessEmail && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.businessEmail.message}
                  </p>
                )}
                {domainMatch !== null && watchedEmail && watchedWebsite && (
                  <p className={`text-sm flex items-center gap-1 ${domainMatch ? 'text-green-600' : 'text-amber-600'}`}>
                    {domainMatch ? (
                      <>
                        <CheckCircle2 className="w-3 h-3" />
                        Email domain matches company website
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-3 h-3" />
                        Email domain doesn't match company website
                      </>
                    )}
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div className="space-y-2">
                <Label htmlFor="companyName" className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Company Name *
                </Label>
                <Input
                  id="companyName"
                  {...register('companyName')}
                  placeholder="Enter company name"
                  className={errors.companyName ? 'border-destructive' : ''}
                />
                {errors.companyName && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.companyName.message}
                  </p>
                )}
              </div>

              {/* Company Website */}
              <div className="space-y-2">
                <Label htmlFor="companyWebsite" className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Company Website *
                </Label>
                <Input
                  id="companyWebsite"
                  {...register('companyWebsite')}
                  placeholder="https://company.com"
                  className={errors.companyWebsite ? 'border-destructive' : ''}
                />
                {errors.companyWebsite && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.companyWebsite.message}
                  </p>
                )}
              </div>

              {/* Company Location */}
              <div className="space-y-2">
                <Label htmlFor="companyLocation" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Company Location *
                </Label>
                <Input
                  id="companyLocation"
                  {...register('companyLocation')}
                  placeholder="e.g., Mumbai, India"
                  className={errors.companyLocation ? 'border-destructive' : ''}
                />
                {errors.companyLocation && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.companyLocation.message}
                  </p>
                )}
              </div>

              {/* Company Type */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Company Type *
                </Label>
                <Select onValueChange={(value) => setValue('companyType', value as any)}>
                  <SelectTrigger className={errors.companyType ? 'border-destructive' : ''}>
                    <SelectValue placeholder="Select company type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Startup">Startup</SelectItem>
                    <SelectItem value="SME">SME (Small & Medium Enterprise)</SelectItem>
                    <SelectItem value="Enterprise">Enterprise</SelectItem>
                    <SelectItem value="MNC">MNC (Multinational Corporation)</SelectItem>
                  </SelectContent>
                </Select>
                {errors.companyType && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.companyType.message}
                  </p>
                )}
              </div>

              {/* Company Logo Upload */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Company Logo (Optional)
                </Label>
                <div className="flex items-center space-x-4">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                  />
                  {logoPreview && (
                    <div className="w-16 h-16 rounded-lg border border-border overflow-hidden">
                      <img
                        src={logoPreview}
                        alt="Logo preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full gradient-primary text-white font-semibold py-6 text-lg"
                disabled={!isValid || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Registering Company...
                  </>
                ) : (
                  'Complete Registration'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompanyRegistrationForm;
