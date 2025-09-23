import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Server, BarChart, Users, Target, Building } from "lucide-react";

export default function MicrosoftSQLServerUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-red-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Microsoft SQL Server Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 13,200+ organizations using Microsoft SQL Server for enterprise database management. Target database administrators, data engineers, and IT managers implementing SQL Server for mission-critical applications and data analytics.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">13,200+</div>
                  <div className="text-sm text-white/80">SQL Server Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">1.3B+</div>
                  <div className="text-sm text-white/80">SQL Server Licenses</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">200+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SQL Server Solutions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">SQL Server Platform Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Microsoft SQL Server for enterprise database management, analytics, and business intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-blue-600" />
                  SQL Server Database Engine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Core relational database management system for enterprise applications and data storage solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">RDBMS</Badge>
                  <Badge variant="secondary">High Availability</Badge>
                  <Badge variant="secondary">Enterprise Security</Badge>
                  <Badge variant="secondary">Performance</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-red-600" />
                  SQL Server Analysis Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Online analytical processing and data mining platform for business intelligence and analytics solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">OLAP</Badge>
                  <Badge variant="secondary">Data Mining</Badge>
                  <Badge variant="secondary">Business Intelligence</Badge>
                  <Badge variant="secondary">Tabular Models</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-purple-600" />
                  SQL Server Integration Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  ETL platform for data integration, transformation, and migration across enterprise systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">ETL</Badge>
                  <Badge variant="secondary">Data Integration</Badge>
                  <Badge variant="secondary">Migration</Badge>
                  <Badge variant="secondary">Workflows</Badge>
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
                  <li>• Database Administrators</li>
                  <li>• Data Architects</li>
                  <li>• IT Directors</li>
                  <li>• Infrastructure Managers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-red-600" />
                  Data & Analytics Teams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Data Engineers</li>
                  <li>• Business Intelligence Analysts</li>
                  <li>• Data Scientists</li>
                  <li>• Report Developers</li>
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
                  <li>• Enterprise Applications</li>
                  <li>• Data Warehousing</li>
                  <li>• Business Intelligence</li>
                  <li>• Application Modernization</li>
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