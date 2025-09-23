import { Users, Plane, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AerospaceIndustryEmailList() {
  const aerospaceTitles = [
    { title: "Aerospace Engineers", count: "298,456", description: "Designing aircraft and spacecraft systems" },
    { title: "Flight Test Engineers", count: "87,234", description: "Testing and validating aircraft performance" },
    { title: "Avionics Engineers", count: "156,789", description: "Developing aircraft electronic systems" },
    { title: "Manufacturing Directors", count: "123,567", description: "Managing aerospace production operations" },
    { title: "Quality Assurance Managers", count: "176,890", description: "Ensuring aerospace quality standards" },
    { title: "Procurement Specialists", count: "134,567", description: "Managing aerospace supply chain operations" },
    { title: "Program Managers", count: "198,765", description: "Leading aerospace development programs" },
    { title: "Systems Engineers", count: "245,678", description: "Integrating complex aerospace systems" },
    { title: "Materials Engineers", count: "89,234", description: "Developing advanced aerospace materials" },
    { title: "Safety Engineers", count: "112,456", description: "Ensuring aerospace safety compliance" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.62M+", icon: Users },
    { label: "Aerospace Companies", value: "8,400+", icon: Plane },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "99.3%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Aerospace industry employs over 1.62 million professionals nationwide",
    "Space economy reached $469 billion with 78% growth in commercial space sector",
    "Sustainable aviation fuel adoption increased 340% among major airlines",
    "Electric aircraft development programs expanded 250% year-over-year",
    "Aerospace manufacturing automation improved efficiency by 65%"
  ];

  const aerospaceCategories = [
    {
      title: "Commercial Aviation",
      description: "Airlines and commercial aircraft manufacturing",
      count: "456K+",
      color: "bg-blue-500",
      professionals: ["Pilots", "Flight Engineers", "Aircraft Mechanics", "Airport Operations"]
    },
    {
      title: "Defense & Military",
      description: "Military aircraft and defense contractors",
      count: "523K+",
      color: "bg-green-500",
      professionals: ["Defense Engineers", "Military Contractors", "Systems Integrators", "Test Pilots"]
    },
    {
      title: "Space & Satellites",
      description: "Space exploration and satellite technology",
      count: "298K+",
      color: "bg-purple-500",
      professionals: ["Satellite Engineers", "Mission Specialists", "Launch Operations", "Space Scientists"]
    },
    {
      title: "Aircraft Manufacturing",
      description: "Aircraft design and production facilities",
      count: "343K+",
      color: "bg-orange-500",
      professionals: ["Design Engineers", "Production Managers", "Assembly Technicians", "Quality Controllers"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Aerospace Industry Email List - 1.62M+ Verified Contacts | ELP Data"
        description="Access comprehensive aerospace industry email database with 1.62M+ verified contacts. Connect with aerospace engineers, aviation professionals, and space industry experts."
        keywords="aerospace industry email list, aviation engineer contacts, space industry professionals, aircraft manufacturing database"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Plane className="w-4 h-4 mr-2" />
              Aerospace Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Aerospace Industry
              <span className="block text-blue-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 1.62 million aerospace professionals including engineers, pilots, 
              manufacturing specialists, and space industry experts across all aerospace sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Aerospace Contacts
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
              Key Aerospace Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aerospaceTitles.map((title, index) => (
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
                        onClick={() => window.open(`/contact-us?industry=aerospace&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              Aerospace Industry Segments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {aerospaceCategories.map((category, index) => (
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
              Aerospace Market Insights
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
              <CardTitle className="text-2xl text-gray-900">Get Aerospace Industry Contacts</CardTitle>
              <CardDescription>
                Access verified aerospace industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific aerospace segments or requirements..." />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Request Aerospace Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}