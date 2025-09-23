import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Cloud, Shield, Monitor, Database, Cpu } from "lucide-react";

export default function VMwareUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">VMware Virtualization Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 500,000+ organizations using VMware virtualization platforms. Target virtualization engineers, data center managers, and cloud architects implementing vSphere, vCenter, and NSX for enterprise infrastructure modernization.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">500,000+</div>
                  <div className="text-sm text-white/80">VMware Customers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">75M+</div>
                  <div className="text-sm text-white/80">Virtualized Workloads</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">80%</div>
                  <div className="text-sm text-white/80">Enterprise Virtualization Market</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* VMware Implementation Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">VMware Implementation Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing VMware solutions for server virtualization, cloud infrastructure, and software-defined data centers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-green-500" />
                  vSphere Server Virtualization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Enterprise server virtualization with ESXi hypervisor and vCenter management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">ESXi Hypervisor</Badge>
                  <Badge variant="secondary">vCenter Server</Badge>
                  <Badge variant="secondary">vMotion Live Migration</Badge>
                  <Badge variant="secondary">High Availability (HA)</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data Centers & Hosting Providers</li>
                    <li>• Financial Services & Banking</li>
                    <li>• Healthcare Systems</li>
                    <li>• Government Agencies</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Virtualization Engineer</li>
                    <li>• Data Center Manager</li>
                    <li>• Infrastructure Architect</li>
                    <li>• Systems Administrator</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Physical to virtual migration planning</li>
                    <li>• Storage architecture and performance optimization</li>
                    <li>• Network configuration and VLAN management</li>
                    <li>• Resource allocation and capacity planning</li>
                    <li>• Backup and disaster recovery procedures</li>
                    <li>• Licensing costs and feature optimization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-blue-500" />
                  VMware Cloud Foundation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Hybrid and multi-cloud platform with software-defined infrastructure
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">SDDC Management</Badge>
                  <Badge variant="secondary">vSAN Storage</Badge>
                  <Badge variant="secondary">NSX Networking</Badge>
                  <Badge variant="secondary">Cloud Gateway</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large Enterprise IT</li>
                    <li>• Cloud Service Providers</li>
                    <li>• Digital Transformation Projects</li>
                    <li>• Multi-Cloud Strategies</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Cloud Architect</li>
                    <li>• SDDC Specialist</li>
                    <li>• Infrastructure Director</li>
                    <li>• Platform Engineering Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex software-defined infrastructure setup</li>
                    <li>• Multi-cloud integration and management</li>
                    <li>• Network security policy implementation</li>
                    <li>• Performance monitoring across hybrid environments</li>
                    <li>• Cost optimization for cloud consumption</li>
                    <li>• Staff training on software-defined technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="w-6 h-6 text-purple-500" />
                  Horizon VDI Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Virtual desktop infrastructure for remote workforce and secure computing
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Virtual Desktop Infrastructure</Badge>
                  <Badge variant="secondary">App Virtualization</Badge>
                  <Badge variant="secondary">Instant Clones</Badge>
                  <Badge variant="secondary">Unified Access Gateway</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Call Centers & Customer Service</li>
                    <li>• Educational Institutions</li>
                    <li>• Remote Workforce Organizations</li>
                    <li>• Secure Computing Environments</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• VDI Administrator</li>
                    <li>• End User Computing Manager</li>
                    <li>• Remote Work Coordinator</li>
                    <li>• Desktop Services Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• User profile and data management</li>
                    <li>• Application compatibility and performance</li>
                    <li>• Network bandwidth and latency optimization</li>
                    <li>• Storage I/O performance for VDI workloads</li>
                    <li>• User experience customization and branding</li>
                    <li>• Security and compliance for remote access</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-orange-500" />
                  NSX Network Virtualization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Software-defined networking with micro-segmentation and security
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Micro-segmentation</Badge>
                  <Badge variant="secondary">Distributed Firewall</Badge>
                  <Badge variant="secondary">Load Balancing</Badge>
                  <Badge variant="secondary">Network Analytics</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Security-Conscious Organizations</li>
                    <li>• Financial Services</li>
                    <li>• Government & Defense</li>
                    <li>• Healthcare & Compliance-Heavy Industries</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Network Security Engineer</li>
                    <li>• NSX Administrator</li>
                    <li>• Chief Information Security Officer</li>
                    <li>• Network Operations Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Network topology redesign and planning</li>
                    <li>• Security policy migration and optimization</li>
                    <li>• Integration with existing network infrastructure</li>
                    <li>• Performance monitoring and troubleshooting</li>
                    <li>• Staff training on software-defined networking</li>
                    <li>• Compliance and audit configuration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-teal-500" />
                  vSAN Hyper-Converged Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Software-defined storage with hyper-converged infrastructure
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Hyper-Converged Infrastructure</Badge>
                  <Badge variant="secondary">Software-Defined Storage</Badge>
                  <Badge variant="secondary">Data Deduplication</Badge>
                  <Badge variant="secondary">Stretched Clusters</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Remote Office Branch Office (ROBO)</li>
                    <li>• Mid-Size Enterprise IT</li>
                    <li>• VDI Deployments</li>
                    <li>• Edge Computing Locations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Storage Administrator</li>
                    <li>• Hyper-Converged Specialist</li>
                    <li>• Infrastructure Manager</li>
                    <li>• IT Operations Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Hardware compatibility and certification</li>
                    <li>• Cluster sizing and performance optimization</li>
                    <li>• Network configuration for storage traffic</li>
                    <li>• Data migration from traditional storage</li>
                    <li>• Fault tolerance and availability planning</li>
                    <li>• Capacity monitoring and expansion planning</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="w-6 h-6 text-indigo-500" />
                  Tanzu Kubernetes Platform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Enterprise Kubernetes platform for modern application development
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Kubernetes Clusters</Badge>
                  <Badge variant="secondary">Container Management</Badge>
                  <Badge variant="secondary">DevOps Integration</Badge>
                  <Badge variant="secondary">Application Modernization</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Software Development Organizations</li>
                    <li>• DevOps Teams</li>
                    <li>• Cloud-Native Applications</li>
                    <li>• Microservices Architecture</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Platform Engineering Manager</li>
                    <li>• DevOps Engineer</li>
                    <li>• Application Development Manager</li>
                    <li>• Cloud Native Architect</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Kubernetes cluster management complexity</li>
                    <li>• Container security and image management</li>
                    <li>• CI/CD pipeline integration</li>
                    <li>• Developer training on containerization</li>
                    <li>• Legacy application modernization</li>
                    <li>• Monitoring and observability setup</li>
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