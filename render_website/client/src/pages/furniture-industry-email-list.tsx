import { Users, Sofa, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FurnitureIndustryEmailList() {
  const furnitureTitles = [
    { title: "Furniture Designers", count: "198,765", description: "Creating furniture designs and concepts" },
    { title: "Production Managers", count: "234,567", description: "Managing furniture manufacturing operations" },
    { title: "Retail Buyers", count: "156,789", description: "Purchasing furniture for retail stores" },
    { title: "Sales Directors", count: "189,234", description: "Managing furniture sales and distribution" },
    { title: "Quality Control Specialists", count: "145,678", description: "Ensuring furniture quality and standards" },
    { title: "Supply Chain Managers", count: "178,234", description: "Managing furniture supply chain operations" },
    { title: "Interior Designers", count: "267,890", description: "Designing interior spaces and selecting furniture" },
    { title: "Showroom Managers", count: "123,456", description: "Managing furniture showrooms and displays" },
    { title: "Product Development Directors", count: "134,567", description: "Developing new furniture products and lines" },
    { title: "Sustainability Coordinators", count: "112,345", description: "Managing sustainable furniture practices" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.64M+", icon: Users },
    { label: "Furniture Companies", value: "45,200+", icon: Sofa },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.5%", icon: TrendingUp }
  ];

  return (
    <>
      <SEOHead 
        title="Furniture Industry Email List - 1.64M+ Verified Contacts | ELP Data"
        description="Access comprehensive furniture industry email database with 1.64M+ verified contacts. Connect with furniture designers, production managers, and retail buyers."
        keywords="furniture industry email list, furniture designer contacts, production manager database, retail buyer professionals"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Sofa className="w-4 h-4 mr-2" />
              Furniture Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Furniture Industry
              <span className="block text-amber-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 1.64 million furniture professionals including designers, production managers, 
              retail buyers, and interior design specialists across all furniture sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Get Furniture Contacts
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
                    <Icon className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Furniture Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {furnitureTitles.map((title, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=furniture&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              <CardTitle className="text-2xl text-gray-900">Get Furniture Industry Contacts</CardTitle>
              <CardDescription>
                Access verified furniture industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific furniture segments or requirements..." />
              <Button className="w-full bg-amber-600 hover:bg-amber-700">
                Request Furniture Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}