import { Users, Wheat, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AgricultureIndustryEmailList() {
  const agricultureTitles = [
    { title: "Farm Owners & Operators", count: "456,789", description: "Managing agricultural operations and farming enterprises" },
    { title: "Agricultural Engineers", count: "123,456", description: "Designing farming equipment and systems" },
    { title: "Crop Scientists", count: "189,234", description: "Developing crop varieties and farming techniques" },
    { title: "Livestock Managers", count: "234,567", description: "Managing animal husbandry operations" },
    { title: "Agricultural Equipment Dealers", count: "167,890", description: "Selling and servicing farm equipment" },
    { title: "Food Safety Directors", count: "145,678", description: "Ensuring agricultural food safety standards" },
    { title: "Agribusiness Managers", count: "198,765", description: "Managing agricultural business operations" },
    { title: "Precision Agriculture Specialists", count: "89,234", description: "Implementing precision farming technologies" },
    { title: "Agricultural Consultants", count: "134,567", description: "Providing farming advisory services" },
    { title: "Sustainable Agriculture Directors", count: "76,543", description: "Leading sustainable farming initiatives" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.81M+", icon: Users },
    { label: "Agricultural Operations", value: "45,600+", icon: Wheat },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.6%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Agriculture industry employs over 1.81 million professionals nationwide",
    "Precision agriculture technology adoption reached 67% among major farming operations",
    "Sustainable farming practices implemented by 78% of agricultural businesses",
    "AgTech investments increased 340% focusing on automation and AI solutions",
    "Vertical farming operations expanded 450% in urban agricultural markets"
  ];

  const agricultureCategories = [
    {
      title: "Crop Production",
      description: "Grain, vegetable, and specialty crop farming",
      count: "512K+",
      color: "bg-green-500",
      professionals: ["Crop Farmers", "Agronomists", "Harvest Managers", "Seed Specialists"]
    },
    {
      title: "Livestock & Dairy",
      description: "Animal husbandry and dairy operations",
      count: "387K+",
      color: "bg-blue-500",
      professionals: ["Livestock Farmers", "Dairy Managers", "Veterinarians", "Feed Specialists"]
    },
    {
      title: "Agricultural Technology",
      description: "Farm equipment and precision agriculture",
      count: "423K+",
      color: "bg-purple-500",
      professionals: ["Equipment Engineers", "Tech Specialists", "Software Developers", "Data Analysts"]
    },
    {
      title: "Agribusiness & Processing",
      description: "Food processing and agricultural business",
      count: "488K+",
      color: "bg-orange-500",
      professionals: ["Processing Managers", "Supply Chain Directors", "Quality Controllers", "Business Analysts"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Agriculture Industry Email List - 1.81M+ Verified Contacts | ELP Data"
        description="Access comprehensive agriculture industry email database with 1.81M+ verified contacts. Connect with farmers, agricultural engineers, and agribusiness professionals."
        keywords="agriculture industry email list, farmer contacts, agricultural engineer database, agribusiness professionals"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Wheat className="w-4 h-4 mr-2" />
              Agriculture Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Agriculture Industry
              <span className="block text-green-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 1.81 million agriculture professionals including farmers, agricultural engineers, 
              agribusiness managers, and precision agriculture specialists across all farming sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Agriculture Contacts
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
              Key Agriculture Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agricultureTitles.map((title, index) => (
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
                        onClick={() => window.open(`/contact-us?industry=agriculture&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              Agriculture Industry Segments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {agricultureCategories.map((category, index) => (
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
              Agriculture Market Insights
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
              <CardTitle className="text-2xl text-gray-900">Get Agriculture Industry Contacts</CardTitle>
              <CardDescription>
                Access verified agriculture industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific agriculture segments or requirements..." />
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Request Agriculture Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}