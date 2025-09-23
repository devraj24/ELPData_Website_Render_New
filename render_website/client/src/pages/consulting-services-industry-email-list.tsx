import { Users, Users2, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ConsultingServicesIndustryEmailList() {
  const consultingTitles = [
    { title: "Management Consultants", count: "298,765", description: "Providing strategic business consulting services" },
    { title: "IT Consultants", count: "234,567", description: "Offering technology consulting and implementation" },
    { title: "Financial Consultants", count: "189,234", description: "Providing financial advisory and planning services" },
    { title: "HR Consultants", count: "156,789", description: "Offering human resources consulting and solutions" },
    { title: "Strategy Directors", count: "123,456", description: "Leading strategic planning and consulting initiatives" },
    { title: "Operations Consultants", count: "167,890", description: "Optimizing business operations and processes" },
    { title: "Change Management Specialists", count: "134,567", description: "Managing organizational change and transformation" },
    { title: "Digital Transformation Consultants", count: "198,765", description: "Leading digital transformation initiatives" },
    { title: "Business Analysts", count: "345,678", description: "Analyzing business processes and requirements" },
    { title: "Implementation Specialists", count: "178,234", description: "Managing solution implementation and deployment" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "2.03M+", icon: Users },
    { label: "Consulting Firms", value: "45,700+", icon: Users2 },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "99.2%", icon: TrendingUp }
  ];

  return (
    <>
      <SEOHead 
        title="Consulting Services Industry Email List - 2.03M+ Verified Contacts | ELP Data"
        description="Access comprehensive consulting services industry email database with 2.03M+ verified contacts. Connect with management consultants, IT consultants, and strategy directors."
        keywords="consulting services industry email list, management consultant contacts, IT consultant database, strategy director professionals"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Users2 className="w-4 h-4 mr-2" />
              Consulting Services Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Consulting Services Industry
              <span className="block text-indigo-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 2.03 million consulting professionals including management consultants, 
              IT specialists, strategy directors, and implementation experts across all sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Get Consulting Services Contacts
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
                    <Icon className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Consulting Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {consultingTitles.map((title, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-indigo-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=consulting-services&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              <CardTitle className="text-2xl text-gray-900">Get Consulting Services Contacts</CardTitle>
              <CardDescription>
                Access verified consulting services industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific consulting areas or requirements..." />
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                Request Consulting Services Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}