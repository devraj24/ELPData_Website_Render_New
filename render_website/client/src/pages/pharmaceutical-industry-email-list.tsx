import { Users, Pill, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PharmaceuticalIndustryEmailList() {
  const pharmaTitles = [
    { title: "Research Scientists", count: "387,654", description: "Leading pharmaceutical research and development" },
    { title: "Clinical Research Associates", count: "234,567", description: "Managing clinical trials and studies" },
    { title: "Regulatory Affairs Directors", count: "156,789", description: "Ensuring pharmaceutical compliance" },
    { title: "Quality Assurance Managers", count: "198,765", description: "Maintaining pharmaceutical quality standards" },
    { title: "Manufacturing Directors", count: "167,890", description: "Managing pharmaceutical production" },
    { title: "Medical Affairs Directors", count: "145,678", description: "Leading medical and scientific communications" },
    { title: "Drug Safety Officers", count: "123,456", description: "Monitoring pharmaceutical safety profiles" },
    { title: "Business Development Directors", count: "178,234", description: "Managing pharmaceutical partnerships" },
    { title: "Market Access Managers", count: "134,567", description: "Ensuring pharmaceutical market access" },
    { title: "Biostatisticians", count: "89,234", description: "Analyzing pharmaceutical clinical data" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "2.17M+", icon: Users },
    { label: "Pharmaceutical Companies", value: "12,300+", icon: Pill },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "99.4%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Pharmaceutical industry employs over 2.17 million professionals nationwide",
    "Biopharmaceutical R&D spending reached $245 billion with 89% focused on rare diseases",
    "Gene therapy approvals increased 420% creating new manufacturing requirements",
    "AI-driven drug discovery reduced development timelines by 35% on average",
    "Personalized medicine market grew 78% driving precision manufacturing needs"
  ];

  const pharmaCategories = [
    {
      title: "Research & Development",
      description: "Drug discovery and clinical development",
      count: "623K+",
      color: "bg-blue-500",
      professionals: ["Research Scientists", "Clinical Researchers", "Biostatisticians", "Regulatory Specialists"]
    },
    {
      title: "Manufacturing & Production",
      description: "Pharmaceutical manufacturing and quality control",
      count: "487K+",
      color: "bg-green-500",
      professionals: ["Production Managers", "Quality Controllers", "Process Engineers", "Validation Specialists"]
    },
    {
      title: "Commercial & Marketing",
      description: "Pharmaceutical sales and marketing operations",
      count: "534K+",
      color: "bg-purple-500",
      professionals: ["Sales Representatives", "Marketing Managers", "Medical Science Liaisons", "Market Access"]
    },
    {
      title: "Regulatory & Compliance",
      description: "Regulatory affairs and compliance management",
      count: "526K+",
      color: "bg-orange-500",
      professionals: ["Regulatory Directors", "Compliance Officers", "Quality Assurance", "Drug Safety"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Pharmaceutical Industry Email List - 2.17M+ Verified Contacts | ELP Data"
        description="Access comprehensive pharmaceutical industry email database with 2.17M+ verified contacts. Connect with research scientists, regulatory professionals, and pharma executives."
        keywords="pharmaceutical industry email list, pharma scientist contacts, drug development professionals, biotech industry database"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Pill className="w-4 h-4 mr-2" />
              Pharmaceutical Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pharmaceutical Industry
              <span className="block text-green-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 2.17 million pharmaceutical professionals including research scientists, 
              regulatory experts, manufacturing specialists, and biotech executives across all pharma sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Pharmaceutical Contacts
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
              Key Pharmaceutical Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pharmaTitles.map((title, index) => (
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
                        onClick={() => window.open(`/contact-us?industry=pharmaceutical&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              Pharmaceutical Industry Segments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pharmaCategories.map((category, index) => (
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
              Pharmaceutical Market Insights
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
              <CardTitle className="text-2xl text-gray-900">Get Pharmaceutical Contacts</CardTitle>
              <CardDescription>
                Access verified pharmaceutical industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific pharmaceutical segments or requirements..." />
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Request Pharmaceutical Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}