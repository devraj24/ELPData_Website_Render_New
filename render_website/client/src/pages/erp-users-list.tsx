import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Factory, DollarSign, Users, BarChart, Cog } from "lucide-react";

export default function ERPUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-indigo-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Enterprise ERP System Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white">
              Connect with 41,287+ organizations using enterprise resource planning systems. Target ERP consultants, CFOs, and operations directors implementing SAP, Oracle ERP, Microsoft Dynamics, and NetSuite for integrated business processes.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">41,287+</div>
                  <div className="text-sm text-white/80">ERP Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">12.5M+</div>
                  <div className="text-sm text-white/80">ERP End Users</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">$2.1B</div>
                  <div className="text-sm text-white/80">Annual ERP Investment</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Module Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">ERP Module Implementation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing ERP systems for integrated business process management and operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-blue-500" />
                  Financial Management ERP
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Core financial processes including GL, AP, AR, and financial reporting
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">General Ledger</Badge>
                  <Badge variant="secondary">Accounts Payable</Badge>
                  <Badge variant="secondary">Financial Reporting</Badge>
                  <Badge variant="secondary">Budget Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Financial Services & Banking</li>
                    <li>• Public Accounting Firms</li>
                    <li>• Government & Non-Profit</li>
                    <li>• Real Estate & Property Management</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Financial Officer (CFO)</li>
                    <li>• Finance Director</li>
                    <li>• Controller</li>
                    <li>• Accounting Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex chart of accounts design</li>
                    <li>• Multi-entity consolidation requirements</li>
                    <li>• Regulatory compliance and reporting</li>
                    <li>• Historical data migration accuracy</li>
                    <li>• Month-end close process optimization</li>
                    <li>• Audit trail and internal controls</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Factory className="w-6 h-6 text-green-500" />
                  Manufacturing ERP
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Production planning, inventory management, and shop floor control
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Production Planning</Badge>
                  <Badge variant="secondary">Inventory Management</Badge>
                  <Badge variant="secondary">Bill of Materials</Badge>
                  <Badge variant="secondary">Quality Control</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Automotive Manufacturing</li>
                    <li>• Electronics & Components</li>
                    <li>• Food & Beverage Production</li>
                    <li>• Aerospace & Defense</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
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
                    <li>• Production scheduling optimization</li>
                    <li>• Quality process standardization</li>
                    <li>• Inventory accuracy maintenance</li>
                    <li>• Multi-location coordination</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-purple-500" />
                  Human Resources ERP
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Employee management, payroll processing, and talent management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Payroll Processing</Badge>
                  <Badge variant="secondary">Employee Records</Badge>
                  <Badge variant="secondary">Benefits Administration</Badge>
                  <Badge variant="secondary">Time & Attendance</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large Enterprises (5000+ employees)</li>
                    <li>• Healthcare Systems</li>
                    <li>• Educational Institutions</li>
                    <li>• Government Agencies</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Human Resources Officer</li>
                    <li>• HR Director</li>
                    <li>• Payroll Manager</li>
                    <li>• HRIS Administrator</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex payroll tax calculations</li>
                    <li>• Multi-state/country compliance</li>
                    <li>• Employee self-service adoption</li>
                    <li>• Benefits enrollment automation</li>
                    <li>• Performance review workflows</li>
                    <li>• Data privacy and security requirements</li>
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