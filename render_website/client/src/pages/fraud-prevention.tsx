import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Brain, Eye, Layers, AlertTriangle, CheckCircle, Clock, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FraudPrevention() {
  return (
    <>
      <SEOHead 
        title="Fraud Prevention | ELP Data"
        description="Protect your business with sophisticated fraud detection algorithms and real-time monitoring systems. Our comprehensive fraud prevention platform combines machine learning, behavioral analytics, and real-time monitoring."
        keywords="fraud prevention, fraud detection, machine learning, behavioral analytics, real-time monitoring"
      />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-r from-red-600 to-orange-600">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                <Shield className="w-4 h-4 mr-2" />
                Fraud Prevention
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Advanced Fraud Detection
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-red-100">
                Protect your business with sophisticated fraud detection algorithms and real-time monitoring systems. 
                Our comprehensive fraud prevention platform combines machine learning, behavioral analytics, and 
                real-time monitoring to identify and prevent fraudulent activities before they impact your business operations.
              </p>
              
              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">99.8%</div>
                  <div className="text-red-100">Fraud Detection Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">&lt;0.1%</div>
                  <div className="text-red-100">False Positives</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">&lt; 50ms</div>
                  <div className="text-red-100">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fraud Prevention Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Fraud Prevention Features
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Advanced fraud detection and prevention systems
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <CardTitle className="text-lg">AI-Powered Fraud Detection</CardTitle>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle className="text-lg">Real-time Transaction Monitoring</CardTitle>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <CardTitle className="text-lg">Behavioral Pattern Analysis</CardTitle>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-lg">Multi-layered Security Protocols</CardTitle>
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
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Reduced financial losses from fraud</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Minimize direct financial impact through early detection and prevention of fraudulent activities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Enhanced customer trust and security</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Build customer confidence with robust security measures and transparent protection protocols.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Minimized false positive alerts</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Advanced algorithms reduce unnecessary alerts while maintaining high detection accuracy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Automated threat response capabilities</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Immediate automated responses to detected threats minimize damage and response time.
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
                    Our fraud prevention system utilizes advanced machine learning algorithms to analyze transaction patterns, 
                    user behavior, and risk indicators in real-time. The platform learns from historical fraud patterns and 
                    continuously adapts to emerging threats, providing comprehensive protection against identity theft, 
                    payment fraud, and account takeover attempts.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <Brain className="w-12 h-12 text-red-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Machine Learning</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Continuously learning algorithms that adapt to new fraud patterns
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <Eye className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Real-time Analysis</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Instant evaluation of transactions and user behavior patterns
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Comprehensive Protection</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Multi-layered security against various types of fraud attempts
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Professional Service Badge */}
        <section className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <Badge className="mb-6 bg-red-600 text-white text-lg px-6 py-2">
                Risk Management
              </Badge>
              <Badge className="mb-8 bg-orange-600 text-white text-lg px-6 py-2 ml-4">
                Professional Service
              </Badge>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Get Started with Fraud Prevention?
              </h2>
              <p className="text-xl mb-8 text-red-100">
                Contact our experts to learn how we can help optimize your business operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4">
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