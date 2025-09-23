import { Users, ShoppingBag, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RetailIndustryEmailList() {
  const retailTitles = [
    { title: "Retail Store Managers", count: "876,543", description: "Managing retail store operations and staff" },
    { title: "Merchandise Buyers", count: "234,567", description: "Purchasing products for retail stores" },
    { title: "E-commerce Directors", count: "189,234", description: "Managing online retail operations" },
    { title: "Visual Merchandisers", count: "156,789", description: "Creating attractive product displays" },
    { title: "Retail Operations Directors", count: "123,456", description: "Overseeing multi-store retail operations" },
    { title: "Customer Experience Managers", count: "267,890", description: "Enhancing customer shopping experiences" },
    { title: "Inventory Control Specialists", count: "345,678", description: "Managing retail inventory and stock levels" },
    { title: "Loss Prevention Managers", count: "98,765", description: "Preventing theft and inventory shrinkage" },
    { title: "Retail Technology Directors", count: "134,567", description: "Managing retail technology and POS systems" },
    { title: "Regional Retail Managers", count: "178,234", description: "Managing multiple retail locations" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "2.61M+", icon: Users },
    { label: "Retail Companies", value: "345,800+", icon: ShoppingBag },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "99.0%", icon: TrendingUp }
  ];

  return (
    <>
      <SEOHead 
        title="Retail Industry Email List - 2.61M+ Verified Contacts | ELP Data"
        description="Access comprehensive retail industry email database with 2.61M+ verified contacts. Connect with store managers, buyers, e-commerce directors, and retail professionals."
        keywords="retail industry email list, store manager contacts, merchandise buyer database, retail operations professionals"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-rose-100 text-rose-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Retail Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Retail Industry
              <span className="block text-rose-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 2.61 million retail professionals including store managers, 
              merchandise buyers, e-commerce directors, and retail operations specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                Get Retail Contacts
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
                    <Icon className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Retail Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {retailTitles.map((title, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-rose-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=retail&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              <CardTitle className="text-2xl text-gray-900">Get Retail Industry Contacts</CardTitle>
              <CardDescription>
                Access verified retail industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific retail segments or requirements..." />
              <Button className="w-full bg-rose-600 hover:bg-rose-700">
                Request Retail Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}