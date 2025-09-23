import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Building, Download, Users, TrendingUp, Target, Ruler } from "lucide-react";

export default function ArchitectsEmailList() {
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

  const architectSegments = [
    { name: "Commercial Architects", count: "34,200+", description: "Architects specializing in commercial building design and construction" },
    { name: "Residential Architects", count: "28,600+", description: "Architects focused on residential home and housing development design" },
    { name: "Landscape Architects", count: "18,400+", description: "Professionals designing outdoor spaces, parks, and environmental projects" },
    { name: "Interior Architects", count: "15,800+", description: "Specialists in interior space design and architectural planning" },
    { name: "Urban Planners", count: "12,500+", description: "Architects working on city planning and urban development projects" },
    { name: "Industrial Architects", count: "9,300+", description: "Architects designing industrial facilities and manufacturing spaces" }
  ];

  const keyResponsibilities = [
    "Architectural Design & Planning",
    "Project Management & Coordination", 
    "Building Code Compliance",
    "Client Consultation & Presentations",
    "Construction Documentation",
    "Site Analysis & Planning",
    "3D Modeling & Visualization",
    "Sustainable Design Implementation"
  ];

  const purchaseDecisions = [
    "CAD and Design Software",
    "3D Modeling and Rendering Tools", 
    "Project Management Software",
    "Building Information Modeling (BIM) Systems",
    "Professional Development and Certification",
    "Design and Drafting Equipment",
    "Construction Materials and Specifications",
    "Architectural Services and Consulting"
  ];

  const sampleData = [
    {
      name: "Jennifer Walsh",
      title: "Senior Architect",
      company: "Metropolitan Design Group",
      location: "Chicago, IL",
      employees: "150+",
      specialty: "Commercial Architecture"
    },
    {
      name: "Michael Torres",
      title: "Principal Architect",
      company: "Sustainable Spaces LLC",
      location: "Portland, OR",
      employees: "45+",
      specialty: "Residential Design"
    },
    {
      name: "Lisa Chen",
      title: "Landscape Architect",
      company: "Green City Planning",
      location: "San Francisco, CA",
      employees: "85+", 
      specialty: "Urban Landscape"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Architects Email List - 118,800+ Architecture Professionals | ELP Data"
        description="Connect with 118,800+ verified Architect email addresses. Target commercial architects, residential architects, landscape architects, and urban planners."
        keywords="architects email list, architecture professionals database, commercial architects, residential architects, landscape architects"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Building className="w-8 h-8 text-slate-600" />
                  <Badge className="bg-slate-100 text-slate-800">Design Professionals</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Architects Email List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with 118,800+ Architecture professionals across commercial design, residential planning, 
                  landscape architecture, and urban development. Target the design experts who influence building 
                  projects and make key purchasing decisions for architectural firms and construction projects.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our Architects database includes design professionals from major architectural firms, independent practices, 
                  construction companies, and government planning departments across all design specialties.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-slate-600 mb-2">118,800+</div>
                    <div className="text-gray-600">Architect Contacts</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
                    <div className="text-gray-600">Data Accuracy</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-slate-600 hover:bg-slate-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get Architects Email List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Custom Architects List</h3>
                <h4 className="text-xl font-semibold text-slate-600 mb-6">Request Quote</h4>
                
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
                      placeholder="Specific requirements (architecture type, firm size, project focus)"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-slate-600 hover:bg-slate-700">
                    Get Custom Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Architect Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Architecture Segments Available</h2>
              <p className="text-xl text-gray-600">Target Architects by specialty and design focus</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {architectSegments.map((segment, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg text-gray-900">{segment.name}</CardTitle>
                    <div className="text-2xl font-bold text-slate-600">{segment.count}</div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Architect Key Responsibilities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {keyResponsibilities.map((responsibility, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-900">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Design Professional Focus</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Ruler className="w-6 h-6 text-slate-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Design & Planning Excellence</h3>
                      <p className="text-gray-600">Creating innovative architectural designs and comprehensive project plans</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-slate-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Project Coordination & Management</h3>
                      <p className="text-gray-600">Managing complex construction projects from concept to completion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-slate-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Sustainable Design Innovation</h3>
                      <p className="text-gray-600">Implementing green building practices and sustainable architecture</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-slate-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Client & Stakeholder Management</h3>
                      <p className="text-gray-600">Managing client relationships and coordinating with construction teams</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-slate-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Architect Purchase Decisions</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Architects Database Records</h2>
              <p className="text-xl text-gray-600">Preview of available Architect contact information</p>
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
                  {sampleData.map((architect, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{architect.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{architect.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{architect.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{architect.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{architect.employees}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{architect.specialty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Connect with Architecture Professionals</h2>
            <p className="text-xl text-slate-100 mb-8">
              Access 118,800+ verified Architect email addresses from leading design firms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-600">
                Get Custom Architects List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}