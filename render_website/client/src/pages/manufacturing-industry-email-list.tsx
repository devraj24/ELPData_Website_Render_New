import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Factory, Users, Mail, Phone, MapPin, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ManufacturingIndustryEmailList() {
  const manufacturingTitles = [
    { title: "Plant Managers", count: "189,456", description: "Managing manufacturing operations and production" },
    { title: "Quality Managers", count: "123,789", description: "Ensuring product quality and compliance standards" },
    { title: "Production Supervisors", count: "267,890", description: "Supervising daily production activities" },
    { title: "Operations Directors", count: "89,234", description: "Leading manufacturing operations strategy" },
    { title: "Supply Chain Managers", count: "145,678", description: "Managing supply chain and logistics" },
    { title: "Engineering Managers", count: "98,765", description: "Managing engineering and R&D functions" },
    { title: "Safety Directors", count: "67,432", description: "Managing workplace safety and compliance" },
    { title: "Maintenance Managers", count: "156,789", description: "Managing equipment maintenance and reliability" },
    { title: "Procurement Managers", count: "87,654", description: "Managing vendor relationships and purchasing" },
    { title: "Manufacturing Engineers", count: "234,567", description: "Optimizing manufacturing processes" },
    { title: "Lean Six Sigma Directors", count: "45,678", description: "Leading continuous improvement initiatives" },
    { title: "Automation Specialists", count: "78,901", description: "Implementing manufacturing automation" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "2.32M+", icon: Users },
    { label: "Manufacturing Plants", value: "265,000+", icon: Factory },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.2%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Manufacturing employs over 1.58 million management professionals",
    "Industry 4.0 adoption increased 340% in manufacturing facilities",
    "Smart factory technology implemented by 67% of manufacturers",
    "Supply chain digitization accelerated 280% post-pandemic"
  ];

  return (
    <>
      <SEOHead 
        title="Manufacturing Industry Email List | 1.58M+ Professional Contacts"
        description="Access verified email lists of plant managers, operations directors, and manufacturing professionals. Over 1.58 million contacts across the manufacturing sector."
        keywords="manufacturing email list, plant managers, operations directors, manufacturing professionals"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-gray-700 to-blue-600 rounded-full">
                  <Factory className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Manufacturing Industry<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-blue-600">
                  Professional Email Lists
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Connect with over 1.58 million manufacturing professionals including plant managers, 
                operations directors, and manufacturing specialists nationwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Users className="h-4 w-4 mr-2" />
                  1.58M+ Contacts
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Factory className="h-4 w-4 mr-2" />
                  265K+ Plants
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Mail className="h-4 w-4 mr-2" />
                  98.2% Accuracy
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex justify-center mb-2">
                      <metric.icon className="h-8 w-8 text-gray-700" />
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
                  Manufacturing Professional Categories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive database covering all manufacturing roles from operations to engineering
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {manufacturingTitles.map((role, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                        {role.title}
                        <Badge variant="outline" className="ml-2 bg-gray-50 text-gray-700 border-gray-200">
                          {role.count}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {role.description}
                      </CardDescription>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-gray-700 hover:bg-gray-800">
                          <Mail className="h-4 w-4 mr-2" />
                          Get Contacts
                        </Button>
                        <Button size="sm" variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50">
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <Card className="border-0 shadow-xl bg-gradient-to-r from-gray-700 to-blue-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Manufacturing Industry Insights
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
                    Ready to Connect with Manufacturing Professionals?
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Access our comprehensive database of 1.58M+ verified manufacturing contacts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-gray-700 hover:bg-gray-800">
                      <Mail className="h-5 w-5 mr-2" />
                      Get Complete Database
                    </Button>
                    <Button size="lg" variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50">
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