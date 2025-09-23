import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Fuel, Users, Mail, Phone, MapPin, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OilGasEmailList() {
  const oilGasTitles = [
    { title: "Petroleum Engineers", count: "89,456", description: "Engineers specializing in oil and gas extraction" },
    { title: "Drilling Engineers", count: "34,567", description: "Experts in drilling operations and well design" },
    { title: "Reservoir Engineers", count: "28,890", description: "Analyzing and optimizing hydrocarbon reservoirs" },
    { title: "Production Managers", count: "45,678", description: "Managing oil and gas production operations" },
    { title: "Geologists", count: "67,234", description: "Geological experts in hydrocarbon exploration" },
    { title: "Safety Directors", count: "23,456", description: "Ensuring safety compliance in oil and gas operations" },
    { title: "Operations Supervisors", count: "78,901", description: "Supervising daily field operations" },
    { title: "Pipeline Engineers", count: "34,567", description: "Designing and maintaining pipeline infrastructure" },
    { title: "Refinery Managers", count: "12,345", description: "Managing petroleum refining operations" },
    { title: "Environmental Compliance Officers", count: "19,876", description: "Ensuring environmental regulatory compliance" },
    { title: "Procurement Managers", count: "25,789", description: "Managing equipment and service procurement" },
    { title: "Project Managers", count: "56,234", description: "Leading oil and gas development projects" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "516K+", icon: Users },
    { label: "Active Companies", value: "8,900+", icon: Fuel },
    { label: "Global Reach", value: "45 Countries", icon: MapPin },
    { label: "Data Accuracy", value: "97.2%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Oil & gas industry employs over 516,000 professionals globally",
    "Digital transformation initiatives increased 280% in exploration",
    "Renewable energy integration specialists growing 45% annually",
    "Remote operations management adopted by 85% of major operators"
  ];

  return (
    <>
      <SEOHead 
        title="Oil & Gas Industry Email List | 516K+ Professional Contacts"
        description="Access verified email lists of petroleum engineers, drilling specialists, production managers, and energy professionals. Over 516,000 contacts across the energy sector."
        keywords="oil gas email list, petroleum engineers, energy professionals, drilling engineers contacts"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full">
                  <Fuel className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Oil & Gas Industry<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Professional Email Lists
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Connect with over 516,000 oil and gas professionals including petroleum engineers, 
                drilling specialists, production managers, and energy sector decision makers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Users className="h-4 w-4 mr-2" />
                  516K+ Contacts
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Fuel className="h-4 w-4 mr-2" />
                  8,900+ Companies
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Mail className="h-4 w-4 mr-2" />
                  97.2% Accuracy
                </Badge>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex justify-center mb-2">
                      <metric.icon className="h-8 w-8 text-orange-600" />
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
                  Oil & Gas Professional Categories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive database covering all energy sector roles from exploration to production
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {oilGasTitles.map((role, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                        {role.title}
                        <Badge variant="outline" className="ml-2 bg-orange-50 text-orange-700 border-orange-200">
                          {role.count}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {role.description}
                      </CardDescription>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-orange-600 hover:bg-orange-700">
                          <Mail className="h-4 w-4 mr-2" />
                          Get Contacts
                        </Button>
                        <Button size="sm" variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50">
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
              <Card className="border-0 shadow-xl bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Oil & Gas Industry Insights
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
                    Ready to Connect with Energy Professionals?
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Access our comprehensive database of 516K+ verified oil & gas contacts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                      <Mail className="h-5 w-5 mr-2" />
                      Get Complete Database
                    </Button>
                    <Button size="lg" variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50">
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