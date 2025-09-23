import { Users, Car, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AutomotiveIndustryEmailList() {
  const automotiveTitles = [
    { title: "Automotive Engineers", count: "189,456", description: "Engineers designing vehicles and automotive systems" },
    { title: "Manufacturing Directors", count: "78,234", description: "Directors overseeing automotive production" },
    { title: "Quality Assurance Managers", count: "65,789", description: "Ensuring automotive quality and safety standards" },
    { title: "Supply Chain Directors", count: "89,123", description: "Managing automotive supply chain operations" },
    { title: "Product Development Managers", count: "123,567", description: "Leading automotive product innovation" },
    { title: "Sales Directors", count: "156,890", description: "Managing automotive sales and distribution" },
    { title: "Service Directors", count: "98,765", description: "Overseeing automotive service operations" },
    { title: "Fleet Managers", count: "67,432", description: "Managing commercial vehicle fleets" },
    { title: "Parts Directors", count: "54,321", description: "Managing automotive parts and accessories" },
    { title: "Dealership Owners", count: "43,210", description: "Independent automotive dealership operators" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "2.50M+", icon: Users },
    { label: "Manufacturing Plants", value: "18,500+", icon: Car },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.9%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Automotive industry employs over 2.50 million professionals nationwide",
    "Electric vehicle adoption increased 340% in the last 2 years",
    "Autonomous driving technology investments grew 280% year-over-year",
    "Supply chain digitization implemented by 85% of manufacturers",
    "Connected car technology adopted by 92% of new vehicle models"
  ];

  const automotiveCategories = [
    {
      title: "Vehicle Manufacturing",
      description: "OEMs and vehicle assembly operations",
      count: "1.2M+",
      color: "bg-blue-500",
      professionals: ["Manufacturing Engineers", "Production Managers", "Quality Directors", "Plant Managers"]
    },
    {
      title: "Automotive Suppliers",
      description: "Tier 1, 2, and 3 automotive suppliers",
      count: "687K+",
      color: "bg-green-500",
      professionals: ["Supply Chain Directors", "Procurement Managers", "Supplier Quality Engineers", "Operations Directors"]
    },
    {
      title: "Aftermarket Services",
      description: "Parts, service, and repair operations",
      count: "456K+",
      color: "bg-purple-500",
      professionals: ["Service Managers", "Parts Directors", "Technical Training Managers", "Warranty Administrators"]
    },
    {
      title: "Automotive Dealers",
      description: "New and used vehicle dealerships",
      count: "167K+",
      color: "bg-orange-500",
      professionals: ["General Managers", "Sales Directors", "Finance Managers", "Service Directors"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Automotive Industry Email List - 2.50M+ Verified Contacts | ELP Data"
        description="Access comprehensive automotive industry email database with 2.50M+ verified contacts. Connect with automotive engineers, manufacturers, dealers, and suppliers across all segments."
        keywords="automotive industry email list, auto industry contacts, vehicle manufacturer emails, automotive supplier database"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Car className="w-4 h-4 mr-2" />
              Automotive Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Automotive Industry
              <span className="block text-blue-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 2.50 million automotive professionals including engineers, manufacturers, 
              suppliers, dealers, and service providers across the entire automotive ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Automotive Contacts
              </Button>
              <Button size="lg" variant="outline">
                View Sample Data
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {keyMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Professional Titles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Automotive Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {automotiveTitles.map((title, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=automotive&role=${encodeURIComponent(title.title)}`, '_blank')}
                      >
                        Get Contacts
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Industry Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Automotive Industry Segments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {automotiveCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
                        <CardDescription className="mt-2">{category.description}</CardDescription>
                      </div>
                      <Badge className={`${category.color} text-white`}>{category.count}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-700">Key Professionals:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.professionals.map((prof, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{prof}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Market Insights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Automotive Market Insights
            </h2>
            <Card className="bg-gradient-to-r from-blue-50 to-slate-50">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {marketInsights.map((insight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{insight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Get Automotive Industry Contacts</CardTitle>
              <CardDescription>
                Access verified automotive industry email lists for your marketing campaigns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Business Email" />
              <Input placeholder="Company Name" />
              <Input placeholder="Phone Number" />
              <Textarea placeholder="Specific automotive segments or requirements..." />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Request Automotive Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}