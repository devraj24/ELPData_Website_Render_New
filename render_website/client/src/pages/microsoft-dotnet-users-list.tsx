import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Users, Target, Building, Layers } from "lucide-react";

export default function MicrosoftDotNetUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Microsoft .NET Platform Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 6,800+ organizations using Microsoft .NET for enterprise development. Target .NET developers, software architects, and technical leads implementing .NET Core, .NET Framework, and Blazor for scalable enterprise applications and web services.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">6,800+</div>
                  <div className="text-sm text-white/80">.NET Organizations</div>
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
                  <div className="text-3xl font-bold text-white">37%</div>
                  <div className="text-sm text-white/80">Enterprise Developer Usage</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* .NET Solutions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">.NET Development Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Microsoft .NET for enterprise applications, web development, and cloud-native solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-6 h-6 text-purple-600" />
                  .NET Core & .NET 6+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cross-platform .NET runtime for building modern applications, microservices, and cloud-native solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cross-platform</Badge>
                  <Badge variant="secondary">Microservices</Badge>
                  <Badge variant="secondary">Cloud Native</Badge>
                  <Badge variant="secondary">High Performance</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-blue-600" />
                  .NET Framework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Windows-based .NET platform for enterprise applications, desktop software, and legacy system integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Windows Platform</Badge>
                  <Badge variant="secondary">Enterprise Apps</Badge>
                  <Badge variant="secondary">Desktop Development</Badge>
                  <Badge variant="secondary">Legacy Integration</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-6 h-6 text-green-600" />
                  Blazor & MAUI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Modern web and mobile development frameworks for building interactive web apps and cross-platform applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Blazor WebAssembly</Badge>
                  <Badge variant="secondary">MAUI Apps</Badge>
                  <Badge variant="secondary">Cross-platform UI</Badge>
                  <Badge variant="secondary">Modern Web</Badge>
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
                  Enterprise Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• .NET Developers</li>
                  <li>• Software Architects</li>
                  <li>• Technical Leads</li>
                  <li>• Backend Engineers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  Microsoft Ecosystem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Microsoft Partners</li>
                  <li>• Azure Customers</li>
                  <li>• Office 365 Organizations</li>
                  <li>• Windows Enterprises</li>
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
                  <li>• Enterprise Web Applications</li>
                  <li>• API Development</li>
                  <li>• Desktop Applications</li>
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