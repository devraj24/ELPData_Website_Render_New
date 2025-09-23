import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Factory, TrendingUp, Users, DollarSign, Cog } from "lucide-react";

export default function SAPEnterpriseUsersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">SAP Enterprise Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 34,892+ large enterprises using SAP ERP, S/4HANA, and SuccessFactors. Target CFOs, CIOs, ERP managers, and business process owners managing complex enterprise operations.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">34,892</div>
                  <div className="text-sm text-white/80">Enterprise SAP Users</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">5.8M+</div>
                  <div className="text-sm text-white/80">Named Users</div>
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

      {/* SAP Modules Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">SAP Enterprise Modules</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing SAP across core business functions and enterprise processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-orange-500" />
                  SAP S/4HANA Finance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Core financial management with real-time analytics and reporting
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">General Ledger</Badge>
                  <Badge variant="secondary">Accounts Payable</Badge>
                  <Badge variant="secondary">Financial Reporting</Badge>
                  <Badge variant="secondary">Cash Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Manufacturing & Automotive</li>
                    <li>• Retail & Consumer Products</li>
                    <li>• Oil & Gas Energy</li>
                    <li>• Chemical & Pharmaceutical</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Financial Officer (CFO)</li>
                    <li>• Finance Director</li>
                    <li>• Controller</li>
                    <li>• SAP Finance Functional Lead</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex chart of accounts migration</li>
                    <li>• Real-time processing performance</li>
                    <li>• Multi-currency and multi-company setup</li>
                    <li>• Regulatory compliance requirements</li>
                    <li>• Historical data conversion complexity</li>
                    <li>• Integration with legacy financial systems</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Factory className="w-6 h-6 text-blue-500" />
                  SAP Manufacturing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Production planning, shop floor control, and supply chain management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Production Planning</Badge>
                  <Badge variant="secondary">Shop Floor Control</Badge>
                  <Badge variant="secondary">Quality Management</Badge>
                  <Badge variant="secondary">Materials Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Discrete Manufacturing</li>
                    <li>• Process Manufacturing</li>
                    <li>• Automotive Industry</li>
                    <li>• Aerospace & Defense</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• VP of Manufacturing</li>
                    <li>• Plant Manager</li>
                    <li>• Production Manager</li>
                    <li>• Supply Chain Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex bill of materials setup</li>
                    <li>• Shop floor data collection integration</li>
                    <li>• Capacity planning optimization</li>
                    <li>• Quality process standardization</li>
                    <li>• Real-time inventory tracking</li>
                    <li>• Multi-plant coordination</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-green-500" />
                  SAP SuccessFactors HR
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cloud-based human capital management and workforce analytics
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Employee Central</Badge>
                  <Badge variant="secondary">Performance Management</Badge>
                  <Badge variant="secondary">Learning Management</Badge>
                  <Badge variant="secondary">Compensation</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large Enterprise Organizations</li>
                    <li>• Global Corporations</li>
                    <li>• Professional Services</li>
                    <li>• Financial Services</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Human Resources Officer</li>
                    <li>• HR Director</li>
                    <li>• HRIS Manager</li>
                    <li>• Talent Management Lead</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Global employee data migration</li>
                    <li>• Complex organizational hierarchies</li>
                    <li>• Payroll system integration</li>
                    <li>• Multi-country compliance requirements</li>
                    <li>• Performance review process design</li>
                    <li>• Change management for HR processes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                  SAP Analytics Cloud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Enterprise planning, analytics, and predictive intelligence platform
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Financial Planning</Badge>
                  <Badge variant="secondary">Predictive Analytics</Badge>
                  <Badge variant="secondary">Dashboard Creation</Badge>
                  <Badge variant="secondary">Data Visualization</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Financial Services</li>
                    <li>• Healthcare & Life Sciences</li>
                    <li>• Technology Companies</li>
                    <li>• Public Sector</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Data Officer</li>
                    <li>• Business Intelligence Manager</li>
                    <li>• Financial Planning & Analysis Lead</li>
                    <li>• Data Analytics Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data source connectivity and quality</li>
                    <li>• Complex planning model design</li>
                    <li>• User adoption and training</li>
                    <li>• Performance optimization for large datasets</li>
                    <li>• Integration with existing BI tools</li>
                    <li>• Governance and security setup</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-teal-500" />
                  SAP HANA Database
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  In-memory database platform powering real-time analytics and applications
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">In-Memory Computing</Badge>
                  <Badge variant="secondary">Real-Time Analytics</Badge>
                  <Badge variant="secondary">Data Virtualization</Badge>
                  <Badge variant="secondary">Advanced Analytics</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large Enterprise (Fortune 1000)</li>
                    <li>• Banking & Financial Services</li>
                    <li>• Telecommunications</li>
                    <li>• Utilities & Energy</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Technology Officer</li>
                    <li>• Database Administrator</li>
                    <li>• SAP Basis Administrator</li>
                    <li>• Enterprise Architect</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• High memory and infrastructure costs</li>
                    <li>• Complex data migration strategies</li>
                    <li>• Performance tuning expertise requirements</li>
                    <li>• Backup and recovery planning</li>
                    <li>• High availability configuration</li>
                    <li>• Specialized skill set requirements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cog className="w-6 h-6 text-indigo-500" />
                  SAP Basis Administration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Technical foundation and system administration for SAP landscapes
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">System Administration</Badge>
                  <Badge variant="secondary">Performance Monitoring</Badge>
                  <Badge variant="secondary">Transport Management</Badge>
                  <Badge variant="secondary">Security Administration</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• All SAP-using Organizations</li>
                    <li>• IT Service Providers</li>
                    <li>• SAP Consulting Firms</li>
                    <li>• Managed Service Providers</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• SAP Basis Administrator</li>
                    <li>• IT Infrastructure Manager</li>
                    <li>• SAP Technical Lead</li>
                    <li>• System Administrator</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex landscape management</li>
                    <li>• System performance optimization</li>
                    <li>• Patch and upgrade management</li>
                    <li>• Security and authorization management</li>
                    <li>• Disaster recovery planning</li>
                    <li>• Multi-system transport coordination</li>
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