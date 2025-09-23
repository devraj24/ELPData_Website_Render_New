import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, FileText, Globe, AlertTriangle, Eye, Clock, BarChart3 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ComplianceSolutions() {
  return (
    <>
      <SEOHead 
        title="Compliance Solutions | ELP Data"
        description="Comprehensive compliance monitoring and reporting solutions for GDPR, CCPA, and other regulatory requirements. Our compliance solutions help organizations navigate complex regulatory landscapes."
        keywords="compliance solutions, GDPR compliance, CCPA compliance, regulatory monitoring, data privacy"
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                <CheckCircle className="w-4 h-4 mr-2" />
                Compliance Solutions
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Regulatory Compliance Made Simple
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-green-100">
                Comprehensive compliance monitoring and reporting solutions for GDPR, CCPA, and other regulatory 
                requirements. Our compliance solutions help organizations navigate complex regulatory landscapes 
                while maintaining data privacy, security, and operational transparency across global markets.
              </p>
              
              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <div className="text-green-100">Compliance Frameworks</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-green-100">Regulations Monitored</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">99.8%</div>
                  <div className="text-green-100">Audit Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Solutions Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Compliance Solutions Features
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Ensure regulatory compliance across all business operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-lg">GDPR & CCPA Compliance Monitoring</CardTitle>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <CardTitle className="text-lg">Real-time Regulatory Updates</CardTitle>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle className="text-lg">Automated Compliance Reporting</CardTitle>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg">Data Privacy Impact Assessments</CardTitle>
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
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Reduced regulatory violation risks</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Proactive monitoring and alerts help prevent costly regulatory violations and penalties.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Streamlined audit processes</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Automated documentation and reporting make audits faster and more efficient.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Enhanced data protection</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Comprehensive privacy controls and monitoring ensure data protection compliance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Global compliance coverage</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Stay compliant across multiple jurisdictions with unified compliance management.
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
                    Our compliance solutions provide comprehensive monitoring and management of regulatory requirements 
                    across multiple jurisdictions. We track changes in data privacy laws, financial regulations, and 
                    industry-specific compliance standards to ensure your organization maintains full regulatory compliance 
                    while minimizing operational disruption.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <Eye className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Real-time Monitoring</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Continuous surveillance of regulatory changes and compliance status
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <FileText className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Automated Reporting</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Generate compliance reports automatically for audit and regulatory purposes
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <Shield className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Multi-Framework Support</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Support for 25+ compliance frameworks across global jurisdictions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Supported Compliance Frameworks
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                  <h3 className="font-semibold mb-2">GDPR</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">European data protection</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                  <h3 className="font-semibold mb-2">CCPA</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">California privacy rights</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                  <h3 className="font-semibold mb-2">HIPAA</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Healthcare data protection</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                  <h3 className="font-semibold mb-2">SOX</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Financial reporting compliance</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                  <h3 className="font-semibold mb-2">PCI DSS</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Payment card security</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                  <h3 className="font-semibold mb-2">ISO 27001</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Information security management</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                  <h3 className="font-semibold mb-2">NIST</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Cybersecurity framework</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                  <h3 className="font-semibold mb-2">BSA/AML</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Anti-money laundering</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Service Badge */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <Badge className="mb-6 bg-green-600 text-white text-lg px-6 py-2">
                Risk Management
              </Badge>
              <Badge className="mb-8 bg-emerald-600 text-white text-lg px-6 py-2 ml-4">
                Professional Service
              </Badge>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Get Started with Compliance Solutions?
              </h2>
              <p className="text-xl mb-8 text-green-100">
                Contact our experts to learn how we can help optimize your business operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4">
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