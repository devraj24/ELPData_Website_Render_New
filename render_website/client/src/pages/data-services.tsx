import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Database, 
  FileX, 
  LinkIcon, 
  BarChart3, 
  Users, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Search,
  RefreshCw,
  Settings,
  TrendingUp,
  Clock,
  Award
} from "lucide-react";

export default function DataServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6 text-white">Professional Data Services</h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-white">
              Transform your raw data into strategic business assets with ELP Data's comprehensive 
              data management services. From cleansing and enrichment to analytics and consulting, 
              we optimize your data infrastructure for maximum business value.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-white">99.5%</div>
                  <div className="text-sm text-white/80">Data Accuracy Achieved</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-white">2.5B+</div>
                  <div className="text-sm text-white/80">Records Processed</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-white">85%</div>
                  <div className="text-sm text-white/80">Cost Reduction Average</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">Complete Data Management Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end data services designed to maximize the value and accuracy of your business information
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Data Appending */}
            <Card className="hover:shadow-xl transition-shadow border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-blue-900">
                  <Database className="w-8 h-8 text-blue-600" />
                  Data Appending & Enhancement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Enrich your existing customer and prospect databases with comprehensive business 
                  intelligence. Add missing contact information, firmographics, technographics, 
                  and behavioral data to create complete customer profiles.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Contact Information</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Company Firmographics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Technology Usage Data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Social Media Profiles</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900">300M+</div>
                  <div className="text-sm text-gray-600">Records Available for Appending</div>
                </div>
              </CardContent>
            </Card>

            {/* Data Integration */}
            <Card className="hover:shadow-xl transition-shadow border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-green-900">
                  <LinkIcon className="w-8 h-8 text-green-600" />
                  Enterprise Data Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Seamlessly connect and synchronize data across multiple systems, platforms, and 
                  applications. Create unified data pipelines that ensure consistency and real-time 
                  access to critical business information.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">CRM Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">ERP Synchronization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">API Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Real-time Sync</span>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-900">50+</div>
                  <div className="text-sm text-gray-600">Platform Integrations</div>
                </div>
              </CardContent>
            </Card>

            {/* Data Management */}
            <Card className="hover:shadow-xl transition-shadow border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-purple-900">
                  <Settings className="w-8 h-8 text-purple-600" />
                  Data Management & Governance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive data governance solutions including quality monitoring, compliance 
                  management, and data lifecycle optimization. Establish best practices and 
                  automated workflows for sustainable data operations.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">Quality Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">Compliance Framework</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">Lifecycle Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">Access Controls</span>
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-900">95%</div>
                  <div className="text-sm text-gray-600">Compliance Rate</div>
                </div>
              </CardContent>
            </Card>

            {/* Data Analytics */}
            <Card className="hover:shadow-xl transition-shadow border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-orange-900">
                  <BarChart3 className="w-8 h-8 text-orange-600" />
                  Advanced Data Analytics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Transform raw data into actionable business insights with advanced analytics, 
                  machine learning models, and predictive algorithms. Unlock hidden patterns 
                  and opportunities within your data assets.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Predictive Modeling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Customer Segmentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Performance Dashboards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Custom Reports</span>
                  </div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-900">40%</div>
                  <div className="text-sm text-gray-600">Revenue Increase Average</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Cleansing Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">
                Professional Data Cleansing
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Eliminate duplicate records, standardize formats, validate accuracy, and enhance 
                data quality with our comprehensive cleansing services. Transform messy data 
                into reliable business assets.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FileX className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Duplicate Removal</h3>
                    <p className="text-gray-600">
                      Advanced algorithms identify and merge duplicate records across multiple 
                      fields, preserving the most complete and accurate information.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <RefreshCw className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Data Standardization</h3>
                    <p className="text-gray-600">
                      Normalize formats, correct inconsistencies, and apply business rules 
                      to ensure data consistency across all systems and applications.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-purple-900 mb-2">Validation & Verification</h3>
                    <p className="text-gray-600">
                      Real-time validation against authoritative sources to ensure email 
                      deliverability, phone number accuracy, and address completeness.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <Card className="bg-blue-50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-900">1.2B+</div>
                    <div className="text-sm text-gray-600">Records Cleansed</div>
                  </CardContent>
                </Card>
                <Card className="bg-green-50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-900">30%</div>
                    <div className="text-sm text-gray-600">Average Accuracy Gain</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <h4 className="font-bold text-blue-900 mb-3">Email Validation</h4>
                  <p className="text-gray-600 mb-4">
                    Multi-level email verification including syntax, domain, and mailbox validation 
                    to achieve 98%+ deliverability rates and reduce bounce rates.
                  </p>
                  <Badge variant="outline" className="text-blue-700">Real-time Verification</Badge>
                  <Badge variant="outline" className="text-green-700 ml-2">Bulk Processing</Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <h4 className="font-bold text-green-900 mb-3">Phone Number Cleansing</h4>
                  <p className="text-gray-600 mb-4">
                    Standardize phone number formats, validate carrier information, and append 
                    mobile/landline classifications for improved contact strategies.
                  </p>
                  <Badge variant="outline" className="text-purple-700">Global Formatting</Badge>
                  <Badge variant="outline" className="text-orange-700 ml-2">Carrier Detection</Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardContent className="p-6">
                  <h4 className="font-bold text-purple-900 mb-3">Address Standardization</h4>
                  <p className="text-gray-600 mb-4">
                    USPS and international postal service validation to ensure accurate 
                    delivery addresses and improved direct mail response rates.
                  </p>
                  <Badge variant="outline" className="text-red-700">USPS Certified</Badge>
                  <Badge variant="outline" className="text-blue-700 ml-2">Global Coverage</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Data Consulting Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">Strategic Data Consulting</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert guidance to optimize your data strategy, architecture, and operations for competitive advantage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Search className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-3">Data Strategy Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive data strategy roadmaps aligned with business objectives, 
                  including governance frameworks and technology recommendations.
                </p>
                <div className="mt-4">
                  <Badge variant="outline">Strategy Planning</Badge>
                  <Badge variant="outline" className="ml-2">ROI Analysis</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-900 mb-3">Team Training & Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive training programs and ongoing support to build internal 
                  data capabilities and ensure successful implementation.
                </p>
                <div className="mt-4">
                  <Badge variant="outline">Skills Development</Badge>
                  <Badge variant="outline" className="ml-2">Ongoing Support</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-purple-900 mb-3">Performance Optimization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Continuous monitoring and optimization of data processes to improve 
                  efficiency, reduce costs, and maximize business value.
                </p>
                <div className="mt-4">
                  <Badge variant="outline">Process Optimization</Badge>
                  <Badge variant="outline" className="ml-2">Cost Reduction</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">Proven Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our data services deliver measurable improvements in data quality, operational efficiency, and business outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-900 mb-2">75%</div>
                <div className="text-gray-600">Time Savings</div>
                <div className="text-sm text-gray-500 mt-2">Data Processing</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-900 mb-2">99.5%</div>
                <div className="text-gray-600">Data Accuracy</div>
                <div className="text-sm text-gray-500 mt-2">Post-Cleansing</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-purple-900 mb-2">45%</div>
                <div className="text-gray-600">ROI Increase</div>
                <div className="text-sm text-gray-500 mt-2">Marketing Campaigns</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-orange-900 mb-2">3,500+</div>
                <div className="text-gray-600">Projects Completed</div>
                <div className="text-sm text-gray-500 mt-2">Since 2008</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-green-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6 text-white">Ready to Optimize Your Data?</h2>
          <p className="text-xl mb-8 leading-relaxed text-white">
            Join over 3,500 companies that have transformed their data operations with ELP Data's 
            professional services. Let's discuss your data challenges and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg rounded-lg font-semibold transition-all inline-flex items-center justify-center">
              Schedule Data Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/contact-us"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg rounded-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              Download Service Guide
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}