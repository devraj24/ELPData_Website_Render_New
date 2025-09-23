import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Users, Target, Building, Server } from "lucide-react";

export default function OracleJavaUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-orange-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Oracle Java Platform Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 8,400+ organizations using Oracle Java for enterprise development. Target Java developers, software architects, and technical leads implementing Java SE, Java EE, and Spring framework for mission-critical enterprise applications.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">8,400+</div>
                  <div className="text-sm text-white/80">Java Enterprise Users</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">9M+</div>
                  <div className="text-sm text-white/80">Java Developers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">3B+</div>
                  <div className="text-sm text-white/80">Devices Running Java</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Java Solutions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Java Enterprise Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Java for enterprise applications, microservices, and large-scale software development
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-6 h-6 text-red-600" />
                  Java SE & Enterprise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Core Java platform for enterprise application development with JVM, libraries, and runtime environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Java SE</Badge>
                  <Badge variant="secondary">JVM</Badge>
                  <Badge variant="secondary">Enterprise APIs</Badge>
                  <Badge variant="secondary">Concurrency</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-orange-600" />
                  Spring Framework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Java framework for building enterprise applications with dependency injection and aspect-oriented programming.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Spring Boot</Badge>
                  <Badge variant="secondary">Spring Security</Badge>
                  <Badge variant="secondary">Spring Data</Badge>
                  <Badge variant="secondary">Microservices</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-yellow-600" />
                  Enterprise Application Servers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Java EE application servers for hosting enterprise applications and web services.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">WebLogic</Badge>
                  <Badge variant="secondary">WebSphere</Badge>
                  <Badge variant="secondary">JBoss/WildFly</Badge>
                  <Badge variant="secondary">Tomcat</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Target Industries & Decision Makers</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-6 h-6 text-red-600" />
                  Enterprise Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Java Developers</li>
                  <li>• Software Architects</li>
                  <li>• Technical Leads</li>
                  <li>• Backend Engineers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-orange-600" />
                  Financial & Enterprise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Banking Technology</li>
                  <li>• Insurance Systems</li>
                  <li>• Enterprise IT</li>
                  <li>• Government Systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-yellow-600" />
                  Implementation Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Enterprise Applications</li>
                  <li>• Microservices Architecture</li>
                  <li>• API Development</li>
                  <li>• Legacy System Integration</li>
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