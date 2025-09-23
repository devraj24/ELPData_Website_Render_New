import { useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Calendar, BarChart, ArrowLeft, Eye, Share } from "lucide-react";
import { Link } from "wouter";

const reportData: Record<string, any> = {
  "state-b2b-data-quality-2024": {
    title: "State of B2B Data Quality Report 2024",
    description: "Comprehensive analysis of data quality trends, challenges, and best practices across industries. This report examines how organizations are managing data quality initiatives and the impact on business outcomes.",
    pages: "45 pages",
    format: "PDF",
    category: "Data Quality",
    publishDate: "November 2024",
    author: "ELP Data Research Team",
    executiveSummary: "The 2024 State of B2B Data Quality Report reveals critical insights into how organizations are approaching data quality management. Based on survey responses from 500+ data professionals across various industries, this report highlights the growing importance of data quality in driving business success.",
    keyFindings: [
      "73% of organizations report data quality as a top business priority",
      "Poor data quality costs businesses an average of $12.9 million annually",
      "Organizations with mature data quality programs see 25% higher revenue growth",
      "Real-time data validation adoption increased by 45% year-over-year",
      "GDPR compliance requirements drive 60% of data quality initiatives"
    ],
    sections: [
      "Executive Summary",
      "Current State of Data Quality",
      "Industry Benchmarks and Trends", 
      "Technology Adoption Patterns",
      "ROI and Business Impact Analysis",
      "Best Practices and Recommendations",
      "Future Outlook and Predictions"
    ],
    methodology: "This report is based on primary research conducted between August and October 2024, including surveys of 523 data professionals, interviews with 45 data leaders, and analysis of data quality metrics from over 100 organizations.",
    targetAudience: ["Chief Data Officers", "Data Management Teams", "IT Directors", "Business Intelligence Professionals", "Compliance Officers"]
  },
  "technology-adoption-enterprise-software": {
    title: "Technology Adoption Trends in Enterprise Software",
    description: "In-depth research on enterprise software adoption patterns and decision-making factors. This comprehensive study examines how organizations evaluate, select, and implement enterprise technology solutions.",
    pages: "38 pages",
    format: "PDF", 
    category: "Technology Trends",
    publishDate: "October 2024",
    author: "ELP Data Technology Research Division",
    executiveSummary: "Enterprise software adoption continues to accelerate, driven by digital transformation initiatives and the need for operational efficiency. This report analyzes adoption patterns across 15 major software categories and identifies key factors influencing technology decisions.",
    keyFindings: [
      "Cloud-first strategies adopted by 82% of enterprises",
      "AI integration becomes standard requirement for 67% of new software purchases",
      "Average software evaluation cycle reduced from 12 to 8 months",
      "Security concerns rank as #1 factor in technology selection",
      "Remote work capabilities influence 78% of software decisions"
    ],
    sections: [
      "Executive Summary",
      "Enterprise Software Landscape Overview",
      "Adoption Patterns by Industry",
      "Decision-Making Process Analysis",
      "Budget Allocation and Investment Trends",
      "Implementation Challenges and Solutions",
      "Future Technology Roadmaps"
    ],
    methodology: "Research methodology includes analysis of technology spending data from 200+ enterprises, surveys of 350 IT decision-makers, and case studies from 25 successful implementation projects across various industries.",
    targetAudience: ["IT Directors", "Chief Technology Officers", "Software Vendors", "Technology Consultants", "Procurement Teams"]
  },
  "marketing-automation-roi-benchmark": {
    title: "Marketing Automation ROI Benchmark Study",
    description: "Benchmarking data on marketing automation performance across different company sizes and industries. This study provides comprehensive ROI analysis and performance metrics for marketing automation platforms.",
    pages: "52 pages",
    format: "PDF",
    category: "Marketing Analytics", 
    publishDate: "September 2024",
    author: "ELP Data Marketing Intelligence Team",
    executiveSummary: "Marketing automation continues to deliver strong ROI for B2B organizations, with mature implementations showing significantly higher returns. This benchmark study analyzes performance data from 300+ marketing automation deployments to identify success factors and best practices.",
    keyFindings: [
      "Average marketing automation ROI of 435% across all implementations",
      "Mature programs (3+ years) achieve 65% higher ROI than new implementations",
      "Lead quality improvements of 58% reported by high-performing organizations",
      "Email marketing remains the highest ROI channel at 380% average return",
      "Account-based marketing integration increases overall ROI by 42%"
    ],
    sections: [
      "Executive Summary",
      "Methodology and Research Approach",
      "ROI Analysis by Company Size",
      "Industry Performance Benchmarks",
      "Channel Performance Analysis",
      "Implementation Maturity Impact",
      "Best Practices for ROI Optimization"
    ],
    methodology: "This benchmark study analyzes performance data from 312 marketing automation implementations across 18 industries, including detailed ROI calculations, campaign performance metrics, and qualitative assessments from marketing leaders.",
    targetAudience: ["Marketing Directors", "Marketing Operations Managers", "CMOs", "Revenue Operations Teams", "Marketing Technology Specialists"]
  }
};

export default function IndustryReportPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  
  const report = slug ? reportData[slug] : null;

  if (!report) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Report Not Found</h1>
          <p className="text-gray-600 mb-8">The industry report you're looking for doesn't exist.</p>
          <Link href="/resources" className="text-blue-600 hover:text-blue-700">
            ← Back to Resources
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Report Header */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/resources" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Badge variant="secondary" className="mb-4">{report.category}</Badge>
              <h1 className="text-4xl font-bold text-blue-900 mb-4">{report.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{report.description}</p>
              
              <div className="flex flex-wrap gap-6 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span>Published {report.publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <span>{report.pages}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart className="w-5 h-5 text-blue-500" />
                  <span>{report.format}</span>
                </div>
              </div>
              
              <p className="text-gray-700 text-sm">
                <strong>Author:</strong> {report.author}
              </p>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle className="text-center">Download Report</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold mb-4 flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Download PDF
                  </button>
                  <p className="text-sm text-gray-600 mb-4">
                    Free download. Get instant access to the complete {report.pages} report.
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-600 py-2 px-4 rounded hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                      <Share className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Executive Summary</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed">{report.executiveSummary}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Key Findings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {report.keyFindings.map((finding: string, index: number) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{finding}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Report Contents */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Report Contents</h2>
              <div className="space-y-4">
                {report.sections.map((section: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{section}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Target Audience</h2>
              <div className="space-y-3 mb-8">
                {report.targetAudience.map((audience: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                    <span className="text-gray-700">{audience}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-4">Research Methodology</h3>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-700 text-sm">{report.methodology}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Reports */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Related Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(reportData)
              .filter(([key]) => key !== slug)
              .slice(0, 2)
              .map(([key, relatedReport]) => (
                <Card key={key} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">{relatedReport.category}</Badge>
                    <h3 className="font-bold text-blue-900 mb-3">{relatedReport.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span>{relatedReport.publishDate}</span>
                      <span>{relatedReport.pages}</span>
                    </div>
                    <Link 
                      href={`/report/${key}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View Report →
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}