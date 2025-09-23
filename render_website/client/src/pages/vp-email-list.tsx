import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Building2, Download, Users, TrendingUp, Target, Crown } from "lucide-react";

export default function VPEmailList() {
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

  const vpSegments = [
    { name: "VP Sales", count: "89,450+", description: "Sales leadership driving revenue growth and market expansion strategies" },
    { name: "VP Marketing", count: "67,200+", description: "Marketing executives leading brand strategy and customer acquisition" },
    { name: "VP Operations", count: "78,800+", description: "Operations leaders managing business processes and operational excellence" },
    { name: "VP Engineering", count: "54,300+", description: "Technology leaders overseeing product development and engineering teams" },
    { name: "VP Finance", count: "45,650+", description: "Financial executives managing budgets, planning, and financial strategy" },
    { name: "VP Human Resources", count: "32,200+", description: "HR leaders driving talent strategy and organizational development" },
    { name: "VP Business Development", count: "28,150+", description: "Business development executives managing partnerships and growth initiatives" },
    { name: "VP Product", count: "23,300+", description: "Product leaders driving product strategy and market positioning" }
  ];

  const keyResponsibilities = [
    "Strategic Planning & Vision",
    "Department Leadership", 
    "Budget & P&L Management",
    "Executive Team Collaboration",
    "Performance & KPI Management",
    "Strategic Partnerships",
    "Market Analysis & Growth",
    "Team Development & Scaling"
  ];

  const purchaseDecisions = [
    "Enterprise Software and Platforms",
    "Department-level Technology Solutions", 
    "Professional Services and Consulting",
    "Strategic Partnerships and Vendors",
    "Training and Development Programs",
    "Analytics and Business Intelligence Tools",
    "Operational Tools and Equipment",
    "Industry-specific Solutions and Services"
  ];

  const sampleData = [
    {
      name: "Michael Rodriguez",
      title: "VP of Sales",
      company: "Enterprise Growth Solutions",
      location: "New York, NY",
      employees: "4,200+",
      department: "Sales"
    },
    {
      name: "Sarah Thompson",
      title: "VP of Marketing",
      company: "TechForward Systems",
      location: "San Francisco, CA",
      employees: "3,800+",
      department: "Marketing"
    },
    {
      name: "David Kim",
      title: "VP of Engineering",
      company: "Innovation Tech Corp",
      location: "Seattle, WA",
      employees: "5,500+", 
      department: "Engineering"
    }
  ];

  return (
    <>
      <SEOHead 
        title="VP Email List - 419,050+ Vice Presidents | ELP Data"
        description="Connect with 419,050+ verified VP email addresses. Target Vice Presidents across sales, marketing, operations, engineering, finance, HR, and business development."
        keywords="VP email list, Vice President database, VP sales, VP marketing, VP operations, senior executives"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-red-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Building2 className="w-8 h-8 text-red-600" />
                  <Badge className="bg-red-100 text-red-800">Vice President Level</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  VP Email List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with 419,050+ Vice Presidents leading strategic initiatives across sales, marketing, operations, 
                  engineering, finance, HR, and business development. Target the senior executives who drive departmental 
                  strategy and make high-level purchasing decisions for their organizations.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our VP database includes senior executives from Fortune 500 companies, high-growth enterprises, 
                  technology firms, healthcare organizations, financial services, and international corporations across all industries.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-red-600 mb-2">419,050+</div>
                    <div className="text-gray-600">VP Contacts</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">96%</div>
                    <div className="text-gray-600">Data Accuracy</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-red-600 hover:bg-red-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get VP Email List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Custom VP List</h3>
                <h4 className="text-xl font-semibold text-red-600 mb-6">Request Quote</h4>
                
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
                      placeholder="Specific requirements (VP functions, company size, industry)"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Get Custom Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* VP Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">VP Segments Available</h2>
              <p className="text-xl text-gray-600">Target Vice Presidents by functional area and business unit</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vpSegments.map((segment, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg text-gray-900">{segment.name}</CardTitle>
                    <div className="text-2xl font-bold text-red-600">{segment.count}</div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">VP Key Responsibilities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {keyResponsibilities.map((responsibility, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-900">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Leadership Focus</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Crown className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Strategic Leadership & Vision</h3>
                      <p className="text-gray-600">Setting departmental strategy, long-term planning, and organizational vision</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Performance & Growth Management</h3>
                      <p className="text-gray-600">Driving departmental performance, growth initiatives, and market expansion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Team Development & Scaling</h3>
                      <p className="text-gray-600">Building high-performing teams, talent development, and organizational scaling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Innovation & Transformation</h3>
                      <p className="text-gray-600">Driving innovation, digital transformation, and competitive advantage</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-red-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">VP Purchase Decisions</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample VP Database Records</h2>
              <p className="text-xl text-gray-600">Preview of available Vice President contact information</p>
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sampleData.map((vp, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{vp.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vp.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">{vp.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vp.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vp.employees}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vp.department}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Connect with Vice Presidents</h2>
            <p className="text-xl text-red-100 mb-8">
              Access 419,050+ verified VP email addresses from companies driving strategic excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-red-600">
                Get Custom VP List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}