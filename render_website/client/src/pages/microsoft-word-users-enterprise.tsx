import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, Cloud, Shield, Building, Zap } from "lucide-react";

export default function MicrosoftWordUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Microsoft Word Enterprise Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 1.2B+ Microsoft Word users across enterprise organizations. Target IT administrators, content managers, and business professionals implementing Microsoft 365, document automation, and collaborative writing solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">1.2B+</div>
                  <div className="text-sm text-white/80">Microsoft Word Users</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">300M+</div>
                  <div className="text-sm text-white/80">Microsoft 365 Subscribers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">78%</div>
                  <div className="text-sm text-white/80">Enterprise Document Market</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Microsoft Word Implementation Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Microsoft Word Enterprise Implementation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Microsoft Word for document creation, collaboration, compliance, and business process automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-6 h-6 text-blue-500" />
                  Enterprise Document Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Large-scale document creation and management with SharePoint integration
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">SharePoint Integration</Badge>
                  <Badge variant="secondary">Document Templates</Badge>
                  <Badge variant="secondary">Version Control</Badge>
                  <Badge variant="secondary">Metadata Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large Corporations & Fortune 500</li>
                    <li>• Government Agencies</li>
                    <li>• Healthcare Organizations</li>
                    <li>• Legal & Professional Services</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• IT Director</li>
                    <li>• SharePoint Administrator</li>
                    <li>• Document Management Specialist</li>
                    <li>• Compliance Officer</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large-scale template standardization</li>
                    <li>• Document migration from legacy systems</li>
                    <li>• User training and change management</li>
                    <li>• Compliance and audit trail requirements</li>
                    <li>• Integration with enterprise content management</li>
                    <li>• Security and access control policies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-green-500" />
                  Collaborative Writing Teams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Real-time collaboration and co-authoring for team-based document creation
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Real-time Co-authoring</Badge>
                  <Badge variant="secondary">Comments & Reviews</Badge>
                  <Badge variant="secondary">Track Changes</Badge>
                  <Badge variant="secondary">Teams Integration</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Marketing & Advertising Agencies</li>
                    <li>• Consulting Firms</li>
                    <li>• Research & Development</li>
                    <li>• Educational Institutions</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Content Manager</li>
                    <li>• Creative Director</li>
                    <li>• Project Manager</li>
                    <li>• Team Lead</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Collaboration workflow establishment</li>
                    <li>• Version conflict resolution procedures</li>
                    <li>• Review and approval process setup</li>
                    <li>• External stakeholder sharing policies</li>
                    <li>• Mobile device access and editing</li>
                    <li>• Notification and communication management</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-purple-500" />
                  Document Automation & Templates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Automated document generation using templates, macros, and mail merge
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Template Automation</Badge>
                  <Badge variant="secondary">Mail Merge</Badge>
                  <Badge variant="secondary">VBA Macros</Badge>
                  <Badge variant="secondary">Content Controls</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Insurance & Financial Services</li>
                    <li>• Legal Firms & Law Offices</li>
                    <li>• Human Resources Departments</li>
                    <li>• Contract Management Organizations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Business Process Analyst</li>
                    <li>• Office Automation Specialist</li>
                    <li>• Operations Manager</li>
                    <li>• Legal Document Specialist</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex template design and testing</li>
                    <li>• Data source integration for automation</li>
                    <li>• Macro security and deployment policies</li>
                    <li>• User training on automated processes</li>
                    <li>• Quality control and error handling</li>
                    <li>• Maintenance of automated solutions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-orange-500" />
                  Compliance & Regulatory Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Regulated document creation with compliance tracking and audit capabilities
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Document Classification</Badge>
                  <Badge variant="secondary">Retention Policies</Badge>
                  <Badge variant="secondary">Audit Trails</Badge>
                  <Badge variant="secondary">Information Protection</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Pharmaceutical & Life Sciences</li>
                    <li>• Financial Services & Banking</li>
                    <li>• Government & Public Sector</li>
                    <li>• Healthcare & Medical Devices</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Compliance Manager</li>
                    <li>• Regulatory Affairs Specialist</li>
                    <li>• Quality Assurance Manager</li>
                    <li>• Risk Management Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Regulatory compliance requirements mapping</li>
                    <li>• Document classification and labeling setup</li>
                    <li>• Retention policy automation</li>
                    <li>• Access control and permission management</li>
                    <li>• Audit trail configuration and reporting</li>
                    <li>• Data loss prevention integration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-teal-500" />
                  Cloud-Based Document Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Microsoft 365 cloud integration with OneDrive and online collaboration
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">OneDrive Integration</Badge>
                  <Badge variant="secondary">Word Online</Badge>
                  <Badge variant="secondary">Cloud Sync</Badge>
                  <Badge variant="secondary">Mobile Access</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Remote & Hybrid Workforces</li>
                    <li>• Small & Medium Businesses</li>
                    <li>• Distributed Teams</li>
                    <li>• Mobile-First Organizations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Cloud Services Manager</li>
                    <li>• Remote Work Coordinator</li>
                    <li>• Microsoft 365 Administrator</li>
                    <li>• Digital Workplace Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Internet connectivity and performance issues</li>
                    <li>• Data synchronization conflicts</li>
                    <li>• Offline access and capability planning</li>
                    <li>• Cloud security and data governance</li>
                    <li>• License management and cost optimization</li>
                    <li>• Cross-platform compatibility testing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-indigo-500" />
                  Academic & Research Writing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced features for academic writing, research papers, and publications
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Citation Management</Badge>
                  <Badge variant="secondary">Bibliography Tools</Badge>
                  <Badge variant="secondary">Research Tools</Badge>
                  <Badge variant="secondary">Academic Templates</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Universities & Academic Institutions</li>
                    <li>• Research Organizations</li>
                    <li>• Publishing Companies</li>
                    <li>• Think Tanks & Policy Organizations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Academic Technology Manager</li>
                    <li>• Research Director</li>
                    <li>• Library Systems Manager</li>
                    <li>• Publication Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Citation style management and automation</li>
                    <li>• Large document performance optimization</li>
                    <li>• Collaboration with external researchers</li>
                    <li>• Figure and table formatting requirements</li>
                    <li>• Journal submission format compliance</li>
                    <li>• Reference management system integration</li>
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