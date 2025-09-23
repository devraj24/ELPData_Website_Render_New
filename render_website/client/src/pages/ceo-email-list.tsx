import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Users, Download, Building2, TrendingUp, Globe, Target } from "lucide-react";

export default function CEOEmailList() {
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

  const keySegments = [
    { name: "Fortune 500 CEOs", count: "98,450+", description: "Chief executives leading large corporations" },
    { name: "Startup Founders", count: "127,200+", description: "Entrepreneurial leaders building new companies" },
    { name: "Non-Profit Leaders", count: "89,650+", description: "Executive directors of charitable organizations" },
    { name: "International CEOs", count: "39,950+", description: "Global executives from international markets" }
  ];

  const industryBreakdown = [
    "Technology", "Healthcare", "Financial Services", "Manufacturing", 
    "Retail", "Energy", "Real Estate", "Education", "Transportation", "Media"
  ];

  const sampleData = [
    {
      name: "John Smith",
      title: "Chief Executive Officer",
      company: "TechCorp Solutions",
      industry: "Technology",
      location: "San Francisco, CA",
      employees: "5,000+",
      revenue: "$500M+"
    },
    {
      name: "Sarah Johnson",
      title: "CEO & Founder",
      company: "HealthTech Innovations",
      industry: "Healthcare",
      location: "Boston, MA",
      employees: "1,200+",
      revenue: "$150M+"
    },
    {
      name: "Michael Chen",
      title: "Chief Executive Officer",
      company: "Global Manufacturing Inc",
      industry: "Manufacturing",
      location: "Chicago, IL",
      employees: "8,500+",
      revenue: "$2.1B+"
    }
  ];

  return (
    <>
      <SEOHead 
        title="CEO Email List - 355K+ Chief Executive Officer Contacts | ELP Data"
        description="Connect with 355,250+ verified CEO email addresses. Target Chief Executive Officers across Fortune 500, startups, and international markets. Download comprehensive database."
        keywords="CEO email list, Chief Executive Officer contacts, CEO database, executive mailing list, Fortune 500 CEOs"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                  <Badge className="bg-blue-100 text-blue-800">Executive Contacts</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  CEO Email List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with 355,250+ Chief Executive Officers leading organizations across all industries and company sizes. 
                  Target decision-makers with ultimate authority over strategic initiatives, partnerships, and major business decisions.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our CEO database includes Fortune 500 leaders, startup founders, non-profit executives, and international CEOs 
                  across diverse industries and markets.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">355,250+</div>
                    <div className="text-gray-600">CEO Contacts</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                    <div className="text-gray-600">Data Accuracy</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get CEO Email List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Custom CEO List</h3>
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
                      placeholder="Specific requirements (industry, company size, location)"
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

        {/* Key Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">CEO Segments Available</h2>
              <p className="text-xl text-gray-600">Target specific CEO categories based on your business needs</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keySegments.map((segment, index) => (
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

        {/* Role Description */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">CEO Role & Responsibilities</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Strategic Leadership</h3>
                      <p className="text-gray-600">Overall company strategy, vision, and long-term planning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Operations</h3>
                      <p className="text-gray-600">Overseeing all business functions and organizational performance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Stakeholder Relations</h3>
                      <p className="text-gray-600">Managing relationships with investors, board members, and partners</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Growth & Innovation</h3>
                      <p className="text-gray-600">Driving business growth, innovation, and market expansion</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Coverage</h2>
                <div className="grid grid-cols-2 gap-3">
                  {industryBreakdown.map((industry, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-900">{industry}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Decision-Making Authority</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Ultimate approval for major investments and partnerships</li>
                    <li>• Strategic technology and software implementations</li>
                    <li>• Merger and acquisition decisions</li>
                    <li>• Enterprise-level service agreements</li>
                    <li>• Organizational restructuring and hiring</li>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample CEO Database Records</h2>
              <p className="text-xl text-gray-600">Preview of available CEO contact information</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Industry</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employees</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sampleData.map((ceo, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ceo.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ceo.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{ceo.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ceo.industry}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ceo.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ceo.employees}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ceo.revenue}</td>
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
            <h2 className="text-3xl font-bold text-white mb-6">Connect with Top CEOs</h2>
            <p className="text-xl text-blue-100 mb-8">
              Access 355,250+ verified CEO email addresses across all industries and company sizes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Get Custom CEO List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}