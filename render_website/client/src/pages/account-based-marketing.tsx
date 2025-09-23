import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Users, BarChart3, Building, Zap, TrendingUp, Search } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AccountBasedMarketing() {
  return (
    <>
      <SEOHead 
        title="Account-Based Marketing Services | ELP Data"
        description="Strategic account-based marketing solutions that target high-value prospects with personalized campaigns, custom content, and multi-channel engagement strategies to accelerate sales cycles and maximize deal sizes."
        keywords="account-based marketing, ABM services, targeted marketing, B2B marketing, personalized campaigns"
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
                Account-Based Marketing Services
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Strategic ABM Solutions
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Strategic account-based marketing solutions that target high-value prospects with personalized campaigns, 
                custom content, and multi-channel engagement strategies to accelerate sales cycles and maximize deal sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  Start ABM Campaign
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4">
                  Intent Data Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ABM Service Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                ABM Service Solutions
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">Strategic Account Targeting</CardTitle>
                  <CardDescription>
                    Advanced account identification and targeting services with intent data analysis and precision targeting strategies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">97%</span>
                      <span className="text-sm text-gray-500">Target Accuracy</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Account scoring • Intent analysis • Lookalike modeling
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-xl">Personalized Engagement</CardTitle>
                  <CardDescription>
                    Custom content creation and multi-channel engagement strategies tailored to specific target accounts and stakeholders.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-600">3x</span>
                      <span className="text-sm text-gray-500">Higher Engagement</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Custom content • Multi-channel • Stakeholder mapping
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-xl">Campaign Analytics & ROI</CardTitle>
                  <CardDescription>
                    Comprehensive performance measurement and attribution analysis for ABM campaign optimization and ROI tracking.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">208%</span>
                      <span className="text-sm text-gray-500">Average ROI</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Performance tracking • Attribution • Optimization
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ABM Performance Benchmarks */}
        <section className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                ABM Performance Benchmarks
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">208%</div>
                <div className="text-gray-600 dark:text-gray-400">Higher Marketing ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">36%</div>
                <div className="text-gray-600 dark:text-gray-400">Increase in Deal Size</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">71%</div>
                <div className="text-gray-600 dark:text-gray-400">Higher Account Engagement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">18%</div>
                <div className="text-gray-600 dark:text-gray-400">Faster Sales Cycles</div>
              </div>
            </div>
          </div>
        </section>

        {/* ABM Implementation Strategies */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                ABM Implementation Strategies
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <CardTitle className="text-xl">Strategic ABM</CardTitle>
                  <CardDescription>
                    One-to-one marketing for top-tier accounts with highly personalized campaigns and dedicated resources.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600 mb-2">5-20</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Target Accounts</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <CardTitle className="text-xl">ABM Lite</CardTitle>
                  <CardDescription>
                    One-to-few approach targeting account clusters with similar characteristics and semi-personalized content.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600 mb-2">50-500</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Target Accounts</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <CardTitle className="text-xl">Programmatic ABM</CardTitle>
                  <CardDescription>
                    One-to-many strategy using automation and AI for scalable account targeting and engagement.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-2">1,000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Target Accounts</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ABM Platform Users by Company Size */}
        <section className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                ABM Platform Users by Company Size
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="w-8 h-8 text-blue-600" />
                    <div>
                      <CardTitle className="text-xl">Enterprise (10,000+ employees)</CardTitle>
                      <CardDescription>Strategic ABM Programs</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-2xl font-bold text-blue-600">8,400</span>
                    <span className="text-sm text-gray-500">companies</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Average Annual ABM Budget</span>
                      <span className="font-medium">$2.4M - $8.7M</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Average Target Accounts</span>
                      <span className="font-medium">150 - 500</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="w-8 h-8 text-purple-600" />
                    <div>
                      <CardTitle className="text-xl">Mid-Market (1,000-9,999 employees)</CardTitle>
                      <CardDescription>ABM Lite & Programmatic</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-2xl font-bold text-purple-600">14,200</span>
                    <span className="text-sm text-gray-500">companies</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Average Annual ABM Budget</span>
                      <span className="font-medium">$180K - $950K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Average Target Accounts</span>
                      <span className="font-medium">50 - 300</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ABM Decision Makers & Influencers */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                ABM Decision Makers & Influencers
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <CardTitle className="text-lg">VP of Marketing</CardTitle>
                  <CardDescription>
                    Strategic ABM program oversight and platform selection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">12,400+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">contacts</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <CardTitle className="text-lg">ABM Program Manager</CardTitle>
                  <CardDescription>
                    Day-to-day ABM campaign execution and optimization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">8,600+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">contacts</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <CardTitle className="text-lg">Demand Generation Manager</CardTitle>
                  <CardDescription>
                    Account targeting and lead generation strategy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">14,200+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">contacts</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <CardTitle className="text-lg">Sales Development Director</CardTitle>
                  <CardDescription>
                    Sales and marketing alignment for account penetration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">9,800+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">contacts</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <CardTitle className="text-lg">Marketing Operations Manager</CardTitle>
                  <CardDescription>
                    ABM technology stack and data management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-indigo-600">11,600+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">contacts</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                <CardHeader>
                  <CardTitle className="text-lg">Customer Success Director</CardTitle>
                  <CardDescription>
                    Account expansion and retention strategies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-pink-600">7,400+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">contacts</div>
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
                Connect with ABM Platform Users
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Access decision-makers at enterprises using account-based marketing platforms for high-value account targeting and engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                  Get ABM Database Access
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4">
                  Intent Data Solutions
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