import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Server, Shield, Users, Target, Building } from "lucide-react";

export default function LinuxUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Linux Operating System Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 13,700+ organizations using Linux for server infrastructure and enterprise computing. Target system administrators, DevOps engineers, and IT managers implementing Red Hat, Ubuntu, CentOS, and SUSE for mission-critical operations.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">13,700+</div>
                  <div className="text-sm text-white/80">Linux Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">96.3%</div>
                  <div className="text-sm text-white/80">Top 1M Web Servers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">85%</div>
                  <div className="text-sm text-white/80">Cloud Infrastructure</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Linux Distributions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Enterprise Linux Distributions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Linux for server infrastructure, cloud computing, and enterprise workloads
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-blue-600" />
                  Red Hat Enterprise Linux
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Enterprise-grade Linux with commercial support for mission-critical applications and hybrid cloud deployments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Enterprise Support</Badge>
                  <Badge variant="secondary">Security</Badge>
                  <Badge variant="secondary">Hybrid Cloud</Badge>
                  <Badge variant="secondary">Container Platform</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="w-6 h-6 text-gray-600" />
                  Ubuntu Server
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Popular Linux distribution for cloud computing, containers, and development environments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cloud Native</Badge>
                  <Badge variant="secondary">Containers</Badge>
                  <Badge variant="secondary">DevOps</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-green-600" />
                  SUSE Linux Enterprise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Enterprise Linux platform for SAP applications, high-performance computing, and edge computing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">SAP Certified</Badge>
                  <Badge variant="secondary">HPC</Badge>
                  <Badge variant="secondary">Edge Computing</Badge>
                  <Badge variant="secondary">Rancher</Badge>
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
                  IT Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• System Administrators</li>
                  <li>• Infrastructure Architects</li>
                  <li>• IT Directors</li>
                  <li>• DevOps Engineers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-gray-600" />
                  Cloud & Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cloud Architects</li>
                  <li>• Software Engineers</li>
                  <li>• Platform Engineers</li>
                  <li>• SRE Teams</li>
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
                  <li>• Server Infrastructure</li>
                  <li>• Container Platforms</li>
                  <li>• Cloud Computing</li>
                  <li>• High Performance Computing</li>
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