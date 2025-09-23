import { Users, Leaf, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EnvironmentalServicesIndustryEmailList() {
  const environmentalTitles = [
    { title: "Environmental Engineers", count: "234,567", description: "Designing environmental protection systems" },
    { title: "Sustainability Directors", count: "189,234", description: "Leading corporate sustainability initiatives" },
    { title: "Waste Management Directors", count: "156,789", description: "Managing waste collection and recycling" },
    { title: "Environmental Consultants", count: "178,234", description: "Providing environmental advisory services" },
    { title: "Water Quality Managers", count: "134,567", description: "Managing water treatment and quality" },
    { title: "Air Quality Specialists", count: "123,456", description: "Monitoring and improving air quality" },
    { title: "Remediation Specialists", count: "145,678", description: "Managing environmental cleanup projects" },
    { title: "Renewable Energy Coordinators", count: "167,890", description: "Managing renewable energy projects" },
    { title: "Compliance Officers", count: "112,345", description: "Ensuring environmental regulatory compliance" },
    { title: "Environmental Scientists", count: "198,765", description: "Conducting environmental research and analysis" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.64M+", icon: Users },
    { label: "Environmental Companies", value: "34,200+", icon: Leaf },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.8%", icon: TrendingUp }
  ];

  return (
    <>
      <SEOHead 
        title="Environmental Services Industry Email List - 1.64M+ Verified Contacts | ELP Data"
        description="Access comprehensive environmental services email database with 1.64M+ verified contacts. Connect with environmental engineers, sustainability directors, and environmental professionals."
        keywords="environmental services industry email list, environmental engineer contacts, sustainability director database, environmental consultant professionals"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              Environmental Services Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Environmental Services
              <span className="block text-green-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 1.64 million environmental professionals including engineers, 
              sustainability directors, waste management specialists, and environmental consultants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Environmental Contacts
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
                    <Icon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Environmental Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {environmentalTitles.map((title, index) => (
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
                        onClick={() => window.open(`/contact-us?industry=environmental-services&role=${encodeURIComponent(title.title)}`, '_blank')}
                      >
                        Get Contacts
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Get Environmental Services Contacts</CardTitle>
              <CardDescription>
                Access verified environmental services email lists for your marketing campaigns
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
              <Textarea placeholder="Specific environmental sectors or requirements..." />
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Request Environmental Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}