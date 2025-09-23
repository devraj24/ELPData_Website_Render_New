import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Monitor, Database, Shield, Cloud, Cpu } from "lucide-react";

export default function DellUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-600 to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Dell Enterprise Hardware Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 23,547+ organizations using Dell enterprise hardware solutions. Target IT directors, system administrators, and infrastructure managers implementing Dell servers, workstations, and storage systems for business-critical operations.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">23,547</div>
                  <div className="text-sm text-white/80">Dell Enterprise Customers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">4.2M+</div>
                  <div className="text-sm text-white/80">Dell Devices Deployed</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">120+</div>
                  <div className="text-sm text-white/80">Countries Served</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Dell Hardware Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Dell Enterprise Hardware Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Dell hardware solutions for data centers, enterprise computing, and business applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-blue-500" />
                  Dell PowerEdge Servers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Rack-mount and tower servers for enterprise applications and virtualization
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">PowerEdge R750 Series</Badge>
                  <Badge variant="secondary">VMware vSphere</Badge>
                  <Badge variant="secondary">Hyper-V Virtualization</Badge>
                  <Badge variant="secondary">iDRAC Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data Centers & Hosting Providers</li>
                    <li>• Financial Services & Banking</li>
                    <li>• Healthcare & Medical Centers</li>
                    <li>• Educational Institutions</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• IT Infrastructure Manager</li>
                    <li>• Data Center Operations Manager</li>
                    <li>• Systems Administrator</li>
                    <li>• Virtualization Engineer</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Server consolidation and capacity planning</li>
                    <li>• Virtualization migration from physical systems</li>
                    <li>• Power and cooling infrastructure requirements</li>
                    <li>• Hardware warranty and support management</li>
                    <li>• Integration with existing network infrastructure</li>
                    <li>• Backup and disaster recovery planning</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="w-6 h-6 text-green-500" />
                  Dell Precision Workstations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  High-performance workstations for CAD, engineering, and creative applications
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Precision 7000 Series</Badge>
                  <Badge variant="secondary">NVIDIA Quadro Graphics</Badge>
                  <Badge variant="secondary">Intel Xeon Processors</Badge>
                  <Badge variant="secondary">ECC Memory Support</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Architecture & Engineering Firms</li>
                    <li>• Manufacturing & Automotive Design</li>
                    <li>• Media & Entertainment Production</li>
                    <li>• Scientific Research & Development</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• CAD/CAM Manager</li>
                    <li>• Engineering Director</li>
                    <li>• Creative Services Manager</li>
                    <li>• Research Computing Specialist</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• High-end graphics and compute requirements</li>
                    <li>• Software certification and compatibility</li>
                    <li>• Network storage and file sharing performance</li>
                    <li>• User training on professional applications</li>
                    <li>• Asset management and software licensing</li>
                    <li>• Remote work and collaboration capabilities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-purple-500" />
                  Dell PowerStore Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Next-generation storage arrays for block, file, and VMware vVols
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">All-Flash Arrays</Badge>
                  <Badge variant="secondary">Data Reduction</Badge>
                  <Badge variant="secondary">VMware Integration</Badge>
                  <Badge variant="secondary">CloudIQ Analytics</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Enterprise Data Centers</li>
                    <li>• Virtualized Environments</li>
                    <li>• Database & Analytics Workloads</li>
                    <li>• VDI & Virtual Desktop Infrastructure</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Storage Administrator</li>
                    <li>• Database Administrator</li>
                    <li>• Infrastructure Architect</li>
                    <li>• Cloud Operations Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Storage migration from legacy arrays</li>
                    <li>• Performance optimization for workloads</li>
                    <li>• Data protection and backup integration</li>
                    <li>• Capacity planning and growth prediction</li>
                    <li>• Multi-protocol configuration complexity</li>
                    <li>• Cost justification for all-flash storage</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-orange-500" />
                  Dell OptiPlex Desktops
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Business desktop computers for office productivity and enterprise deployment
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">OptiPlex 7000 Series</Badge>
                  <Badge variant="secondary">Windows 11 Pro</Badge>
                  <Badge variant="secondary">TPM Security Chip</Badge>
                  <Badge variant="secondary">Remote Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Corporate Offices & Business Services</li>
                    <li>• Government Agencies</li>
                    <li>• Call Centers & Customer Service</li>
                    <li>• Retail & Point of Sale Systems</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• IT Procurement Manager</li>
                    <li>• Desktop Support Manager</li>
                    <li>• Office Manager</li>
                    <li>• Facilities Coordinator</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Mass deployment and imaging procedures</li>
                    <li>• Software standardization across devices</li>
                    <li>• Security policy enforcement and compliance</li>
                    <li>• User data migration and preservation</li>
                    <li>• Hardware lifecycle management</li>
                    <li>• Remote support and troubleshooting</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-teal-500" />
                  Dell VxRail Hyper-Converged
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Hyper-converged infrastructure appliances with VMware vSAN integration
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">VMware vSAN Ready</Badge>
                  <Badge variant="secondary">Hyper-Converged Infrastructure</Badge>
                  <Badge variant="secondary">Lifecycle Management</Badge>
                  <Badge variant="secondary">Single-Vendor Support</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Mid-Size Enterprise IT</li>
                    <li>• Remote Office Branch Office (ROBO)</li>
                    <li>• VMware-Centric Organizations</li>
                    <li>• IT Simplification Projects</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• VMware Administrator</li>
                    <li>• Hyper-Converged Specialist</li>
                    <li>• IT Operations Director</li>
                    <li>• Infrastructure Architect</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• VMware licensing and version compatibility</li>
                    <li>• Network configuration for vSAN traffic</li>
                    <li>• Cluster sizing and node expansion planning</li>
                    <li>• Data migration from traditional storage</li>
                    <li>• Performance monitoring and optimization</li>
                    <li>• Disaster recovery and backup strategies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="w-6 h-6 text-indigo-500" />
                  Dell Latitude Laptops
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Business laptops for mobile workforce and enterprise productivity
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Latitude 9000 Series</Badge>
                  <Badge variant="secondary">ExpressConnect WiFi</Badge>
                  <Badge variant="secondary">Intelligent Privacy</Badge>
                  <Badge variant="secondary">Dell Optimizer</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Professional Services & Consulting</li>
                    <li>• Sales & Field Service Organizations</li>
                    <li>• Remote & Hybrid Workforce</li>
                    <li>• Executive & Management Teams</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Mobile Device Manager</li>
                    <li>• Human Resources Director</li>
                    <li>• Executive Assistant</li>
                    <li>• Field Operations Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Mobile device management and security</li>
                    <li>• VPN and remote access configuration</li>
                    <li>• Battery life and power management</li>
                    <li>• Wireless network connectivity issues</li>
                    <li>• Data synchronization and backup</li>
                    <li>• User training for business applications</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}