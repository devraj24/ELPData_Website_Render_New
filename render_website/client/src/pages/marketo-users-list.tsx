import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, Mail, BarChart, Zap } from "lucide-react";

export default function MarketoUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Marketo Marketing Automation Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 5,000+ organizations using Adobe Marketo Engage. Target marketing operations managers, demand generation specialists, and revenue operations teams implementing lead scoring, email automation, and attribution modeling.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">5,000+</div>
                  <div className="text-sm text-white/80">Marketo Customers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">850K+</div>
                  <div className="text-sm text-white/80">Marketing Professionals</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">75+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Marketo Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-navy mb-6">Marketo Platform Solutions</h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Organizations implementing Marketo's comprehensive marketing automation and revenue attribution platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                  Marketo Engage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Core marketing automation platform for B2B demand generation
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Lead Management</Badge>
                  <Badge variant="secondary">Email Marketing</Badge>
                  <Badge variant="secondary">Landing Pages</Badge>
                  <Badge variant="secondary">Campaign Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Technology & SaaS Companies</li>
                    <li>• Financial Services</li>
                    <li>• Healthcare & Life Sciences</li>
                    <li>• Manufacturing & Industrial</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Marketing Operations Manager</li>
                    <li>• Demand Generation Manager</li>
                    <li>• Marketing Automation Specialist</li>
                    <li>• VP of Marketing</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Complex setup and configuration requirements</li>
                    <li>• High licensing costs and implementation fees</li>
                    <li>• Steep learning curve for non-technical users</li>
                    <li>• Limited email template design flexibility</li>
                    <li>• Integration complexity with CRM systems</li>
                    <li>• Performance issues with large databases</li>
                    <li>• Reporting and analytics limitations</li>
                    <li>• User interface modernization needs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-blue-500" />
                  Marketo Measure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  B2B marketing attribution platform for revenue impact measurement
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Attribution Modeling</Badge>
                  <Badge variant="secondary">Revenue Tracking</Badge>
                  <Badge variant="secondary">ROI Analysis</Badge>
                  <Badge variant="secondary">Touch point Analytics</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Enterprise B2B Companies</li>
                    <li>• Technology & Software</li>
                    <li>• Professional Services</li>
                    <li>• Financial Services</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Revenue Operations Director</li>
                    <li>• Marketing Analytics Manager</li>
                    <li>• Chief Marketing Officer</li>
                    <li>• Business Intelligence Analyst</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Complex attribution model configuration</li>
                    <li>• Data quality and consistency issues</li>
                    <li>• Integration with multiple data sources</li>
                    <li>• Custom reporting development needs</li>
                    <li>• Long implementation timelines</li>
                    <li>• High total cost of ownership</li>
                    <li>• Technical expertise requirements</li>
                    <li>• Real-time data processing limitations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-green-500" />
                  Account-Based Marketing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Targeted marketing platform for enterprise account engagement
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Account Targeting</Badge>
                  <Badge variant="secondary">Personalization</Badge>
                  <Badge variant="secondary">Account Insights</Badge>
                  <Badge variant="secondary">Multi-channel Orchestration</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Enterprise Technology Companies</li>
                    <li>• Financial Services & Banking</li>
                    <li>• Healthcare & Pharmaceuticals</li>
                    <li>• Manufacturing & Industrial</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• ABM Manager</li>
                    <li>• Enterprise Marketing Director</li>
                    <li>• Field Marketing Manager</li>
                    <li>• Strategic Accounts Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Account identification and prioritization</li>
                    <li>• Cross-channel campaign coordination</li>
                    <li>• Personalization at scale challenges</li>
                    <li>• Sales and marketing alignment issues</li>
                    <li>• ROI measurement complexity</li>
                    <li>• Content creation for target accounts</li>
                    <li>• Technology stack integration</li>
                    <li>• Long sales cycle attribution</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-6 h-6 text-orange-500" />
                  Email Marketing Studio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Advanced email marketing platform with automation capabilities
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Email Campaigns</Badge>
                  <Badge variant="secondary">A/B Testing</Badge>
                  <Badge variant="secondary">Segmentation</Badge>
                  <Badge variant="secondary">Deliverability Tools</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• E-commerce & Retail</li>
                    <li>• Media & Publishing</li>
                    <li>• Education & Training</li>
                    <li>• Non-profit Organizations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Email Marketing Manager</li>
                    <li>• Digital Marketing Specialist</li>
                    <li>• Marketing Campaign Manager</li>
                    <li>• CRM Marketing Specialist</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Email deliverability and spam issues</li>
                    <li>• Template design and coding limitations</li>
                    <li>• Advanced segmentation complexity</li>
                    <li>• Mobile email optimization</li>
                    <li>• Cross-client rendering consistency</li>
                    <li>• Automation workflow development</li>
                    <li>• Performance analytics depth</li>
                    <li>• GDPR and privacy compliance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-indigo-500" />
                  Lead Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Comprehensive lead scoring, routing, and lifecycle management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Lead Scoring</Badge>
                  <Badge variant="secondary">Lead Routing</Badge>
                  <Badge variant="secondary">Lifecycle Management</Badge>
                  <Badge variant="secondary">Sales Alerts</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• B2B Technology Companies</li>
                    <li>• Professional Services</li>
                    <li>• Manufacturing & Industrial</li>
                    <li>• Real Estate & Property</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Sales Operations Manager</li>
                    <li>• Lead Generation Manager</li>
                    <li>• Marketing Operations Director</li>
                    <li>• Business Development Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Lead scoring model optimization</li>
                    <li>• Sales and marketing alignment</li>
                    <li>• Lead quality vs. quantity balance</li>
                    <li>• Complex routing rule management</li>
                    <li>• Lead lifecycle tracking accuracy</li>
                    <li>• Integration with CRM systems</li>
                    <li>• Real-time lead processing</li>
                    <li>• Lead nurturing workflow optimization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-teal-500" />
                  Dynamic Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Conversational marketing platform with AI-powered chatbots
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Chatbots</Badge>
                  <Badge variant="secondary">Live Chat</Badge>
                  <Badge variant="secondary">Conversational AI</Badge>
                  <Badge variant="secondary">Meeting Booking</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• SaaS & Technology Companies</li>
                    <li>• E-commerce & Retail</li>
                    <li>• Financial Services</li>
                    <li>• Healthcare & Life Sciences</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Digital Marketing Manager</li>
                    <li>• Conversion Rate Optimizer</li>
                    <li>• Customer Experience Manager</li>
                    <li>• Growth Marketing Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Chatbot conversation design complexity</li>
                    <li>• AI training and optimization</li>
                    <li>• Integration with existing workflows</li>
                    <li>• Multi-language support limitations</li>
                    <li>• Lead qualification accuracy</li>
                    <li>• Human handoff processes</li>
                    <li>• Performance analytics and optimization</li>
                    <li>• Mobile chat experience</li>
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