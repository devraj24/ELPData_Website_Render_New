import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, FileText, Users, Activity, Stethoscope } from "lucide-react";

export default function HealthcareITEnterpriseUsersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Healthcare IT Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 28,436+ healthcare organizations using EMR, EHR, PACS, and healthcare management systems. Target CIOs, IT directors, and clinical informatics professionals in hospitals, clinics, and health systems.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">28,436</div>
                  <div className="text-sm text-white/80">Healthcare Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">1.8M+</div>
                  <div className="text-sm text-white/80">Healthcare Professionals</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">95+</div>
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
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Healthcare Information Systems</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing healthcare technology solutions for patient care, clinical workflows, and regulatory compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-green-500" />
                  Electronic Health Records (EHR)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive patient record management and clinical documentation systems
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Patient Records</Badge>
                  <Badge variant="secondary">Clinical Documentation</Badge>
                  <Badge variant="secondary">ePrescribing</Badge>
                  <Badge variant="secondary">Clinical Decision Support</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Healthcare Organizations:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Hospitals & Health Systems</li>
                    <li>• Primary Care Clinics</li>
                    <li>• Specialty Medical Practices</li>
                    <li>• Ambulatory Surgery Centers</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Medical Information Officer (CMIO)</li>
                    <li>• Chief Nursing Information Officer (CNIO)</li>
                    <li>• Healthcare IT Director</li>
                    <li>• Clinical Informatics Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Physician adoption and workflow integration</li>
                    <li>• Interoperability with existing systems</li>
                    <li>• Data migration from legacy systems</li>
                    <li>• HIPAA compliance and security requirements</li>
                    <li>• Training clinical staff on new workflows</li>
                    <li>• Meaningful Use and quality reporting</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-6 h-6 text-blue-500" />
                  Picture Archiving (PACS)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Medical imaging storage, distribution, and viewing systems for radiology
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Medical Imaging</Badge>
                  <Badge variant="secondary">DICOM Storage</Badge>
                  <Badge variant="secondary">Radiology Workflow</Badge>
                  <Badge variant="secondary">Image Distribution</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Healthcare Organizations:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Radiology Centers</li>
                    <li>• Imaging Centers</li>
                    <li>• Hospital Radiology Departments</li>
                    <li>• Orthopedic & Cardiology Clinics</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Radiology Department Director</li>
                    <li>• Medical Imaging IT Manager</li>
                    <li>• Chief Radiologist</li>
                    <li>• PACS Administrator</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large storage requirements and costs</li>
                    <li>• Network bandwidth for image distribution</li>
                    <li>• Integration with radiology information systems</li>
                    <li>• Disaster recovery and backup strategies</li>
                    <li>• Vendor-neutral archive implementation</li>
                    <li>• Image quality and compression standards</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-purple-500" />
                  Practice Management Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Patient scheduling, billing, and administrative workflow management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Patient Scheduling</Badge>
                  <Badge variant="secondary">Medical Billing</Badge>
                  <Badge variant="secondary">Insurance Claims</Badge>
                  <Badge variant="secondary">Revenue Cycle Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Healthcare Organizations:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Private Medical Practices</li>
                    <li>• Dental Offices</li>
                    <li>• Mental Health Clinics</li>
                    <li>• Physical Therapy Centers</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Practice Administrator</li>
                    <li>• Medical Office Manager</li>
                    <li>• Revenue Cycle Director</li>
                    <li>• Billing Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Insurance eligibility verification automation</li>
                    <li>• Claims processing and denial management</li>
                    <li>• Patient payment collection workflows</li>
                    <li>• Staff training on billing processes</li>
                    <li>• Integration with EHR systems</li>
                    <li>• Regulatory compliance and reporting</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-red-500" />
                  Healthcare Cybersecurity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  HIPAA compliance, data protection, and security solutions for healthcare
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">HIPAA Compliance</Badge>
                  <Badge variant="secondary">Data Encryption</Badge>
                  <Badge variant="secondary">Access Controls</Badge>
                  <Badge variant="secondary">Breach Prevention</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Healthcare Organizations:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• All Healthcare Organizations</li>
                    <li>• Health Insurance Companies</li>
                    <li>• Healthcare Technology Vendors</li>
                    <li>• Medical Device Manufacturers</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Information Security Officer</li>
                    <li>• HIPAA Compliance Officer</li>
                    <li>• Risk Management Director</li>
                    <li>• Healthcare IT Security Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Ransomware and cyber attack prevention</li>
                    <li>• Protected health information (PHI) security</li>
                    <li>• Medical device security vulnerabilities</li>
                    <li>• Third-party vendor risk assessment</li>
                    <li>• Incident response and breach notification</li>
                    <li>• Staff security awareness training</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-orange-500" />
                  Telehealth & Remote Care
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Virtual care platforms and remote patient monitoring solutions
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Video Consultations</Badge>
                  <Badge variant="secondary">Remote Monitoring</Badge>
                  <Badge variant="secondary">Virtual Care Platforms</Badge>
                  <Badge variant="secondary">Patient Engagement</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Healthcare Organizations:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Primary Care Practices</li>
                    <li>• Mental Health Providers</li>
                    <li>• Chronic Care Management</li>
                    <li>• Rural Healthcare Facilities</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Medical Officer</li>
                    <li>• Telehealth Program Director</li>
                    <li>• Patient Experience Manager</li>
                    <li>• Clinical Operations Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Reimbursement and insurance coverage</li>
                    <li>• Technology adoption by elderly patients</li>
                    <li>• Clinical workflow integration</li>
                    <li>• State licensing and regulatory compliance</li>
                    <li>• Quality of care measurement</li>
                    <li>• Technical support and patient training</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="w-6 h-6 text-teal-500" />
                  Clinical Decision Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  AI-powered clinical guidelines, alerts, and evidence-based care tools
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Clinical Guidelines</Badge>
                  <Badge variant="secondary">Drug Interaction Alerts</Badge>
                  <Badge variant="secondary">Diagnostic Support</Badge>
                  <Badge variant="secondary">Evidence-Based Care</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Target Healthcare Organizations:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Academic Medical Centers</li>
                    <li>• Large Hospital Systems</li>
                    <li>• Specialty Care Centers</li>
                    <li>• Emergency Departments</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Medical Information Officer</li>
                    <li>• Clinical Quality Director</li>
                    <li>• Medical Director</li>
                    <li>• Clinical Informatics Specialist</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Alert fatigue and physician acceptance</li>
                    <li>• Clinical workflow integration</li>
                    <li>• Evidence base maintenance and updates</li>
                    <li>• Customization for specialty practices</li>
                    <li>• Measuring clinical outcome improvements</li>
                    <li>• Balancing sensitivity with specificity</li>
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