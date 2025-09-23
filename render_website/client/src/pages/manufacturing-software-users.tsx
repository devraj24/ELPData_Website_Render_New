import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, Cog, BarChart, Truck, Shield, Wrench } from "lucide-react";

export default function ManufacturingSoftwareUsersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-700 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Manufacturing ERP & MES Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 34,219+ manufacturing organizations implementing production software. Target plant managers, production engineers, and operations directors using MES, PLM, CAD/CAM, and Industry 4.0 automation systems.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">34,219+</div>
                  <div className="text-sm text-white/80">Manufacturing Facilities</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">1.2M+</div>
                  <div className="text-sm text-white/80">Production Workers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">89%</div>
                  <div className="text-sm text-white/80">Quality Improvement</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Software Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Manufacturing Software Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing manufacturing software for production control, quality management, and operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Factory className="w-6 h-6 text-gray-500" />
                  Manufacturing Execution Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Shop floor control, production tracking, and real-time manufacturing operations
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Shop Floor Control</Badge>
                  <Badge variant="secondary">Production Tracking</Badge>
                  <Badge variant="secondary">Work Order Management</Badge>
                  <Badge variant="secondary">Labor Tracking</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Automotive Manufacturing</li>
                    <li>• Electronics Assembly</li>
                    <li>• Food & Beverage Production</li>
                    <li>• Pharmaceutical Manufacturing</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Plant Manager</li>
                    <li>• Manufacturing Engineering Manager</li>
                    <li>• Production Supervisor</li>
                    <li>• Operations Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Integration with legacy machinery</li>
                    <li>• Real-time data collection setup</li>
                    <li>• Operator training and adoption</li>
                    <li>• Production line downtime minimization</li>
                    <li>• Scalability across multiple production lines</li>
                    <li>• Compliance with industry standards</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cog className="w-6 h-6 text-blue-500" />
                  CAD/CAM Software
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Computer-aided design and manufacturing for product development and toolpath generation
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">3D Design & Modeling</Badge>
                  <Badge variant="secondary">CNC Programming</Badge>
                  <Badge variant="secondary">Simulation & Analysis</Badge>
                  <Badge variant="secondary">Toolpath Generation</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Aerospace & Defense</li>
                    <li>• Precision Machining</li>
                    <li>• Tool & Die Manufacturing</li>
                    <li>• Medical Device Manufacturing</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Design Engineering Manager</li>
                    <li>• Manufacturing Engineer</li>
                    <li>• CNC Programming Manager</li>
                    <li>• Product Development Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex geometry modeling requirements</li>
                    <li>• CNC machine compatibility</li>
                    <li>• Designer training and certification</li>
                    <li>• File format standardization</li>
                    <li>• Version control and collaboration</li>
                    <li>• Software licensing and seat management</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-green-500" />
                  Quality Management Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Statistical process control, quality assurance, and compliance management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Statistical Process Control</Badge>
                  <Badge variant="secondary">Inspection Management</Badge>
                  <Badge variant="secondary">Corrective Actions</Badge>
                  <Badge variant="secondary">Compliance Tracking</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• ISO-Certified Manufacturers</li>
                    <li>• Medical Device Companies</li>
                    <li>• Pharmaceutical Production</li>
                    <li>• Chemical Manufacturing</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Quality Manager</li>
                    <li>• Quality Assurance Director</li>
                    <li>• Compliance Officer</li>
                    <li>• Manufacturing Quality Engineer</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• ISO 9001 and industry-specific compliance</li>
                    <li>• Statistical analysis setup and training</li>
                    <li>• Non-conformance tracking workflows</li>
                    <li>• Supplier quality management</li>
                    <li>• Audit trail and documentation requirements</li>
                    <li>• Integration with inspection equipment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="w-6 h-6 text-orange-500" />
                  Supply Chain Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Inventory optimization, demand planning, and supplier management for manufacturing
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Inventory Optimization</Badge>
                  <Badge variant="secondary">Demand Planning</Badge>
                  <Badge variant="secondary">Supplier Management</Badge>
                  <Badge variant="secondary">Materials Planning</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Consumer Goods Manufacturing</li>
                    <li>• Industrial Equipment</li>
                    <li>• Textile & Apparel</li>
                    <li>• Building Materials</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Supply Chain Director</li>
                    <li>• Materials Manager</li>
                    <li>• Procurement Manager</li>
                    <li>• Demand Planning Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex bill of materials management</li>
                    <li>• Multi-location inventory synchronization</li>
                    <li>• Supplier performance tracking</li>
                    <li>• Demand forecasting accuracy</li>
                    <li>• Lead time optimization</li>
                    <li>• Cost reduction initiatives</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-purple-500" />
                  Maintenance Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Preventive maintenance, equipment monitoring, and asset lifecycle management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Preventive Maintenance</Badge>
                  <Badge variant="secondary">Equipment Monitoring</Badge>
                  <Badge variant="secondary">Work Order Management</Badge>
                  <Badge variant="secondary">Asset Tracking</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Heavy Manufacturing</li>
                    <li>• Process Industries</li>
                    <li>• Oil & Gas Refineries</li>
                    <li>• Power Generation</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Maintenance Manager</li>
                    <li>• Reliability Engineer</li>
                    <li>• Asset Management Director</li>
                    <li>• Plant Engineering Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Predictive maintenance algorithm development</li>
                    <li>• Sensor data integration and analysis</li>
                    <li>• Maintenance scheduling optimization</li>
                    <li>• Spare parts inventory management</li>
                    <li>• Equipment downtime minimization</li>
                    <li>• Maintenance cost tracking and reduction</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-teal-500" />
                  Production Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  OEE tracking, performance dashboards, and manufacturing intelligence
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">OEE Tracking</Badge>
                  <Badge variant="secondary">Performance Dashboards</Badge>
                  <Badge variant="secondary">Production KPIs</Badge>
                  <Badge variant="secondary">Manufacturing Intelligence</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Lean Manufacturing Organizations</li>
                    <li>• Continuous Improvement Focused</li>
                    <li>• Multi-Plant Operations</li>
                    <li>• High-Volume Production</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Manufacturing Analytics Manager</li>
                    <li>• Continuous Improvement Manager</li>
                    <li>• Operations Excellence Director</li>
                    <li>• Business Intelligence Analyst</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Real-time data collection from diverse sources</li>
                    <li>• OEE calculation standardization</li>
                    <li>• Performance benchmark establishment</li>
                    <li>• Root cause analysis automation</li>
                    <li>• Cross-functional dashboard design</li>
                    <li>• Continuous improvement workflow integration</li>
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