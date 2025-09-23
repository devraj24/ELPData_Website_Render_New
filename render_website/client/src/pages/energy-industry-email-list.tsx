import { Users, Zap, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EnergyIndustryEmailList() {
  const energyTitles = [
    { title: "Energy Engineers", count: "156,789", description: "Engineers specializing in energy systems and efficiency" },
    { title: "Power Plant Managers", count: "89,234", description: "Managing power generation facilities" },
    { title: "Renewable Energy Directors", count: "123,456", description: "Leading renewable energy projects and initiatives" },
    { title: "Utility Operations Managers", count: "198,765", description: "Managing utility operations and infrastructure" },
    { title: "Energy Analysts", count: "87,654", description: "Analyzing energy markets and consumption patterns" },
    { title: "Grid Operations Engineers", count: "134,567", description: "Managing electrical grid operations and maintenance" },
    { title: "Energy Consultants", count: "76,543", description: "Providing energy efficiency and consulting services" },
    { title: "Solar Project Managers", count: "98,876", description: "Managing solar energy installation projects" },
    { title: "Wind Energy Specialists", count: "65,432", description: "Specializing in wind power generation systems" },
    { title: "Energy Storage Engineers", count: "54,321", description: "Developing and managing energy storage solutions" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.85M+", icon: Users },
    { label: "Energy Companies", value: "12,500+", icon: Zap },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.1%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Energy industry employs over 1.85 million professionals nationwide",
    "Renewable energy capacity increased 420% in the past 5 years",
    "Smart grid technology adoption reached 78% across utilities",
    "Energy storage deployments grew 380% year-over-year",
    "Clean energy jobs increased 67% faster than overall economy"
  ];

  const energyCategories = [
    {
      title: "Renewable Energy",
      description: "Solar, wind, and other renewable energy sources",
      count: "687K+",
      color: "bg-green-500",
      professionals: ["Solar Engineers", "Wind Technicians", "Renewable Project Managers", "Sustainability Directors"]
    },
    {
      title: "Traditional Power Generation",
      description: "Coal, natural gas, and nuclear power plants",
      count: "456K+",
      color: "bg-gray-500",
      professionals: ["Plant Operators", "Maintenance Engineers", "Safety Managers", "Operations Directors"]
    },
    {
      title: "Utilities & Distribution",
      description: "Electric utilities and power distribution",
      count: "523K+",
      color: "bg-blue-500",
      professionals: ["Grid Engineers", "Distribution Managers", "Field Technicians", "Customer Service Managers"]
    },
    {
      title: "Energy Services",
      description: "Energy consulting and efficiency services",
      count: "184K+",
      color: "bg-yellow-500",
      professionals: ["Energy Auditors", "Efficiency Consultants", "Project Developers", "Account Managers"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Energy Industry Email List - 1.85M+ Verified Contacts | ELP Data"
        description="Access comprehensive energy industry email database with 1.85M+ verified contacts. Connect with energy engineers, utility professionals, and renewable energy specialists."
        keywords="energy industry email list, utility contacts, renewable energy professionals, power generation database"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Energy Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Energy Industry
              <span className="block text-green-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 1.85 million energy professionals including engineers, utility managers, 
              renewable energy specialists, and power generation experts across all energy sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Energy Contacts
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
                    <Icon className="w-8 h-8 text-green-600 mx-auto mb-2" />
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
              Key Energy Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {energyTitles.map((title, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=energy&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              Energy Industry Segments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {energyCategories.map((category, index) => (
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
              Energy Market Insights
            </h2>
            <Card className="bg-gradient-to-r from-green-50 to-slate-50">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {marketInsights.map((insight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0"></div>
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
              <CardTitle className="text-2xl text-gray-900">Get Energy Industry Contacts</CardTitle>
              <CardDescription>
                Access verified energy industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific energy segments or requirements..." />
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Request Energy Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}