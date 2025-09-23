import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Scale, Download, Building2, Users, TrendingUp, FileText } from "lucide-react";

export default function LawyersEmailList() {
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

  const lawyerSegments = [
    { name: "Corporate Lawyers", count: "89,400+", description: "Attorneys specializing in business law, mergers, and corporate transactions" },
    { name: "Litigation Attorneys", count: "76,200+", description: "Trial lawyers and litigation specialists handling court proceedings" },
    { name: "Real Estate Lawyers", count: "54,800+", description: "Attorneys focusing on property law and real estate transactions" },
    { name: "Family Law Attorneys", count: "48,600+", description: "Lawyers specializing in divorce, custody, and family legal matters" },
    { name: "Criminal Defense Lawyers", count: "42,300+", description: "Attorneys defending clients in criminal cases and proceedings" },
    { name: "Personal Injury Lawyers", count: "38,700+", description: "Attorneys specializing in accident and injury compensation cases" }
  ];

  const keyResponsibilities = [
    "Legal Research & Analysis",
    "Client Consultation & Representation", 
    "Document Preparation & Review",
    "Court Proceedings & Litigation",
    "Contract Negotiation",
    "Legal Compliance & Advisory",
    "Case Management",
    "Professional Development"
  ];

  const purchaseDecisions = [
    "Legal Research Software and Databases",
    "Case Management Systems", 
    "Document Management and Review Tools",
    "Practice Management Software",
    "Legal Education and CLE Programs",
    "Court Filing and E-Discovery Systems",
    "Client Communication Platforms",
    "Legal Technology and Automation Tools"
  ];

  const sampleData = [
    {
      name: "Robert Johnson",
      title: "Senior Partner",
      firm: "Johnson & Associates Law Firm",
      location: "New York, NY",
      employees: "85+",
      specialty: "Corporate Law"
    },
    {
      name: "Maria Rodriguez",
      title: "Litigation Attorney",
      firm: "Metro Legal Group",
      location: "Los Angeles, CA",
      employees: "45+",
      specialty: "Civil Litigation"
    },
    {
      name: "David Chen",
      title: "Real Estate Counsel",
      firm: "Property Law Partners",
      location: "Chicago, IL",
      employees: "28+", 
      specialty: "Real Estate Law"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Lawyers Email List - 350,000+ Legal Professionals | ELP Data"
        description="Connect with 350,000+ verified Lawyer email addresses. Target attorneys across corporate law, litigation, real estate, family law, and criminal defense."
        keywords="lawyers email list, attorneys database, legal professionals, law firms, legal counsel contacts"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-amber-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Scale className="w-8 h-8 text-amber-600" />
                  <Badge className="bg-amber-100 text-amber-800">Legal Professionals</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Lawyers Email List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with 350,000+ Legal professionals across corporate law, litigation, real estate, 
                  family law, and criminal defense. Target the attorneys who make purchasing decisions for 
                  legal technology, software, and professional services at law firms and legal departments.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our Lawyers database includes attorneys from major law firms, solo practitioners, 
                  corporate legal departments, and government legal offices across all practice areas.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-amber-600 mb-2">350,000+</div>
                    <div className="text-gray-600">Lawyer Contacts</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                    <div className="text-gray-600">Data Accuracy</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get Lawyers Email List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Custom Lawyers List</h3>
                <h4 className="text-xl font-semibold text-amber-600 mb-6">Request Quote</h4>
                
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
                      placeholder="Specific requirements (practice area, firm size, geography)"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                    Get Custom Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Lawyer Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Practice Segments Available</h2>
              <p className="text-xl text-gray-600">Target Lawyers by practice area and legal specialty</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lawyerSegments.map((segment, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg text-gray-900">{segment.name}</CardTitle>
                    <div className="text-2xl font-bold text-amber-600">{segment.count}</div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Lawyer Key Responsibilities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {keyResponsibilities.map((responsibility, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-900">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Professional Focus</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Legal Research & Documentation</h3>
                      <p className="text-gray-600">Conducting thorough legal research and preparing comprehensive legal documents</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Client Representation & Advocacy</h3>
                      <p className="text-gray-600">Providing legal representation and advocating for client interests</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Legal Technology Adoption</h3>
                      <p className="text-gray-600">Implementing legal technology solutions to improve practice efficiency</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Practice Management & Development</h3>
                      <p className="text-gray-600">Managing law firm operations and business development initiatives</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-amber-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Lawyer Purchase Decisions</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Lawyers Database Records</h2>
              <p className="text-xl text-gray-600">Preview of available Lawyer contact information</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Firm</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employees</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Specialty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sampleData.map((lawyer, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lawyer.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lawyer.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-600">{lawyer.firm}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lawyer.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lawyer.employees}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lawyer.specialty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-amber-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Connect with Legal Professionals</h2>
            <p className="text-xl text-amber-100 mb-8">
              Access 350,000+ verified Lawyer email addresses from law firms nationwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-amber-600">
                Get Custom Lawyers List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}