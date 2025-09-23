import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Download, Building2, Users, Target, DollarSign } from "lucide-react";

export default function CFOEmailList() {
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

  const cfoSegments = [
    { name: "Public Company CFOs", count: "82,450+", description: "CFOs of publicly traded companies managing investor relations and SEC compliance" },
    { name: "Private Company CFOs", count: "89,200+", description: "Private company financial executives focused on growth and operational efficiency" },
    { name: "Healthcare CFOs", count: "34,100+", description: "Healthcare financial leaders managing complex regulatory and reimbursement challenges" },
    { name: "Technology CFOs", count: "20,450+", description: "Tech company CFOs handling rapid growth, funding, and international expansion" }
  ];

  const keyResponsibilities = [
    "Financial Planning & Analysis",
    "Budget Management & Forecasting", 
    "Investor Relations & Communications",
    "Risk Management & Compliance",
    "Mergers & Acquisitions",
    "Tax Strategy & Optimization",
    "Treasury & Cash Management",
    "Financial Systems & Technology"
  ];

  const purchaseDecisions = [
    "ERP and Financial Management Systems",
    "Business Intelligence and Analytics Platforms", 
    "Risk Management and Compliance Software",
    "Treasury Management Solutions",
    "Audit and Tax Preparation Services",
    "Financial Planning and Budgeting Tools"
  ];

  const sampleData = [
    {
      name: "Jennifer Williams",
      title: "Chief Financial Officer",
      company: "TechFlow Solutions Inc",
      location: "New York, NY",
      employees: "5,200+",
      industry: "Technology"
    },
    {
      name: "Robert Chen",
      title: "CFO & VP Finance",
      company: "Healthcare Innovations Corp",
      location: "Boston, MA",
      employees: "3,800+",
      industry: "Healthcare"
    },
    {
      name: "Sarah Martinez",
      title: "Chief Financial Officer",
      company: "Manufacturing Excellence Ltd",
      location: "Chicago, IL",
      employees: "7,500+", 
      industry: "Manufacturing"
    }
  ];

  return (
    <>
      <SEOHead 
        title="CFO Email List - 226,200+ Chief Financial Officers | ELP Data"
        description="Connect with 226,200+ verified CFO email addresses. Target Chief Financial Officers from public companies, private enterprises, and growing organizations worldwide."
        keywords="CFO email list, Chief Financial Officer database, financial executives, finance leaders, CFO contacts"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <Badge className="bg-green-100 text-green-800">C-Level Executives</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  CFO Email List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with 226,200+ Chief Financial Officers leading financial strategy across public companies, 
                  private enterprises, and high-growth organizations. Target the financial decision-makers driving 
                  technology adoption and strategic investments.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our CFO database includes financial executives from Fortune 500 companies, emerging growth companies, 
                  healthcare organizations, technology firms, and international corporations across all major industries.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">226,200+</div>
                    <div className="text-gray-600">CFO Contacts</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">96%</div>
                    <div className="text-gray-600">Data Accuracy</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-green-600 hover:bg-green-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get CFO Email List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Custom CFO List</h3>
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
                      placeholder="Specific requirements (company size, industry, location)"
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

        {/* CFO Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">CFO Segments Available</h2>
              <p className="text-xl text-gray-600">Target Chief Financial Officers by company type and industry focus</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cfoSegments.map((segment, index) => (
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">CFO Key Responsibilities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {keyResponsibilities.map((responsibility, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-900">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Leadership Focus</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Strategic Financial Planning</h3>
                      <p className="text-gray-600">Long-term financial strategy, capital allocation, and investment decisions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Performance Management</h3>
                      <p className="text-gray-600">Financial reporting, KPI tracking, and business performance analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Corporate Development</h3>
                      <p className="text-gray-600">M&A activities, fundraising, and strategic partnerships</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Team Leadership</h3>
                      <p className="text-gray-600">Finance team management, talent development, and organizational efficiency</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-green-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">CFO Purchase Decisions</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample CFO Database Records</h2>
              <p className="text-xl text-gray-600">Preview of available Chief Financial Officer contact information</p>
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Industry</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sampleData.map((cfo, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cfo.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cfo.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">{cfo.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cfo.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cfo.employees}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cfo.industry}</td>
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
            <h2 className="text-3xl font-bold text-white mb-6">Connect with Chief Financial Officers</h2>
            <p className="text-xl text-green-100 mb-8">
              Access 226,200+ verified CFO email addresses from companies of all sizes across every industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
                Get Custom CFO List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}