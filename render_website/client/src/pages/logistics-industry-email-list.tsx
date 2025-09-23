import { Users, Truck, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LogisticsIndustryEmailList() {
  const logisticsTitles = [
    { title: "Supply Chain Directors", count: "287,654", description: "Managing end-to-end supply chain operations" },
    { title: "Warehouse Managers", count: "456,789", description: "Overseeing warehouse operations and inventory" },
    { title: "Transportation Coordinators", count: "234,567", description: "Coordinating freight and shipping operations" },
    { title: "Logistics Analysts", count: "167,890", description: "Analyzing logistics data and optimizing operations" },
    { title: "Distribution Center Directors", count: "123,456", description: "Managing distribution and fulfillment centers" },
    { title: "Fleet Managers", count: "198,765", description: "Managing vehicle fleets and transportation assets" },
    { title: "Procurement Specialists", count: "345,678", description: "Managing vendor relationships and purchasing" },
    { title: "Freight Brokers", count: "189,234", description: "Facilitating freight transportation and shipping" },
    { title: "Inventory Control Managers", count: "156,789", description: "Managing inventory levels and stock optimization" },
    { title: "Last Mile Delivery Directors", count: "112,456", description: "Managing final delivery operations to customers" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "2.27M+", icon: Users },
    { label: "Logistics Companies", value: "67,800+", icon: Truck },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "99.2%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Logistics industry employs over 2.27 million professionals nationwide",
    "E-commerce logistics demand increased 340% driving infrastructure expansion",
    "Autonomous delivery vehicles deployed by 78% of major logistics providers",
    "Green logistics initiatives reduced carbon emissions by 45% industry-wide",
    "AI-powered route optimization improved delivery efficiency by 52%"
  ];

  const logisticsCategories = [
    {
      title: "Freight & Shipping",
      description: "Freight transportation and cargo management",
      count: "623K+",
      color: "bg-blue-500",
      professionals: ["Freight Forwarders", "Shipping Coordinators", "Cargo Handlers", "Customs Brokers"]
    },
    {
      title: "Warehousing & Distribution",
      description: "Warehouse operations and distribution centers",
      count: "567K+",
      color: "bg-green-500",
      professionals: ["Warehouse Supervisors", "Distribution Managers", "Inventory Specialists", "Order Fulfillment"]
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain coordination",
      count: "534K+",
      color: "bg-purple-500",
      professionals: ["Supply Chain Planners", "Demand Forecasters", "Vendor Managers", "Operations Analysts"]
    },
    {
      title: "Last Mile Delivery",
      description: "Final delivery and customer fulfillment",
      count: "546K+",
      color: "bg-orange-500",
      professionals: ["Delivery Drivers", "Route Planners", "Customer Service", "Delivery Coordinators"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Logistics Industry Email List - 2.27M+ Verified Contacts | ELP Data"
        description="Access comprehensive logistics industry email database with 2.27M+ verified contacts. Connect with supply chain directors, warehouse managers, and transportation professionals."
        keywords="logistics industry email list, supply chain director contacts, warehouse manager database, transportation professionals"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Truck className="w-4 h-4 mr-2" />
              Logistics Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Logistics Industry
              <span className="block text-blue-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 2.27 million logistics professionals including supply chain directors, 
              warehouse managers, transportation coordinators, and distribution specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Logistics Contacts
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
                    <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Logistics Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {logisticsTitles.map((title, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=logistics&role=${encodeURIComponent(title.title)}`, '_blank')}
                      >
                        Get Contacts
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Logistics Industry Segments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {logisticsCategories.map((category, index) => (
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

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Logistics Market Insights
            </h2>
            <Card className="bg-gradient-to-r from-blue-50 to-slate-50">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {marketInsights.map((insight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{insight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Get Logistics Industry Contacts</CardTitle>
              <CardDescription>
                Access verified logistics industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific logistics segments or requirements..." />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Request Logistics Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}