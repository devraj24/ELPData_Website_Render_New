import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Calculator, Users, Target, Building, TrendingUp } from "lucide-react";

export default function IntuitUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Intuit Platform Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 16,709+ organizations using Intuit financial management solutions. Target CFOs, small business owners, and accounting professionals implementing QuickBooks, TurboTax, and Mint for comprehensive financial operations.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">16,709+</div>
                  <div className="text-sm text-white/80">Intuit Customers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">50M+</div>
                  <div className="text-sm text-white/80">Active Users</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">100+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Intuit Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Intuit Financial Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Intuit's comprehensive financial management platform for accounting, tax preparation, and business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-blue-600" />
                  QuickBooks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Small business accounting and financial management platform used by entrepreneurs and accounting professionals.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Accounting</Badge>
                  <Badge variant="secondary">Invoicing</Badge>
                  <Badge variant="secondary">Payroll</Badge>
                  <Badge variant="secondary">Tax Prep</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  TurboTax
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Tax preparation software used by individuals and tax professionals for accurate filing and maximized refunds.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Tax Filing</Badge>
                  <Badge variant="secondary">Deductions</Badge>
                  <Badge variant="secondary">E-Filing</Badge>
                  <Badge variant="secondary">Audit Support</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                  Mint & Credit Karma
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Personal finance management and credit monitoring platforms for budgeting and financial health tracking.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Budgeting</Badge>
                  <Badge variant="secondary">Credit Score</Badge>
                  <Badge variant="secondary">Bill Tracking</Badge>
                  <Badge variant="secondary">Investment</Badge>
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
                  <Building className="w-6 h-6 text-blue-600" />
                  Small & Medium Businesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Business Owners</li>
                  <li>• Finance Managers</li>
                  <li>• Operations Directors</li>
                  <li>• Bookkeepers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-green-600" />
                  Professional Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Accountants & CPAs</li>
                  <li>• Tax Preparers</li>
                  <li>• Financial Advisors</li>
                  <li>• Business Consultants</li>
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
                  <li>• Tax Compliance</li>
                  <li>• Payroll Management</li>
                  <li>• Expense Tracking</li>
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