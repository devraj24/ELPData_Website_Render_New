import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Mail, Target, TrendingUp, Users, Zap, BarChart3, MessageSquare, Globe, Shield, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function MarketingSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Marketing Solutions - ELP Data"
        description="Comprehensive marketing solutions including email marketing, account-based marketing, lead generation, and marketing automation services to accelerate business growth."
        keywords="marketing solutions, email marketing, ABM, lead generation, marketing automation"
      />
      <Header />
      
      {/* AI-Powered Marketing Automation Hero */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-heading font-bold text-white mb-6">
                AI-Powered Marketing Automation
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Advanced AI agent technology that automates your entire marketing workflow including campaign creation, content generation, data intelligence, competitive analysis, and multi-channel outreach to accelerate business growth.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                  Start Automation
                </Button>
                <Button size="lg" variant="outline" className="border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-slate-900 px-8 py-3">
                  View All Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-700 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-3 bg-blue-500 rounded-full"></div>
                    <div className="w-20 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-16 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="bg-blue-500 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-2"></div>
                    </div>
                    <div className="bg-green-500 rounded-lg p-4 text-center">
                      <CheckCircle className="w-8 h-8 text-green-700 mx-auto mb-2" />
                    </div>
                    <div className="bg-orange-500 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-orange-600 rounded-full mx-auto mb-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Marketing Solutions */}
      <section className="bg-gradient-to-br from-green-700 to-green-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-heading font-bold text-white mb-6">
                Comprehensive Marketing Solutions
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Drive enterprise growth with our integrated marketing solutions specializing in email marketing campaigns, account-based marketing strategies, lead generation programs, and marketing automation designed to accelerate B2B sales cycles and maximize customer lifetime value.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                  Get Started Today
                </Button>
                <Button size="lg" variant="outline" className="border-green-300 text-green-300 hover:bg-green-300 hover:text-green-900 px-8 py-3">
                  Lead Generation
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-green-600 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="w-full h-3 bg-blue-500 rounded-full mb-3"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="w-full h-3 bg-green-500 rounded-full"></div>
                      <div className="w-full h-3 bg-orange-500 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                      <div className="bg-blue-500 rounded-lg p-2 text-center">
                        <CheckCircle className="w-4 h-4 text-blue-700 mx-auto" />
                      </div>
                      <div className="bg-orange-500 rounded-lg p-2 text-center">
                        <CheckCircle className="w-4 h-4 text-orange-700 mx-auto" />
                      </div>
                    </div>
                  </div>
                  <div className="text-green-100">
                    <div className="w-full h-2 bg-purple-500 rounded-full mb-2"></div>
                    <div className="flex justify-between text-xs">
                      <span>Growth Metrics</span>
                      <span>Campaign Performance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Email Marketing Services */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-heading font-bold text-white mb-6">
                Professional Email Marketing Services
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Drive revenue growth with our comprehensive email marketing services including campaign strategy, design and development, list management, automation setup, A/B testing, deliverability optimization, and detailed performance analytics to maximize engagement and conversions.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                  Request Email Marketing
                </Button>
                <Button size="lg" variant="outline" className="border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-slate-900 px-8 py-3">
                  All Marketing Platforms
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-700 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="w-full h-4 bg-blue-600 rounded-full"></div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-blue-500 rounded-lg p-3 text-center">
                      <div className="text-white text-sm font-bold">95%</div>
                    </div>
                    <div className="bg-green-500 rounded-lg p-3 text-center">
                      <div className="text-white text-sm font-bold">68%</div>
                    </div>
                    <div className="bg-orange-500 rounded-lg p-3 text-center">
                      <div className="text-white text-sm font-bold">45%</div>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account-Based Marketing Services */}
      <section className="bg-gradient-to-br from-slate-700 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-heading font-bold text-white mb-6">
            Account-Based Marketing Services
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto">
            Strategic account-based marketing solutions that target high-value prospects with personalized campaigns, custom content, and multi-channel engagement strategies to accelerate sales cycles and maximize deal sizes.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              Start ABM Campaign
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-slate-900 px-8 py-3">
              Intent Data Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* ABM Service Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-heading font-bold text-center text-gray-900 mb-16">
            ABM Service Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <Target className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Strategic Account Targeting</CardTitle>
                <CardDescription>
                  Identify and prioritize high-value target accounts with comprehensive market research and account intelligence.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Account prioritization frameworks</li>
                  <li>• Market intelligence research</li>
                  <li>• Stakeholder mapping</li>
                  <li>• Competitive analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-500 transition-colors">
              <CardHeader>
                <MessageSquare className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Personalized Campaigns</CardTitle>
                <CardDescription>
                  Create customized marketing campaigns tailored to specific accounts and decision-makers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Custom content creation</li>
                  <li>• Personalized messaging</li>
                  <li>• Multi-channel coordination</li>
                  <li>• Executive engagement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-500 transition-colors">
              <CardHeader>
                <BarChart3 className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>
                  Track and measure ABM campaign effectiveness with detailed analytics and ROI reporting.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Campaign performance metrics</li>
                  <li>• Account engagement scoring</li>
                  <li>• Pipeline attribution</li>
                  <li>• ROI measurement</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Intent Data Solutions */}
      <section className="bg-gradient-to-br from-purple-700 to-purple-800 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-heading font-bold text-white mb-6">
            Intent Data Solutions
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto">
            Advanced buyer intent intelligence to identify prospects actively researching solutions, predict purchase behavior, and optimize sales timing.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              Request Intent Data
            </Button>
            <Button size="lg" variant="outline" className="border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-purple-900 px-8 py-3">
              ABM Platforms
            </Button>
          </div>
        </div>
      </section>

      {/* Intent Data Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-heading font-bold text-center text-gray-900 mb-16">
            Intent Data Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Technology Intent</h4>
              <p className="text-sm text-gray-600">Software evaluation and technology adoption signals</p>
            </Card>
            <Card className="text-center p-6">
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Industry Trends</h4>
              <p className="text-sm text-gray-600">Market research and industry analysis behavior</p>
            </Card>
            <Card className="text-center p-6">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Competitor Analysis</h4>
              <p className="text-sm text-gray-600">Competitive intelligence and vendor comparison</p>
            </Card>
            <Card className="text-center p-6">
              <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Purchase Signals</h4>
              <p className="text-sm text-gray-600">Buying behavior and decision-making indicators</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Generation Services */}
      <section className="bg-gradient-to-br from-green-700 to-green-800 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-heading font-bold text-white mb-6">
            Lead Generation Services
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-4xl mx-auto">
            Professional lead generation services combining verified contact data, intelligent targeting, and multi-channel outreach to accelerate pipeline growth.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              Request Lead Generation
            </Button>
            <Button size="lg" variant="outline" className="border-green-300 text-green-300 hover:bg-green-300 hover:text-green-900 px-8 py-3">
              Marketing Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Comprehensive Lead Generation Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-heading font-bold text-center text-gray-900 mb-16">
            Comprehensive Lead Generation Services
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Email Lead Generation</h4>
                    <p className="text-gray-600 mb-4">Targeted email campaigns with verified contact databases and personalized messaging to generate qualified leads.</p>
                    <Badge variant="secondary">45% Open Rate</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Account-Based Lead Generation</h4>
                    <p className="text-gray-600 mb-4">Strategic outreach to high-value target accounts with customized messaging and multi-stakeholder engagement.</p>
                    <Badge variant="secondary">68% Executive Open Rate</Badge>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Analytics & Optimization</h4>
                    <p className="text-gray-600 mb-4">Comprehensive campaign analytics, lead scoring, and performance optimization to maximize conversion rates.</p>
                    <Badge variant="secondary">95% Data Accuracy</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Multi-Channel Outreach</h4>
                    <p className="text-gray-600 mb-4">Integrated campaigns across email, social media, and direct outreach channels for maximum reach and engagement.</p>
                    <Badge variant="secondary">Multi-Touch Sequences</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Email Marketing Service Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-heading font-bold text-center text-gray-900 mb-16">
            Email Marketing Service Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Campaign Strategy & Design</h4>
              <p className="text-gray-600 mb-6">
                Complete email campaign development including strategic planning, responsive design, compelling copywriting, and brand-consistent templates optimized for maximum engagement.
              </p>
              <div className="text-3xl font-bold text-orange-600 mb-2">45%</div>
              <div className="text-sm text-gray-500 mb-6">Open Rate</div>
              <div className="text-sm text-gray-600">Strategy • Design • Copywriting • Testing</div>
            </Card>

            <Card className="p-6 text-center border-2 border-orange-500">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Account-Based Email Marketing</h4>
              <p className="text-gray-600 mb-6">
                Personalized email campaigns for target accounts, executive-level messaging, multi-stakeholder engagement sequences, and account penetration strategies.
              </p>
              <div className="text-3xl font-bold text-green-600 mb-2">68%</div>
              <div className="text-sm text-gray-500 mb-6">Executive Open Rate</div>
              <div className="text-sm text-gray-600">ABM • Personalization • Multi-Touch • Executive Outreach</div>
            </Card>

            <Card className="p-6 text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Optimization</h4>
              <p className="text-gray-600 mb-6">
                Comprehensive performance tracking, A/B testing, deliverability optimization, and detailed analytics reporting to continuously improve campaign effectiveness.
              </p>
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-gray-500 mb-6">Deliverability Rate</div>
              <div className="text-sm text-gray-600">Analytics • Testing • Optimization • Reporting</div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}