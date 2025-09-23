import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Microscope, Users, Mail, Phone, MapPin, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BiotechnologyIndustryEmailList() {
  const biotechTitles = [
    { title: "Research Directors", count: "34,567", description: "Leading biotechnology research initiatives" },
    { title: "Clinical Trial Managers", count: "28,901", description: "Managing clinical research studies" },
    { title: "Regulatory Affairs Directors", count: "23,456", description: "Managing regulatory compliance and approvals" },
    { title: "Biotech CEOs", count: "12,345", description: "Leading biotechnology companies" },
    { title: "Laboratory Directors", count: "45,678", description: "Managing biotechnology laboratories" },
    { title: "Bioinformatics Specialists", count: "67,890", description: "Analyzing biological data and genomics" },
    { title: "Quality Assurance Managers", count: "34,567", description: "Ensuring biotech quality standards" },
    { title: "Manufacturing Directors", count: "23,456", description: "Managing biopharmaceutical production" },
    { title: "Product Development Managers", count: "56,789", description: "Developing biotechnology products" },
    { title: "Business Development Directors", count: "19,234", description: "Managing biotech partnerships and licensing" },
    { title: "Principal Scientists", count: "89,012", description: "Leading scientific research projects" },
    { title: "Medical Affairs Directors", count: "31,567", description: "Managing medical and scientific communications" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "467K+", icon: Users },
    { label: "Biotech Companies", value: "12,500+", icon: Microscope },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.9%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Biotechnology industry employs over 467,000 professionals nationwide",
    "Gene therapy market grew 340% in the past 5 years",
    "AI-driven drug discovery adopted by 78% of biotech companies",
    "Personalized medicine initiatives increased 290% since 2020"
  ];

  return (
    <>
      <SEOHead 
        title="Biotechnology Industry Email List | 467K+ Professional Contacts"
        description="Access verified email lists of research directors, clinical trial managers, and biotechnology professionals. Over 467,000 contacts across the biotech sector."
        keywords="biotechnology email list, research directors, clinical trial managers, biotech professionals"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
                  <Microscope className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Biotechnology Industry<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Professional Email Lists
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Connect with over 467,000 biotechnology professionals including research directors, 
                clinical trial managers, and bioinformatics specialists nationwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Users className="h-4 w-4 mr-2" />
                  467K+ Contacts
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Microscope className="h-4 w-4 mr-2" />
                  12.5K+ Companies
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Mail className="h-4 w-4 mr-2" />
                  98.9% Accuracy
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex justify-center mb-2">
                      <metric.icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{metric.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 font-medium">{metric.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Biotechnology Professional Categories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive database covering all biotech roles from research to commercialization
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {biotechTitles.map((role, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                        {role.title}
                        <Badge variant="outline" className="ml-2 bg-purple-50 text-purple-700 border-purple-200">
                          {role.count}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {role.description}
                      </CardDescription>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                          <Mail className="h-4 w-4 mr-2" />
                          Get Contacts
                        </Button>
                        <Button size="sm" variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <Card className="border-0 shadow-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Biotechnology Industry Insights
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

            <div className="text-center">
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Ready to Connect with Biotechnology Professionals?
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Access our comprehensive database of 467K+ verified biotechnology contacts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      <Mail className="h-5 w-5 mr-2" />
                      Get Complete Database
                    </Button>
                    <Button size="lg" variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
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