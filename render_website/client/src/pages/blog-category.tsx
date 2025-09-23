import { useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen, ArrowLeft, Search } from "lucide-react";
import { Link } from "wouter";

const blogCategories: Record<string, any> = {
  "data-strategy": {
    name: "Data Strategy",
    description: "Strategic insights on data management, governance, and optimization for business growth",
    articles: [
      {
        title: "Building a Data-Driven Organization: A Strategic Framework",
        excerpt: "Learn how to transform your organization into a data-driven enterprise with proven frameworks and methodologies.",
        date: "December 12, 2024",
        readTime: "10 min read",
        author: "David Thompson",
        slug: "building-data-driven-organization"
      },
      {
        title: "Data Governance Best Practices for Enterprise Organizations",
        excerpt: "Implement robust data governance frameworks to ensure data quality, compliance, and accessibility across your organization.",
        date: "December 5, 2024",
        readTime: "8 min read", 
        author: "Jennifer Walsh",
        slug: "data-governance-best-practices"
      },
      {
        title: "ROI Measurement for Data Investment Programs",
        excerpt: "Quantify the business value of your data initiatives with proven measurement frameworks and KPIs.",
        date: "November 28, 2024",
        readTime: "7 min read",
        author: "Mark Stevens",
        slug: "data-investment-roi-measurement"
      }
    ]
  },
  "marketing-automation": {
    name: "Marketing Automation",
    description: "Advanced strategies and tactics for marketing automation platforms and campaign optimization",
    articles: [
      {
        title: "Advanced Lead Scoring Models for B2B Marketing",
        excerpt: "Implement sophisticated lead scoring algorithms that accurately predict conversion probability and optimize sales efficiency.",
        date: "December 14, 2024",
        readTime: "9 min read",
        author: "Rachel Martinez",
        slug: "advanced-lead-scoring-models"
      },
      {
        title: "Email Marketing Personalization at Scale",
        excerpt: "Create highly personalized email campaigns that drive engagement and conversions using behavioral data and segmentation.",
        date: "December 7, 2024",
        readTime: "6 min read",
        author: "Tom Wilson",
        slug: "email-personalization-at-scale"
      },
      {
        title: "Multi-Channel Campaign Orchestration Strategies",
        excerpt: "Coordinate seamless customer experiences across multiple touchpoints with integrated campaign management.",
        date: "November 30, 2024",
        readTime: "11 min read",
        author: "Lisa Chen",
        slug: "multi-channel-campaign-orchestration"
      }
    ]
  },
  "lead-generation": {
    name: "Lead Generation",
    description: "Proven tactics and strategies for generating high-quality leads and optimizing conversion funnels",
    articles: [
      {
        title: "Intent Data: The Future of B2B Lead Generation",
        excerpt: "Leverage buyer intent signals to identify prospects at the perfect moment in their buying journey.",
        date: "December 11, 2024",
        readTime: "8 min read",
        author: "Kevin Park",
        slug: "intent-data-lead-generation"
      },
      {
        title: "Content Syndication: Scaling Lead Generation Efforts",
        excerpt: "Amplify your content reach and generate qualified leads through strategic content syndication programs.",
        date: "December 3, 2024",
        readTime: "7 min read",
        author: "Amy Rodriguez",
        slug: "content-syndication-lead-generation"
      },
      {
        title: "Conversion Rate Optimization for B2B Landing Pages",
        excerpt: "Optimize your landing pages for maximum conversion with data-driven design and messaging strategies.",
        date: "November 25, 2024",
        readTime: "9 min read",
        author: "Brian Foster",
        slug: "b2b-landing-page-optimization"
      }
    ]
  }
};

export default function BlogCategoryPage() {
  const params = useParams<{ category: string }>();
  const categoryKey = params?.category;
  
  const category = categoryKey ? blogCategories[categoryKey] : null;

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">The blog category you're looking for doesn't exist.</p>
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
      
      {/* Category Header */}
      <section className="py-12 bg-green-400">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/resources" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>
          
          <h1 className="text-4xl font-bold text-blue-900 mb-4">{category.name}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">{category.description}</p>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-500" />
              <span className="text-gray-600">{category.articles.length} Articles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.articles.map((article: any, index: number) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">By {article.author}</span>
                    <Link 
                      href={`/blog/${article.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">Explore Other Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(blogCategories)
              .filter(([key]) => key !== categoryKey)
              .slice(0, 2)
              .map(([key, relatedCategory]) => (
                <Card key={key} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-blue-900 mb-2">{relatedCategory.name}</h3>
                    <p className="text-gray-600 mb-4">{relatedCategory.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{relatedCategory.articles.length} articles</span>
                      <Link 
                        href={`/blog/category/${key}`}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        View Category →
                      </Link>
                    </div>
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