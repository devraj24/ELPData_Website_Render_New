import { Users, Building2, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GovernmentPublicSectorEmailList() {
  const governmentTitles = [
    { title: "City Managers", count: "234,567", description: "Managing municipal government operations" },
    { title: "Department Directors", count: "456,789", description: "Leading government departments and agencies" },
    { title: "Public Works Directors", count: "189,234", description: "Managing infrastructure and public utilities" },
    { title: "Planning Commissioners", count: "134,567", description: "Overseeing urban planning and development" },
    { title: "Emergency Management Directors", count: "98,765", description: "Managing emergency response and preparedness" },
    { title: "IT Directors", count: "167,890", description: "Managing government technology systems" },
    { title: "Budget Directors", count: "123,456", description: "Managing government budgets and finances" },
    { title: "Human Resources Directors", count: "178,234", description: "Managing government personnel and benefits" },
    { title: "Procurement Officers", count: "145,678", description: "Managing government purchasing and contracts" },
    { title: "Public Information Officers", count: "112,345", description: "Managing government communications and PR" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.84M+", icon: Users },
    { label: "Government Agencies", value: "87,500+", icon: Building2 },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "99.5%", icon: TrendingUp }
  ];

  return (
    <>
      <SEOHead 
        title="Government & Public Sector Email List - 1.84M+ Verified Contacts | ELP Data"
        description="Access comprehensive government & public sector email database with 1.84M+ verified contacts. Connect with city managers, department directors, and public officials."
        keywords="government public sector email list, city manager contacts, department director database, public official professionals"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-slate-100 text-slate-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              Government & Public Sector Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Government & Public Sector
              <span className="block text-slate-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 1.84 million government professionals including city managers, 
              department directors, public works officials, and procurement specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-600 hover:bg-slate-700">
                Get Government Contacts
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
                    <Icon className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Government Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {governmentTitles.map((title, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=government-public-sector&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              <CardTitle className="text-2xl text-gray-900">Get Government & Public Sector Contacts</CardTitle>
              <CardDescription>
                Access verified government & public sector email lists for your marketing campaigns
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
              <Textarea placeholder="Specific government sectors or requirements..." />
              <Button className="w-full bg-slate-600 hover:bg-slate-700">
                Request Government Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}