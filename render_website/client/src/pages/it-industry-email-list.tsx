import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Monitor, Users, Mail, Phone, MapPin, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ITIndustryEmailList() {
  const itTitles = [
    { title: "IT Directors", count: "234,567", description: "Senior IT leadership managing technology strategies" },
    { title: "Software Developers", count: "456,789", description: "Engineers developing software applications and systems" },
    { title: "Systems Administrators", count: "189,234", description: "Managing and maintaining IT infrastructure" },
    { title: "Network Engineers", count: "123,456", description: "Designing and maintaining network systems" },
    { title: "Cybersecurity Specialists", count: "98,765", description: "Protecting organizations from cyber threats" },
    { title: "Data Scientists", count: "87,432", description: "Analyzing data to drive business insights" },
    { title: "Cloud Engineers", count: "145,678", description: "Managing cloud infrastructure and services" },
    { title: "DevOps Engineers", count: "76,543", description: "Bridging development and operations teams" },
    { title: "Database Administrators", count: "134,567", description: "Managing database systems and performance" },
    { title: "IT Project Managers", count: "167,890", description: "Leading technology implementation projects" },
    { title: "Business Analysts", count: "198,765", description: "Analyzing business requirements for IT solutions" },
    { title: "QA Engineers", count: "89,234", description: "Ensuring software quality through testing" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "2.97M+", icon: Users },
    { label: "Active Companies", value: "125,000+", icon: Monitor },
    { label: "Global Coverage", value: "65 Countries", icon: MapPin },
    { label: "Data Accuracy", value: "98.4%", icon: TrendingUp }
  ];

  const marketInsights = [
    "IT industry employs over 2.02 million professionals globally",
    "Cloud computing adoption increased 450% in past 3 years",
    "AI/ML specialists demand grew 320% year-over-year",
    "Remote IT work adoption reached 78% across organizations"
  ];

  return (
    <>
      <SEOHead 
        title="IT Industry Email List | 2.02M+ Technology Professional Contacts"
        description="Access verified email lists of IT directors, software developers, systems administrators, and technology professionals. Over 2.02 million contacts across the IT sector."
        keywords="IT email list, software developers, IT directors, technology professionals contacts"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full">
                  <Monitor className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                IT Industry<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Professional Email Lists
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Connect with over 2.02 million IT professionals including directors, developers, 
                systems administrators, and technology specialists across all industry sectors.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Users className="h-4 w-4 mr-2" />
                  2.02M+ Contacts
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Monitor className="h-4 w-4 mr-2" />
                  125K+ Companies
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Mail className="h-4 w-4 mr-2" />
                  98.4% Accuracy
                </Badge>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex justify-center mb-2">
                      <metric.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{metric.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 font-medium">{metric.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Professional Titles */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  IT Professional Categories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive database covering all technology roles from development to infrastructure
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {itTitles.map((role, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                        {role.title}
                        <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700 border-blue-200">
                          {role.count}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {role.description}
                      </CardDescription>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                          <Mail className="h-4 w-4 mr-2" />
                          Get Contacts
                        </Button>
                        <Button size="sm" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Market Insights */}
            <div className="mb-16">
              <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    IT Industry Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {marketInsights.map((insight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-white/90">{insight}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Ready to Connect with IT Professionals?
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Access our comprehensive database of 2.02M+ verified IT contacts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Mail className="h-5 w-5 mr-2" />
                      Get Complete Database
                    </Button>
                    <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                      <Phone className="h-5 w-5 mr-2" />
                      Schedule Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}