import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Users, Target, Building, BarChart, DollarSign } from "lucide-react";

export default function SageUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Sage ERP & Accounting Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 15,800+ organizations using Sage enterprise software solutions. Target financial controllers, ERP managers, and accounting professionals implementing Sage 50, Sage 100, and Sage Intacct for comprehensive business management.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">15,800+</div>
                  <div className="text-sm text-white/80">Sage Customers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">6M+</div>
                  <div className="text-sm text-white/80">Active Users</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">23</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sage Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Sage Business Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Sage's comprehensive ERP and accounting solutions for financial management and business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-green-600" />
                  Sage 50 & 100
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Small to mid-market accounting and business management solutions for growing companies and accounting firms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Accounting</Badge>
                  <Badge variant="secondary">Inventory</Badge>
                  <Badge variant="secondary">Job Costing</Badge>
                  <Badge variant="secondary">Payroll</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-blue-600" />
                  Sage Intacct
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cloud-based financial management platform for mid-market and enterprise organizations with advanced reporting.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cloud Finance</Badge>
                  <Badge variant="secondary">Analytics</Badge>
                  <Badge variant="secondary">Multi-entity</Badge>
                  <Badge variant="secondary">Automation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                  Sage X3
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Enterprise ERP solution for manufacturing, distribution, and service organizations with global operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Manufacturing</Badge>
                  <Badge variant="secondary">Distribution</Badge>
                  <Badge variant="secondary">Multi-currency</Badge>
                  <Badge variant="secondary">Global ERP</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Target Industries & Decision Makers</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-6 h-6 text-green-600" />
                  Manufacturing & Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• CFOs & Controllers</li>
                  <li>• Operations Managers</li>
                  <li>• ERP Project Managers</li>
                  <li>• Finance Directors</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  Professional Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Accounting Firms</li>
                  <li>• Business Consultants</li>
                  <li>• Sage Partners</li>
                  <li>• Implementation Specialists</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-purple-600" />
                  Key Implementation Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Financial Reporting</li>
                  <li>• Supply Chain Management</li>
                  <li>• Multi-location Operations</li>
                  <li>• Compliance & Audit</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}