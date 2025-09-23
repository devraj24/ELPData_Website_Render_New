import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Building, Globe, Target, Shield, CheckCircle } from "lucide-react";

export default function BusinessContactDataPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Business Contact Data</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Access verified business contact information for decision-makers across all industries. Our comprehensive database provides accurate, up-to-date contact details for successful B2B outreach and lead generation.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">50M+</div>
                  <div className="text-sm text-white/80">Business Contacts</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">12M+</div>
                  <div className="text-sm text-white/80">Active Companies</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">195+</div>
                  <div className="text-sm text-white/80">Countries Covered</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Data Solutions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">Comprehensive Contact Data Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage our extensive database of verified business contacts to reach the right decision-makers at the right time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-800 to-blue-950 text-white p-8 rounded-xl shadow-2xl border-2 border-blue-300 relative overflow-hidden">
              <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Executive Contact Lists</h3>
              <p className="text-white mb-6 text-base font-medium">
                Direct access to C-level executives and senior decision-makers across industries
              </p>
              <div className="space-y-2 mb-6">
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">CEO & C-Suite Contacts</div>
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">VP & Director Level</div>
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Department Heads</div>
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Decision Makers</div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">50M+ Contacts</div>
              <div className="text-base text-white font-medium">Direct Access • Verified • Executive Level</div>
            </div>

            <div className="bg-gradient-to-br from-green-800 to-green-950 text-white p-8 rounded-xl shadow-2xl border-2 border-green-300 relative overflow-hidden">
              <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Industry-Specific Data</h3>
              <p className="text-white mb-6 text-base font-medium">
                Targeted contact information organized by industry verticals and market segments
              </p>
              <div className="space-y-2 mb-6">
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Technology & Software</div>
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Healthcare & Life Sciences</div>
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Financial Services</div>
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Manufacturing</div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">12M+ Companies</div>
              <div className="text-base text-white font-medium">Industry Targeted • Segmented • Verified</div>
            </div>

            <div className="bg-gradient-to-br from-purple-800 to-purple-950 text-white p-8 rounded-xl shadow-2xl border-2 border-purple-300 relative overflow-hidden">
              <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Global Contact Database</h3>
              <p className="text-white mb-6 text-base font-medium">
                International business contacts spanning 195+ countries and territories
              </p>
              <div className="space-y-2 mb-6">
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">North America</div>
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Europe & EMEA</div>
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Asia Pacific</div>
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Latin America</div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">195+ Countries</div>
              <div className="text-base text-white font-medium">Global Reach • Multi-language • Compliant</div>
            </div>

            <div className="bg-gradient-to-br from-orange-800 to-orange-950 text-white p-8 rounded-xl shadow-2xl border-2 border-orange-300 relative overflow-hidden">
              <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Targeted Prospect Lists</h3>
              <p className="text-white mb-6 text-base font-medium">
                Custom-built prospect lists based on your specific targeting criteria
              </p>
              <div className="space-y-2 mb-6">
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Custom Filters</div>
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Buying Intent Signals</div>
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Technology Usage</div>
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Growth Indicators</div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">Custom Lists</div>
              <div className="text-base text-white font-medium">AI-Powered • Intent Signals • Optimized</div>
            </div>

            <div className="bg-gradient-to-br from-teal-800 to-teal-950 text-white p-8 rounded-xl shadow-2xl border-2 border-teal-300 relative overflow-hidden">
              <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Data Quality Assurance</h3>
              <p className="text-white mb-6 text-base font-medium">
                Rigorous data verification processes ensuring accuracy and deliverability
              </p>
              <div className="space-y-2 mb-6">
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Email Verification</div>
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Phone Validation</div>
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Address Standardization</div>
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Real-time Updates</div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">95% Accuracy</div>
              <div className="text-base text-white font-medium">Verified • Validated • Guaranteed</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-800 to-indigo-950 text-white p-8 rounded-xl shadow-2xl border-2 border-indigo-300 relative overflow-hidden">
              <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Company Intelligence</h3>
              <p className="text-white mb-6 text-base font-medium">
                Comprehensive company profiles with firmographic and technographic data
              </p>
              <div className="space-y-2 mb-6">
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Company Profiles</div>
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Financial Data</div>
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Technology Stack</div>
                <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Growth Metrics</div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">Deep Insights</div>
              <div className="text-base text-white font-medium">Firmographic • Technographic • Intelligence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">Why Choose ELP Data Business Contacts?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our business contact data delivers superior results for your sales and marketing campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">95%+ Accuracy</h3>
              <p className="text-gray-600">Verified contact information with industry-leading accuracy rates</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Global Coverage</h3>
              <p className="text-gray-600">Comprehensive data spanning 195+ countries and territories</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">GDPR Compliant</h3>
              <p className="text-gray-600">Fully compliant with international data privacy regulations</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Custom Targeting</h3>
              <p className="text-gray-600">Precise targeting based on your ideal customer profile</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Access Premium Business Contact Data?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Get started with verified business contacts to accelerate your sales and marketing efforts
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact-us" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Get a Quote
            </a>
            <a 
              href="/contact-us" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold"
            >
              View Sample Data
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}