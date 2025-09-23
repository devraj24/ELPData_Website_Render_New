import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TreePine, Users, Mail, Phone, MapPin, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ForestryEmailList() {
  const forestryTitles = [
    { title: "Forest Managers", count: "45,678", description: "Managing forest resources and conservation programs" },
    { title: "Logging Operations Directors", count: "23,456", description: "Overseeing timber harvesting operations" },
    { title: "Conservation Officers", count: "34,567", description: "Protecting and preserving forest ecosystems" },
    { title: "Wildlife Biologists", count: "28,901", description: "Studying forest wildlife and habitat management" },
    { title: "Timber Buyers", count: "19,345", description: "Purchasing timber for processing companies" },
    { title: "Forest Rangers", count: "67,432", description: "Protecting public forest lands and resources" },
    { title: "Silviculture Specialists", count: "15,678", description: "Managing forest growth and regeneration" },
    { title: "Forest Fire Management", count: "21,234", description: "Managing wildfire prevention and response" },
    { title: "Environmental Consultants", count: "32,567", description: "Providing forest environmental assessments" },
    { title: "Lumber Mill Managers", count: "18,901", description: "Managing timber processing facilities" },
    { title: "Forest Equipment Dealers", count: "12,345", description: "Selling forestry machinery and equipment" },
    { title: "Arborists", count: "56,789", description: "Tree care and urban forestry specialists" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "356K+", icon: Users },
    { label: "Forest Operations", value: "125,000+", icon: TreePine },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "97.8%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Forestry industry employs over 356,000 management professionals",
    "Sustainable forestry practices adopted by 89% of operations",
    "Digital forest management technology increased 250% adoption",
    "Forest conservation programs expanded 180% in past decade"
  ];

  return (
    <>
      <SEOHead 
        title="Forestry Email List | 356K+ Professional Contacts"
        description="Access verified email lists of forest managers, conservation officers, and forestry professionals. Over 356,000 contacts across the forestry sector."
        keywords="forestry email list, forest managers, conservation officers, forestry professionals"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full">
                  <TreePine className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Forestry Industry<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  Professional Email Lists
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Connect with over 356,000 forestry professionals including forest managers, 
                conservation officers, and silviculture specialists nationwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Users className="h-4 w-4 mr-2" />
                  356K+ Contacts
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <TreePine className="h-4 w-4 mr-2" />
                  125K+ Operations
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Mail className="h-4 w-4 mr-2" />
                  97.8% Accuracy
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex justify-center mb-2">
                      <metric.icon className="h-8 w-8 text-green-600" />
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
                  Forestry Professional Categories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive database covering all forestry roles from conservation to timber management
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {forestryTitles.map((role, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                        {role.title}
                        <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
                          {role.count}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {role.description}
                      </CardDescription>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                          <Mail className="h-4 w-4 mr-2" />
                          Get Contacts
                        </Button>
                        <Button size="sm" variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <Card className="border-0 shadow-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Forestry Industry Insights
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
                    Ready to Connect with Forestry Professionals?
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Access our comprehensive database of 356K+ verified forestry contacts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      <Mail className="h-5 w-5 mr-2" />
                      Get Complete Database
                    </Button>
                    <Button size="lg" variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
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