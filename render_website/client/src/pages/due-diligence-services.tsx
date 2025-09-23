import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, FileText, Users, Shield, CheckCircle, Building, BarChart3, Clock } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DueDiligenceServices() {
  return (
    <>
      <SEOHead 
        title="Due Diligence Services | ELP Data"
        description="Comprehensive due diligence services for mergers, acquisitions, partnerships, and vendor relationships. Our thorough investigation process provides detailed insights into business operations, financial stability, and regulatory compliance."
        keywords="due diligence, business verification, mergers and acquisitions, vendor assessment, background checks"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-r from-slate-600 to-blue-600">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                <Search className="w-4 h-4 mr-2" />
                Due Diligence Services
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Comprehensive Due Diligence
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-slate-100">
                Comprehensive due diligence services for mergers, acquisitions, partnerships, and vendor relationships. 
                Our thorough investigation process provides detailed insights into business operations, financial stability, 
                and regulatory compliance.
              </p>
              
              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">25K+</div>
                  <div className="text-slate-100">Due Diligence Reports</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">1K+</div>
                  <div className="text-slate-100">Verification Sources</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">3-5 Days</div>
                  <div className="text-slate-100">Report Turnaround</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Due Diligence Services Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Due Diligence Services Features
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Thorough background checks and business verification
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                    <Building className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  </div>
                  <CardTitle className="text-lg">Business Background Verification</CardTitle>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg">Financial Stability Assessment</CardTitle>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-lg">Regulatory Compliance Review</CardTitle>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-lg">Management Team Analysis</CardTitle>
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
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Risk mitigation in business transactions</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Identify potential risks and red flags before entering into major business relationships.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Informed decision-making for partnerships</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Make strategic partnership decisions based on comprehensive business intelligence.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Regulatory compliance assurance</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Ensure potential partners meet all regulatory requirements and compliance standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Protection against fraudulent activities</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Detect potential fraud and misrepresentation through thorough background verification.
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
                    Our due diligence services provide comprehensive background checks and verification for business 
                    transactions. We investigate financial stability, regulatory compliance, business operations, and 
                    management credibility to help you make informed decisions about potential partners, acquisition 
                    targets, or major vendors.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Comprehensive Investigation</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Thorough research across multiple data sources and verification channels
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Financial Analysis</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Detailed financial stability assessment and credit risk evaluation
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Risk Assessment</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Complete risk profile analysis including operational and compliance risks
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Due Diligence Process */}
        <section className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Due Diligence Process
                </h2>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-slate-600 text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Initial Information Gathering</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Collect basic company information, ownership structure, and business operations overview
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Financial Verification</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Analyze financial statements, credit history, and payment patterns for stability assessment
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Regulatory Compliance Check</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Review regulatory filings, compliance status, and any legal issues or violations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Management Background Review</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Investigate key management team backgrounds, experience, and track record
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Report Compilation & Delivery</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Compile comprehensive findings into actionable intelligence report with recommendations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Turnaround Time */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Card className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 border-0">
                <CardContent className="p-8">
                  <Clock className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Fast Turnaround</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                    Comprehensive due diligence reports delivered within 3-5 business days
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">Basic</div>
                      <div className="text-sm text-gray-500">2-3 days</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">Standard</div>
                      <div className="text-sm text-gray-500">3-4 days</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">Comprehensive</div>
                      <div className="text-sm text-gray-500">4-5 days</div>
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
              <Badge className="mb-6 bg-slate-600 text-white text-lg px-6 py-2">
                Risk Management
              </Badge>
              <Badge className="mb-8 bg-blue-600 text-white text-lg px-6 py-2 ml-4">
                Professional Service
              </Badge>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-600 to-blue-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Get Started with Due Diligence Services?
              </h2>
              <p className="text-xl mb-8 text-slate-100">
                Contact our experts to learn how we can help optimize your business operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100 px-8 py-4">
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