import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cpu, Users, Mail, Phone, MapPin, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ElectronicsIndustryEmailList() {
  const electronicsTitles = [
    { title: "Electronics Engineers", count: "189,456", description: "Designing and developing electronic systems" },
    { title: "Product Managers", count: "123,789", description: "Managing electronic product development lifecycle" },
    { title: "Manufacturing Directors", count: "78,901", description: "Overseeing electronics manufacturing operations" },
    { title: "R&D Directors", count: "56,789", description: "Leading electronics research and development" },
    { title: "Quality Control Managers", count: "89,234", description: "Ensuring electronics quality and testing standards" },
    { title: "Design Engineers", count: "145,678", description: "Creating electronic circuit and system designs" },
    { title: "Procurement Specialists", count: "67,890", description: "Managing electronic component sourcing" },
    { title: "Test Engineers", count: "98,765", description: "Testing and validating electronic products" },
    { title: "Sales Directors", count: "156,432", description: "Managing electronics sales and distribution" },
    { title: "Firmware Engineers", count: "134,567", description: "Developing embedded software for electronics" },
    { title: "Supply Chain Managers", count: "87,654", description: "Managing electronics supply chain operations" },
    { title: "IoT Specialists", count: "76,543", description: "Developing Internet of Things devices" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.41M+", icon: Users },
    { label: "Electronics Companies", value: "18,500+", icon: Cpu },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.8%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Electronics industry employs over 1.41 million professionals nationwide",
    "5G technology adoption accelerated 420% across consumer electronics",
    "AI-powered electronics development increased 380% in past 3 years",
    "Sustainable electronics manufacturing practices adopted by 76% of companies"
  ];

  return (
    <>
      <SEOHead 
        title="Electronics Industry Email List | 1.41M+ Professional Contacts"
        description="Access verified email lists of electronics engineers, product managers, and electronics professionals. Over 1.41 million contacts across the electronics sector."
        keywords="electronics email list, electronics engineers, product managers, electronics professionals"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full">
                  <Cpu className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Electronics Industry<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Professional Email Lists
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Connect with over 1.41 million electronics professionals including engineers, 
                product managers, and IoT specialists nationwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Users className="h-4 w-4 mr-2" />
                  1.41M+ Contacts
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Cpu className="h-4 w-4 mr-2" />
                  18.5K+ Companies
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Mail className="h-4 w-4 mr-2" />
                  98.8% Accuracy
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex justify-center mb-2">
                      <metric.icon className="h-8 w-8 text-indigo-600" />
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
                  Electronics Professional Categories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive database covering all electronics roles from engineering to manufacturing
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {electronicsTitles.map((role, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                        {role.title}
                        <Badge variant="outline" className="ml-2 bg-indigo-50 text-indigo-700 border-indigo-200">
                          {role.count}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {role.description}
                      </CardDescription>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                          <Mail className="h-4 w-4 mr-2" />
                          Get Contacts
                        </Button>
                        <Button size="sm" variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <Card className="border-0 shadow-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Electronics Industry Insights
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
                    Ready to Connect with Electronics Professionals?
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Access our comprehensive database of 1.41M+ verified electronics contacts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                      <Mail className="h-5 w-5 mr-2" />
                      Get Complete Database
                    </Button>
                    <Button size="lg" variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50">
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