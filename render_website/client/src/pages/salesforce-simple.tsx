import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SalesforceSimplePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-green-600 mb-8">Salesforce.com Users List</h1>
        
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">599K+ Companies Using Salesforce Technologies</h2>
          <p className="text-green-700 text-lg">
            Connect with organizations implementing Salesforce's comprehensive CRM and cloud platform with 69+ products including Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, Einstein AI, Heroku, Experience Cloud, and specialized industry solutions.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/70 px-4 py-2 rounded-lg">
              <span className="text-green-800 font-bold text-xl">69+</span>
              <span className="text-green-700 text-sm ml-2">Products & Technologies</span>
            </div>
            <div className="bg-white/70 px-4 py-2 rounded-lg">
              <span className="text-green-800 font-bold text-xl">599K+</span>
              <span className="text-green-700 text-sm ml-2">Companies</span>
            </div>
            <div className="bg-white/70 px-4 py-2 rounded-lg">
              <span className="text-green-800 font-bold text-xl">1.8M+</span>
              <span className="text-green-700 text-sm ml-2">Records</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 border border-green-200 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4">Sales Cloud Products</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Salesforce Sales Cloud</li>
              <li>• Sales Cloud Einstein</li>
              <li>• Salesforce CPQ</li>
              <li>• Salesforce Revenue Cloud</li>
              <li>• Salesforce Sales Engagement</li>
              <li>• Salesforce Inbox</li>
              <li>• SalesforceIQ</li>
              <li>• Salesforce Web-To-Lead</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-green-200 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4">Service Cloud Products</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Salesforce Service Cloud</li>
              <li>• Salesforce Field Service Lightning</li>
              <li>• Salesforce Live Agent</li>
              <li>• Salesforce Web To Case</li>
              <li>• Salesforce.com Desk.com</li>
              <li>• Click Field Service Edge</li>
              <li>• ClickSchedule</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-green-200 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4">Marketing Cloud Suite</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Salesforce Marketing Cloud</li>
              <li>• Salesforce Journey Builder</li>
              <li>• Salesforce Email Studio</li>
              <li>• Salesforce Social Studio</li>
              <li>• Salesforce Pardot</li>
              <li>• ExactTarget CoTweet</li>
              <li>• Salesforce Marketing Cloud Account Engagement</li>
              <li>• Datorama</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-green-200 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4">Commerce Cloud</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Salesforce Commerce Cloud</li>
              <li>• Salesforce B2B Commerce</li>
              <li>• Salesforce B2C Commerce Cloud</li>
              <li>• Salesforce Commerce Cloud Order Management</li>
              <li>• Salesforce Commerce Cloud SFRA</li>
              <li>• Mobify</li>
              <li>• MyBuys</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-green-200 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4">Platform & Development</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Salesforce.com Lightning Platform</li>
              <li>• Salesforce Lightning Web Components</li>
              <li>• Salesforce VisualForce</li>
              <li>• Salesforce.com Force.com</li>
              <li>• Salesforce Flow</li>
              <li>• Heroku</li>
              <li>• Salesforce Trailhead</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-green-200 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4">Analytics & AI</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Salesforce Einstein AI</li>
              <li>• Salesforce Einstein Analytics</li>
              <li>• Salesforce CRM Analytics</li>
              <li>• Salesforce DMP</li>
              <li>• Salesforce Audience Studio</li>
              <li>• Salesforce Interaction Studio</li>
              <li>• Evergage</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-green-200 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4">Industry Clouds</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Salesforce Financial Services Cloud</li>
              <li>• Salesforce Health Cloud</li>
              <li>• Salesforce Nonprofit Cloud</li>
              <li>• Salesforce Nonprofit Success Pack</li>
              <li>• Salesforce.org Education Cloud</li>
              <li>• Salesforce Net Zero Cloud</li>
              <li>• Vlocity</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-green-200 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4">Experience & Community</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Salesforce Experience Cloud</li>
              <li>• Salesforce Community Cloud</li>
              <li>• Salesforce.com Chatter</li>
              <li>• Salesforce Work.com</li>
              <li>• Salesforce Customer 360</li>
              <li>• Pathful</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 border border-green-200 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4">Security & Tools</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Salesforce Shield</li>
              <li>• Salesforce Identity</li>
              <li>• Salesforce Data.com</li>
              <li>• Salesforce.com Jigsaw</li>
              <li>• Salesforce Maps</li>
              <li>• Salesforce Essentials</li>
              <li>• Click Software</li>
              <li>• Tomax</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Industry Breakdown</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-bold text-lg text-green-800">Technology</h3>
              <p className="text-3xl font-bold text-green-600">156K+</p>
              <p className="text-sm text-gray-600">Software companies, SaaS providers</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-green-800">Financial Services</h3>
              <p className="text-3xl font-bold text-green-600">128K+</p>
              <p className="text-sm text-gray-600">Banks, insurance firms</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-green-800">Healthcare</h3>
              <p className="text-3xl font-bold text-green-600">95K+</p>
              <p className="text-sm text-gray-600">Hospitals, pharmaceutical</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-green-800">Manufacturing</h3>
              <p className="text-3xl font-bold text-green-600">89K+</p>
              <p className="text-sm text-gray-600">Industrial, automotive</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Complete Salesforce Technology Coverage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="space-y-1">
              <p className="font-medium text-green-800">Legacy & Acquired Products:</p>
              <p className="text-gray-700">• Salesforce.com Rypple</p>
              <p className="text-gray-700">• Salesforce.com Siteforce</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-green-800">Target Decision Makers:</p>
              <p className="text-gray-700">• CRM Administrators</p>
              <p className="text-gray-700">• Sales Operations Managers</p>
              <p className="text-gray-700">• Marketing Automation Specialists</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-green-800">Implementation Roles:</p>
              <p className="text-gray-700">• Salesforce Developers</p>
              <p className="text-gray-700">• System Integrators</p>
              <p className="text-gray-700">• Business Analysts</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}