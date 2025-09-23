import { Users, Building2, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BankingIndustryEmailList() {
  const bankingTitles = [
    { title: "Bank Presidents", count: "67,890", description: "Leading banking institutions and operations" },
    { title: "Commercial Loan Officers", count: "234,567", description: "Managing commercial lending portfolios" },
    { title: "Branch Managers", count: "189,456", description: "Operating bank branch locations" },
    { title: "Investment Advisors", count: "156,789", description: "Providing investment and wealth management services" },
    { title: "Mortgage Brokers", count: "298,765", description: "Facilitating residential and commercial mortgages" },
    { title: "Credit Analysts", count: "123,456", description: "Analyzing creditworthiness and loan applications" },
    { title: "Treasury Directors", count: "89,234", description: "Managing institutional treasury operations" },
    { title: "Risk Management Officers", count: "134,567", description: "Overseeing banking risk assessment and mitigation" },
    { title: "Compliance Directors", count: "98,765", description: "Ensuring regulatory compliance and governance" },
    { title: "Digital Banking Managers", count: "76,543", description: "Leading digital transformation initiatives" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.94M+", icon: Users },
    { label: "Banking Institutions", value: "25,700+", icon: Building2 },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "99.1%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Banking industry employs over 1.94 million professionals nationwide",
    "Digital banking adoption reached 87% among all banking customers",
    "Open banking APIs implemented by 73% of major financial institutions",
    "Cryptocurrency services offered by 45% of traditional banks",
    "AI-powered fraud detection reduced losses by 42% industry-wide"
  ];

  const bankingCategories = [
    {
      title: "Commercial Banking",
      description: "Business banking and commercial lending",
      count: "687K+",
      color: "bg-blue-500",
      professionals: ["Commercial Bankers", "Business Loan Officers", "Cash Management Specialists", "Trade Finance Managers"]
    },
    {
      title: "Retail Banking",
      description: "Consumer banking and personal financial services",
      count: "523K+",
      color: "bg-green-500",
      professionals: ["Personal Bankers", "Tellers", "Customer Service Representatives", "Mortgage Specialists"]
    },
    {
      title: "Investment Banking",
      description: "Corporate finance and investment services",
      count: "345K+",
      color: "bg-purple-500",
      professionals: ["Investment Bankers", "Financial Analysts", "Portfolio Managers", "Research Analysts"]
    },
    {
      title: "Digital Banking",
      description: "Online and mobile banking platforms",
      count: "385K+",
      color: "bg-orange-500",
      professionals: ["Digital Product Managers", "UX Designers", "Mobile App Developers", "Cybersecurity Specialists"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Banking Industry Email List - 1.94M+ Verified Contacts | ELP Data"
        description="Access comprehensive banking industry email database with 1.94M+ verified contacts. Connect with bank executives, loan officers, and financial professionals."
        keywords="banking industry email list, bank executive contacts, financial professionals, commercial banking database"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              Banking Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Banking Industry
              <span className="block text-blue-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 1.94 million banking professionals including executives, loan officers, 
              investment advisors, and financial services specialists across all banking sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Banking Contacts
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
                    <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
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
              Key Banking Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bankingTitles.map((title, index) => (
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
                        onClick={() => window.open(`/contact-us?industry=banking&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              Banking Industry Segments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {bankingCategories.map((category, index) => (
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
              Banking Market Insights
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

          {/* Contact Form */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Get Banking Industry Contacts</CardTitle>
              <CardDescription>
                Access verified banking industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific banking segments or requirements..." />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Request Banking Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}