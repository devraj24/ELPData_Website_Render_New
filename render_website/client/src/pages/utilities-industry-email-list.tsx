import { Users, Zap, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function UtilitiesIndustryEmailList() {
  const utilitiesTitles = [
    { title: "Utility Directors", count: "189,234", description: "Managing utility operations and infrastructure" },
    { title: "Power Plant Managers", count: "134,567", description: "Operating electrical generation facilities" },
    { title: "Grid Operations Managers", count: "123,456", description: "Managing electrical grid operations" },
    { title: "Water Treatment Directors", count: "167,890", description: "Managing water treatment and distribution" },
    { title: "Gas Distribution Managers", count: "145,678", description: "Managing natural gas distribution systems" },
    { title: "Renewable Energy Directors", count: "178,234", description: "Managing renewable energy projects" },
    { title: "Utility Engineers", count: "234,567", description: "Designing and maintaining utility infrastructure" },
    { title: "Customer Service Directors", count: "156,789", description: "Managing utility customer relations" },
    { title: "Regulatory Affairs Managers", count: "112,345", description: "Managing utility regulatory compliance" },
    { title: "Energy Efficiency Coordinators", count: "98,765", description: "Managing energy conservation programs" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.64M+", icon: Users },
    { label: "Utility Companies", value: "23,400+", icon: Zap },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "99.2%", icon: TrendingUp }
  ];

  return (
    <>
      <SEOHead 
        title="Utilities Industry Email List - 1.64M+ Verified Contacts | ELP Data"
        description="Access comprehensive utilities industry email database with 1.64M+ verified contacts. Connect with utility directors, power plant managers, and energy professionals."
        keywords="utilities industry email list, utility director contacts, power plant manager database, energy professional contacts"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Utilities Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Utilities Industry
              <span className="block text-yellow-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 1.64 million utilities professionals including utility directors, 
              power plant managers, grid operators, and renewable energy specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                Get Utilities Contacts
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
                    <Icon className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Utilities Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {utilitiesTitles.map((title, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-yellow-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=utilities&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              <CardTitle className="text-2xl text-gray-900">Get Utilities Industry Contacts</CardTitle>
              <CardDescription>
                Access verified utilities industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific utilities sectors or requirements..." />
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                Request Utilities Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}