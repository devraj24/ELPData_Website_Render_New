import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, Cloud, Users, Target, Building, Cog } from "lucide-react";

export default function InforUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Infor Enterprise Software Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 8,400+ organizations using Infor industry-specific ERP solutions. Target manufacturing executives, supply chain managers, and IT directors implementing CloudSuite, LN, and M3 for specialized industry operations.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">8,400+</div>
                  <div className="text-sm text-white/80">Infor Customers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">68K+</div>
                  <div className="text-sm text-white/80">Enterprise Deployments</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">170+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Infor Solutions Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Infor Industry Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Infor's industry-specific ERP and enterprise software for manufacturing, distribution, and specialized sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Factory className="w-6 h-6 text-orange-600" />
                  Infor CloudSuite
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Industry-specific cloud ERP suites for manufacturing, automotive, aerospace, and industrial sectors.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Manufacturing</Badge>
                  <Badge variant="secondary">Automotive</Badge>
                  <Badge variant="secondary">Aerospace</Badge>
                  <Badge variant="secondary">Industrial</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cog className="w-6 h-6 text-red-600" />
                  Infor LN & M3
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Enterprise ERP solutions for complex manufacturing and multi-site operations with advanced planning capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Complex Manufacturing</Badge>
                  <Badge variant="secondary">Multi-site</Badge>
                  <Badge variant="secondary">Planning</Badge>
                  <Badge variant="secondary">Global ERP</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-blue-600" />
                  Infor WMS & SCM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Warehouse management and supply chain solutions for distribution, logistics, and retail operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Warehouse</Badge>
                  <Badge variant="secondary">Distribution</Badge>
                  <Badge variant="secondary">Logistics</Badge>
                  <Badge variant="secondary">Supply Chain</Badge>
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
                  Manufacturing & Industrial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Manufacturing VPs</li>
                  <li>• Plant Managers</li>
                  <li>• Operations Directors</li>
                  <li>• ERP Project Leads</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-red-600" />
                  Distribution & Logistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Supply Chain Directors</li>
                  <li>• Warehouse Managers</li>
                  <li>• Logistics VPs</li>
                  <li>• Distribution Managers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-blue-600" />
                  Key Implementation Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Production Planning</li>
                  <li>• Quality Management</li>
                  <li>• Asset Management</li>
                  <li>• Regulatory Compliance</li>
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