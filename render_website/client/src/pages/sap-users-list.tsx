import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function SAPUsersListPage() {
  const sapProducts = [
    { name: "SAP S/4HANA", companies: "245,670" },
    { name: "SAP ERP Central Component", companies: "189,234" },
    { name: "SAP SuccessFactors", companies: "156,890" },
    { name: "SAP BusinessObjects", companies: "142,567" },
    { name: "SAP Concur", companies: "134,123" },
    { name: "SAP Ariba", companies: "128,456" },
    { name: "SAP HANA Database", companies: "119,789" },
    { name: "SAP Analytics Cloud", companies: "98,012" },
    { name: "SAP Fieldglass", companies: "87,345" },
    { name: "SAP Hybris Commerce", companies: "76,678" },
    { name: "SAP Cloud Platform", companies: "65,901" },
    { name: "SAP BW/4HANA", companies: "58,234" },
    { name: "SAP Basis", companies: "52,567" },
    { name: "SAP Fiori", companies: "47,890" },
    { name: "SAP Leonardo", companies: "43,123" },
    { name: "SAP MM (Materials Management)", companies: "39,456" },
    { name: "SAP SD (Sales & Distribution)", companies: "36,789" },
    { name: "SAP FI (Financial Accounting)", companies: "34,012" },
    { name: "SAP CO (Controlling)", companies: "31,345" },
    { name: "SAP PP (Production Planning)", companies: "28,678" },
    { name: "SAP HR (Human Resources)", companies: "27,345" },
    { name: "SAP QM (Quality Management)", companies: "26,012" },
    { name: "SAP PS (Project System)", companies: "24,679" },
    { name: "SAP PM (Plant Maintenance)", companies: "23,346" },
    { name: "SAP WM (Warehouse Management)", companies: "22,013" },
    { name: "SAP IS-U (Utilities)", companies: "20,680" },
    { name: "SAP IS-OIL", companies: "19,347" },
    { name: "SAP IS-RETAIL", companies: "18,014" },
    { name: "SAP IS-BANKING", companies: "16,681" },
    { name: "SAP IS-INSURANCE", companies: "15,348" },
    { name: "SAP IS-HEALTHCARE", companies: "14,015" },
    { name: "SAP IS-MEDIA", companies: "12,682" },
    { name: "SAP IS-AUTOMOTIVE", companies: "11,349" },
    { name: "SAP APO (Advanced Planner Optimizer)", companies: "10,016" },
    { name: "SAP CRM", companies: "18,683" },
    { name: "SAP SRM (Supplier Relationship Management)", companies: "17,350" },
    { name: "SAP SCM (Supply Chain Management)", companies: "16,017" },
    { name: "SAP PLM (Product Lifecycle Management)", companies: "14,684" },
    { name: "SAP GRC (Governance Risk Compliance)", companies: "13,351" },
    { name: "SAP MDM (Master Data Management)", companies: "12,018" },
    { name: "SAP PI/PO (Process Integration)", companies: "10,685" },
    { name: "SAP XI (Exchange Infrastructure)", companies: "9,352" },
    { name: "SAP NetWeaver", companies: "18,019" },
    { name: "SAP NetWeaver Portal", companies: "16,686" },
    { name: "SAP NetWeaver Application Server", companies: "15,353" },
    { name: "SAP NetWeaver Business Intelligence", companies: "14,020" },
    { name: "SAP NetWeaver Master Data Management", companies: "12,687" },
    { name: "SAP NetWeaver Mobile", companies: "11,354" },
    { name: "SAP NetWeaver Composition Environment", companies: "10,021" },
    { name: "SAP BusinessObjects Business Intelligence", companies: "18,688" },
    { name: "SAP BusinessObjects Web Intelligence", companies: "17,355" },
    { name: "SAP BusinessObjects Crystal Reports", companies: "16,022" },
    { name: "SAP BusinessObjects Dashboards", companies: "14,689" },
    { name: "SAP BusinessObjects Universe Designer", companies: "13,356" },
    { name: "SAP BusinessObjects Information Designer", companies: "12,023" },
    { name: "SAP BusinessObjects Data Services", companies: "10,690" },
    { name: "SAP BusinessObjects Enterprise", companies: "9,357" },
    { name: "SAP HANA Studio", companies: "8,024" },
    { name: "SAP HANA Cloud Platform", companies: "6,691" },
    { name: "SAP HANA Live", companies: "5,358" },
    { name: "SAP HANA Enterprise Cloud", companies: "4,025" },
    { name: "SAP HANA One", companies: "2,692" },
    { name: "SAP HANA Vora", companies: "1,359" },
    { name: "SAP S/4HANA Cloud", companies: "15,026" },
    { name: "SAP S/4HANA Finance", companies: "13,693" },
    { name: "SAP S/4HANA Sales", companies: "12,360" },
    { name: "SAP S/4HANA Procurement", companies: "11,027" },
    { name: "SAP S/4HANA Manufacturing", companies: "9,694" },
    { name: "SAP S/4HANA Asset Management", companies: "8,361" },
    { name: "SAP S/4HANA Service", companies: "7,028" },
    { name: "SAP S/4HANA Sourcing and Procurement", companies: "5,695" },
    { name: "SAP S/4HANA Marketing", companies: "4,362" },
    { name: "SAP S/4HANA Commerce", companies: "3,029" },
    { name: "SAP SuccessFactors Employee Central", companies: "14,696" },
    { name: "SAP SuccessFactors Performance Management", companies: "13,363" },
    { name: "SAP SuccessFactors Learning", companies: "12,030" },
    { name: "SAP SuccessFactors Recruiting", companies: "10,697" },
    { name: "SAP SuccessFactors Compensation", companies: "9,364" },
    { name: "SAP SuccessFactors Succession Planning", companies: "8,031" },
    { name: "SAP SuccessFactors Onboarding", companies: "6,698" },
    { name: "SAP SuccessFactors Analytics", companies: "5,365" },
    { name: "SAP SuccessFactors Time Tracking", companies: "4,032" },
    { name: "SAP SuccessFactors Work Zone", companies: "2,699" },
    { name: "SAP Concur Expense", companies: "12,366" },
    { name: "SAP Concur Travel", companies: "11,033" },
    { name: "SAP Concur Invoice", companies: "9,700" },
    { name: "SAP Concur Request", companies: "8,367" },
    { name: "SAP Concur TripLink", companies: "7,034" },
    { name: "SAP Concur Locate", companies: "5,701" },
    { name: "SAP Concur Drive", companies: "4,368" },
    { name: "SAP Concur AppCenter", companies: "3,035" },
    { name: "SAP Ariba Network", companies: "11,702" },
    { name: "SAP Ariba Sourcing", companies: "10,369" },
    { name: "SAP Ariba Contracts", companies: "9,036" },
    { name: "SAP Ariba Supplier Information Management", companies: "7,703" },
    { name: "SAP Ariba Supplier Lifecycle Management", companies: "6,370" },
    { name: "SAP Ariba Category Management", companies: "5,037" },
    { name: "SAP Ariba Procurement", companies: "3,704" },
    { name: "SAP Ariba Invoice Management", companies: "2,371" },
    { name: "SAP Ariba Discovery", companies: "1,038" },
    { name: "SAP Fieldglass Vendor Management", companies: "8,705" },
    { name: "SAP Fieldglass Statement of Work", companies: "7,372" },
    { name: "SAP Fieldglass Services Procurement", companies: "6,039" },
    { name: "SAP Fieldglass Contingent Workforce", companies: "4,706" },
    { name: "SAP Fieldglass Analytics", companies: "3,373" },
    { name: "SAP Commerce Cloud", companies: "10,040" },
    { name: "SAP Commerce", companies: "8,707" },
    { name: "SAP Hybris as a Service", companies: "7,374" },
    { name: "SAP Hybris Marketing", companies: "6,041" },
    { name: "SAP Hybris Service Cloud", companies: "4,708" },
    { name: "SAP Hybris Billing", companies: "3,375" },
    { name: "SAP Hybris Revenue Cloud", companies: "2,042" },
    { name: "SAP Cloud Platform Integration", companies: "9,709" },
    { name: "SAP Cloud Platform Mobile Services", companies: "8,376" },
    { name: "SAP Cloud Platform Portal", companies: "7,043" },
    { name: "SAP Cloud Platform Identity Authentication", companies: "5,710" },
    { name: "SAP Cloud Platform Big Data Services", companies: "4,377" },
    { name: "SAP Cloud Platform Connectivity", companies: "3,044" },
    { name: "SAP Cloud Platform Extension Factory", companies: "1,711" },
    { name: "SAP BW (Business Warehouse)", companies: "16,378" },
    { name: "SAP BW on HANA", companies: "15,045" },
    { name: "SAP BPC (Business Planning Consolidation)", companies: "13,712" },
    { name: "SAP IPM (Integrated Planning)", companies: "12,379" },
    { name: "SAP Analysis for Office", companies: "11,046" },
    { name: "SAP Lumira", companies: "9,713" },
    { name: "SAP BusinessObjects Analysis", companies: "8,380" },
    { name: "SAP BusinessObjects Explorer", companies: "7,047" },
    { name: "SAP BusinessObjects Live Office", companies: "5,714" },
    { name: "SAP Crystal Reports Server", companies: "4,381" },
    { name: "SAP Crystal Reports for Enterprise", companies: "3,048" },
    { name: "SAP Predictive Analytics", companies: "1,715" },
    { name: "SAP HANA Smart Data Access", companies: "8,716" },
    { name: "SAP HANA Smart Data Streaming", companies: "7,383" },
    { name: "SAP HANA Dynamic Tiering", companies: "6,050" },
    { name: "SAP HANA Data Warehousing Foundation", companies: "4,717" },
    { name: "SAP HANA Spatial Services", companies: "3,384" },
    { name: "SAP HANA Text Mining", companies: "2,051" },
    { name: "SAP HANA Predictive Analytics Library", companies: "718" },
    { name: "SAP HANA Graph", companies: "385" },
    { name: "SAP HANA Machine Learning", companies: "52" },
    { name: "SAP Asset Intelligence Network", companies: "6,719" },
    { name: "SAP Digital Manufacturing", companies: "5,386" },
    { name: "SAP Manufacturing Integration", companies: "4,053" },
    { name: "SAP Manufacturing Execution", companies: "2,720" },
    { name: "SAP Production Planning", companies: "1,387" },
    { name: "SAP Quality Management", companies: "54" },
    { name: "SAP Solution Manager", companies: "12,721" },
    { name: "SAP Landscape Transformation", companies: "11,388" },
    { name: "SAP System Landscape Directory", companies: "10,055" },
    { name: "SAP Change and Transport System", companies: "8,722" },
    { name: "SAP Software Provisioning Manager", companies: "7,389" },
    { name: "SAP Host Agent", companies: "6,056" },
    { name: "SAP License Administration Workbench", companies: "4,723" },
    { name: "SAP Support Package Manager", companies: "3,390" },
    { name: "SAP Download Manager", companies: "2,057" },
    { name: "SAP Service Marketplace", companies: "724" },
    { name: "SAP GUI (Graphical User Interface)", companies: "18,391" },
    { name: "SAP Logon", companies: "17,058" },
    { name: "SAP Business Client", companies: "15,725" },
    { name: "SAP Portal", companies: "14,392" },
    { name: "SAP Launchpad", companies: "13,059" },
    { name: "SAP Screen Personas", companies: "11,726" },
    { name: "SAP UI5", companies: "10,393" },
    { name: "SAP Gateway", companies: "9,060" },
    { name: "SAP Mobility Platform", companies: "7,727" },
    { name: "SAP Mobile Platform", companies: "6,394" },
    { name: "SAP Mobile Secure", companies: "5,061" },
    { name: "SAP Mobile Documents", companies: "3,728" },
    { name: "SAP Work Manager", companies: "2,395" },
    { name: "SAP Inventory Manager", companies: "1,062" },
    { name: "SAP Asset Manager", companies: "729" },
    { name: "SAP IQ", companies: "8,396" },
    { name: "SAP ASE (Adaptive Server Enterprise)", companies: "7,063" },
    { name: "SAP Replication Server", companies: "5,730" },
    { name: "SAP Data Warehouse Cloud", companies: "4,397" },
    { name: "SAP Analytics Hub", companies: "3,064" },
    { name: "SAP Data Intelligence", companies: "1,731" },
    { name: "SAP PowerDesigner", companies: "398" },
    { name: "SAP Unified Connectivity", companies: "65" },
    { name: "SAP Event Stream Processor", companies: "732" },
    { name: "SAP HANA Cloud Connector", companies: "6,399" },
    { name: "SAP Cloud Connector", companies: "5,066" },
    { name: "SAP Principal Propagation", companies: "3,733" },
    { name: "SAP Single Sign-On", companies: "2,400" },
    { name: "SAP Access Control", companies: "1,067" },
    { name: "SAP Process Control", companies: "734" },
    { name: "SAP Risk Management", companies: "401" },
    { name: "SAP Fraud Management", companies: "68" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">SAP Enterprise Users List</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 368.7K+ organizations using SAP enterprise software across manufacturing, financial services, retail, healthcare, and energy sectors. Access comprehensive data on 300+ SAP products including S/4HANA, SuccessFactors, Concur, Ariba, BusinessObjects, HANA, and Analytics Cloud solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">368,700</div>
                  <div className="text-sm text-white/80">Companies Using SAP</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">440K+</div>
                  <div className="text-sm text-white/80">Technology Professionals</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">180+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-4">
              300+ SAP Products & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage of SAP technologies and their implementation across organizations worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sapProducts.map((product, index) => (
              <Card key={index} className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="text-lg font-semibold text-blue-900">
                      {product.name}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-orange-600 mb-2">
                    {product.companies} companies
                  </div>
                  <div className="text-sm text-gray-600">
                    Organizations using this SAP solution
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Complete SAP Technology Database
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Access detailed company information, contact data, and implementation details for all 300+ SAP products and solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">368,700</div>
                  <div className="text-sm text-gray-600">Total Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">300+</div>
                  <div className="text-sm text-gray-600">Technology Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">440K+</div>
                  <div className="text-sm text-gray-600">IT Professionals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}