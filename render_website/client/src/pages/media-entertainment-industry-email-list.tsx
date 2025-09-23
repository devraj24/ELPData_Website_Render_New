import { Users, Film, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MediaEntertainmentIndustryEmailList() {
  const mediaTitles = [
    { title: "Content Producers", count: "345,678", description: "Creating and developing entertainment content" },
    { title: "Creative Directors", count: "198,765", description: "Leading creative vision and artistic direction" },
    { title: "Media Executives", count: "156,789", description: "Managing media companies and entertainment operations" },
    { title: "Digital Content Managers", count: "287,654", description: "Managing online and digital media content" },
    { title: "Broadcasting Engineers", count: "134,567", description: "Managing technical broadcasting operations" },
    { title: "Film Directors", count: "89,234", description: "Directing film and television productions" },
    { title: "Music Producers", count: "167,890", description: "Producing and recording musical content" },
    { title: "Video Game Developers", count: "234,567", description: "Creating interactive entertainment experiences" },
    { title: "Talent Agents", count: "123,456", description: "Representing entertainers and creative professionals" },
    { title: "Distribution Managers", count: "178,234", description: "Managing content distribution and licensing" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.92M+", icon: Users },
    { label: "Media Companies", value: "34,200+", icon: Film },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.8%", icon: TrendingUp }
  ];

  const marketInsights = [
    "Media & entertainment industry employs over 1.92 million professionals nationwide",
    "Streaming content production increased 420% driving creator economy growth",
    "Interactive media experiences expanded 380% across gaming and entertainment",
    "AI-generated content tools adopted by 72% of major media companies",
    "Virtual production technologies revolutionized 65% of film and TV production"
  ];

  const mediaCategories = [
    {
      title: "Film & Television",
      description: "Movie and TV production and broadcasting",
      count: "534K+",
      color: "bg-red-500",
      professionals: ["Directors", "Producers", "Cinematographers", "Screen Writers"]
    },
    {
      title: "Digital Media & Streaming",
      description: "Online content and streaming platforms",
      count: "487K+",
      color: "bg-blue-500",
      professionals: ["Content Creators", "Platform Managers", "Streaming Engineers", "Social Media Managers"]
    },
    {
      title: "Gaming & Interactive",
      description: "Video games and interactive entertainment",
      count: "423K+",
      color: "bg-purple-500",
      professionals: ["Game Developers", "UX Designers", "Level Designers", "Quality Assurance"]
    },
    {
      title: "Music & Audio",
      description: "Music production and audio entertainment",
      count: "476K+",
      color: "bg-green-500",
      professionals: ["Musicians", "Audio Engineers", "Music Producers", "Sound Designers"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Media & Entertainment Industry Email List - 1.92M+ Verified Contacts | ELP Data"
        description="Access comprehensive media & entertainment email database with 1.92M+ verified contacts. Connect with content producers, creative directors, and media executives."
        keywords="media entertainment industry email list, content producer contacts, creative director database, media executive professionals"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-100 text-red-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Film className="w-4 h-4 mr-2" />
              Media & Entertainment Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Media & Entertainment
              <span className="block text-red-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 1.92 million media professionals including content producers, creative directors, 
              digital media managers, and entertainment industry specialists across all sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Get Media Contacts
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
              Key Media Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaTitles.map((title, index) => (
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
                        onClick={() => window.open(`/contact-us?industry=media-entertainment&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              Media & Entertainment Segments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mediaCategories.map((category, index) => (
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
              Media Market Insights
            </h2>
            <Card className="bg-gradient-to-r from-red-50 to-slate-50">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {marketInsights.map((insight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-red-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{insight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Get Media & Entertainment Contacts</CardTitle>
              <CardDescription>
                Access verified media industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific media segments or requirements..." />
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Request Media Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}