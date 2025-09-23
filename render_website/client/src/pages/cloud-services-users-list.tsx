import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Server, Shield, BarChart, Settings, Zap } from "lucide-react";

export default function CloudServicesUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Multi-Cloud Platform Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 4.1M+ organizations using multi-cloud services for digital transformation. Target cloud architects, DevOps engineers, and CTO teams implementing AWS, Azure, Google Cloud, and hybrid infrastructure solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">4.1M+</div>
                  <div className="text-sm text-white/80">Cloud-First Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">15.8M+</div>
                  <div className="text-sm text-white/80">Cloud Engineers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">195+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services Solutions Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">Cloud Services Platform Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing comprehensive cloud infrastructure and platform services for digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-blue-500" />
                  Infrastructure as a Service (IaaS)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Virtual computing resources and infrastructure management platforms
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Virtual Machines</Badge>
                  <Badge variant="secondary">Storage Solutions</Badge>
                  <Badge variant="secondary">Network Management</Badge>
                  <Badge variant="secondary">Load Balancing</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Technology & Software Companies</li>
                    <li>• Financial Services & FinTech</li>
                    <li>• E-commerce & Digital Retail</li>
                    <li>• Media & Entertainment</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Cloud Infrastructure Architect</li>
                    <li>• DevOps Engineer</li>
                    <li>• Site Reliability Engineer</li>
                    <li>• Infrastructure Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Multi-cloud management and vendor lock-in</li>
                    <li>• Cost optimization and resource rightsizing</li>
                    <li>• Security configuration and compliance</li>
                    <li>• Performance monitoring across regions</li>
                    <li>• Disaster recovery and backup strategies</li>
                    <li>• Network latency and connectivity issues</li>
                    <li>• Auto-scaling configuration and optimization</li>
                    <li>• Skills gap in cloud-native technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-green-500" />
                  Platform as a Service (PaaS)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Application development and deployment platforms with managed services
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Container Orchestration</Badge>
                  <Badge variant="secondary">Serverless Computing</Badge>
                  <Badge variant="secondary">API Management</Badge>
                  <Badge variant="secondary">CI/CD Pipelines</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Software Development Companies</li>
                    <li>• Digital Agencies & Consultancies</li>
                    <li>• SaaS & Cloud-native Startups</li>
                    <li>• Enterprise Application Developers</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Platform Engineer</li>
                    <li>• Application Developer</li>
                    <li>• DevOps Specialist</li>
                    <li>• Cloud Solutions Architect</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Container security and vulnerability management</li>
                    <li>• Microservices architecture complexity</li>
                    <li>• Service mesh configuration and monitoring</li>
                    <li>• Application performance optimization</li>
                    <li>• Integration with legacy systems</li>
                    <li>• Development workflow standardization</li>
                    <li>• Resource allocation and capacity planning</li>
                    <li>• Cross-platform deployment automation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-purple-500" />
                  Cloud Security & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive security and compliance management for cloud environments
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Identity Management</Badge>
                  <Badge variant="secondary">Data Encryption</Badge>
                  <Badge variant="secondary">Threat Detection</Badge>
                  <Badge variant="secondary">Compliance Monitoring</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Healthcare & Life Sciences</li>
                    <li>• Financial Services & Banking</li>
                    <li>• Government & Defense</li>
                    <li>• Legal & Professional Services</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Cloud Security Architect</li>
                    <li>• Compliance Manager</li>
                    <li>• Information Security Officer</li>
                    <li>• Risk Management Specialist</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Multi-cloud security policy enforcement</li>
                    <li>• Data residency and sovereignty requirements</li>
                    <li>• Identity and access management complexity</li>
                    <li>• Encryption key management across services</li>
                    <li>• Compliance audit trail automation</li>
                    <li>• Zero-trust architecture implementation</li>
                    <li>• Incident response in cloud environments</li>
                    <li>• Third-party security assessment and monitoring</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-orange-500" />
                  Cloud Analytics & Big Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Data analytics and big data processing platforms in cloud environments
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Data Warehousing</Badge>
                  <Badge variant="secondary">Stream Processing</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Business Intelligence</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Retail & Consumer Analytics</li>
                    <li>• Manufacturing & IoT</li>
                    <li>• Telecommunications & Media</li>
                    <li>• Research & Academic Institutions</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data Engineer</li>
                    <li>• Analytics Manager</li>
                    <li>• Data Scientist</li>
                    <li>• Business Intelligence Developer</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data pipeline optimization and reliability</li>
                    <li>• Real-time analytics performance tuning</li>
                    <li>• Data quality and consistency management</li>
                    <li>• Cost optimization for large-scale processing</li>
                    <li>• Integration of multiple data sources</li>
                    <li>• Model deployment and MLOps implementation</li>
                    <li>• Data governance and lineage tracking</li>
                    <li>• Scalability planning for growing datasets</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-6 h-6 text-teal-500" />
                  Cloud Management & Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive cloud resource management and operational excellence
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Resource Optimization</Badge>
                  <Badge variant="secondary">Cost Management</Badge>
                  <Badge variant="secondary">Monitoring & Alerting</Badge>
                  <Badge variant="secondary">Automation Tools</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large Enterprise Organizations</li>
                    <li>• Managed Service Providers</li>
                    <li>• Multi-national Corporations</li>
                    <li>• Cloud Consulting Companies</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Cloud Operations Manager</li>
                    <li>• FinOps Specialist</li>
                    <li>• Cloud Administrator</li>
                    <li>• Infrastructure Automation Engineer</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Multi-cloud cost tracking and optimization</li>
                    <li>• Resource tagging and governance policies</li>
                    <li>• Automated scaling and rightsizing strategies</li>
                    <li>• Performance monitoring across cloud providers</li>
                    <li>• Change management and approval workflows</li>
                    <li>• Disaster recovery testing and validation</li>
                    <li>• Vendor management and contract optimization</li>
                    <li>• Skills development for evolving cloud services</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-indigo-500" />
                  Edge Computing & CDN
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Edge computing and content delivery network services for global performance
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Content Delivery</Badge>
                  <Badge variant="secondary">Edge Locations</Badge>
                  <Badge variant="secondary">Low Latency</Badge>
                  <Badge variant="secondary">Global Distribution</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Gaming & Interactive Media</li>
                    <li>• Video Streaming & OTT</li>
                    <li>• E-commerce & Global Retail</li>
                    <li>• IoT & Connected Devices</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Edge Computing Engineer</li>
                    <li>• CDN Specialist</li>
                    <li>• Performance Engineer</li>
                    <li>• Global Infrastructure Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Edge location deployment and management</li>
                    <li>• Content caching strategies and optimization</li>
                    <li>• Network latency measurement and improvement</li>
                    <li>• Geographic content distribution policies</li>
                    <li>• Edge security and DDoS protection</li>
                    <li>• Real-time analytics and performance monitoring</li>
                    <li>• Integration with origin infrastructure</li>
                    <li>• Cost optimization for global traffic patterns</li>
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