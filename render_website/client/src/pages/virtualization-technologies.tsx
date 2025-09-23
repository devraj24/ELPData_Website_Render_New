import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Building2, TrendingUp, Download, Filter, ArrowRight, Server, Cloud, Shield, Monitor, Settings } from "lucide-react";

export default function VirtualizationTechnologies() {
  const [searchQuery, setSearchQuery] = useState("");

  const virtualizationTechnologies = [
    {
      name: "VMware vSphere",
      companies: "391,200+",
      professionals: "1.1M+",
      description: "Leading virtualization platform for data center infrastructure",
      category: "Server Virtualization",
      link: "/vmware-users-list"
    },
    {
      name: "Microsoft Hyper-V",
      companies: "285,000+",
      professionals: "680K+",
      description: "Enterprise virtualization solution integrated with Windows Server",
      category: "Server Virtualization",
      link: "/hyperv-users-list"
    },
    {
      name: "Citrix XenServer",
      companies: "125,000+",
      professionals: "420K+",
      description: "Open-source virtualization platform for enterprise environments",
      category: "Server Virtualization",
      link: "/xenserver-users-list"
    },
    {
      name: "Red Hat Virtualization",
      companies: "89,000+",
      professionals: "280K+",
      description: "Open-source virtualization management platform",
      category: "Server Virtualization",
      link: "/redhat-virtualization-users-list"
    },
    {
      name: "Oracle VM",
      companies: "67,000+",
      professionals: "195K+",
      description: "Oracle's server virtualization and management solution",
      category: "Server Virtualization",
      link: "/oracle-vm-users-list"
    },
    {
      name: "VMware vCenter",
      companies: "320,000+",
      professionals: "890K+",
      description: "Centralized management platform for VMware vSphere environments",
      category: "Management Platform",
      link: "/vmware-vcenter-users-list"
    },
    {
      name: "VMware ESXi",
      companies: "375,000+",
      professionals: "950K+",
      description: "Type-1 hypervisor for enterprise server virtualization",
      category: "Hypervisor",
      link: "/vmware-esxi-users-list"
    },
    {
      name: "VMware NSX",
      companies: "145,000+",
      professionals: "380K+",
      description: "Network virtualization and security platform",
      category: "Network Virtualization",
      link: "/vmware-nsx-users-list"
    },
    {
      name: "VMware vSAN",
      companies: "98,000+",
      professionals: "250K+",
      description: "Software-defined storage solution for vSphere environments",
      category: "Storage Virtualization",
      link: "/vmware-vsan-users-list"
    },
    {
      name: "Nutanix AHV",
      companies: "78,000+",
      professionals: "210K+",
      description: "Hyperconverged infrastructure virtualization platform",
      category: "Hyperconverged",
      link: "/nutanix-ahv-users-list"
    },
    {
      name: "Docker Enterprise",
      companies: "156,000+",
      professionals: "520K+",
      description: "Container virtualization platform for enterprise applications",
      category: "Container Platform",
      link: "/docker-enterprise-users-list"
    },
    {
      name: "Kubernetes",
      companies: "267,000+",
      professionals: "750K+",
      description: "Container orchestration platform for cloud-native applications",
      category: "Container Orchestration",
      link: "/kubernetes-users-list"
    }
  ];

  const filteredTechnologies = virtualizationTechnologies.filter(tech =>
    tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tech.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalCompanies = virtualizationTechnologies.reduce((sum, tech) => 
    sum + parseInt(tech.companies.replace(/[^\d]/g, '')), 0
  );

  const categories = [
    { name: "Server Virtualization", count: 5, icon: Server, color: "blue" },
    { name: "Container Platform", count: 2, icon: Monitor, color: "green" },
    { name: "Network Virtualization", count: 1, icon: Shield, color: "purple" },
    { name: "Storage Virtualization", count: 1, icon: Cloud, color: "orange" },
    { name: "Management Platform", count: 1, icon: Settings, color: "indigo" },
    { name: "Hyperconverged", count: 1, icon: Building2, color: "teal" }
  ];

  return (
    <>
      <SEOHead 
        title="Virtualization Technologies Database - VMware, Hyper-V, Citrix Users List"
        description="Access comprehensive database of companies using virtualization technologies including VMware vSphere, Microsoft Hyper-V, Citrix XenServer, and container platforms. 391K+ VMware users, detailed contact information."
        keywords="virtualization users, VMware customers, Hyper-V users, virtualization technology database, server virtualization, container platform users"
      />
      
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Server className="w-6 h-6" />
              <span className="font-semibold">Virtualization & Infrastructure Technologies</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Virtualization Technology
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                Database
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Connect with {totalCompanies.toLocaleString()}+ organizations using virtualization technologies. 
              Access decision-makers implementing VMware, Hyper-V, containers, and cloud infrastructure solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">391K+</div>
                  <div className="text-sm text-blue-200">VMware vSphere Users</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">1.1M+</div>
                  <div className="text-sm text-blue-200">Virtualization Professionals</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">195+</div>
                  <div className="text-sm text-blue-200">Countries Covered</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <Input
                type="text"
                placeholder="Search virtualization technologies (e.g., VMware, Hyper-V, Docker)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500 shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Virtualization Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <IconComponent className={`w-8 h-8 mx-auto mb-3 text-${category.color}-600`} />
                      <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.count} Technologies</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {searchQuery ? `Found ${filteredTechnologies.length} technologies` : 'All Virtualization Technologies'}
              </h2>
              <p className="text-xl text-gray-600">
                {searchQuery ? `Matching "${searchQuery}"` : `${virtualizationTechnologies.length} comprehensive technology databases`}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTechnologies.map((tech, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                          {tech.name}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-2">
                          {tech.category}
                        </Badge>
                      </div>
                      <Server className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{tech.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="font-bold text-blue-900">{tech.companies}</div>
                        <div className="text-xs text-blue-600">Companies</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="font-bold text-green-900">{tech.professionals}</div>
                        <div className="text-xs text-green-600">Professionals</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>IT Directors, System Administrators, Cloud Architects</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Building2 className="w-4 h-4" />
                        <span>Enterprise, Healthcare, Financial Services</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full group-hover:scale-105 transition-transform"
                      onClick={() => window.location.href = tech.link}
                    >
                      View Database <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Applications</h2>
              <p className="text-xl text-gray-600">Virtualization technologies across key industries</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Financial Services</h3>
                  <p className="text-gray-600">Banking, insurance, and investment firms using virtualization for secure, scalable infrastructure</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Healthcare</h3>
                  <p className="text-gray-600">Hospitals and healthcare organizations implementing HIPAA-compliant virtualized systems</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Manufacturing</h3>
                  <p className="text-gray-600">Industrial companies virtualizing operations and supply chain management systems</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Cloud className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Technology</h3>
                  <p className="text-gray-600">Software companies and startups building cloud-native applications on virtualized infrastructure</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Connect with Virtualization Decision-Makers?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Access our comprehensive database of virtualization professionals and start targeting the right contacts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-blue-600">
                <Download className="w-5 h-5 mr-2" />
                Download Sample Data
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Request Custom List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}