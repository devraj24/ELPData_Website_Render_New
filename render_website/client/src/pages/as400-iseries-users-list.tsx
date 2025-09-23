import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Database, Shield, Settings, Code, Monitor } from "lucide-react";

export default function AS400iSeriesUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">IBM AS/400 & Power Systems Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 150,000+ organizations using IBM Power Systems (AS/400, iSeries, System i). Target RPG programmers, system administrators, and IT managers maintaining mission-critical IBM i applications in manufacturing and finance.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">150K+</div>
                  <div className="text-sm text-white/80">IBM i Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">320K+</div>
                  <div className="text-sm text-white/80">IBM i Professionals</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">65+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AS400 iSeries Solutions Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">IBM AS/400 & iSeries Enterprise Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations maintaining and modernizing IBM AS/400 and iSeries platforms for critical business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-blue-500" />
                  IBM i Operating System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Core operating system for business applications and enterprise workloads
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">High Availability</Badge>
                  <Badge variant="secondary">Integrated Database</Badge>
                  <Badge variant="secondary">Security Features</Badge>
                  <Badge variant="secondary">LPAR Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Manufacturing & Distribution</li>
                    <li>• Financial Services & Banking</li>
                    <li>• Government & Public Sector</li>
                    <li>• Healthcare & Insurance</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• AS/400 System Administrator</li>
                    <li>• IBM i Systems Manager</li>
                    <li>• Mainframe Operations Specialist</li>
                    <li>• Legacy Systems Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Finding skilled AS/400 administrators and developers</li>
                    <li>• Legacy application modernization planning</li>
                    <li>• Hardware refresh and migration strategies</li>
                    <li>• Integration with modern cloud and web systems</li>
                    <li>• Backup and disaster recovery for critical systems</li>
                    <li>• Performance optimization for aging hardware</li>
                    <li>• Security updates and patch management</li>
                    <li>• Knowledge transfer and documentation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-green-500" />
                  DB2 for i Database
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Integrated relational database management system for business data
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">SQL Processing</Badge>
                  <Badge variant="secondary">Data Integrity</Badge>
                  <Badge variant="secondary">Query Performance</Badge>
                  <Badge variant="secondary">Backup & Recovery</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Retail & E-commerce</li>
                    <li>• Supply Chain & Logistics</li>
                    <li>• Energy & Utilities</li>
                    <li>• Transportation & Shipping</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• DB2 Database Administrator</li>
                    <li>• Data Management Specialist</li>
                    <li>• Business Intelligence Analyst</li>
                    <li>• Report Developer</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Query optimization and performance tuning</li>
                    <li>• Data archiving and storage management</li>
                    <li>• Integration with modern analytics tools</li>
                    <li>• Database migration and upgrade planning</li>
                    <li>• Real-time data replication setup</li>
                    <li>• SQL skills development for legacy programmers</li>
                    <li>• Data governance and compliance tracking</li>
                    <li>• Backup strategy optimization for large datasets</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-purple-500" />
                  Security & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Enterprise security features and regulatory compliance management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Object Level Security</Badge>
                  <Badge variant="secondary">User Authentication</Badge>
                  <Badge variant="secondary">Audit Logging</Badge>
                  <Badge variant="secondary">Encryption</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Financial Services & Credit Unions</li>
                    <li>• Healthcare & Medical Records</li>
                    <li>• Government & Defense</li>
                    <li>• Legal & Professional Services</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Security Administrator</li>
                    <li>• Compliance Officer</li>
                    <li>• IT Security Manager</li>
                    <li>• Risk Management Specialist</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex authorization and permission management</li>
                    <li>• Audit trail configuration and monitoring</li>
                    <li>• Compliance reporting automation</li>
                    <li>• User access review and certification</li>
                    <li>• Integration with enterprise identity management</li>
                    <li>• Security policy enforcement across applications</li>
                    <li>• Vulnerability assessment and remediation</li>
                    <li>• Data encryption implementation and key management</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-6 h-6 text-orange-500" />
                  System Administration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive system management and operational administration
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Job Scheduling</Badge>
                  <Badge variant="secondary">System Monitoring</Badge>
                  <Badge variant="secondary">Performance Management</Badge>
                  <Badge variant="secondary">User Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large Enterprise Organizations</li>
                    <li>• Multi-location Corporations</li>
                    <li>• Service Providers</li>
                    <li>• Data Centers & Hosting</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Systems Operations Manager</li>
                    <li>• IBM i Technical Lead</li>
                    <li>• Infrastructure Administrator</li>
                    <li>• Technical Support Specialist</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Automated job scheduling and error handling</li>
                    <li>• System performance monitoring and alerting</li>
                    <li>• Capacity planning and resource allocation</li>
                    <li>• Hardware maintenance scheduling and coordination</li>
                    <li>• Software patch testing and deployment</li>
                    <li>• User account provisioning and deprovisioning</li>
                    <li>• System backup verification and restoration testing</li>
                    <li>• Documentation maintenance and knowledge sharing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-6 h-6 text-teal-500" />
                  Application Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Business application development using RPG, COBOL, and modern tools
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">RPG Programming</Badge>
                  <Badge variant="secondary">COBOL Development</Badge>
                  <Badge variant="secondary">SQL Integration</Badge>
                  <Badge variant="secondary">Web Services</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Software Development Companies</li>
                    <li>• Custom Application Providers</li>
                    <li>• ERP Implementation Partners</li>
                    <li>• Business Solution Consultants</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• RPG Developer</li>
                    <li>• COBOL Programmer</li>
                    <li>• Application Architect</li>
                    <li>• Business Analyst</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Legacy code modernization and refactoring</li>
                    <li>• Finding skilled RPG and COBOL developers</li>
                    <li>• Integration with modern web and mobile interfaces</li>
                    <li>• Version control and development lifecycle management</li>
                    <li>• Testing frameworks and automated testing setup</li>
                    <li>• Documentation of legacy business logic</li>
                    <li>• Performance optimization of legacy applications</li>
                    <li>• Migration planning to modern platforms</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="w-6 h-6 text-indigo-500" />
                  Modernization & Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Platform modernization and integration with contemporary systems
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">API Development</Badge>
                  <Badge variant="secondary">Cloud Integration</Badge>
                  <Badge variant="secondary">Web Enablement</Badge>
                  <Badge variant="secondary">Mobile Access</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Digital Transformation Organizations</li>
                    <li>• Hybrid Cloud Adopters</li>
                    <li>• API-driven Businesses</li>
                    <li>• Modern Application Developers</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Modernization Architect</li>
                    <li>• Integration Specialist</li>
                    <li>• Digital Transformation Manager</li>
                    <li>• Cloud Migration Lead</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• API gateway implementation and management</li>
                    <li>• Cloud connectivity and hybrid architecture</li>
                    <li>• Legacy system integration complexity</li>
                    <li>• Data synchronization between old and new systems</li>
                    <li>• Staff training on modern development practices</li>
                    <li>• ROI justification for modernization projects</li>
                    <li>• Risk management during platform transitions</li>
                    <li>• Maintaining business continuity during upgrades</li>
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