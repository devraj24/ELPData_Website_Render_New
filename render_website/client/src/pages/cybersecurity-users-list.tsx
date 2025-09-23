import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, AlertTriangle, Server, Globe } from "lucide-react";

export default function CybersecurityUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Enterprise Cybersecurity Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 1.4M+ organizations implementing cybersecurity solutions. Target CISOs, security analysts, and SOC managers deploying firewalls, SIEM, endpoint protection, and zero-trust security frameworks.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">1.4M+</div>
                  <div className="text-sm text-white/80">Security-First Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">4.1M+</div>
                  <div className="text-sm text-white/80">Security Analysts</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">185+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Solutions Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">Cybersecurity Solutions & Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing comprehensive cybersecurity frameworks for threat protection, compliance, and risk management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-500" />
                  Endpoint Security & EDR
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Endpoint detection and response solutions for comprehensive device protection
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Endpoint Protection</Badge>
                  <Badge variant="secondary">Threat Detection</Badge>
                  <Badge variant="secondary">Incident Response</Badge>
                  <Badge variant="secondary">Behavioral Analysis</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Financial Services & Banking</li>
                    <li>• Healthcare & Life Sciences</li>
                    <li>• Government & Defense</li>
                    <li>• Critical Infrastructure</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Information Security Officer</li>
                    <li>• Security Operations Manager</li>
                    <li>• Endpoint Security Specialist</li>
                    <li>• Incident Response Analyst</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Advanced persistent threat detection and prevention</li>
                    <li>• Zero-day exploit protection and response</li>
                    <li>• Remote workforce endpoint management</li>
                    <li>• False positive reduction and alert fatigue</li>
                    <li>• Integration with existing security infrastructure</li>
                    <li>• Performance impact on end-user productivity</li>
                    <li>• Compliance reporting and audit requirements</li>
                    <li>• Skills shortage in security operations teams</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-6 h-6 text-green-500" />
                  Identity & Access Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive identity governance and privileged access management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Single Sign-On</Badge>
                  <Badge variant="secondary">Multi-factor Authentication</Badge>
                  <Badge variant="secondary">Privileged Access</Badge>
                  <Badge variant="secondary">Identity Governance</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Enterprise Organizations</li>
                    <li>• Cloud-first Companies</li>
                    <li>• Regulated Industries</li>
                    <li>• Multi-national Corporations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Identity & Access Manager</li>
                    <li>• Privileged Access Administrator</li>
                    <li>• Identity Architect</li>
                    <li>• Compliance & Risk Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex multi-cloud identity federation</li>
                    <li>• Privileged account discovery and management</li>
                    <li>• User lifecycle automation and provisioning</li>
                    <li>• Legacy system integration complexity</li>
                    <li>• Access review and certification processes</li>
                    <li>• Zero-trust architecture implementation</li>
                    <li>• Password policy enforcement and management</li>
                    <li>• Regulatory compliance and audit trails</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-6 h-6 text-purple-500" />
                  Security Operations Center (SOC)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Centralized security monitoring and incident management platforms
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">SIEM Platforms</Badge>
                  <Badge variant="secondary">Threat Intelligence</Badge>
                  <Badge variant="secondary">Security Orchestration</Badge>
                  <Badge variant="secondary">Incident Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large Enterprise Organizations</li>
                    <li>• Managed Security Service Providers</li>
                    <li>• Financial Institutions</li>
                    <li>• Critical Infrastructure Providers</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• SOC Manager</li>
                    <li>• Security Analyst</li>
                    <li>• Threat Hunter</li>
                    <li>• Security Engineer</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Alert volume management and prioritization</li>
                    <li>• Threat intelligence integration and correlation</li>
                    <li>• Mean time to detection and response optimization</li>
                    <li>• Security tool integration and orchestration</li>
                    <li>• 24/7 staffing and analyst retention</li>
                    <li>• Playbook automation and workflow optimization</li>
                    <li>• Threat hunting methodology and tools</li>
                    <li>• Executive reporting and metrics development</li>
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
                  Comprehensive vulnerability assessment and patch management solutions
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Vulnerability Scanning</Badge>
                  <Badge variant="secondary">Patch Management</Badge>
                  <Badge variant="secondary">Risk Assessment</Badge>
                  <Badge variant="secondary">Compliance Reporting</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Technology & Software Companies</li>
                    <li>• Healthcare & Medical Devices</li>
                    <li>• Manufacturing & Industrial</li>
                    <li>• Government & Public Sector</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Vulnerability Management Specialist</li>
                    <li>• Security Assessment Manager</li>
                    <li>• Risk & Compliance Officer</li>
                    <li>• Infrastructure Security Engineer</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Vulnerability prioritization and risk scoring</li>
                    <li>• Patch testing and deployment coordination</li>
                    <li>• Asset discovery and inventory management</li>
                    <li>• False positive reduction and validation</li>
                    <li>• Business disruption minimization during patching</li>
                    <li>• Legacy system vulnerability management</li>
                    <li>• Continuous monitoring and scanning optimization</li>
                    <li>• Cross-team coordination for remediation efforts</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-teal-500" />
                  Cloud Security & CASB
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cloud access security brokers and multi-cloud security platforms
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Cloud Access Control</Badge>
                  <Badge variant="secondary">Data Loss Prevention</Badge>
                  <Badge variant="secondary">Shadow IT Discovery</Badge>
                  <Badge variant="secondary">Cloud Compliance</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Cloud-first Organizations</li>
                    <li>• SaaS-dependent Companies</li>
                    <li>• Remote Work Enterprises</li>
                    <li>• Digital Transformation Leaders</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Cloud Security Architect</li>
                    <li>• Data Protection Officer</li>
                    <li>• Cloud Compliance Manager</li>
                    <li>• Information Security Analyst</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Multi-cloud security policy enforcement</li>
                    <li>• Shadow IT discovery and governance</li>
                    <li>• Data classification and protection automation</li>
                    <li>• Cloud application risk assessment</li>
                    <li>• User behavior analytics and anomaly detection</li>
                    <li>• Compliance monitoring across cloud services</li>
                    <li>• API security and third-party integrations</li>
                    <li>• Cloud configuration management and drift</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-indigo-500" />
                  Network Security & Firewalls
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Next-generation firewalls and network security appliances
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Next-Gen Firewalls</Badge>
                  <Badge variant="secondary">Network Segmentation</Badge>
                  <Badge variant="secondary">Intrusion Prevention</Badge>
                  <Badge variant="secondary">Web Application Firewall</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data Center Operations</li>
                    <li>• Network Service Providers</li>
                    <li>• Enterprise IT Departments</li>
                    <li>• Managed Security Providers</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Network Security Engineer</li>
                    <li>• Firewall Administrator</li>
                    <li>• Network Operations Manager</li>
                    <li>• Infrastructure Security Specialist</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• High-throughput traffic inspection and filtering</li>
                    <li>• SSL/TLS decryption performance impact</li>
                    <li>• Rule optimization and policy management</li>
                    <li>• Network segmentation strategy implementation</li>
                    <li>• Legacy network integration and migration</li>
                    <li>• Threat signature updates and maintenance</li>
                    <li>• Performance monitoring and capacity planning</li>
                    <li>• Multi-vendor security tool integration</li>
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