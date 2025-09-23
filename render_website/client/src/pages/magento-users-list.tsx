import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Code, Users, Target, Building, Globe } from "lucide-react";

export default function MagentoUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Magento E-commerce Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 22,700+ organizations using Magento for e-commerce solutions. Target e-commerce managers, Magento developers, and digital commerce teams implementing Magento Commerce and Open Source for online retail operations.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">22,700+</div>
                  <div className="text-sm text-white/80">Magento Stores</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">1.2%</div>
                  <div className="text-sm text-white/80">E-commerce Market Share</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">240+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Magento Solutions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Magento E-commerce Platforms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Magento for enterprise e-commerce, multi-store operations, and B2B commerce solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-6 h-6 text-orange-600" />
                  Magento Commerce
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Enterprise e-commerce platform for large retailers with advanced features and cloud hosting.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Enterprise Features</Badge>
                  <Badge variant="secondary">Cloud Hosting</Badge>
                  <Badge variant="secondary">B2B Commerce</Badge>
                  <Badge variant="secondary">Advanced Analytics</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-6 h-6 text-red-600" />
                  Magento Open Source
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Open-source e-commerce platform for small to medium businesses with customizable features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Open Source</Badge>
                  <Badge variant="secondary">Customizable</Badge>
                  <Badge variant="secondary">Extensions</Badge>
                  <Badge variant="secondary">Community Support</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-purple-600" />
                  Multi-Store Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Multi-store and multi-website capabilities for global e-commerce operations and brand management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Multi-Store</Badge>
                  <Badge variant="secondary">Global Commerce</Badge>
                  <Badge variant="secondary">Brand Management</Badge>
                  <Badge variant="secondary">Localization</Badge>
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
                  <Building className="w-6 h-6 text-orange-600" />
                  E-commerce Retailers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• E-commerce Managers</li>
                  <li>• Digital Commerce Directors</li>
                  <li>• Online Store Owners</li>
                  <li>• Retail Operations Teams</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-red-600" />
                  Development Teams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Magento Developers</li>
                  <li>• Solution Architects</li>
                  <li>• Technical Leads</li>
                  <li>• DevOps Engineers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-purple-600" />
                  Implementation Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Online Retail Stores</li>
                  <li>• B2B E-commerce</li>
                  <li>• Multi-brand Operations</li>
                  <li>• Global Marketplaces</li>
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