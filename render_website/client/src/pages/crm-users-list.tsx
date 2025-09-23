import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, TrendingUp, Database, BarChart, Globe } from "lucide-react";

export default function CRMUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">CRM Platform Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 890,000+ organizations using Customer Relationship Management platforms. Target sales directors, marketing managers, and customer success teams implementing Salesforce, HubSpot, Microsoft Dynamics, and Pipedrive solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">890,000+</div>
                  <div className="text-sm text-white/80">Companies Using CRM</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">15.2M+</div>
                  <div className="text-sm text-white/80">CRM Users Worldwide</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">195+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Platform Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-navy mb-6">CRM Platform Categories</h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Organizations implementing various CRM solutions across different business sizes and industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-500" />
                  Enterprise CRM Platforms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Large-scale CRM solutions for enterprise organizations
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Salesforce</Badge>
                  <Badge variant="secondary">Microsoft Dynamics 365</Badge>
                  <Badge variant="secondary">Oracle CX Cloud</Badge>
                  <Badge variant="secondary">SAP CRM</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Fortune 500 Companies</li>
                    <li>• Financial Services & Banking</li>
                    <li>• Healthcare & Pharmaceuticals</li>
                    <li>• Manufacturing & Industrial</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Chief Revenue Officer (CRO)</li>
                    <li>• VP of Sales</li>
                    <li>• Sales Operations Director</li>
                    <li>• Enterprise Systems Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• High implementation and licensing costs</li>
                    <li>• Complex customization requirements</li>
                    <li>• User adoption across large organizations</li>
                    <li>• Integration with legacy systems</li>
                    <li>• Data migration and quality issues</li>
                    <li>• Ongoing maintenance and support</li>
                    <li>• Performance optimization at scale</li>
                    <li>• Compliance and security requirements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-green-500" />
                  Mid-Market CRM Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Flexible CRM platforms for growing businesses
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">HubSpot CRM</Badge>
                  <Badge variant="secondary">Pipedrive</Badge>
                  <Badge variant="secondary">Zoho CRM</Badge>
                  <Badge variant="secondary">SugarCRM</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Technology & SaaS Companies</li>
                    <li>• Professional Services</li>
                    <li>• Real Estate & Property</li>
                    <li>• Marketing & Advertising Agencies</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Sales Director</li>
                    <li>• Marketing Director</li>
                    <li>• Business Development Manager</li>
                    <li>• Operations Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Scaling limitations as business grows</li>
                    <li>• Limited advanced automation features</li>
                    <li>• Reporting and analytics capabilities</li>
                    <li>• Integration with marketing tools</li>
                    <li>• Multi-currency and language support</li>
                    <li>• Advanced workflow customization</li>
                    <li>• Mobile app functionality gaps</li>
                    <li>• Data export and portability concerns</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                  Small Business CRM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Simple, affordable CRM solutions for small businesses
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Freshsales</Badge>
                  <Badge variant="secondary">Insightly</Badge>
                  <Badge variant="secondary">Copper</Badge>
                  <Badge variant="secondary">Nimble</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Local Service Businesses</li>
                    <li>• Retail & E-commerce</li>
                    <li>• Consulting & Freelancers</li>
                    <li>• Small Manufacturing</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Business Owner</li>
                    <li>• Sales Manager</li>
                    <li>• Marketing Coordinator</li>
                    <li>• Customer Success Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Limited budget for CRM investment</li>
                    <li>• Lack of technical expertise for setup</li>
                    <li>• Need for quick implementation</li>
                    <li>• Basic reporting and analytics needs</li>
                    <li>• Email marketing integration</li>
                    <li>• Mobile accessibility requirements</li>
                    <li>• Simple user interface priorities</li>
                    <li>• Affordable ongoing costs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-orange-500" />
                  Industry-Specific CRM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Specialized CRM solutions tailored for specific industries
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Real Estate CRM</Badge>
                  <Badge variant="secondary">Healthcare CRM</Badge>
                  <Badge variant="secondary">Financial Services CRM</Badge>
                  <Badge variant="secondary">Manufacturing CRM</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Real Estate & Property Management</li>
                    <li>• Healthcare & Medical Practices</li>
                    <li>• Financial Advisory Services</li>
                    <li>• Insurance Companies</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Practice Manager</li>
                    <li>• Business Development Director</li>
                    <li>• Operations Director</li>
                    <li>• Client Relationship Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Industry compliance requirements</li>
                    <li>• Specialized workflow automation needs</li>
                    <li>• Integration with industry-specific tools</li>
                    <li>• Custom field and data requirements</li>
                    <li>• Regulatory reporting capabilities</li>
                    <li>• Security and privacy standards</li>
                    <li>• Industry-specific analytics</li>
                    <li>• Vendor specialization concerns</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-indigo-500" />
                  CRM Analytics & BI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Advanced analytics and business intelligence for CRM data
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Tableau CRM</Badge>
                  <Badge variant="secondary">Microsoft Power BI</Badge>
                  <Badge variant="secondary">Looker</Badge>
                  <Badge variant="secondary">Sisense</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Data-driven Organizations</li>
                    <li>• B2B Technology Companies</li>
                    <li>• Financial Services</li>
                    <li>• E-commerce & Retail</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Data Analytics Manager</li>
                    <li>• Business Intelligence Director</li>
                    <li>• Revenue Operations Manager</li>
                    <li>• Sales Analytics Specialist</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Data quality and consistency issues</li>
                    <li>• Complex data integration requirements</li>
                    <li>• Real-time reporting performance</li>
                    <li>• User adoption of analytics tools</li>
                    <li>• Custom dashboard development</li>
                    <li>• Data governance and security</li>
                    <li>• ROI measurement and attribution</li>
                    <li>• Predictive analytics implementation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-teal-500" />
                  Mobile & Social CRM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Mobile-first and social media integrated CRM solutions
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Mobile CRM Apps</Badge>
                  <Badge variant="secondary">Social Media Integration</Badge>
                  <Badge variant="secondary">Field Sales Tools</Badge>
                  <Badge variant="secondary">Real-time Sync</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Field Sales Organizations</li>
                    <li>• Social Media Companies</li>
                    <li>• Event Management</li>
                    <li>• Travel & Hospitality</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Responsible Job Titles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Field Sales Manager</li>
                    <li>• Social Media Manager</li>
                    <li>• Mobile Application Manager</li>
                    <li>• Digital Engagement Specialist</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Offline functionality requirements</li>
                    <li>• Data synchronization across devices</li>
                    <li>• Mobile app performance optimization</li>
                    <li>• Social media data integration</li>
                    <li>• Battery and data usage concerns</li>
                    <li>• Security on mobile devices</li>
                    <li>• User interface design challenges</li>
                    <li>• Cross-platform compatibility</li>
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