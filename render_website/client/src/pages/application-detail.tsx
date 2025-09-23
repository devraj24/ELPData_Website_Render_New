import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, AlertTriangle, TrendingUp, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ApplicationDetail {
  applicationName: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  companyCount: string;
  userCount: string;
  dataAccuracy: string;
  metric1: { value: string; label: string };
  metric2: { value: string; label: string };
  metric3: { value: string; label: string };
  targetIndustries: string[];
  decisionMakerRoles: string[];
  modulesAndSolutions: string[];
  availableDataPoints: string[];
  implementationChallenges: string[];
  categories: Array<{
    name: string;
    description: string;
    icon: string;
    color: string;
    badges: string[];
    primaryIndustries: string[];
    keyDecisionMakers: string[];
    implementationChallenges: string[];
  }>;
}

export default function ApplicationDetailPage() {
  const [match, params] = useRoute("/application/:name");
  const applicationName = params?.name ? decodeURIComponent(params.name) : "";

  const { data: applicationData, isLoading, error } = useQuery<ApplicationDetail>({
    queryKey: [`/api/application-detail/${encodeURIComponent(applicationName)}`],
    enabled: !!applicationName,
  });

  if (!match || !applicationName) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-light via-white to-neutral-gray p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-primary-navy mb-4">Application Not Found</h1>
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-light via-white to-neutral-gray p-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4 w-1/4"></div>
            <div className="h-12 bg-gray-200 rounded mb-6 w-3/4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-48 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !applicationData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-light via-white to-neutral-gray p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Application Details</h1>
          <p className="text-neutral-dark mb-6">Unable to load details for {applicationName}</p>
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-light via-white to-neutral-gray">
      <Header />
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-gray-900 p-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="text-gray-900 hover:bg-black/10 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Applications
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-2 text-gray-900">{applicationData.heroTitle}</h1>
          <p className="text-xl mb-6 text-gray-800">{applicationData.heroDescription}</p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30">
              <div className="text-3xl font-bold text-gray-900">{applicationData.userCount}</div>
              <div className="text-gray-700">Users</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30">
              <div className="text-3xl font-bold text-gray-900">{applicationData.companyCount}</div>
              <div className="text-gray-700">Companies</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30">
              <div className="text-3xl font-bold text-gray-900">{applicationData.dataAccuracy}</div>
              <div className="text-gray-700">Data Accuracy</div>
            </div>
          </div>
          
          {/* Additional Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-3 text-center border border-white/20">
              <div className="text-lg font-semibold text-gray-900">{applicationData.metric1.value}</div>
              <div className="text-sm text-gray-700">{applicationData.metric1.label}</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 text-center border border-white/20">
              <div className="text-lg font-semibold text-gray-900">{applicationData.metric2.value}</div>
              <div className="text-sm text-gray-700">{applicationData.metric2.label}</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 text-center border border-white/20">
              <div className="text-lg font-semibold text-gray-900">{applicationData.metric3.value}</div>
              <div className="text-sm text-gray-700">{applicationData.metric3.label}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Target Industries */}
          <Card className="border-primary-teal/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary-teal/5 to-primary-navy/5">
              <CardTitle className="text-primary-navy flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Target Industries (40+)
              </CardTitle>
              <CardDescription>
                Key industries where {applicationData.applicationName} is widely adopted
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-3">
                {applicationData.targetIndustries.map((industry, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-neutral-light rounded-lg">
                    <div className="w-2 h-2 bg-primary-teal rounded-full"></div>
                    <span className="font-medium text-neutral-dark">{industry}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Decision Maker Roles */}
          <Card className="border-primary-navy/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary-navy/5 to-primary-teal/5">
              <CardTitle className="text-primary-navy flex items-center gap-2">
                <Users className="w-5 h-5" />
                Decision Maker Roles
              </CardTitle>
              <CardDescription>
                Key decision makers for {applicationData.applicationName} implementation and management
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 gap-3">
                {applicationData.decisionMakerRoles.map((role, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary-navy/5 to-primary-teal/5 rounded-lg">
                    <Users className="w-4 h-4 text-primary-navy" />
                    <span className="font-medium text-neutral-dark">{role}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Modules & Solutions and Available Data Points */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Modules & Solutions */}
          <Card className="border-blue-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="text-blue-700 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Modules & Solutions
              </CardTitle>
              <CardDescription className="text-blue-600">
                Available modules and solutions for {applicationData.applicationName}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 gap-3">
                {applicationData.modulesAndSolutions.map((module, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium text-blue-700">{module}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Available Data Points */}
          <Card className="border-purple-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50">
              <CardTitle className="text-purple-700 flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Available Data Points
              </CardTitle>
              <CardDescription className="text-purple-600">
                Key data points available for {applicationData.applicationName} users
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 gap-3">
                {applicationData.availableDataPoints.map((dataPoint, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="font-medium text-purple-700">{dataPoint}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Implementation Challenges */}
        <Card className="mb-8 border-red-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
            <CardTitle className="text-red-700 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Implementation Challenges
            </CardTitle>
            <CardDescription className="text-red-600">
              Common challenges organizations face when implementing {applicationData.applicationName}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {applicationData.implementationChallenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-red-700 font-medium leading-relaxed">{challenge}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Implementation Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {applicationData.categories.map((category, index) => (
            <Card key={index} className="border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                <CardTitle className="text-gray-700 flex items-center gap-2 text-lg">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  {category.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.badges.map((badge, badgeIndex) => (
                        <Badge key={badgeIndex} variant="secondary" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Primary Industries</h4>
                    <div className="space-y-1">
                      {category.primaryIndustries.slice(0, 3).map((industry, industryIndex) => (
                        <div key={industryIndex} className="text-xs text-gray-600 flex items-center gap-2">
                          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                          {industry}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-xl text-white">
          <h2 className="text-3xl font-bold mb-4 text-white">Connect with {applicationData.applicationName} Decision Makers</h2>
          <p className="text-xl mb-8 text-gray-200">Access verified contacts of {applicationData.applicationName} users and expand your enterprise software solutions reach.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
              Get {applicationData.applicationName} List
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
              Request Sample
            </Button>
          </div>
        </div>

        {/* Additional Information Disclaimer */}
        <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
          <h3 className="font-bold text-white mb-2">Data Coverage & Accuracy</h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            Our comprehensive database provides detailed insights for {applicationData.applicationName} with {applicationData.dataAccuracy} data accuracy across {applicationData.userCount} users and {applicationData.companyCount} companies. 
            Data coverage includes target industries, decision maker roles, modules & solutions, and implementation challenges. Contact our data specialists for specific requirements and custom research needs.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}