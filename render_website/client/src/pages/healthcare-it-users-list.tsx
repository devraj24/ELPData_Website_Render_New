import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Database, Monitor, Users, Stethoscope } from "lucide-react";

export default function HealthcareITUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Healthcare IT System Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 780,000+ healthcare organizations implementing EHR, PACS, and health information systems. Target CISOs, healthcare IT directors, and clinical informatics specialists implementing Epic, Cerner, and MEDITECH solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">780K+</div>
                  <div className="text-sm text-white/80">Healthcare Facilities</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">2.4M+</div>
                  <div className="text-sm text-white/80">Clinical IT Users</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">145+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare IT Solutions Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">Healthcare IT Solutions & Systems</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Healthcare organizations implementing comprehensive health information technology for patient care, compliance, and operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-blue-500" />
                  Electronic Health Records (EHR)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive electronic medical record systems for patient data management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Patient Records</Badge>
                  <Badge variant="secondary">Clinical Documentation</Badge>
                  <Badge variant="secondary">Order Management</Badge>
                  <Badge variant="secondary">Interoperability</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Hospitals & Health Systems</li>
                    <li>• Primary Care Practices</li>
                    <li>• Specialty Clinics</li>
                    <li>• Ambulatory Surgery Centers</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Medical Information Officer</li>
                    <li>• EHR Implementation Manager</li>
                    <li>• Health Information Manager</li>
                    <li>• Clinical Systems Analyst</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• EHR system interoperability and data exchange</li>
                    <li>• Physician workflow optimization and user adoption</li>
                    <li>• Clinical decision support rule management</li>
                    <li>• Patient data privacy and HIPAA compliance</li>
                    <li>• System performance and response time issues</li>
                    <li>• Integration with third-party medical devices</li>
                    <li>• Clinical documentation burden and efficiency</li>
                    <li>• Data migration from legacy systems</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="w-6 h-6 text-green-500" />
                  Healthcare Analytics & BI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Clinical and operational analytics platforms for data-driven healthcare
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Clinical Analytics</Badge>
                  <Badge variant="secondary">Population Health</Badge>
                  <Badge variant="secondary">Quality Metrics</Badge>
                  <Badge variant="secondary">Financial Analytics</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Integrated Delivery Networks</li>
                    <li>• Accountable Care Organizations</li>
                    <li>• Health Insurance Plans</li>
                    <li>• Clinical Research Organizations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Healthcare Data Analyst</li>
                    <li>• Population Health Manager</li>
                    <li>• Clinical Quality Director</li>
                    <li>• Healthcare Business Intelligence Lead</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Healthcare data standardization and normalization</li>
                    <li>• Real-time clinical decision support analytics</li>
                    <li>• Population health risk stratification</li>
                    <li>• Quality measure reporting and automation</li>
                    <li>• Healthcare cost and utilization analysis</li>
                    <li>• Patient outcome prediction and modeling</li>
                    <li>• Multi-source data integration complexity</li>
                    <li>• Regulatory reporting and compliance tracking</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-purple-500" />
                  Healthcare Cybersecurity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Specialized security solutions for healthcare data protection
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">HIPAA Compliance</Badge>
                  <Badge variant="secondary">Medical Device Security</Badge>
                  <Badge variant="secondary">Patient Data Protection</Badge>
                  <Badge variant="secondary">Breach Prevention</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Healthcare Networks & IDNs</li>
                    <li>• Medical Device Manufacturers</li>
                    <li>• Health Information Exchanges</li>
                    <li>• Telehealth & Remote Care Providers</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Healthcare CISO</li>
                    <li>• HIPAA Security Officer</li>
                    <li>• Medical Device Security Manager</li>
                    <li>• Healthcare Risk Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Medical device vulnerability management</li>
                    <li>• HIPAA breach notification and response</li>
                    <li>• Legacy medical equipment security upgrades</li>
                    <li>• Remote healthcare worker endpoint security</li>
                    <li>• Third-party vendor risk assessment</li>
                    <li>• Patient data encryption and access controls</li>
                    <li>• Ransomware protection and recovery planning</li>
                    <li>• Healthcare-specific threat intelligence</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-orange-500" />
                  Telemedicine & Remote Care
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Virtual care platforms and remote patient monitoring systems
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Video Conferencing</Badge>
                  <Badge variant="secondary">Remote Monitoring</Badge>
                  <Badge variant="secondary">Mobile Health Apps</Badge>
                  <Badge variant="secondary">Virtual Consultations</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Telehealth Service Providers</li>
                    <li>• Rural & Remote Healthcare</li>
                    <li>• Chronic Care Management</li>
                    <li>• Mental Health Services</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Telehealth Program Manager</li>
                    <li>• Remote Care Coordinator</li>
                    <li>• Digital Health Product Manager</li>
                    <li>• Virtual Care Technology Lead</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Video quality and bandwidth optimization</li>
                    <li>• Remote patient monitoring device integration</li>
                    <li>• Telehealth reimbursement and billing complexity</li>
                    <li>• State licensing and cross-border regulations</li>
                    <li>• Patient digital literacy and technology adoption</li>
                    <li>• Clinical workflow integration challenges</li>
                    <li>• Data security and privacy in remote settings</li>
                    <li>• Technology reliability and uptime requirements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-teal-500" />
                  Patient Engagement Platforms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Digital platforms for patient communication and engagement
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Patient Portals</Badge>
                  <Badge variant="secondary">Appointment Scheduling</Badge>
                  <Badge variant="secondary">Care Plan Management</Badge>
                  <Badge variant="secondary">Health Education</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Patient-centered Medical Homes</li>
                    <li>• Specialty Care Practices</li>
                    <li>• Health Plans & Payers</li>
                    <li>• Wellness & Preventive Care</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Patient Experience Manager</li>
                    <li>• Digital Engagement Coordinator</li>
                    <li>• Care Management Director</li>
                    <li>• Patient Portal Administrator</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Patient portal adoption and usage rates</li>
                    <li>• Mobile-first design and accessibility</li>
                    <li>• Multi-language support and cultural competency</li>
                    <li>• Care plan adherence tracking and reminders</li>
                    <li>• Patient-generated health data integration</li>
                    <li>• Appointment scheduling optimization</li>
                    <li>• Health literacy and education content delivery</li>
                    <li>• Family member access and proxy management</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="w-6 h-6 text-indigo-500" />
                  Clinical Decision Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  AI-powered clinical decision support and diagnostic assistance tools
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Clinical Guidelines</Badge>
                  <Badge variant="secondary">Drug Interaction Alerts</Badge>
                  <Badge variant="secondary">Diagnostic Support</Badge>
                  <Badge variant="secondary">Treatment Recommendations</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Academic Medical Centers</li>
                    <li>• Critical Care Units</li>
                    <li>• Emergency Departments</li>
                    <li>• Radiology & Pathology Practices</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Clinical Informatics Physician</li>
                    <li>• Medical AI Product Manager</li>
                    <li>• Clinical Decision Support Analyst</li>
                    <li>• Healthcare AI Research Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Clinical rule engine optimization and maintenance</li>
                    <li>• Alert fatigue reduction and prioritization</li>
                    <li>• Evidence-based guideline integration</li>
                    <li>• AI model validation and regulatory approval</li>
                    <li>• Clinical workflow integration without disruption</li>
                    <li>• Personalized medicine and genomic data integration</li>
                    <li>• Real-time clinical data processing and analysis</li>
                    <li>• Physician trust and adoption of AI recommendations</li>
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