import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Target, Building2, TrendingUp, Users, Globe } from "lucide-react";

export default function SalesforceComUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Salesforce.com Users List</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 599,000+ organizations using Salesforce.com's comprehensive CRM, Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, and 69+ product ecosystem. Target sales professionals, marketing automation specialists, customer success managers, and Salesforce administrators across all industries.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">599K</div>
                  <div className="text-sm text-white/80">Companies Using Salesforce.com</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">1.8M+</div>
                  <div className="text-sm text-white/80">Salesforce Professionals</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">69+</div>
                  <div className="text-sm text-white/80">Products & Cloud Solutions</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Salesforce Product Portfolio Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-navy mb-6">Salesforce.com Product Portfolio</h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Enterprise organizations implementing Salesforce's comprehensive cloud-based CRM and business automation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-500">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-600 text-white rounded-lg">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-blue-800">Sales Cloud</CardTitle>
                    <p className="text-sm text-blue-600">CRM & Sales Automation</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-neutral-dark mb-4">
                  Complete sales force automation with lead management, opportunity tracking, forecasting, and sales analytics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Lead Management</Badge>
                  <Badge variant="secondary">Opportunity Tracking</Badge>
                  <Badge variant="secondary">Sales Forecasting</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader className="bg-gradient-to-br from-green-50 to-green-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-600 text-white rounded-lg">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-green-800">Service Cloud</CardTitle>
                    <p className="text-sm text-green-600">Customer Service Platform</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-neutral-dark mb-4">
                  Customer service automation with case management, knowledge base, omnichannel support, and field service.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Case Management</Badge>
                  <Badge variant="secondary">Knowledge Base</Badge>
                  <Badge variant="secondary">Field Service</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader className="bg-gradient-to-br from-purple-50 to-purple-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-600 text-white rounded-lg">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-purple-800">Marketing Cloud</CardTitle>
                    <p className="text-sm text-purple-600">Digital Marketing Automation</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-neutral-dark mb-4">
                  Comprehensive marketing automation with email marketing, social media management, and customer journey mapping.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Email Marketing</Badge>
                  <Badge variant="secondary">Journey Builder</Badge>
                  <Badge variant="secondary">Social Studio</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader className="bg-gradient-to-br from-orange-50 to-orange-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-600 text-white rounded-lg">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-orange-800">Commerce Cloud</CardTitle>
                    <p className="text-sm text-orange-600">E-commerce Platform</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-neutral-dark mb-4">
                  Complete e-commerce solution with B2B and B2C capabilities, order management, and personalization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">B2B Commerce</Badge>
                  <Badge variant="secondary">Order Management</Badge>
                  <Badge variant="secondary">Personalization</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader className="bg-gradient-to-br from-indigo-50 to-indigo-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-600 text-white rounded-lg">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-indigo-800">Platform & Analytics</CardTitle>
                    <p className="text-sm text-indigo-600">Custom App Development</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-neutral-dark mb-4">
                  Low-code platform with Lightning Platform, Tableau CRM, MuleSoft integration, and custom app development.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Lightning Platform</Badge>
                  <Badge variant="secondary">Tableau CRM</Badge>
                  <Badge variant="secondary">MuleSoft</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader className="bg-gradient-to-br from-teal-50 to-teal-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-teal-600 text-white rounded-lg">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-teal-800">Industry Solutions</CardTitle>
                    <p className="text-sm text-teal-600">Vertical-Specific Products</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-neutral-dark mb-4">
                  Industry-specific solutions for Financial Services, Healthcare, Manufacturing, Retail, and Government.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Financial Services</Badge>
                  <Badge variant="secondary">Health Cloud</Badge>
                  <Badge variant="secondary">Manufacturing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-navy mb-6">Salesforce.com Users by Industry</h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Target decision-makers across industries implementing Salesforce solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-blue-800 mb-2">Technology</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">156K+</p>
              <p className="text-sm text-neutral-dark">Software companies, SaaS providers, IT services</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-green-800 mb-2">Financial Services</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">128K+</p>
              <p className="text-sm text-neutral-dark">Banks, insurance, investment firms</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-purple-800 mb-2">Healthcare</h3>
              <p className="text-3xl font-bold text-purple-600 mb-2">95K+</p>
              <p className="text-sm text-neutral-dark">Hospitals, pharmaceutical, medical devices</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-orange-800 mb-2">Manufacturing</h3>
              <p className="text-3xl font-bold text-orange-600 mb-2">87K+</p>
              <p className="text-sm text-neutral-dark">Industrial equipment, automotive, aerospace</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-indigo-800 mb-2">Retail</h3>
              <p className="text-3xl font-bold text-indigo-600 mb-2">76K+</p>
              <p className="text-sm text-neutral-dark">E-commerce, consumer goods, fashion</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-teal-800 mb-2">Education</h3>
              <p className="text-3xl font-bold text-teal-600 mb-2">42K+</p>
              <p className="text-sm text-neutral-dark">Universities, K-12, educational technology</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-red-800 mb-2">Non-Profit</h3>
              <p className="text-3xl font-bold text-red-600 mb-2">28K+</p>
              <p className="text-sm text-neutral-dark">Charitable organizations, foundations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Government</h3>
              <p className="text-3xl font-bold text-gray-600 mb-2">15K+</p>
              <p className="text-sm text-neutral-dark">Federal, state, local government agencies</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}