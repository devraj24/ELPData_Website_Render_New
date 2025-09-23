import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, FileText, Users, Target, Building, BarChart } from "lucide-react";

export default function MicrosoftAccessUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Microsoft Access Database Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 9,200+ organizations using Microsoft Access for desktop database solutions. Target small business owners, department managers, and power users implementing Access for data management, forms, and reporting applications.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">9,200+</div>
                  <div className="text-sm text-white/80">Access Deployments</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">700M+</div>
                  <div className="text-sm text-white/80">Office 365 Users</div>
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

      {/* Access Solutions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Microsoft Access Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Small and medium businesses implementing Microsoft Access for departmental databases and business applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-red-600" />
                  Desktop Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Local database applications for inventory management, customer tracking, and business operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Inventory Management</Badge>
                  <Badge variant="secondary">Customer Tracking</Badge>
                  <Badge variant="secondary">Data Entry Forms</Badge>
                  <Badge variant="secondary">Local Storage</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-blue-600" />
                  Forms & Reports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Custom forms and reports for data collection, analysis, and business reporting requirements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Custom Forms</Badge>
                  <Badge variant="secondary">Report Generation</Badge>
                  <Badge variant="secondary">Data Analysis</Badge>
                  <Badge variant="secondary">Business Intelligence</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-purple-600" />
                  Web Apps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Web-based Access applications for SharePoint integration and collaborative database solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">SharePoint Integration</Badge>
                  <Badge variant="secondary">Web Applications</Badge>
                  <Badge variant="secondary">Collaboration</Badge>
                  <Badge variant="secondary">Cloud Access</Badge>
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
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Target Organizations & Decision Makers</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-6 h-6 text-red-600" />
                  Small Businesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Business Owners</li>
                  <li>• Office Managers</li>
                  <li>• Administrative Staff</li>
                  <li>• Department Heads</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  Power Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Database Developers</li>
                  <li>• Business Analysts</li>
                  <li>• IT Support Staff</li>
                  <li>• Data Entry Specialists</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-purple-600" />
                  Common Use Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Contact Management</li>
                  <li>• Project Tracking</li>
                  <li>• Financial Records</li>
                  <li>• Asset Management</li>
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