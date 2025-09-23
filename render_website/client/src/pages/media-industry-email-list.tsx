import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Users, Mail, Phone, MapPin, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MediaIndustryEmailList() {
  const mediaTitles = [
    { title: "Media Directors", count: "45,678", description: "Leading media strategy and content operations" },
    { title: "Content Producers", count: "189,234", description: "Creating and managing multimedia content" },
    { title: "Digital Media Managers", count: "123,456", description: "Managing digital content and online presence" },
    { title: "Video Production Specialists", count: "87,890", description: "Producing video content for various platforms" },
    { title: "Social Media Directors", count: "156,789", description: "Managing social media strategy and engagement" },
    { title: "Broadcasting Engineers", count: "34,567", description: "Managing broadcast technology and equipment" },
    { title: "Journalists", count: "78,901", description: "Researching and reporting news and stories" },
    { title: "Creative Directors", count: "65,432", description: "Leading creative vision and artistic direction" },
    { title: "Media Buyers", count: "98,765", description: "Planning and purchasing media advertising space" },
    { title: "Podcast Producers", count: "43,210", description: "Creating and managing podcast content" },
    { title: "Streaming Platform Managers", count: "29,876", description: "Managing content on streaming platforms" },
    { title: "Advertising Account Directors", count: "112,345", description: "Managing client advertising campaigns" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.06M+", icon: Users },
    { label: "Media Companies", value: "12,800+", icon: Camera },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.5%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Media industry employs over 1.06 million professionals nationwide",
    "Streaming content production increased 480% in past 5 years",
    "Digital advertising spending grew 290% across all media channels",
    "Podcast advertising revenue increased 350% since 2020"
  ];

  return (
    <>
      <SEOHead 
        title="Media Industry Email List | 1.06M+ Professional Contacts"
        description="Access verified email lists of media directors, content producers, and media professionals. Over 1.06 million contacts across the media sector."
        keywords="media industry email list, media directors, content producers, media professionals"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full">
                  <Camera className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Media Industry<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  Professional Email Lists
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Connect with over 1.06 million media professionals including media directors, 
                content producers, and digital media specialists nationwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Users className="h-4 w-4 mr-2" />
                  1.06M+ Contacts
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Camera className="h-4 w-4 mr-2" />
                  12.8K+ Companies
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Mail className="h-4 w-4 mr-2" />
                  98.5% Accuracy
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex justify-center mb-2">
                      <metric.icon className="h-8 w-8 text-pink-600" />
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
                  Media Professional Categories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive database covering all media roles from content creation to distribution
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mediaTitles.map((role, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                        {role.title}
                        <Badge variant="outline" className="ml-2 bg-pink-50 text-pink-700 border-pink-200">
                          {role.count}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {role.description}
                      </CardDescription>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-pink-600 hover:bg-pink-700">
                          <Mail className="h-4 w-4 mr-2" />
                          Get Contacts
                        </Button>
                        <Button size="sm" variant="outline" className="border-pink-200 text-pink-700 hover:bg-pink-50">
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <Card className="border-0 shadow-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Media Industry Insights
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
                    Ready to Connect with Media Professionals?
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Access our comprehensive database of 1.06M+ verified media contacts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                      <Mail className="h-5 w-5 mr-2" />
                      Get Complete Database
                    </Button>
                    <Button size="lg" variant="outline" className="border-pink-200 text-pink-700 hover:bg-pink-50">
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