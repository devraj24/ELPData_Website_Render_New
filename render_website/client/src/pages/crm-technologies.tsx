import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Building2, TrendingUp, Download, Filter, ArrowRight } from "lucide-react";

export default function CRMTechnologies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCRMs, setFilteredCRMs] = useState<(string | { name: string; companies: string; contacts: string })[]>([]);

  const crmTechnologies = [
    { name: "Salesforce.com", companies: "599,000", contacts: "988,000" },
    { name: "Microsoft Dynamics CRM", companies: "18,348", contacts: "1,340,768" },
    { name: "Oracle CRM", companies: "3,339", contacts: "541,926" },
    { name: "Oracle Fusion CRM", companies: "4,889", contacts: "17,283" },
    { name: "SugarCRM", companies: "7,794", contacts: "47,543" },
    { name: "Siebel CRM", companies: "113,152", contacts: "509,571" },
    { name: "Zoho CRM", companies: "11,560", contacts: "30,988" },
    { name: "SAP CRM", companies: "6,939", contacts: "1,641,926" },
    { name: "Infor CRM", companies: "3,891", contacts: "11,921" },
    { name: "Sage CRM", companies: "1,965", contacts: "35,821" },
    "NetSuite CRM Customers List",
    "Swiftpage Act CRM Customers List",
    "Pivotal CRM Customers List",
    "TargetX CRM Customers List",
    "Oracle RightNow CRM Customers List",
    "Salesforce Sales Cloud Customers List",
    "PeopleSoft CRM Customers List",
    "Infor Epiphany CRM Customers List",
    "SAP Sales Cloud Customers List",
    "Oracle Sales Cloud Customers List",
    "Amdocs CRM Customers List",
    "Pipedrive Customers List",
    "Limelight Customers List",
    "Nimble Customers List",
    "Gainsight Customers List",
    "Medallia Customers List",
    "Gigya Customers List",
    "Verint Customers List",
    "PandaDoc Customers List",
    "Insightly Customers List",
    "Convergys Customers List",
    "RedTail CRM Customers List",
    "Oracle CRM On Demand Customers List",
    "Freshsales Customers List",
    "Vtiger Customers List",
    "Infor SalesLogix Customers List",
    "Goldmine Customers List",
    "ONTRAPORT Customers List",
    "Veeva Systems Customers List",
    "WalkMe Customers List",
    "amoCRM Customers List",
    "Deltek Vision CRM Customers List",
    "CiviCRM Customers List",
    "Hatchbuck Customers List",
    "Technolutions Slate Customers List",
    "Aptean Pivotal CRM Customers List",
    "Microsoft Customer Care Framework Customers List",
    "Pega CRM Customers List",
    "Veeva CRM Customers List",
    "BuzzStream Customers List",
    "Junxure Customers List",
    "JDEdwards Sales Order Management Customers List",
    "KANA Software Customers List",
    "Cosential Customers List",
    "CapsuleCRM Customers List",
    "Maximizer Software Customers List",
    "SAP Interaction Center Customers List",
    "LexisNexis InterAction Customers List",
    "SalesforceIQ Customers List",
    "Microsoft Dynamics 365 for Sales Customers List",
    "Close CRM Customers List",
    "Cirrus Insight Customers List",
    "Talisma CRM Customers List",
    "OnContact CRM Customers List",
    "Siebel PRM Customers List",
    "GreenRope CRM Customers List",
    "Bullhorn CRM Customers List",
    "Odoo CRM Customers List",
    "Batchbook CRM Customers List",
    "Soffront Software CRM Customers List",
    "PeopleSoft Sales CRM Customers List",
    "Nutshell CRM Customers List",
    "LeadMaster CRM Customers List",
    "PipelineDeals CRM Customers List",
    "Ciboodle CRM Customers List",
    "Apptivo CRM Customers List",
    "Workbooks CRM Customers List",
    "Contactually CRM Customers List",
    "Tour de Force CRM Customers List",
    "Saratoga CRM Customers List",
    "Claritysoft CRM Customers List",
    "CRMnext CRM Customers List",
    "Aplicor CRM Customers List",
    "OroCRM Customers List",
    "Pipeliner CRM Customers List",
    "Gold-Vision CRM Customers List"
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredCRMs([]);
    } else {
      const filtered = crmTechnologies.filter(crm => {
        const searchTerm = typeof crm === 'string' ? crm : crm.name;
        return searchTerm.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredCRMs(filtered);
    }
  };

  const displayCRMs = searchQuery.trim() === "" ? crmTechnologies : filteredCRMs;

  const featuredCRMs = [
    { name: "Salesforce.com", companies: "599,000", market: "47%" },
    { name: "Microsoft Dynamics CRM", companies: "89,245", market: "15.2%" },
    { name: "Oracle CRM", companies: "67,832", market: "11.8%" },
    { name: "SAP CRM", companies: "54,921", market: "9.3%" },
    { name: "Zoho CRM", companies: "42,156", market: "7.1%" },
    { name: "HubSpot CRM", companies: "38,974", market: "6.6%" }
  ];

  return (
    <>
      <SEOHead 
        title="CRM Technologies Database - 80+ CRM Software Customer Lists | ELP Data"
        description="Access comprehensive CRM technology customer databases including Salesforce (1.29M+ contacts), Microsoft Dynamics (1.34M+ contacts), Oracle (541K+ contacts), SAP and 80+ more CRM solutions."
        keywords="CRM technologies, CRM customer lists, Salesforce customers, Microsoft Dynamics users, CRM software database"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Badge className="bg-blue-100 text-blue-800 mb-4">TargetTechnology</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                CRM Technologies Database
                <span className="block text-blue-600">80+ CRM Software Customer Lists</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Access comprehensive customer databases for all major CRM technologies. Connect with decision-makers 
                using Salesforce, Microsoft Dynamics, Oracle, SAP, and 80+ other CRM solutions worldwide.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <Input
                  type="text"
                  placeholder="Search CRM technologies..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500 shadow-lg"
                />
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">80+</div>
                <div className="text-gray-600">CRM Technologies</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">2.5M+</div>
                <div className="text-gray-600">Company Records</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-gray-600">Data Accuracy</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Filter className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-gray-600">Industries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured CRMs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Top CRM Technologies by Market Share</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredCRMs.map((crm, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{crm.name}</h3>
                        <div className="text-sm text-gray-600">Companies Using: <span className="font-semibold text-blue-600">{crm.companies}</span></div>
                        <div className="text-sm text-gray-600">Market Share: <span className="font-semibold text-green-600">{crm.market}</span></div>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        View List <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Complete CRM List */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete CRM Technologies Database</h2>
              <p className="text-xl text-gray-600">
                {searchQuery ? `Found ${displayCRMs.length} CRM technologies matching "${searchQuery}"` : `Access customer lists for ${crmTechnologies.length} CRM technologies`}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayCRMs.map((crm, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors font-medium">
                        {typeof crm === 'string' ? crm : crm.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {displayCRMs.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No CRM technologies found matching "{searchQuery}"</p>
                <Button 
                  variant="outline" 
                  onClick={() => handleSearch("")}
                  className="mt-4"
                >
                  Show All CRM Technologies
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our CRM Customer Database?</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Users className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle>Verified Decision Makers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Connect with CRM administrators, IT directors, and business decision-makers who evaluate and purchase CRM solutions.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Building2 className="w-12 h-12 text-green-600 mb-4" />
                  <CardTitle>Complete Technology Mapping</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Detailed technographic data showing current CRM implementations, versions, integrations, and adoption patterns.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
                  <CardTitle>Real-time Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Our database is continuously updated with new implementations, migrations, and technology stack changes.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Access CRM Technology Customer Data?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get instant access to verified customer lists for any CRM technology. Perfect for software vendors, consultants, and service providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample Data
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
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