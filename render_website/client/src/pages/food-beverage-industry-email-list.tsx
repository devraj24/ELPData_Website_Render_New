import { Users, Coffee, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FoodBeverageIndustryEmailList() {
  const foodTitles = [
    { title: "Food Production Managers", count: "387,654", description: "Managing food manufacturing operations" },
    { title: "Quality Assurance Directors", count: "234,567", description: "Ensuring food safety and quality standards" },
    { title: "R&D Food Scientists", count: "198,765", description: "Developing new food products and formulations" },
    { title: "Restaurant Chain Executives", count: "156,789", description: "Managing restaurant operations and franchises" },
    { title: "Food Safety Inspectors", count: "145,678", description: "Ensuring regulatory compliance and safety" },
    { title: "Beverage Production Directors", count: "123,456", description: "Managing beverage manufacturing processes" },
    { title: "Supply Chain Managers", count: "267,890", description: "Managing food supply chain and logistics" },
    { title: "Packaging Engineers", count: "178,234", description: "Designing food packaging and preservation systems" },
    { title: "Food Service Directors", count: "345,678", description: "Managing institutional food service operations" },
    { title: "Nutrition Specialists", count: "189,234", description: "Developing nutritional products and programs" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "2.23M+", icon: Users },
    { label: "Food Companies", value: "89,400+", icon: Coffee },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "99.0%", icon: TrendingUp }
  ];

  return (
    <>
      <SEOHead 
        title="Food & Beverage Industry Email List - 2.23M+ Verified Contacts | ELP Data"
        description="Access comprehensive food & beverage industry email database with 2.23M+ verified contacts. Connect with food production managers, R&D scientists, and restaurant executives."
        keywords="food beverage industry email list, food production manager contacts, restaurant executive database, food scientist professionals"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Coffee className="w-4 h-4 mr-2" />
              Food & Beverage Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Food & Beverage Industry
              <span className="block text-orange-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 2.23 million food & beverage professionals including production managers, 
              food scientists, restaurant executives, and supply chain specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Get Food & Beverage Contacts
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
                    <Icon className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Food & Beverage Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodTitles.map((title, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=food-beverage&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              <CardTitle className="text-2xl text-gray-900">Get Food & Beverage Contacts</CardTitle>
              <CardDescription>
                Access verified food & beverage industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific food & beverage segments or requirements..." />
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                Request Food & Beverage Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}