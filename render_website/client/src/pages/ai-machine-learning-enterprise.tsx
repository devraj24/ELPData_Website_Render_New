import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Eye, MessageSquare, BarChart, Zap, Bot } from "lucide-react";

export default function AIMachineLearningUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">AI & Machine Learning Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 18,643+ organizations implementing AI and ML solutions. Target data scientists, ML engineers, and AI product managers deploying computer vision, NLP, and predictive analytics platforms.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">18,643</div>
                  <div className="text-sm text-white/80">AI/ML Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">2.1M+</div>
                  <div className="text-sm text-white/80">ML Models Deployed</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">87%</div>
                  <div className="text-sm text-white/80">Accuracy Rate</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI/ML Solution Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">AI & Machine Learning Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing AI and ML technologies for automation, prediction, and intelligent decision-making
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-6 h-6 text-purple-500" />
                  Computer Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Image recognition, object detection, and visual AI for industrial applications
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Image Recognition</Badge>
                  <Badge variant="secondary">Object Detection</Badge>
                  <Badge variant="secondary">Facial Recognition</Badge>
                  <Badge variant="secondary">OCR & Document Processing</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Manufacturing & Quality Control</li>
                    <li>• Automotive & Transportation</li>
                    <li>• Security & Surveillance</li>
                    <li>• Healthcare & Medical Imaging</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Computer Vision Engineer</li>
                    <li>• AI Research Director</li>
                    <li>• Manufacturing Engineering Manager</li>
                    <li>• Quality Assurance Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Large training dataset collection and labeling</li>
                    <li>• Real-time processing performance requirements</li>
                    <li>• Edge deployment and hardware optimization</li>
                    <li>• Model accuracy in varying conditions</li>
                    <li>• Integration with existing inspection systems</li>
                    <li>• Privacy and ethical AI considerations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-blue-500" />
                  Natural Language Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Text analysis, chatbots, and language understanding for customer service
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Sentiment Analysis</Badge>
                  <Badge variant="secondary">Chatbots & Virtual Assistants</Badge>
                  <Badge variant="secondary">Text Classification</Badge>
                  <Badge variant="secondary">Language Translation</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Customer Service & Support</li>
                    <li>• Media & Content Publishing</li>
                    <li>• Legal & Document Review</li>
                    <li>• Financial Services & Banking</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• NLP Research Scientist</li>
                    <li>• Conversational AI Manager</li>
                    <li>• Customer Experience Director</li>
                    <li>• Content Technology Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Multi-language support and localization</li>
                    <li>• Context understanding and conversation flow</li>
                    <li>• Domain-specific vocabulary training</li>
                    <li>• Intent recognition accuracy</li>
                    <li>• Integration with existing customer systems</li>
                    <li>• Handling ambiguous or complex queries</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-green-500" />
                  Predictive Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Forecasting, demand planning, and business intelligence with ML models
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Demand Forecasting</Badge>
                  <Badge variant="secondary">Risk Prediction</Badge>
                  <Badge variant="secondary">Customer Analytics</Badge>
                  <Badge variant="secondary">Time Series Analysis</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Retail & E-commerce</li>
                    <li>• Supply Chain & Logistics</li>
                    <li>• Financial Services & Insurance</li>
                    <li>• Energy & Utilities</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Data Officer</li>
                    <li>• Predictive Analytics Manager</li>
                    <li>• Business Intelligence Director</li>
                    <li>• Supply Chain Analytics Lead</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data quality and historical accuracy</li>
                    <li>• Feature engineering and selection</li>
                    <li>• Model drift and performance monitoring</li>
                    <li>• Seasonal and trend pattern recognition</li>
                    <li>• Business stakeholder interpretation</li>
                    <li>• Real-time prediction infrastructure</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-6 h-6 text-orange-500" />
                  Process Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Robotic process automation and intelligent workflow automation
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Robotic Process Automation</Badge>
                  <Badge variant="secondary">Workflow Optimization</Badge>
                  <Badge variant="secondary">Document Processing</Badge>
                  <Badge variant="secondary">Decision Automation</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Banking & Financial Services</li>
                    <li>• Insurance & Claims Processing</li>
                    <li>• Healthcare Administration</li>
                    <li>• Government & Public Sector</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Process Automation Manager</li>
                    <li>• Digital Transformation Director</li>
                    <li>• Operations Excellence Manager</li>
                    <li>• Business Process Analyst</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Process standardization requirements</li>
                    <li>• Exception handling and edge cases</li>
                    <li>• Change management and employee adoption</li>
                    <li>• System integration complexity</li>
                    <li>• ROI measurement and optimization</li>
                    <li>• Compliance and audit trail maintenance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-6 h-6 text-teal-500" />
                  Recommendation Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Personalization engines and recommendation algorithms for user engagement
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Collaborative Filtering</Badge>
                  <Badge variant="secondary">Content-Based Filtering</Badge>
                  <Badge variant="secondary">Personalization</Badge>
                  <Badge variant="secondary">A/B Testing</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• E-commerce & Online Retail</li>
                    <li>• Streaming & Entertainment</li>
                    <li>• Social Media Platforms</li>
                    <li>• News & Content Aggregation</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Recommendation Systems Engineer</li>
                    <li>• Product Manager</li>
                    <li>• Growth Engineering Manager</li>
                    <li>• User Experience Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Cold start problem for new users/items</li>
                    <li>• Scalability for large user bases</li>
                    <li>• Real-time recommendation serving</li>
                    <li>• Diversity vs. relevance balance</li>
                    <li>• A/B testing and evaluation metrics</li>
                    <li>• Privacy and user data protection</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-indigo-500" />
                  MLOps & Model Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Machine learning operations, model deployment, and lifecycle management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Model Deployment</Badge>
                  <Badge variant="secondary">CI/CD for ML</Badge>
                  <Badge variant="secondary">Model Monitoring</Badge>
                  <Badge variant="secondary">Experiment Tracking</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Technology Companies</li>
                    <li>• Data Science Organizations</li>
                    <li>• AI-First Startups</li>
                    <li>• Research Institutions</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• ML Engineering Manager</li>
                    <li>• Data Science Platform Lead</li>
                    <li>• DevOps Engineer</li>
                    <li>• AI Infrastructure Architect</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Model versioning and reproducibility</li>
                    <li>• Automated retraining pipelines</li>
                    <li>• Model performance monitoring</li>
                    <li>• Infrastructure scaling and cost optimization</li>
                    <li>• Data pipeline orchestration</li>
                    <li>• Cross-team collaboration workflows</li>
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