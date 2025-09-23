import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, FileCheck, Search, CheckCircle, ArrowRight, Eye, Lock, Globe, BarChart3, Award } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RiskManagement() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Risk Management - ELP Data"
        description="Comprehensive risk management solutions to protect your business, ensure compliance, and make informed decisions with confidence in today's complex business environment."
        keywords="risk management, compliance, fraud prevention, due diligence, business protection"
      />
      <Header />
      
      {/* Hero Section - Orange Gradient */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-heading font-bold text-white mb-6">
            Risk Management
          </h1>
          <p className="text-xl text-white mb-8 max-w-4xl mx-auto">
            Comprehensive risk management solutions to protect your business, ensure compliance, and make informed decisions with confidence in today's complex business environment.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span>99.9% Protection Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6" />
              <span>Compliance Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-6 h-6" />
              <span>Real-time Monitoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-center text-gray-900 mb-4">
            Risk Management Solutions
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
            Comprehensive suite of risk management tools designed to protect and strengthen your business
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Business Credit Reports */}
            <Card className="p-8 border-2 hover:border-orange-500 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Business Credit Reports</CardTitle>
                <CardDescription className="text-gray-600">
                  Comprehensive credit analysis and financial health assessment for informed business decisions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Real-time credit scoring</li>
                      <li>• Financial stability analysis</li>
                      <li>• Payment history tracking</li>
                      <li>• Risk assessment reports</li>
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div>
                      <h5 className="font-semibold text-sm text-gray-700 mb-1">Coverage & Capabilities</h5>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500" />
                          <span>50M+ businesses worldwide</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500" />
                          <span>200+ countries</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500" />
                          <span>Real-time updates</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500" />
                          <span>Historical data analysis</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm text-gray-700 mb-1">Pricing</h5>
                      <div className="text-2xl font-bold text-teal-600 mb-1">Starting at $25</div>
                      <div className="text-sm text-gray-500 mb-3">per report</div>
                      <div className="space-y-2">
                        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white text-sm">
                          Learn More
                        </Button>
                        <Button variant="outline" className="w-full text-sm">
                          Get Assessment
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fraud Prevention */}
            <Card className="p-8 border-2 hover:border-orange-500 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Fraud Prevention</CardTitle>
                <CardDescription className="text-gray-600">
                  Advanced fraud detection and prevention systems to protect your business operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Protection Features</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Real-time transaction monitoring</li>
                      <li>• Identity verification systems</li>
                      <li>• Suspicious activity alerts</li>
                      <li>• Risk scoring algorithms</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-1">98.7%</div>
                      <div className="text-sm text-red-700 font-medium">Fraud Detection Rate</div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Request Fraud Protection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Solutions */}
            <Card className="p-8 border-2 hover:border-orange-500 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Compliance Solutions</CardTitle>
                <CardDescription className="text-gray-600">
                  Comprehensive compliance monitoring and regulatory oversight capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Compliance Features</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Automated compliance checking</li>
                      <li>• Regulatory updates tracking</li>
                      <li>• Audit trail management</li>
                      <li>• Policy enforcement tools</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                      <div className="text-sm text-blue-700 font-medium">Compliance Coverage</div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Get Compliance Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Due Diligence Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Due Diligence Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive due diligence investigations and background verification services for informed business decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Search className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Background Checks</h3>
              <p className="text-sm text-gray-600">Comprehensive background verification for individuals and organizations</p>
            </Card>
            
            <Card className="text-center p-6">
              <Eye className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Financial Analysis</h3>
              <p className="text-sm text-gray-600">In-depth financial health assessment and credit worthiness evaluation</p>
            </Card>
            
            <Card className="text-center p-6">
              <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Security Assessment</h3>
              <p className="text-sm text-gray-600">Security posture evaluation and vulnerability identification</p>
            </Card>
            
            <Card className="text-center p-6">
              <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Global Coverage</h3>
              <p className="text-sm text-gray-600">Worldwide due diligence services across 200+ countries</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk Assessment Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                Advanced Risk Assessment Tools
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Utilize cutting-edge technology and data analytics to identify, assess, and mitigate business risks across all operational areas.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Real-time Risk Monitoring</h4>
                    <p className="text-gray-600">Continuous monitoring of risk factors with instant alerts and notifications</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Predictive Analytics</h4>
                    <p className="text-gray-600">Advanced algorithms to predict and prevent potential risks before they occur</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Comprehensive Reporting</h4>
                    <p className="text-gray-600">Detailed risk assessment reports with actionable recommendations</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                  Request Assessment
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3">
                  View All Solutions
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Risk Score</span>
                      <span className="text-2xl font-bold text-green-600">Low</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Compliance Status</span>
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-600">All requirements met</span>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-sm font-medium text-gray-700 mb-2">Active Monitoring</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Financial Health</span>
                        <span className="text-green-600">✓ Stable</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Security Posture</span>
                        <span className="text-green-600">✓ Secure</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Compliance</span>
                        <span className="text-green-600">✓ Current</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Ready to Strengthen Your Risk Management?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get started with our comprehensive risk management solutions and protect your business with industry-leading tools and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}