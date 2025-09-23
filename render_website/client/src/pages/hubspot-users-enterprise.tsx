import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Mail, BarChart, Users, Zap, Building } from "lucide-react";

export default function HubSpotUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">HubSpot Platform Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 135,000+ organizations using HubSpot's inbound marketing and sales platform. Target marketing directors, sales managers, and digital marketing specialists implementing Marketing Hub, Sales Hub, and Service Hub solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">135,000+</div>
                  <div className="text-sm text-white/80">HubSpot Customers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">5M+</div>
                  <div className="text-sm text-white/80">Marketing Contacts</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">73%</div>
                  <div className="text-sm text-white/80">SMB Market Focus</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* HubSpot Implementation Types Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">HubSpot Implementation Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing HubSpot for inbound marketing, sales automation, and customer service management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-orange-500" />
                  Inbound Marketing Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Content marketing, SEO, and lead generation for inbound marketing strategies
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Content Management</Badge>
                  <Badge variant="secondary">SEO Optimization</Badge>
                  <Badge variant="secondary">Lead Generation</Badge>
                  <Badge variant="secondary">Landing Pages</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• B2B SaaS & Technology</li>
                    <li>• Professional Services</li>
                    <li>• Marketing Agencies</li>
                    <li>• E-learning & Education</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• VP of Marketing</li>
                    <li>• Digital Marketing Manager</li>
                    <li>• Content Marketing Manager</li>
                    <li>• Growth Marketing Specialist</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Content strategy development and execution</li>
                    <li>• SEO keyword research and optimization</li>
                    <li>• Lead scoring and qualification setup</li>
                    <li>• Marketing and sales alignment</li>
                    <li>• Attribution modeling and ROI measurement</li>
                    <li>• Conversion rate optimization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-500" />
                  Sales Hub CRM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Sales pipeline management with contact tracking and deal management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Contact Management</Badge>
                  <Badge variant="secondary">Deal Pipeline</Badge>
                  <Badge variant="secondary">Email Tracking</Badge>
                  <Badge variant="secondary">Sales Automation</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Small & Medium Businesses</li>
                    <li>• Startups & Scale-ups</li>
                    <li>• Consulting & Professional Services</li>
                    <li>• Real Estate & Property</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Sales Manager</li>
                    <li>• Business Development Manager</li>
                    <li>• Sales Operations Coordinator</li>
                    <li>• Revenue Operations Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data migration from spreadsheets or legacy CRM</li>
                    <li>• Sales process standardization</li>
                    <li>• Email integration and tracking setup</li>
                    <li>• Team adoption and training</li>
                    <li>• Custom property and pipeline configuration</li>
                    <li>• Reporting and dashboard customization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-6 h-6 text-green-500" />
                  Email Marketing Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Automated email campaigns with personalization and lead nurturing
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Email Campaigns</Badge>
                  <Badge variant="secondary">Marketing Automation</Badge>
                  <Badge variant="secondary">Lead Nurturing</Badge>
                  <Badge variant="secondary">Personalization</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• E-commerce & Retail</li>
                    <li>• Non-Profit Organizations</li>
                    <li>• Event Management</li>
                    <li>• Health & Wellness</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Email Marketing Manager</li>
                    <li>• Marketing Automation Specialist</li>
                    <li>• Customer Success Manager</li>
                    <li>• Digital Marketing Coordinator</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Email deliverability and sender reputation</li>
                    <li>• Segmentation strategy and list management</li>
                    <li>• Workflow automation setup and testing</li>
                    <li>• A/B testing and optimization</li>
                    <li>• Compliance with email regulations (GDPR, CAN-SPAM)</li>
                    <li>• Integration with other marketing tools</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-purple-500" />
                  Analytics & Reporting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Marketing analytics with attribution reporting and performance tracking
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Marketing Analytics</Badge>
                  <Badge variant="secondary">Attribution Reporting</Badge>
                  <Badge variant="secondary">Custom Dashboards</Badge>
                  <Badge variant="secondary">ROI Tracking</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data-Driven Marketing Teams</li>
                    <li>• Growth-Focused Startups</li>
                    <li>• Performance Marketing Agencies</li>
                    <li>• SaaS & Technology Companies</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Marketing Operations Manager</li>
                    <li>• Growth Marketing Director</li>
                    <li>• Business Intelligence Analyst</li>
                    <li>• Performance Marketing Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Multi-touch attribution modeling setup</li>
                    <li>• Custom reporting and dashboard creation</li>
                    <li>• Data integration from multiple sources</li>
                    <li>• Goal tracking and conversion measurement</li>
                    <li>• Campaign performance optimization</li>
                    <li>• Executive reporting and KPI alignment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-teal-500" />
                  Service Hub Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Customer service ticketing with knowledge base and live chat support
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Ticketing System</Badge>
                  <Badge variant="secondary">Knowledge Base</Badge>
                  <Badge variant="secondary">Live Chat</Badge>
                  <Badge variant="secondary">Customer Feedback</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• SaaS & Software Support</li>
                    <li>• E-commerce Customer Service</li>
                    <li>• Professional Services</li>
                    <li>• Subscription-Based Businesses</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Customer Success Manager</li>
                    <li>• Support Team Lead</li>
                    <li>• Customer Experience Manager</li>
                    <li>• Operations Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Ticket routing and escalation workflows</li>
                    <li>• Knowledge base content creation and maintenance</li>
                    <li>• Live chat integration and staffing</li>
                    <li>• Customer satisfaction measurement</li>
                    <li>• Agent training and performance monitoring</li>
                    <li>• Integration with sales and marketing data</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-6 h-6 text-indigo-500" />
                  CMS Website Platform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Content management system for websites with integrated marketing tools
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Website Builder</Badge>
                  <Badge variant="secondary">Blog Management</Badge>
                  <Badge variant="secondary">SEO Tools</Badge>
                  <Badge variant="secondary">Form Builder</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Small Business Websites</li>
                    <li>• Marketing-Focused Organizations</li>
                    <li>• Professional Service Providers</li>
                    <li>• Non-Profit Organizations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Web Development Manager</li>
                    <li>• Marketing Manager</li>
                    <li>• Content Manager</li>
                    <li>• Small Business Owner</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Website migration from existing platforms</li>
                    <li>• Custom design and branding requirements</li>
                    <li>• SEO optimization and technical setup</li>
                    <li>• Form integration and lead capture setup</li>
                    <li>• Content strategy and blog management</li>
                    <li>• Performance optimization and analytics</li>
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