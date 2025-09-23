import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Cloud, Target, BarChart, Zap, Building } from "lucide-react";

export default function SalesforceUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Salesforce Platform Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 599,000+ organizations using Salesforce.com's comprehensive 69+ product ecosystem including Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, Experience Cloud, Analytics, and custom Lightning applications. Target sales operations managers, Salesforce administrators, business analysts, and marketing automation specialists.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">150,000+</div>
                  <div className="text-sm text-white/80">Salesforce Customers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">4.2M</div>
                  <div className="text-sm text-white/80">Trailhead Users</div>
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

      {/* Salesforce Implementation Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Salesforce Implementation Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Salesforce solutions for sales automation, customer service, marketing, and custom business applications
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
                  Service Cloud Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Customer service platform with case management and knowledge base
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Case Management</Badge>
                  <Badge variant="secondary">Knowledge Base</Badge>
                  <Badge variant="secondary">Omni-Channel Routing</Badge>
                  <Badge variant="secondary">Service Console</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• SaaS & Software Companies</li>
                    <li>• Telecommunications</li>
                    <li>• E-commerce & Retail</li>
                    <li>• Healthcare & Medical Devices</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Customer Success Director</li>
                    <li>• Support Operations Manager</li>
                    <li>• Customer Experience Manager</li>
                    <li>• Service Delivery Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Multi-channel support integration</li>
                    <li>• Knowledge base content creation and maintenance</li>
                    <li>• Agent productivity and performance metrics</li>
                    <li>• Escalation workflow configuration</li>
                    <li>• Customer portal setup and branding</li>
                    <li>• SLA tracking and automated responses</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-purple-500" />
                  Lightning Platform Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Custom application development using Lightning components and Apex
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Lightning Web Components</Badge>
                  <Badge variant="secondary">Apex Programming</Badge>
                  <Badge variant="secondary">Custom Objects & Fields</Badge>
                  <Badge variant="secondary">Process Builder</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Custom Business Applications</li>
                    <li>• Industry-Specific Solutions</li>
                    <li>• ISV Development Partners</li>
                    <li>• Large Enterprise Customizations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Salesforce Developer</li>
                    <li>• Technical Architect</li>
                    <li>• Platform Engineering Manager</li>
                    <li>• Business Systems Analyst</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Salesforce governor limits and optimization</li>
                    <li>• Lightning migration from Classic interface</li>
                    <li>• Custom code testing and deployment</li>
                    <li>• User interface design and user experience</li>
                    <li>• Integration with external systems via APIs</li>
                    <li>• DevOps and change management processes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-orange-500" />
                  Marketing Cloud Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Digital marketing automation with email campaigns and customer journeys
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Email Marketing</Badge>
                  <Badge variant="secondary">Customer Journey Builder</Badge>
                  <Badge variant="secondary">Marketing Automation</Badge>
                  <Badge variant="secondary">Personalization</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• E-commerce & Retail</li>
                    <li>• Media & Publishing</li>
                    <li>• Travel & Hospitality</li>
                    <li>• Consumer Brands</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• VP of Marketing</li>
                    <li>• Digital Marketing Manager</li>
                    <li>• Marketing Operations Specialist</li>
                    <li>• Campaign Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data synchronization between clouds</li>
                    <li>• Complex customer journey mapping</li>
                    <li>• Email deliverability and reputation management</li>
                    <li>• Personalization data setup and maintenance</li>
                    <li>• Marketing ROI measurement and attribution</li>
                    <li>• GDPR and privacy compliance configuration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-teal-500" />
                  Commerce Cloud B2B/B2C
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  E-commerce platform for online storefronts and digital commerce
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Storefront Management</Badge>
                  <Badge variant="secondary">Product Catalog</Badge>
                  <Badge variant="secondary">Order Management</Badge>
                  <Badge variant="secondary">Payment Processing</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Retail & Consumer Goods</li>
                    <li>• Fashion & Apparel</li>
                    <li>• B2B Manufacturing</li>
                    <li>• Wholesale Distribution</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• E-commerce Director</li>
                    <li>• Digital Commerce Manager</li>
                    <li>• Online Merchandising Manager</li>
                    <li>• Digital Experience Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Product catalog migration and organization</li>
                    <li>• Payment gateway integration and security</li>
                    <li>• Mobile commerce optimization</li>
                    <li>• Inventory synchronization with ERP systems</li>
                    <li>• Multi-site and international commerce setup</li>
                    <li>• Performance optimization for high traffic</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-6 h-6 text-indigo-500" />
                  Salesforce CPQ Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Configure Price Quote solution for complex product and pricing management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Product Configuration</Badge>
                  <Badge variant="secondary">Dynamic Pricing</Badge>
                  <Badge variant="secondary">Quote Generation</Badge>
                  <Badge variant="secondary">Approval Workflows</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Manufacturing & Industrial Equipment</li>
                    <li>• Software & Technology</li>
                    <li>• Professional Services</li>
                    <li>• Telecommunications Equipment</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Sales Operations Director</li>
                    <li>• Pricing Manager</li>
                    <li>• Product Manager</li>
                    <li>• Quote-to-Cash Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex product configuration rules</li>
                    <li>• Dynamic pricing and discount management</li>
                    <li>• Quote template design and branding</li>
                    <li>• Approval workflow configuration</li>
                    <li>• Integration with billing and ERP systems</li>
                    <li>• Sales team training on CPQ processes</li>
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