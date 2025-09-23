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

export default function SalesforceCRMCustomersList() {
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
    "Amazon", "BMW", "Spotify", "Canon", "American Express", 
    "Motorola", "3M", "Walmart", "Toyota", "Macy's", 
    "US Bank", "T Bank", "Aldo", "The New York Post", "L'Oreal"
  ];

  const topCountries = [
    "USA", "United Kingdom", "Canada", "Netherlands", 
    "Australia", "Germany", "France"
  ];

  const sampleData = [
    {
      company: "ABD Insurance & Financial Services",
      website: "www.theabdteam.com",
      city: "San Mateo",
      state: "CA",
      country: "United States",
      employees: "210",
      revenue: "7.5 M",
      industry: "Insurance Agents, Brokers and Service"
    },
    {
      company: "Cobalt Truck Equipment",
      website: "www.cobalttruck.com",
      city: "Nampa",
      state: "ID",
      country: "United States",
      employees: "200",
      revenue: "20 M",
      industry: "Truck and Bus Bodies"
    },
    {
      company: "Cupertino Electric Inc.",
      website: "www.cei.com",
      city: "San Jose",
      state: "CA",
      country: "United States",
      employees: "1024",
      revenue: "298 M",
      industry: "General Contractors-Nonresidential Buildings"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Salesforce.com, Inc. Users List - 988K+ Verified Contacts | ELP Data"
        description="Access 988K+ verified Salesforce.com users list. Connect with 599K+ companies using Salesforce's 69+ products including Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, and more. Download comprehensive customer database now."
        keywords="Salesforce.com users list, Salesforce customers database, Sales Cloud contacts, Marketing Cloud users, Service Cloud data"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Building2 className="w-8 h-8 text-blue-600" />
                  <Badge className="bg-blue-100 text-blue-800">TargetTechnology</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Salesforce.com Users List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Salesforce.com, Inc. is the world's leading cloud-based customer relationship management platform. With more than 599,000 companies worldwide using 69+ Salesforce products and technologies, Salesforce is driving innovation across sales, service, marketing, commerce, and analytics solutions.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  If you own a product/service that can improve the lives of Salesforce.com users, then the Salesforce.com users list is meant for you!
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">599,000</div>
                    <div className="text-gray-600">Companies Using Salesforce.com</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">988K+</div>
                    <div className="text-gray-600">Total Contacts Available</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get Customer List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">We'll Get Back To You Shortly!</h3>
                <h4 className="text-xl font-semibold text-blue-600 mb-6">Get a Quote!</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name*"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Business Email*"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="company"
                      placeholder="Company Name*"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      placeholder="Phone*"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="requirements"
                      placeholder="Your Requirement*"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    CLICK HERE TO SUBMIT
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* About Salesforce Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Salesforce.com Users List</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-600 mb-6">
                  Salesforce – is a cloud computing company headquartered in San Francisco, California. It is one of the world's #1 CRM platform 
                  that can be managed entirely real-time over the internet. Salesforce is not just a customer relationship management (CRM) product, 
                  but also a cloud computing and social enterprise software-as-a-service (SaaS) provider.
                </p>
                <p className="text-gray-600 mb-6">
                  Salesforce CRM is mainly into enhancing all aspects of customer interface on a single platform from sales, marketing to customer service. 
                  Salesforce CRM is one place to store all the information while still keeping all the conversations personal, up-to-date, and relevant.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Cloud-based platform</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">No maintenance required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">User-friendly interface</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">22.9% market share</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Share Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">CRM Market Share</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                    Market Leaders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Salesforce</span>
                      <span className="font-bold text-blue-600">19.6%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">SAP</span>
                      <span className="font-bold text-gray-600">8.2%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Oracle</span>
                      <span className="font-bold text-gray-600">5.2%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Adobe</span>
                      <span className="font-bold text-gray-600">5.2%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Microsoft</span>
                      <span className="font-bold text-gray-600">2.0%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-green-600" />
                    Major Customers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {majorCustomers.map((customer, index) => (
                      <div key={index} className="p-3 bg-green-50 rounded-lg text-center">
                        <span className="font-medium text-gray-700">{customer}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Data Segments Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">High-Quality Salesforce Customers List for Effective Brand Marketing</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-600 mb-6">
                  A Salesforce customers list offered by ELP Data helps you connect with the leading companies using salesforce efficiently. 
                  The contact lists will comprise authentic business contact data for creating marketing campaigns and communicating with these Salesforce clients.
                </p>
                <p className="text-gray-600 mb-6">
                  Our Salesforce clients list offers validated contacts of small & medium enterprises and large corporations, including fortune 500 companies.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Available Data Segments:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Name", "Email address", "Phone Number", "Job Title", 
                    "Office Address", "Industry Name", "Company Type", "Company Assets",
                    "Firmographics", "Technographics", "Demographics", "Revenue",
                    "NAICS Code", "SIC Code", "Zip Code", "And More!"
                  ].map((segment, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700 text-sm">{segment}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle>Records Available by Segment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <span className="font-medium">Total Contacts</span>
                      <span className="font-bold text-blue-600">443,696</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <span className="font-medium">Total Postal Universe</span>
                      <span className="font-bold text-green-600">443,694</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                      <span className="font-medium">Total Emails Available</span>
                      <span className="font-bold text-purple-600">288,402</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                      <span className="font-medium">Total Phone Numbers</span>
                      <span className="font-bold text-orange-600">266,216</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Geographic Distribution */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Salesforce Companies List Based On Geography</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-600 mb-6">
                  The Salesforce CRM customers list goes beyond the basic geography, our data experts allow you to narrow down your prospects 
                  based on the state, city, and even region they are in, allowing you to curate hyper-personalized marketing for your targets.
                </p>
                <p className="text-gray-600 mb-6">
                  Reports suggest that 59% of the companies that use Salesforce are in the USA and most of the firms are located in New York, Texas, and California.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Leading Countries Using Salesforce CRM:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {topCountries.map((country, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg shadow">
                      <Globe className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-gray-700">{country}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="country" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="country">Country</TabsTrigger>
                      <TabsTrigger value="region">Region</TabsTrigger>
                      <TabsTrigger value="industry">Industry</TabsTrigger>
                    </TabsList>
                    <TabsContent value="country" className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">USA</span>
                        <span className="font-bold text-blue-600">92,516</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Canada</span>
                        <span className="font-bold text-gray-600">3,246</span>
                      </div>
                    </TabsContent>
                    <TabsContent value="region" className="space-y-4">
                      <div className="text-center p-4">
                        <p className="text-gray-600">Regional breakdown available in full dataset</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="industry" className="space-y-4">
                      <div className="text-center p-4">
                        <p className="text-gray-600">Industry segmentation available in full dataset</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sample Data Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Companies that use Salesforce CRM (Sample Data)</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Company Name</th>
                    <th className="px-4 py-3 text-left">Website</th>
                    <th className="px-4 py-3 text-left">City</th>
                    <th className="px-4 py-3 text-left">State</th>
                    <th className="px-4 py-3 text-left">Employees</th>
                    <th className="px-4 py-3 text-left">Revenue</th>
                    <th className="px-4 py-3 text-left">Industry</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleData.map((company, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{company.company}</td>
                      <td className="px-4 py-3 text-blue-600">{company.website}</td>
                      <td className="px-4 py-3">{company.city}</td>
                      <td className="px-4 py-3">{company.state}</td>
                      <td className="px-4 py-3">{company.employees}</td>
                      <td className="px-4 py-3">{company.revenue}</td>
                      <td className="px-4 py-3 text-sm">{company.industry}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="w-5 h-5 mr-2" />
                SUBMIT YOUR REQUIREMENT
              </Button>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Major Industries that use Salesforce</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">6%</div>
                <div className="text-gray-700">Professional Services</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">8%</div>
                <div className="text-gray-700">Retail</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">8%</div>
                <div className="text-gray-700">Banking & Financial</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">7%</div>
                <div className="text-gray-700">Hospitality & Leisure</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Other industries include insurance, construction, real estate, communications, life sciences, healthcare, and technology services.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Connect with Salesforce CRM Users?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get instant access to our comprehensive Salesforce customer database and start reaching decision-makers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Get Full Database
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}