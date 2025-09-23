import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Target, MessageSquare, BarChart3, Users, Zap, CheckCircle, Globe } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AIMarketingAutomation() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="AI-Powered Marketing Automation - ELP Data"
        description="Advanced AI agent technology that automates your entire marketing workflow including campaign creation, content generation, data intelligence, competitive analysis, and multi-channel outreach to accelerate business growth."
        keywords="AI marketing automation, marketing AI, automated campaigns, AI content generation, marketing automation platform"
      />
      <Header />
      
      {/* Hero Section - Dark Gradient */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-heading font-bold text-white mb-6">
            AI-Powered Marketing Automation
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Advanced AI agent technology that automates your entire marketing workflow including campaign creation, content generation, data intelligence, competitive analysis, and multi-channel outreach to accelerate business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6" />
              <span>95% Automation Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-6 h-6" />
              <span>Real-time Intelligence</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-6 h-6" />
              <span>Multi-channel Outreach</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Marketing Automation Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              AI Marketing Automation Features
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Leverage advanced artificial intelligence to automate and optimize your entire marketing technology stack
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 hover:border-blue-500 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl mb-2">AI Campaign Creation</CardTitle>
                <CardDescription className="text-gray-600">
                  Automated campaign design, content generation using OpenAI, and intelligent audience targeting with real-time optimization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">95%</div>
                      <div className="text-sm text-blue-700 font-medium">Automation Rate</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    AI Content • Smart Targeting • Auto-optimization
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Start AI Campaigns
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 hover:border-purple-500 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Technology Intelligence</CardTitle>
                <CardDescription className="text-gray-600">
                  AI-powered analysis of technology adoption patterns, installed base intelligence, and competitive landscape monitoring.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-1">500+</div>
                      <div className="text-sm text-purple-700 font-medium">Technology Databases</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Data Intelligence • Market Analysis • Competitive Insights
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Access Intelligence
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 hover:border-green-500 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Multi-Channel Outreach</CardTitle>
                <CardDescription className="text-gray-600">
                  Coordinated outreach across email, social media, and direct channels with AI-driven personalization and timing optimization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">6.2M+</div>
                      <div className="text-sm text-green-700 font-medium">Contact Database</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Multi-Touch • Personalization • Timing Optimization
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Launch Outreach
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI-Driven Technology Insights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              AI-Driven Technology Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Leverage artificial intelligence to analyze technology adoption patterns and identify market opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Bot className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">CRM Intelligence</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">82,984</div>
              <p className="text-sm text-gray-600">Salesforce.com users analyzed by AI</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">ERP Analytics</h3>
              <div className="text-2xl font-bold text-green-600 mb-2">47,982</div>
              <p className="text-sm text-gray-600">Oracle JD Edwards implementations tracked</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cloud Intelligence</h3>
              <div className="text-2xl font-bold text-purple-600 mb-2">156K+</div>
              <p className="text-sm text-gray-600">AWS and Azure deployments monitored</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Coverage</h3>
              <div className="text-2xl font-bold text-orange-600 mb-2">195</div>
              <p className="text-sm text-gray-600">Countries with AI-powered insights</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced AI Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                Advanced AI Marketing Capabilities
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our AI marketing automation platform leverages machine learning, natural language processing, and predictive analytics to deliver unprecedented marketing performance and efficiency.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Intelligent Content Generation</h4>
                    <p className="text-gray-600">AI-powered content creation using OpenAI GPT models for emails, social media posts, and campaign materials with brand consistency.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Predictive Lead Scoring</h4>
                    <p className="text-gray-600">Machine learning algorithms analyze technology adoption patterns to predict purchase intent and optimize targeting strategies.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Automated A/B Testing</h4>
                    <p className="text-gray-600">Continuous optimization through AI-driven testing of subject lines, content, timing, and audience segmentation.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button size="lg" className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3">
                  Start Automation
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3">
                  View All Services
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold">AI Performance Metrics</h4>
                      <Bot className="w-6 h-6 text-slate-600" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">95%</div>
                        <div className="text-sm text-gray-600">Automation Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">3.5x</div>
                        <div className="text-sm text-gray-600">ROI Improvement</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="font-semibold mb-4">Technology Intelligence Feed</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Salesforce deployment detected: Fortune 500 manufacturing</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>SAP migration opportunity identified: Healthcare sector</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Azure expansion trend: Financial services increasing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI and Performance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Proven AI Marketing Results
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Organizations using our AI marketing automation platform achieve measurable improvements in efficiency and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8">
              <div className="text-4xl font-bold text-blue-600 mb-4">95%</div>
              <h3 className="text-lg font-semibold mb-2">Task Automation</h3>
              <p className="text-sm text-gray-600">Marketing tasks automated through AI agents and intelligent workflows</p>
            </Card>
            
            <Card className="text-center p-8">
              <div className="text-4xl font-bold text-green-600 mb-4">3.5x</div>
              <h3 className="text-lg font-semibold mb-2">ROI Improvement</h3>
              <p className="text-sm text-gray-600">Average return on investment increase through AI-driven optimization</p>
            </Card>
            
            <Card className="text-center p-8">
              <div className="text-4xl font-bold text-purple-600 mb-4">67%</div>
              <h3 className="text-lg font-semibold mb-2">Time Savings</h3>
              <p className="text-sm text-gray-600">Reduction in manual marketing tasks through intelligent automation</p>
            </Card>
            
            <Card className="text-center p-8">
              <div className="text-4xl font-bold text-orange-600 mb-4">42%</div>
              <h3 className="text-lg font-semibold mb-2">Lead Quality</h3>
              <p className="text-sm text-gray-600">Improvement in lead quality through AI-powered scoring and targeting</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Ready to Automate Your Marketing with AI?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Transform your marketing operations with our advanced AI automation platform and achieve unprecedented efficiency and results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              Start Automation
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-slate-900 px-8 py-3">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}