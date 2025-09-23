import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Wrench, Download, Building2, Users, TrendingUp, Target } from "lucide-react";

export default function EngineersEmailList() {
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

  const engineerSegments = [
    { name: "Software Engineers", count: "287,450+", description: "Software development professionals across web, mobile, and enterprise applications" },
    { name: "Civil Engineers", count: "156,200+", description: "Infrastructure and construction engineering professionals" },
    { name: "Mechanical Engineers", count: "198,300+", description: "Product design, manufacturing, and mechanical systems engineers" },
    { name: "Electrical Engineers", count: "134,800+", description: "Power systems, electronics, and electrical infrastructure engineers" },
    { name: "Chemical Engineers", count: "89,150+", description: "Process engineering professionals in manufacturing and pharmaceuticals" },
    { name: "Aerospace Engineers", count: "67,300+", description: "Aviation, space, and defense engineering professionals" },
    { name: "Environmental Engineers", count: "54,200+", description: "Sustainability and environmental compliance engineering professionals" }
  ];

  const keyResponsibilities = [
    "Technical Design & Development",
    "Project Planning & Execution", 
    "Quality Assurance & Testing",
    "Technical Documentation",
    "Problem Solving & Innovation",
    "Regulatory Compliance",
    "Team Collaboration",
    "Continuous Learning & Improvement"
  ];

  const purchaseDecisions = [
    "Engineering Software and CAD Tools",
    "Technical Equipment and Instruments", 
    "Professional Development and Training",
    "Project Management Software",
    "Testing and Quality Assurance Tools",
    "Industry-specific Software Solutions",
    "Technical Consulting Services",
    "Certification and Compliance Tools"
  ];

  const sampleData = [
    {
      name: "Alex Thompson",
      title: "Senior Software Engineer",
      company: "TechInnovate Solutions",
      location: "San Francisco, CA",
      employees: "2,500+",
      specialty: "Full Stack Development"
    },
    {
      name: "Maria Rodriguez",
      title: "Civil Engineering Manager",
      company: "Infrastructure Dynamics",
      location: "Austin, TX",
      employees: "1,200+",
      specialty: "Transportation Engineering"
    },
    {
      name: "David Kim",
      title: "Principal Mechanical Engineer",
      company: "Manufacturing Excellence Corp",
      location: "Detroit, MI",
      employees: "4,800+", 
      specialty: "Product Design"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Engineers Email List - 987,400+ Engineering Professionals | ELP Data"
        description="Connect with 987,400+ verified Engineer email addresses. Target software engineers, civil engineers, mechanical engineers, electrical engineers, and more across all industries."
        keywords="engineers email list, engineering professionals database, software engineers, civil engineers, mechanical engineers"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-orange-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Wrench className="w-8 h-8 text-orange-600" />
                  <Badge className="bg-orange-100 text-orange-800">Engineering Professionals</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Engineers Email List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with 987,400+ Engineering professionals across software development, civil engineering, mechanical 
                  engineering, electrical engineering, and specialized technical fields. Target the technical experts who drive 
                  innovation and make technology purchasing decisions for their organizations.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our Engineers database includes technical professionals from Fortune 500 companies, engineering firms, 
                  manufacturing companies, technology startups, and government agencies across all major industries.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-orange-600 mb-2">987,400+</div>
                    <div className="text-gray-600">Engineer Contacts</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
                    <div className="text-gray-600">Data Accuracy</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get Engineers Email List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Custom Engineers List</h3>
                <h4 className="text-xl font-semibold text-orange-600 mb-6">Request Quote</h4>
                
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
                      placeholder="Specific requirements (engineering specialty, company size, industry)"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                    Get Custom Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Engineer Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Engineering Segments Available</h2>
              <p className="text-xl text-gray-600">Target Engineers by specialty and technical expertise</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {engineerSegments.map((segment, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg text-gray-900">{segment.name}</CardTitle>
                    <div className="text-2xl font-bold text-orange-600">{segment.count}</div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Engineer Key Responsibilities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {keyResponsibilities.map((responsibility, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-900">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Professional Focus</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-orange-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Technical Innovation & Development</h3>
                      <p className="text-gray-600">Design, development, and implementation of technical solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-orange-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Process Optimization & Efficiency</h3>
                      <p className="text-gray-600">Continuous improvement and optimization of engineering processes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-orange-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Project Management & Execution</h3>
                      <p className="text-gray-600">Leading technical projects from concept to completion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-orange-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Technical Leadership & Mentoring</h3>
                      <p className="text-gray-600">Leading engineering teams and developing technical talent</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-orange-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Engineer Purchase Decisions</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Engineers Database Records</h2>
              <p className="text-xl text-gray-600">Preview of available Engineer contact information</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employees</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Specialty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sampleData.map((engineer, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{engineer.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{engineer.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-600">{engineer.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{engineer.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{engineer.employees}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{engineer.specialty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-orange-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Connect with Engineering Professionals</h2>
            <p className="text-xl text-orange-100 mb-8">
              Access 987,400+ verified Engineer email addresses from companies driving technical innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600">
                Get Custom Engineers List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}