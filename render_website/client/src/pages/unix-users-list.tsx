import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Server, Shield, Users, Target, Building } from "lucide-react";

export default function UnixUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-700 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Unix Operating System Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 10,500+ organizations using Unix systems for enterprise computing. Target Unix administrators, system engineers, and infrastructure teams managing AIX, Solaris, and BSD systems for mission-critical enterprise operations.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">10,500+</div>
                  <div className="text-sm text-white/80">Unix Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-white/80">Years in Production</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-white/80">Enterprise Uptime</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Unix Systems */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Enterprise Unix Platforms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Unix systems for high-availability computing, enterprise applications, and mission-critical infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-gray-600" />
                  IBM AIX
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Enterprise Unix system for IBM Power Systems with advanced virtualization and high availability features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Power Systems</Badge>
                  <Badge variant="secondary">LPAR Virtualization</Badge>
                  <Badge variant="secondary">High Availability</Badge>
                  <Badge variant="secondary">Enterprise Class</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="w-6 h-6 text-orange-600" />
                  Oracle Solaris
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Unix operating system optimized for Oracle database and enterprise applications with advanced security.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Oracle Integration</Badge>
                  <Badge variant="secondary">ZFS File System</Badge>
                  <Badge variant="secondary">Zones Virtualization</Badge>
                  <Badge variant="secondary">DTrace</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  FreeBSD & OpenBSD
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Open-source BSD Unix systems for servers, networking appliances, and security-focused deployments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Open Source</Badge>
                  <Badge variant="secondary">Network Stack</Badge>
                  <Badge variant="secondary">Security Focus</Badge>
                  <Badge variant="secondary">Appliances</Badge>
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
                  <Building className="w-6 h-6 text-gray-600" />
                  Enterprise Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Unix System Administrators</li>
                  <li>• Infrastructure Architects</li>
                  <li>• Enterprise IT Directors</li>
                  <li>• Platform Engineers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-orange-600" />
                  Financial & Government
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Banking Technology</li>
                  <li>• Government Systems</li>
                  <li>• Telecommunications</li>
                  <li>• Critical Infrastructure</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-blue-600" />
                  Implementation Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mission-Critical Applications</li>
                  <li>• Database Servers</li>
                  <li>• High-Performance Computing</li>
                  <li>• Network Infrastructure</li>
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