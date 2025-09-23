import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, Target, Building, Zap, Globe } from "lucide-react";

export default function MicrosoftWordUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12">
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
                  <div className="text-3xl font-bold text-white">95+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Microsoft Word Solutions Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">Microsoft Word Enterprise Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Microsoft Word across enterprise document management and collaboration workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-blue-500" />
                  Word Document Creation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional document creation and formatting for enterprise communications
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Document Templates</Badge>
                  <Badge variant="secondary">Advanced Formatting</Badge>
                  <Badge variant="secondary">Mail Merge</Badge>
                  <Badge variant="secondary">Version Control</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Legal Services & Law Firms</li>
                    <li>• Healthcare & Medical Practices</li>
                    <li>• Financial Services & Banking</li>
                    <li>• Government & Public Sector</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• IT Administrator</li>
                    <li>• Office Manager</li>
                    <li>• Document Control Specialist</li>
                    <li>• Executive Assistant</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Version compatibility across different Word versions</li>
                    <li>• Document collaboration and real-time editing</li>
                    <li>• Template standardization across departments</li>
                    <li>• Integration with document management systems</li>
                    <li>• License management and compliance tracking</li>
                    <li>• Security and access control for sensitive documents</li>
                    <li>• Mobile and remote access limitations</li>
                    <li>• Large document performance and memory usage</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-green-500" />
                  Collaboration Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Team collaboration and document sharing across enterprise environments
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Real-time Co-authoring</Badge>
                  <Badge variant="secondary">Comments & Reviews</Badge>
                  <Badge variant="secondary">Track Changes</Badge>
                  <Badge variant="secondary">SharePoint Integration</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Consulting & Professional Services</li>
                    <li>• Education & Academic Institutions</li>
                    <li>• Marketing & Advertising Agencies</li>
                    <li>• Research & Development Organizations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Collaboration Manager</li>
                    <li>• Project Manager</li>
                    <li>• Knowledge Management Specialist</li>
                    <li>• Content Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Concurrent editing conflicts and merge issues</li>
                    <li>• Network connectivity requirements for collaboration</li>
                    <li>• Comment resolution and approval workflows</li>
                    <li>• Document sharing permissions management</li>
                    <li>• Offline editing synchronization problems</li>
                    <li>• Large team collaboration scalability</li>
                    <li>• Integration with external collaboration tools</li>
                    <li>• Audit trails and compliance documentation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-purple-500" />
                  Enterprise Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Integration with enterprise systems and business applications
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Office 365 Integration</Badge>
                  <Badge variant="secondary">CRM Connectivity</Badge>
                  <Badge variant="secondary">Database Integration</Badge>
                  <Badge variant="secondary">Workflow Automation</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Manufacturing & Industrial</li>
                    <li>• Insurance & Risk Management</li>
                    <li>• Technology & Software Companies</li>
                    <li>• Pharmaceutical & Life Sciences</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Systems Integration Manager</li>
                    <li>• Enterprise Architect</li>
                    <li>• Business Process Analyst</li>
                    <li>• IT Solutions Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• API limitations and integration complexity</li>
                    <li>• Data synchronization across multiple systems</li>
                    <li>• Custom add-in development and maintenance</li>
                    <li>• Single sign-on (SSO) implementation</li>
                    <li>• Legacy system compatibility issues</li>
                    <li>• Automated workflow trigger reliability</li>
                    <li>• Cross-platform integration challenges</li>
                    <li>• Performance impact from multiple integrations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-6 h-6 text-orange-500" />
                  Enterprise Administration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Large-scale deployment and management across enterprise environments
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Group Policy Management</Badge>
                  <Badge variant="secondary">License Administration</Badge>
                  <Badge variant="secondary">Security Policies</Badge>
                  <Badge variant="secondary">Update Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large Enterprise Corporations</li>
                    <li>• Government Agencies</li>
                    <li>• Educational Institutions</li>
                    <li>• Healthcare Systems</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• IT Director</li>
                    <li>• Systems Administrator</li>
                    <li>• Desktop Support Manager</li>
                    <li>• Compliance Officer</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large-scale deployment and configuration</li>
                    <li>• License compliance and usage tracking</li>
                    <li>• Security policy enforcement and monitoring</li>
                    <li>• Update rollout and compatibility testing</li>
                    <li>• User training and support scalability</li>
                    <li>• Customization deployment across locations</li>
                    <li>• Performance monitoring and optimization</li>
                    <li>• Backup and disaster recovery planning</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-teal-500" />
                  Automation & Macros
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Document automation and custom macro development for efficiency
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">VBA Macros</Badge>
                  <Badge variant="secondary">Document Templates</Badge>
                  <Badge variant="secondary">Form Automation</Badge>
                  <Badge variant="secondary">Batch Processing</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Legal & Law Firms</li>
                    <li>• Accounting & Finance</li>
                    <li>• Real Estate & Property Management</li>
                    <li>• Human Resources & Recruitment</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Business Analyst</li>
                    <li>• Process Improvement Specialist</li>
                    <li>• VBA Developer</li>
                    <li>• Operations Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Macro security restrictions and policies</li>
                    <li>• VBA code maintenance and updates</li>
                    <li>• Cross-version macro compatibility</li>
                    <li>• Error handling and debugging complexity</li>
                    <li>• User training on automated processes</li>
                    <li>• Performance optimization for large operations</li>
                    <li>• Documentation and knowledge transfer</li>
                    <li>• Integration with modern automation tools</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-indigo-500" />
                  Cloud & Mobile Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cloud-based access and mobile document editing capabilities
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Word Online</Badge>
                  <Badge variant="secondary">Mobile Apps</Badge>
                  <Badge variant="secondary">Cloud Storage</Badge>
                  <Badge variant="secondary">Offline Sync</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Remote Work Organizations</li>
                    <li>• Consulting & Field Services</li>
                    <li>• Sales & Marketing Teams</li>
                    <li>• Distributed Teams & Startups</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Remote Work Coordinator</li>
                    <li>• Cloud Solutions Architect</li>
                    <li>• Mobile Device Manager</li>
                    <li>• Digital Workplace Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Internet connectivity requirements for cloud access</li>
                    <li>• Feature limitations in web and mobile versions</li>
                    <li>• Data residency and compliance concerns</li>
                    <li>• Offline editing synchronization conflicts</li>
                    <li>• Mobile device security and management</li>
                    <li>• Bandwidth usage and performance issues</li>
                    <li>• Cross-device formatting consistency</li>
                    <li>• Cloud storage costs and limitations</li>
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