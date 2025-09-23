import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Globe, Users, Target, Building, CreditCard } from "lucide-react";

export default function WooCommerceUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">WooCommerce E-commerce Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 6,900+ organizations using WooCommerce for e-commerce solutions. Target online store owners, WordPress developers, and e-commerce managers implementing WooCommerce for customizable online retail platforms.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">6,900+</div>
                  <div className="text-sm text-white/80">WooCommerce Stores</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">28%</div>
                  <div className="text-sm text-white/80">E-commerce Market Share</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">5M+</div>
                  <div className="text-sm text-white/80">Active Installations</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WooCommerce Solutions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">WooCommerce E-commerce Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing WooCommerce for online stores, digital products, and e-commerce solutions built on WordPress
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-6 h-6 text-purple-600" />
                  Online Store Builder
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  WordPress plugin for building customizable online stores with product management and order processing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Product Catalog</Badge>
                  <Badge variant="secondary">Inventory Management</Badge>
                  <Badge variant="secondary">Order Processing</Badge>
                  <Badge variant="secondary">Customer Accounts</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-pink-600" />
                  Payment & Shipping
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Integrated payment gateways and shipping solutions for complete e-commerce functionality.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Payment Gateways</Badge>
                  <Badge variant="secondary">Shipping Zones</Badge>
                  <Badge variant="secondary">Tax Calculation</Badge>
                  <Badge variant="secondary">Coupons & Discounts</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-blue-600" />
                  Extensions & Customization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Extensive plugin ecosystem and customization options for specialized e-commerce requirements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">WooCommerce Extensions</Badge>
                  <Badge variant="secondary">Custom Development</Badge>
                  <Badge variant="secondary">Theme Integration</Badge>
                  <Badge variant="secondary">Third-party Integrations</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Target Markets & Decision Makers</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-6 h-6 text-purple-600" />
                  Small & Medium E-commerce
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Online Store Owners</li>
                  <li>• E-commerce Entrepreneurs</li>
                  <li>• Small Retailers</li>
                  <li>• Product Sellers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-pink-600" />
                  Development Teams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• WordPress Developers</li>
                  <li>• E-commerce Agencies</li>
                  <li>• Web Developers</li>
                  <li>• Theme Developers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-blue-600" />
                  Implementation Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Product-based Businesses</li>
                  <li>• Digital Products</li>
                  <li>• Subscription Services</li>
                  <li>• Marketplace Solutions</li>
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