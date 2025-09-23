import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Monitor, Database, Shield, Cloud, Cpu, BarChart, Cog, Users, Target } from "lucide-react";

export default function DellUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-600 to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Dell Enterprise Hardware Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 23,547+ organizations using Dell enterprise hardware solutions. Target IT directors, system administrators, and infrastructure managers implementing Dell servers, workstations, and storage systems for business-critical operations.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">23,547</div>
                  <div className="text-sm text-white/80">Dell Enterprise Customers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">4.2M+</div>
                  <div className="text-sm text-white/80">Dell Devices Deployed</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">120+</div>
                  <div className="text-sm text-white/80">Countries Served</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Dell Hardware Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Dell Enterprise Hardware Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Dell hardware solutions for data centers, enterprise computing, and business applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-blue-500" />
                  Dell PowerEdge Servers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Rack-mount and tower servers for enterprise applications and virtualization
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">PowerEdge R750 Series</Badge>
                  <Badge variant="secondary">VMware vSphere</Badge>
                  <Badge variant="secondary">Hyper-V Virtualization</Badge>
                  <Badge variant="secondary">iDRAC Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large Enterprise Organizations</li>
                    <li>• Multi-national Corporations</li>
                    <li>• Fortune 500 Companies</li>
                    <li>• Global Technology Leaders</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• IT Director</li>
                    <li>• Systems Administrator</li>
                    <li>• Enterprise Architect</li>
                    <li>• Technology Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large-scale deployment and configuration challenges</li>
                    <li>• Integration with existing enterprise infrastructure</li>
                    <li>• User adoption and training across multiple locations</li>
                    <li>• Performance optimization for high-volume usage</li>
                    <li>• Security and compliance requirements</li>
                    <li>• License management and cost optimization</li>
                    <li>• Vendor relationship and support coordination</li>
                    <li>• Change management and organizational adoption</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-green-500" />
                  Business Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Dell implementation for business operations and organizational efficiency
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Process Optimization</Badge>
                  <Badge variant="secondary">Workflow Management</Badge>
                  <Badge variant="secondary">Business Intelligence</Badge>
                  <Badge variant="secondary">Analytics</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Manufacturing & Production</li>
                    <li>• Service Industries</li>
                    <li>• Consulting & Professional Services</li>
                    <li>• Retail & Distribution</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Operations Manager</li>
                    <li>• Business Analyst</li>
                    <li>• Process Improvement Specialist</li>
                    <li>• Department Head</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Business process optimization and automation</li>
                    <li>• Data quality and consistency management</li>
                    <li>• Reporting and analytics requirements</li>
                    <li>• Cross-department collaboration and workflows</li>
                    <li>• Performance metrics and KPI tracking</li>
                    <li>• Regulatory compliance and audit trails</li>
                    <li>• Custom configuration and business rules</li>
                    <li>• Integration with third-party business applications</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cog className="w-6 h-6 text-purple-500" />
                  Technical Administration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Dell implementation for technical administration and organizational efficiency
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">System Administration</Badge>
                  <Badge variant="secondary">Configuration Management</Badge>
                  <Badge variant="secondary">Performance Tuning</Badge>
                  <Badge variant="secondary">Maintenance</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Technology Service Providers</li>
                    <li>• Managed Service Companies</li>
                    <li>• IT Consulting Firms</li>
                    <li>• System Integrators</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• System Administrator</li>
                    <li>• Technical Lead</li>
                    <li>• DevOps Engineer</li>
                    <li>• Infrastructure Specialist</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• System performance monitoring and optimization</li>
                    <li>• Backup and disaster recovery planning</li>
                    <li>• Security patch management and updates</li>
                    <li>• User access control and permissions</li>
                    <li>• System monitoring and alerting</li>
                    <li>• Capacity planning and resource allocation</li>
                    <li>• Troubleshooting and issue resolution</li>
                    <li>• Documentation and knowledge management</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-orange-500" />
                  User Experience & Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Dell implementation for user experience & training and organizational efficiency
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">User Training</Badge>
                  <Badge variant="secondary">Change Management</Badge>
                  <Badge variant="secondary">Support Services</Badge>
                  <Badge variant="secondary">Adoption Programs</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Education & Training Organizations</li>
                    <li>• Human Resources Departments</li>
                    <li>• Corporate Training</li>
                    <li>• End-user Support Teams</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Training Manager</li>
                    <li>• Change Management Specialist</li>
                    <li>• User Experience Manager</li>
                    <li>• Support Team Lead</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• User adoption and engagement strategies</li>
                    <li>• Training program development and delivery</li>
                    <li>• Change management and resistance handling</li>
                    <li>• Support ticket management and resolution</li>
                    <li>• User feedback collection and analysis</li>
                    <li>• Documentation and help resource creation</li>
                    <li>• Multi-level user training programs</li>
                    <li>• Measuring training effectiveness and ROI</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-red-500" />
                  Compliance & Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Dell implementation for compliance & security and organizational efficiency
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Security Management</Badge>
                  <Badge variant="secondary">Compliance Monitoring</Badge>
                  <Badge variant="secondary">Risk Assessment</Badge>
                  <Badge variant="secondary">Audit Preparation</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Regulated Industries</li>
                    <li>• Financial Services</li>
                    <li>• Healthcare Organizations</li>
                    <li>• Government Agencies</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Compliance Officer</li>
                    <li>• Security Administrator</li>
                    <li>• Risk Manager</li>
                    <li>• Audit Specialist</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Regulatory compliance and reporting requirements</li>
                    <li>• Data security and privacy protection</li>
                    <li>• Access control and user authentication</li>
                    <li>• Audit trail and logging management</li>
                    <li>• Risk assessment and mitigation strategies</li>
                    <li>• Security policy enforcement</li>
                    <li>• Vendor security assessment and management</li>
                    <li>• Incident response and recovery procedures</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-teal-500" />
                  Strategic Planning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Dell implementation for strategic planning and organizational efficiency
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Strategic Planning</Badge>
                  <Badge variant="secondary">Technology Roadmap</Badge>
                  <Badge variant="secondary">Budget Planning</Badge>
                  <Badge variant="secondary">ROI Analysis</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Strategic Planning Organizations</li>
                    <li>• Executive Leadership Teams</li>
                    <li>• IT Strategy Departments</li>
                    <li>• Business Development Teams</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Strategic Planning Manager</li>
                    <li>• CTO/CIO</li>
                    <li>• Business Strategy Analyst</li>
                    <li>• IT Strategy Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Long-term technology roadmap planning</li>
                    <li>• Budget allocation and cost justification</li>
                    <li>• ROI measurement and tracking</li>
                    <li>• Technology alignment with business objectives</li>
                    <li>• Vendor evaluation and selection criteria</li>
                    <li>• Risk assessment for strategic investments</li>
                    <li>• Stakeholder alignment and buy-in</li>
                    <li>• Market trend analysis and forecasting</li>
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