import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Target, Layers, AlertTriangle, CheckCircle, Shield, Building } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RiskAssessmentTools() {
  return (
    <>
      <SEOHead 
        title="Risk Assessment Tools | ELP Data"
        description="Advanced risk assessment tools to evaluate and mitigate business, financial, and operational risks. Our sophisticated risk assessment platform provides comprehensive analysis of credit risk, operational risk, market risk, and regulatory compliance risk."
        keywords="risk assessment, risk analysis, predictive analytics, portfolio risk, stress testing"
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                <BarChart3 className="w-4 h-4 mr-2" />
                Risk Assessment Tools
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Advanced Risk Assessment
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-purple-100">
                Advanced risk assessment tools to evaluate and mitigate business, financial, and operational risks. 
                Our sophisticated risk assessment platform provides comprehensive analysis of credit risk, operational risk, 
                market risk, and regulatory compliance risk to support informed business decisions and strategic planning.
              </p>
              
              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <div className="text-purple-100">Risk Assessment Models</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-purple-100">Industries Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-purple-100">Prediction Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Assessment Tools Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Risk Assessment Tools Features
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Comprehensive risk analysis and mitigation strategies
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-lg">Multi-dimensional Risk Modeling</CardTitle>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <CardTitle className="text-lg">Predictive Risk Analytics</CardTitle>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg">Portfolio Risk Assessment</CardTitle>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle className="text-lg">Stress Testing & Scenario Analysis</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Benefits */}
        <section className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Business Benefits
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Proactive risk identification</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Identify potential risks before they materialize through advanced predictive modeling.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Enhanced decision-making capabilities</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Make informed strategic decisions with comprehensive risk intelligence and analysis.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Regulatory compliance assurance</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Ensure compliance with regulatory risk management requirements and standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Optimized risk-return profiles</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Balance risk and return to maximize portfolio performance and achieve strategic objectives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Service Overview
                </h2>
              </div>

              <Card className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 border-0">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                    Our risk assessment tools combine quantitative modeling with qualitative analysis to provide 
                    comprehensive risk evaluations. We analyze financial statements, market conditions, industry trends, 
                    and regulatory environments to deliver accurate risk scores and actionable insights for portfolio 
                    management, lending decisions, and strategic planning.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <Layers className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Multi-dimensional Modeling</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Comprehensive risk models incorporating multiple risk factors and scenarios
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Predictive Analytics</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Advanced algorithms to forecast risk trends and potential impact
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Portfolio Analysis</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Comprehensive portfolio risk assessment and optimization tools
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Risk Assessment Categories */}
        <section className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Risk Assessment Categories
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 border-0">
                  <CardHeader>
                    <Building className="w-12 h-12 text-purple-600 mb-4" />
                    <CardTitle>Credit Risk</CardTitle>
                    <CardDescription>Default probability, credit exposure, loss given default</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 border-0">
                  <CardHeader>
                    <TrendingUp className="w-12 h-12 text-indigo-600 mb-4" />
                    <CardTitle>Market Risk</CardTitle>
                    <CardDescription>Price volatility, liquidity risk, correlation analysis</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 border-0">
                  <CardHeader>
                    <Shield className="w-12 h-12 text-blue-600 mb-4" />
                    <CardTitle>Operational Risk</CardTitle>
                    <CardDescription>Process failures, system risks, human error assessment</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 border-0">
                  <CardHeader>
                    <CheckCircle className="w-12 h-12 text-teal-600 mb-4" />
                    <CardTitle>Compliance Risk</CardTitle>
                    <CardDescription>Regulatory violations, legal risks, policy adherence</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Service Badge */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <Badge className="mb-6 bg-purple-600 text-white text-lg px-6 py-2">
                Risk Management
              </Badge>
              <Badge className="mb-8 bg-indigo-600 text-white text-lg px-6 py-2 ml-4">
                Professional Service
              </Badge>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Get Started with Risk Assessment Tools?
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Contact our experts to learn how we can help optimize your business operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4">
                  Get a Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}