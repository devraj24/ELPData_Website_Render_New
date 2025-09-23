import { Users, MapPin, TrendingUp, Hotel } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HospitalityTourismIndustryEmailList() {
  const hospitalityTitles = [
    { title: "Hotel General Managers", count: "234,567", description: "Managing hotel operations and guest services" },
    { title: "Restaurant Managers", count: "456,789", description: "Operating restaurant and food service establishments" },
    { title: "Travel Agents", count: "189,234", description: "Planning and booking travel arrangements" },
    { title: "Event Coordinators", count: "178,234", description: "Planning conferences, meetings, and special events" },
    { title: "Resort Directors", count: "123,456", description: "Managing resort properties and amenities" },
    { title: "Tourism Board Directors", count: "87,654", description: "Promoting destinations and tourism development" },
    { title: "Cruise Ship Officers", count: "67,890", description: "Managing cruise operations and passenger services" },
    { title: "Convention Center Managers", count: "145,678", description: "Operating convention and exhibition facilities" },
    { title: "Hospitality Technology Directors", count: "112,345", description: "Managing hotel and restaurant technology systems" },
    { title: "Guest Services Managers", count: "298,765", description: "Ensuring exceptional guest experiences" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.89M+", icon: Users },
    { label: "Hospitality Companies", value: "156,300+", icon: Hotel },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.9%", icon: TrendingUp }
  ];

  return (
    <>
      <SEOHead 
        title="Hospitality & Tourism Industry Email List - 1.89M+ Verified Contacts | ELP Data"
        description="Access comprehensive hospitality & tourism industry email database with 1.89M+ verified contacts. Connect with hotel managers, travel agents, and tourism professionals."
        keywords="hospitality tourism industry email list, hotel manager contacts, travel agent database, restaurant manager professionals"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-cyan-100 text-cyan-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Hotel className="w-4 h-4 mr-2" />
              Hospitality & Tourism Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hospitality & Tourism
              <span className="block text-cyan-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 1.89 million hospitality & tourism professionals including hotel managers, 
              travel agents, restaurant operators, and event coordinators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                Get Hospitality & Tourism Contacts
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
                    <Icon className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Hospitality & Tourism Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hospitalityTitles.map((title, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-cyan-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=hospitality-tourism&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              <CardTitle className="text-2xl text-gray-900">Get Hospitality & Tourism Contacts</CardTitle>
              <CardDescription>
                Access verified hospitality & tourism industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific hospitality & tourism segments or requirements..." />
              <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                Request Hospitality & Tourism Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}