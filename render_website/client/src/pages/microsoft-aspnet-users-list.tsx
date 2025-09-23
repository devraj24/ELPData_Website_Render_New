import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Users, Target, Building, Globe } from "lucide-react";

export default function MicrosoftAspNetUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Microsoft ASP.NET Developers</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 11,600+ organizations using ASP.NET for web development. Target .NET developers, software architects, and technical leads implementing ASP.NET Core, MVC, and Web API for enterprise web applications.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">11,600+</div>
                  <div className="text-sm text-white/80">ASP.NET Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">5M+</div>
                  <div className="text-sm text-white/80">.NET Developers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">180+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ASP.NET Solutions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">ASP.NET Development Platforms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing ASP.NET for web applications, APIs, and enterprise software development
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-6 h-6 text-purple-600" />
                  ASP.NET Core
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cross-platform framework for building modern web applications, APIs, and microservices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cross-platform</Badge>
                  <Badge variant="secondary">Microservices</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                  <Badge variant="secondary">Cloud Native</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-blue-600" />
                  ASP.NET MVC
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Model-View-Controller framework for building scalable web applications and enterprise portals.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">MVC Pattern</Badge>
                  <Badge variant="secondary">Web Applications</Badge>
                  <Badge variant="secondary">Enterprise Portals</Badge>
                  <Badge variant="secondary">Razor Views</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-green-600" />
                  ASP.NET Web API
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Framework for building HTTP services and RESTful APIs for web and mobile applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">RESTful APIs</Badge>
                  <Badge variant="secondary">HTTP Services</Badge>
                  <Badge variant="secondary">Mobile Backends</Badge>
                  <Badge variant="secondary">Integration</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Teams */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Target Teams & Decision Makers</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-6 h-6 text-purple-600" />
                  Development Teams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• .NET Developers</li>
                  <li>• Software Architects</li>
                  <li>• Technical Leads</li>
                  <li>• Full Stack Engineers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  Enterprise IT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• CTOs & IT Directors</li>
                  <li>• Development Managers</li>
                  <li>• DevOps Engineers</li>
                  <li>• Solution Architects</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-green-600" />
                  Implementation Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Enterprise Web Apps</li>
                  <li>• API Development</li>
                  <li>• Microservices Architecture</li>
                  <li>• Cloud Migration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}