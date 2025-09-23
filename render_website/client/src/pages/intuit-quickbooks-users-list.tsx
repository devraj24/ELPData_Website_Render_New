import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, DollarSign, Users, Target, Building, BarChart } from "lucide-react";

export default function IntuitQuickBooksUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">QuickBooks Accounting Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 13,884+ organizations using QuickBooks for small business accounting. Target business owners, bookkeepers, and accounting professionals implementing QuickBooks Online, Desktop, and Enterprise for financial management.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">13,884+</div>
                  <div className="text-sm text-white/80">QuickBooks Customers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">7M+</div>
                  <div className="text-sm text-white/80">Active Users</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">85%</div>
                  <div className="text-sm text-white/80">Small Business Market Share</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* QuickBooks Solutions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">QuickBooks Product Suite</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Small and medium businesses implementing QuickBooks for comprehensive accounting and financial management
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-green-600" />
                  QuickBooks Online
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cloud-based accounting solution for small businesses with real-time collaboration and mobile access.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cloud Accounting</Badge>
                  <Badge variant="secondary">Mobile Access</Badge>
                  <Badge variant="secondary">Bank Integration</Badge>
                  <Badge variant="secondary">Invoicing</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                  QuickBooks Desktop
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Desktop accounting software for businesses requiring advanced features and local data control.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Advanced Features</Badge>
                  <Badge variant="secondary">Inventory</Badge>
                  <Badge variant="secondary">Job Costing</Badge>
                  <Badge variant="secondary">Multi-user</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-purple-600" />
                  QuickBooks Enterprise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced accounting solution for larger businesses with complex inventory and reporting needs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Advanced Inventory</Badge>
                  <Badge variant="secondary">Custom Reports</Badge>
                  <Badge variant="secondary">User Permissions</Badge>
                  <Badge variant="secondary">Industry Solutions</Badge>
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
                  Small Business Sectors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Retail & E-commerce</li>
                  <li>• Professional Services</li>
                  <li>• Construction & Trades</li>
                  <li>• Restaurants & Hospitality</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  Key Decision Makers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Business Owners</li>
                  <li>• Bookkeepers</li>
                  <li>• Office Managers</li>
                  <li>• Accounting Firms</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-purple-600" />
                  Core Use Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Financial Reporting</li>
                  <li>• Tax Preparation</li>
                  <li>• Payroll Processing</li>
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