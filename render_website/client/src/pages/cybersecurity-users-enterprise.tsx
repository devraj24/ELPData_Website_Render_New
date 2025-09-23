import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, AlertTriangle, Server, Database } from "lucide-react";

export default function CybersecurityUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Cybersecurity Platform Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 31,854+ organizations implementing cybersecurity solutions. Target CISOs, security analysts, and IT security managers deploying endpoint protection, SIEM, and threat detection systems.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">31,854</div>
                  <div className="text-sm text-white/80">Security Implementations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">95%</div>
                  <div className="text-sm text-white/80">Threat Detection Rate</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm text-white/80">Monitoring Coverage</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Solution Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Cybersecurity Solution Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing cybersecurity solutions for threat protection, compliance, and risk management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-red-500" />
                  Endpoint Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Antivirus, EDR, and endpoint protection for workstations and servers
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Endpoint Detection & Response</Badge>
                  <Badge variant="secondary">Antivirus & Anti-malware</Badge>
                  <Badge variant="secondary">Device Control</Badge>
                  <Badge variant="secondary">Patch Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Financial Services & Banking</li>
                    <li>• Healthcare & Medical</li>
                    <li>• Government & Defense</li>
                    <li>• Technology Companies</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Information Security Officer</li>
                    <li>• IT Security Manager</li>
                    <li>• Security Operations Manager</li>
                    <li>• IT Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Managing diverse endpoint environments</li>
                    <li>• Balancing security with user productivity</li>
                    <li>• Real-time threat response coordination</li>
                    <li>• Remote workforce protection</li>
                    <li>• Legacy system compatibility</li>
                    <li>• Centralized management and reporting</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-6 h-6 text-blue-500" />
                  SIEM & Log Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Security information and event management for threat detection and compliance
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Log Collection & Analysis</Badge>
                  <Badge variant="secondary">Threat Detection</Badge>
                  <Badge variant="secondary">Incident Response</Badge>
                  <Badge variant="secondary">Compliance Reporting</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large Enterprises</li>
                    <li>• Regulated Industries</li>
                    <li>• Critical Infrastructure</li>
                    <li>• Managed Security Providers</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Security Operations Center Manager</li>
                    <li>• Security Analyst Lead</li>
                    <li>• Compliance Manager</li>
                    <li>• Risk Management Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• High-volume log data processing</li>
                    <li>• Complex correlation rule development</li>
                    <li>• False positive management</li>
                    <li>• Skilled analyst recruitment</li>
                    <li>• Integration with existing security tools</li>
                    <li>• Regulatory compliance mapping</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-6 h-6 text-purple-500" />
                  Identity & Access Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  User authentication, authorization, and privileged access management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Multi-Factor Authentication</Badge>
                  <Badge variant="secondary">Single Sign-On</Badge>
                  <Badge variant="secondary">Privileged Access</Badge>
                  <Badge variant="secondary">Identity Governance</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Enterprise Organizations</li>
                    <li>• Cloud-First Companies</li>
                    <li>• Remote Work Organizations</li>
                    <li>• SaaS & Technology Providers</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Identity & Access Manager</li>
                    <li>• IT Security Architect</li>
                    <li>• Chief Technology Officer</li>
                    <li>• IT Operations Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex application integration</li>
                    <li>• User experience vs. security balance</li>
                    <li>• Legacy system authentication</li>
                    <li>• Privileged account management</li>
                    <li>• Compliance and audit requirements</li>
                    <li>• Identity lifecycle automation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-orange-500" />
                  Vulnerability Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Security scanning, vulnerability assessment, and patch management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Vulnerability Scanning</Badge>
                  <Badge variant="secondary">Risk Assessment</Badge>
                  <Badge variant="secondary">Patch Management</Badge>
                  <Badge variant="secondary">Penetration Testing</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• IT Service Providers</li>
                    <li>• Manufacturing & Industrial</li>
                    <li>• Educational Institutions</li>
                    <li>• Professional Services</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Vulnerability Management Specialist</li>
                    <li>• IT Security Analyst</li>
                    <li>• Systems Administrator</li>
                    <li>• IT Risk Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Prioritizing critical vulnerabilities</li>
                    <li>• Coordination with system owners</li>
                    <li>• Patch testing and deployment windows</li>
                    <li>• Legacy system vulnerability management</li>
                    <li>• Business impact assessment</li>
                    <li>• Automated remediation workflows</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-teal-500" />
                  Network Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Firewall management, network monitoring, and intrusion prevention
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Next-Gen Firewalls</Badge>
                  <Badge variant="secondary">Intrusion Prevention</Badge>
                  <Badge variant="secondary">Network Monitoring</Badge>
                  <Badge variant="secondary">VPN Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data Centers & Hosting</li>
                    <li>• Telecommunications</li>
                    <li>• Energy & Utilities</li>
                    <li>• Transportation & Logistics</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Network Security Engineer</li>
                    <li>• Infrastructure Manager</li>
                    <li>• Network Operations Manager</li>
                    <li>• Chief Technology Officer</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex network topology management</li>
                    <li>• High-availability requirements</li>
                    <li>• Performance impact minimization</li>
                    <li>• Remote access security</li>
                    <li>• Network segmentation strategies</li>
                    <li>• Threat intelligence integration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-indigo-500" />
                  Data Protection & Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Data encryption, DLP, and privacy compliance management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Data Loss Prevention</Badge>
                  <Badge variant="secondary">Encryption Management</Badge>
                  <Badge variant="secondary">Privacy Compliance</Badge>
                  <Badge variant="secondary">Data Classification</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Healthcare & Life Sciences</li>
                    <li>• Legal & Professional Services</li>
                    <li>• Financial Services</li>
                    <li>• Retail & E-commerce</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data Protection Officer</li>
                    <li>• Privacy Compliance Manager</li>
                    <li>• Information Security Manager</li>
                    <li>• Legal & Compliance Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• GDPR and CCPA compliance requirements</li>
                    <li>• Data discovery and classification</li>
                    <li>• Cross-border data transfer restrictions</li>
                    <li>• Employee privacy training</li>
                    <li>• Data breach response procedures</li>
                    <li>• Encryption key management</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}