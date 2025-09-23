import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, Mail, Phone, MapPin, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FinancialServicesEmailList() {
  const financialTitles = [
    { title: "Bank Presidents", count: "12,345", description: "Senior executives leading banking institutions" },
    { title: "Investment Advisors", count: "189,567", description: "Managing client investment portfolios" },
    { title: "Loan Officers", count: "234,891", description: "Processing and approving financial loans" },
    { title: "Financial Planners", count: "156,789", description: "Providing comprehensive financial planning" },
    { title: "Insurance Agents", count: "267,543", description: "Selling insurance products and services" },
    { title: "Wealth Managers", count: "89,234", description: "Managing high-net-worth client assets" },
    { title: "Compliance Officers", count: "78,901", description: "Ensuring regulatory compliance" },
    { title: "Risk Managers", count: "67,432", description: "Managing financial risk and exposure" },
    { title: "Portfolio Managers", count: "45,678", description: "Managing investment portfolios" },
    { title: "Credit Analysts", count: "98,765", description: "Analyzing creditworthiness and risk" },
    { title: "Financial Controllers", count: "123,456", description: "Managing financial reporting and controls" },
    { title: "Treasury Directors", count: "34,567", description: "Managing corporate treasury functions" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "2.06M+", icon: Users },
    { label: "Financial Institutions", value: "45,000+", icon: DollarSign },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.7%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Financial services employ over 1.4 million professionals nationwide",
    "Digital banking adoption increased 420% across all institutions",
    "Fintech integration implemented by 78% of traditional banks",
    "Robo-advisor services adopted by 65% of wealth management firms"
  ];

  return (
    <>
      <SEOHead 
        title="Financial Services Email List | 1.4M+ Professional Contacts"
        description="Access verified email lists of bank executives, investment advisors, and financial professionals. Over 1.4 million contacts across financial services."
        keywords="financial services email list, bank executives, investment advisors, financial professionals"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full">
                  <DollarSign className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Financial Services<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                  Professional Email Lists
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Connect with over 1.4 million financial services professionals including bank executives, 
                investment advisors, and wealth management specialists nationwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Users className="h-4 w-4 mr-2" />
                  1.4M+ Contacts
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <DollarSign className="h-4 w-4 mr-2" />
                  45K+ Institutions
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Mail className="h-4 w-4 mr-2" />
                  98.7% Accuracy
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex justify-center mb-2">
                      <metric.icon className="h-8 w-8 text-emerald-600" />
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
                  Financial Services Professional Categories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive database covering all financial roles from banking to wealth management
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {financialTitles.map((role, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                        {role.title}
                        <Badge variant="outline" className="ml-2 bg-emerald-50 text-emerald-700 border-emerald-200">
                          {role.count}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {role.description}
                      </CardDescription>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                          <Mail className="h-4 w-4 mr-2" />
                          Get Contacts
                        </Button>
                        <Button size="sm" variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <Card className="border-0 shadow-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Financial Services Industry Insights
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
                    Ready to Connect with Financial Professionals?
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Access our comprehensive database of 1.4M+ verified financial services contacts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                      <Mail className="h-5 w-5 mr-2" />
                      Get Complete Database
                    </Button>
                    <Button size="lg" variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
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