import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coffee, Users, Mail, Phone, MapPin, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HospitalityEmailList() {
  const hospitalityTitles = [
    { title: "Hotel General Managers", count: "123,456", description: "Senior executives managing hotel operations" },
    { title: "Restaurant Managers", count: "298,765", description: "Managing restaurant operations and staff" },
    { title: "Food & Beverage Directors", count: "87,234", description: "Overseeing F&B operations in hospitality venues" },
    { title: "Event Coordinators", count: "156,789", description: "Planning and executing events and conferences" },
    { title: "Hospitality Sales Managers", count: "134,567", description: "Managing sales and customer relationships" },
    { title: "Resort Operations Managers", count: "45,678", description: "Managing resort facilities and guest services" },
    { title: "Catering Managers", count: "78,901", description: "Managing catering services and events" },
    { title: "Guest Services Managers", count: "167,890", description: "Ensuring exceptional guest experiences" },
    { title: "Revenue Managers", count: "56,234", description: "Optimizing pricing and revenue strategies" },
    { title: "Housekeeping Directors", count: "89,345", description: "Managing housekeeping operations and standards" },
    { title: "Front Office Managers", count: "145,678", description: "Managing front desk and guest check-in operations" },
    { title: "Banquet Managers", count: "67,890", description: "Managing banquet facilities and special events" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.45M+", icon: Users },
    { label: "Active Venues", value: "78,500+", icon: Coffee },
    { label: "Market Coverage", value: "Global", icon: MapPin },
    { label: "Data Accuracy", value: "96.5%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Hospitality industry employs over 1.45 million professionals worldwide",
    "Digital guest experience platforms adopted by 89% of major hotels",
    "Revenue management technology usage increased 250% post-pandemic",
    "Contactless service solutions implemented by 92% of properties"
  ];

  return (
    <>
      <SEOHead 
        title="Hospitality Industry Email List | 1.45M+ Professional Contacts"
        description="Access verified email lists of hotel managers, restaurant directors, event coordinators, and hospitality professionals. Over 1.45 million contacts across the hospitality sector."
        keywords="hospitality email list, hotel managers, restaurant managers, hospitality professionals contacts"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full">
                  <Coffee className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hospitality Industry<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  Professional Email Lists
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Connect with over 1.45 million hospitality professionals including hotel managers, 
                restaurant directors, event coordinators, and industry decision makers worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Users className="h-4 w-4 mr-2" />
                  1.45M+ Contacts
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Coffee className="h-4 w-4 mr-2" />
                  78.5K+ Venues
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Mail className="h-4 w-4 mr-2" />
                  96.5% Accuracy
                </Badge>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex justify-center mb-2">
                      <metric.icon className="h-8 w-8 text-amber-600" />
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
                  Hospitality Professional Categories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive database covering all hospitality industry roles from hotels to restaurants
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hospitalityTitles.map((role, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                        {role.title}
                        <Badge variant="outline" className="ml-2 bg-amber-50 text-amber-700 border-amber-200">
                          {role.count}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {role.description}
                      </CardDescription>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-amber-600 hover:bg-amber-700">
                          <Mail className="h-4 w-4 mr-2" />
                          Get Contacts
                        </Button>
                        <Button size="sm" variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-50">
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
              <Card className="border-0 shadow-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Hospitality Industry Insights
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
                    Ready to Connect with Hospitality Professionals?
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Access our comprehensive database of 1.45M+ verified hospitality contacts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                      <Mail className="h-5 w-5 mr-2" />
                      Get Complete Database
                    </Button>
                    <Button size="lg" variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-50">
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