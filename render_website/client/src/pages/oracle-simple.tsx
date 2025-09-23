import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OracleSimplePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-red-600 mb-8">Oracle Corporation Users List</h1>
        
        <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-4">2M+ Companies Using Oracle Corporation Technologies</h2>
          <p className="text-red-700 text-lg">
            Connect with organizations implementing Oracle's comprehensive suite of 613+ products including Oracle Database, Java platforms, JD Edwards, PeopleSoft, Oracle Cloud Infrastructure, Fusion Applications, and complete enterprise technology ecosystem.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/70 px-4 py-2 rounded-lg">
              <span className="text-red-800 font-bold text-xl">613+</span>
              <span className="text-red-700 text-sm ml-2">Products & Technologies</span>
            </div>
            <div className="bg-white/70 px-4 py-2 rounded-lg">
              <span className="text-red-800 font-bold text-xl">2M+</span>
              <span className="text-red-700 text-sm ml-2">Companies</span>
            </div>
            <div className="bg-white/70 px-4 py-2 rounded-lg">
              <span className="text-red-800 font-bold text-xl">5M+</span>
              <span className="text-red-700 text-sm ml-2">Records</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 border border-red-200 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">Database Technologies</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Oracle Database 19c</li>
              <li>• Oracle Database 18c</li>
              <li>• Oracle Database 12c</li>
              <li>• Oracle Database 11g Enterprise Edition</li>
              <li>• Oracle Autonomous Database</li>
              <li>• Oracle Autonomous Data Warehouse</li>
              <li>• Oracle Exadata</li>
              <li>• Oracle Real Application Clusters</li>
              <li>• MySQL</li>
              <li>• Oracle Berkeley DB</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-red-200 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">JD Edwards Suite</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• JD Edwards EnterpriseOne</li>
              <li>• JD Edwards EnterpriseOne Financial Management</li>
              <li>• JD Edwards EnterpriseOne CRM</li>
              <li>• JD Edwards World</li>
              <li>• JD Edwards World Accounts Payable</li>
              <li>• JD Edwards World General Ledger</li>
              <li>• JD Edwards World Human Resource Management</li>
              <li>• JD Edwards World Inventory Management</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-red-200 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">PeopleSoft Applications</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Oracle PeopleSoft</li>
              <li>• PeopleSoft Financial Management</li>
              <li>• PeopleSoft Campus Solutions</li>
              <li>• PeopleSoft Human Capital Management</li>
              <li>• PeopleSoft CRM</li>
              <li>• PeopleSoft Supply Chain Management</li>
              <li>• PeopleSoft Enterprise Performance Management</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-red-200 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">Java & Development</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Java SE 17</li>
              <li>• Java SE 18</li>
              <li>• JavaScript</li>
              <li>• Oracle JDeveloper</li>
              <li>• Oracle WebLogic Server</li>
              <li>• Oracle GlassFish</li>
              <li>• Oracle SOA</li>
              <li>• Oracle JRockit</li>
              <li>• OpenJDK</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-red-200 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">Cloud Infrastructure</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Oracle Cloud Infrastructure</li>
              <li>• Oracle Cloud Platform</li>
              <li>• Oracle Analytics Cloud</li>
              <li>• Oracle Integration Cloud</li>
              <li>• Oracle HCM Cloud</li>
              <li>• Oracle ERP Cloud</li>
              <li>• Oracle SCM Cloud</li>
              <li>• Oracle Container Engine for Kubernetes</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-red-200 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">Fusion Applications</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Oracle Fusion Cloud ERP</li>
              <li>• Oracle Fusion Human Capital Management</li>
              <li>• Oracle Fusion Financials</li>
              <li>• Oracle Fusion Supply Chain Management</li>
              <li>• Oracle Fusion CRM</li>
              <li>• Oracle Fusion Middleware</li>
              <li>• Oracle Fusion Project Portfolio Management</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-red-200 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">Business Intelligence</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Oracle Business Intelligence Enterprise Edition</li>
              <li>• Oracle Hyperion Planning</li>
              <li>• Oracle Hyperion Financial Management</li>
              <li>• Oracle Essbase</li>
              <li>• Oracle Data Visualization</li>
              <li>• Oracle Advanced Analytics</li>
              <li>• Oracle Crystal Ball</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-red-200 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">Enterprise Management</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Oracle Enterprise Manager</li>
              <li>• Oracle E-Business Suite</li>
              <li>• Oracle Identity Management</li>
              <li>• Oracle Enterprise Asset Management</li>
              <li>• Oracle Primavera</li>
              <li>• Oracle Project Management</li>
              <li>• Oracle Procurement Cloud</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-red-200 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">Hospitality & Retail</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Oracle Hospitality OPERA</li>
              <li>• Oracle MICROS</li>
              <li>• Oracle Simphony POS</li>
              <li>• Oracle Retail Merchandising System</li>
              <li>• Oracle Retail Price Management</li>
              <li>• OPERA Cloud PMS</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 border border-red-200 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">Siebel CRM Suite</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Oracle Siebel CRM</li>
              <li>• Siebel Contact Center</li>
              <li>• Siebel Email Marketing</li>
              <li>• Siebel Enterprise Marketing</li>
              <li>• Siebel Field Service</li>
              <li>• Siebel HelpDesk</li>
              <li>• Siebel Marketing Resource Management</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-red-200 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">Hardware & Systems</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Oracle Solaris</li>
              <li>• Oracle SPARC Servers</li>
              <li>• Oracle x86 Servers</li>
              <li>• Oracle SuperCluster</li>
              <li>• Oracle Exalogic</li>
              <li>• Oracle Exalytics</li>
              <li>• Sun Fire Server Systems</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-red-200 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">Taleo HR Suite</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Oracle Taleo Cloud Service</li>
              <li>• Taleo Recruiting</li>
              <li>• Taleo Performance</li>
              <li>• Taleo Learning Management System</li>
              <li>• Oracle Talent Acquisition Cloud</li>
              <li>• Oracle Talent Management Cloud</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-red-200 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">Storage & Backup</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• StorageTek Enterprise Backup</li>
              <li>• StorageTek SL8500</li>
              <li>• StorageTek T10000</li>
              <li>• Oracle ZFS</li>
              <li>• Oracle Tape Storage</li>
              <li>• Sun Storage Systems</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-red-200 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">Middleware & Integration</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Oracle Tuxedo</li>
              <li>• Oracle Coherence</li>
              <li>• Oracle Service Bus</li>
              <li>• Oracle B2B</li>
              <li>• Oracle TopLink</li>
              <li>• Oracle Managed File Transfer</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-red-200 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">Utilities & Specialized</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Oracle Utilities Work and Asset Management</li>
              <li>• Oracle Utilities Network Management</li>
              <li>• Oracle Transportation Management Cloud</li>
              <li>• Oracle Textura</li>
              <li>• Oracle Primavera Unifier</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Industry Breakdown</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-bold text-lg text-red-800">Financial Services</h3>
              <p className="text-3xl font-bold text-red-600">687K+</p>
              <p className="text-sm text-gray-600">Banks, insurance, investment firms</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-red-800">Manufacturing</h3>
              <p className="text-3xl font-bold text-red-600">542K+</p>
              <p className="text-sm text-gray-600">Industrial equipment, automotive</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-red-800">Technology</h3>
              <p className="text-3xl font-bold text-red-600">456K+</p>
              <p className="text-sm text-gray-600">Software companies, IT services</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-red-800">Healthcare</h3>
              <p className="text-3xl font-bold text-red-600">312K+</p>
              <p className="text-sm text-gray-600">Hospitals, pharmaceutical</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Complete Oracle Technology Coverage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="space-y-1">
              <p className="font-medium text-red-800">Acquired Technologies:</p>
              <p className="text-gray-700">• BEA Systems</p>
              <p className="text-gray-700">• Sun Microsystems</p>
              <p className="text-gray-700">• PeopleSoft</p>
              <p className="text-gray-700">• Siebel Systems</p>
              <p className="text-gray-700">• Hyperion Solutions</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-red-800">Target Decision Makers:</p>
              <p className="text-gray-700">• Database Administrators</p>
              <p className="text-gray-700">• Java Developers</p>
              <p className="text-gray-700">• ERP Consultants</p>
              <p className="text-gray-700">• Cloud Architects</p>
              <p className="text-gray-700">• IT Directors</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-red-800">Implementation Roles:</p>
              <p className="text-gray-700">• Oracle Certified Professionals</p>
              <p className="text-gray-700">• System Integrators</p>
              <p className="text-gray-700">• Business Analysts</p>
              <p className="text-gray-700">• Project Managers</p>
              <p className="text-gray-700">• Technical Architects</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}