import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Cloud, Shield, Server, Users, Target } from "lucide-react";

export default function OracleUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Oracle Corporation Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 2.84M+ organizations using Oracle Corporation's comprehensive suite of 613+ products and technologies. Target Oracle DBAs, Java developers, JD Edwards consultants, PeopleSoft administrators, Oracle Cloud specialists, and enterprise architects implementing Oracle's complete technology ecosystem.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">2.84M</div>
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

      {/* Oracle Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-navy mb-6">Oracle Corporation Technology Ecosystem</h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Enterprise organizations implementing Oracle's comprehensive suite of 613+ products spanning database, cloud infrastructure, enterprise applications, middleware, and development platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-red-500" />
                  Oracle Corporation Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Complete database and cloud infrastructure portfolio
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Oracle DB 19c/21c/23c</Badge>
                  <Badge variant="secondary">Autonomous Database</Badge>
                  <Badge variant="secondary">Oracle Cloud Infrastructure</Badge>
                  <Badge variant="secondary">Exadata Database Services</Badge>
                  <Badge variant="secondary">MySQL Database Service</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Financial Services & Banking</li>
                    <li>• Telecommunications</li>
                    <li>• Government & Public Sector</li>
                    <li>• Manufacturing & Supply Chain</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Database Administrator (DBA)</li>
                    <li>• Senior Database Engineer</li>
                    <li>• Database Architect</li>
                    <li>• IT Infrastructure Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• High licensing and maintenance costs</li>
                    <li>• Complex migration to cloud environments</li>
                    <li>• Performance tuning for large datasets</li>
                    <li>• Compliance with data protection regulations</li>
                    <li>• Integration with modern DevOps practices</li>
                    <li>• Skills shortage for Oracle specialists</li>
                    <li>• Vendor lock-in concerns</li>
                    <li>• Backup and disaster recovery complexity</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-blue-500" />
                  Oracle Cloud Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Enterprise cloud platform with integrated database services
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">OCI Compute</Badge>
                  <Badge variant="secondary">Autonomous Database</Badge>
                  <Badge variant="secondary">Cloud Applications</Badge>
                  <Badge variant="secondary">Data Integration</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Enterprise Software Companies</li>
                    <li>• Healthcare & Life Sciences</li>
                    <li>• Retail & E-commerce</li>
                    <li>• Media & Entertainment</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Cloud Solutions Architect</li>
                    <li>• DevOps Engineer</li>
                    <li>• Cloud Infrastructure Manager</li>
                    <li>• Enterprise Technology Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Limited market presence vs AWS/Azure</li>
                    <li>• Complex pricing models</li>
                    <li>• Multi-cloud strategy implementation</li>
                    <li>• Legacy system modernization</li>
                    <li>• Cloud security and governance</li>
                    <li>• Staff training on OCI services</li>
                    <li>• Application refactoring for cloud</li>
                    <li>• Network connectivity optimization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-green-500" />
                  JD Edwards & PeopleSoft
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Comprehensive ERP and HCM enterprise applications
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">JD Edwards EnterpriseOne</Badge>
                  <Badge variant="secondary">JD Edwards World</Badge>
                  <Badge variant="secondary">PeopleSoft HCM</Badge>
                  <Badge variant="secondary">PeopleSoft Financials</Badge>
                  <Badge variant="secondary">Oracle Fusion ERP</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Manufacturing & Distribution</li>
                    <li>• Professional Services</li>
                    <li>• Construction & Engineering</li>
                    <li>• Energy & Utilities</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• ERP Implementation Manager</li>
                    <li>• Business Systems Analyst</li>
                    <li>• Financial Systems Director</li>
                    <li>• Enterprise Applications Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• High implementation costs and timeline</li>
                    <li>• Complex data migration from legacy systems</li>
                    <li>• User adoption and change management</li>
                    <li>• Customization limitations in cloud</li>
                    <li>• Integration with third-party applications</li>
                    <li>• Ongoing subscription cost management</li>
                    <li>• Business process standardization</li>
                    <li>• Performance optimization for large datasets</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-purple-500" />
                  Oracle HCM Cloud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Human Capital Management cloud solution for workforce management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Core HR</Badge>
                  <Badge variant="secondary">Talent Management</Badge>
                  <Badge variant="secondary">Workforce Management</Badge>
                  <Badge variant="secondary">Payroll</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Large Enterprises (5000+ employees)</li>
                    <li>• Healthcare Organizations</li>
                    <li>• Government Agencies</li>
                    <li>• Higher Education</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Chief Human Resources Officer</li>
                    <li>• HR Technology Director</li>
                    <li>• HRIS Administrator</li>
                    <li>• Talent Management Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Complex configuration requirements</li>
                    <li>• Data privacy and compliance issues</li>
                    <li>• Integration with existing HR systems</li>
                    <li>• User interface complexity</li>
                    <li>• Reporting and analytics limitations</li>
                    <li>• Change management for HR processes</li>
                    <li>• Mobile experience optimization</li>
                    <li>• Global payroll compliance challenges</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-indigo-500" />
                  Oracle Analytics Cloud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Modern analytics platform with machine learning capabilities
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Self-Service Analytics</Badge>
                  <Badge variant="secondary">Data Visualization</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Enterprise Reporting</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Financial Services & Insurance</li>
                    <li>• Retail & Consumer Goods</li>
                    <li>• Healthcare & Life Sciences</li>
                    <li>• Technology & Software</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-orange-500" />
                  Java & Development Platform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Complete Java ecosystem and enterprise development tools
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Java SE & EE</Badge>
                  <Badge variant="secondary">Oracle JDeveloper</Badge>
                  <Badge variant="secondary">Oracle JRockit</Badge>
                  <Badge variant="secondary">GraalVM</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">Enterprise Reporting</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Financial Services</li>
                    <li>• Retail & Consumer Goods</li>
                    <li>• Manufacturing</li>
                    <li>• Telecommunications</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Chief Data Officer</li>
                    <li>• Business Intelligence Manager</li>
                    <li>• Data Analytics Director</li>
                    <li>• Business Intelligence Analyst</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Competition from modern BI tools</li>
                    <li>• Data source connectivity limitations</li>
                    <li>• User experience vs. Tableau/Power BI</li>
                    <li>• Performance with large datasets</li>
                    <li>• Self-service adoption barriers</li>
                    <li>• Cost justification for licensing</li>
                    <li>• Dashboard design complexity</li>
                    <li>• Real-time analytics capabilities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-teal-500" />
                  Oracle Middleware
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Application server and integration middleware solutions
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">WebLogic Server</Badge>
                  <Badge variant="secondary">SOA Suite</Badge>
                  <Badge variant="secondary">API Gateway</Badge>
                  <Badge variant="secondary">Identity Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Banking & Financial Services</li>
                    <li>• Insurance Companies</li>
                    <li>• Government Agencies</li>
                    <li>• Large Enterprise IT</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Middleware Administrator</li>
                    <li>• Application Server Administrator</li>
                    <li>• Integration Architect</li>
                    <li>• Enterprise Security Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Legacy technology modernization pressure</li>
                    <li>• Container and microservices adoption</li>
                    <li>• Cloud-native architecture migration</li>
                    <li>• High licensing and support costs</li>
                    <li>• Skills gap for Oracle technologies</li>
                    <li>• Competition from open-source alternatives</li>
                    <li>• DevOps integration complexity</li>
                    <li>• Application performance optimization</li>
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