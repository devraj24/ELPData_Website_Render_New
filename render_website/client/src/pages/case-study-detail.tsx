import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Users, DollarSign, Clock, Building2, Target, CheckCircle, Quote, BarChart3, Calendar, Download } from "lucide-react";
import { Link, useParams } from "wouter";

interface CaseStudyData {
  title: string;
  company: string;
  industry: string;
  employees: string;
  location: string;
  website: string;
  challenge: string;
  solution: string;
  implementation: {
    phase1: string;
    phase2: string;
    phase3: string;
    timeline: string;
  };
  results: {
    [key: string]: string;
  };
  testimonial: {
    quote: string;
    author: string;
    title: string;
  };
  keyBenefits: string[];
  technicalDetails: {
    dataVolume: string;
    integrations: string[];
    platforms: string[];
    compliance: string[];
  };
  timeline: {
    month: string;
    milestone: string;
    impact: string;
  }[];
}

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const caseStudyData: Record<string, CaseStudyData> = {
    "techcorp-lead-quality-improvement": {
      title: "TechCorp Increases Lead Quality by 300% with Data Enrichment",
      company: "TechCorp Solutions",
      industry: "Enterprise Software",
      employees: "5,000-10,000",
      location: "San Francisco, CA",
      website: "techcorpsolutions.com",
      challenge: "TechCorp Solutions was struggling with poor lead quality and low conversion rates. Their sales team was spending 60% of their time on unqualified prospects, resulting in missed quotas and declining revenue growth. The company's existing data was incomplete, outdated, and lacked the depth needed for effective targeting.",
      solution: "Implementation of comprehensive data enrichment services including contact verification, company intelligence, and intent data integration. The solution provided real-time data updates, behavioral insights, and predictive scoring to identify high-value prospects.",
      implementation: {
        phase1: "Data audit and cleansing of existing 100,000+ contact database",
        phase2: "Integration with CRM and marketing automation platforms",
        phase3: "Implementation of real-time enrichment and scoring algorithms",
        timeline: "6-month implementation with monthly optimization reviews"
      },
      results: {
        "Lead Quality": "300% increase in qualified leads",
        "Conversion Rate": "85% improvement in lead-to-customer conversion",
        "Revenue Impact": "$2.5M additional revenue generated",
        "Sales Efficiency": "40% reduction in time spent on unqualified leads",
        "Data Accuracy": "99.2% contact accuracy maintained",
        "Pipeline Value": "$8.5M increase in qualified pipeline"
      },
      testimonial: {
        quote: "The transformation has been remarkable. Our sales team now focuses on qualified prospects, and our conversion rates have never been higher. The ROI was evident within the first quarter.",
        author: "Sarah Mitchell",
        title: "VP of Sales, TechCorp Solutions"
      },
      keyBenefits: [
        "Real-time data enrichment and validation",
        "Predictive lead scoring based on 200+ data points",
        "Seamless CRM integration with automated workflows",
        "Comprehensive company intelligence and technographics",
        "Intent data tracking across multiple channels",
        "Compliance with GDPR and CCPA regulations"
      ],
      technicalDetails: {
        dataVolume: "2.5M contacts processed monthly",
        integrations: ["Salesforce", "HubSpot", "Marketo", "LinkedIn Sales Navigator"],
        platforms: ["Web", "Mobile", "API", "Bulk Processing"],
        compliance: ["GDPR", "CCPA", "SOC 2", "ISO 27001"]
      },
      timeline: [
        {
          month: "Month 1",
          milestone: "Data Audit & Strategy",
          impact: "Identified 40% data quality issues"
        },
        {
          month: "Month 2-3",
          milestone: "Platform Integration",
          impact: "95% system integration completed"
        },
        {
          month: "Month 4-5",
          milestone: "Enrichment Implementation",
          impact: "Real-time processing activated"
        },
        {
          month: "Month 6",
          milestone: "Optimization & Training",
          impact: "Full team adoption achieved"
        }
      ]
    },
    "manufacturing-compliance-risk-reduction": {
      title: "Manufacturing Giant Reduces Compliance Risk by 90%",
      company: "Global Manufacturing Inc.",
      industry: "Manufacturing",
      employees: "25,000+",
      location: "Detroit, MI",
      website: "globalmanufacturing.com",
      challenge: "Global Manufacturing Inc. faced complex regulatory compliance challenges across 15 countries, with manual processes leading to frequent violations, costly penalties, and operational delays. The company needed automated compliance monitoring and risk assessment capabilities.",
      solution: "Deployed comprehensive compliance automation platform with real-time monitoring, predictive risk assessment, and automated reporting across all regulatory frameworks. Integration with existing ERP and quality management systems.",
      implementation: {
        phase1: "Regulatory framework mapping and risk assessment",
        phase2: "Automated monitoring system deployment",
        phase3: "Predictive analytics and reporting dashboard implementation",
        timeline: "12-month rollout across all global facilities"
      },
      results: {
        "Compliance Violations": "90% reduction in regulatory violations",
        "Reporting Efficiency": "75% faster compliance reporting",
        "Cost Savings": "$5.2M in avoided penalties and fines",
        "Risk Assessment": "95% accuracy in predictive risk modeling",
        "Audit Performance": "100% successful regulatory audits",
        "Process Efficiency": "60% reduction in compliance-related delays"
      },
      testimonial: {
        quote: "This solution has transformed our approach to compliance. We've moved from reactive firefighting to proactive risk management, saving millions in potential penalties.",
        author: "Robert Chen",
        title: "Chief Compliance Officer, Global Manufacturing Inc."
      },
      keyBenefits: [
        "Automated regulatory change tracking across 15 countries",
        "Real-time violation detection and alerting",
        "Predictive risk modeling with 95% accuracy",
        "Integrated dashboard for executive reporting",
        "Automated documentation and audit trails",
        "Multi-language support for global operations"
      ],
      technicalDetails: {
        dataVolume: "500GB regulatory data processed daily",
        integrations: ["SAP ERP", "Oracle Quality Management", "Microsoft Power BI"],
        platforms: ["Cloud-based SaaS", "Mobile Apps", "API Integration"],
        compliance: ["ISO 9001", "ISO 14001", "OSHA", "FDA", "CE Marking"]
      },
      timeline: [
        {
          month: "Month 1-3",
          milestone: "Regulatory Mapping",
          impact: "Identified 200+ compliance requirements"
        },
        {
          month: "Month 4-6",
          milestone: "System Integration",
          impact: "Connected all manufacturing facilities"
        },
        {
          month: "Month 7-9",
          milestone: "Automation Deployment",
          impact: "Real-time monitoring activated"
        },
        {
          month: "Month 10-12",
          milestone: "Global Rollout",
          impact: "Full compliance across all regions"
        }
      ]
    }
  };

  const currentStudy = caseStudyData[slug || ""];

  if (!currentStudy) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <Link href="/success-stories">
            <Button>Return to Success Stories</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-3 mb-6">
            <Link href="/success-stories">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Success Stories
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
                Home
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-4xl font-heading font-bold mb-4">{currentStudy.title}</h1>
              <p className="text-xl mb-6">{currentStudy.company}</p>
              
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-blue-100 text-blue-800">{currentStudy.industry}</Badge>
                <Badge className="bg-green-100 text-green-800">{currentStudy.employees} employees</Badge>
                <Badge className="bg-purple-100 text-purple-800">{currentStudy.location}</Badge>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-bold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Industry:</span>
                  <span className="font-semibold">{currentStudy.industry}</span>
                </div>
                <div className="flex justify-between">
                  <span>Company Size:</span>
                  <span className="font-semibold">{currentStudy.employees}</span>
                </div>
                <div className="flex justify-between">
                  <span>Timeline:</span>
                  <span className="font-semibold">{currentStudy.implementation.timeline}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-red-600" />
                    The Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{currentStudy.challenge}</p>
                </CardContent>
              </Card>

              {/* Solution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-blue-600" />
                    Our Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-6">{currentStudy.solution}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-4">Key Benefits Delivered:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {currentStudy.keyBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Implementation Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-purple-600" />
                    Implementation Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {currentStudy.timeline.map((phase, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{phase.month}</h4>
                          <p className="text-gray-700 mb-1">{phase.milestone}</p>
                          <p className="text-sm text-green-600 font-medium">{phase.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardContent className="p-8">
                  <Quote className="w-12 h-12 text-blue-600 mb-4" />
                  <blockquote className="text-lg text-gray-700 mb-6 italic">
                    "{currentStudy.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {currentStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{currentStudy.testimonial.author}</p>
                      <p className="text-gray-600">{currentStudy.testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Results */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    Key Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(currentStudy.results).map(([key, value], index) => (
                      <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                        <div className="text-2xl font-bold text-green-600 mb-1">{value}</div>
                        <div className="text-sm text-gray-600">{key}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                    Technical Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data Volume</h4>
                    <p className="text-sm text-gray-600">{currentStudy.technicalDetails.dataVolume}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Integrations</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentStudy.technicalDetails.integrations.map((integration, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {integration}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Compliance</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentStudy.technicalDetails.compliance.map((cert, index) => (
                        <Badge key={index} variant="outline" className="text-xs bg-green-50 text-green-600">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Download CTA */}
              <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <CardContent className="p-6 text-center">
                  <Download className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Download Full Case Study</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Get the complete case study with detailed implementation guide
                  </p>
                  <Button className="w-full bg-white text-green-600 hover:bg-gray-100">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Ready to Achieve Similar Results</h2>
          <p className="text-xl mb-8">
            Schedule a consultation to learn how we can help transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Users className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Request Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}