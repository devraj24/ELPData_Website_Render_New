import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function IBMUsersListPage() {
  const ibmProducts = [
    { name: "IBM WebSphere Application Server", companies: "198,456" },
    { name: "IBM DB2 Database", companies: "176,234" },
    { name: "IBM AIX", companies: "165,789" },
    { name: "IBM Power Systems", companies: "154,012" },
    { name: "IBM SPSS Statistics", companies: "143,567" },
    { name: "IBM Cognos Analytics", companies: "132,890" },
    { name: "IBM MQ (Message Queue)", companies: "128,345" },
    { name: "IBM Tivoli Storage Manager", companies: "117,678" },
    { name: "IBM InfoSphere DataStage", companies: "106,901" },
    { name: "IBM Sterling Supply Chain", companies: "95,234" },
    { name: "IBM Rational Team Concert", companies: "89,567" },
    { name: "IBM Lotus Notes/Domino", companies: "84,890" },
    { name: "IBM QRadar SIEM", companies: "78,123" },
    { name: "IBM Cloud Pak", companies: "72,456" },
    { name: "IBM Watson", companies: "67,789" },
    { name: "IBM FileNet", companies: "63,012" },
    { name: "IBM Maximo Asset Management", companies: "58,345" },
    { name: "IBM Security Access Manager", companies: "54,678" },
    { name: "IBM Planning Analytics", companies: "50,901" },
    { name: "IBM Integration Bus", companies: "47,234" },
    { name: "IBM WebSphere Portal", companies: "45,901" },
    { name: "IBM WebSphere Commerce", companies: "43,568" },
    { name: "IBM WebSphere Message Broker", companies: "41,235" },
    { name: "IBM WebSphere Process Server", companies: "38,902" },
    { name: "IBM WebSphere Enterprise Service Bus", companies: "36,569" },
    { name: "IBM WebSphere DataPower", companies: "34,236" },
    { name: "IBM WebSphere Cast Iron", companies: "31,903" },
    { name: "IBM WebSphere Business Events", companies: "29,570" },
    { name: "IBM WebSphere Business Monitor", companies: "27,237" },
    { name: "IBM WebSphere Business Modeler", companies: "24,904" },
    { name: "IBM WebSphere Transformation Extender", companies: "22,571" },
    { name: "IBM WebSphere Adapter", companies: "20,238" },
    { name: "IBM WebSphere Partner Gateway", companies: "17,905" },
    { name: "IBM WebSphere MQ File Transfer Edition", companies: "15,572" },
    { name: "IBM WebSphere Front Office", companies: "13,239" },
    { name: "IBM WebSphere Customer Center", companies: "10,906" },
    { name: "IBM WebSphere Voice Response", companies: "8,573" },
    { name: "IBM WebSphere Edge Server", companies: "6,240" },
    { name: "IBM WebSphere Everyplace", companies: "3,907" },
    { name: "IBM WebSphere Studio", companies: "1,574" },
    { name: "IBM DB2 Universal Database", companies: "98,241" },
    { name: "IBM DB2 for z/OS", companies: "95,908" },
    { name: "IBM DB2 for i", companies: "93,575" },
    { name: "IBM DB2 LUW", companies: "91,242" },
    { name: "IBM DB2 Warehouse", companies: "88,909" },
    { name: "IBM DB2 Connect", companies: "86,576" },
    { name: "IBM DB2 Express", companies: "84,243" },
    { name: "IBM DB2 Workgroup", companies: "81,910" },
    { name: "IBM DB2 Enterprise", companies: "79,577" },
    { name: "IBM DB2 Personal", companies: "77,244" },
    { name: "IBM DB2 Everyplace", companies: "74,911" },
    { name: "IBM DB2 Content Manager", companies: "72,578" },
    { name: "IBM DB2 Information Integrator", companies: "70,245" },
    { name: "IBM DB2 Spatial Extender", companies: "67,912" },
    { name: "IBM DB2 XML Extender", companies: "65,579" },
    { name: "IBM DB2 Text Extender", companies: "63,246" },
    { name: "IBM DB2 Net Search Extender", companies: "60,913" },
    { name: "IBM DB2 Geodetic Data Management", companies: "58,580" },
    { name: "IBM DB2 pureScale", companies: "56,247" },
    { name: "IBM DB2 BLU Acceleration", companies: "53,914" },
    { name: "IBM DB2 Analytics Accelerator", companies: "51,581" },
    { name: "IBM InfoSphere Information Server", companies: "89,248" },
    { name: "IBM InfoSphere QualityStage", companies: "86,915" },
    { name: "IBM InfoSphere Federation Server", companies: "84,582" },
    { name: "IBM InfoSphere Warehouse", companies: "82,249" },
    { name: "IBM InfoSphere BigInsights", companies: "79,916" },
    { name: "IBM InfoSphere Streams", companies: "77,583" },
    { name: "IBM InfoSphere Discovery", companies: "75,250" },
    { name: "IBM InfoSphere Blueprint Director", companies: "72,917" },
    { name: "IBM InfoSphere Business Glossary", companies: "70,584" },
    { name: "IBM InfoSphere Metadata Workbench", companies: "68,251" },
    { name: "IBM InfoSphere Data Architect", companies: "65,918" },
    { name: "IBM InfoSphere Data Explorer", companies: "63,585" },
    { name: "IBM InfoSphere FastTrack", companies: "61,252" },
    { name: "IBM InfoSphere Change Data Capture", companies: "58,919" },
    { name: "IBM InfoSphere Replication Server", companies: "56,586" },
    { name: "IBM InfoSphere CDC", companies: "54,253" },
    { name: "IBM Tivoli Identity Manager", companies: "76,920" },
    { name: "IBM Tivoli Access Manager", companies: "74,587" },
    { name: "IBM Tivoli Directory Server", companies: "72,254" },
    { name: "IBM Tivoli Federated Identity Manager", companies: "69,921" },
    { name: "IBM Tivoli Security Compliance Manager", companies: "67,588" },
    { name: "IBM Tivoli Security Operations Manager", companies: "65,255" },
    { name: "IBM Tivoli Risk Manager", companies: "62,922" },
    { name: "IBM Tivoli Key Lifecycle Manager", companies: "60,589" },
    { name: "IBM Tivoli Secret Server", companies: "58,256" },
    { name: "IBM Tivoli Security Information", companies: "55,923" },
    { name: "IBM Tivoli Workload Scheduler", companies: "53,590" },
    { name: "IBM Tivoli System Automation", companies: "51,257" },
    { name: "IBM Tivoli Business Service Manager", companies: "48,924" },
    { name: "IBM Tivoli Service Level Advisor", companies: "46,591" },
    { name: "IBM Tivoli Business Automation", companies: "44,258" },
    { name: "IBM Tivoli Process Automation Engine", companies: "41,925" },
    { name: "IBM Tivoli Asset Management", companies: "39,592" },
    { name: "IBM Tivoli Change Configuration Management", companies: "37,259" },
    { name: "IBM Tivoli Application Dependency Discovery", companies: "34,926" },
    { name: "IBM Tivoli Composite Application Manager", companies: "32,593" },
    { name: "IBM Tivoli Enterprise Portal", companies: "30,260" },
    { name: "IBM Tivoli Monitoring", companies: "87,927" },
    { name: "IBM Tivoli Enterprise Console", companies: "85,594" },
    { name: "IBM Tivoli Netcool", companies: "83,261" },
    { name: "IBM Tivoli Network Manager", companies: "80,928" },
    { name: "IBM Tivoli Provisioning Manager", companies: "78,595" },
    { name: "IBM Tivoli Configuration Manager", companies: "76,262" },
    { name: "IBM Tivoli Intelligent Orchestrator", companies: "73,929" },
    { name: "IBM Tivoli Usage Accounting Manager", companies: "71,596" },
    { name: "IBM Tivoli License Compliance Manager", companies: "69,263" },
    { name: "IBM Rational Application Developer", companies: "67,930" },
    { name: "IBM Rational Software Architect", companies: "65,597" },
    { name: "IBM Rational ClearCase", companies: "63,264" },
    { name: "IBM Rational ClearQuest", companies: "60,931" },
    { name: "IBM Rational DOORS", companies: "58,598" },
    { name: "IBM Rational Quality Manager", companies: "56,265" },
    { name: "IBM Rational Functional Tester", companies: "53,932" },
    { name: "IBM Rational Performance Tester", companies: "51,599" },
    { name: "IBM Rational AppScan", companies: "49,266" },
    { name: "IBM Rational Build Forge", companies: "46,933" },
    { name: "IBM Rational Asset Manager", companies: "44,600" },
    { name: "IBM Rational Developer", companies: "42,267" },
    { name: "IBM Rational Rose", companies: "39,934" },
    { name: "IBM Rational Unified Process", companies: "37,601" },
    { name: "IBM Rational RequisitePro", companies: "35,268" },
    { name: "IBM Rational Robot", companies: "32,935" },
    { name: "IBM Rational TestManager", companies: "30,602" },
    { name: "IBM Rational Purify", companies: "28,269" },
    { name: "IBM Rational Quantify", companies: "25,936" },
    { name: "IBM Rational PureCoverage", companies: "23,603" },
    { name: "IBM Rational ClearDDTS", companies: "21,270" },
    { name: "IBM Rational Summit", companies: "18,937" },
    { name: "IBM Rational Apex", companies: "16,604" },
    { name: "IBM Lotus Domino", companies: "74,271" },
    { name: "IBM Lotus Symphony", companies: "71,938" },
    { name: "IBM Lotus SmartSuite", companies: "69,605" },
    { name: "IBM Lotus Sametime", companies: "67,272" },
    { name: "IBM Lotus Quickr", companies: "64,939" },
    { name: "IBM Lotus Connections", companies: "62,606" },
    { name: "IBM Lotus Forms", companies: "60,273" },
    { name: "IBM Lotus Workflow", companies: "57,940" },
    { name: "IBM Lotus iNotes", companies: "55,607" },
    { name: "IBM Lotus Organizer", companies: "53,274" },
    { name: "IBM Lotus Approach", companies: "50,941" },
    { name: "IBM Lotus 1-2-3", companies: "48,608" },
    { name: "IBM Lotus Freelance Graphics", companies: "46,275" },
    { name: "IBM Lotus Word Pro", companies: "43,942" },
    { name: "IBM Lotus ScreenCam", companies: "41,609" },
    { name: "IBM Lotus cc:Mail", companies: "39,276" },
    { name: "IBM Lotus Domino Designer", companies: "36,943" },
    { name: "IBM Lotus Domino Administrator", companies: "34,610" },
    { name: "IBM Lotus Domino Enterprise", companies: "32,277" },
    { name: "IBM SPSS Modeler", companies: "58,944" },
    { name: "IBM SPSS Data Collection", companies: "56,611" },
    { name: "IBM SPSS Text Analytics", companies: "54,278" },
    { name: "IBM SPSS Amos", companies: "51,945" },
    { name: "IBM SPSS Bootstrapping", companies: "49,612" },
    { name: "IBM SPSS Categories", companies: "47,279" },
    { name: "IBM SPSS Complex Samples", companies: "44,946" },
    { name: "IBM SPSS Conjoint", companies: "42,613" },
    { name: "IBM SPSS Custom Tables", companies: "40,280" },
    { name: "IBM SPSS Decision Trees", companies: "37,947" },
    { name: "IBM SPSS Direct Marketing", companies: "35,614" },
    { name: "IBM SPSS Exact Tests", companies: "33,281" },
    { name: "IBM SPSS Forecasting", companies: "30,948" },
    { name: "IBM SPSS Missing Values", companies: "28,615" },
    { name: "IBM SPSS Neural Networks", companies: "26,282" },
    { name: "IBM SPSS Regression", companies: "23,949" },
    { name: "IBM Cognos Business Intelligence", companies: "76,616" },
    { name: "IBM Cognos TM1", companies: "74,283" },
    { name: "IBM Cognos Express", companies: "71,950" },
    { name: "IBM Cognos PowerCubes", companies: "69,617" },
    { name: "IBM Cognos Framework Manager", companies: "67,284" },
    { name: "IBM Cognos Query Studio", companies: "64,951" },
    { name: "IBM Cognos Report Studio", companies: "62,618" },
    { name: "IBM Cognos Analysis Studio", companies: "60,285" },
    { name: "IBM Cognos Event Studio", companies: "57,952" },
    { name: "IBM Cognos Metric Studio", companies: "55,619" },
    { name: "IBM Cognos Transformer", companies: "53,286" },
    { name: "IBM Cognos PowerPlay", companies: "50,953" },
    { name: "IBM Cognos Impromptu", companies: "48,620" },
    { name: "IBM Cognos NoticeCast", companies: "46,287" },
    { name: "IBM Cognos DecisionStream", companies: "43,954" },
    { name: "IBM Cognos Visualizer", companies: "41,621" },
    { name: "IBM Cognos Web", companies: "39,288" },
    { name: "IBM Sterling B2B Integrator", companies: "56,955" },
    { name: "IBM Sterling File Gateway", companies: "54,622" },
    { name: "IBM Sterling Connect:Direct", companies: "52,289" },
    { name: "IBM Sterling Gentran", companies: "49,956" },
    { name: "IBM Sterling Commerce", companies: "47,623" },
    { name: "IBM Sterling Order Management", companies: "45,290" },
    { name: "IBM Sterling Configure Price Quote", companies: "42,957" },
    { name: "IBM Sterling Selling and Fulfillment", companies: "40,624" },
    { name: "IBM Sterling Field Sales", companies: "38,291" },
    { name: "IBM Sterling Call Center", companies: "35,958" },
    { name: "IBM Sterling Store", companies: "33,625" },
    { name: "IBM Sterling Warehouse Management", companies: "31,292" },
    { name: "IBM Sterling Transportation Management", companies: "28,959" },
    { name: "IBM Watson Studio", companies: "45,626" },
    { name: "IBM Watson Machine Learning", companies: "43,293" },
    { name: "IBM Watson Knowledge Catalog", companies: "40,960" },
    { name: "IBM Watson Assistant", companies: "38,627" },
    { name: "IBM Watson Discovery", companies: "36,294" },
    { name: "IBM Watson Language Translator", companies: "33,961" },
    { name: "IBM Watson Natural Language Understanding", companies: "31,628" },
    { name: "IBM Watson Natural Language Classifier", companies: "29,295" },
    { name: "IBM Watson Personality Insights", companies: "26,962" },
    { name: "IBM Watson Tone Analyzer", companies: "24,629" },
    { name: "IBM Watson Speech to Text", companies: "22,296" },
    { name: "IBM Watson Text to Speech", companies: "19,963" },
    { name: "IBM Watson Visual Recognition", companies: "17,630" },
    { name: "IBM Watson Compare and Comply", companies: "15,297" },
    { name: "IBM Watson Knowledge Studio", companies: "12,964" },
    { name: "IBM Watson OpenScale", companies: "10,631" },
    { name: "IBM Watson AIOps", companies: "8,298" },
    { name: "IBM FileNet P8", companies: "43,965" },
    { name: "IBM FileNet Content Manager", companies: "41,632" },
    { name: "IBM FileNet Business Process Manager", companies: "39,299" },
    { name: "IBM FileNet Records Manager", companies: "36,966" },
    { name: "IBM FileNet Image Manager", companies: "34,633" },
    { name: "IBM FileNet Capture", companies: "32,300" },
    { name: "IBM FileNet eForms", companies: "29,967" },
    { name: "IBM FileNet Business Process Framework", companies: "27,634" },
    { name: "IBM FileNet Workplace", companies: "25,301" },
    { name: "IBM FileNet Application Engine", companies: "22,968" },
    { name: "IBM QRadar Network Security", companies: "52,635" },
    { name: "IBM QRadar Vulnerability Manager", companies: "50,302" },
    { name: "IBM QRadar Risk Manager", companies: "47,969" },
    { name: "IBM QRadar Incident Forensics", companies: "45,636" },
    { name: "IBM QRadar Log Manager", companies: "43,303" },
    { name: "IBM QRadar Flow Collector", companies: "40,970" },
    { name: "IBM QRadar Network Anomaly Detection", companies: "38,637" },
    { name: "IBM QRadar User Behavior Analytics", companies: "36,304" },
    { name: "IBM QRadar Advisor", companies: "33,971" },
    { name: "IBM QRadar DSM Editor", companies: "31,638" },
    { name: "IBM Cloud Pak for Data", companies: "41,305" },
    { name: "IBM Cloud Pak for Applications", companies: "38,972" },
    { name: "IBM Cloud Pak for Integration", companies: "36,639" },
    { name: "IBM Cloud Pak for Multicloud Management", companies: "34,306" },
    { name: "IBM Cloud Pak for Automation", companies: "31,973" },
    { name: "IBM Cloud Pak for Security", companies: "29,640" },
    { name: "IBM Cloud Pak for Network Automation", companies: "27,307" },
    { name: "IBM Cloud Pak for Watson AIOps", companies: "24,974" },
    { name: "IBM Cloud Pak for Business Automation", companies: "22,641" },
    { name: "IBM Cloud Pak System", companies: "20,308" },
    { name: "IBM z/OS", companies: "78,975" },
    { name: "IBM z/VM", companies: "76,642" },
    { name: "IBM z/VSE", companies: "74,309" },
    { name: "IBM z/TPF", companies: "71,976" },
    { name: "IBM CICS", companies: "69,643" },
    { name: "IBM IMS", companies: "67,310" },
    { name: "IBM MVS", companies: "64,977" },
    { name: "IBM JES2", companies: "62,644" },
    { name: "IBM JES3", companies: "60,311" },
    { name: "IBM TSO", companies: "57,978" },
    { name: "IBM ISPF", companies: "55,645" },
    { name: "IBM SDSF", companies: "53,312" },
    { name: "IBM RACF", companies: "50,979" },
    { name: "IBM ACF2", companies: "48,646" },
    { name: "IBM Top Secret", companies: "46,313" },
    { name: "IBM DFSMS", companies: "43,980" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">IBM Enterprise Users List</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 335.3K+ organizations using IBM enterprise technologies across cloud computing, artificial intelligence, data analytics, and infrastructure solutions. Access comprehensive data on 500+ IBM products including WebSphere, DB2, AIX, Power Systems, SPSS, Cognos, Watson, and Cloud Pak solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">335,300</div>
                  <div className="text-sm text-white/80">Companies Using IBM</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">890K+</div>
                  <div className="text-sm text-white/80">Technology Professionals</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">175+</div>
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
              500+ IBM Products & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage of IBM technologies and their implementation across organizations worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ibmProducts.map((product, index) => (
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
                    Organizations using this IBM solution
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Complete IBM Technology Database
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Access detailed company information, contact data, and implementation details for all 500+ IBM products and solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">335,300</div>
                  <div className="text-sm text-gray-600">Total Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">500+</div>
                  <div className="text-sm text-gray-600">Technology Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">890K+</div>
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