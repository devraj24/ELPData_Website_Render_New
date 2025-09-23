import { Building2, Award, Zap, MapPin, Star, CheckCircle, ArrowRight, Globe, Users, TrendingUp, Shield, Target, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="About ELP Data - Premium Technology Data & Business Intelligence"
        description="For over 15 years, ELP Data has been the trusted partner for organizations worldwide, providing premium business intelligence and data solutions that drive growth."
        keywords="ELP Data about, business intelligence, B2B data solutions, technology data, premium data provider"
      />
      <Header />
      
      {/* Executive Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 px-6 py-3 text-lg font-semibold">
                  <Star className="w-5 h-5 mr-2" />
                  Global Leader Since 2009
                </Badge>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  About ELP Data
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed">
                For over 15 years, the world's most trusted provider of premium technology data and business intelligence solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300">
                  Our Services
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm">
                  Contact Leadership
                </Button>
              </div>
            </div>
            
            {/* Executive Metrics */}
            <div className="grid grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-slate-300 text-lg font-medium">Years Excellence</div>
                  <div className="text-slate-400 text-sm mt-2">Established Leadership</div>
                </div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">5,000+</div>
                  <div className="text-slate-300 text-lg font-medium">Global Clients</div>
                  <div className="text-slate-400 text-sm mt-2">Fortune 500 Trust</div>
                </div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">195+</div>
                  <div className="text-slate-300 text-lg font-medium">Countries</div>
                  <div className="text-slate-400 text-sm mt-2">Worldwide Presence</div>
                </div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">99.2%</div>
                  <div className="text-slate-300 text-lg font-medium">Accuracy Rate</div>
                  <div className="text-slate-400 text-sm mt-2">Industry Leading</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Executive Design */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2008, ELP Data emerged from a simple yet powerful vision: to democratize access to high-quality business intelligence. What started as a small team of data enthusiasts has grown into a global leader in B2B data solutions, serving organizations from startups to Fortune 500 companies.
                </p>
                <p>
                  Our journey began when our founders recognized the critical gap between the data businesses needed and what was actually available in the market. Traditional data providers offered outdated, inaccurate information that led to wasted marketing spend and missed opportunities.
                </p>
                <p>
                  Today, we maintain one of the world's most comprehensive and accurate B2B databases, covering over 50 million business contacts across 195+ countries. Our commitment to data quality, innovation, and customer success continues to drive everything we do.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50M+</div>
                <div className="text-sm text-gray-600">Business Contacts</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">12M+</div>
                <div className="text-sm text-gray-600">Companies Tracked</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Technology Categories</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">99.2%</div>
                <div className="text-sm text-gray-600">Data Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Driving the core values and principles that guide our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-blue-100 bg-blue-50">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-blue-800">Our Mission</h3>
              </div>
              <p className="text-blue-700">
                To empower businesses worldwide with accurate, actionable data intelligence that drives informed decision-making, accelerates growth, and creates lasting competitive advantages. We believe that access to quality data should not be a privilege but a fundamental business right.
              </p>
            </Card>

            <Card className="p-8 border-2 border-green-100 bg-green-50">
              <div className="flex items-center mb-6">
                <Zap className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-green-800">Our Vision</h3>
              </div>
              <p className="text-green-700">
                To become the global standard for business intelligence and data solutions, recognized for our unwavering commitment to data quality, innovation, and customer success. We envision a world where every business decision is powered by reliable, comprehensive data.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that shape our culture and guide our actions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center border-2 border-blue-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Integrity</h3>
              <p className="text-sm text-blue-700">
                We maintain the highest standards of honesty, transparency, and ethical business practices in all our interactions.
              </p>
            </Card>

            <Card className="p-6 text-center border-2 border-green-100">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Excellence</h3>
              <p className="text-sm text-green-700">
                We strive for perfection in data quality, service delivery, and customer satisfaction, continuously raising the bar.
              </p>
            </Card>

            <Card className="p-6 text-center border-2 border-purple-100">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">Innovation</h3>
              <p className="text-sm text-purple-700">
                We embrace cutting-edge technology and creative solutions to stay ahead of industry trends and customer needs.
              </p>
            </Card>

            <Card className="p-6 text-center border-2 border-orange-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-3">Partnership</h3>
              <p className="text-sm text-orange-700">
                We build lasting relationships with our clients, viewing their success as our success and their challenges as our opportunities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Impact Across Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Impact Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real companies. See how our solutions drive measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Technology</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-blue-600">1,200+</div>
                  <div className="text-sm text-blue-700">Companies Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">275%</div>
                  <div className="text-sm text-blue-700">Avg. Improvement</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">$45M</div>
                  <div className="text-sm text-blue-700">Total Savings</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-green-800 mb-4">Healthcare</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-green-600">850+</div>
                  <div className="text-sm text-green-700">Companies Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">180%</div>
                  <div className="text-sm text-green-700">Avg. Improvement</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">$32M</div>
                  <div className="text-sm text-green-700">Total Savings</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Financial Services</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-purple-600">650+</div>
                  <div className="text-sm text-purple-700">Companies Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">320%</div>
                  <div className="text-sm text-purple-700">Avg. Improvement</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">$58M</div>
                  <div className="text-sm text-purple-700">Total Savings</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-orange-800 mb-4">Manufacturing</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-orange-600">900+</div>
                  <div className="text-sm text-orange-700">Companies Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">195%</div>
                  <div className="text-sm text-orange-700">Avg. Improvement</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">$41M</div>
                  <div className="text-sm text-orange-700">Total Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Knowledge Center */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources & Knowledge Center</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources and documentation to help you maximize your data intelligence initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Documentation */}
            <Card className="p-6 bg-white border-2 border-blue-100">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Documentation</h3>
              <p className="text-blue-700 mb-4">
                Complete API documentation, integration guides, and technical specifications for seamless implementation.
              </p>
              <div className="space-y-2">
                <Badge className="bg-blue-100 text-blue-700 mr-2">API Reference</Badge>
                <Badge className="bg-blue-100 text-blue-700 mr-2">Quick Start Guide</Badge>
                <Badge className="bg-blue-100 text-blue-700">Code Examples</Badge>
              </div>
            </Card>

            {/* Case Studies */}
            <Card className="p-6 bg-white border-2 border-green-100">
              <h3 className="text-xl font-bold text-green-800 mb-3">Case Studies</h3>
              <p className="text-green-700 mb-4">
                Real-world success stories showcasing how organizations leverage our data solutions to drive growth.
              </p>
              <div className="space-y-2">
                <Badge className="bg-green-100 text-green-700 mr-2">Enterprise Success</Badge>
                <Badge className="bg-green-100 text-green-700 mr-2">ROI Analysis</Badge>
                <Badge className="bg-green-100 text-green-700">Best Practices</Badge>
              </div>
            </Card>

            {/* White Papers */}
            <Card className="p-6 bg-white border-2 border-purple-100">
              <h3 className="text-xl font-bold text-purple-800 mb-3">White Papers</h3>
              <p className="text-purple-700 mb-4">
                In-depth research reports on technology trends, market analysis, and data intelligence strategies.
              </p>
              <div className="space-y-2">
                <Badge className="bg-purple-100 text-purple-700 mr-2">Market Research</Badge>
                <Badge className="bg-purple-100 text-purple-700 mr-2">Industry Trends</Badge>
                <Badge className="bg-purple-100 text-purple-700">Data Insights</Badge>
              </div>
            </Card>

            {/* Support Center */}
            <Card className="p-6 bg-white border-2 border-orange-100">
              <h3 className="text-xl font-bold text-orange-800 mb-3">Support Center</h3>
              <p className="text-orange-700 mb-4">
                Comprehensive support resources including FAQs, tutorials, and direct access to our expert team.
              </p>
              <div className="space-y-2">
                <Badge className="bg-orange-100 text-orange-700 mr-2">Help Desk</Badge>
                <Badge className="bg-orange-100 text-orange-700 mr-2">Video Tutorials</Badge>
                <Badge className="bg-orange-100 text-orange-700">Community Forum</Badge>
              </div>
            </Card>

            {/* Developer Resources */}
            <Card className="p-6 bg-white border-2 border-red-100">
              <h3 className="text-xl font-bold text-red-800 mb-3">Developer Resources</h3>
              <p className="text-red-700 mb-4">
                Tools and resources for developers integrating ELP Data solutions into their applications and workflows.
              </p>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• RESTful API endpoints with authentication</li>
                <li>• SDKs for popular programming languages</li>
                <li>• Webhook configurations and event handling</li>
                <li>• Rate limiting and usage monitoring tools</li>
              </ul>
            </Card>

            {/* Training & Certification */}
            <Card className="p-6 bg-white border-2 border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-800 mb-3">Training & Certification</h3>
              <p className="text-indigo-700 mb-4">
                Professional training programs to help your team maximize the value of our data intelligence platform.
              </p>
              <ul className="text-sm text-indigo-700 space-y-1">
                <li>• Data analysis and interpretation workshops</li>
                <li>• Advanced search and filtering techniques</li>
                <li>• Integration best practices and optimization</li>
                <li>• Certification programs for power users</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner with ELP Data?</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Join thousands of organizations worldwide who trust ELP Data for their business intelligence and data solution needs. Let's discuss how we can help accelerate your growth.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}