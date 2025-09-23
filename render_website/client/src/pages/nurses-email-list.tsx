import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Mail, Building, TrendingUp, Shield, Target, Search, Download, Phone, MapPin, Star, Heart } from "lucide-react";

export default function NursesEmailList() {
  const nursingSpecializations = [
    "Advance Practice", "Adult Care", "Adult Psychology", "Ambulatory Care", "Acute Health", 
    "Cardiology", "Child Psychiatrics", "Clinical Nursing", "Community Health", "Critical Care",
    "Dermatology", "Diabetes", "Dialysis", "Drug & Alcohol", "Eye, Ear, Nose & Throat",
    "Emergency Care", "Family Care", "Family Planning", "Family Psychiatrics", "Geriatric aide",
    "Geriatric Care", "Home Health Care", "IV Certification", "Medical assistant", "Medical/Surgery",
    "Midwife", "Neonatal Care", "Neurology"
  ];

  const implementationSolutions = [
    {
      title: "Healthcare Technology Integration",
      description: "Nurses Email List implementation for healthcare technology integration and patient care optimization",
      categories: ["EHR Systems", "Medical Devices", "Telehealth", "Patient Monitoring"],
      targetIndustries: [
        "Hospitals & Health Systems",
        "Medical Technology Companies", 
        "Healthcare Software Providers",
        "Telehealth Platforms"
      ],
      responsibleTitles: [
        "Nurse Informaticist",
        "Clinical Technology Specialist", 
        "Healthcare IT Coordinator",
        "Digital Health Manager"
      ],
      challenges: [
        "Electronic health record system implementation and training",
        "Medical device integration and workflow optimization",
        "Telehealth platform adoption and patient engagement",
        "Clinical decision support system utilization",
        "Data privacy and HIPAA compliance management",
        "Interoperability between healthcare systems",
        "Staff training and technology adoption resistance",
        "Patient safety and quality improvement metrics"
      ],
      icon: <Heart className="w-8 h-8 text-red-600" />
    },
    {
      title: "Patient Care Management",
      description: "Nurses Email List implementation for patient care management and clinical excellence",
      categories: ["Care Coordination", "Patient Safety", "Quality Improvement", "Care Plans"],
      targetIndustries: [
        "Healthcare Facilities",
        "Long-term Care",
        "Home Health Services", 
        "Rehabilitation Centers"
      ],
      responsibleTitles: [
        "Charge Nurse",
        "Case Manager",
        "Clinical Coordinator",
        "Patient Care Manager"
      ],
      challenges: [
        "Patient care coordination across multiple departments",
        "Care plan documentation and compliance",
        "Medication management and safety protocols",
        "Patient education and discharge planning",
        "Quality metrics and performance improvement",
        "Staffing optimization and workload management",
        "Infection control and prevention measures",
        "Patient satisfaction and experience enhancement"
      ],
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Specialized Care Services",
      description: "Nurses Email List implementation for specialized care services and clinical expertise",
      categories: ["Specialty Units", "Critical Care", "Emergency Services", "Surgical Services"],
      targetIndustries: [
        "Specialty Hospitals",
        "Emergency Departments",
        "Intensive Care Units",
        "Surgical Centers"
      ],
      responsibleTitles: [
        "ICU Nurse",
        "Emergency Nurse", 
        "Surgical Nurse",
        "Specialty Care Coordinator"
      ],
      challenges: [
        "Critical patient monitoring and life support management",
        "Emergency response protocols and rapid assessment",
        "Surgical preparation and post-operative care",
        "Advanced life support and resuscitation procedures",
        "Specialized equipment operation and maintenance",
        "Interdisciplinary team collaboration",
        "High-stress environment management",
        "Continuing education and certification requirements"
      ],
      icon: <Target className="w-8 h-8 text-green-600" />
    },
    {
      title: "Community Health Programs", 
      description: "Nurses Email List implementation for community health programs and preventive care",
      categories: ["Public Health", "Preventive Care", "Health Education", "Community Outreach"],
      targetIndustries: [
        "Public Health Departments",
        "Community Health Centers",
        "School Health Services",
        "Occupational Health"
      ],
      responsibleTitles: [
        "Public Health Nurse",
        "Community Health Coordinator",
        "School Nurse", 
        "Occupational Health Specialist"
      ],
      challenges: [
        "Community health assessment and program planning",
        "Health education and promotion initiatives",
        "Disease prevention and vaccination programs",
        "Health screening and early detection services",
        "Cultural competency and diverse population care",
        "Resource allocation and program sustainability",
        "Partnership development with community organizations",
        "Health equity and access improvement"
      ],
      icon: <Users className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Regulatory Compliance & Quality",
      description: "Nurses Email List implementation for regulatory compliance & quality assurance", 
      categories: ["Compliance Management", "Quality Assurance", "Risk Management", "Accreditation"],
      targetIndustries: [
        "Healthcare Regulatory Bodies",
        "Quality Improvement Organizations",
        "Healthcare Consulting",
        "Accreditation Services"
      ],
      responsibleTitles: [
        "Quality Assurance Nurse",
        "Compliance Officer",
        "Risk Management Coordinator",
        "Clinical Quality Manager"
      ],
      challenges: [
        "Joint Commission and regulatory compliance monitoring",
        "Quality improvement initiatives and outcome measurement", 
        "Risk assessment and incident management",
        "Clinical audit and documentation reviews",
        "Staff competency assessment and validation",
        "Patient safety reporting and analysis",
        "Accreditation preparation and maintenance",
        "Policy development and implementation"
      ],
      icon: <Shield className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Professional Development",
      description: "Nurses Email List implementation for professional development and career advancement",
      categories: ["Continuing Education", "Certification Programs", "Leadership Development", "Career Planning"],
      targetIndustries: [
        "Nursing Education",
        "Professional Organizations",
        "Healthcare Leadership",
        "Training Providers"
      ],
      responsibleTitles: [
        "Nurse Educator",
        "Clinical Instructor",
        "Nursing Manager",
        "Professional Development Coordinator"
      ],
      challenges: [
        "Continuing education requirements and certification maintenance",
        "Leadership skill development and management training",
        "Career pathway planning and advancement opportunities",
        "Evidence-based practice implementation",
        "Research participation and clinical studies",
        "Mentorship programs and professional networking",
        "Work-life balance and burnout prevention",
        "Specialty certification and advanced practice preparation"
      ],
      icon: <Star className="w-8 h-8 text-indigo-600" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Nurses Email List - Healthcare Professional Contacts Database | ELP Data"
        description="Access our comprehensive Nurses email list with 750,000 verified healthcare professional contacts. Target nursing professionals across 25+ specializations and healthcare facilities."
        keywords="nurses email list, healthcare professional contacts, nursing database, medical staff mailing list"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Nurses <span className="text-green-600">Email List</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Connect with Nurses across various healthcare functions and specializations. 
                  Access our comprehensive database of healthcare professionals implementing nursing solutions for patient care excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                    <Download className="w-5 h-5 mr-2" />
                    Download Sample List
                  </Button>
                  <Button variant="outline" className="text-lg px-8 py-3 border-green-600 text-green-600 hover:bg-green-50">
                    <Phone className="w-5 h-5 mr-2" />
                    Request Custom List
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>750,000 Nurse Contacts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>All Healthcare Facilities</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Global Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-green-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Search Nurses Database</h3>
                <div className="space-y-4">
                  <Input placeholder="Healthcare Facility" className="border-green-200 focus:border-green-500" />
                  <Input placeholder="Nursing Specialization" className="border-green-200 focus:border-green-500" />
                  <Input placeholder="Location" className="border-green-200 focus:border-green-500" />
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Search className="w-4 h-4 mr-2" />
                    Search Nurse Contacts
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">98.5%</div>
                    <div className="text-sm text-gray-600">Data Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">750K+</div>
                <div className="text-gray-600">Nurse Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Nursing Specializations</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">8M+</div>
                <div className="text-gray-600">Email Verifications</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">Quarterly</div>
                <div className="text-gray-600">Data Updates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Nursing Specializations */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Nursing Specializations Available
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Access nurses across 25+ specialized areas of healthcare practice
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {nursingSpecializations.map((specialization, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-green-100 hover:border-green-300 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">{specialization}</span>
                  </div>
                </div>
              ))}
              <div className="bg-green-100 p-4 rounded-lg border border-green-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm font-medium text-green-700">And More...</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Solutions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Nurses Email List Implementation Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Organizations implementing Nurses Email List across various healthcare functions and use cases
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {implementationSolutions.map((solution, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        {solution.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-900 mb-2">{solution.title}</CardTitle>
                        <p className="text-gray-600 text-sm">{solution.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Categories */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Categories:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.categories.map((category, idx) => (
                          <span key={idx} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Target Industries */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Target Industries:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {solution.targetIndustries.map((industry, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                            {industry}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Responsible Job Titles */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Responsible Job Titles:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {solution.responsibleTitles.map((title, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                            {title}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Current Challenges */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Current Challenges:</h4>
                      <ul className="text-sm text-gray-600 space-y-1 max-h-32 overflow-y-auto">
                        {solution.challenges.slice(0, 4).map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                      {solution.challenges.length > 4 && (
                        <p className="text-xs text-gray-500 mt-2">
                          +{solution.challenges.length - 4} more challenges
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Connect with Nurses?</h2>
            <p className="text-xl text-green-100 mb-8">
              Access our comprehensive database of 750,000 Nurse contacts across 25+ specializations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-3">
                <Download className="w-5 h-5 mr-2" />
                Get Instant Access
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-green-500 text-lg px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Speak with Expert
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}