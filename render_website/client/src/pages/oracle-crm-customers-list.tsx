import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Users, Globe, TrendingUp, Download, Star, CheckCircle, ArrowRight, BarChart3, MapPin, Phone, Mail, User, Building } from "lucide-react";

export default function OracleCRMCustomersList() {
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

  const majorCustomers = [
    "Oracle", "Bank of America", "Toyota", "Vodafone", "Netflix", 
    "Zoom", "Tesla", "FedEx", "Airbnb", "PayPal", 
    "Uber", "LinkedIn", "Spotify", "Adobe", "Nike"
  ];

  const topCountries = [
    "USA", "United Kingdom", "Germany", "Canada", 
    "Australia", "France", "Netherlands", "Japan"
  ];

  const sampleData = [
    {
      company: "Oracle Corporation",
      website: "www.oracle.com",
      city: "Austin",
      state: "TX",
      country: "USA",
      employees: "143,000",
      revenue: "$50B",
      industry: "Technology"
    },
    {
      company: "Bank of America",
      website: "www.bankofamerica.com", 
      city: "Charlotte",
      state: "NC",
      country: "USA",
      employees: "213,000",
      revenue: "$89B",
      industry: "Financial Services"
    },
    {
      company: "Toyota Motor Corporation",
      website: "www.toyota.com",
      city: "Toyota",
      state: "Aichi",
      country: "Japan",
      employees: "366,000",
      revenue: "$280B",
      industry: "Automotive"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Oracle CRM Customers List - 541K+ Verified Contacts | ELP Data"
        description="Access 541K+ verified Oracle CRM users list. Connect with 3,339+ companies using Oracle CRM worldwide. Download comprehensive customer database now."
        keywords="Oracle CRM customers list, Oracle CRM users database, Oracle customer data, Oracle CRM contacts"
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
                  <Badge className="bg-red-100 text-red-800">TargetTechnology</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Oracle CRM Customers List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Oracle CRM is a comprehensive customer relationship management solution trusted by 3,339 companies worldwide 
                  for managing complex sales processes, customer interactions, and business relationships.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Connect with enterprise decision-makers implementing Oracle CRM solutions across various industries and global markets.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-red-600 mb-2">3,339</div>
                    <div className="text-gray-600">Companies Using Oracle CRM</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">541K+</div>
                    <div className="text-gray-600">Total Contacts Available</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-red-600 hover:bg-red-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get Customer List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">We'll Get Back To You Shortly!</h3>
                <h4 className="text-xl font-semibold text-red-600 mb-6">Get a Quote!</h4>
                
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
                      placeholder="Tell us about your requirements"
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

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Oracle CRM Market Presence</h2>
              <p className="text-xl text-gray-600">Enterprise-grade CRM solutions across global markets</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">3,339</div>
                <div className="text-gray-600">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">541K+</div>
                <div className="text-gray-600">Total Contacts</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">&lt;5%</div>
                <div className="text-gray-600">Market Share</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">85+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Major Customers */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Major Oracle CRM Customers</h2>
              <p className="text-xl text-gray-600">Leading organizations trust Oracle CRM</p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-6">
              {majorCustomers.map((customer, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900">{customer}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Geographic Coverage */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Geographic Coverage</h2>
              <p className="text-xl text-gray-600">Top countries with Oracle CRM implementations</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {topCountries.map((country, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="font-semibold text-gray-900">{country}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Data */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Database Records</h2>
              <p className="text-xl text-gray-600">Preview of Oracle CRM customer data</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employees</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Industry</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sampleData.map((company, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{company.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">{company.website}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.city}, {company.state}, {company.country}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.employees}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.revenue}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.industry}</td>
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
            <h2 className="text-3xl font-bold text-white mb-6">Access Oracle CRM Customer Database</h2>
            <p className="text-xl text-red-100 mb-8">
              Connect with 3,339+ companies and 541K+ verified contacts using Oracle CRM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample Data
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-red-600">
                Request Custom List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}