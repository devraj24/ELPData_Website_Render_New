import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Globe, Shield, Users, Target, Building } from "lucide-react";

export default function ApacheUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-orange-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Apache Web Server Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 16,500+ organizations using Apache HTTP Server for web hosting. Target system administrators, web developers, and DevOps teams implementing Apache for web applications, content delivery, and enterprise hosting solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">16,500+</div>
                  <div className="text-sm text-white/80">Apache Deployments</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">31%</div>
                  <div className="text-sm text-white/80">Web Server Market Share</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">25+</div>
                  <div className="text-sm text-white/80">Years Active</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Apache Solutions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Apache Web Server Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Apache HTTP Server for web hosting, load balancing, and enterprise web applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-red-600" />
                  Apache HTTP Server
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Open-source web server software for hosting websites, web applications, and serving static content.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Web Hosting</Badge>
                  <Badge variant="secondary">Static Content</Badge>
                  <Badge variant="secondary">Virtual Hosts</Badge>
                  <Badge variant="secondary">SSL/TLS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-orange-600" />
                  Reverse Proxy & Load Balancer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Apache as reverse proxy and load balancer for distributing traffic and improving application performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Reverse Proxy</Badge>
                  <Badge variant="secondary">Load Balancing</Badge>
                  <Badge variant="secondary">Traffic Distribution</Badge>
                  <Badge variant="secondary">High Availability</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-yellow-600" />
                  Enterprise Modules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Extensive module ecosystem for authentication, security, compression, and application integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">mod_rewrite</Badge>
                  <Badge variant="secondary">mod_ssl</Badge>
                  <Badge variant="secondary">mod_security</Badge>
                  <Badge variant="secondary">mod_php</Badge>
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
                  Web Hosting Providers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Hosting Providers</li>
                  <li>• Data Center Operators</li>
                  <li>• Web Hosting Resellers</li>
                  <li>• Cloud Service Providers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-orange-600" />
                  Enterprise IT Teams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• System Administrators</li>
                  <li>• DevOps Engineers</li>
                  <li>• Web Developers</li>
                  <li>• Infrastructure Architects</li>
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
                  <li>• Web Application Hosting</li>
                  <li>• Content Management Systems</li>
                  <li>• E-commerce Platforms</li>
                  <li>• API Gateways</li>
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