import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Users, Target, Building, Server } from "lucide-react";

export default function PHPUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">PHP Development Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 10,500+ organizations using PHP for web development. Target PHP developers, web agencies, and technical teams implementing Laravel, Symfony, and WordPress for dynamic web applications and content management systems.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">10,500+</div>
                  <div className="text-sm text-white/80">PHP Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">77.4%</div>
                  <div className="text-sm text-white/80">Server-side Web Share</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">6M+</div>
                  <div className="text-sm text-white/80">PHP Developers</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PHP Solutions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">PHP Development Frameworks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing PHP for web applications, e-commerce platforms, and content management systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-6 h-6 text-blue-600" />
                  Laravel Framework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Modern PHP framework for building web applications with elegant syntax and powerful features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">MVC Architecture</Badge>
                  <Badge variant="secondary">Eloquent ORM</Badge>
                  <Badge variant="secondary">Artisan CLI</Badge>
                  <Badge variant="secondary">Blade Templates</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-purple-600" />
                  WordPress Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Custom WordPress themes, plugins, and enterprise solutions built with PHP.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Custom Themes</Badge>
                  <Badge variant="secondary">Plugin Development</Badge>
                  <Badge variant="secondary">WooCommerce</Badge>
                  <Badge variant="secondary">Multisite</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-green-600" />
                  Symfony Framework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Enterprise PHP framework for complex web applications and high-performance systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Enterprise Apps</Badge>
                  <Badge variant="secondary">Components</Badge>
                  <Badge variant="secondary">Performance</Badge>
                  <Badge variant="secondary">Scalability</Badge>
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
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Target Teams & Decision Makers</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-6 h-6 text-blue-600" />
                  Web Development Agencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• PHP Developers</li>
                  <li>• Web Developers</li>
                  <li>• Technical Directors</li>
                  <li>• Project Managers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-purple-600" />
                  E-commerce & Startups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• CTO & Tech Leads</li>
                  <li>• Full Stack Developers</li>
                  <li>• E-commerce Managers</li>
                  <li>• Startup Founders</li>
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
                  <li>• Content Management</li>
                  <li>• E-commerce Platforms</li>
                  <li>• Web Applications</li>
                  <li>• API Development</li>
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