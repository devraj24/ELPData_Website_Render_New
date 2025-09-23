import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Server, Database, Shield } from "lucide-react";

export default function AzureUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Microsoft Azure Cloud Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 45,728+ organizations using Microsoft Azure cloud platform. Target cloud architects, Azure administrators, and IT directors implementing Virtual Machines, App Service, and Azure SQL Database for enterprise workloads.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">45,728+</div>
                  <div className="text-sm text-white/80">Azure Customers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">600+</div>
                  <div className="text-sm text-white/80">Azure Services</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">60+</div>
                  <div className="text-sm text-white/80">Global Regions</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Azure Services */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-navy mb-6">Azure Core Services</h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Enterprise organizations implementing Microsoft Azure cloud solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-blue-600" />
                  Virtual Machines & Compute
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Azure Virtual Machines with Windows and Linux support
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Azure VMs</Badge>
                  <Badge variant="secondary">Virtual Machine Scale Sets</Badge>
                  <Badge variant="secondary">Azure Container Instances</Badge>
                  <Badge variant="secondary">Azure Functions</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Implementation Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Complex licensing models</li>
                    <li>• Hybrid cloud integration</li>
                    <li>• Cost management complexity</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-indigo-600" />
                  Active Directory & Identity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Azure Active Directory for enterprise identity management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Azure AD</Badge>
                  <Badge variant="secondary">Single Sign-On</Badge>
                  <Badge variant="secondary">Multi-Factor Authentication</Badge>
                  <Badge variant="secondary">Conditional Access</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Fortune 500 Enterprises</li>
                    <li>• Financial Services</li>
                    <li>• Healthcare Organizations</li>
                    <li>• Government Agencies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-green-600" />
                  SQL Database & Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Managed database services and enterprise storage solutions
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Azure SQL Database</Badge>
                  <Badge variant="secondary">Cosmos DB</Badge>
                  <Badge variant="secondary">Blob Storage</Badge>
                  <Badge variant="secondary">Data Lake Storage</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Enterprise Software Companies</li>
                    <li>• Financial Services & Banking</li>
                    <li>• Healthcare & Life Sciences</li>
                    <li>• Government & Public Sector</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Azure Administrators</li>
                    <li>• Database Administrators</li>
                    <li>• Data Platform Engineers</li>
                    <li>• Enterprise Architects</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Complex Azure pricing models</li>
                    <li>• Data sovereignty and compliance issues</li>
                    <li>• Migration from on-premises databases</li>
                    <li>• Performance tuning for cloud databases</li>
                    <li>• Backup and disaster recovery planning</li>
                    <li>• Integration with existing Microsoft stack</li>
                    <li>• Cost optimization and monitoring</li>
                    <li>• Security and access management</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-purple-600" />
                  Azure DevOps & AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Development operations and artificial intelligence services
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Azure DevOps</Badge>
                  <Badge variant="secondary">Cognitive Services</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Bot Framework</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Software Development Companies</li>
                    <li>• Technology Startups</li>
                    <li>• Digital Transformation Enterprises</li>
                    <li>• AI/ML Research Organizations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• DevOps Engineers</li>
                    <li>• Machine Learning Engineers</li>
                    <li>• AI Solutions Architects</li>
                    <li>• Development Team Leads</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• CI/CD pipeline optimization</li>
                    <li>• Model deployment and scaling</li>
                    <li>• Development team collaboration</li>
                    <li>• AI ethics and bias management</li>
                    <li>• Infrastructure as code implementation</li>
                    <li>• Cross-platform development support</li>
                    <li>• Testing automation strategies</li>
                    <li>• Performance monitoring and optimization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-orange-600" />
                  Microsoft 365 Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Seamless integration with Microsoft Office and productivity tools
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Office 365</Badge>
                  <Badge variant="secondary">Teams Integration</Badge>
                  <Badge variant="secondary">SharePoint Online</Badge>
                  <Badge variant="secondary">Power Platform</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Corporate Enterprises</li>
                    <li>• Education Institutions</li>
                    <li>• Professional Services</li>
                    <li>• Non-profit Organizations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• IT Administrators</li>
                    <li>• Microsoft 365 Administrators</li>
                    <li>• Collaboration Specialists</li>
                    <li>• Digital Workplace Managers</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• User adoption and training</li>
                    <li>• Licensing complexity and costs</li>
                    <li>• Security and compliance management</li>
                    <li>• Migration from legacy systems</li>
                    <li>• Governance and data management</li>
                    <li>• Integration with third-party tools</li>
                    <li>• Performance and reliability issues</li>
                    <li>• Change management across organization</li>
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