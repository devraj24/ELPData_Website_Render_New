import { Users, Heart, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NonprofitIndustryEmailList() {
  const nonprofitTitles = [
    { title: "Executive Directors", count: "234,567", description: "Leading nonprofit organizations and missions" },
    { title: "Development Directors", count: "189,234", description: "Managing fundraising and donor relations" },
    { title: "Program Directors", count: "156,789", description: "Overseeing nonprofit programs and services" },
    { title: "Grant Writers", count: "134,567", description: "Securing funding through grant applications" },
    { title: "Volunteer Coordinators", count: "178,234", description: "Managing volunteer programs and engagement" },
    { title: "Communications Directors", count: "123,456", description: "Managing nonprofit marketing and outreach" },
    { title: "Board Members", count: "345,678", description: "Governing nonprofit organizations" },
    { title: "Social Workers", count: "267,890", description: "Providing direct services to communities" },
    { title: "Event Coordinators", count: "145,678", description: "Planning fundraising and awareness events" },
    { title: "Finance Directors", count: "112,345", description: "Managing nonprofit finances and budgets" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.89M+", icon: Users },
    { label: "Nonprofit Organizations", value: "156,700+", icon: Heart },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.7%", icon: TrendingUp }
  ];

  return (
    <>
      <SEOHead 
        title="Nonprofit Industry Email List - 1.89M+ Verified Contacts | ELP Data"
        description="Access comprehensive nonprofit industry email database with 1.89M+ verified contacts. Connect with executive directors, development directors, and nonprofit professionals."
        keywords="nonprofit industry email list, executive director contacts, development director database, grant writer professionals"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-100 text-red-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Nonprofit Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Nonprofit Industry
              <span className="block text-red-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 1.89 million nonprofit professionals including executive directors, 
              development directors, program managers, and social impact leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Get Nonprofit Contacts
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
                    <Icon className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Nonprofit Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nonprofitTitles.map((title, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=nonprofit&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              <CardTitle className="text-2xl text-gray-900">Get Nonprofit Industry Contacts</CardTitle>
              <CardDescription>
                Access verified nonprofit industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific nonprofit sectors or requirements..." />
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Request Nonprofit Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}