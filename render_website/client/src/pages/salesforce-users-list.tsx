import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Cloud, Target, BarChart, Zap, Building, TrendingUp } from "lucide-react";

export default function SalesforceUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Salesforce.com, Inc. Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 599,000+ organizations using Salesforce.com's comprehensive 69+ product ecosystem including Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, Experience Cloud, Analytics, and custom Lightning applications. Target sales operations managers, Salesforce administrators, business analysts, and marketing automation specialists.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">599,000</div>
                  <div className="text-sm text-white/80">Salesforce.com Users</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">69+</div>
                  <div className="text-sm text-white/80">Products & Technologies</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">27%</div>
                  <div className="text-sm text-white/80">CRM Market Share</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Salesforce Implementation Types Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Salesforce.com Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Salesforce.com's comprehensive 69+ product portfolio including Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, Experience Cloud, Analytics Cloud, and integration platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-blue-500" />
                  Sales Cloud Implementation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Sales force automation with lead management, opportunity tracking, and forecasting
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Lead & Opportunity Management</Badge>
                  <Badge variant="secondary">Sales Forecasting</Badge>
                  <Badge variant="secondary">Territory Management</Badge>
                  <Badge variant="secondary">Sales Process Automation</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• B2B Technology Companies</li>
                    <li>• Professional Services</li>
                    <li>• Manufacturing & Industrial</li>
                    <li>• Financial Services</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• VP of Sales</li>
                    <li>• Sales Operations Manager</li>
                    <li>• Salesforce Administrator</li>
                    <li>• Revenue Operations Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Sales team adoption and change management</li>
                    <li>• Data migration from legacy CRM systems</li>
                    <li>• Complex sales process customization</li>
                    <li>• Integration with marketing automation tools</li>
                    <li>• Territory and quota management setup</li>
                    <li>• Sales reporting and dashboard configuration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-green-500" />
                  Service Cloud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Customer service and support platform with case management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Case Management</Badge>
                  <Badge variant="secondary">Knowledge Base</Badge>
                  <Badge variant="secondary">Live Chat Support</Badge>
                  <Badge variant="secondary">Field Service</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Implementation Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Agent training and adoption</li>
                    <li>• Integration with existing systems</li>
                    <li>• Knowledge base setup</li>
                    <li>• Workflow automation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                  Marketing Cloud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Digital marketing automation and customer journey management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Email Marketing</Badge>
                  <Badge variant="secondary">Journey Builder</Badge>
                  <Badge variant="secondary">Social Media</Badge>
                  <Badge variant="secondary">Mobile Marketing</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Roles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Marketing Directors</li>
                    <li>• Campaign Managers</li>
                    <li>• Digital Marketing Specialists</li>
                    <li>• Marketing Operations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-orange-500" />
                  Commerce Cloud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  E-commerce platform for B2C and B2B digital commerce experiences
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">E-commerce Platform</Badge>
                  <Badge variant="secondary">Order Management</Badge>
                  <Badge variant="secondary">Product Catalog</Badge>
                  <Badge variant="secondary">Mobile Commerce</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Key Benefits:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Unified customer experience</li>
                    <li>• AI-powered personalization</li>
                    <li>• Global scalability</li>
                    <li>• Mobile-first approach</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-indigo-500" />
                  Tableau (Analytics Cloud)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Advanced analytics and business intelligence platform
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Data Visualization</Badge>
                  <Badge variant="secondary">Self-Service Analytics</Badge>
                  <Badge variant="secondary">Dashboard Creation</Badge>
                  <Badge variant="secondary">Data Preparation</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• High licensing costs</li>
                    <li>• User training requirements</li>
                    <li>• Data governance setup</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-teal-500" />
                  Lightning Platform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Low-code application development platform and custom solutions
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Custom Apps</Badge>
                  <Badge variant="secondary">Workflow Automation</Badge>
                  <Badge variant="secondary">API Integration</Badge>
                  <Badge variant="secondary">AppExchange</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Development Audience:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Salesforce Developers</li>
                    <li>• System Administrators</li>
                    <li>• Business Analysts</li>
                    <li>• Solution Architects</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-navy mb-6">Industry-Specific Solutions</h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Salesforce implementations across major industry verticals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-primary-navy mb-2">Financial Services Cloud</h3>
                <p className="text-sm text-neutral-dark">Banking, Insurance, Wealth Management</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-primary-navy mb-2">Health Cloud</h3>
                <p className="text-sm text-neutral-dark">Healthcare Providers, Life Sciences</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-primary-navy mb-2">Manufacturing Cloud</h3>
                <p className="text-sm text-neutral-dark">Automotive, Industrial Manufacturing</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-primary-navy mb-2">Education Cloud</h3>
                <p className="text-sm text-neutral-dark">Higher Education, K-12 Schools</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}