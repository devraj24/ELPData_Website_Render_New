import { useState } from 'react';
import { ChevronRight, Database, Users, Target, Zap, Shield, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TechnologyDataPlatformPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const platformFeatures = [
    {
      icon: Database,
      title: "1000+ Technology Databases",
      description: "Access comprehensive databases covering enterprise software from SAP and Oracle to emerging AI platforms and cloud solutions.",
      metrics: "50M+ corporate websites analyzed daily"
    },
    {
      icon: Users,
      title: "Verified Decision-Maker Contacts",
      description: "99.2% accurate contact data with email validation, phone verification, and real-time employment confirmation.",
      metrics: "10M+ verified contacts across all industries"
    },
    {
      icon: Target,
      title: "Precision Targeting Intelligence",
      description: "AI-powered technology footprint analysis enables precise prospect identification based on current implementations.",
      metrics: "97.8% targeting accuracy for technology intelligence"
    },
    {
      icon: Zap,
      title: "Real-Time Data Intelligence",
      description: "Live technology adoption tracking, implementation monitoring, and instant alerts for sales trigger events.",
      metrics: "24/7 continuous monitoring and updates"
    }
  ];

  const technologyCategories = [
    { name: "Enterprise Resource Planning (ERP)", companies: "487,592", contacts: "1,847,328", popular: ["SAP", "Oracle", "Microsoft Dynamics"] },
    { name: "Customer Relationship Management (CRM)", companies: "523,891", contacts: "1,956,234", popular: ["Salesforce", "HubSpot", "Microsoft CRM"] },
    { name: "Human Resources Management (HRM)", companies: "312,456", contacts: "1,234,567", popular: ["Workday", "BambooHR", "ADP"] },
    { name: "Transportation Management (TMS)", companies: "89,234", contacts: "356,789", popular: ["Manhattan", "SAP TM", "Oracle TMS"] },
    { name: "Manufacturing & Production", companies: "156,789", contacts: "623,456", popular: ["Sage", "Epicor", "NetSuite"] },
    { name: "Healthcare Technology", companies: "78,234", contacts: "312,890", popular: ["Epic", "Cerner", "Allscripts"] },
    { name: "Mainframe & Legacy Systems", companies: "8,738", contacts: "28,911", popular: ["IBM z/OS", "COBOL", "AS/400"] },
    { name: "Cloud Infrastructure", companies: "234,567", contacts: "987,654", popular: ["AWS", "Microsoft Azure", "Google Cloud"] }
  ];

  const competitiveAdvantages = [
    {
      feature: "Data Accuracy",
      elpData: "99.2%",
      industry: "60-70%",
      advantage: "Superior verification processes"
    },
    {
      feature: "Technology Coverage",
      elpData: "1000+ platforms",
      industry: "200-300 platforms",
      advantage: "Comprehensive technology intelligence"
    },
    {
      feature: "Real-Time Updates",
      elpData: "24/7 monitoring",
      industry: "Monthly/Quarterly",
      advantage: "Instant trigger event detection"
    },
    {
      feature: "Contact Verification",
      elpData: "Multi-layer validation",
      industry: "Basic email check",
      advantage: "Phone, employment, communication consent"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Technology Data Platform - Business Intelligence & Enterprise Insights | ELP Data"
        description="The leading technology data platform providing business intelligence across 1000+ enterprise applications. Access verified technology installation data, decision-maker contacts, and real-time intelligence for precise B2B targeting and sales acceleration."
        keywords="technology data platform, business intelligence platform, enterprise technology data, technology installation data, B2B technology intelligence, enterprise software intelligence, technology adoption data, business intelligence software, technology market data, enterprise implementation intelligence"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-0 px-6 py-3 text-lg font-semibold mb-8">
                #1 Technology Data Platform
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  The Most Comprehensive
                </span>
                <br />
                <span className="text-white">Technology Data Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
                Access business intelligence across 1000+ enterprise applications with 99.2% data accuracy. 
                Accelerate B2B sales with verified technology installation data and decision-maker contacts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                  Explore Platform Features
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-blue-900">
                  Request Demo
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="text-blue-200 text-sm">Technology Platforms</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">50M+</div>
                  <div className="text-blue-200 text-sm">Websites Analyzed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">99.2%</div>
                  <div className="text-blue-200 text-sm">Data Accuracy</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Platform Capabilities</h3>
              <div className="space-y-4">
                {['Enterprise Technology Intelligence', 'Real-Time Implementation Tracking', 'Decision-Maker Contact Verification', 'AI-Powered Market Analysis'].map((capability, index) => (
                  <div key={index} className="flex items-center text-white">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Why Leading B2B Companies Choose Our Technology Data Platform
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive business intelligence that transforms how you identify, target, and engage with enterprise technology decision-makers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-slate-100 hover:border-blue-200">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{feature.description}</p>
                    <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-2 rounded-lg">
                      {feature.metrics}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Enterprise Technology Intelligence Across All Industries
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our technology data platform covers comprehensive business intelligence across major enterprise software categories, 
              providing verified installation data and decision-maker contacts for precise B2B targeting.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {technologyCategories.map((category, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 flex-1">{category.name}</h3>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{category.companies}</div>
                    <div className="text-sm text-slate-600">Companies</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{category.contacts}</div>
                    <div className="text-sm text-slate-600">Contacts</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.popular.map((platform, platformIndex) => (
                    <Badge key={platformIndex} className="bg-slate-100 text-slate-700 border border-slate-200">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Superior Technology Intelligence Platform Performance
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how our business intelligence platform outperforms industry standards across key metrics that matter for B2B success.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-4 px-6 text-slate-900 font-bold">Feature</th>
                    <th className="text-center py-4 px-6 text-blue-600 font-bold">ELP Data Platform</th>
                    <th className="text-center py-4 px-6 text-slate-600 font-bold">Industry Average</th>
                    <th className="text-left py-4 px-6 text-slate-900 font-bold">Our Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {competitiveAdvantages.map((item, index) => (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-4 px-6 font-semibold text-slate-900">{item.feature}</td>
                      <td className="py-4 px-6 text-center">
                        <div className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-lg inline-block">
                          {item.elpData}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="bg-slate-100 text-slate-600 font-semibold px-4 py-2 rounded-lg inline-block">
                          {item.industry}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-600">{item.advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your B2B Intelligence?</h2>
          <p className="text-xl mb-8 text-slate-300 leading-relaxed">
            Join industry leaders who rely on our technology data platform for precise targeting, verified contacts, 
            and real-time intelligence that drives measurable sales results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              Start Your Platform Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-slate-900">
              Download Platform Overview
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}