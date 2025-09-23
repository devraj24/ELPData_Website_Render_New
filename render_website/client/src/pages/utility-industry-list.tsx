import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Users, Mail, Phone, MapPin, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function UtilityIndustryList() {
  const utilityTitles = [
    { title: "Utility Operations Managers", count: "89,456", description: "Managing utility operations and infrastructure" },
    { title: "Power Plant Engineers", count: "67,234", description: "Engineering and maintaining power generation facilities" },
    { title: "Grid Operations Specialists", count: "45,678", description: "Managing electrical grid operations and reliability" },
    { title: "Utility Regulatory Affairs", count: "23,456", description: "Managing regulatory compliance and government relations" },
    { title: "Energy Trading Managers", count: "34,567", description: "Managing energy commodity trading and procurement" },
    { title: "Distribution Engineers", count: "78,901", description: "Planning and maintaining utility distribution systems" },
    { title: "Water Treatment Managers", count: "56,789", description: "Managing water treatment and distribution operations" },
    { title: "Smart Grid Directors", count: "34,890", description: "Leading smart grid technology implementations" },
    { title: "Environmental Compliance Officers", count: "29,345", description: "Ensuring environmental regulatory compliance" },
    { title: "Customer Service Directors", count: "67,123", description: "Managing utility customer service operations" },
    { title: "Asset Management Directors", count: "45,234", description: "Managing utility infrastructure and asset lifecycle" },
    { title: "Renewable Energy Managers", count: "89,567", description: "Managing renewable energy projects and integration" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "762K+", icon: Users },
    { label: "Active Utilities", value: "3,200+", icon: Zap },
    { label: "Service Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.1%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Utility industry employs over 762,000 professionals across energy sectors",
    "Smart grid technology investments increased 320% in past 5 years",
    "Renewable energy integration specialists growing 85% annually",
    "Grid modernization projects worth $165 billion planned through 2030"
  ];

  return (
    <>
      <SEOHead 
        title="Utility Industry Email List | 762K+ Professional Contacts"
        description="Access verified email lists of utility managers, power engineers, grid specialists, and energy professionals. Over 762,000 contacts across the utility sector."
        keywords="utility email list, power plant engineers, grid operations, energy professionals contacts"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-blue-50">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-yellow-600 to-blue-600 rounded-full">
                  <Zap className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Utility Industry<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-blue-600">
                  Professional Email Lists
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Connect with over 762,000 utility professionals including operations managers, 
                power engineers, grid specialists, and energy sector decision makers nationwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Users className="h-4 w-4 mr-2" />
                  762K+ Contacts
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Zap className="h-4 w-4 mr-2" />
                  3,200+ Utilities
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Mail className="h-4 w-4 mr-2" />
                  98.1% Accuracy
                </Badge>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex justify-center mb-2">
                      <metric.icon className="h-8 w-8 text-yellow-600" />
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
                  Utility Professional Categories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive database covering all utility sector roles from operations to renewable energy
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {utilityTitles.map((role, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                        {role.title}
                        <Badge variant="outline" className="ml-2 bg-yellow-50 text-yellow-700 border-yellow-200">
                          {role.count}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {role.description}
                      </CardDescription>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-yellow-600 hover:bg-yellow-700">
                          <Mail className="h-4 w-4 mr-2" />
                          Get Contacts
                        </Button>
                        <Button size="sm" variant="outline" className="border-yellow-200 text-yellow-700 hover:bg-yellow-50">
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
              <Card className="border-0 shadow-xl bg-gradient-to-r from-yellow-600 to-blue-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Utility Industry Insights
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
                    Ready to Connect with Utility Professionals?
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Access our comprehensive database of 762K+ verified utility contacts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                      <Mail className="h-5 w-5 mr-2" />
                      Get Complete Database
                    </Button>
                    <Button size="lg" variant="outline" className="border-yellow-200 text-yellow-700 hover:bg-yellow-50">
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