import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Database, Shield, BarChart, Settings, Zap } from "lucide-react";

export default function GoogleCloudUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Google Cloud Platform Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 9M+ organizations using Google Cloud Platform for enterprise workloads. Target cloud architects, data engineers, and ML engineers implementing Compute Engine, BigQuery, and Kubernetes solutions for scalable applications.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">9M+</div>
                  <div className="text-sm text-white/80">GCP Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">3.8M+</div>
                  <div className="text-sm text-white/80">Cloud Engineers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">200+</div>
                  <div className="text-sm text-white/80">Countries & Territories</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Cloud Solutions Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">Google Cloud Platform Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Google Cloud services for compute, storage, analytics, and machine learning workloads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-blue-500" />
                  Compute Engine & Kubernetes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Virtual machine instances and container orchestration platforms
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Virtual Machines</Badge>
                  <Badge variant="secondary">Google Kubernetes Engine</Badge>
                  <Badge variant="secondary">Auto Scaling</Badge>
                  <Badge variant="secondary">Load Balancing</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Technology & Software Development</li>
                    <li>• Gaming & Interactive Media</li>
                    <li>• Startups & Digital Natives</li>
                    <li>• E-commerce & Retail</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Cloud Engineer</li>
                    <li>• Kubernetes Administrator</li>
                    <li>• DevOps Engineer</li>
                    <li>• Site Reliability Engineer</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Container orchestration complexity and management</li>
                    <li>• Kubernetes cluster security and RBAC configuration</li>
                    <li>• Cost optimization for compute workloads</li>
                    <li>• Multi-region deployment and disaster recovery</li>
                    <li>• Service mesh implementation and observability</li>
                    <li>• Resource allocation and capacity planning</li>
                    <li>• Network configuration and VPC setup</li>
                    <li>• Integration with CI/CD pipelines and GitOps</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-green-500" />
                  BigQuery & Data Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Serverless data warehouse and analytics platform for big data processing
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Data Warehousing</Badge>
                  <Badge variant="secondary">SQL Analytics</Badge>
                  <Badge variant="secondary">Real-time Streaming</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data-driven Organizations</li>
                    <li>• Financial Services & Analytics</li>
                    <li>• Media & Entertainment</li>
                    <li>• Retail & Consumer Insights</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data Engineer</li>
                    <li>• Data Analyst</li>
                    <li>• Analytics Manager</li>
                    <li>• Business Intelligence Developer</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Query optimization for large datasets and costs</li>
                    <li>• Data pipeline design and ETL/ELT processes</li>
                    <li>• Real-time streaming data integration</li>
                    <li>• Data governance and access control management</li>
                    <li>• Performance tuning for complex analytical queries</li>
                    <li>• Integration with visualization and BI tools</li>
                    <li>• Data quality monitoring and validation</li>
                    <li>• Cross-region data replication and compliance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-purple-500" />
                  AI & Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive AI and machine learning services for intelligent applications
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Vertex AI</Badge>
                  <Badge variant="secondary">AutoML</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                  <Badge variant="secondary">Vision & Language APIs</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Healthcare & Life Sciences</li>
                    <li>• Automotive & Manufacturing</li>
                    <li>• Financial Services & Risk</li>
                    <li>• Research & Academic Institutions</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data Scientist</li>
                    <li>• ML Engineer</li>
                    <li>• AI Product Manager</li>
                    <li>• Research Scientist</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Model training cost optimization and efficiency</li>
                    <li>• MLOps pipeline implementation and automation</li>
                    <li>• Model deployment and serving at scale</li>
                    <li>• Data preparation and feature engineering</li>
                    <li>• Model versioning and experiment tracking</li>
                    <li>• Ethical AI and bias detection in models</li>
                    <li>• Integration with existing business applications</li>
                    <li>• Skills development in machine learning practices</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-orange-500" />
                  Firebase & App Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Backend-as-a-Service platform for mobile and web application development
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Realtime Database</Badge>
                  <Badge variant="secondary">Authentication</Badge>
                  <Badge variant="secondary">Cloud Functions</Badge>
                  <Badge variant="secondary">Analytics</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Mobile App Development</li>
                    <li>• Gaming & Entertainment</li>
                    <li>• Social Media & Communication</li>
                    <li>• E-commerce & Marketplace</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Mobile Developer</li>
                    <li>• Frontend Developer</li>
                    <li>• Product Manager</li>
                    <li>• Full Stack Developer</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Real-time database scaling and performance</li>
                    <li>• Authentication integration and user management</li>
                    <li>• Cloud Functions cold start optimization</li>
                    <li>• Push notification delivery and targeting</li>
                    <li>• Analytics data interpretation and actionability</li>
                    <li>• Cross-platform development consistency</li>
                    <li>• Security rules configuration and testing</li>
                    <li>• Migration from Firebase to other platforms</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-6 h-6 text-teal-500" />
                  Cloud Storage & CDN
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Object storage and content delivery network for global data distribution
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Cloud Storage</Badge>
                  <Badge variant="secondary">Content Delivery</Badge>
                  <Badge variant="secondary">Data Transfer</Badge>
                  <Badge variant="secondary">Backup Solutions</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Media & Content Distribution</li>
                    <li>• Software & SaaS Companies</li>
                    <li>• Backup & Disaster Recovery</li>
                    <li>• Scientific & Research Data</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Storage Administrator</li>
                    <li>• Cloud Architect</li>
                    <li>• Infrastructure Engineer</li>
                    <li>• Backup Specialist</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Storage class optimization for cost efficiency</li>
                    <li>• Data lifecycle management and archiving</li>
                    <li>• Global content distribution optimization</li>
                    <li>• Backup strategy design and testing</li>
                    <li>• Data transfer speed and bandwidth optimization</li>
                    <li>• Access control and security configuration</li>
                    <li>• Multi-region replication and consistency</li>
                    <li>• Integration with existing data workflows</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-indigo-500" />
                  Anthos & Hybrid Cloud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Modern application platform for hybrid and multi-cloud environments
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Hybrid Deployment</Badge>
                  <Badge variant="secondary">Service Mesh</Badge>
                  <Badge variant="secondary">Policy Management</Badge>
                  <Badge variant="secondary">Multi-cloud</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large Enterprise Organizations</li>
                    <li>• Regulated Industries</li>
                    <li>• Global Technology Companies</li>
                    <li>• Government & Public Sector</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Platform Engineer</li>
                    <li>• Cloud Solutions Architect</li>
                    <li>• Enterprise Architect</li>
                    <li>• Infrastructure Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Hybrid cloud architecture design and implementation</li>
                    <li>• Service mesh configuration and observability</li>
                    <li>• Policy enforcement across environments</li>
                    <li>• Application modernization and containerization</li>
                    <li>• Network connectivity and security between clouds</li>
                    <li>• Workload portability and vendor lock-in avoidance</li>
                    <li>• Compliance and governance across platforms</li>
                    <li>• Skills development for modern platform technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}