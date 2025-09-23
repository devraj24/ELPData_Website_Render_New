import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Users, Mail, Phone, MapPin, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RetailIndustryList() {
  const retailTitles = [
    { title: "Store Managers", count: "456,789", description: "Managing daily retail store operations and staff" },
    { title: "Retail Buyers", count: "123,456", description: "Purchasing merchandise and managing inventory" },
    { title: "Visual Merchandisers", count: "89,234", description: "Creating appealing product displays and layouts" },
    { title: "Category Managers", count: "67,890", description: "Managing specific product categories and performance" },
    { title: "Regional Managers", count: "45,678", description: "Overseeing multiple store locations in regions" },
    { title: "Loss Prevention Managers", count: "34,567", description: "Managing security and loss prevention strategies" },
    { title: "Customer Experience Managers", count: "78,901", description: "Enhancing customer satisfaction and loyalty" },
    { title: "E-commerce Directors", count: "56,234", description: "Managing online retail operations and strategies" },
    { title: "Supply Chain Managers", count: "89,345", description: "Managing retail supply chain and logistics" },
    { title: "Marketing Directors", count: "67,123", description: "Leading retail marketing and promotional campaigns" },
    { title: "Operations Directors", count: "45,890", description: "Overseeing retail operations and efficiency" },
    { title: "District Managers", count: "123,789", description: "Managing multiple stores within designated districts" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.28M+", icon: Users },
    { label: "Active Stores", value: "892,000+", icon: ShoppingBag },
    { label: "Retail Chains", value: "15,600+", icon: MapPin },
    { label: "Data Accuracy", value: "97.1%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Retail industry employs over 1.28 million management professionals",
    "Omnichannel retail strategies adopted by 94% of major retailers",
    "AI-powered inventory management used by 76% of retail chains",
    "Mobile commerce accounts for 65% of retail digital transactions"
  ];

  return (
    <>
      <SEOHead 
        title="Retail Industry Email List | 1.28M+ Professional Contacts"
        description="Access verified email lists of store managers, retail buyers, merchandisers, and retail industry professionals. Over 1.28 million contacts across retail operations."
        keywords="retail email list, store managers, retail buyers, merchandising professionals contacts"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full">
                  <ShoppingBag className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Retail Industry<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  Professional Email Lists
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Connect with over 1.28 million retail professionals including store managers, 
                buyers, merchandisers, and retail industry decision makers across all channels.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Users className="h-4 w-4 mr-2" />
                  1.28M+ Contacts
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  892K+ Stores
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Mail className="h-4 w-4 mr-2" />
                  97.1% Accuracy
                </Badge>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex justify-center mb-2">
                      <metric.icon className="h-8 w-8 text-pink-600" />
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
                  Retail Professional Categories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive database covering all retail industry roles from operations to e-commerce
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {retailTitles.map((role, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                        {role.title}
                        <Badge variant="outline" className="ml-2 bg-pink-50 text-pink-700 border-pink-200">
                          {role.count}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {role.description}
                      </CardDescription>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-pink-600 hover:bg-pink-700">
                          <Mail className="h-4 w-4 mr-2" />
                          Get Contacts
                        </Button>
                        <Button size="sm" variant="outline" className="border-pink-200 text-pink-700 hover:bg-pink-50">
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
              <Card className="border-0 shadow-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Retail Industry Insights
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
                    Ready to Connect with Retail Professionals?
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Access our comprehensive database of 1.28M+ verified retail contacts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                      <Mail className="h-5 w-5 mr-2" />
                      Get Complete Database
                    </Button>
                    <Button size="lg" variant="outline" className="border-pink-200 text-pink-700 hover:bg-pink-50">
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