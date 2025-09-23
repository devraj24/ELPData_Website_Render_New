import { Users, GraduationCap, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EducationIndustryEmailList() {
  const educationTitles = [
    { title: "School Principals", count: "234,567", description: "Leading elementary, middle, and high schools" },
    { title: "University Administrators", count: "189,234", description: "Managing higher education institutions" },
    { title: "Teachers & Professors", count: "2,345,678", description: "Educating students at all academic levels" },
    { title: "Curriculum Directors", count: "156,789", description: "Developing educational curricula and programs" },
    { title: "EdTech Directors", count: "123,456", description: "Managing educational technology initiatives" },
    { title: "Student Services Directors", count: "178,234", description: "Providing student support and services" },
    { title: "Academic Deans", count: "89,765", description: "Leading academic departments and programs" },
    { title: "Librarians", count: "267,890", description: "Managing educational and research libraries" },
    { title: "Special Education Directors", count: "145,678", description: "Managing special education programs" },
    { title: "Distance Learning Coordinators", count: "134,567", description: "Managing online and remote education" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "3.87M+", icon: Users },
    { label: "Educational Institutions", value: "234,700+", icon: GraduationCap },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "99.4%", icon: TrendingUp }
  ];

  return (
    <>
      <SEOHead 
        title="Education Industry Email List - 3.87M+ Verified Contacts | ELP Data"
        description="Access comprehensive education industry email database with 3.87M+ verified contacts. Connect with school principals, university administrators, teachers, and education professionals."
        keywords="education industry email list, school principal contacts, university administrator database, teacher professional contacts"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-violet-100 text-violet-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-4 h-4 mr-2" />
              Education Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Education Industry
              <span className="block text-violet-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 3.87 million education professionals including school principals, 
              university administrators, teachers, curriculum directors, and EdTech specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                Get Education Contacts
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
                    <Icon className="w-8 h-8 text-violet-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Education Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationTitles.map((title, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-violet-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=education&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              <CardTitle className="text-2xl text-gray-900">Get Education Industry Contacts</CardTitle>
              <CardDescription>
                Access verified education industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific education segments or requirements..." />
              <Button className="w-full bg-violet-600 hover:bg-violet-700">
                Request Education Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}