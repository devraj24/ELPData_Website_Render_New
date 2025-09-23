import { Users, Shield, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function InsuranceIndustryEmailList() {
  const insuranceTitles = [
    { title: "Insurance Agents", count: "387,654", description: "Licensed insurance sales professionals" },
    { title: "Claims Adjusters", count: "198,765", description: "Investigating and processing insurance claims" },
    { title: "Underwriters", count: "156,789", description: "Evaluating and pricing insurance risks" },
    { title: "Insurance Brokers", count: "234,567", description: "Independent insurance intermediaries" },
    { title: "Risk Managers", count: "123,456", description: "Managing organizational risk exposure" },
    { title: "Actuaries", count: "89,234", description: "Analyzing statistical data and risk probability" },
    { title: "Claims Managers", count: "134,567", description: "Overseeing claims processing operations" },
    { title: "Insurance Directors", count: "98,765", description: "Leading insurance company operations" },
    { title: "Product Managers", count: "76,543", description: "Developing and managing insurance products" },
    { title: "Compliance Officers", count: "65,432", description: "Ensuring regulatory compliance" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "2.67M+", icon: Users },
    { label: "Insurance Companies", value: "34,500+", icon: Shield },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.5%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Insurance industry employs over 2.67 million professionals nationwide",
    "Digital transformation initiatives adopted by 89% of insurers",
    "AI-powered claims processing reduced processing time by 60%",
    "Cyber insurance market grew 320% in the past 3 years",
    "Insurtech startups received $15.8B in funding last year"
  ];

  const insuranceCategories = [
    {
      title: "Life & Health Insurance",
      description: "Life, health, and disability insurance products",
      count: "987K+",
      color: "bg-green-500",
      professionals: ["Life Insurance Agents", "Health Underwriters", "Benefits Specialists", "Claims Processors"]
    },
    {
      title: "Property & Casualty",
      description: "Auto, home, and commercial property insurance",
      count: "823K+",
      color: "bg-blue-500",
      professionals: ["P&C Agents", "Auto Claims Adjusters", "Property Underwriters", "Commercial Lines Specialists"]
    },
    {
      title: "Commercial Insurance",
      description: "Business and commercial risk coverage",
      count: "567K+",
      color: "bg-purple-500",
      professionals: ["Commercial Brokers", "Risk Analysts", "Commercial Underwriters", "Account Managers"]
    },
    {
      title: "Specialty Insurance",
      description: "Specialty lines and niche insurance products",
      count: "294K+",
      color: "bg-orange-500",
      professionals: ["Specialty Underwriters", "Reinsurance Specialists", "Marine Insurance Experts", "Aviation Underwriters"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Insurance Industry Email List - 2.67M+ Verified Contacts | ELP Data"
        description="Access comprehensive insurance industry email database with 2.67M+ verified contacts. Connect with insurance agents, underwriters, claims professionals, and brokers."
        keywords="insurance industry email list, insurance agent contacts, underwriter database, insurance broker professionals"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Insurance Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Insurance Industry
              <span className="block text-green-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 2.67 million insurance professionals including agents, underwriters, 
              claims adjusters, brokers, and risk management specialists across all insurance sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Insurance Contacts
              </Button>
              <Button size="lg" variant="outline">
                View Sample Data
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
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

          {/* Professional Titles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Insurance Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insuranceTitles.map((title, index) => (
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
                        onClick={() => window.open(`/contact-us?industry=insurance&role=${encodeURIComponent(title.title)}`, '_blank')}
                      >
                        Get Contacts
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Industry Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Insurance Industry Segments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {insuranceCategories.map((category, index) => (
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

          {/* Market Insights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Insurance Market Insights
            </h2>
            <Card className="bg-gradient-to-r from-green-50 to-slate-50">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {marketInsights.map((insight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{insight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Get Insurance Industry Contacts</CardTitle>
              <CardDescription>
                Access verified insurance industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific insurance segments or requirements..." />
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Request Insurance Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}