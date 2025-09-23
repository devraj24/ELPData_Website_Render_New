import { Users, Truck, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TransportationIndustryEmailList() {
  const transportationTitles = [
    { title: "Fleet Managers", count: "298,567", description: "Managing commercial vehicle fleets and operations" },
    { title: "Transportation Directors", count: "187,654", description: "Overseeing transportation operations and logistics" },
    { title: "Logistics Coordinators", count: "234,890", description: "Coordinating transportation and delivery schedules" },
    { title: "Truck Drivers", count: "456,789", description: "Professional commercial vehicle operators" },
    { title: "Dispatch Managers", count: "123,456", description: "Managing vehicle dispatch and routing" },
    { title: "Safety Directors", count: "89,234", description: "Ensuring transportation safety compliance" },
    { title: "Operations Managers", count: "156,789", description: "Managing day-to-day transportation operations" },
    { title: "Route Planners", count: "98,765", description: "Optimizing transportation routes and schedules" },
    { title: "Maintenance Supervisors", count: "134,567", description: "Overseeing vehicle maintenance and repairs" },
    { title: "Transportation Analysts", count: "76,543", description: "Analyzing transportation efficiency and costs" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "2.41M+", icon: Users },
    { label: "Transportation Companies", value: "178,000+", icon: Truck },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.3%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Transportation industry employs over 2.41 million professionals nationwide",
    "Electric vehicle adoption in commercial fleets increased 290%",
    "Autonomous vehicle testing expanded to 45 major transportation hubs",
    "Transportation management systems improved efficiency by 35%",
    "Last-mile delivery solutions grew 450% with e-commerce expansion"
  ];

  const transportationCategories = [
    {
      title: "Trucking & Freight",
      description: "Long-haul and regional freight transportation",
      count: "1.1M+",
      color: "bg-blue-500",
      professionals: ["Truck Drivers", "Fleet Managers", "Freight Coordinators", "Dispatcher"]
    },
    {
      title: "Public Transportation",
      description: "Buses, trains, and municipal transit systems",
      count: "523K+",
      color: "bg-green-500",
      professionals: ["Transit Operators", "Route Supervisors", "Transportation Planners", "Maintenance Staff"]
    },
    {
      title: "Logistics & Warehousing",
      description: "Supply chain and distribution operations",
      count: "567K+",
      color: "bg-orange-500",
      professionals: ["Logistics Managers", "Warehouse Supervisors", "Inventory Controllers", "Distribution Directors"]
    },
    {
      title: "Specialized Transport",
      description: "Aviation, maritime, and specialized carriers",
      count: "221K+",
      color: "bg-purple-500",
      professionals: ["Pilots", "Ship Captains", "Cargo Specialists", "Transport Coordinators"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Transportation Industry Email List - 2.41M+ Verified Contacts | ELP Data"
        description="Access comprehensive transportation industry email database with 2.41M+ verified contacts. Connect with fleet managers, logistics professionals, and transportation operators."
        keywords="transportation industry email list, fleet manager contacts, logistics professionals, trucking industry database"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Truck className="w-4 h-4 mr-2" />
              Transportation Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transportation Industry
              <span className="block text-blue-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 2.41 million transportation professionals including fleet managers, logistics coordinators, 
              drivers, and transportation operators across all transportation sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Transportation Contacts
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
              Key Transportation Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {transportationTitles.map((title, index) => (
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
                        onClick={() => window.open(`/contact-us?industry=transportation&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              Transportation Industry Segments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {transportationCategories.map((category, index) => (
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
              Transportation Market Insights
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
              <CardTitle className="text-2xl text-gray-900">Get Transportation Industry Contacts</CardTitle>
              <CardDescription>
                Access verified transportation industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific transportation segments or requirements..." />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Request Transportation Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}