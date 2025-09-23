import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search, Globe, FileText, Brain, Target, TrendingUp, BarChart3, Building, Users, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function IntentDataSolutions() {
  return (
    <>
      <SEOHead 
        title="Intent Data Solutions | ELP Data"
        description="Advanced buyer intent intelligence to identify prospects actively researching solutions, predict purchase behavior, and optimize sales timing."
        keywords="intent data, buyer intent, sales intelligence, purchase behavior, prospect identification"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                <Brain className="w-4 h-4 mr-2" />
                Intent Data Solutions
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Advanced Buyer Intent Intelligence
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Advanced buyer intent intelligence to identify prospects actively researching solutions, 
                predict purchase behavior, and optimize sales timing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  Request Intent Data
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4">
                  ABM Platforms
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Intent Data Categories */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Intent Data Categories
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">Search Intent Signals</CardTitle>
                  <CardDescription>
                    Real-time monitoring of search behaviors, keyword research patterns, and content consumption across search engines.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">85M+</span>
                      <span className="text-sm text-gray-500">Monthly Searches</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Google, Bing, enterprise search
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-xl">Web Behavior Analysis</CardTitle>
                  <CardDescription>
                    Track website visits, content engagement, pricing page views, and competitor research activities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-600">450M+</span>
                      <span className="text-sm text-gray-500">Web Sessions</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      B2B websites and portals
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-xl">Content Consumption Intent</CardTitle>
                  <CardDescription>
                    Monitor whitepaper downloads, demo requests, and research report engagement across vendor platforms.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">2.3M+</span>
                      <span className="text-sm text-gray-500">Content Actions</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Vendor sites and portals
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI-Powered Intent Scoring */}
        <section className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                AI-Powered Intent Scoring
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Multi-Signal Analysis Engine</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Machine Learning Models</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Advanced algorithms analyze 150+ behavioral signals to predict purchase probability.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Real-Time Scoring</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Intent scores updated every 2 hours based on latest behavioral data.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Forecast optimal engagement timing and channel preferences.
                </p>
              </div>
            </div>

            {/* Intent Score Distribution */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Intent Score Distribution</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">18%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">High Intent (80-100)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Medium Intent (60-79)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">31%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Low Intent (40-59)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-600 mb-2">27%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Minimal Intent (0-39)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intent Data Applications */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Intent Data Applications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <Target className="w-8 h-8 text-blue-600 mb-4" />
                  <CardTitle className="text-lg">Account-Based Marketing</CardTitle>
                  <CardDescription>
                    Identify high-intent target accounts for personalized ABM campaigns and prioritize outreach efforts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-blue-600">42% higher conversion rates</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <Users className="w-8 h-8 text-purple-600 mb-4" />
                  <CardTitle className="text-lg">Sales Outreach Timing</CardTitle>
                  <CardDescription>
                    Optimize call timing and email sequences based on real-time intent signals and buying stage indicators.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-purple-600">68% improvement in response rates</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <BarChart3 className="w-8 h-8 text-green-600 mb-4" />
                  <CardTitle className="text-lg">Advertising Optimization</CardTitle>
                  <CardDescription>
                    Target high-intent audiences with personalized ads and adjust bidding strategies for maximum ROI.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-green-600">89% reduction in cost per acquisition</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <TrendingUp className="w-8 h-8 text-orange-600 mb-4" />
                  <CardTitle className="text-lg">Pipeline Forecasting</CardTitle>
                  <CardDescription>
                    Predict pipeline velocity and deal closure probability using historical intent patterns and current signals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-orange-600">23% more accurate forecasts</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <Search className="w-8 h-8 text-indigo-600 mb-4" />
                  <CardTitle className="text-lg">Competitive Intelligence</CardTitle>
                  <CardDescription>
                    Monitor competitor research activities and identify accounts considering alternative solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-indigo-600">Early warning for at-risk accounts</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <Building className="w-8 h-8 text-pink-600 mb-4" />
                  <CardTitle className="text-lg">Customer Expansion</CardTitle>
                  <CardDescription>
                    Identify upsell and cross-sell opportunities within existing customer base using intent signals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-pink-600">34% increase in expansion revenue</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Data Sources & Coverage */}
        <section className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Data Sources & Coverage
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Search Engines</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Google, Bing, DuckDuckGo</p>
                <div className="text-2xl font-bold text-blue-600">85M+</div>
                <div className="text-sm text-gray-500">monthly searches</div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold mb-2">B2B Websites</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Vendor sites, review platforms</p>
                <div className="text-2xl font-bold text-purple-600">12K+</div>
                <div className="text-sm text-gray-500">tracked domains</div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Content Platforms</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Research portals, communities</p>
                <div className="text-2xl font-bold text-green-600">2.3M+</div>
                <div className="text-sm text-gray-500">content interactions</div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Social Networks</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">LinkedIn, Twitter, forums</p>
                <div className="text-2xl font-bold text-orange-600">450K+</div>
                <div className="text-sm text-gray-500">professional posts</div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Email Campaigns</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Newsletter opens, link clicks</p>
                <div className="text-2xl font-bold text-indigo-600">180M+</div>
                <div className="text-sm text-gray-500">email interactions</div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Event Platforms</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Webinars, virtual events</p>
                <div className="text-2xl font-bold text-pink-600">2.8M+</div>
                <div className="text-sm text-gray-500">event engagements</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Accelerate Sales with Intent Intelligence
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Identify high-intent prospects, optimize engagement timing, and increase conversion rates with advanced buyer intent data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                  Request Intent Data
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4">
                  Explore ABM Solutions
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