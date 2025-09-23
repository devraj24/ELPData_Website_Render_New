import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Users, Target, Building } from "lucide-react";

export default function McAfeeUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">McAfee Security Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 10,600+ organizations using McAfee cybersecurity solutions. Target CISOs, security administrators, and IT managers implementing McAfee endpoint protection, threat detection, and enterprise security platforms for comprehensive cyber defense.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">10,600+</div>
                  <div className="text-sm text-white/80">McAfee Customers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">500M+</div>
                  <div className="text-sm text-white/80">Protected Endpoints</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">190+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* McAfee Solutions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">McAfee Security Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing McAfee for endpoint protection, threat intelligence, and enterprise cybersecurity management
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-red-600" />
                  Endpoint Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced endpoint security with real-time threat detection, malware protection, and behavioral analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Endpoint Security</Badge>
                  <Badge variant="secondary">Malware Protection</Badge>
                  <Badge variant="secondary">Behavioral Analysis</Badge>
                  <Badge variant="secondary">Real-time Detection</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-6 h-6 text-blue-600" />
                  SIEM & Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Security information and event management with advanced analytics and threat intelligence integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">SIEM</Badge>
                  <Badge variant="secondary">Threat Intelligence</Badge>
                  <Badge variant="secondary">Security Analytics</Badge>
                  <Badge variant="secondary">Incident Response</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-6 h-6 text-purple-600" />
                  Data Loss Prevention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Data protection and loss prevention solutions for securing sensitive information and regulatory compliance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Data Protection</Badge>
                  <Badge variant="secondary">Content Discovery</Badge>
                  <Badge variant="secondary">Policy Enforcement</Badge>
                  <Badge variant="secondary">Compliance</Badge>
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
                  <Building className="w-6 h-6 text-red-600" />
                  Enterprise Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Chief Information Security Officers</li>
                  <li>• Security Administrators</li>
                  <li>• IT Security Managers</li>
                  <li>• SOC Analysts</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  Regulated Industries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Financial Services</li>
                  <li>• Healthcare Organizations</li>
                  <li>• Government Agencies</li>
                  <li>• Critical Infrastructure</li>
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
                  <li>• Endpoint Protection</li>
                  <li>• Network Security</li>
                  <li>• Cloud Security</li>
                  <li>• Threat Hunting</li>
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