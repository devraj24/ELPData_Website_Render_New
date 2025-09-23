import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Cloud, Users, Target, Building, Globe } from "lucide-react";

export default function OracleMySQLUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Oracle MySQL Database Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 7,700+ organizations using Oracle MySQL for web applications and enterprise databases. Target database developers, web developers, and DevOps teams implementing MySQL for high-performance, scalable database solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">7,700+</div>
                  <div className="text-sm text-white/80">MySQL Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">150M+</div>
                  <div className="text-sm text-white/80">MySQL Downloads</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">200+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* MySQL Solutions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">MySQL Database Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing MySQL for web applications, e-commerce platforms, and enterprise database systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-orange-600" />
                  Web Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  MySQL database backend for web applications, content management systems, and e-commerce platforms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">LAMP Stack</Badge>
                  <Badge variant="secondary">Content Management</Badge>
                  <Badge variant="secondary">E-commerce</Badge>
                  <Badge variant="secondary">Web Development</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-blue-600" />
                  MySQL HeatWave
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cloud-native MySQL service with integrated analytics and machine learning capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cloud Native</Badge>
                  <Badge variant="secondary">Analytics</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Real-time Processing</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-purple-600" />
                  MySQL Enterprise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Enterprise-grade MySQL with advanced security, monitoring, and high availability features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Enterprise Security</Badge>
                  <Badge variant="secondary">High Availability</Badge>
                  <Badge variant="secondary">Performance Monitoring</Badge>
                  <Badge variant="secondary">Backup & Recovery</Badge>
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
                  <Building className="w-6 h-6 text-orange-600" />
                  Web Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Web Developers</li>
                  <li>• Full Stack Engineers</li>
                  <li>• Technical Architects</li>
                  <li>• DevOps Engineers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  Database Teams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Database Administrators</li>
                  <li>• Database Developers</li>
                  <li>• Data Engineers</li>
                  <li>• System Administrators</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-purple-600" />
                  Implementation Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• E-commerce Platforms</li>
                  <li>• Content Management</li>
                  <li>• Data Analytics</li>
                  <li>• Application Backends</li>
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