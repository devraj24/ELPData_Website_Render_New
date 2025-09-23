import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen, TrendingUp, Users, FileText, Video, Download, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function ResourcesPage() {
  const featuredArticles = [
    {
      title: "The Future of B2B Data Intelligence: Trends and Predictions for 2024",
      category: "Industry Analysis",
      date: "December 15, 2024",
      readTime: "8 min read",
      excerpt: "Explore the emerging trends in B2B data intelligence, including AI-powered insights, predictive analytics, and the evolution of customer data platforms.",
      author: "Sarah Johnson, Data Strategy Director",
      slug: "b2b-data-intelligence-trends-2024"
    },
    {
      title: "GDPR Compliance in B2B Marketing: A Complete Guide",
      category: "Compliance",
      date: "December 10, 2024", 
      readTime: "12 min read",
      excerpt: "Navigate the complexities of GDPR compliance in B2B marketing with our comprehensive guide covering consent management, data processing, and privacy protection.",
      author: "Michael Chen, Legal & Compliance Expert",
      slug: "gdpr-compliance-b2b-marketing"
    },
    {
      title: "Account-Based Marketing ROI: Measuring Success in 2024",
      category: "Marketing Strategy",
      date: "December 8, 2024",
      readTime: "6 min read",
      excerpt: "Learn how to measure and optimize your ABM campaigns with key metrics, attribution models, and ROI calculation methodologies.",
      author: "Lisa Rodriguez, ABM Specialist",
      slug: "abm-roi-measurement-2024"
    }
  ];

  const industryReports = [
    {
      title: "State of B2B Data Quality Report 2024",
      description: "Comprehensive analysis of data quality trends, challenges, and best practices across industries",
      pages: "45 pages",
      format: "PDF",
      category: "Data Quality",
      slug: "state-b2b-data-quality-2024"
    },
    {
      title: "Technology Adoption Trends in Enterprise Software",
      description: "In-depth research on enterprise software adoption patterns and decision-making factors",
      pages: "38 pages", 
      format: "PDF",
      category: "Technology Trends",
      slug: "technology-adoption-enterprise-software"
    },
    {
      title: "Marketing Automation ROI Benchmark Study",
      description: "Benchmarking data on marketing automation performance across different company sizes and industries",
      pages: "52 pages",
      format: "PDF", 
      category: "Marketing Analytics",
      slug: "marketing-automation-roi-benchmark"
    }
  ];

  const webinars = [
    {
      title: "Building High-Converting ABM Campaigns with Quality Data",
      date: "January 18, 2025",
      time: "2:00 PM EST",
      duration: "45 minutes",
      speakers: ["David Kim", "Jennifer Walsh"],
      status: "upcoming",
      slug: "building-high-converting-abm-campaigns"
    },
    {
      title: "Data Privacy and Compliance in B2B Marketing",
      date: "December 20, 2024",
      time: "1:00 PM EST", 
      duration: "60 minutes",
      speakers: ["Amanda Foster", "Robert Martinez"],
      status: "recorded",
      slug: "data-privacy-compliance"
    },
    {
      title: "Intent Data Strategies for Sales Acceleration",
      date: "December 5, 2024",
      time: "3:00 PM EST",
      duration: "50 minutes",
      speakers: ["Kevin Thompson", "Maria Santos"],
      status: "recorded",
      slug: "intent-data-sales-acceleration"
    }
  ];

  const caseStudies = [
    {
      title: "How TechCorp Increased Lead Quality by 300% with Data Enrichment",
      industry: "Technology",
      challenge: "Poor lead quality and low conversion rates",
      solution: "Implemented comprehensive data enrichment and lead scoring",
      results: "300% increase in lead quality, 150% improvement in conversion rates"
    },
    {
      title: "Global Manufacturing Company Reduces Customer Acquisition Cost by 40%",
      industry: "Manufacturing", 
      challenge: "High customer acquisition costs and inefficient targeting",
      solution: "Deployed targeted account-based marketing with premium data",
      results: "40% reduction in CAC, 25% increase in deal size"
    },
    {
      title: "Financial Services Firm Achieves 95% Email Deliverability",
      industry: "Financial Services",
      challenge: "Low email deliverability and data quality issues", 
      solution: "Comprehensive data cleansing and verification program",
      results: "95% email deliverability, 60% increase in engagement rates"
    }
  ];

  const blogCategories = [
    { name: "Data Strategy", count: 45, color: "blue", slug: "data-strategy" },
    { name: "Marketing Automation", count: 38, color: "green", slug: "marketing-automation" },
    { name: "Account-Based Marketing", count: 32, color: "purple", slug: "account-based-marketing" },
    { name: "Lead Generation", count: 28, color: "orange", slug: "lead-generation" },
    { name: "Data Quality", count: 25, color: "teal", slug: "data-quality" },
    { name: "Compliance", count: 22, color: "red", slug: "compliance" },
    { name: "Technology Trends", count: 35, color: "indigo", slug: "technology-trends" },
    { name: "Customer Intelligence", count: 30, color: "pink", slug: "customer-intelligence" }
  ];

  const recentNews = [
    {
      title: "ELP Data Expands Global Coverage to Include 15 New Markets",
      date: "December 12, 2024",
      summary: "Enhanced data coverage now includes emerging markets in Southeast Asia and Eastern Europe"
    },
    {
      title: "New AI-Powered Intent Data Platform Launches",
      date: "December 5, 2024", 
      summary: "Advanced machine learning algorithms now identify buying signals with 95% accuracy"
    },
    {
      title: "Partnership with Leading CRM Providers Announced",
      date: "November 28, 2024",
      summary: "Native integrations with top CRM platforms streamline data synchronization"
    },
    {
      title: "Industry Recognition: Best Data Quality Solution Award",
      date: "November 20, 2024",
      summary: "ELP Data receives prestigious industry award for data quality excellence"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Industry News & Insights</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Stay informed with the latest industry news, expert articles, and insights in B2B data intelligence and marketing. Access our comprehensive library of reports, blog posts, webinars, and research analysis.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-white/80">Industry Reports</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">1K+</div>
                  <div className="text-sm text-white/80">Blog Articles</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">200+</div>
                  <div className="text-sm text-white/80">Case Studies</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">Featured Content</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest insights and analysis on B2B data trends, marketing strategies, and industry developments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="border-2 border-blue-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <Link href={`/blog/${article.slug}`} className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      Read More <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">By {article.author}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Reports */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">Industry Reports & Research</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access comprehensive research reports and industry analysis to stay ahead of market trends
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industryReports.map((report, index) => (
              <Card key={index} className="border-2 border-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-6 h-6 text-green-500" />
                    {report.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{report.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Pages:</span>
                      <span className="text-sm font-medium">{report.pages}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Format:</span>
                      <span className="text-sm font-medium">{report.format}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="mb-4">{report.category}</Badge>
                  <div className="flex gap-2">
                    <Link href={`/report/${report.slug}`} className="flex-1 bg-green-600 text-white text-center py-2 px-4 rounded hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">Webinars & Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our expert-led webinars and events to learn about the latest trends and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <Card key={index} className="border-2 border-purple-500">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={webinar.status === 'upcoming' ? 'default' : 'secondary'}>
                      {webinar.status === 'upcoming' ? 'Upcoming' : 'Recorded'}
                    </Badge>
                    <span className="text-sm text-gray-500">{webinar.duration}</span>
                  </div>
                  <CardTitle className="text-lg">{webinar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-500" />
                      <span className="text-sm">{webinar.date} at {webinar.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span className="text-sm">Speakers: {webinar.speakers.join(", ")}</span>
                    </div>
                  </div>
                  <Link href={`/webinar/${webinar.slug}`} className="w-full bg-purple-600 text-white text-center py-2 px-4 rounded hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                    {webinar.status === 'upcoming' ? (
                      <>
                        <Calendar className="w-4 h-4" />
                        Register Now
                      </>
                    ) : (
                      <>
                        <Video className="w-4 h-4" />
                        Watch Recording
                      </>
                    )}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">Success Stories & Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn how organizations have achieved remarkable results with our data solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-2 border-orange-500">
                <CardHeader>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                  <Badge variant="outline">{study.industry}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Challenge:</h4>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Solution:</h4>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Results:</h4>
                      <p className="text-sm font-medium text-green-600">{study.results}</p>
                    </div>
                  </div>
                  <a href="#" className="mt-4 w-full bg-orange-600 text-white text-center py-2 px-4 rounded hover:bg-orange-700 transition-colors flex items-center justify-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Read Full Case Study
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">Blog Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our extensive blog content organized by topic and expertise area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {blogCategories.map((category, index) => (
              <Link key={index} href={`/blog/category/${category.slug}`}>
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-2">{category.name}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-1">{category.count}</div>
                    <div className="text-sm text-gray-500">Articles</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">Company News & Updates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest company announcements, product releases, and industry recognition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentNews.map((news, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>
                  <h3 className="font-semibold text-blue-900 mb-2">{news.title}</h3>
                  <p className="text-gray-600">{news.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-blue-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated with Industry Insights
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Subscribe to our newsletter for weekly insights, industry reports, and expert analysis delivered to your inbox
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Subscribe to Newsletter
            </a>
            <a 
              href="#" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold"
            >
              Browse All Resources
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}