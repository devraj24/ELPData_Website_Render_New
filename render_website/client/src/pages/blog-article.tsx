import { useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, Share, BookOpen } from "lucide-react";
import { Link } from "wouter";

const blogArticles: Record<string, any> = {
  "b2b-data-intelligence-trends-2024": {
    title: "The Future of B2B Data Intelligence: Trends and Predictions for 2024",
    category: "Industry Analysis",
    date: "December 15, 2024",
    readTime: "8 min read",
    author: "Sarah Johnson, Data Strategy Director",
    content: `
      <p>The B2B data intelligence landscape is rapidly evolving, driven by advances in artificial intelligence, machine learning, and data processing capabilities. As we move into 2024, organizations are increasingly recognizing the strategic value of comprehensive data intelligence in driving revenue growth and operational efficiency.</p>

      <h2>Key Trends Shaping B2B Data Intelligence</h2>
      
      <h3>1. AI-Powered Predictive Analytics</h3>
      <p>Machine learning algorithms are becoming more sophisticated in predicting customer behavior, identifying high-value prospects, and optimizing marketing campaigns. Organizations leveraging AI-powered analytics are seeing 35% improvements in lead quality and 28% increases in conversion rates.</p>

      <h3>2. Real-Time Data Processing</h3>
      <p>The demand for real-time insights is driving investments in streaming data platforms and edge computing. Companies need immediate access to customer intelligence to respond quickly to market changes and competitive threats.</p>

      <h3>3. Enhanced Data Privacy and Compliance</h3>
      <p>With evolving regulations like GDPR and CCPA, organizations are prioritizing privacy-first data strategies. This includes implementing robust consent management systems and ensuring data minimization practices.</p>

      <h3>4. Integration of Intent Data</h3>
      <p>Intent data is becoming a cornerstone of modern B2B marketing strategies. By understanding when prospects are actively researching solutions, organizations can time their outreach for maximum impact.</p>

      <h2>Predictions for 2024</h2>
      
      <p>We expect to see continued growth in:</p>
      <ul>
        <li>Cross-platform data unification solutions</li>
        <li>Advanced customer journey mapping capabilities</li>
        <li>Automated data quality management systems</li>
        <li>Enhanced technographic intelligence platforms</li>
      </ul>

      <h2>Strategic Recommendations</h2>
      
      <p>Organizations should focus on building comprehensive data strategies that prioritize quality over quantity, implement robust governance frameworks, and invest in team capabilities to leverage advanced analytics tools effectively.</p>
    `
  },
  "gdpr-compliance-b2b-marketing": {
    title: "GDPR Compliance in B2B Marketing: A Complete Guide",
    category: "Compliance",
    date: "December 10, 2024",
    readTime: "12 min read",
    author: "Michael Chen, Legal & Compliance Expert",
    content: `
      <p>The General Data Protection Regulation (GDPR) has fundamentally changed how organizations handle personal data in B2B marketing. Understanding and implementing proper compliance measures is not just a legal requirement—it's essential for building trust with prospects and customers.</p>

      <h2>Key GDPR Principles for B2B Marketing</h2>
      
      <h3>Lawful Basis for Processing</h3>
      <p>B2B marketers must establish a lawful basis for processing personal data. The most common bases include:</p>
      <ul>
        <li>Consent: Explicit, informed agreement from the data subject</li>
        <li>Legitimate interest: When processing serves a legitimate business purpose</li>
        <li>Contract: When processing is necessary for contractual obligations</li>
      </ul>

      <h3>Data Subject Rights</h3>
      <p>Individuals have specific rights under GDPR, including:</p>
      <ul>
        <li>Right to access their personal data</li>
        <li>Right to rectification of inaccurate data</li>
        <li>Right to erasure (right to be forgotten)</li>
        <li>Right to data portability</li>
        <li>Right to object to processing</li>
      </ul>

      <h2>Practical Implementation Steps</h2>
      
      <h3>1. Data Audit and Mapping</h3>
      <p>Conduct a comprehensive audit of all personal data processing activities. Document data sources, processing purposes, retention periods, and sharing arrangements.</p>

      <h3>2. Privacy Policy Updates</h3>
      <p>Ensure privacy policies are clear, comprehensive, and easily accessible. Include specific information about B2B marketing activities and data subject rights.</p>

      <h3>3. Consent Management</h3>
      <p>Implement robust consent management systems that allow for granular consent preferences and easy withdrawal mechanisms.</p>

      <h3>4. Vendor Due Diligence</h3>
      <p>Ensure all data processors and third-party vendors maintain GDPR compliance standards through proper contractual agreements and regular assessments.</p>

      <h2>Best Practices for Ongoing Compliance</h2>
      
      <p>Maintain compliance through regular training, privacy impact assessments, incident response procedures, and continuous monitoring of data processing activities.</p>
    `
  },
  "abm-roi-measurement-2024": {
    title: "Account-Based Marketing ROI: Measuring Success in 2024",
    category: "Marketing Strategy", 
    date: "December 8, 2024",
    readTime: "6 min read",
    author: "Lisa Rodriguez, ABM Specialist",
    content: `
      <p>Measuring Account-Based Marketing (ABM) ROI requires a different approach than traditional marketing metrics. Success in ABM is measured not just by volume, but by the quality of engagement and progression of target accounts through the sales funnel.</p>

      <h2>Key ABM Metrics to Track</h2>
      
      <h3>Account Engagement Metrics</h3>
      <ul>
        <li>Account engagement score based on multi-touch interactions</li>
        <li>Percentage of target accounts showing engagement</li>
        <li>Depth of engagement within buying committees</li>
        <li>Content consumption patterns by account</li>
      </ul>

      <h3>Pipeline and Revenue Metrics</h3>
      <ul>
        <li>Pipeline velocity for ABM accounts vs. non-ABM accounts</li>
        <li>Average deal size comparison</li>
        <li>Win rate improvements</li>
        <li>Customer lifetime value (CLV) increases</li>
      </ul>

      <h2>Attribution Models for ABM</h2>
      
      <h3>Multi-Touch Attribution</h3>
      <p>Implement attribution models that account for multiple touchpoints across various channels and stakeholders within target accounts. This provides a more accurate picture of campaign influence.</p>

      <h3>Time-Decay Attribution</h3>
      <p>Give more weight to recent interactions while still acknowledging earlier touchpoints that may have initiated the buying process.</p>

      <h2>Calculating ABM ROI</h2>
      
      <p>Use the formula: (ABM Revenue - ABM Investment) / ABM Investment × 100</p>
      
      <p>Include all costs: technology platforms, content creation, advertising spend, personnel time, and data acquisition costs.</p>

      <h2>Advanced Analytics for ABM</h2>
      
      <h3>Predictive Scoring</h3>
      <p>Implement predictive models to identify accounts most likely to convert and prioritize resource allocation accordingly.</p>

      <h3>Cohort Analysis</h3>
      <p>Track account progression through defined stages to identify bottlenecks and optimization opportunities.</p>

      <h2>Reporting and Optimization</h2>
      
      <p>Create executive dashboards that show both leading indicators (engagement metrics) and lagging indicators (revenue metrics) to provide a complete view of ABM performance and guide strategic decisions.</p>
    `
  }
};

export default function BlogArticlePage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  
  const article = slug ? blogArticles[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
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
      
      {/* Article Header */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/resources" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>
          
          <Badge variant="secondary" className="mb-4">{article.category}</Badge>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">{article.title}</h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {article.date}
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              {article.readTime}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {article.author}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              <Share className="w-4 h-4" />
              Share Article
            </button>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <Card>
            <CardContent className="p-8">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-blue-900 prose-links:text-blue-600 prose-strong:text-blue-900"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(blogArticles)
              .filter(([key]) => key !== slug)
              .slice(0, 2)
              .map(([key, relatedArticle]) => (
                <Card key={key} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-2">{relatedArticle.category}</Badge>
                    <h3 className="font-bold text-blue-900 mb-2">{relatedArticle.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span>{relatedArticle.date}</span>
                      <span>{relatedArticle.readTime}</span>
                    </div>
                    <Link 
                      href={`/blog/${key}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read More →
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