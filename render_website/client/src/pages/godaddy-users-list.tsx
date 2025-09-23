import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Server, Shield, Users, Target, Building } from "lucide-react";

export default function GoDaddyUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">GoDaddy Hosting & Domain Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 23,900+ organizations using GoDaddy for domain registration and web hosting. Target small business owners, web developers, and digital marketing teams managing domains, hosting, and online presence through GoDaddy services.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">23,900+</div>
                  <div className="text-sm text-white/80">GoDaddy Customers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">84M</div>
                  <div className="text-sm text-white/80">Domains Under Management</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">21M</div>
                  <div className="text-sm text-white/80">Active Customers</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* GoDaddy Services */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">GoDaddy Platform Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Small and medium businesses implementing GoDaddy for domain management, web hosting, and online business solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-green-600" />
                  Domain Registration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Domain name registration and management services for businesses establishing their online presence.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Domain Registration</Badge>
                  <Badge variant="secondary">DNS Management</Badge>
                  <Badge variant="secondary">Domain Protection</Badge>
                  <Badge variant="secondary">Bulk Registration</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-blue-600" />
                  Web Hosting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Shared, VPS, and dedicated hosting solutions for websites, e-commerce stores, and web applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Shared Hosting</Badge>
                  <Badge variant="secondary">VPS Hosting</Badge>
                  <Badge variant="secondary">WordPress Hosting</Badge>
                  <Badge variant="secondary">E-commerce Hosting</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-purple-600" />
                  Website Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  SSL certificates, website security, and backup services for protecting online business operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">SSL Certificates</Badge>
                  <Badge variant="secondary">Website Security</Badge>
                  <Badge variant="secondary">Malware Removal</Badge>
                  <Badge variant="secondary">Website Backup</Badge>
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
                  <Building className="w-6 h-6 text-green-600" />
                  Small Businesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Small Business Owners</li>
                  <li>• Entrepreneurs</li>
                  <li>• Freelancers</li>
                  <li>• Startups</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  Web Professionals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Web Developers</li>
                  <li>• Digital Agencies</li>
                  <li>• Web Designers</li>
                  <li>• Marketing Professionals</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-purple-600" />
                  Use Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Business Websites</li>
                  <li>• E-commerce Stores</li>
                  <li>• Portfolio Sites</li>
                  <li>• Blog & Content Sites</li>
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