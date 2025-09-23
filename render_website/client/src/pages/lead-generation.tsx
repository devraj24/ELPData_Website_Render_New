import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Users, Phone, Mail, TrendingUp, Building, Heart, GraduationCap, Factory, DollarSign, Clock, CheckCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LeadGeneration() {
  return (
    <>
      <SEOHead 
        title="Lead Generation Services | ELP Data"
        description="Professional lead generation services combining verified contact data, intelligent targeting, and multi-channel outreach to accelerate pipeline growth."
        keywords="lead generation, B2B leads, qualified prospects, sales pipeline, lead qualification"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                <Target className="w-4 h-4 mr-2" />
                Lead Generation Services
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Professional Lead Generation
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Professional lead generation services combining verified contact data, intelligent targeting, 
                and multi-channel outreach to accelerate pipeline growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  Request Lead Generation
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4">
                  Marketing Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Lead Generation Services */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Comprehensive Lead Generation Services
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">Targeted Prospecting</CardTitle>
                  <CardDescription>
                    Advanced prospect identification using technology stack analysis, company growth signals, and buying intent data.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">2.8M+</span>
                      <span className="text-sm text-gray-500">Qualified Prospects</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Technology-based targeting
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-xl">Email Campaign Management</CardTitle>
                  <CardDescription>
                    Professional email sequences with A/B testing, personalization, and automated follow-up optimization.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-600">18.3%</span>
                      <span className="text-sm text-gray-500">Average Open Rate</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Industry-leading performance
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-xl">Cold Calling Services</CardTitle>
                  <CardDescription>
                    Professional sales development representatives with industry expertise and proven conversion methodologies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">12.7%</span>
                      <span className="text-sm text-gray-500">Connection Rate</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Qualified conversations
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 5-Step Lead Generation Process */}
        <section className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                5-Step Lead Generation Process
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Target Identification</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Analyze your ideal customer profile and identify high-value prospects using technology and growth signals
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Data Enrichment</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enrich prospect profiles with verified contact information, company intelligence, and buying triggers
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Campaign Development</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Create personalized multi-channel campaigns with targeted messaging and optimal timing strategies
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Outreach Execution</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Deploy professional outreach across email, phone, and social channels with consistent follow-up
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Lead Qualification</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Qualify and score leads based on engagement, fit, and purchase intent before handoff to sales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Generation Performance */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Lead Generation Performance
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">94.6%</div>
                <div className="text-gray-600 dark:text-gray-400">Data Accuracy Rate</div>
                <div className="text-sm text-gray-500 mt-1">Verified contact information</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">47%</div>
                <div className="text-gray-600 dark:text-gray-400">Lead-to-Opportunity Rate</div>
                <div className="text-sm text-gray-500 mt-1">Qualified prospects only</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">23%</div>
                <div className="text-gray-600 dark:text-gray-400">Faster Sales Cycles</div>
                <div className="text-sm text-gray-500 mt-1">Pre-qualified leads</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">$1.2M</div>
                <div className="text-gray-600 dark:text-gray-400">Average Pipeline Value</div>
                <div className="text-sm text-gray-500 mt-1">Per campaign (3 months)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Specializations */}
        <section className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Industry Specializations
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <Building className="w-8 h-8 text-blue-600 mb-4" />
                  <CardTitle className="text-lg">Technology & Software</CardTitle>
                  <CardDescription>
                    SaaS platforms, enterprise software, cybersecurity, and cloud services targeting IT decision-makers and C-level executives.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-blue-600">24,800+ qualified leads generated</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <DollarSign className="w-8 h-8 text-purple-600 mb-4" />
                  <CardTitle className="text-lg">Financial Services</CardTitle>
                  <CardDescription>
                    Banks, investment firms, insurance companies, and fintech startups seeking technology solutions and professional services.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-purple-600">18,400+ qualified leads generated</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <Heart className="w-8 h-8 text-green-600 mb-4" />
                  <CardTitle className="text-lg">Healthcare & Life Sciences</CardTitle>
                  <CardDescription>
                    Hospitals, pharmaceutical companies, medical device manufacturers, and healthcare technology providers.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-green-600">14,600+ qualified leads generated</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <Factory className="w-8 h-8 text-orange-600 mb-4" />
                  <CardTitle className="text-lg">Manufacturing & Industrial</CardTitle>
                  <CardDescription>
                    Manufacturing companies, industrial equipment suppliers, and logistics providers seeking operational technology solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-orange-600">16,200+ qualified leads generated</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <Building className="w-8 h-8 text-indigo-600 mb-4" />
                  <CardTitle className="text-lg">Retail & E-commerce</CardTitle>
                  <CardDescription>
                    Retailers, e-commerce platforms, consumer brands, and omnichannel solutions targeting marketing and operations teams.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-indigo-600">12,900+ qualified leads generated</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <GraduationCap className="w-8 h-8 text-pink-600 mb-4" />
                  <CardTitle className="text-lg">Education & Non-Profit</CardTitle>
                  <CardDescription>
                    Universities, K-12 schools, non-profit organizations, and educational technology companies seeking digital transformation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-pink-600">9,800+ qualified leads generated</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Lead Generation Packages */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Lead Generation Packages
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <CardTitle className="text-xl">Starter Package</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">For growing businesses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>500 qualified leads/month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Email campaign management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Basic lead scoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Monthly performance reports</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-3xl font-bold text-blue-600">$2,500/mo</div>
                    <div className="text-sm text-gray-500">3-month minimum</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-500 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white">POPULAR</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Professional Package</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">For established companies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>1,500 qualified leads/month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Multi-channel campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Advanced lead scoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>CRM integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Dedicated account manager</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-3xl font-bold text-blue-600">$6,500/mo</div>
                    <div className="text-sm text-gray-500">6-month minimum</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <CardTitle className="text-xl">Enterprise Package</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">For large organizations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>3,000+ qualified leads/month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Full-service campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Custom lead scoring models</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Sales team training</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>White-label solutions</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-3xl font-bold text-blue-600">Custom</div>
                    <div className="text-sm text-gray-500">12-month minimum</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Accelerate Your Pipeline Growth
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Partner with our lead generation experts to build a consistent pipeline of qualified prospects and accelerate revenue growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                  Request Lead Generation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4">
                  Explore Marketing Solutions
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