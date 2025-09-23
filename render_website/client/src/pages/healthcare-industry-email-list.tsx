import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, Mail, Phone, MapPin, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HealthcareIndustryEmailList() {
  const healthcareTitles = [
    { title: "Hospital Administrators", count: "145,678", description: "Senior executives managing hospital operations" },
    { title: "Chief Medical Officers", count: "34,567", description: "Senior physicians leading medical staff" },
    { title: "Nurses", count: "287,543", description: "Registered nurses across all specialties" },
    { title: "Physicians", count: "198,765", description: "Medical doctors across all specializations" },
    { title: "Healthcare IT Directors", count: "67,890", description: "Managing healthcare technology systems" },
    { title: "Medical Device Managers", count: "89,234", description: "Managing medical equipment and devices" },
    { title: "Pharmaceutical Executives", count: "45,678", description: "Leaders in pharmaceutical companies" },
    { title: "Clinical Research Directors", count: "56,789", description: "Managing clinical trials and research" },
    { title: "Healthcare Finance Directors", count: "78,901", description: "Managing healthcare financial operations" },
    { title: "Quality Assurance Managers", count: "43,567", description: "Ensuring healthcare quality standards" },
    { title: "Healthcare Compliance Officers", count: "32,456", description: "Managing regulatory compliance" },
    { title: "Telemedicine Specialists", count: "29,876", description: "Leading remote healthcare services" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "2.07M+", icon: Users },
    { label: "Healthcare Facilities", value: "95,000+", icon: Heart },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "97.8%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Healthcare industry employs over 1.41 million professionals across all sectors",
    "Digital health technology adoption increased 380% since 2020",
    "Telemedicine usage grew 450% in primary care settings",
    "Healthcare AI implementation expanded 290% in diagnostic applications"
  ];

  return (
    <>
      <SEOHead 
        title="Healthcare Industry Email List | 1.41M+ Medical Professional Contacts"
        description="Access verified email lists of hospital administrators, physicians, nurses, and healthcare professionals. Over 1.41 million contacts across the healthcare sector."
        keywords="healthcare email list, hospital administrators, physicians, medical professionals contacts"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-red-600 to-pink-600 rounded-full">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Healthcare Industry<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
                  Professional Email Lists
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Connect with over 1.41 million healthcare professionals including hospital administrators, 
                physicians, nurses, and medical industry decision makers nationwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Users className="h-4 w-4 mr-2" />
                  1.41M+ Contacts
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Heart className="h-4 w-4 mr-2" />
                  95K+ Facilities
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Mail className="h-4 w-4 mr-2" />
                  97.8% Accuracy
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex justify-center mb-2">
                      <metric.icon className="h-8 w-8 text-red-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{metric.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 font-medium">{metric.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Healthcare Professional Categories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive database covering all healthcare roles from clinical to administrative
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {healthcareTitles.map((role, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                        {role.title}
                        <Badge variant="outline" className="ml-2 bg-red-50 text-red-700 border-red-200">
                          {role.count}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {role.description}
                      </CardDescription>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-red-600 hover:bg-red-700">
                          <Mail className="h-4 w-4 mr-2" />
                          Get Contacts
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <Card className="border-0 shadow-xl bg-gradient-to-r from-red-600 to-pink-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Healthcare Industry Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {marketInsights.map((insight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-white/90">{insight}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Ready to Connect with Healthcare Professionals?
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Access our comprehensive database of 1.41M+ verified healthcare contacts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                      <Mail className="h-5 w-5 mr-2" />
                      Get Complete Database
                    </Button>
                    <Button size="lg" variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                      <Phone className="h-5 w-5 mr-2" />
                      Schedule Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}