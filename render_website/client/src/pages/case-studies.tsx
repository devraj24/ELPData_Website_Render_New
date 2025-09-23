import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import { Bot, Zap, Database, Mail, Users, Stethoscope, CheckCircle, ArrowRight, X, Calendar, Building, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const caseStudies = [
  {
    id: 1,
    title: "Fortune 500 Manufacturer Implements AI Agents for Supply Chain",
    category: "AI Agents",
    industry: "Manufacturing",
    company: "Global Steel Corp",
    challenge: "Complex supply chain visibility across 47 countries",
    solution: "Custom AI agents monitoring inventory, predicting demand, and optimizing logistics",
    results: ["65% reduction in stockouts", "40% inventory cost savings", "$120M annual efficiency gains"],
    duration: "14 months",
    icon: Bot
  },
  {
    id: 2,
    title: "Healthcare Network Deploys AI Automation for Patient Care",
    category: "AI Automation", 
    industry: "Healthcare",
    company: "MedHealth Systems",
    challenge: "Manual patient scheduling and record management",
    solution: "AI-powered automation for appointment scheduling, record updates, and care coordination",
    results: ["80% reduction in scheduling errors", "50% faster patient processing", "95% patient satisfaction score"],
    duration: "10 months",
    icon: Zap
  },
  {
    id: 3,
    title: "Financial Services Enhances Customer Data with Data Append",
    category: "Data Append",
    industry: "Financial Services", 
    company: "Premier Investment Bank",
    challenge: "Incomplete customer profiles limiting personalized services",
    solution: "Comprehensive data append service enriching 2.3M customer records",
    results: ["85% data completeness improvement", "60% increase in targeted campaign success", "$45M revenue growth"],
    duration: "8 months",
    icon: Database
  },
  {
    id: 4,
    title: "Retail Giant Launches Precision Email Campaigns",
    category: "Email Campaigns",
    industry: "Retail",
    company: "MegaRetail Inc",
    challenge: "Low email engagement and generic messaging",
    solution: "Targeted email campaigns using behavioral data and AI personalization",
    results: ["250% increase in open rates", "180% improvement in click-through rates", "$35M additional revenue"],
    duration: "6 months", 
    icon: Mail
  },
  {
    id: 5,
    title: "Tech Company Builds Custom Engineering Team",
    category: "Customized Engineers",
    industry: "Technology",
    company: "CloudTech Solutions",
    challenge: "Shortage of specialized AI/ML engineers for critical projects",
    solution: "Custom-recruited team of 25 engineers with specific AI expertise",
    results: ["3 major products launched ahead of schedule", "90% engineer retention rate", "$200M valuation increase"],
    duration: "12 months",
    icon: Users
  },
  {
    id: 6,
    title: "Pharmaceutical Company Leverages Doctors Data for Drug Trials",
    category: "Doctors Data",
    industry: "Pharmaceutical",
    company: "BioMed Research Corp",
    challenge: "Difficulty identifying qualified physicians for clinical trials",
    solution: "Comprehensive physicians database with specialty and research history",
    results: ["70% faster trial recruitment", "40% increase in qualified participants", "18-month earlier drug approval"],
    duration: "9 months",
    icon: Stethoscope
  },
  {
    id: 7,
    title: "Insurance Leader Implements AI Agents for Claims Processing",
    category: "AI Agents",
    industry: "Insurance",
    company: "SecureLife Insurance",
    challenge: "Manual claims processing causing customer dissatisfaction",
    solution: "AI agents handling claim verification, fraud detection, and payment processing",
    results: ["85% reduction in processing time", "95% fraud detection accuracy", "$50M cost savings"],
    duration: "11 months",
    icon: Bot
  },
  {
    id: 8,
    title: "Manufacturing Plant Automates Quality Control with AI",
    category: "AI Automation",
    industry: "Manufacturing",
    company: "Precision Parts Inc",
    challenge: "Inconsistent product quality and high rejection rates",
    solution: "AI-powered visual inspection and automated quality control systems",
    results: ["92% reduction in defects", "60% faster quality checks", "$25M quality cost savings"],
    duration: "7 months",
    icon: Zap
  },
  {
    id: 9,
    title: "E-commerce Platform Enriches Product Data",
    category: "Data Append",
    industry: "E-commerce",
    company: "ShopGlobal Marketplace",
    challenge: "Incomplete product information affecting search and recommendations",
    solution: "Data append service for 5M+ product listings with enhanced attributes",
    results: ["75% improvement in search relevance", "45% increase in conversion rates", "$80M revenue boost"],
    duration: "5 months",
    icon: Database
  },
  {
    id: 10,
    title: "SaaS Company Scales with Targeted Email Marketing",
    category: "Email Campaigns",
    industry: "Software",
    company: "DataFlow Analytics",
    challenge: "Low trial-to-paid conversion rates",
    solution: "Behavioral email campaigns targeting specific user actions and preferences",
    results: ["320% increase in trial conversions", "65% improvement in customer lifetime value", "$15M ARR growth"],
    duration: "4 months",
    icon: Mail
  },
  {
    id: 11,
    title: "Aerospace Company Builds Specialized Engineering Team",
    category: "Customized Engineers",
    industry: "Aerospace",
    company: "SkyTech Innovations",
    challenge: "Critical shortage of aerospace software engineers",
    solution: "Custom recruitment of 40 engineers with aerospace and defense clearance",
    results: ["5 defense contracts secured", "100% project delivery on time", "$500M contract pipeline"],
    duration: "16 months",
    icon: Users
  },
  {
    id: 12,
    title: "Medical Device Company Targets Specialists with Precision",
    category: "Doctors Data",
    industry: "Medical Devices",
    company: "CardioTech Medical",
    challenge: "Reaching cardiologists for new device adoption",
    solution: "Targeted database of 15,000+ cardiologists with practice details and preferences",
    results: ["180% increase in device adoption", "50% reduction in sales cycle", "$120M revenue growth"],
    duration: "8 months",
    icon: Stethoscope
  },
  {
    id: 13,
    title: "Energy Company Deploys AI Agents for Grid Management",
    category: "AI Agents",
    industry: "Energy",
    company: "PowerGrid Solutions",
    challenge: "Complex energy distribution and outage prediction",
    solution: "AI agents monitoring grid performance and predicting maintenance needs",
    results: ["70% reduction in unplanned outages", "30% improvement in energy efficiency", "$90M operational savings"],
    duration: "13 months",
    icon: Bot
  },
  {
    id: 14,
    title: "Logistics Leader Automates Route Optimization",
    category: "AI Automation",
    industry: "Logistics",
    company: "FastTrack Logistics",
    challenge: "Inefficient delivery routes increasing costs",
    solution: "AI-powered route optimization and automated dispatch systems",
    results: ["40% reduction in delivery time", "35% fuel cost savings", "$60M annual savings"],
    duration: "9 months",
    icon: Zap
  },
  {
    id: 15,
    title: "Telecom Giant Enhances Customer Profiles",
    category: "Data Append",
    industry: "Telecommunications",
    company: "ConnectCorp",
    challenge: "Limited customer insights affecting service recommendations",
    solution: "Data append for 12M customer records with demographic and behavioral data",
    results: ["90% improvement in service targeting", "55% increase in upsell success", "$200M revenue increase"],
    duration: "6 months",
    icon: Database
  },
  {
    id: 16,
    title: "Financial Advisor Firm Launches Personalized Campaigns",
    category: "Email Campaigns",
    industry: "Financial Services",
    company: "WealthMax Advisors",
    challenge: "Generic communications not resonating with high-net-worth clients",
    solution: "Personalized email campaigns based on investment preferences and life events",
    results: ["400% increase in engagement", "75% improvement in meeting bookings", "$40M assets under management growth"],
    duration: "7 months",
    icon: Mail
  },
  {
    id: 17,
    title: "Automotive Manufacturer Builds EV Engineering Team",
    category: "Customized Engineers",
    industry: "Automotive",
    company: "ElectroMotors Inc",
    challenge: "Lack of electric vehicle expertise for new product line",
    solution: "Specialized team of 60 EV engineers with battery and software expertise",
    results: ["2 EV models launched successfully", "85% faster development cycle", "$1.2B market valuation"],
    duration: "18 months",
    icon: Users
  },
  {
    id: 18,
    title: "Biotech Startup Connects with Research Physicians",
    category: "Doctors Data",
    industry: "Biotechnology",
    company: "GeneTech Research",
    challenge: "Finding physicians for rare disease research collaboration",
    solution: "Database of 5,000+ research physicians with rare disease experience",
    results: ["12 research partnerships established", "60% faster study enrollment", "$50M Series B funding secured"],
    duration: "10 months",
    icon: Stethoscope
  },
  {
    id: 19,
    title: "Banking Institution Implements AI Customer Service",
    category: "AI Agents",
    industry: "Banking",
    company: "National Trust Bank",
    challenge: "High customer service costs and long wait times",
    solution: "AI agents handling 80% of customer inquiries with human escalation",
    results: ["90% reduction in wait times", "60% cost savings in customer service", "95% customer satisfaction"],
    duration: "12 months",
    icon: Bot
  },
  {
    id: 20,
    title: "Real Estate Platform Automates Lead Qualification",
    category: "AI Automation",
    industry: "Real Estate",
    company: "PropertyMax Realty",
    challenge: "Manual lead qualification consuming agent time",
    solution: "AI automation scoring and qualifying leads based on behavior and financial data",
    results: ["85% more qualified leads", "70% reduction in time-to-contact", "$30M additional closings"],
    duration: "6 months",
    icon: Zap
  }
];

const categoryColors: Record<string, string> = {
  "AI Agents": "bg-blue-100 text-blue-800 border-blue-200",
  "AI Automation": "bg-purple-100 text-purple-800 border-purple-200",
  "Data Append": "bg-green-100 text-green-800 border-green-200",
  "Email Campaigns": "bg-orange-100 text-orange-800 border-orange-200",
  "Customized Engineers": "bg-red-100 text-red-800 border-red-200",
  "Doctors Data": "bg-teal-100 text-teal-800 border-teal-200"
};

export default function CaseStudies() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof caseStudies[0] | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Case Studies - Real Customer Results | ELP Data"
        description="Real-world success stories showcasing AI automation, data solutions, targeted campaigns, and custom engineering implementations across Fortune 500 companies."
        keywords="case studies, AI automation, data append, email campaigns, custom engineers, doctors data, enterprise solutions"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-500 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-white mb-8 max-w-4xl mx-auto">
            Real-world success stories showcasing AI automation, data solutions, targeted campaigns, and custom engineering implementations across Fortune 500 companies
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Download Case Studies
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              View Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Solution Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(categoryColors).map((category) => (
              <Badge key={category} className={`${categoryColors[category]} px-6 py-3 text-lg font-medium border`}>
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => {
              const IconComponent = study.icon;
              return (
                <Card key={study.id} className="h-full hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100 hover:border-orange-200">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <Badge className={`${categoryColors[study.category]} text-sm font-medium border`}>
                        {study.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div><strong>Company:</strong> {study.company}</div>
                      <div><strong>Industry:</strong> {study.industry}</div>
                      <div><strong>Duration:</strong> {study.duration}</div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-700 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-700 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mt-auto">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <div className="space-y-2">
                        {study.results.map((result, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <button 
                        onClick={() => setSelectedCaseStudy(study)}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-red-700 transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        View Full Case Study
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Proven Results Across Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">$2.1B+</div>
              <div className="text-slate-300">Total Value Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-slate-300">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">95%</div>
              <div className="text-slate-300">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">15+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join leading enterprises who have transformed their operations with ELP Data's proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-200 flex items-center justify-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                  <selectedCaseStudy.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedCaseStudy.title}</h2>
                  <Badge className={`${categoryColors[selectedCaseStudy.category]} text-sm font-medium border mt-1`}>
                    {selectedCaseStudy.category}
                  </Badge>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCaseStudy(null)}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="p-6">
              {/* Company Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-orange-600" />
                  <div>
                    <div className="text-sm text-gray-600">Company</div>
                    <div className="font-semibold">{selectedCaseStudy.company}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-orange-600" />
                  <div>
                    <div className="text-sm text-gray-600">Industry</div>
                    <div className="font-semibold">{selectedCaseStudy.industry}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-orange-600" />
                  <div>
                    <div className="text-sm text-gray-600">Project Duration</div>
                    <div className="font-semibold">{selectedCaseStudy.duration}</div>
                  </div>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="text-gray-800">{selectedCaseStudy.challenge}</p>
                </div>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Solution</h3>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-gray-800">{selectedCaseStudy.solution}</p>
                </div>
              </div>

              {/* Implementation Details */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation Approach</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Phase 1: Discovery & Planning</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Comprehensive requirements analysis</li>
                        <li>• Stakeholder interviews and workshops</li>
                        <li>• Technical architecture design</li>
                        <li>• Project timeline and milestone definition</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Phase 2: Development & Integration</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Custom solution development</li>
                        <li>• API integrations and data migration</li>
                        <li>• Quality assurance and testing</li>
                        <li>• User training and documentation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Phase 3: Deployment & Launch</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Phased rollout strategy</li>
                        <li>• Performance monitoring setup</li>
                        <li>• Go-live support and troubleshooting</li>
                        <li>• Initial user adoption tracking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Phase 4: Optimization & Support</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Performance optimization</li>
                        <li>• Advanced feature implementation</li>
                        <li>• Ongoing support and maintenance</li>
                        <li>• Success metrics evaluation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Measurable Results</h3>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedCaseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.category === "AI Agents" && (
                    <>
                      <Badge className="bg-blue-100 text-blue-800">Machine Learning</Badge>
                      <Badge className="bg-blue-100 text-blue-800">Natural Language Processing</Badge>
                      <Badge className="bg-blue-100 text-blue-800">TensorFlow</Badge>
                      <Badge className="bg-blue-100 text-blue-800">Python</Badge>
                      <Badge className="bg-blue-100 text-blue-800">API Integration</Badge>
                    </>
                  )}
                  {selectedCaseStudy.category === "AI Automation" && (
                    <>
                      <Badge className="bg-purple-100 text-purple-800">Robotic Process Automation</Badge>
                      <Badge className="bg-purple-100 text-purple-800">Workflow Automation</Badge>
                      <Badge className="bg-purple-100 text-purple-800">Computer Vision</Badge>
                      <Badge className="bg-purple-100 text-purple-800">OCR Technology</Badge>
                      <Badge className="bg-purple-100 text-purple-800">Cloud Computing</Badge>
                    </>
                  )}
                  {selectedCaseStudy.category === "Data Append" && (
                    <>
                      <Badge className="bg-green-100 text-green-800">Data Enrichment</Badge>
                      <Badge className="bg-green-100 text-green-800">API Integrations</Badge>
                      <Badge className="bg-green-100 text-green-800">Data Validation</Badge>
                      <Badge className="bg-green-100 text-green-800">ETL Processes</Badge>
                      <Badge className="bg-green-100 text-green-800">Database Management</Badge>
                    </>
                  )}
                  {selectedCaseStudy.category === "Email Campaigns" && (
                    <>
                      <Badge className="bg-orange-100 text-orange-800">Email Marketing Platforms</Badge>
                      <Badge className="bg-orange-100 text-orange-800">A/B Testing</Badge>
                      <Badge className="bg-orange-100 text-orange-800">Personalization Engine</Badge>
                      <Badge className="bg-orange-100 text-orange-800">Analytics & Tracking</Badge>
                      <Badge className="bg-orange-100 text-orange-800">CRM Integration</Badge>
                    </>
                  )}
                  {selectedCaseStudy.category === "Customized Engineers" && (
                    <>
                      <Badge className="bg-red-100 text-red-800">Technical Recruitment</Badge>
                      <Badge className="bg-red-100 text-red-800">Skills Assessment</Badge>
                      <Badge className="bg-red-100 text-red-800">Team Integration</Badge>
                      <Badge className="bg-red-100 text-red-800">Project Management</Badge>
                      <Badge className="bg-red-100 text-red-800">Performance Tracking</Badge>
                    </>
                  )}
                  {selectedCaseStudy.category === "Doctors Data" && (
                    <>
                      <Badge className="bg-teal-100 text-teal-800">Healthcare Database</Badge>
                      <Badge className="bg-teal-100 text-teal-800">NPI Verification</Badge>
                      <Badge className="bg-teal-100 text-teal-800">Specialty Matching</Badge>
                      <Badge className="bg-teal-100 text-teal-800">HIPAA Compliance</Badge>
                      <Badge className="bg-teal-100 text-teal-800">Data Security</Badge>
                    </>
                  )}
                </div>
              </div>

              {/* Client Testimonial */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Client Testimonial</h3>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <blockquote className="text-gray-800 italic mb-4">
                    "ELP Data's solution exceeded our expectations. The {selectedCaseStudy.category.toLowerCase()} implementation transformed our operations and delivered measurable results that directly impacted our bottom line. Their team's expertise and dedication made this project a tremendous success."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {selectedCaseStudy.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Senior Executive</div>
                      <div className="text-sm text-gray-600">{selectedCaseStudy.company}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-200">
                  Start Your Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}