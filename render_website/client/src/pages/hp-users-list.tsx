import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Server, Printer, Users, Target, Building } from "lucide-react";

export default function HPUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">HP Enterprise Hardware Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 23,100+ organizations using HP enterprise hardware solutions. Target IT directors, infrastructure managers, and procurement teams implementing HP servers, workstations, and printing solutions for business operations.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">23,100+</div>
                  <div className="text-sm text-white/80">HP Enterprise Customers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">2.8M+</div>
                  <div className="text-sm text-white/80">HP Devices Deployed</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">170+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* HP Solutions Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">HP Hardware Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing HP's comprehensive hardware solutions for computing, printing, and enterprise infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-blue-600" />
                  HP ProLiant Servers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Enterprise server solutions for data centers, virtualization, and mission-critical applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Data Center</Badge>
                  <Badge variant="secondary">Virtualization</Badge>
                  <Badge variant="secondary">Cloud Infrastructure</Badge>
                  <Badge variant="secondary">High Performance</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="w-6 h-6 text-cyan-600" />
                  HP Workstations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional workstations for engineering, design, and content creation with specialized performance requirements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">CAD/CAM</Badge>
                  <Badge variant="secondary">Video Editing</Badge>
                  <Badge variant="secondary">3D Modeling</Badge>
                  <Badge variant="secondary">Engineering</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Printer className="w-6 h-6 text-purple-600" />
                  HP Enterprise Printing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Commercial printing solutions including LaserJet, PageWide, and managed print services for enterprises.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">LaserJet</Badge>
                  <Badge variant="secondary">PageWide</Badge>
                  <Badge variant="secondary">Managed Print</Badge>
                  <Badge variant="secondary">Security</Badge>
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
                  <Building className="w-6 h-6 text-blue-600" />
                  Enterprise IT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• IT Directors</li>
                  <li>• Infrastructure Managers</li>
                  <li>• Data Center Managers</li>
                  <li>• System Administrators</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-cyan-600" />
                  Engineering & Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Engineering Managers</li>
                  <li>• CAD Specialists</li>
                  <li>• Creative Directors</li>
                  <li>• Technical Teams</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-purple-600" />
                  Key Implementation Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Server Virtualization</li>
                  <li>• High-Performance Computing</li>
                  <li>• Print Fleet Management</li>
                  <li>• Workstation Deployment</li>
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