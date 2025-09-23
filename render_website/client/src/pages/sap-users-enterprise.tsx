import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Factory, Users, BarChart, Cog, Building } from "lucide-react";

export default function SAPEnterpriseUsersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">SAP Enterprise Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 368.7K+ organizations running SAP enterprise software. Target SAP functional consultants, basis administrators, and ERP project managers implementing S/4HANA, SuccessFactors, and SAP modules across global enterprises.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">368.7K</div>
                  <div className="text-sm text-white/80">SAP Installations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">$12B</div>
                  <div className="text-sm text-white/80">SAP Investment Annually</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">440K+</div>
                  <div className="text-sm text-white/80">SAP Professionals</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SAP Implementation Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">SAP Implementation Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing SAP enterprise solutions for finance, supply chain, human resources, and business intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-blue-500" />
                  SAP S/4HANA Migration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Next-generation ERP migration from SAP ECC to S/4HANA digital core
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">ECC to S/4HANA Migration</Badge>
                  <Badge variant="secondary">HANA Database Conversion</Badge>
                  <Badge variant="secondary">Fiori User Experience</Badge>
                  <Badge variant="secondary">Embedded Analytics</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Fortune 500 Enterprises</li>
                    <li>• Manufacturing & Automotive</li>
                    <li>• Oil & Gas Companies</li>
                    <li>• Utilities & Energy</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• SAP Program Manager</li>
                    <li>• SAP Technical Lead</li>
                    <li>• ERP Transformation Director</li>
                    <li>• SAP Basis Administrator</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Custom code remediation and simplification</li>
                    <li>• Data migration complexity from legacy systems</li>
                    <li>• Change management for new Fiori interface</li>
                    <li>• Integration with non-SAP systems</li>
                    <li>• Performance optimization on HANA platform</li>
                    <li>• Budget justification for multi-million projects</li>
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
                  Cloud-based human capital management for talent acquisition and employee development
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Employee Central</Badge>
                  <Badge variant="secondary">Recruiting Management</Badge>
                  <Badge variant="secondary">Performance & Goals</Badge>
                  <Badge variant="secondary">Learning Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Global Corporations (10K+ employees)</li>
                    <li>• Professional Services</li>
                    <li>• Technology Companies</li>
                    <li>• Financial Services</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Human Resources Officer</li>
                    <li>• HR Technology Director</li>
                    <li>• Talent Management Director</li>
                    <li>• HRIS Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Employee data migration from legacy HRIS</li>
                    <li>• Global compliance with local labor laws</li>
                    <li>• Manager and employee adoption training</li>
                    <li>• Integration with payroll and benefits systems</li>
                    <li>• Custom workflow configuration</li>
                    <li>• Multi-language and localization requirements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Factory className="w-6 h-6 text-purple-500" />
                  SAP Manufacturing Execution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Manufacturing execution and production planning with SAP PP and SAP MES
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Production Planning (PP)</Badge>
                  <Badge variant="secondary">Manufacturing Execution (MES)</Badge>
                  <Badge variant="secondary">Quality Management (QM)</Badge>
                  <Badge variant="secondary">Plant Maintenance (PM)</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Automotive Manufacturing</li>
                    <li>• Chemical & Process Industries</li>
                    <li>• Food & Beverage Production</li>
                    <li>• Pharmaceutical Manufacturing</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• VP of Manufacturing</li>
                    <li>• SAP PP Functional Consultant</li>
                    <li>• Plant Manager</li>
                    <li>• Production Planning Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex bill of materials management</li>
                    <li>• Shop floor data collection integration</li>
                    <li>• Master data accuracy and maintenance</li>
                    <li>• Real-time production visibility requirements</li>
                    <li>• Integration with manufacturing equipment</li>
                    <li>• Capacity planning and scheduling optimization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-orange-500" />
                  SAP Analytics Cloud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Business intelligence and planning with SAP Analytics Cloud and BW/4HANA
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Business Intelligence</Badge>
                  <Badge variant="secondary">Financial Planning</Badge>
                  <Badge variant="secondary">Predictive Analytics</Badge>
                  <Badge variant="secondary">Data Visualization</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Financial Services</li>
                    <li>• Retail & Consumer Goods</li>
                    <li>• Healthcare Organizations</li>
                    <li>• Government Agencies</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Data Officer</li>
                    <li>• SAP BI Consultant</li>
                    <li>• Business Intelligence Manager</li>
                    <li>• Financial Planning & Analysis Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data source integration complexity</li>
                    <li>• Historical data migration from SAP BW</li>
                    <li>• Self-service analytics user training</li>
                    <li>• Data governance and security setup</li>
                    <li>• Performance optimization for large datasets</li>
                    <li>• Custom dashboard and report development</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cog className="w-6 h-6 text-teal-500" />
                  SAP Ariba Procurement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cloud-based procurement and supplier management with SAP Ariba solutions
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Sourcing & Contracts</Badge>
                  <Badge variant="secondary">Supplier Management</Badge>
                  <Badge variant="secondary">Procurement</Badge>
                  <Badge variant="secondary">Invoice Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large Manufacturing Companies</li>
                    <li>• Government & Public Sector</li>
                    <li>• Healthcare Systems</li>
                    <li>• Construction & Engineering</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Procurement Officer</li>
                    <li>• Sourcing Director</li>
                    <li>• Supplier Relationship Manager</li>
                    <li>• Procurement Technology Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Supplier onboarding and network adoption</li>
                    <li>• Complex approval workflow configuration</li>
                    <li>• Integration with SAP ERP financials</li>
                    <li>• Change management for procurement teams</li>
                    <li>• Catalog management and maintenance</li>
                    <li>• Compliance with procurement regulations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-6 h-6 text-indigo-500" />
                  SAP Business One (SMB)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete ERP solution designed for small and medium-sized businesses
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Financial Management</Badge>
                  <Badge variant="secondary">Sales & CRM</Badge>
                  <Badge variant="secondary">Purchasing</Badge>
                  <Badge variant="secondary">Inventory Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Small Manufacturing Companies</li>
                    <li>• Distribution & Wholesale</li>
                    <li>• Professional Services</li>
                    <li>• Retail & Restaurant Chains</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Small Business Owner</li>
                    <li>• CFO / Finance Manager</li>
                    <li>• IT Manager</li>
                    <li>• Operations Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Limited IT resources and expertise</li>
                    <li>• Budget constraints for implementation</li>
                    <li>• Data migration from QuickBooks or Excel</li>
                    <li>• User training for multiple business functions</li>
                    <li>• Integration with existing applications</li>
                    <li>• Ongoing maintenance and support needs</li>
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