import { Users, Building, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ConstructionIndustryEmailList() {
  const constructionTitles = [
    { title: "General Contractors", count: "298,567", description: "Managing overall construction projects" },
    { title: "Project Managers", count: "234,890", description: "Overseeing construction project execution" },
    { title: "Site Supervisors", count: "187,654", description: "Managing on-site construction activities" },
    { title: "Construction Engineers", count: "156,789", description: "Engineering construction design and implementation" },
    { title: "Safety Directors", count: "98,765", description: "Ensuring construction site safety compliance" },
    { title: "Estimators", count: "123,456", description: "Calculating construction project costs" },
    { title: "Architects", count: "89,234", description: "Designing construction and building projects" },
    { title: "Equipment Operators", count: "345,678", description: "Operating heavy construction machinery" },
    { title: "Foremen", count: "267,891", description: "Leading construction crews and trades" },
    { title: "Quality Control Managers", count: "78,901", description: "Ensuring construction quality standards" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "3.04M+", icon: Users },
    { label: "Construction Companies", value: "785,000+", icon: Building },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "97.8%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Construction industry employs over 3.04 million professionals nationwide",
    "Green building practices adopted by 68% of construction companies",
    "Digital construction technology increased productivity by 45%",
    "Prefabricated construction methods grew 250% in commercial projects",
    "Construction safety technology reduced incidents by 32% annually"
  ];

  const constructionCategories = [
    {
      title: "Residential Construction",
      description: "Single and multi-family housing projects",
      count: "1.2M+",
      color: "bg-orange-500",
      professionals: ["Home Builders", "Residential Contractors", "Site Managers", "Trade Supervisors"]
    },
    {
      title: "Commercial Construction",
      description: "Office buildings, retail, and commercial projects",
      count: "987K+",
      color: "bg-blue-500",
      professionals: ["Commercial Contractors", "Project Directors", "Construction Managers", "MEP Engineers"]
    },
    {
      title: "Infrastructure Construction",
      description: "Roads, bridges, and public infrastructure",
      count: "567K+",
      color: "bg-green-500",
      professionals: ["Civil Engineers", "Infrastructure Managers", "Public Works Directors", "Highway Contractors"]
    },
    {
      title: "Specialty Trades",
      description: "Electrical, plumbing, HVAC, and specialized trades",
      count: "286K+",
      color: "bg-purple-500",
      professionals: ["Electricians", "Plumbers", "HVAC Technicians", "Specialty Contractors"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Construction Industry Email List - 3.04M+ Verified Contacts | ELP Data"
        description="Access comprehensive construction industry email database with 3.04M+ verified contacts. Connect with contractors, project managers, engineers, and construction professionals."
        keywords="construction industry email list, contractor contacts, construction professionals, building industry database"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Building className="w-4 h-4 mr-2" />
              Construction Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Construction Industry
              <span className="block text-orange-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 3.04 million construction professionals including contractors, project managers, 
              engineers, and specialty trade professionals across all construction sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Get Construction Contacts
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
                    <Icon className="w-8 h-8 text-orange-600 mx-auto mb-2" />
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
              Key Construction Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {constructionTitles.map((title, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=construction&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              Construction Industry Segments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {constructionCategories.map((category, index) => (
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
              Construction Market Insights
            </h2>
            <Card className="bg-gradient-to-r from-orange-50 to-slate-50">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {marketInsights.map((insight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
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
              <CardTitle className="text-2xl text-gray-900">Get Construction Industry Contacts</CardTitle>
              <CardDescription>
                Access verified construction industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific construction segments or requirements..." />
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                Request Construction Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}