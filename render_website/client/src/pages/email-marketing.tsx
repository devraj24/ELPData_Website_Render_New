import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Target, BarChart3, CheckCircle, ArrowRight, Users, Globe, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EmailMarketing() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Professional Email Marketing Services - ELP Data"
        description="Drive revenue growth with our comprehensive email marketing services including campaign strategy, design and development, list management, automation setup, A/B testing, deliverability optimization, and detailed performance analytics."
        keywords="email marketing services, email campaigns, email automation, email marketing strategy, B2B email marketing"
      />
      <Header />
      
      {/* Hero Section - Orange Gradient */}
      <section className="bg-gradient-to-r from-orange-600 to-red-500 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-heading font-bold text-white mb-6">
            Professional Email Marketing Services
          </h1>
          <p className="text-xl text-white mb-8 max-w-4xl mx-auto">
            Drive revenue growth with our comprehensive email marketing services including campaign strategy, design and development, list management, automation setup, A/B testing, deliverability optimization, and detailed performance analytics to maximize engagement and conversions.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-6 h-6" />
              <span>95% Deliverability Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-6 h-6" />
              <span>68% Executive Open Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              <span>45% Conversion Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Email Marketing Service Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Email Marketing Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Professional email marketing solutions designed to maximize engagement and drive measurable business results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-2 hover:border-orange-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Campaign Strategy & Design</h3>
              <p className="text-gray-600 mb-6">
                Complete email campaign development including strategic planning, responsive design, compelling copywriting, and brand-consistent templates optimized for maximum engagement.
              </p>
              <div className="text-3xl font-bold text-orange-600 mb-2">45%</div>
              <div className="text-sm text-gray-500 mb-6">Open Rate</div>
              <div className="text-sm text-gray-600 mb-6">Strategy • Design • Copywriting • Testing</div>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                Request Campaign Strategy
              </Button>
            </Card>

            <Card className="p-6 text-center border-2 border-orange-500 bg-orange-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Account-Based Email Marketing</h3>
              <p className="text-gray-600 mb-6">
                Personalized email campaigns for target accounts, executive-level messaging, multi-stakeholder engagement sequences, and account penetration strategies.
              </p>
              <div className="text-3xl font-bold text-green-600 mb-2">68%</div>
              <div className="text-sm text-gray-500 mb-6">Executive Open Rate</div>
              <div className="text-sm text-gray-600 mb-6">ABM • Personalization • Multi-Touch • Executive Outreach</div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Start ABM Campaign
              </Button>
            </Card>

            <Card className="p-6 text-center border-2 hover:border-orange-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Optimization</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive performance tracking, A/B testing, deliverability optimization, and detailed analytics reporting to continuously improve campaign effectiveness.
              </p>
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-gray-500 mb-6">Deliverability Rate</div>
              <div className="text-sm text-gray-600 mb-6">Analytics • Testing • Optimization • Reporting</div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Get Analytics Report
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology-Specific Email Lists */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Technology-Specific Email Lists
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Target organizations using specific technologies with our comprehensive installed base email lists
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">CRM Users</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">82,984</div>
              <p className="text-sm text-gray-600">Salesforce.com customers globally</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">ERP Users</h3>
              <div className="text-2xl font-bold text-green-600 mb-2">47,982</div>
              <p className="text-sm text-gray-600">Oracle JD Edwards enterprises</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cloud Users</h3>
              <div className="text-2xl font-bold text-purple-600 mb-2">156,000+</div>
              <p className="text-sm text-gray-600">AWS and Azure customers</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Security Users</h3>
              <div className="text-2xl font-bold text-orange-600 mb-2">95,000+</div>
              <p className="text-sm text-gray-600">Cybersecurity software users</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Executive Email Lists */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                Executive Email Lists
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Connect with 355,250 Chief Executive Officers leading organizations worldwide. Target C-suite executives with precision email marketing campaigns designed for maximum impact.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold">CEO Email List</span>
                  <span className="text-lg font-bold text-blue-600">355,250 contacts</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold">CFO Email List</span>
                  <span className="text-lg font-bold text-green-600">245,180 contacts</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold">CTO Email List</span>
                  <span className="text-lg font-bold text-purple-600">189,340 contacts</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold">CMO Email List</span>
                  <span className="text-lg font-bold text-orange-600">156,890 contacts</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                  Request Executive Lists
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3">
                  View All Email Lists
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="font-semibold text-lg mb-3">Campaign Performance</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">68%</div>
                        <div className="text-sm text-gray-600">Executive Open Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">34%</div>
                        <div className="text-sm text-gray-600">Response Rate</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="font-semibold text-lg mb-3">Global Reach</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>North America</span>
                        <span className="font-semibold">45%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Europe</span>
                        <span className="font-semibold">28%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Asia Pacific</span>
                        <span className="font-semibold">22%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Other Regions</span>
                        <span className="font-semibold">5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Industry-Specific Email Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Target specific industries with precision using our comprehensive sector-specific email databases and industry expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Healthcare Industry</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">1.41M</div>
              <p className="text-gray-600 mb-4">Healthcare professionals including doctors, nurses, administrators, and medical technology decision-makers.</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Healthcare Email Lists
              </Button>
            </Card>
            
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Financial Services</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">687K</div>
              <p className="text-gray-600 mb-4">Banking, insurance, and financial technology professionals across all market segments.</p>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Financial Email Lists
              </Button>
            </Card>
            
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Manufacturing</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">593K</div>
              <p className="text-gray-600 mb-4">Manufacturing executives, plant managers, and industrial technology decision-makers.</p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Manufacturing Lists
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Ready to Launch Your Email Marketing Campaign?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get started with our professional email marketing services and reach your target audience with precision and impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3">
              Request Email Marketing
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3">
              All Marketing Platforms
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}