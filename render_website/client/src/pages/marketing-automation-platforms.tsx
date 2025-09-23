import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, BarChart, Users, Target, Settings, TrendingUp } from "lucide-react";

export default function MarketingAutomationPlatformsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Marketing Automation Platform Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 24,157+ companies using HubSpot, Marketo, Pardot, and ActiveCampaign. Target marketing operations managers, demand generation specialists, and marketing directors implementing lead nurturing workflows.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">24,157</div>
                  <div className="text-sm text-white/80">Marketing Automation Users</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">78%</div>
                  <div className="text-sm text-white/80">Lead Nurturing Rate</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">3.2X</div>
                  <div className="text-sm text-white/80">ROI Improvement</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Automation Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Marketing Automation Platforms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing marketing automation for lead nurturing, behavioral tracking, and multi-channel campaign management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-green-500" />
                  B2B Marketing Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complex lead scoring, nurturing, and sales handoff for B2B organizations
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Lead Scoring</Badge>
                  <Badge variant="secondary">Drip Campaigns</Badge>
                  <Badge variant="secondary">Progressive Profiling</Badge>
                  <Badge variant="secondary">Sales Handoff</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Organizations:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• SaaS & Technology Companies</li>
                    <li>• Professional Services Firms</li>
                    <li>• Manufacturing Companies</li>
                    <li>• Financial Services Providers</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Marketing Operations Manager</li>
                    <li>• Demand Generation Manager</li>
                    <li>• VP of Marketing</li>
                    <li>• Revenue Operations Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex lead scoring model development</li>
                    <li>• Long B2B sales cycle nurturing</li>
                    <li>• CRM integration and data synchronization</li>
                    <li>• Sales and marketing alignment processes</li>
                    <li>• Attribution modeling across touchpoints</li>
                    <li>• Content creation for nurture sequences</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-blue-500" />
                  E-commerce Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Behavioral triggers, product recommendations, and customer lifecycle automation
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Behavioral Triggers</Badge>
                  <Badge variant="secondary">Product Recommendations</Badge>
                  <Badge variant="secondary">Cart Abandonment</Badge>
                  <Badge variant="secondary">Customer Segmentation</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Organizations:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Online Retailers</li>
                    <li>• E-commerce Platforms</li>
                    <li>• Subscription Box Services</li>
                    <li>• Fashion & Apparel Brands</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• E-commerce Manager</li>
                    <li>• Digital Marketing Manager</li>
                    <li>• CRM Manager</li>
                    <li>• Growth Marketing Lead</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Real-time behavioral data processing</li>
                    <li>• Product catalog integration complexity</li>
                    <li>• Cross-device customer tracking</li>
                    <li>• Dynamic content personalization</li>
                    <li>• Inventory-aware campaign automation</li>
                    <li>• Multi-currency and international setup</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-purple-500" />
                  Small Business Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Simple automation workflows for small businesses with limited resources
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Welcome Series</Badge>
                  <Badge variant="secondary">Newsletter Automation</Badge>
                  <Badge variant="secondary">Event Follow-ups</Badge>
                  <Badge variant="secondary">Basic Segmentation</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Organizations:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Local Service Businesses</li>
                    <li>• Professional Practices</li>
                    <li>• Small Retail Stores</li>
                    <li>• Coaching & Consulting</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Small Business Owner</li>
                    <li>• Marketing Coordinator</li>
                    <li>• Office Manager</li>
                    <li>• Administrative Assistant</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Limited technical expertise</li>
                    <li>• Budget constraints for advanced features</li>
                    <li>• Time investment for setup and maintenance</li>
                    <li>• Content creation resource limitations</li>
                    <li>• Understanding of automation best practices</li>
                    <li>• Measuring ROI with limited analytics</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-orange-500" />
                  Enterprise Marketing Platforms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complex multi-brand, multi-region automation for large enterprises
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Multi-Brand Management</Badge>
                  <Badge variant="secondary">Advanced Analytics</Badge>
                  <Badge variant="secondary">Global Compliance</Badge>
                  <Badge variant="secondary">Enterprise Integration</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Organizations:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Fortune 500 Companies</li>
                    <li>• Global Technology Firms</li>
                    <li>• Multinational Corporations</li>
                    <li>• Large Healthcare Organizations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Marketing Officer</li>
                    <li>• Marketing Technology Director</li>
                    <li>• Global Marketing Operations Lead</li>
                    <li>• Enterprise Marketing Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex approval workflows</li>
                    <li>• Multi-region privacy compliance (GDPR, CCPA)</li>
                    <li>• Enterprise system integration requirements</li>
                    <li>• Global brand consistency management</li>
                    <li>• Advanced attribution and reporting needs</li>
                    <li>• Large-scale user training and adoption</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-6 h-6 text-teal-500" />
                  Lifecycle Marketing Platforms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Customer journey automation and retention marketing for subscription businesses
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Customer Onboarding</Badge>
                  <Badge variant="secondary">Retention Campaigns</Badge>
                  <Badge variant="secondary">Churn Prevention</Badge>
                  <Badge variant="secondary">Upsell Automation</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Organizations:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• SaaS Companies</li>
                    <li>• Subscription Services</li>
                    <li>• Membership Organizations</li>
                    <li>• Mobile App Companies</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Customer Success Manager</li>
                    <li>• Lifecycle Marketing Manager</li>
                    <li>• Product Marketing Manager</li>
                    <li>• Retention Specialist</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex customer journey mapping</li>
                    <li>• Behavioral trigger optimization</li>
                    <li>• Cohort analysis and segmentation</li>
                    <li>• Product usage data integration</li>
                    <li>• Churn prediction model accuracy</li>
                    <li>• Cross-team coordination requirements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-indigo-500" />
                  Event Marketing Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Event-driven automation for conferences, webinars, and trade shows
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Event Registration</Badge>
                  <Badge variant="secondary">Attendee Nurturing</Badge>
                  <Badge variant="secondary">Post-Event Follow-up</Badge>
                  <Badge variant="secondary">Speaker Coordination</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Organizations:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Event Management Companies</li>
                    <li>• Conference Organizers</li>
                    <li>• Trade Show Managers</li>
                    <li>• Corporate Event Teams</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Event Marketing Manager</li>
                    <li>• Conference Director</li>
                    <li>• Trade Show Coordinator</li>
                    <li>• Corporate Events Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Time-sensitive campaign coordination</li>
                    <li>• Multiple stakeholder management</li>
                    <li>• Integration with event platforms</li>
                    <li>• Last-minute event changes communication</li>
                    <li>• Post-event lead qualification</li>
                    <li>• ROI measurement across event types</li>
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