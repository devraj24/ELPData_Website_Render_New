import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Download, Building2, Users, TrendingUp, Heart } from "lucide-react";

export default function DoctorsEmailList() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    requirements: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const doctorSegments = [
    { name: "Primary Care Physicians", count: "245,800+", description: "Family medicine doctors, internists, and general practitioners" },
    { name: "Specialists", count: "198,400+", description: "Cardiologists, neurologists, orthopedic surgeons, and other medical specialists" },
    { name: "Hospital Physicians", count: "156,300+", description: "Doctors working in hospital settings and emergency medicine" },
    { name: "Private Practice", count: "134,200+", description: "Independent practice owners and private clinic physicians" },
    { name: "Academic Medicine", count: "89,500+", description: "Medical school faculty and research physicians" },
    { name: "Surgical Specialists", count: "76,800+", description: "Surgeons across various specialties and subspecialties" }
  ];

  const keyResponsibilities = [
    "Patient Diagnosis & Treatment",
    "Medical Decision Making", 
    "Healthcare Technology Adoption",
    "Practice Management",
    "Continuing Medical Education",
    "Patient Care Coordination",
    "Medical Research & Development",
    "Healthcare Quality Improvement"
  ];

  const purchaseDecisions = [
    "Medical Equipment and Devices",
    "Electronic Health Records (EHR) Systems", 
    "Medical Software and Applications",
    "Pharmaceutical Products and Treatments",
    "Diagnostic Equipment and Tools",
    "Practice Management Software",
    "Medical Education and Training Programs",
    "Healthcare Technology Solutions"
  ];

  const sampleData = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Family Medicine Physician",
      practice: "Community Health Associates",
      location: "Austin, TX",
      specialty: "Family Medicine",
      setting: "Private Practice"
    },
    {
      name: "Dr. Michael Chen",
      title: "Cardiologist",
      practice: "Heart & Vascular Institute",
      location: "Boston, MA",
      specialty: "Cardiology",
      setting: "Hospital System"
    },
    {
      name: "Dr. Jennifer Rodriguez",
      title: "Emergency Medicine Physician",
      practice: "Metro General Hospital",
      location: "Denver, CO",
      specialty: "Emergency Medicine", 
      setting: "Hospital"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Doctors Email List - 387,200+ Physicians | ELP Data"
        description="Connect with 387,200+ verified Doctor email addresses. Target physicians across primary care, specialties, hospitals, private practice, and academic medicine."
        keywords="doctors email list, physicians database, medical professionals, healthcare providers, physician contacts"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Stethoscope className="w-8 h-8 text-blue-600" />
                  <Badge className="bg-blue-100 text-blue-800">Medical Professionals</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Doctors Email List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with 387,200+ Physicians across primary care, medical specialties, hospital systems, 
                  private practice, and academic medicine. Target the healthcare decision-makers who drive 
                  medical technology adoption and influence healthcare purchasing decisions.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our Doctors database includes medical professionals from major hospital systems, private practices, 
                  academic medical centers, specialty clinics, and healthcare organizations across all medical specialties.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">387,200+</div>
                    <div className="text-gray-600">Doctor Contacts</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">96%</div>
                    <div className="text-gray-600">Data Accuracy</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get Doctors Email List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Custom Doctors List</h3>
                <h4 className="text-xl font-semibold text-blue-600 mb-6">Request Quote</h4>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Business Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <Input
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="requirements"
                      placeholder="Specific requirements (medical specialty, practice type, geography)"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Get Custom Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Doctor Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Doctor Segments Available</h2>
              <p className="text-xl text-gray-600">Target Doctors by specialty and practice setting</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctorSegments.map((segment, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg text-gray-900">{segment.name}</CardTitle>
                    <div className="text-2xl font-bold text-blue-600">{segment.count}</div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{segment.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Responsibilities & Purchase Decisions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Doctor Key Responsibilities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {keyResponsibilities.map((responsibility, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-900">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Medical Professional Focus</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Patient Care & Treatment</h3>
                      <p className="text-gray-600">Providing high-quality medical care and treatment to patients</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Medical Technology Adoption</h3>
                      <p className="text-gray-600">Implementing new medical technologies and healthcare innovations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Practice Management</h3>
                      <p className="text-gray-600">Managing medical practices and healthcare delivery systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Healthcare Leadership</h3>
                      <p className="text-gray-600">Leading medical teams and driving healthcare quality improvements</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Doctor Purchase Decisions</h3>
                  <ul className="space-y-2 text-gray-700">
                    {purchaseDecisions.map((decision, index) => (
                      <li key={index}>• {decision}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Data */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Doctors Database Records</h2>
              <p className="text-xl text-gray-600">Preview of available Doctor contact information</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Practice</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Specialty</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Setting</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sampleData.map((doctor, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{doctor.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{doctor.practice}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.specialty}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.setting}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Connect with Medical Professionals</h2>
            <p className="text-xl text-blue-100 mb-8">
              Access 901,000+ verified Doctor email addresses from healthcare organizations nationwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Get Custom Doctors List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}