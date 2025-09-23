import { Users, Shield, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CybersecurityIndustryEmailList() {
  const cybersecurityTitles = [
    { title: "Chief Information Security Officers", count: "89,234", description: "Leading enterprise cybersecurity strategy" },
    { title: "Security Analysts", count: "345,678", description: "Monitoring and analyzing security threats" },
    { title: "Penetration Testers", count: "156,789", description: "Testing system vulnerabilities and security" },
    { title: "Security Engineers", count: "234,567", description: "Designing and implementing security systems" },
    { title: "Incident Response Managers", count: "123,456", description: "Managing cybersecurity incident response" },
    { title: "Compliance Officers", count: "178,234", description: "Ensuring cybersecurity regulatory compliance" },
    { title: "Security Consultants", count: "198,765", description: "Providing cybersecurity advisory services" },
    { title: "Forensics Specialists", count: "112,345", description: "Investigating cyber crimes and breaches" },
    { title: "Risk Assessment Analysts", count: "167,890", description: "Analyzing cybersecurity risks and threats" },
    { title: "Security Operations Center Directors", count: "98,765", description: "Managing 24/7 security operations" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.70M+", icon: Users },
    { label: "Security Companies", value: "28,900+", icon: Shield },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "99.3%", icon: TrendingUp }
  ];

  return (
    <>
      <SEOHead 
        title="Cybersecurity Industry Email List - 1.70M+ Verified Contacts | ELP Data"
        description="Access comprehensive cybersecurity industry email database with 1.70M+ verified contacts. Connect with CISOs, security analysts, and cybersecurity professionals."
        keywords="cybersecurity industry email list, CISO contacts, security analyst database, penetration tester professionals"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-100 text-red-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Cybersecurity Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Cybersecurity Industry
              <span className="block text-red-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 1.70 million cybersecurity professionals including CISOs, security analysts, 
              penetration testers, and cybersecurity specialists across all sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Get Cybersecurity Contacts
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
              Key Cybersecurity Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cybersecurityTitles.map((title, index) => (
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
                        onClick={() => window.open(`/contact-us?industry=cybersecurity&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              <CardTitle className="text-2xl text-gray-900">Get Cybersecurity Contacts</CardTitle>
              <CardDescription>
                Access verified cybersecurity industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific cybersecurity segments or requirements..." />
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Request Cybersecurity Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}