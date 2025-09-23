import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Users, Mail, Phone, MapPin, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RealEstateEmailList() {
  const realEstateTitles = [
    { title: "Real Estate Agents", count: "487,234", description: "Licensed agents selling residential and commercial properties" },
    { title: "Real Estate Brokers", count: "156,890", description: "Licensed brokers managing real estate transactions" },
    { title: "Property Managers", count: "234,567", description: "Managing rental properties and tenant relations" },
    { title: "Real Estate Developers", count: "89,123", description: "Developing new residential and commercial projects" },
    { title: "Commercial Real Estate Agents", count: "145,678", description: "Specializing in commercial property transactions" },
    { title: "Real Estate Appraisers", count: "78,456", description: "Certified professionals evaluating property values" },
    { title: "Mortgage Brokers", count: "198,765", description: "Facilitating home loan and mortgage services" },
    { title: "Real Estate Attorneys", count: "56,789", description: "Legal professionals specializing in property law" },
    { title: "Property Inspectors", count: "123,456", description: "Conducting property inspections and assessments" },
    { title: "Real Estate Investment Advisors", count: "67,890", description: "Advising on real estate investment opportunities" },
    { title: "Leasing Agents", count: "189,234", description: "Managing property leasing and tenant acquisition" },
    { title: "Real Estate Marketing Directors", count: "34,567", description: "Leading marketing strategies for real estate firms" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "3.18M+", icon: Users },
    { label: "Active Companies", value: "145,000+", icon: Building2 },
    { label: "Market Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "96.8%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Real estate industry employs over 2.1 million professionals nationwide",
    "Average property transaction involves 8-12 different professionals",
    "Digital marketing adoption increased 340% in past 3 years",
    "Mobile-first communication preferred by 78% of real estate professionals"
  ];

  return (
    <>
      <SEOHead 
        title="Real Estate Industry Email List | 2.16M+ Professional Contacts"
        description="Access verified email lists of real estate agents, brokers, property managers, and developers. Over 2.16 million professional contacts across all property sectors."
        keywords="real estate email list, property professionals, real estate agents contacts, brokers database"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                  <Building2 className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Real Estate Industry<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Professional Email Lists
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Connect with over 2.16 million real estate professionals including agents, brokers, 
                property managers, developers, and industry specialists across all market segments.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Users className="h-4 w-4 mr-2" />
                  2.16M+ Contacts
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Building2 className="h-4 w-4 mr-2" />
                  145K+ Companies
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Mail className="h-4 w-4 mr-2" />
                  96.8% Accuracy
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
                  Real Estate Professional Categories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive database covering all real estate industry roles with verified contact information
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {realEstateTitles.map((role, index) => (
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
              <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Real Estate Industry Insights
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
                    Ready to Connect with Real Estate Professionals?
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Access our comprehensive database of 2.16M+ verified real estate contacts
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