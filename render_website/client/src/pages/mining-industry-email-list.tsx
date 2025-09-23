import { Users, Mountain, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MiningIndustryEmailList() {
  const miningTitles = [
    { title: "Mining Engineers", count: "198,654", description: "Designing and managing mining operations" },
    { title: "Geological Surveyors", count: "134,567", description: "Conducting geological surveys and assessments" },
    { title: "Mine Safety Directors", count: "89,234", description: "Ensuring mining safety compliance and protocols" },
    { title: "Equipment Operators", count: "345,678", description: "Operating heavy mining machinery and equipment" },
    { title: "Environmental Compliance Officers", count: "112,456", description: "Managing environmental regulations and compliance" },
    { title: "Mining Operations Managers", count: "167,890", description: "Overseeing day-to-day mining operations" },
    { title: "Metallurgical Engineers", count: "123,567", description: "Processing and refining extracted materials" },
    { title: "Exploration Geologists", count: "156,789", description: "Identifying new mining sites and reserves" },
    { title: "Mine Maintenance Supervisors", count: "203,456", description: "Managing equipment maintenance and repairs" },
    { title: "Quarry Managers", count: "98,765", description: "Managing quarry operations and production" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.63M+", icon: Users },
    { label: "Mining Operations", value: "18,400+", icon: Mountain },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.4%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Mining industry employs over 1.63 million professionals nationwide",
    "Autonomous mining equipment adoption increased 280% improving safety metrics",
    "Sustainable mining practices implemented by 85% of major operations",
    "Digital mining technologies reduced operational costs by 32% industry-wide",
    "Critical mineral extraction expanded 190% supporting clean energy transition"
  ];

  const miningCategories = [
    {
      title: "Coal Mining",
      description: "Coal extraction and processing operations",
      count: "423K+",
      color: "bg-gray-600",
      professionals: ["Coal Miners", "Mine Foremen", "Safety Inspectors", "Processing Technicians"]
    },
    {
      title: "Metal Mining",
      description: "Precious and base metal extraction",
      count: "387K+",
      color: "bg-yellow-600",
      professionals: ["Metallurgists", "Ore Processors", "Smelter Operators", "Quality Controllers"]
    },
    {
      title: "Stone & Quarrying",
      description: "Stone, sand, and gravel operations",
      count: "456K+",
      color: "bg-stone-600",
      professionals: ["Quarry Operators", "Aggregate Producers", "Crushing Specialists", "Site Managers"]
    },
    {
      title: "Mining Technology",
      description: "Mining equipment and technology solutions",
      count: "367K+",
      color: "bg-blue-600",
      professionals: ["Mining Engineers", "Equipment Technicians", "Automation Specialists", "Software Developers"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Mining Industry Email List - 1.63M+ Verified Contacts | ELP Data"
        description="Access comprehensive mining industry email database with 1.63M+ verified contacts. Connect with mining engineers, geological surveyors, and mining operations professionals."
        keywords="mining industry email list, mining engineer contacts, geological surveyor database, mining operations professionals"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-stone-100 text-stone-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Mountain className="w-4 h-4 mr-2" />
              Mining Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Mining Industry
              <span className="block text-stone-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 1.63 million mining professionals including engineers, geological surveyors, 
              equipment operators, and mining operations specialists across all mining sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-stone-600 hover:bg-stone-700">
                Get Mining Contacts
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
                    <Icon className="w-8 h-8 text-stone-600 mx-auto mb-2" />
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
              Key Mining Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {miningTitles.map((title, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-stone-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=mining&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              Mining Industry Segments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {miningCategories.map((category, index) => (
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
              Mining Market Insights
            </h2>
            <Card className="bg-gradient-to-r from-stone-50 to-slate-50">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {marketInsights.map((insight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-stone-600 mt-2 mr-3 flex-shrink-0"></div>
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
              <CardTitle className="text-2xl text-gray-900">Get Mining Industry Contacts</CardTitle>
              <CardDescription>
                Access verified mining industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific mining segments or requirements..." />
              <Button className="w-full bg-stone-600 hover:bg-stone-700">
                Request Mining Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}