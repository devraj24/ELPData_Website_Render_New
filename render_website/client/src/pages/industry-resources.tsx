import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { useState } from "react";
import { 
  Newspaper, 
  Database, 
  TrendingUp, 
  FileText, 
  BarChart3, 
  Search,
  Calendar,
  Users,
  Globe,
  Lightbulb,
  Target,
  Award,
  Brain,
  Shield,
  Cloud,
  Zap,
  Building,
  PieChart
} from "lucide-react";

export default function IndustryResourcesPage() {
  const [activeTab, setActiveTab] = useState("news-articles");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Industry Resources</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Access comprehensive technology intelligence reports, market insights, and strategic guidance from industry experts.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Navigation Breadcrumb */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Industry Resources</span>
              <span>•</span>
              <span className="font-semibold text-blue-600">
                {activeTab === "news-articles" && "News & Articles"}
                {activeTab === "data-strategy" && "Data Strategy"}
                {activeTab === "marketing-insights" && "Marketing Insights"}
                {activeTab === "white-papers" && "White Papers"}
                {activeTab === "industry-reports" && "Industry Reports"}
                {activeTab === "research-studies" && "Research Studies"}
              </span>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger 
                value="news-articles" 
                className="text-sm font-medium px-3 py-2 rounded-md transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-gray-200"
              >
                News & Articles
              </TabsTrigger>
              <TabsTrigger 
                value="data-strategy" 
                className="text-sm font-medium px-3 py-2 rounded-md transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-gray-200"
              >
                Data Strategy
              </TabsTrigger>
              <TabsTrigger 
                value="marketing-insights" 
                className="text-sm font-medium px-3 py-2 rounded-md transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-gray-200"
              >
                Marketing Insights
              </TabsTrigger>
              <TabsTrigger 
                value="white-papers" 
                className="text-sm font-medium px-3 py-2 rounded-md transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-gray-200"
              >
                White Papers
              </TabsTrigger>
              <TabsTrigger 
                value="industry-reports" 
                className="text-sm font-medium px-3 py-2 rounded-md transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-gray-200"
              >
                Industry Reports
              </TabsTrigger>
              <TabsTrigger 
                value="research-studies" 
                className="text-sm font-medium px-3 py-2 rounded-md transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-gray-200"
              >
                Research Studies
              </TabsTrigger>
            </TabsList>

            {/* News & Articles Tab */}
            <TabsContent value="news-articles">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Latest Technology News & Analysis</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="bg-gradient-to-br from-blue-800 to-blue-950 text-white p-8 rounded-xl shadow-2xl border-2 border-blue-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Enterprise AI Adoption Accelerates</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Fortune 1000 companies increase artificial intelligence investments by 85% as automation transforms business operations.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Machine Learning</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Process Automation</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Neural Networks</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Jan 15, 2025</div>
                  <div className="text-base text-white font-medium">Technology Trends • AI Innovation • Enterprise</div>
                </div>

                <div className="bg-gradient-to-br from-green-800 to-green-950 text-white p-8 rounded-xl shadow-2xl border-2 border-green-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Zero Trust Security Frameworks Expand</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Organizations implement comprehensive zero trust architectures to combat sophisticated cyber threats and data breaches.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Identity Management</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Network Security</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Access Control</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Jan 12, 2025</div>
                  <div className="text-base text-white font-medium">Security Report • Cybersecurity • Zero Trust</div>
                </div>

                <div className="bg-gradient-to-br from-purple-800 to-purple-950 text-white p-8 rounded-xl shadow-2xl border-2 border-purple-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Multi-Cloud Strategies Dominate 2025</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Enterprises adopt hybrid cloud approaches combining AWS, Azure, and Google Cloud for enhanced resilience and performance.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Hybrid Cloud</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Cloud Migration</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Infrastructure</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Jan 10, 2025</div>
                  <div className="text-base text-white font-medium">Cloud Computing • Infrastructure • Strategy</div>
                </div>

                <div className="bg-gradient-to-br from-orange-800 to-red-950 text-white p-8 rounded-xl shadow-2xl border-2 border-orange-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Edge Computing Deployments Rise 156%</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Edge computing infrastructure sees massive growth as companies prioritize low-latency processing and real-time analytics.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Edge Computing</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Real-time Analytics</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Low Latency</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Jan 8, 2025</div>
                  <div className="text-base text-white font-medium">Edge Computing • Infrastructure • Performance</div>
                </div>

                <div className="bg-gradient-to-br from-teal-800 to-cyan-950 text-white p-8 rounded-xl shadow-2xl border-2 border-teal-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Data Privacy Regulations Impact Tech Sector</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    New international data privacy laws drive significant changes in enterprise data handling and storage practices.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Data Privacy</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Compliance</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Regulations</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Jan 5, 2025</div>
                  <div className="text-base text-white font-medium">Privacy • Compliance • Data Governance</div>
                </div>

                <div className="bg-gradient-to-br from-indigo-800 to-violet-950 text-white p-8 rounded-xl shadow-2xl border-2 border-indigo-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Quantum Computing Breakthroughs in 2025</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Major advances in quantum computing hardware and software bring practical applications closer to reality.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Quantum Computing</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Innovation</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Technology Breakthrough</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Jan 3, 2025</div>
                  <div className="text-base text-white font-medium">Quantum Technology • Innovation • Computing</div>
                </div>
              </div>
            </TabsContent>

            {/* Data Strategy Tab */}
            <TabsContent value="data-strategy">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Data Strategy & Analytics Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="bg-gradient-to-br from-green-400 to-yellow-300 text-white p-8 rounded-xl shadow-2xl border-2 border-green-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Real-Time Data Architecture</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Building scalable data pipelines for instant analytics and decision-making in fast-paced business environments.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Stream Processing</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Data Pipelines</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Analytics</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Jan 15, 2025</div>
                  <div className="text-base text-white font-medium">Data Engineering • Architecture • Best Practices</div>
                </div>

                <div className="bg-gradient-to-br from-indigo-800 to-indigo-950 text-white p-8 rounded-xl shadow-2xl border-2 border-indigo-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <PieChart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Customer Data Platform Implementation</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Unifying customer data across touchpoints to create comprehensive profiles and personalized experiences.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">CDP</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Data Integration</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Personalization</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Jan 12, 2025</div>
                  <div className="text-base text-white font-medium">Customer Data • Integration • Platform Strategy</div>
                </div>

                <div className="bg-gradient-to-br from-amber-800 to-orange-950 text-white p-8 rounded-xl shadow-2xl border-2 border-amber-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Data Governance in Modern Enterprises</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Establishing comprehensive data governance frameworks to ensure quality, compliance, and strategic value.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Data Quality</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Compliance</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Governance</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Jan 10, 2025</div>
                  <div className="text-base text-white font-medium">Data Governance • Compliance • Quality Management</div>
                </div>

                <div className="bg-gradient-to-br from-cyan-800 to-blue-950 text-white p-8 rounded-xl shadow-2xl border-2 border-cyan-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Advanced Analytics Platforms</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Implementing next-generation analytics platforms for predictive modeling and machine learning workflows.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Predictive Analytics</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">ML Workflows</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Advanced Analytics</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Jan 6, 2025</div>
                  <div className="text-base text-white font-medium">Analytics Platforms • ML • Predictive Modeling</div>
                </div>

                <div className="bg-gradient-to-br from-violet-800 to-purple-950 text-white p-8 rounded-xl shadow-2xl border-2 border-violet-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Data Lake to Data Mesh Migration</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Strategic migration from centralized data lakes to distributed data mesh architectures for enterprise scalability.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Data Mesh</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Migration Strategy</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Distributed Architecture</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Jan 4, 2025</div>
                  <div className="text-base text-white font-medium">Data Architecture • Migration • Distributed Systems</div>
                </div>

                <div className="bg-gradient-to-br from-rose-800 to-pink-950 text-white p-8 rounded-xl shadow-2xl border-2 border-rose-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Zero-Copy Data Integration</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Revolutionary data integration techniques that eliminate data movement while maintaining real-time access and processing.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Zero-Copy</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Data Integration</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Real-time Processing</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Jan 2, 2025</div>
                  <div className="text-base text-white font-medium">Data Integration • Zero-Copy • Performance Optimization</div>
                </div>
              </div>
            </TabsContent>

            {/* Marketing Insights Tab */}
            <TabsContent value="marketing-insights">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Marketing Technology & Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="bg-gradient-to-br from-green-400 to-yellow-300 text-white p-8 rounded-xl shadow-2xl border-2 border-green-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Account-Based Marketing Excellence</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Advanced ABM strategies combining intent data, personalization, and multi-channel orchestration for enterprise sales.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">ABM Strategy</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Intent Data</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Personalization</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Jan 14, 2025</div>
                  <div className="text-base text-white font-medium">ABM • Lead Generation • B2B Marketing</div>
                </div>

                <div className="bg-gradient-to-br from-violet-800 to-violet-950 text-white p-8 rounded-xl shadow-2xl border-2 border-violet-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Customer Journey Optimization</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Mapping and optimizing complex B2B customer journeys using behavioral data and predictive analytics.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Journey Mapping</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Behavioral Data</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Optimization</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Jan 11, 2025</div>
                  <div className="text-base text-white font-medium">Customer Experience • Journey • Optimization</div>
                </div>

                <div className="bg-gradient-to-br from-teal-800 to-teal-950 text-white p-8 rounded-xl shadow-2xl border-2 border-teal-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Marketing Attribution Models</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Advanced attribution modeling techniques to measure marketing impact across complex enterprise buying cycles.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Attribution</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">ROI Measurement</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Analytics</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Jan 9, 2025</div>
                  <div className="text-base text-white font-medium">Attribution • Marketing ROI • Measurement</div>
                </div>

                <div className="bg-gradient-to-br from-orange-800 to-amber-950 text-white p-8 rounded-xl shadow-2xl border-2 border-orange-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">AI-Powered Marketing Automation</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Implementing artificial intelligence to automate complex marketing workflows and improve campaign performance.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">AI Marketing</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Automation</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Campaign Optimization</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Jan 7, 2025</div>
                  <div className="text-base text-white font-medium">AI Marketing • Automation • Campaign Performance</div>
                </div>

                <div className="bg-gradient-to-br from-emerald-800 to-green-950 text-white p-8 rounded-xl shadow-2xl border-2 border-emerald-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Omnichannel Customer Engagement</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Creating seamless customer experiences across all touchpoints using integrated marketing technology stacks.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Omnichannel</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Customer Experience</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">MarTech Stack</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Jan 5, 2025</div>
                  <div className="text-base text-white font-medium">Omnichannel • Customer Engagement • MarTech</div>
                </div>

                <div className="bg-gradient-to-br from-blue-800 to-indigo-950 text-white p-8 rounded-xl shadow-2xl border-2 border-blue-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Predictive Lead Scoring Models</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Advanced machine learning models for accurate lead scoring and sales pipeline optimization.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Lead Scoring</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Predictive Analytics</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Sales Pipeline</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Jan 3, 2025</div>
                  <div className="text-base text-white font-medium">Lead Scoring • Predictive Models • Sales Optimization</div>
                </div>
              </div>
            </TabsContent>

            {/* White Papers Tab */}
            <TabsContent value="white-papers">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Research White Papers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="bg-gradient-to-br from-slate-800 to-slate-950 text-white p-8 rounded-xl shadow-2xl border-2 border-slate-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Enterprise Digital Transformation Report</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Comprehensive analysis of digital transformation initiatives across 500+ enterprises and their technology adoption patterns.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Digital Transformation</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Enterprise</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Technology Adoption</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">45 Pages</div>
                  <div className="text-base text-white font-medium">Research Report • Digital Transformation • Enterprise</div>
                </div>

                <div className="bg-gradient-to-br from-cyan-800 to-cyan-950 text-white p-8 rounded-xl shadow-2xl border-2 border-cyan-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">AI Implementation Framework</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Strategic guide for implementing artificial intelligence solutions in enterprise environments with ROI analysis.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">AI Strategy</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Implementation</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">ROI Analysis</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">38 Pages</div>
                  <div className="text-base text-white font-medium">AI Strategy • Implementation • Framework</div>
                </div>

                <div className="bg-gradient-to-br from-orange-800 to-red-950 text-white p-8 rounded-xl shadow-2xl border-2 border-orange-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Cloud Security Best Practices</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Comprehensive security framework for multi-cloud environments including compliance and risk management strategies.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Cloud Security</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Compliance</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Risk Management</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">52 Pages</div>
                  <div className="text-base text-white font-medium">Security • Cloud • Best Practices</div>
                </div>

                <div className="bg-gradient-to-br from-lime-800 to-green-950 text-white p-8 rounded-xl shadow-2xl border-2 border-lime-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Enterprise API Management Strategy</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Comprehensive guide to designing, implementing, and managing enterprise API ecosystems for digital transformation.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">API Strategy</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Digital Transformation</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Enterprise Architecture</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">68 Pages</div>
                  <div className="text-base text-white font-medium">API Management • Enterprise • Digital Strategy</div>
                </div>

                <div className="bg-gradient-to-br from-yellow-800 to-amber-950 text-white p-8 rounded-xl shadow-2xl border-2 border-yellow-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Blockchain in Enterprise Operations</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Practical applications of blockchain technology in supply chain, finance, and enterprise data management.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Blockchain</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Supply Chain</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Enterprise Applications</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">74 Pages</div>
                  <div className="text-base text-white font-medium">Blockchain • Enterprise • Practical Applications</div>
                </div>

                <div className="bg-gradient-to-br from-pink-800 to-rose-950 text-white p-8 rounded-xl shadow-2xl border-2 border-pink-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">DevOps Transformation Roadmap</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Step-by-step guide for implementing DevOps practices, tools, and cultural transformation in enterprise environments.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">DevOps</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Cultural Transformation</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Implementation Guide</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">89 Pages</div>
                  <div className="text-base text-white font-medium">DevOps • Transformation • Implementation</div>
                </div>
              </div>
            </TabsContent>

            {/* Industry Reports Tab */}
            <TabsContent value="industry-reports">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Industry Market Reports</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="bg-gradient-to-br from-emerald-800 to-green-950 text-white p-8 rounded-xl shadow-2xl border-2 border-emerald-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">SaaS Market Analysis 2025</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Detailed market analysis covering growth trends, competitive landscape, and emerging opportunities in enterprise SaaS.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Market Analysis</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">SaaS Growth</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Competitive Intelligence</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">$247B Market</div>
                  <div className="text-base text-white font-medium">Market Research • SaaS • Industry Analysis</div>
                </div>

                <div className="bg-gradient-to-br from-blue-800 to-indigo-950 text-white p-8 rounded-xl shadow-2xl border-2 border-blue-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Cybersecurity Investment Trends</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Global cybersecurity spending patterns and emerging threat landscape analysis across industry verticals.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Security Investment</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Threat Analysis</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Industry Trends</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">$185B Investment</div>
                  <div className="text-base text-white font-medium">Cybersecurity • Investment • Threat Intelligence</div>
                </div>

                <div className="bg-gradient-to-br from-purple-800 to-pink-950 text-white p-8 rounded-xl shadow-2xl border-2 border-purple-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Enterprise Automation Landscape</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Comprehensive analysis of robotic process automation and intelligent automation adoption across industries.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Process Automation</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">RPA</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Intelligent Automation</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">68% Adoption</div>
                  <div className="text-base text-white font-medium">Automation • RPA • Process Intelligence</div>
                </div>

                <div className="bg-gradient-to-br from-teal-800 to-emerald-950 text-white p-8 rounded-xl shadow-2xl border-2 border-teal-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Digital Workplace Transformation</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Comprehensive analysis of digital workplace adoption, remote collaboration tools, and productivity technology trends.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Digital Workplace</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Remote Collaboration</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Productivity Tools</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">$142B Market</div>
                  <div className="text-base text-white font-medium">Digital Workplace • Collaboration • Productivity</div>
                </div>

                <div className="bg-gradient-to-br from-red-800 to-orange-950 text-white p-8 rounded-xl shadow-2xl border-2 border-red-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">IoT Enterprise Deployment Trends</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Analysis of Internet of Things implementation across manufacturing, logistics, and smart building applications.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">IoT Deployment</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Smart Buildings</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Industrial IoT</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">$89B Investment</div>
                  <div className="text-base text-white font-medium">IoT • Enterprise • Industrial Applications</div>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-gray-950 text-white p-8 rounded-xl shadow-2xl border-2 border-slate-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Low-Code Platform Market Analysis</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Market dynamics of low-code and no-code platforms driving citizen development and application modernization.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Low-Code Platforms</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Citizen Development</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">App Modernization</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">$32B Growth</div>
                  <div className="text-base text-white font-medium">Low-Code • Development • Platform Market</div>
                </div>
              </div>
            </TabsContent>

            {/* Research Studies Tab */}
            <TabsContent value="research-studies">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Research Studies & Surveys</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="bg-gradient-to-br from-amber-800 to-yellow-950 text-white p-8 rounded-xl shadow-2xl border-2 border-amber-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Technology Decision Maker Survey</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Comprehensive survey of 1,200+ IT executives on technology procurement, vendor selection, and budget allocation.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">IT Executives</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Procurement</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Budget Planning</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">1,200+ Executives</div>
                  <div className="text-base text-white font-medium">Survey Research • IT Decision Making • Procurement</div>
                </div>

                <div className="bg-gradient-to-br from-red-800 to-rose-950 text-white p-8 rounded-xl shadow-2xl border-2 border-red-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Remote Work Technology Impact</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Longitudinal study examining technology adoption changes driven by remote work and hybrid workplace models.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Remote Work</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Hybrid Workplace</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Technology Adoption</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">3-Year Study</div>
                  <div className="text-base text-white font-medium">Workplace Research • Remote Work • Technology Impact</div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-slate-950 text-white p-8 rounded-xl shadow-2xl border-2 border-gray-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Enterprise Software ROI Analysis</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Quantitative analysis of return on investment for major enterprise software implementations across Fortune 1000.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">ROI Analysis</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Enterprise Software</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Implementation</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">245% Average ROI</div>
                  <div className="text-base text-white font-medium">ROI Study • Enterprise Software • Performance Analysis</div>
                </div>

                <div className="bg-gradient-to-br from-blue-800 to-blue-950 text-white p-8 rounded-xl shadow-2xl border-2 border-blue-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Digital Transformation Readiness</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Assessment of organizational readiness for digital transformation across 800+ mid-market and enterprise companies.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Digital Maturity</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Transformation</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Readiness Assessment</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">800+ Companies</div>
                  <div className="text-base text-white font-medium">Digital Assessment • Transformation • Readiness Study</div>
                </div>

                <div className="bg-gradient-to-br from-green-800 to-green-950 text-white p-8 rounded-xl shadow-2xl border-2 border-green-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Technology Spending Trends</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Multi-year analysis of technology spending patterns and budget allocation across industry verticals and company sizes.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Budget Analysis</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Spending Patterns</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Industry Trends</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">5-Year Analysis</div>
                  <div className="text-base text-white font-medium">Budget Research • Spending • Technology Investment</div>
                </div>

                <div className="bg-gradient-to-br from-purple-800 to-purple-950 text-white p-8 rounded-xl shadow-2xl border-2 border-purple-300 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Global Technology Adoption Patterns</h3>
                  <p className="text-white mb-6 text-base font-medium">
                    Cross-regional study examining technology adoption differences across North America, Europe, and Asia-Pacific markets.
                  </p>
                  <div className="mb-6">
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Global Markets</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Regional Analysis</div>
                    <div className="bg-white/20 rounded-md px-3 py-1 text-sm inline-block mr-2 mb-2">Adoption Patterns</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">12 Countries</div>
                  <div className="text-base text-white font-medium">Global Research • Regional Trends • Market Analysis</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Access Premium Technology Intelligence?</h3>
              <p className="text-xl mb-6 max-w-2xl mx-auto">
                Get comprehensive market insights, competitive intelligence, and strategic guidance for your technology decisions.
              </p>
              <Link to="/contact-us">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                  Contact Our Experts
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}