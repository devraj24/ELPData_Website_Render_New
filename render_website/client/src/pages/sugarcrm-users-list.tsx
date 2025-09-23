import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, TrendingUp, Database, Settings, Globe } from "lucide-react";

export default function SugarCRMUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">SugarCRM Platform Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 2M+ organizations using SugarCRM's open-source customer relationship management platform. Target sales managers, CRM administrators, and business analysts implementing Sugar Sell, Sugar Serve, and Sugar Market solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">2M+</div>
                  <div className="text-sm text-white/80">SugarCRM Users Worldwide</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">64,500</div>
                  <div className="text-sm text-white/80">Active Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">85+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SugarCRM Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-navy mb-6">SugarCRM Platform Solutions</h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Organizations implementing SugarCRM's flexible and customizable customer relationship management solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-green-500" />
                  Sugar Sell (Sales CRM)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Sales force automation platform for pipeline and opportunity management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Lead Management</Badge>
                  <Badge variant="secondary">Opportunity Tracking</Badge>
                  <Badge variant="secondary">Sales Forecasting</Badge>
                  <Badge variant="secondary">Account Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Technology & Software Companies</li>
                    <li>• Professional Services</li>
                    <li>• Manufacturing & Distribution</li>
                    <li>• Healthcare & Life Sciences</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• VP of Sales</li>
                    <li>• Sales Director</li>
                    <li>• Sales Operations Manager</li>
                    <li>• Business Development Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Limited third-party integrations vs competitors</li>
                    <li>• Mobile app functionality gaps</li>
                    <li>• Customization complexity for non-technical users</li>
                    <li>• Reporting and analytics limitations</li>
                    <li>• User interface modernization needs</li>
                    <li>• Advanced automation capabilities</li>
                    <li>• Email marketing integration challenges</li>
                    <li>• Scalability concerns for large enterprises</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-blue-500" />
                  Sugar Serve (Customer Service)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Customer service and support platform with case management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Case Management</Badge>
                  <Badge variant="secondary">Knowledge Base</Badge>
                  <Badge variant="secondary">SLA Management</Badge>
                  <Badge variant="secondary">Customer Portal</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• SaaS & Technology Companies</li>
                    <li>• Telecommunications</li>
                    <li>• Financial Services</li>
                    <li>• Retail & E-commerce</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Customer Success Manager</li>
                    <li>• Support Team Lead</li>
                    <li>• Customer Experience Director</li>
                    <li>• Service Operations Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Limited omnichannel support capabilities</li>
                    <li>• Knowledge base search functionality</li>
                    <li>• Real-time chat and messaging features</li>
                    <li>• Advanced ticketing workflow automation</li>
                    <li>• Customer satisfaction measurement tools</li>
                    <li>• Integration with communication platforms</li>
                    <li>• Self-service portal customization</li>
                    <li>• Performance analytics and reporting</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                  Sugar Market (Marketing Automation)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Marketing automation platform for lead generation and nurturing
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Email Campaigns</Badge>
                  <Badge variant="secondary">Lead Scoring</Badge>
                  <Badge variant="secondary">Landing Pages</Badge>
                  <Badge variant="secondary">Marketing Analytics</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• B2B Technology Companies</li>
                    <li>• Marketing Agencies</li>
                    <li>• Professional Services</li>
                    <li>• Educational Institutions</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Marketing Director</li>
                    <li>• Demand Generation Manager</li>
                    <li>• Marketing Automation Specialist</li>
                    <li>• Digital Marketing Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Limited advanced segmentation capabilities</li>
                    <li>• A/B testing functionality gaps</li>
                    <li>• Social media marketing integration</li>
                    <li>• Advanced personalization features</li>
                    <li>• Multi-channel campaign coordination</li>
                    <li>• Attribution modeling limitations</li>
                    <li>• Content management workflow</li>
                    <li>• Progressive profiling capabilities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-orange-500" />
                  Sugar Enterprise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Enterprise-grade CRM platform with advanced customization and integration
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Advanced Workflows</Badge>
                  <Badge variant="secondary">Custom Modules</Badge>
                  <Badge variant="secondary">Enterprise Security</Badge>
                  <Badge variant="secondary">API Integration</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Large Enterprise Organizations</li>
                    <li>• Financial Services & Banking</li>
                    <li>• Government & Public Sector</li>
                    <li>• Healthcare Organizations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Chief Technology Officer</li>
                    <li>• Enterprise Architect</li>
                    <li>• IT Director</li>
                    <li>• Business Systems Analyst</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Complex implementation and customization</li>
                    <li>• High total cost of ownership</li>
                    <li>• Technical expertise requirements</li>
                    <li>• Upgrade and maintenance complexity</li>
                    <li>• Performance optimization at scale</li>
                    <li>• Integration with modern cloud services</li>
                    <li>• User training and adoption challenges</li>
                    <li>• Competitive pressure from cloud-native CRMs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-6 h-6 text-indigo-500" />
                  Sugar Professional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Mid-market CRM solution with core functionality and customization options
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Sales Management</Badge>
                  <Badge variant="secondary">Marketing Tools</Badge>
                  <Badge variant="secondary">Customer Support</Badge>
                  <Badge variant="secondary">Reporting & Analytics</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Mid-size Technology Companies</li>
                    <li>• Manufacturing & Distribution</li>
                    <li>• Professional Services Firms</li>
                    <li>• Non-profit Organizations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Operations Director</li>
                    <li>• Sales Manager</li>
                    <li>• Marketing Manager</li>
                    <li>• Business Analyst</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Feature limitations vs. enterprise solutions</li>
                    <li>• Scaling challenges as business grows</li>
                    <li>• Integration with modern business tools</li>
                    <li>• Mobile functionality improvements needed</li>
                    <li>• Advanced analytics and reporting gaps</li>
                    <li>• Workflow automation limitations</li>
                    <li>• User interface modernization</li>
                    <li>• Competition from cloud-first solutions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-teal-500" />
                  Sugar Community Edition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Open-source CRM platform for small businesses and developers
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Open Source</Badge>
                  <Badge variant="secondary">Basic CRM Features</Badge>
                  <Badge variant="secondary">Community Support</Badge>
                  <Badge variant="secondary">Self-hosted</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Small Businesses & Startups</li>
                    <li>• Development Agencies</li>
                    <li>• Educational Institutions</li>
                    <li>• Non-profit Organizations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Small Business Owner</li>
                    <li>• IT Administrator</li>
                    <li>• Web Developer</li>
                    <li>• Systems Administrator</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Limited technical support options</li>
                    <li>• Self-hosting and maintenance burden</li>
                    <li>• Security updates and patch management</li>
                    <li>• Limited feature set vs. paid versions</li>
                    <li>• Integration development complexity</li>
                    <li>• Lack of cloud-hosted options</li>
                    <li>• Upgrade path to commercial versions</li>
                    <li>• Community dependency for troubleshooting</li>
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