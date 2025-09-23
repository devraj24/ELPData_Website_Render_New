import { Users, Beaker, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ChemicalIndustryEmailList() {
  const chemicalTitles = [
    { title: "Chemical Engineers", count: "298,765", description: "Designing chemical processes and production systems" },
    { title: "Process Engineers", count: "234,567", description: "Optimizing chemical manufacturing processes" },
    { title: "Research Scientists", count: "187,890", description: "Developing new chemical compounds and materials" },
    { title: "Plant Managers", count: "156,789", description: "Managing chemical production facilities" },
    { title: "Safety Directors", count: "123,456", description: "Ensuring chemical safety and regulatory compliance" },
    { title: "Quality Control Managers", count: "198,765", description: "Managing product quality and testing protocols" },
    { title: "Environmental Engineers", count: "145,678", description: "Managing environmental compliance and sustainability" },
    { title: "Laboratory Technicians", count: "345,678", description: "Conducting chemical analysis and testing" },
    { title: "Production Supervisors", count: "267,890", description: "Supervising chemical manufacturing operations" },
    { title: "Technical Sales Directors", count: "178,234", description: "Managing technical sales and customer relationships" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "2.14M+", icon: Users },
    { label: "Chemical Companies", value: "23,700+", icon: Beaker },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "99.1%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Chemical industry employs over 2.14 million professionals nationwide",
    "Green chemistry initiatives reduced environmental impact by 58% industry-wide",
    "Digital chemical manufacturing increased production efficiency by 43%",
    "Specialty chemicals market expanded 230% driving innovation investments",
    "Sustainable feedstock adoption reached 67% among major chemical producers"
  ];

  const chemicalCategories = [
    {
      title: "Petrochemicals",
      description: "Oil and gas-based chemical production",
      count: "587K+",
      color: "bg-red-500",
      professionals: ["Petrochemical Engineers", "Refinery Operators", "Process Technicians", "Quality Analysts"]
    },
    {
      title: "Specialty Chemicals",
      description: "High-performance and custom chemical solutions",
      count: "523K+",
      color: "bg-purple-500",
      professionals: ["Research Chemists", "Product Developers", "Application Engineers", "Technical Specialists"]
    },
    {
      title: "Industrial Chemicals",
      description: "Basic chemicals for industrial applications",
      count: "534K+",
      color: "bg-blue-500",
      professionals: ["Production Managers", "Process Engineers", "Plant Operators", "Maintenance Technicians"]
    },
    {
      title: "Agricultural Chemicals",
      description: "Fertilizers, pesticides, and crop protection",
      count: "496K+",
      color: "bg-green-500",
      professionals: ["Agrochemical Scientists", "Field Technicians", "Regulatory Specialists", "Sales Agronomists"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Chemical Industry Email List - 2.14M+ Verified Contacts | ELP Data"
        description="Access comprehensive chemical industry email database with 2.14M+ verified contacts. Connect with chemical engineers, research scientists, and plant managers."
        keywords="chemical industry email list, chemical engineer contacts, research scientist database, chemical plant managers"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Beaker className="w-4 h-4 mr-2" />
              Chemical Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Chemical Industry
              <span className="block text-purple-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 2.14 million chemical industry professionals including engineers, research scientists, 
              plant managers, and technical specialists across all chemical sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get Chemical Contacts
              </Button>
              <Button size="lg" variant="outline">
                View Sample Data
              </Button>
            </div>
          </div>

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

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Chemical Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chemicalTitles.map((title, index) => (
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
                        onClick={() => window.open(`/contact-us?industry=chemical&role=${encodeURIComponent(title.title)}`, '_blank')}
                      >
                        Get Contacts
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Chemical Industry Segments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {chemicalCategories.map((category, index) => (
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

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Chemical Market Insights
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

          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Get Chemical Industry Contacts</CardTitle>
              <CardDescription>
                Access verified chemical industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific chemical segments or requirements..." />
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Request Chemical Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}