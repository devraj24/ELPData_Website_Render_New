import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Pill, Download, Building2, Users, TrendingUp, ShieldCheck } from "lucide-react";

export default function PharmacistsEmailList() {
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

  const pharmacistSegments = [
    { name: "Retail Pharmacists", count: "89,500+", description: "Pharmacists working in chain and independent retail pharmacies" },
    { name: "Hospital Pharmacists", count: "67,300+", description: "Clinical pharmacists in hospital and health system settings" },
    { name: "Clinical Pharmacists", count: "45,800+", description: "Pharmacists providing direct patient care and medication management" },
    { name: "Industrial Pharmacists", count: "28,400+", description: "Pharmacists in pharmaceutical manufacturing and development" },
    { name: "Consultant Pharmacists", count: "19,200+", description: "Independent pharmacists providing consulting services" },
    { name: "Academia Pharmacists", count: "12,800+", description: "Pharmacy educators and researchers at universities" }
  ];

  const keyResponsibilities = [
    "Medication Dispensing & Review",
    "Patient Counseling & Education", 
    "Drug Interaction Screening",
    "Pharmacy Operations Management",
    "Clinical Protocol Development",
    "Medication Therapy Management",
    "Regulatory Compliance",
    "Healthcare Team Collaboration"
  ];

  const purchaseDecisions = [
    "Pharmacy Management Software",
    "Medication Dispensing Systems", 
    "Clinical Decision Support Tools",
    "Inventory Management Systems",
    "Patient Counseling Resources",
    "Continuing Education Programs",
    "Pharmaceutical Reference Materials",
    "Automation and Robotics Equipment"
  ];

  const sampleData = [
    {
      name: "Dr. Susan Martinez",
      title: "Staff Pharmacist",
      workplace: "Metro Health Pharmacy",
      location: "Phoenix, AZ",
      employees: "25+",
      setting: "Retail Pharmacy"
    },
    {
      name: "Dr. James Wilson",
      title: "Clinical Pharmacist",
      workplace: "Regional Medical Center",
      location: "Atlanta, GA",
      employees: "450+",
      setting: "Hospital"
    },
    {
      name: "Dr. Maria Chen",
      title: "Pharmacy Director",
      workplace: "University Health System",
      location: "San Antonio, TX",
      employees: "1,200+", 
      setting: "Health System"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Pharmacists Email List - 263,000+ Pharmacy Professionals | ELP Data"
        description="Connect with 263,000+ verified Pharmacist email addresses. Target retail pharmacists, hospital pharmacists, clinical pharmacists, and pharmaceutical industry professionals."
        keywords="pharmacists email list, pharmacy professionals database, retail pharmacists, hospital pharmacists, clinical pharmacists"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Pill className="w-8 h-8 text-green-600" />
                  <Badge className="bg-green-100 text-green-800">Healthcare Professionals</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Pharmacists Email List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with 263,000+ Pharmacy professionals across retail pharmacies, hospitals, 
                  clinical settings, and pharmaceutical industry. Target the medication experts who 
                  influence purchasing decisions for pharmacy technology, equipment, and services.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our Pharmacists database includes professionals from major pharmacy chains, independent pharmacies, 
                  hospital systems, pharmaceutical companies, and academic institutions across all practice settings.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">263,000+</div>
                    <div className="text-gray-600">Pharmacist Contacts</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">96%</div>
                    <div className="text-gray-600">Data Accuracy</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-green-600 hover:bg-green-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get Pharmacists Email List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Custom Pharmacists List</h3>
                <h4 className="text-xl font-semibold text-green-600 mb-6">Request Quote</h4>
                
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
                      placeholder="Specific requirements (practice setting, pharmacy type, specialization)"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Get Custom Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Pharmacist Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pharmacist Segments Available</h2>
              <p className="text-xl text-gray-600">Target Pharmacists by practice setting and specialization</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pharmacistSegments.map((segment, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg text-gray-900">{segment.name}</CardTitle>
                    <div className="text-2xl font-bold text-green-600">{segment.count}</div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Pharmacist Key Responsibilities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {keyResponsibilities.map((responsibility, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-900">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Pharmacy Professional Focus</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Medication Safety & Quality</h3>
                      <p className="text-gray-600">Ensuring safe medication dispensing and quality pharmaceutical care</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Patient Care & Counseling</h3>
                      <p className="text-gray-600">Providing medication therapy management and patient education</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Pharmacy Technology Adoption</h3>
                      <p className="text-gray-600">Implementing pharmacy automation and digital health solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Pharmacy Operations Management</h3>
                      <p className="text-gray-600">Managing pharmacy workflows, inventory, and business operations</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-green-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Pharmacist Purchase Decisions</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Pharmacists Database Records</h2>
              <p className="text-xl text-gray-600">Preview of available Pharmacist contact information</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Workplace</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employees</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Setting</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sampleData.map((pharmacist, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pharmacist.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pharmacist.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">{pharmacist.workplace}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pharmacist.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pharmacist.employees}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pharmacist.setting}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Connect with Pharmacy Professionals</h2>
            <p className="text-xl text-green-100 mb-8">
              Access 263,000+ verified Pharmacist email addresses from healthcare organizations nationwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
                Get Custom Pharmacists List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}