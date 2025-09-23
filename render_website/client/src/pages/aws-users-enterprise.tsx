import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Server, Database, Zap, Shield, BarChart } from "lucide-react";

export default function AWSUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-yellow-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">AWS Cloud Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 67,489+ organizations using Amazon Web Services. Target cloud architects, DevOps engineers, and IT directors implementing EC2, S3, RDS, and serverless solutions for scalable cloud infrastructure.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">67,489</div>
                  <div className="text-sm text-white/80">AWS Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">3.2M+</div>
                  <div className="text-sm text-white/80">Cloud Resources</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-white/80">Uptime SLA</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AWS Service Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">AWS Service Implementations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing AWS cloud services for compute, storage, networking, and application development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-orange-500" />
                  Compute & Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  EC2 instances, auto-scaling, and load balancing for application hosting
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">EC2 Instances</Badge>
                  <Badge variant="secondary">Auto Scaling</Badge>
                  <Badge variant="secondary">Elastic Load Balancing</Badge>
                  <Badge variant="secondary">VPC Networking</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• SaaS & Software Companies</li>
                    <li>• Web Application Developers</li>
                    <li>• Gaming & Entertainment</li>
                    <li>• E-commerce Platforms</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Cloud Architect</li>
                    <li>• DevOps Engineer</li>
                    <li>• Infrastructure Manager</li>
                    <li>• Site Reliability Engineer</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Instance type selection and sizing</li>
                    <li>• Cost optimization strategies</li>
                    <li>• Security group configuration</li>
                    <li>• High availability architecture</li>
                    <li>• Performance monitoring and tuning</li>
                    <li>• Disaster recovery planning</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-blue-500" />
                  Database & Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  RDS, DynamoDB, S3, and managed database services for data management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Amazon RDS</Badge>
                  <Badge variant="secondary">DynamoDB</Badge>
                  <Badge variant="secondary">S3 Object Storage</Badge>
                  <Badge variant="secondary">Aurora Serverless</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data-Driven Organizations</li>
                    <li>• Financial Services</li>
                    <li>• Healthcare & Life Sciences</li>
                    <li>• Media & Content Companies</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Database Administrator</li>
                    <li>• Data Engineer</li>
                    <li>• Cloud Solutions Architect</li>
                    <li>• Data Platform Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Database migration strategies</li>
                    <li>• Performance optimization</li>
                    <li>• Backup and recovery automation</li>
                    <li>• Multi-region data replication</li>
                    <li>• Cost management for storage</li>
                    <li>• Security and encryption setup</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-purple-500" />
                  Serverless & Containers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Lambda functions, ECS, EKS, and serverless application development
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">AWS Lambda</Badge>
                  <Badge variant="secondary">ECS Containers</Badge>
                  <Badge variant="secondary">EKS Kubernetes</Badge>
                  <Badge variant="secondary">API Gateway</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Modern Software Development</li>
                    <li>• Microservices Architecture</li>
                    <li>• Startups & Agile Teams</li>
                    <li>• API-First Companies</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Software Architect</li>
                    <li>• Lead Developer</li>
                    <li>• Platform Engineering Manager</li>
                    <li>• Technical Product Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Function cold start optimization</li>
                    <li>• Container orchestration complexity</li>
                    <li>• Event-driven architecture design</li>
                    <li>• Monitoring and debugging serverless</li>
                    <li>• CI/CD pipeline automation</li>
                    <li>• Vendor lock-in considerations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-green-500" />
                  Migration & Hybrid Cloud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  On-premises to cloud migration and hybrid cloud connectivity
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Application Migration</Badge>
                  <Badge variant="secondary">Direct Connect</Badge>
                  <Badge variant="secondary">Hybrid Networking</Badge>
                  <Badge variant="secondary">Migration Services</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large Enterprise Corporations</li>
                    <li>• Traditional IT Organizations</li>
                    <li>• Legacy System Modernization</li>
                    <li>• Regulated Industries</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Technology Officer</li>
                    <li>• Cloud Migration Manager</li>
                    <li>• Enterprise Architect</li>
                    <li>• IT Transformation Lead</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Legacy application compatibility</li>
                    <li>• Data transfer and synchronization</li>
                    <li>• Network connectivity requirements</li>
                    <li>• Change management and training</li>
                    <li>• Compliance and security concerns</li>
                    <li>• Cost optimization post-migration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-teal-500" />
                  Security & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  IAM, CloudTrail, GuardDuty, and security services for cloud protection
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Identity & Access Management</Badge>
                  <Badge variant="secondary">CloudTrail Logging</Badge>
                  <Badge variant="secondary">GuardDuty Threat Detection</Badge>
                  <Badge variant="secondary">Compliance Center</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Financial Services & Banking</li>
                    <li>• Healthcare Organizations</li>
                    <li>• Government & Public Sector</li>
                    <li>• Legal & Professional Services</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Cloud Security Architect</li>
                    <li>• Chief Information Security Officer</li>
                    <li>• Compliance Manager</li>
                    <li>• Security Operations Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex IAM policy management</li>
                    <li>• Multi-account security governance</li>
                    <li>• Compliance automation setup</li>
                    <li>• Threat detection tuning</li>
                    <li>• Incident response procedures</li>
                    <li>• Security monitoring integration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-indigo-500" />
                  Analytics & Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Redshift, SageMaker, and data analytics services for business intelligence
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Amazon Redshift</Badge>
                  <Badge variant="secondary">SageMaker ML</Badge>
                  <Badge variant="secondary">QuickSight BI</Badge>
                  <Badge variant="secondary">Kinesis Streaming</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data Science Organizations</li>
                    <li>• Retail & E-commerce</li>
                    <li>• Marketing & Advertising</li>
                    <li>• Research & Development</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Data Officer</li>
                    <li>• Data Science Manager</li>
                    <li>• Analytics Director</li>
                    <li>• Machine Learning Engineer</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data pipeline architecture design</li>
                    <li>• Model training and deployment</li>
                    <li>• Real-time data processing</li>
                    <li>• Data warehouse optimization</li>
                    <li>• ML model monitoring and maintenance</li>
                    <li>• Cost management for data services</li>
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