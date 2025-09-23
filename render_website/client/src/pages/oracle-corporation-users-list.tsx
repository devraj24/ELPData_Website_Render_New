import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Cloud, Shield, Server, Building2, Code, Users, Globe } from "lucide-react";

export default function OracleCorporationUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Oracle Corporation Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 2M+ organizations using Oracle Corporation's comprehensive suite of 613+ products and technologies. Target Oracle DBAs, Java developers, JD Edwards consultants, PeopleSoft administrators, Oracle Cloud specialists, and enterprise architects implementing Oracle's complete technology ecosystem including Java, MySQL, Oracle Database, JD Edwards EnterpriseOne, PeopleSoft, Oracle Cloud Infrastructure, and Oracle Fusion applications.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">2M</div>
                  <div className="text-sm text-white/80">Companies Using Oracle</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">5M+</div>
                  <div className="text-sm text-white/80">Oracle Technology Records</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">613+</div>
                  <div className="text-sm text-white/80">Products & Technologies</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Oracle Product Portfolio Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-navy mb-6">Oracle Corporation Product Ecosystem</h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Enterprise organizations implementing Oracle's comprehensive database, cloud, middleware, and application solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-red-500">
              <CardHeader className="bg-gradient-to-br from-red-50 to-red-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-600 text-white rounded-lg">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-red-800">Oracle Database</CardTitle>
                    <p className="text-sm text-red-600">Enterprise Database Solutions</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-neutral-dark mb-4">
                  World's most popular enterprise database including Oracle 10g, Oracle 12c, Oracle 19c, Oracle Database Express Edition (XE), Oracle Database 18c, Oracle Autonomous Database, and Oracle Exadata solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Oracle Database 19c</Badge>
                  <Badge variant="secondary">Oracle RAC</Badge>
                  <Badge variant="secondary">Oracle Autonomous Database</Badge>
                  <Badge variant="secondary">Oracle Exadata</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-600 text-white rounded-lg">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-blue-800">Oracle Cloud Infrastructure</CardTitle>
                    <p className="text-sm text-blue-600">Enterprise Cloud Platform</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-neutral-dark mb-4">
                  Next-generation cloud infrastructure with compute, storage, networking, and database services.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Compute</Badge>
                  <Badge variant="secondary">Storage</Badge>
                  <Badge variant="secondary">Networking</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader className="bg-gradient-to-br from-green-50 to-green-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-600 text-white rounded-lg">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-green-800">Oracle Applications</CardTitle>
                    <p className="text-sm text-green-600">Enterprise Business Applications</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-neutral-dark mb-4">
                  Complete suite of cloud applications including ERP, HCM, CX, EPM, and supply chain management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Oracle ERP Cloud</Badge>
                  <Badge variant="secondary">Oracle HCM Cloud</Badge>
                  <Badge variant="secondary">Oracle CX Cloud</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader className="bg-gradient-to-br from-orange-50 to-orange-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-600 text-white rounded-lg">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-orange-800">JD Edwards & PeopleSoft</CardTitle>
                    <p className="text-sm text-orange-600">Enterprise Application Suites</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-neutral-dark mb-4">
                  Comprehensive ERP solutions including JD Edwards EnterpriseOne, JD Edwards World, PeopleSoft Campus Solutions, PeopleSoft Financial Management, and Oracle E-Business Suite for manufacturing, distribution, financial services, and public sector.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">JD Edwards EnterpriseOne</Badge>
                  <Badge variant="secondary">JD Edwards World</Badge>
                  <Badge variant="secondary">PeopleSoft Financial Management</Badge>
                  <Badge variant="secondary">Oracle E-Business Suite</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader className="bg-gradient-to-br from-purple-50 to-purple-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-600 text-white rounded-lg">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-purple-800">Java & Middleware</CardTitle>
                    <p className="text-sm text-purple-600">Development Platform & Tools</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-neutral-dark mb-4">
                  Java platform including Java SE 17, Java SE 18, JavaScript, Oracle JDeveloper, Oracle JRockit, WebLogic Server, and comprehensive middleware solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Java SE 17</Badge>
                  <Badge variant="secondary">Java SE 18</Badge>
                  <Badge variant="secondary">WebLogic Server</Badge>
                  <Badge variant="secondary">Oracle SOA</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader className="bg-gradient-to-br from-indigo-50 to-indigo-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-600 text-white rounded-lg">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-indigo-800">MySQL & Open Source</CardTitle>
                    <p className="text-sm text-indigo-600">Open Source Database Solutions</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-neutral-dark mb-4">
                  World's most popular open source database with enterprise features and commercial support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">MySQL Database</Badge>
                  <Badge variant="secondary">MySQL HeatWave</Badge>
                  <Badge variant="secondary">MySQL Cluster</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-navy mb-6">Oracle Corporation Users by Industry</h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Target decision-makers across industries implementing Oracle technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-red-800 mb-2">Financial Services</h3>
              <p className="text-3xl font-bold text-red-600 mb-2">687K+</p>
              <p className="text-sm text-neutral-dark">Banks, insurance companies, investment firms</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-blue-800 mb-2">Manufacturing</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">542K+</p>
              <p className="text-sm text-neutral-dark">Industrial equipment, automotive, aerospace</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-green-800 mb-2">Technology</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">456K+</p>
              <p className="text-sm text-neutral-dark">Software companies, SaaS providers, IT services</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-orange-800 mb-2">Healthcare</h3>
              <p className="text-3xl font-bold text-orange-600 mb-2">398K+</p>
              <p className="text-sm text-neutral-dark">Hospitals, pharmaceutical, medical devices</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-purple-800 mb-2">Government</h3>
              <p className="text-3xl font-bold text-purple-600 mb-2">287K+</p>
              <p className="text-sm text-neutral-dark">Federal, state, local government agencies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-indigo-800 mb-2">Retail</h3>
              <p className="text-3xl font-bold text-indigo-600 mb-2">198K+</p>
              <p className="text-sm text-neutral-dark">E-commerce, consumer goods, fashion</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-teal-800 mb-2">Energy & Utilities</h3>
              <p className="text-3xl font-bold text-teal-600 mb-2">156K+</p>
              <p className="text-sm text-neutral-dark">Oil & gas, electric utilities, renewable energy</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Education</h3>
              <p className="text-3xl font-bold text-gray-600 mb-2">89K+</p>
              <p className="text-sm text-neutral-dark">Universities, K-12, educational technology</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}