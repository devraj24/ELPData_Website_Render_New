import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Building2, TrendingUp, Download, Filter, ArrowRight } from "lucide-react";

export default function ERPTechnologies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredERPs, setFilteredERPs] = useState<string[]>([]);

  const erpTechnologies = [
    "SAP ERP Customers List",
    "JD Edwards Customers List",
    "Microsoft Dynamics AX Customers List",
    "Microsoft Dynamics NAV Customers List",
    "Microsoft Dynamics GP Customers List",
    "Oracle ERP Customers List",
    "Oracle Financials Cloud Customers List",
    "SAP Business One Customers List",
    "NetSuite ERP Customers List",
    "JD Edwards EnterpriseOne Customers List",
    "JD Edwards World Customers List",
    "Infor LN ERP Customers List",
    "Epicor ERP Customers List",
    "PeopleSoft ERP Customers List",
    "CinCom ERP Customers List",
    "Lawson ERP Customers List",
    "Sage 200 ERP Customers List",
    "SAP ECC Customers List",
    "Microsoft Dynamics SL Customers List",
    "Infor M3 ERP Customers List",
    "Infor XA ERP Customers List",
    "Infor VISUAL ERP Customers List",
    "Infor LX ERP Customers List",
    "Microsoft Dynamics C5 Customers List",
    "SAP Business ByDesign Customers List",
    "SAP APO Customers List",
    "Epicor Vantage ERP Customers List",
    "SAP S/4 HANA Customers List",
    "SAP R/3 Customers List",
    "Agresso Customers List",
    "SAP Strategic Enterprise Management Customers List",
    "Cognos TM1 Customers List",
    "Syspro ERP Customers List",
    "Sage X3 Customers List",
    "Deltek Costpoint Customers List",
    "SAP ERP Financials Customers List",
    "Sage 100 Customers List",
    "Sage 300 Customers List",
    "SAP ERP Human Capital Management Customers List",
    "QAD ERP Customers List",
    "SAP Plant Maintenance Customers List",
    "SAP R/2 Customers List",
    "Unit4 Business World Customers List",
    "Exact Macola Customers List",
    "Acumatica Customers List",
    "Abas ERP Customers List",
    "Sage 500 Customers List",
    "Exact Customers List",
    "Thryv Customers List",
    "Epicor Prophet 21 Customers List",
    "SAP Gateway Customers List",
    "SAP for Utilities Customers List",
    "IFS ERP Customers List",
    "Infor CloudSuite Industrial Customers List",
    "SAP Product Development and Manufacturing Customers List",
    "Global Shop Customers List",
    "Deltek Maconomy Customers List",
    "FinancialForce Customers List",
    "Clearview Software Customers List",
    "CGI Advantage Customers List",
    "Epicor Eclipse Customers List",
    "SAP Apparel & Footwear (AFS) Customers List",
    "BatchMaster Customers List",
    "Priority ERP Customers List",
    "Plex ERP Customers List",
    "Consona ERP Customers List",
    "mySAP ERP Customers List"
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredERPs([]);
    } else {
      const filtered = erpTechnologies.filter(erp =>
        erp.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredERPs(filtered);
    }
  };

  const displayERPs = searchQuery.trim() === "" ? erpTechnologies : filteredERPs;

  const featuredERPs = [
    { name: "SAP ERP", companies: "86,526", market: "28.4%" },
    { name: "Microsoft Dynamics", companies: "45,892", market: "15.1%" },
    { name: "Oracle ERP", companies: "32,156", market: "10.6%" },
    { name: "JD Edwards", companies: "28,743", market: "9.4%" },
    { name: "NetSuite ERP", companies: "25,341", market: "8.3%" },
    { name: "Epicor ERP", companies: "18,967", market: "6.2%" }
  ];

  return (
    <>
      <SEOHead 
        title="ERP Technologies Database - 65+ ERP Software Customer Lists | ELP Data"
        description="Access comprehensive ERP technology customer databases including SAP, Microsoft Dynamics, Oracle, JD Edwards and 65+ more ERP solutions. Verified business contacts."
        keywords="ERP technologies, ERP customer lists, SAP customers, Microsoft Dynamics users, ERP software database"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Badge className="bg-green-100 text-green-800 mb-4">TargetTechnology</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                ERP Technologies Database
                <span className="block text-green-600">65+ ERP Software Customer Lists</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Connect with enterprises using SAP, Microsoft Dynamics, Oracle ERP, JD Edwards, and 65+ other 
                enterprise resource planning solutions. Access decision-makers and IT professionals worldwide.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <Input
                  type="text"
                  placeholder="Search ERP technologies..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-green-500 shadow-lg"
                />
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Building2 className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">65+</div>
                <div className="text-gray-600">ERP Technologies</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">1.8M+</div>
                <div className="text-gray-600">Company Records</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">97%</div>
                <div className="text-gray-600">Data Accuracy</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Filter className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">30+</div>
                <div className="text-gray-600">Industries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured ERPs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Top ERP Technologies by Market Share</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredERPs.map((erp, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{erp.name}</h3>
                        <div className="text-sm text-gray-600">Companies Using: <span className="font-semibold text-green-600">{erp.companies}</span></div>
                        <div className="text-sm text-gray-600">Market Share: <span className="font-semibold text-blue-600">{erp.market}</span></div>
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700">
                        View List <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Complete ERP List */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete ERP Technologies Database</h2>
              <p className="text-xl text-gray-600">
                {searchQuery ? `Found ${displayERPs.length} ERP technologies matching "${searchQuery}"` : `Access customer lists for ${erpTechnologies.length} ERP technologies`}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayERPs.map((erp, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 group-hover:text-green-600 transition-colors font-medium">
                        {erp}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {displayERPs.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No ERP technologies found matching "{searchQuery}"</p>
                <Button 
                  variant="outline" 
                  onClick={() => handleSearch("")}
                  className="mt-4"
                >
                  Show All ERP Technologies
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our ERP Customer Database?</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Users className="w-12 h-12 text-green-600 mb-4" />
                  <CardTitle>Enterprise Decision Makers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Connect with CIOs, IT directors, and business leaders who evaluate, implement, and manage ERP systems across organizations.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Building2 className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle>Implementation Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Detailed data on ERP implementations, versions, modules, customizations, and integration patterns across industries.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
                  <CardTitle>Migration Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Identify organizations planning ERP upgrades, migrations, or expansions based on current technology stack analysis.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Access ERP Technology Customer Data?</h2>
            <p className="text-xl text-green-100 mb-8">
              Get instant access to verified customer lists for any ERP technology. Perfect for software vendors, consultants, and service providers.
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