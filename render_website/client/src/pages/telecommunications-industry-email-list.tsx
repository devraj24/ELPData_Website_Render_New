import { Users, Radio, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TelecommunicationsIndustryEmailList() {
  const telecomTitles = [
    { title: "Network Engineers", count: "214,567", description: "Designing and maintaining telecommunications networks" },
    { title: "Telecom Operations Directors", count: "99,890", description: "Managing telecommunications operations and infrastructure" },
    { title: "RF Engineers", count: "131,234", description: "Specializing in radio frequency and wireless communications" },
    { title: "Field Service Technicians", count: "345,678", description: "Installing and maintaining telecommunications equipment" },
    { title: "Network Architects", count: "83,456", description: "Designing enterprise and carrier network solutions" },
    { title: "Telecom Sales Directors", count: "181,234", description: "Managing telecommunications sales and customer relationships" },
    { title: "5G Implementation Specialists", count: "63,432", description: "Leading 5G network deployment and optimization" },
    { title: "Fiber Optic Engineers", count: "116,012", description: "Designing and implementing fiber optic networks" },
    { title: "Wireless Network Planners", count: "96,234", description: "Planning and optimizing wireless network coverage" },
    { title: "VoIP Specialists", count: "79,876", description: "Implementing voice over IP communications systems" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.78M+", icon: Users },
    { label: "Telecom Companies", value: "14,200+", icon: Radio },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.7%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Telecommunications industry employs over 1.78 million professionals nationwide",
    "5G network deployment accelerated 520% across major metropolitan areas",
    "Edge computing infrastructure investments increased 410% year-over-year",
    "Fiber-to-the-home rollouts expanded to reach 89% of urban households",
    "IoT device connections managed by telecom providers grew 380% annually"
  ];

  const telecomCategories = [
    {
      title: "Wireless Networks",
      description: "Mobile carriers and wireless infrastructure",
      count: "623K+",
      color: "bg-blue-500",
      professionals: ["Wireless Engineers", "Cell Tower Technicians", "RF Specialists", "Network Optimizers"]
    },
    {
      title: "Broadband & Internet",
      description: "Internet service providers and broadband infrastructure",
      count: "456K+",
      color: "bg-green-500",
      professionals: ["Network Engineers", "Fiber Technicians", "NOC Operators", "Infrastructure Managers"]
    },
    {
      title: "Enterprise Solutions",
      description: "Business telecommunications and managed services",
      count: "387K+",
      color: "bg-purple-500",
      professionals: ["Solutions Engineers", "Account Managers", "Technical Consultants", "Project Managers"]
    },
    {
      title: "Equipment & Infrastructure",
      description: "Telecom equipment vendors and infrastructure providers",
      count: "314K+",
      color: "bg-orange-500",
      professionals: ["Hardware Engineers", "Software Developers", "Field Engineers", "Support Specialists"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Telecommunications Industry Email List - 1.78M+ Verified Contacts | ELP Data"
        description="Access comprehensive telecommunications industry email database with 1.78M+ verified contacts. Connect with network engineers, telecom executives, and wireless professionals."
        keywords="telecommunications industry email list, telecom engineer contacts, wireless network professionals, telecom infrastructure database"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Radio className="w-4 h-4 mr-2" />
              Telecommunications Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Telecommunications Industry
              <span className="block text-purple-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 1.78 million telecommunications professionals including network engineers, 
              wireless specialists, infrastructure managers, and telecom executives across all sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get Telecom Contacts
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
                    <Icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
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
              Key Telecommunications Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {telecomTitles.map((title, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=telecommunications&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              Telecommunications Industry Segments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {telecomCategories.map((category, index) => (
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
              Telecommunications Market Insights
            </h2>
            <Card className="bg-gradient-to-r from-purple-50 to-slate-50">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {marketInsights.map((insight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></div>
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
              <CardTitle className="text-2xl text-gray-900">Get Telecommunications Contacts</CardTitle>
              <CardDescription>
                Access verified telecommunications industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific telecom segments or requirements..." />
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Request Telecommunications Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}