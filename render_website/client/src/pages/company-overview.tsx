import { Building2, Award, Zap, Phone, Mail, Star, CheckCircle, ArrowRight, Globe, Users, TrendingUp, Shield, Target } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CompanyOverview() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="ELP Data Company Overview - Premium Technology Data & Business Intelligence"
        description="For over 15 years, ELP Data has been the world's most trusted provider of premium technology data and business intelligence solutions, serving 5,000+ clients across 195+ countries."
        keywords="ELP Data company overview, premium technology data, business intelligence, global data provider, technology intelligence"
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
                  ELP Data
                </span>
                <br />
                <span className="text-white text-4xl lg:text-5xl">Company Overview</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed">
                Pioneering enterprise intelligence through proprietary data extraction, AI-powered analytics, and real-time technology tracking across 500+ software platforms and 2.8M+ global organizations
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <a href="/data-services">
                    View Our Services
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm">
                  <a href="/business-contact-data">
                    Get In Touch
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Executive Metrics */}
            <div className="grid grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-slate-300 text-lg font-medium">Years of Excellence</div>
                  <div className="text-slate-400 text-sm mt-2">Established Leadership</div>
                </div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">5,000+</div>
                  <div className="text-slate-300 text-lg font-medium">Enterprise Clients</div>
                  <div className="text-slate-400 text-sm mt-2">Global Fortune 500</div>
                </div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">195+</div>
                  <div className="text-slate-300 text-lg font-medium">Countries Served</div>
                  <div className="text-slate-400 text-sm mt-2">Worldwide Presence</div>
                </div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">99.2%</div>
                  <div className="text-slate-300 text-lg font-medium">Data Accuracy</div>
                  <div className="text-slate-400 text-sm mt-2">Industry Leading</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Story Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 text-lg font-semibold mb-8">
              Our Story
            </Badge>
            <h2 className="text-5xl font-bold text-slate-900 mb-8">From Vision to Global Leadership</h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Founded in 2009, ELP Data emerged from a revolutionary insight: traditional B2B databases were fundamentally flawed, relying on outdated survey methods and static directories. We pioneered a new approach - leveraging proprietary web crawling technology, AI-powered data verification, and real-time technology stack detection to create the world's most accurate enterprise intelligence platform.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="bg-white border-2 border-orange-100 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Mission</h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  To revolutionize B2B intelligence by providing the world's most accurate, real-time technology adoption data and verified contact information, enabling organizations to identify prospects with surgical precision and accelerate growth through data-driven insights.
                </p>
              </div>
            </Card>
            
            <Card className="bg-white border-2 border-blue-100 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Vision</h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  To establish the global standard for enterprise technology intelligence, where every business decision is powered by verified, real-time data about technology adoption, market trends, and organizational structures across the world's largest companies.
                </p>
              </div>
            </Card>
            
            <Card className="bg-white border-2 border-green-100 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Values</h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  Data Accuracy Above All: Every data point undergoes multi-layer verification. Innovation Through Technology: Proprietary AI algorithms continuously enhance data quality. Customer Success Partnership: We measure our success by our clients' growth and ROI achievements.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different - Comprehensive Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 text-lg font-semibold mb-8">
              Competitive Advantage
            </Badge>
            <h2 className="text-5xl font-bold text-slate-900 mb-8">What Makes ELP Data Different</h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Unlike traditional B2B data providers who rely on outdated surveys and purchased lists, ELP Data has built the world's most advanced enterprise intelligence platform through proprietary technology and innovative data collection methods.
            </p>
          </div>

          {/* Core Differentiators */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-10 rounded-3xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Proprietary Technology Stack</h3>
                  <p className="text-slate-700 text-lg leading-relaxed mb-4">
                    Our AI-powered web crawling technology continuously monitors 500+ enterprise software platforms in real-time, automatically detecting technology implementations, version updates, and infrastructure changes across millions of websites.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Real-time technology stack detection</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Automated data verification and enrichment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Multi-source data validation algorithms</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Continuous data freshness monitoring</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 p-10 rounded-3xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Unmatched Data Accuracy</h3>
                  <p className="text-slate-700 text-lg leading-relaxed mb-4">
                    While competitors achieve 60-70% accuracy rates, ELP Data maintains 99.2% verified accuracy through our revolutionary multi-layer verification process, combining automated validation with human expert review.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">7-stage data verification process</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Email deliverability guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Real-time contact validation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">GDPR & CCPA compliant data sourcing</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Data Sources & Methodology */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Proprietary Data Collection Methodology</h3>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                ELP Data leverages 15+ proprietary data sources and advanced AI algorithms to build the world's most comprehensive enterprise intelligence database.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Web Intelligence</h4>
                <p className="text-slate-700 text-sm">
                  Continuous monitoring of 50M+ corporate websites, analyzing technology headers, DNS records, SSL certificates, and infrastructure signatures to detect enterprise software implementations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Social Intelligence</h4>
                <p className="text-slate-700 text-sm">
                  Professional network analysis across LinkedIn, GitHub, and industry forums to identify decision-makers, technology champions, and organizational structures within target companies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Market Intelligence</h4>
                <p className="text-slate-700 text-sm">
                  Real-time analysis of funding rounds, merger activity, job postings, and technology adoption patterns to predict future enterprise technology investments and buying cycles.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Partnership Networks</h4>
                <p className="text-slate-700 text-sm">
                  Exclusive data partnerships with leading technology vendors, system integrators, and consulting firms to access implementation data and customer deployment information.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Corporate Filings</h4>
                <p className="text-slate-700 text-sm">
                  Automated analysis of SEC filings, annual reports, and regulatory submissions to identify technology investments, vendor relationships, and strategic technology initiatives.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Intent Data</h4>
                <p className="text-slate-700 text-sm">
                  Advanced behavioral tracking and content consumption analysis to identify companies actively researching specific technology solutions and predict purchase intent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-white/20 text-white px-6 py-3 text-lg font-semibold mb-8">
              Global Impact
            </Badge>
            <h2 className="text-5xl font-bold mb-8 text-white">Driving Success Worldwide</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              ELP Data powers the world's most successful sales, marketing, and business development teams with precision-targeted intelligence that converts prospects into customers at industry-leading rates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Enterprise Implementation */}
            <Card className="p-8 border-2 border-blue-100 bg-blue-50">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Building2 className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-blue-800">Enterprise Implementation</h3>
                </div>
                <p className="text-blue-700 mb-6">
                  Advanced enterprise technology intelligence services designed for Fortune 500 companies and global technology leaders seeking comprehensive market insights and competitive advantage.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <Badge className="bg-blue-100 text-blue-700 text-center py-2">Enterprise Deployment</Badge>
                  <Badge className="bg-blue-100 text-blue-700 text-center py-2">System Integration</Badge>
                  <Badge className="bg-blue-100 text-blue-700 text-center py-2">User Training</Badge>
                  <Badge className="bg-blue-100 text-blue-700 text-center py-2">Support Services</Badge>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Target Industries:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Large Enterprise Organizations</li>
                      <li>• Multi-national Corporations</li>
                      <li>• Fortune 500 Companies</li>
                      <li>• Global Technology Leaders</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Responsible Job Titles:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• IT Director</li>
                      <li>• Systems Administrator</li>
                      <li>• Enterprise Architect</li>
                      <li>• Technology Manager</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Current Challenges:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Large-scale deployment and configuration challenges</li>
                      <li>• Integration with existing enterprise infrastructure</li>
                      <li>• User adoption and training across multiple locations</li>
                      <li>• Performance optimization for high-volume usage</li>
                      <li>• Security and compliance requirements</li>
                      <li>• License management and cost optimization</li>
                      <li>• Vendor relationship and support coordination</li>
                      <li>• Change management and organizational adoption</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Business Operations */}
            <Card className="p-8 border-2 border-green-100 bg-green-50">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-green-800">Business Operations</h3>
                </div>
                <p className="text-green-700 mb-6">
                  Comprehensive business intelligence and market analysis services that transform raw data into actionable insights, enabling data-driven decision making and strategic planning across all business functions.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <Badge className="bg-green-100 text-green-700 text-center py-2">Process Optimization</Badge>
                  <Badge className="bg-green-100 text-green-700 text-center py-2">Workflow Management</Badge>
                  <Badge className="bg-green-100 text-green-700 text-center py-2">Business Intelligence</Badge>
                  <Badge className="bg-green-100 text-green-700 text-center py-2">Analytics</Badge>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Target Industries:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Manufacturing & Production</li>
                      <li>• Service Industries</li>
                      <li>• Consulting & Professional Services</li>
                      <li>• Retail & Distribution</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Responsible Job Titles:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Operations Manager</li>
                      <li>• Business Analyst</li>
                      <li>• Process Improvement Specialist</li>
                      <li>• Department Head</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Current Challenges:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Business process optimization and automation</li>
                      <li>• Data quality and consistency management</li>
                      <li>• Reporting and analytics requirements</li>
                      <li>• Cross-department collaboration and workflows</li>
                      <li>• Performance metrics and KPI tracking</li>
                      <li>• Regulatory compliance and audit trails</li>
                      <li>• Custom configuration and business rules</li>
                      <li>• Integration with third-party business applications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Implementation Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Technical Administration */}
            <Card className="p-6 bg-white border-2 border-purple-100">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-purple-800 mb-2">Technical Administration</h3>
                <p className="text-sm text-purple-700 mb-4">
                  Company Overview implementation for technical administration and organizational efficiency
                </p>
                
                <div className="space-y-2 mb-4">
                  <Badge className="bg-purple-100 text-purple-700 text-xs">System Administration</Badge>
                  <Badge className="bg-purple-100 text-purple-700 text-xs">Configuration Management</Badge>
                  <Badge className="bg-purple-100 text-purple-700 text-xs">Performance Tuning</Badge>
                  <Badge className="bg-purple-100 text-purple-700 text-xs">Maintenance</Badge>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-purple-800">Target Industries:</h4>
                    <p className="text-xs text-purple-700">Technology Service Providers, Managed Service Companies, IT Consulting Firms, System Integrators</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-purple-800">Job Titles:</h4>
                    <p className="text-xs text-purple-700">System Administrator, Technical Lead, DevOps Engineer, Infrastructure Specialist</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* User Experience & Training */}
            <Card className="p-6 bg-white border-2 border-orange-100">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-orange-800 mb-2">User Experience & Training</h3>
                <p className="text-sm text-orange-700 mb-4">
                  Company Overview implementation for user experience & training and organizational efficiency
                </p>
                
                <div className="space-y-2 mb-4">
                  <Badge className="bg-orange-100 text-orange-700 text-xs">User Training</Badge>
                  <Badge className="bg-orange-100 text-orange-700 text-xs">Change Management</Badge>
                  <Badge className="bg-orange-100 text-orange-700 text-xs">Support Services</Badge>
                  <Badge className="bg-orange-100 text-orange-700 text-xs">Adoption Programs</Badge>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-orange-800">Target Industries:</h4>
                    <p className="text-xs text-orange-700">Education & Training Organizations, Human Resources Departments, Corporate Training, End-user Support Teams</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-orange-800">Job Titles:</h4>
                    <p className="text-xs text-orange-700">Training Manager, Change Management Specialist, User Experience Manager, Support Team Lead</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Compliance & Security */}
            <Card className="p-6 bg-white border-2 border-red-100">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-red-800 mb-2">Compliance & Security</h3>
                <p className="text-sm text-red-700 mb-4">
                  Company Overview implementation for compliance & security and organizational efficiency
                </p>
                
                <div className="space-y-2 mb-4">
                  <Badge className="bg-red-100 text-red-700 text-xs">Security Management</Badge>
                  <Badge className="bg-red-100 text-red-700 text-xs">Compliance Monitoring</Badge>
                  <Badge className="bg-red-100 text-red-700 text-xs">Risk Assessment</Badge>
                  <Badge className="bg-red-100 text-red-700 text-xs">Audit Preparation</Badge>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-red-800">Target Industries:</h4>
                    <p className="text-xs text-red-700">Regulated Industries, Financial Services, Healthcare Organizations, Government Agencies</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-red-800">Job Titles:</h4>
                    <p className="text-xs text-red-700">Compliance Officer, Security Administrator, Risk Manager, Audit Specialist</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Strategic Planning */}
            <Card className="p-6 bg-white border-2 border-indigo-100">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-indigo-800 mb-2">Strategic Planning</h3>
                <p className="text-sm text-indigo-700 mb-4">
                  Company Overview implementation for strategic planning and organizational efficiency
                </p>
                
                <div className="space-y-2 mb-4">
                  <Badge className="bg-indigo-100 text-indigo-700 text-xs">Strategic Planning</Badge>
                  <Badge className="bg-indigo-100 text-indigo-700 text-xs">Technology Roadmap</Badge>
                  <Badge className="bg-indigo-100 text-indigo-700 text-xs">ROI Analysis</Badge>
                  <Badge className="bg-indigo-100 text-indigo-700 text-xs">Vendor Management</Badge>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-indigo-800">Target Industries:</h4>
                    <p className="text-xs text-indigo-700">Executive Leadership, Strategic Planning Departments, Technology Planning, Business Development</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-indigo-800">Job Titles:</h4>
                    <p className="text-xs text-indigo-700">Chief Technology Officer, IT Strategy Manager, Business Development Director, Strategic Planning Analyst</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Specialized Services */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 text-lg font-semibold mb-8">
              Service Excellence
            </Badge>
            <h2 className="text-5xl font-bold text-slate-900 mb-8">How Our Services Are Different</h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              ELP Data doesn't just provide data - we deliver comprehensive intelligence solutions tailored to your specific business objectives and industry requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="bg-white border-2 border-blue-100 p-8 rounded-3xl shadow-xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Precision Targeting</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Advanced filtering and segmentation capabilities that identify your ideal prospects with surgical precision - down to specific technology versions, implementation dates, and buying cycle stages.
                </p>
                <ul className="text-sm text-slate-600 text-left space-y-2">
                  <li>• Technology stack-specific targeting</li>
                  <li>• Decision-maker identification</li>
                  <li>• Buying intent prediction</li>
                  <li>• Account-based marketing support</li>
                </ul>
              </div>
            </Card>

            <Card className="bg-white border-2 border-green-100 p-8 rounded-3xl shadow-xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Real-Time Intelligence</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Dynamic data that updates in real-time as companies change technologies, hire new staff, or modify their infrastructure - ensuring your outreach is always timely and relevant.
                </p>
                <ul className="text-sm text-slate-600 text-left space-y-2">
                  <li>• Technology adoption alerts</li>
                  <li>• Executive movement tracking</li>
                  <li>• Funding round notifications</li>
                  <li>• Competitive intelligence updates</li>
                </ul>
              </div>
            </Card>

            <Card className="bg-white border-2 border-orange-100 p-8 rounded-3xl shadow-xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Compliance & Quality</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Enterprise-grade data governance with full GDPR, CCPA, and SOC 2 compliance. Every contact comes with deliverability guarantees and audit trails for complete peace of mind.
                </p>
                <ul className="text-sm text-slate-600 text-left space-y-2">
                  <li>• 99.2% data accuracy guarantee</li>
                  <li>• Email deliverability assurance</li>
                  <li>• Privacy law compliance</li>
                  <li>• Full data lineage tracking</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-12 text-white">
              <h3 className="text-4xl font-bold mb-6 text-white">Ready to Experience the Difference?</h3>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Join 5,000+ enterprise clients who trust ELP Data to power their most critical business development initiatives. See why our data quality and service excellence are unmatched in the industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-2xl">
                  <a href="/contact">
                    Schedule Demo
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm">
                  <a href="/data-services">
                    View Our Services
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}