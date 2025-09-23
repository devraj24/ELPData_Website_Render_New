import { Users, Trophy, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SportsRecreationIndustryEmailList() {
  const sportsTitles = [
    { title: "Athletic Directors", count: "156,789", description: "Managing sports programs and athletic departments" },
    { title: "Fitness Center Managers", count: "234,567", description: "Operating fitness and recreation facilities" },
    { title: "Sports Equipment Buyers", count: "189,234", description: "Purchasing sports and recreation equipment" },
    { title: "Recreation Program Directors", count: "167,890", description: "Managing community recreation programs" },
    { title: "Sports Marketing Directors", count: "145,678", description: "Marketing sports events and organizations" },
    { title: "Facility Operations Managers", count: "198,765", description: "Managing sports venues and facilities" },
    { title: "Youth Sports Coordinators", count: "178,234", description: "Organizing youth sports programs and leagues" },
    { title: "Sports Medicine Professionals", count: "123,456", description: "Providing medical support for athletes" },
    { title: "Event Coordinators", count: "212,345", description: "Planning and executing sports events" },
    { title: "Equipment Sales Representatives", count: "134,567", description: "Selling sports and fitness equipment" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.74M+", icon: Users },
    { label: "Sports Organizations", value: "67,300+", icon: Trophy },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.6%", icon: TrendingUp }
  ];

  return (
    <>
      <SEOHead 
        title="Sports & Recreation Industry Email List - 1.74M+ Verified Contacts | ELP Data"
        description="Access comprehensive sports & recreation industry email database with 1.74M+ verified contacts. Connect with athletic directors, fitness managers, and sports professionals."
        keywords="sports recreation industry email list, athletic director contacts, fitness manager database, sports equipment buyer professionals"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Trophy className="w-4 h-4 mr-2" />
              Sports & Recreation Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Sports & Recreation Industry
              <span className="block text-green-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 1.74 million sports & recreation professionals including athletic directors, 
              fitness managers, equipment buyers, and recreation specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Sports & Recreation Contacts
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
              Key Sports & Recreation Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sportsTitles.map((title, index) => (
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
                        onClick={() => window.open(`/contact-us?industry=sports-recreation&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              <CardTitle className="text-2xl text-gray-900">Get Sports & Recreation Contacts</CardTitle>
              <CardDescription>
                Access verified sports & recreation industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific sports & recreation segments or requirements..." />
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Request Sports & Recreation Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}