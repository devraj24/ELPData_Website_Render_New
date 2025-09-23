import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Server, Database, Shield } from "lucide-react";

export default function AWSUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 py-12">
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
                  <div className="text-3xl font-bold text-white">31</div>
                  <div className="text-sm text-white/80">Global Regions</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AWS Services Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-navy mb-6">Core AWS Services</h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Organizations implementing specific AWS services across compute, storage, database, and networking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-orange-500" />
                  EC2 & Compute
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Elastic Compute Cloud for scalable virtual server instances
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">EC2 Instances</Badge>
                  <Badge variant="secondary">Auto Scaling</Badge>
                  <Badge variant="secondary">Elastic Load Balancer</Badge>
                  <Badge variant="secondary">Lambda Functions</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Implementation Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Cost optimization complexity</li>
                    <li>• Instance right-sizing</li>
                    <li>• Security group configuration</li>
                    <li>• Multi-AZ deployment planning</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-blue-500" />
                  S3 & Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Simple Storage Service for object storage and data archiving
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">S3 Buckets</Badge>
                  <Badge variant="secondary">CloudFront CDN</Badge>
                  <Badge variant="secondary">EBS Volumes</Badge>
                  <Badge variant="secondary">Glacier Archive</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Media & Entertainment</li>
                    <li>• Healthcare & Life Sciences</li>
                    <li>• Financial Services</li>
                    <li>• E-commerce & Retail</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-green-500" />
                  RDS & Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Managed relational database services with automated backups
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">RDS MySQL/PostgreSQL</Badge>
                  <Badge variant="secondary">DynamoDB NoSQL</Badge>
                  <Badge variant="secondary">Aurora Serverless</Badge>
                  <Badge variant="secondary">Redshift Data Warehouse</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Target Roles:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Database Administrators</li>
                    <li>• Data Engineers</li>
                    <li>• Cloud Architects</li>
                    <li>• DevOps Engineers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-purple-500" />
                  Security & IAM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Identity and Access Management with security services
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">IAM Policies</Badge>
                  <Badge variant="secondary">VPC Networking</Badge>
                  <Badge variant="secondary">CloudTrail Auditing</Badge>
                  <Badge variant="secondary">WAF Security</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Current Challenges:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Complex IAM policy management</li>
                    <li>• Security group configuration</li>
                    <li>• Compliance requirements</li>
                    <li>• Network security design</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-indigo-500" />
                  DevOps & CI/CD
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Development operations and continuous integration tools
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">CodePipeline</Badge>
                  <Badge variant="secondary">CodeCommit</Badge>
                  <Badge variant="secondary">CloudFormation</Badge>
                  <Badge variant="secondary">EKS Kubernetes</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Implementation Benefits:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Automated deployment pipelines</li>
                    <li>• Infrastructure as code</li>
                    <li>• Container orchestration</li>
                    <li>• Monitoring and logging</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-teal-500" />
                  AI/ML & Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-dark mb-4">
                  Machine learning and artificial intelligence services
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">SageMaker ML</Badge>
                  <Badge variant="secondary">Rekognition Vision</Badge>
                  <Badge variant="secondary">Comprehend NLP</Badge>
                  <Badge variant="secondary">QuickSight BI</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-primary-navy">Market Position:</div>
                  <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                    <li>• Leading cloud ML platform</li>
                    <li>• 32% cloud market share</li>
                    <li>• 99.99% uptime SLA</li>
                    <li>• Global infrastructure leader</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Usage */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-navy mb-6">AWS by Industry</h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Leading organizations across industries leveraging AWS infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-primary-navy mb-2">Technology Startups</h3>
                <p className="text-sm text-neutral-dark">4,200+ companies</p>
                <p className="text-xs text-neutral-dark mt-1">Netflix, Airbnb, Spotify</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-primary-navy mb-2">Financial Services</h3>
                <p className="text-sm text-neutral-dark">2,800+ companies</p>
                <p className="text-xs text-neutral-dark mt-1">Capital One, Goldman Sachs</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-primary-navy mb-2">Healthcare</h3>
                <p className="text-sm text-neutral-dark">1,900+ companies</p>
                <p className="text-xs text-neutral-dark mt-1">Pfizer, Johnson & Johnson</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-primary-navy mb-2">Government</h3>
                <p className="text-sm text-neutral-dark">1,200+ agencies</p>
                <p className="text-xs text-neutral-dark mt-1">NASA, CIA, Department of Defense</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}