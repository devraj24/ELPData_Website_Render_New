import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Code, Users, Target, Building, Palette } from "lucide-react";

export default function WordPressUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">WordPress Platform Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 12,610+ organizations using WordPress for content management and web development. Target web developers, digital marketers, and content creators implementing WordPress sites, WooCommerce, and custom themes.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">12,610+</div>
                  <div className="text-sm text-white/80">WordPress Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">810M+</div>
                  <div className="text-sm text-white/80">WordPress Sites</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">43%</div>
                  <div className="text-sm text-white/80">Web Market Share</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress Solutions Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">WordPress Implementation Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations leveraging WordPress for content management, e-commerce, and enterprise web solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-blue-600" />
                  Content Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Enterprise content management and publishing platforms for blogs, corporate websites, and news portals.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Blogging</Badge>
                  <Badge variant="secondary">Publishing</Badge>
                  <Badge variant="secondary">SEO</Badge>
                  <Badge variant="secondary">Multi-site</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-6 h-6 text-green-600" />
                  WooCommerce
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  E-commerce solutions built on WordPress for online stores, digital products, and subscription services.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">E-commerce</Badge>
                  <Badge variant="secondary">Payments</Badge>
                  <Badge variant="secondary">Inventory</Badge>
                  <Badge variant="secondary">Subscriptions</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-6 h-6 text-purple-600" />
                  Custom Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Custom WordPress themes, plugins, and enterprise solutions for specific business requirements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Custom Themes</Badge>
                  <Badge variant="secondary">Plugin Dev</Badge>
                  <Badge variant="secondary">API Integration</Badge>
                  <Badge variant="secondary">Performance</Badge>
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
                  Digital Agencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Web Developers</li>
                  <li>• Creative Directors</li>
                  <li>• Project Managers</li>
                  <li>• UX/UI Designers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-green-600" />
                  Media & Publishing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Content Managers</li>
                  <li>• Editorial Teams</li>
                  <li>• Digital Marketers</li>
                  <li>• SEO Specialists</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-purple-600" />
                  E-commerce & Retail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• E-commerce Managers</li>
                  <li>• Online Store Owners</li>
                  <li>• Digital Commerce Teams</li>
                  <li>• Product Managers</li>
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