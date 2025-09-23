import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, BarChart, Phone, Mail, TrendingUp } from "lucide-react";

export default function CRMUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">CRM Platform Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 52,143+ organizations using customer relationship management systems. Target sales directors, marketing managers, and customer success teams managing leads, contacts, and sales pipelines.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">52,143</div>
                  <div className="text-sm text-white/80">CRM Implementations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">1.9M+</div>
                  <div className="text-sm text-white/80">CRM Users</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">23%</div>
                  <div className="text-sm text-white/80">Sales Increase</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Implementation Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">CRM Implementation Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing CRM systems for sales automation, customer service, and relationship management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-green-500" />
                  Sales-Focused CRM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Lead management, opportunity tracking, and sales pipeline automation
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Lead Management</Badge>
                  <Badge variant="secondary">Sales Pipeline</Badge>
                  <Badge variant="secondary">Contact Management</Badge>
                  <Badge variant="secondary">Sales Forecasting</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• B2B Technology Companies</li>
                    <li>• Insurance & Financial Services</li>
                    <li>• Real Estate & Property</li>
                    <li>• Manufacturing & Industrial</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• VP of Sales</li>
                    <li>• Sales Director</li>
                    <li>• Sales Operations Manager</li>
                    <li>• Business Development Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Sales team adoption resistance</li>
                    <li>• Data migration from spreadsheets</li>
                    <li>• Complex sales process customization</li>
                    <li>• Integration with marketing automation</li>
                    <li>• Sales reporting and KPI tracking</li>
                    <li>• Territory and quota management</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-6 h-6 text-blue-500" />
                  Customer Service CRM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Support ticket management, customer service workflows, and case resolution
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Ticket Management</Badge>
                  <Badge variant="secondary">Knowledge Base</Badge>
                  <Badge variant="secondary">Customer Support</Badge>
                  <Badge variant="secondary">SLA Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• SaaS & Software Companies</li>
                    <li>• E-commerce & Retail</li>
                    <li>• Telecommunications</li>
                    <li>• Healthcare & Medical Devices</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Customer Success Director</li>
                    <li>• Support Manager</li>
                    <li>• Customer Experience Manager</li>
                    <li>• VP of Customer Operations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Multi-channel support integration</li>
                    <li>• Knowledge base content management</li>
                    <li>• Agent training and workflow adoption</li>
                    <li>• Customer satisfaction measurement</li>
                    <li>• Escalation process automation</li>
                    <li>• Integration with product systems</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-6 h-6 text-purple-500" />
                  Marketing CRM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Campaign management, lead scoring, and marketing automation integration
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Campaign Management</Badge>
                  <Badge variant="secondary">Lead Scoring</Badge>
                  <Badge variant="secondary">Email Marketing</Badge>
                  <Badge variant="secondary">Marketing Attribution</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Marketing Agencies</li>
                    <li>• Professional Services</li>
                    <li>• Event Management</li>
                    <li>• Education & Training</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• VP of Marketing</li>
                    <li>• Demand Generation Manager</li>
                    <li>• Marketing Operations Manager</li>
                    <li>• Campaign Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Lead qualification and scoring setup</li>
                    <li>• Marketing and sales alignment</li>
                    <li>• Campaign ROI measurement</li>
                    <li>• Multi-touch attribution modeling</li>
                    <li>• Content personalization</li>
                    <li>• Marketing automation integration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-orange-500" />
                  Small Business CRM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Simple contact management and basic sales tracking for small teams
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Contact Management</Badge>
                  <Badge variant="secondary">Simple Sales Tracking</Badge>
                  <Badge variant="secondary">Basic Reporting</Badge>
                  <Badge variant="secondary">Email Integration</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Local Service Businesses</li>
                    <li>• Consulting & Freelancers</li>
                    <li>• Small Retail Stores</li>
                    <li>• Startups & Small Companies</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Small Business Owner</li>
                    <li>• Sales Manager</li>
                    <li>• Office Manager</li>
                    <li>• Operations Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Limited technical expertise</li>
                    <li>• Budget constraints</li>
                    <li>• Simple feature requirements</li>
                    <li>• Quick setup and ease of use</li>
                    <li>• Basic integration needs</li>
                    <li>• Training minimal staff</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-teal-500" />
                  Enterprise CRM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complex multi-division CRM with advanced customization and integration
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Advanced Customization</Badge>
                  <Badge variant="secondary">Enterprise Integration</Badge>
                  <Badge variant="secondary">Complex Workflows</Badge>
                  <Badge variant="secondary">Advanced Analytics</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Fortune 500 Companies</li>
                    <li>• Global Corporations</li>
                    <li>• Financial Institutions</li>
                    <li>• Large Healthcare Systems</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Revenue Officer</li>
                    <li>• VP of Sales & Marketing</li>
                    <li>• Enterprise Architecture</li>
                    <li>• IT Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex organizational structures</li>
                    <li>• Enterprise system integrations</li>
                    <li>• Global compliance requirements</li>
                    <li>• Change management at scale</li>
                    <li>• Advanced security requirements</li>
                    <li>• Multi-language and currency support</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-indigo-500" />
                  Industry-Specific CRM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Specialized CRM solutions built for specific industry requirements
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Industry Templates</Badge>
                  <Badge variant="secondary">Compliance Features</Badge>
                  <Badge variant="secondary">Specialized Workflows</Badge>
                  <Badge variant="secondary">Industry Integration</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Healthcare & Medical Practices</li>
                    <li>• Non-Profit Organizations</li>
                    <li>• Real Estate & Property Management</li>
                    <li>• Legal & Law Firms</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Practice Manager</li>
                    <li>• Executive Director</li>
                    <li>• Operations Director</li>
                    <li>• Managing Partner</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Industry-specific compliance requirements</li>
                    <li>• Specialized reporting needs</li>
                    <li>• Integration with industry-specific tools</li>
                    <li>• Regulatory data protection</li>
                    <li>• Professional workflow requirements</li>
                    <li>• Certification and licensing tracking</li>
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