import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, Zap, MessageSquare, BarChart } from "lucide-react";

export default function HubSpotUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-700 py-12">
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
                  <div className="text-3xl font-bold text-white">120+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* HubSpot Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-navy mb-6">HubSpot Product Ecosystem</h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Organizations implementing HubSpot's comprehensive growth platform across marketing, sales, and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                  Marketing Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Inbound marketing automation platform with lead generation tools
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Email Marketing</Badge>
                  <Badge variant="secondary">Lead Management</Badge>
                  <Badge variant="secondary">Marketing Automation</Badge>
                  <Badge variant="secondary">Content Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Technology & SaaS Companies</li>
                    <li>• Professional Services</li>
                    <li>• E-commerce & Retail</li>
                    <li>• Healthcare & Life Sciences</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Chief Marketing Officer (CMO)</li>
                    <li>• Marketing Director</li>
                    <li>• Digital Marketing Manager</li>
                    <li>• Demand Generation Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Lead scoring and qualification complexity</li>
                    <li>• Attribution tracking across channels</li>
                    <li>• Content creation and management at scale</li>
                    <li>• Marketing and sales alignment issues</li>
                    <li>• ROI measurement and reporting</li>
                    <li>• Integration with existing tech stack</li>
                    <li>• Email deliverability optimization</li>
                    <li>• Rising subscription costs with growth</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-blue-500" />
                  Sales Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  CRM and sales automation platform for pipeline management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Contact Management</Badge>
                  <Badge variant="secondary">Deal Pipeline</Badge>
                  <Badge variant="secondary">Email Tracking</Badge>
                  <Badge variant="secondary">Sales Analytics</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• B2B Software & Technology</li>
                    <li>• Real Estate & Property</li>
                    <li>• Financial Services</li>
                    <li>• Manufacturing & Industrial</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Vice President of Sales</li>
                    <li>• Sales Director</li>
                    <li>• Sales Operations Manager</li>
                    <li>• Business Development Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Sales team adoption and training</li>
                    <li>• Data migration from legacy CRM systems</li>
                    <li>• Customization limitations vs. Salesforce</li>
                    <li>• Advanced reporting and forecasting needs</li>
                    <li>• Integration with enterprise applications</li>
                    <li>• Mobile app functionality gaps</li>
                    <li>• Complex sales process automation</li>
                    <li>• Territory and quota management</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-green-500" />
                  Service Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Customer service and support platform with ticketing system
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Help Desk</Badge>
                  <Badge variant="secondary">Knowledge Base</Badge>
                  <Badge variant="secondary">Live Chat</Badge>
                  <Badge variant="secondary">Customer Feedback</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• SaaS & Technology Companies</li>
                    <li>• E-commerce & Online Retail</li>
                    <li>• Education & Training</li>
                    <li>• Consulting & Professional Services</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
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
                    <li>• Limited advanced ticketing features</li>
                    <li>• Knowledge base organization complexity</li>
                    <li>• Multi-channel support integration</li>
                    <li>• Customer satisfaction measurement</li>
                    <li>• Escalation workflow management</li>
                    <li>• Agent productivity optimization</li>
                    <li>• Self-service portal customization</li>
                    <li>• Integration with external support tools</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-purple-500" />
                  CMS Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Content management system for creating and managing websites
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Website Builder</Badge>
                  <Badge variant="secondary">SEO Tools</Badge>
                  <Badge variant="secondary">Blog Management</Badge>
                  <Badge variant="secondary">Landing Pages</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Small to Medium Businesses</li>
                    <li>• Marketing Agencies</li>
                    <li>• Professional Services</li>
                    <li>• Non-profit Organizations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Web Developer</li>
                    <li>• Content Marketing Manager</li>
                    <li>• Marketing Coordinator</li>
                    <li>• Digital Marketing Specialist</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Limited design flexibility vs. WordPress</li>
                    <li>• Developer-friendly features lacking</li>
                    <li>• Template customization constraints</li>
                    <li>• Page loading speed optimization</li>
                    <li>• Advanced SEO feature limitations</li>
                    <li>• Third-party integration complexity</li>
                    <li>• Multi-language website support</li>
                    <li>• E-commerce functionality gaps</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-indigo-500" />
                  Operations Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Data synchronization and workflow automation platform
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Data Sync</Badge>
                  <Badge variant="secondary">Workflow Automation</Badge>
                  <Badge variant="secondary">Custom Properties</Badge>
                  <Badge variant="secondary">Data Quality</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Enterprise Technology Companies</li>
                    <li>• Financial Services</li>
                    <li>• Healthcare Organizations</li>
                    <li>• Manufacturing Companies</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Revenue Operations Manager</li>
                    <li>• Data Operations Specialist</li>
                    <li>• Business Systems Administrator</li>
                    <li>• Marketing Operations Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Complex data mapping requirements</li>
                    <li>• Real-time synchronization limitations</li>
                    <li>• Enterprise system integration complexity</li>
                    <li>• Data governance and compliance</li>
                    <li>• Workflow performance optimization</li>
                    <li>• Custom object relationship management</li>
                    <li>• API rate limit constraints</li>
                    <li>• Data quality monitoring challenges</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-teal-500" />
                  Growth Suite
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Integrated platform combining all HubSpot hubs for unified growth
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Unified Platform</Badge>
                  <Badge variant="secondary">Cross-hub Reporting</Badge>
                  <Badge variant="secondary">Advanced Analytics</Badge>
                  <Badge variant="secondary">Enterprise Features</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• High-growth Technology Companies</li>
                    <li>• Enterprise SaaS Providers</li>
                    <li>• Digital Marketing Agencies</li>
                    <li>• Venture-backed Startups</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Chief Revenue Officer (CRO)</li>
                    <li>• VP of Marketing</li>
                    <li>• VP of Sales</li>
                    <li>• Head of Growth</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• High total cost of ownership</li>
                    <li>• Complex implementation across teams</li>
                    <li>• Change management for unified platform</li>
                    <li>• Advanced customization requirements</li>
                    <li>• Integration with enterprise systems</li>
                    <li>• User permission and role management</li>
                    <li>• Performance at enterprise scale</li>
                    <li>• Vendor lock-in concerns</li>
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