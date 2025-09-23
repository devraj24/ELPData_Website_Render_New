import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Database, Users, Target, Building, Share } from "lucide-react";

export default function MicrosoftSharePointUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Microsoft SharePoint Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 9,400+ organizations using Microsoft SharePoint for collaboration and content management. Target IT administrators, knowledge managers, and collaboration specialists implementing SharePoint Online, Server, and hybrid solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">9,400+</div>
                  <div className="text-sm text-white/80">SharePoint Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">200M+</div>
                  <div className="text-sm text-white/80">SharePoint Users</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">190+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SharePoint Solutions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">SharePoint Platform Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing SharePoint for document management, team collaboration, and enterprise content management
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-blue-600" />
                  SharePoint Online
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cloud-based collaboration platform integrated with Microsoft 365 for modern team sites and document libraries.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cloud Collaboration</Badge>
                  <Badge variant="secondary">Teams Integration</Badge>
                  <Badge variant="secondary">Document Libraries</Badge>
                  <Badge variant="secondary">Modern Sites</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-green-600" />
                  SharePoint Server
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  On-premises collaboration platform for organizations requiring local control and custom enterprise solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">On-Premises</Badge>
                  <Badge variant="secondary">Custom Solutions</Badge>
                  <Badge variant="secondary">Enterprise Control</Badge>
                  <Badge variant="secondary">Workflow</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share className="w-6 h-6 text-purple-600" />
                  Power Platform Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Integration with Power Apps, Power Automate, and Power BI for business process automation and analytics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Power Apps</Badge>
                  <Badge variant="secondary">Power Automate</Badge>
                  <Badge variant="secondary">Power BI</Badge>
                  <Badge variant="secondary">Business Process</Badge>
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
                  Enterprise Organizations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• IT Directors</li>
                  <li>• SharePoint Administrators</li>
                  <li>• Collaboration Managers</li>
                  <li>• Digital Workplace Teams</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-green-600" />
                  Knowledge Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Knowledge Managers</li>
                  <li>• Content Managers</li>
                  <li>• Information Architects</li>
                  <li>• Business Analysts</li>
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
                  <li>• Document Management</li>
                  <li>• Team Collaboration</li>
                  <li>• Intranet Portals</li>
                  <li>• Business Process Automation</li>
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