import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Building2, TrendingUp, Download, Filter, ArrowRight, Cloud } from "lucide-react";

export default function CloudComputingTechnologies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredClouds, setFilteredClouds] = useState<string[]>([]);

  const cloudTechnologies = [
    "Amazon AWS Customers List",
    "Microsoft Azure Customers List",
    "Amazon S3 Customers List",
    "Amazon EC2 Customers List",
    "Oracle Cloud Customers List",
    "Google Compute Engine Customers List",
    "ServiceNow Customers List",
    "SoftLayer Customers List",
    "Salesforce com Force com Customers List",
    "Salesforce.com Heroku Customers List",
    "VMware vCloud Customers List",
    "Dell Boomi Customers List",
    "Red Hat OpenShift Customers List",
    "OpenStack Customers List",
    "IBM Bluemix Customers List",
    "Amazon Elastic Beanstalk Customers List",
    "Amazon RDS Customers List",
    "Amazon SimpleDB Customers List",
    "Amazon Elasticloadbalancing Customers List",
    "Amazon Redshift Customers List",
    "Amazon Glacier Customers List",
    "Amazon ElastiCache Customers List",
    "Oracle Advanced Compression Customers List",
    "IBM PureFlex System Customers List",
    "IBM WebSphere Cast Iron Customers List",
    "SmartCloud Enterprise Customers List",
    "Alibaba Cloud Customers List",
    "SAP Cloud Platform Customers List",
    "DigitalOcean Customers List",
    "Internap Customers List",
    "CyrusOne Customers List",
    "Google Cloud Platform Customers List",
    "Linode Customers List",
    "AWS Lambda Customers List",
    "Google App Engine Customers List",
    "AWS CloudFormation Customers List",
    "Webair Customers List",
    "iWeb Customers List",
    "AWS Data Pipeline Customers List",
    "Azure Functions Customers List",
    "Informatica Cloud Customers List",
    "CenturyLink Cloud Customers List",
    "Equinix Customers List"
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredClouds([]);
    } else {
      const filtered = cloudTechnologies.filter(cloud =>
        cloud.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredClouds(filtered);
    }
  };

  const displayClouds = searchQuery.trim() === "" ? cloudTechnologies : filteredClouds;

  const featuredClouds = [
    { name: "Amazon AWS", companies: "458,915", market: "32.4%" },
    { name: "Microsoft Azure", companies: "389,245", market: "27.5%" },
    { name: "Google Cloud Platform", companies: "187,832", market: "13.3%" },
    { name: "Oracle Cloud", companies: "124,921", market: "8.8%" },
    { name: "IBM Cloud", companies: "98,156", market: "6.9%" },
    { name: "Alibaba Cloud", companies: "76,974", market: "5.4%" }
  ];

  return (
    <>
      <SEOHead 
        title="Cloud Computing Technologies Database - 43+ Cloud Providers Customer Lists | ELP Data"
        description="Access comprehensive cloud computing customer databases including AWS, Microsoft Azure, Google Cloud, Oracle Cloud and 43+ more providers. Verified enterprise contacts."
        keywords="cloud computing technologies, AWS customers, Microsoft Azure users, Google Cloud Platform, cloud provider database"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Badge className="bg-purple-100 text-purple-800 mb-4">TargetTechnology</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Cloud Computing Technologies
                <span className="block text-purple-600">43+ Cloud Provider Customer Lists</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Connect with enterprises using AWS, Microsoft Azure, Google Cloud Platform, Oracle Cloud, and 43+ other 
                cloud computing solutions. Access cloud architects, DevOps engineers, and IT decision-makers worldwide.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <Input
                  type="text"
                  placeholder="Search cloud technologies..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-purple-500 shadow-lg"
                />
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Cloud className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">43+</div>
                <div className="text-gray-600">Cloud Providers</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">3.19M+</div>
                <div className="text-gray-600">Company Records</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">12.7M+</div>
                <div className="text-gray-600">Total Contacts</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Data Accuracy</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Cloud Providers */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Top Cloud Providers by Market Share</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredClouds.map((cloud, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{cloud.name}</h3>
                        <div className="text-sm text-gray-600">Companies Using: <span className="font-semibold text-purple-600">{cloud.companies}</span></div>
                        <div className="text-sm text-gray-600">Market Share: <span className="font-semibold text-blue-600">{cloud.market}</span></div>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        View List <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Complete Cloud List */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Cloud Computing Database</h2>
              <p className="text-xl text-gray-600">
                {searchQuery ? `Found ${displayClouds.length} cloud technologies matching "${searchQuery}"` : `Access customer lists for ${cloudTechnologies.length} cloud technologies`}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayClouds.map((cloud, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 group-hover:text-purple-600 transition-colors font-medium">
                        {cloud}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Access Cloud Computing Customer Data?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Get instant access to verified customer lists for any cloud technology. Perfect for cloud service providers, consultants, and technology vendors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample Data
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
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