import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Monitor, Laptop, Users, Target, Building } from "lucide-react";

export default function AppleUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Apple Enterprise Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 11,100+ organizations using Apple enterprise solutions. Target IT managers, creative professionals, and mobile device administrators implementing Mac, iPad, and iPhone for business operations and creative workflows.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">11,100+</div>
                  <div className="text-sm text-white/80">Apple Enterprise Customers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">1.8B+</div>
                  <div className="text-sm text-white/80">Apple Devices Active</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">175+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Apple Solutions Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Apple Business Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Apple's ecosystem for creative work, mobile productivity, and enterprise computing
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="w-6 h-6 text-gray-700" />
                  Mac Computers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  MacBook and iMac systems for creative professionals, developers, and business users requiring macOS environments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Creative Work</Badge>
                  <Badge variant="secondary">Development</Badge>
                  <Badge variant="secondary">Design</Badge>
                  <Badge variant="secondary">Video Production</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                  iPad & iPhone Enterprise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Mobile device management and enterprise mobility solutions for field workers and mobile professionals.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Mobile MDM</Badge>
                  <Badge variant="secondary">Field Work</Badge>
                  <Badge variant="secondary">Enterprise Apps</Badge>
                  <Badge variant="secondary">Security</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="w-6 h-6 text-purple-600" />
                  Apple Business Manager
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Device management platform for deploying and managing Apple devices across enterprise organizations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Device Management</Badge>
                  <Badge variant="secondary">App Distribution</Badge>
                  <Badge variant="secondary">Volume Purchasing</Badge>
                  <Badge variant="secondary">Zero-touch Setup</Badge>
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
                  <Building className="w-6 h-6 text-gray-700" />
                  Creative & Media
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Creative Directors</li>
                  <li>• Video Producers</li>
                  <li>• Graphic Designers</li>
                  <li>• Marketing Teams</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  Technology & Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• iOS Developers</li>
                  <li>• Software Engineers</li>
                  <li>• IT Managers</li>
                  <li>• DevOps Teams</li>
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
                  <li>• Mobile Device Management</li>
                  <li>• Creative Workstations</li>
                  <li>• iOS App Development</li>
                  <li>• Executive Mobile Solutions</li>
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