import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Building2, Download } from "lucide-react";

export default function SAPCRMCustomersList() {
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

  return (
    <>
      <SEOHead 
        title="SAP CRM Customers List - 1.64M+ Verified Contacts | ELP Data"
        description="Access 1.64M+ verified SAP CRM users list. Connect with 6,939+ companies using SAP CRM worldwide. Download comprehensive customer database now."
        keywords="SAP CRM customers list, SAP CRM users database, SAP customer data, SAP CRM contacts"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Building2 className="w-8 h-8 text-green-600" />
                  <Badge className="bg-green-100 text-green-800">TargetTechnology</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  SAP CRM Customers List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  SAP CRM is an enterprise customer relationship management solution trusted by 6,939 companies worldwide 
                  for comprehensive customer engagement, sales automation, and service excellence.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Connect with enterprise decision-makers implementing SAP CRM solutions for integrated business processes and customer management.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">6,939</div>
                    <div className="text-gray-600">Companies Using SAP CRM</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1.64M+</div>
                    <div className="text-gray-600">Total Contacts Available</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-green-600 hover:bg-green-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get Customer List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">We'll Get Back To You Shortly!</h3>
                <h4 className="text-xl font-semibold text-green-600 mb-6">Get a Quote!</h4>
                
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
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">SAP CRM Market Presence</h2>
              <p className="text-xl text-gray-600">Enterprise CRM solutions for large organizations</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">6,939</div>
                <div className="text-gray-600">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1.64M+</div>
                <div className="text-gray-600">Total Contacts</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">&lt;5%</div>
                <div className="text-gray-600">Market Share</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">90+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Access SAP CRM Customer Database</h2>
            <p className="text-xl text-green-100 mb-8">
              Connect with 6,939+ companies and 1.64M+ verified contacts using SAP CRM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample Data
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
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