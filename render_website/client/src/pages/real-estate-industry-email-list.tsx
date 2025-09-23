import { Users, Home, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RealEstateIndustryEmailList() {
  const realEstateTitles = [
    { title: "Real Estate Agents", count: "1,234,567", description: "Licensed real estate sales professionals" },
    { title: "Real Estate Brokers", count: "345,678", description: "Managing real estate brokerages and agencies" },
    { title: "Property Managers", count: "456,789", description: "Managing residential and commercial properties" },
    { title: "Real Estate Developers", count: "123,456", description: "Developing new real estate projects" },
    { title: "Property Appraisers", count: "189,234", description: "Conducting property valuations and assessments" },
    { title: "Real Estate Investors", count: "267,890", description: "Investing in residential and commercial properties" },
    { title: "Mortgage Loan Officers", count: "234,567", description: "Processing real estate financing and loans" },
    { title: "Commercial Real Estate Specialists", count: "178,234", description: "Handling commercial property transactions" },
    { title: "Real Estate Technology Directors", count: "89,765", description: "Managing proptech and real estate technology" },
    { title: "Property Maintenance Coordinators", count: "345,678", description: "Coordinating property maintenance and repairs" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "3.47M+", icon: Users },
    { label: "Real Estate Companies", value: "234,500+", icon: Home },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "99.3%", icon: TrendingUp }
  ];

  return (
    <>
      <SEOHead 
        title="Real Estate Industry Email List - 3.47M+ Verified Contacts | ELP Data"
        description="Access comprehensive real estate industry email database with 3.47M+ verified contacts. Connect with real estate agents, brokers, property managers, and developers."
        keywords="real estate industry email list, real estate agent contacts, property manager database, real estate broker professionals"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Home className="w-4 h-4 mr-2" />
              Real Estate Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Real Estate Industry
              <span className="block text-emerald-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 3.47 million real estate professionals including agents, brokers, 
              property managers, developers, and real estate technology specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Get Real Estate Contacts
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
                    <Icon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Real Estate Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {realEstateTitles.map((title, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-emerald-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=real-estate&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              <CardTitle className="text-2xl text-gray-900">Get Real Estate Contacts</CardTitle>
              <CardDescription>
                Access verified real estate industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific real estate segments or requirements..." />
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Request Real Estate Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}