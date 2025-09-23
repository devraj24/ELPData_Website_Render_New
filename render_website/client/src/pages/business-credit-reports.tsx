import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, BarChart3, TrendingUp, Globe, Building, Shield, CheckCircle, Users } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BusinessCreditReports() {
  return (
    <>
      <SEOHead 
        title="Business Credit Reports | ELP Data"
        description="Access detailed business credit reports and financial assessments to evaluate potential partners, customers, and vendors. Our comprehensive credit reporting services provide in-depth analysis of business financial stability."
        keywords="business credit reports, credit analysis, financial assessment, creditworthiness, payment history"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                <FileText className="w-4 h-4 mr-2" />
                Business Credit Reports
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Comprehensive Credit Analysis
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-blue-100">
                Access detailed business credit reports and financial assessments to evaluate potential partners, 
                customers, and vendors. Our comprehensive credit reporting services provide in-depth analysis of 
                business financial stability, payment history, and creditworthiness to support critical business decisions.
              </p>
              
              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">10M+</div>
                  <div className="text-blue-100">Credit Reports</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-blue-100">Financial Data Sources</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">195+ Countries</div>
                  <div className="text-blue-100">Global Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Credit Reports Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Business Credit Reports Features
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Comprehensive credit analysis for informed business decisions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg">Comprehensive Credit Analysis</CardTitle>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <CardTitle className="text-lg">Payment History Assessment</CardTitle>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-lg">Financial Stability Scoring</CardTitle>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                    <Building className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-lg">Industry Risk Benchmarking</CardTitle>
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
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Reduced credit risk exposure</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Make informed decisions about credit limits and payment terms based on comprehensive risk assessment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Informed lending decisions</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Access detailed financial insights to support lending decisions and portfolio management.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Better vendor evaluation</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Evaluate the financial stability and reliability of potential vendors and business partners.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Enhanced portfolio management</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Optimize your business portfolio with detailed credit risk analysis and monitoring.
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
                    Our business credit reports combine data from multiple financial institutions, credit bureaus, and 
                    public records to provide a comprehensive view of business creditworthiness. We analyze payment patterns, 
                    financial trends, legal filings, and industry performance to deliver accurate risk assessments for 
                    informed decision-making.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Comprehensive Data</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Integration of multiple data sources for complete financial picture
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Trend Analysis</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Historical analysis of payment patterns and financial performance
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Risk Assessment</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Accurate risk scoring based on comprehensive financial analysis
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Data Sources Coverage */}
        <section className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Comprehensive Data Coverage
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 border-0">
                  <CardHeader>
                    <Building className="w-12 h-12 text-blue-600 mb-4" />
                    <CardTitle>Financial Institutions</CardTitle>
                    <CardDescription>Bank reports, lending history, account relationships</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 border-0">
                  <CardHeader>
                    <FileText className="w-12 h-12 text-indigo-600 mb-4" />
                    <CardTitle>Credit Bureaus</CardTitle>
                    <CardDescription>Established credit histories, payment records, outstanding obligations</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 border-0">
                  <CardHeader>
                    <Globe className="w-12 h-12 text-green-600 mb-4" />
                    <CardTitle>Public Records</CardTitle>
                    <CardDescription>Legal filings, bankruptcy records, regulatory compliance data</CardDescription>
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
              <Badge className="mb-6 bg-blue-600 text-white text-lg px-6 py-2">
                Risk Management
              </Badge>
              <Badge className="mb-8 bg-indigo-600 text-white text-lg px-6 py-2 ml-4">
                Professional Service
              </Badge>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Get Started with Business Credit Reports?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact our experts to learn how we can help optimize your business operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
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