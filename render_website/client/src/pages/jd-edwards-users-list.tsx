import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function JDEdwardsUsersListPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "JD Edwards Enterprise Users Database",
    "description": "Access verified contacts of 720,000+ JD Edwards users across 47,982+ organizations implementing EnterpriseOne and World solutions.",
    "provider": {
      "@type": "Organization",
      "name": "ELP Data"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "B2B Sales Teams, Marketing Professionals, Enterprise Software Vendors"
    },
    "serviceType": "Technology User Database",
    "areaServed": "Global"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="JD Edwards Enterprise Users List | 720K+ Verified Contacts | ELP Data"
        description="Connect with 47,982+ organizations using JD Edwards ERP systems. Target JDE functional consultants, manufacturing managers, and financial controllers with 96% accurate data."
        keywords="JD Edwards users, JDE database, Oracle JD Edwards contacts, ERP users list, JD Edwards EnterpriseOne, manufacturing ERP, enterprise resource planning"
        canonical="https://elpdata.com/jd-edwards-users-list"
        structuredData={structuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-pink-500 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">JD Edwards Enterprise Users</h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Connect with 47,982+ organizations using JD Edwards ERP systems. Target JDE functional consultants, manufacturing managers, and financial controllers implementing EnterpriseOne and World solutions for complex business operations.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white mb-8">
              <div className="flex items-center gap-2">
                <i className="fas fa-users text-2xl text-yellow-400"></i>
                <span className="text-lg font-semibold">720K+ JDE Users</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-building text-2xl text-green-400"></i>
                <span className="text-lg font-semibold">47,982+ Companies</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-globe text-2xl text-blue-400"></i>
                <span className="text-lg font-semibold">65+ Countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary-teal mb-2">720K+</div>
                <div className="text-gray-600">JD Edwards Users</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary-teal mb-2">47,982+</div>
                <div className="text-gray-600">Companies</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary-teal mb-2">96%</div>
                <div className="text-gray-600">Data Accuracy</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary-teal mb-2">40+</div>
                <div className="text-gray-600">Countries</div>
              </CardContent>
            </Card>
          </div>

          {/* Target Industries */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary-navy">Target Industries</CardTitle>
                <CardDescription>Industries with highest JD Edwards adoption</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Manufacturing</span>
                    <Badge>35%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Distribution & Wholesale</span>
                    <Badge>25%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Construction</span>
                    <Badge>15%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Energy & Utilities</span>
                    <Badge>12%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Food & Beverage</span>
                    <Badge>8%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Other Industries</span>
                    <Badge>5%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary-navy">Decision Maker Roles</CardTitle>
                <CardDescription>Key contacts in JD Edwards-using organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>IT Directors</span>
                    <Badge variant="outline">95K+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>ERP Managers</span>
                    <Badge variant="outline">78K+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Finance Directors</span>
                    <Badge variant="outline">69K+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Operations Managers</span>
                    <Badge variant="outline">62K+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Supply Chain Directors</span>
                    <Badge variant="outline">55K+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>C-Suite Executives</span>
                    <Badge variant="outline">48K+</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* JD Edwards Modules */}
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary-navy">JD Edwards Modules & Solutions</CardTitle>
                <CardDescription>Specific modules and solutions being used</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary-navy mb-3">Core Modules</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• JD Edwards EnterpriseOne</li>
                      <li>• Financial Management</li>
                      <li>• Supply Chain Management</li>
                      <li>• Manufacturing</li>
                      <li>• Project Management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-navy mb-3">Industry Solutions</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Distribution & Logistics</li>
                      <li>• Construction & Engineering</li>
                      <li>• Energy & Chemicals</li>
                      <li>• Food & Beverage</li>
                      <li>• Public Sector</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-navy mb-3">Technical Details</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Version Information</li>
                      <li>• Implementation Timeline</li>
                      <li>• User Count & Licenses</li>
                      <li>• Integration Partners</li>
                      <li>• Upgrade Plans</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Points */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary-navy">Available Data Points</CardTitle>
                <CardDescription>Comprehensive contact and company information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary-navy mb-3">Contact Information</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Full Name & Title</li>
                      <li>• Direct Email Address</li>
                      <li>• Phone Numbers</li>
                      <li>• LinkedIn Profile</li>
                      <li>• Department & Level</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-navy mb-3">Company Details</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Company Name & Size</li>
                      <li>• Industry & SIC Code</li>
                      <li>• Annual Revenue</li>
                      <li>• Geographic Location</li>
                      <li>• Parent Company Info</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-navy mb-3">Technology Environment</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• JDE Version & Tools</li>
                      <li>• Database Platform</li>
                      <li>• Server Environment</li>
                      <li>• Third-party Integrations</li>
                      <li>• Support Partners</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Implementation Challenges */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary-navy">Implementation Challenges</CardTitle>
                <CardDescription>Common challenges organizations face when implementing Oracle JD Edwards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                      <span className="text-red-600 font-semibold text-sm">1.</span>
                      <span className="text-sm text-gray-700">Complex data migration from legacy systems</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                      <span className="text-red-600 font-semibold text-sm">2.</span>
                      <span className="text-sm text-gray-700">Integration with existing enterprise systems</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                      <span className="text-red-600 font-semibold text-sm">3.</span>
                      <span className="text-sm text-gray-700">Customization requirements for industry-specific processes</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                      <span className="text-red-600 font-semibold text-sm">4.</span>
                      <span className="text-sm text-gray-700">User adoption and change management</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                      <span className="text-red-600 font-semibold text-sm">5.</span>
                      <span className="text-sm text-gray-700">Version upgrades and maintenance</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                      <span className="text-red-600 font-semibold text-sm">6.</span>
                      <span className="text-sm text-gray-700">Performance optimization for large datasets</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                      <span className="text-red-600 font-semibold text-sm">7.</span>
                      <span className="text-sm text-gray-700">Compliance with industry regulations</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                      <span className="text-red-600 font-semibold text-sm">8.</span>
                      <span className="text-sm text-gray-700">Training staff on JD Edwards functionality</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                      <span className="text-red-600 font-semibold text-sm">9.</span>
                      <span className="text-sm text-gray-700">Managing multiple JDE environments</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                      <span className="text-red-600 font-semibold text-sm">10.</span>
                      <span className="text-sm text-gray-700">Third-party system integrations</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Categories */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-primary-navy mb-6">JD Edwards Solution Categories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
                  <CardTitle className="text-blue-700 flex items-center gap-2 text-lg">
                    <i className="fas fa-dollar-sign text-blue-600"></i>
                    Financial Management
                  </CardTitle>
                  <CardDescription className="text-blue-600">
                    Comprehensive financial planning, accounting, and reporting solutions for JD Edwards implementations
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">General Ledger</span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Accounts Payable</span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Accounts Receivable</span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Fixed Assets</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Primary Industries</h4>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-600">• Manufacturing</div>
                        <div className="text-sm text-gray-600">• Distribution</div>
                        <div className="text-sm text-gray-600">• Construction</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 border-b border-green-200">
                  <CardTitle className="text-green-700 flex items-center gap-2 text-lg">
                    <i className="fas fa-truck text-green-600"></i>
                    Supply Chain Management
                  </CardTitle>
                  <CardDescription className="text-green-600">
                    End-to-end supply chain visibility and optimization for JD Edwards users
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Procurement</span>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Inventory Management</span>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Demand Planning</span>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Supplier Management</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Primary Industries</h4>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-600">• Manufacturing</div>
                        <div className="text-sm text-gray-600">• Distribution</div>
                        <div className="text-sm text-gray-600">• Retail</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200">
                  <CardTitle className="text-purple-700 flex items-center gap-2 text-lg">
                    <i className="fas fa-cogs text-purple-600"></i>
                    Manufacturing
                  </CardTitle>
                  <CardDescription className="text-purple-600">
                    Advanced manufacturing capabilities for discrete and process manufacturing in JD Edwards
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Shop Floor Control</span>
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Product Data Management</span>
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Quality Management</span>
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Cost Management</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Primary Industries</h4>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-600">• Manufacturing</div>
                        <div className="text-sm text-gray-600">• Automotive</div>
                        <div className="text-sm text-gray-600">• Aerospace</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
                  <CardTitle className="text-orange-700 flex items-center gap-2 text-lg">
                    <i className="fas fa-calendar text-orange-600"></i>
                    Project Management
                  </CardTitle>
                  <CardDescription className="text-orange-600">
                    Comprehensive project management and accounting for project-based organizations
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Project Accounting</span>
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Resource Management</span>
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Contract Management</span>
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Billing</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Primary Industries</h4>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-600">• Construction</div>
                        <div className="text-sm text-gray-600">• Engineering</div>
                        <div className="text-sm text-gray-600">• Professional Services</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Connect with JD Edwards Decision Makers
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Access verified contacts of JD Edwards users and expand your enterprise software solutions reach.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact-us">
              <Button size="lg" className="bg-primary-teal hover:bg-teal-600 text-white px-8 py-3">
                Get Oracle JD Edwards List
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-navy px-8 py-3">
                Request Sample
              </Button>
            </Link>
          </div>
          
          {/* Data Coverage Section */}
          <div className="mt-12 p-6 bg-white/10 rounded-lg border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Data Coverage & Accuracy</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Our comprehensive database provides detailed insights for Oracle JD Edwards with 96% data accuracy across 720,000+ users and 47,982+ companies. 
              Data coverage includes target industries, decision maker roles, modules & solutions, and implementation challenges. Contact our data specialists for specific requirements and custom research needs.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}