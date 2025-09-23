import { Calendar, User, Clock, TrendingUp, ArrowRight, Search, Tag } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'wouter';
import { useState } from 'react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const blogPosts = [
    {
      id: 1,
      title: "🚨 Are You Targeting VMware ESXi Customers? Here's What You Need to Know! 🚨",
      excerpt: "We've identified 121,976 VMware ESXi customers who are actively looking to migrate or replace their current setup—and we're giving you the opportunity to reach them first.",
      author: "ELP Data Research Team",
      date: "December 2024",
      readTime: "5 min read",
      category: "Intelligence Reports",
      slug: "/blog/vmware-esxi-migration-intelligence",
      featured: true,
      tags: ["VMware", "ESXi", "Migration", "Intent Data", "B2B Marketing"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 12,
      title: "B2B Data Vendors Comparison 2025: Why ELP Data Leads the Market",
      excerpt: "An exclusive comparison of top B2B data providers including ZoomInfo, Lusha, Clearbit, and D&B. Discover why ELP Data delivers superior accuracy rates, comprehensive coverage, and unmatched value for enterprise clients.",
      author: "SAM Worthing",
      date: "September 2025",
      readTime: "15 min read",
      category: "Market Analysis",
      slug: "/blog/data-vendors-comparison-2025",
      featured: false,
      tags: ["Data Vendors", "Market Comparison", "B2B Data", "Lead Generation", "Sales Intelligence"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "🚀 Client Success Story – Driving Impact in Financial Close & Reporting 🚀",
      excerpt: "Discover how ELP Data delivered 92,981 companies and 361,002 verified contacts, enabling our client to achieve extraordinary engagement by targeting Financial Close & Reporting software challenges with precision.",
      author: "ELP Data Success Team",
      date: "January 2025",
      readTime: "8 min read",
      category: "Intelligence Reports",
      slug: "/blog/financial-close-reporting-success-story",
      featured: false,
      tags: ["Financial Close", "Client Success", "B2B Data", "CFO Outreach", "Financial Reporting"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "🚀 Driving Impact in ERP Software Markets 🚀",
      excerpt: "How ELP Data delivered 487,592 ERP companies and 1,847,328 verified contacts to accelerate Enterprise Resource Planning software sales and connect with decision-makers faster.",
      author: "ELP Data Enterprise Team",
      date: "January 2025",
      readTime: "10 min read",
      category: "Market Analysis",
      slug: "/blog/erp-software-success-story",
      featured: false,
      tags: ["ERP", "Enterprise Software", "B2B Data", "Digital Transformation"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "🚀 Transforming SAP BPC Outreach Performance 🚀",
      excerpt: "How ELP Data delivered 78,429 SAP BPC companies and 294,183 verified contacts to accelerate Business Planning and Consolidation software sales.",
      author: "ELP Data SAP Team",
      date: "January 2025",
      readTime: "8 min read",
      category: "Market Analysis",
      slug: "/blog/sap-bpc-success-story",
      featured: false,
      tags: ["SAP BPC", "Business Planning", "Enterprise Performance Management"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "🚀 Transportation Management System Market Intelligence 🚀",
      excerpt: "How ELP Data delivered 156,847 TMS companies and 589,234 verified contacts to accelerate transportation and logistics software sales.",
      author: "ELP Data Logistics Team",
      date: "January 2025",
      readTime: "9 min read",
      category: "Industry Reports",
      slug: "/blog/tms-software-success",
      featured: false,
      tags: ["TMS", "Transportation", "Logistics", "Supply Chain"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "🚀 HR Technology Market Intelligence Success 🚀",
      excerpt: "How ELP Data delivered 324,891 HR software companies and 1,247,563 verified contacts to accelerate Human Resources technology sales.",
      author: "ELP Data HR Tech Team",
      date: "January 2025",
      readTime: "9 min read",
      category: "Market Analysis",
      slug: "/blog/hr-software-success",
      featured: false,
      tags: ["HR Software", "HRIS", "Human Resources", "Workforce Management"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 7,
      title: "🚀 Manufacturing Technology Market Intelligence 🚀",
      excerpt: "How ELP Data delivered 198,542 manufacturing software companies and 743,891 verified contacts to accelerate industrial technology sales.",
      author: "ELP Data Manufacturing Team",
      date: "January 2025",
      readTime: "10 min read",
      category: "Industry Reports",
      slug: "/blog/manufacturing-software-success",
      featured: false,
      tags: ["Manufacturing Software", "MES", "Industry 4.0", "Smart Manufacturing"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 8,
      title: "🚀 Healthcare Technology Market Intelligence 🚀",
      excerpt: "How ELP Data delivered 278,639 healthcare software companies and 1,094,527 verified contacts to accelerate health technology sales.",
      author: "ELP Data Healthcare Team",
      date: "January 2025",
      readTime: "11 min read",
      category: "Market Analysis",
      slug: "/blog/healthcare-software-success",
      featured: false,
      tags: ["Healthcare Software", "EMR", "Health Tech", "Medical Software"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 9,
      title: "🚀 Mainframe Modernization Market Intelligence 🚀",
      excerpt: "How ELP Data delivered 8,738 mainframe companies and 28,911 verified contacts to accelerate legacy system modernization sales.",
      author: "ELP Data Legacy Systems Team",
      date: "January 2025",
      readTime: "12 min read",
      category: "Industry Reports",
      slug: "/blog/mainframe-modernization-success",
      featured: false,
      tags: ["Mainframe", "Legacy Systems", "IBM z/OS", "Digital Transformation"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 10,
      title: "🚀 Navigating the Challenges of PEO Data 🚀",
      excerpt: "Professional Employer Organizations face unique data management challenges. Discover key obstacles including data accuracy, integration issues, compliance risks, and reporting difficulties.",
      author: "ELP Data HR Tech Team",
      date: "December 2024",
      readTime: "6 min read",
      category: "Market Analysis",
      slug: "/blog/peo-data-challenges",
      featured: false,
      tags: ["PEO", "Data Management", "HR Tech", "Compliance"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 11,
      title: "The State of Enterprise Technology Migration in 2024",
      excerpt: "A comprehensive analysis of technology migration trends, covering the most significant shifts in enterprise infrastructure and the driving factors behind them.",
      author: "ELP Data Analysts",
      date: "November 2024",
      readTime: "12 min read",
      category: "Industry Reports",
      slug: "/blog/enterprise-technology-migration-2024",
      featured: false,
      tags: ["Enterprise Technology", "Migration Trends", "Industry Analysis"],
      image: "/api/placeholder/600/400"
    }
  ];

  const categories = [
    "Intelligence Reports",
    "Market Analysis", 
    "Industry Reports"
  ];

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All Categories' 
    ? blogPosts.filter(post => !post.featured)
    : blogPosts.filter(post => !post.featured && post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="ELP Data Blog - Technology Intelligence & Market Insights"
        description="Stay ahead with the latest technology intelligence, market analysis, and data-driven insights from ELP Data's research team. Expert analysis on enterprise technology trends."
        keywords="technology intelligence blog, market analysis, enterprise technology trends, B2B insights, data intelligence"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-0 px-6 py-3 text-lg font-semibold mb-8">
              Technology Intelligence Blog
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Data-Driven Insights
              </span>
              <br />
              <span className="text-white">for Modern Businesses</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of technology trends with expert analysis, market intelligence, and actionable insights from our research team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or technologies..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 text-lg font-semibold mb-8">
              Featured Article
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Latest Intelligence Report</h2>
          </div>

          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 p-8 lg:p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Badge className="bg-red-600 text-white px-4 py-2">
                      {post.category}
                    </Badge>
                    <Badge variant="outline" className="border-orange-300 text-orange-700">
                      Featured
                    </Badge>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-orange-300 text-orange-700">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button asChild className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl">
                    <Link href={post.slug}>
                      Read Full Article
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
                
                <div className="lg:order-first">
                  <div className="bg-gradient-to-br from-orange-200 to-red-200 rounded-2xl p-12 text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-bold text-slate-900">121,976</div>
                        <div className="text-slate-700">Companies</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-slate-900">476,882</div>
                        <div className="text-slate-700">Contacts</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Recent Articles</h2>
              <p className="text-xl text-slate-700">
                Latest insights and analysis from our research team
                {selectedCategory !== 'All Categories' && (
                  <span className="block text-sm text-blue-600 mt-2">
                    Showing {filteredPosts.length} posts in "{selectedCategory}"
                  </span>
                )}
              </p>
            </div>
            
            {/* Categories Filter */}
            <div className="hidden lg:flex flex-wrap gap-3">
              <Button 
                variant={selectedCategory === 'All Categories' ? "default" : "outline"} 
                className={selectedCategory === 'All Categories' ? "bg-blue-600 text-white" : "border-blue-300 text-blue-700 hover:bg-blue-50"}
                onClick={() => setSelectedCategory('All Categories')}
              >
                All Categories
              </Button>
              {categories.map((category, index) => (
                <Button 
                  key={index} 
                  variant={selectedCategory === category ? "default" : "ghost"} 
                  className={selectedCategory === category ? "bg-blue-600 text-white" : "text-slate-600 hover:text-blue-700"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile Categories Filter */}
          <div className="lg:hidden mb-8">
            <div className="flex flex-wrap gap-3">
              <Button 
                variant={selectedCategory === 'All Categories' ? "default" : "outline"} 
                className={selectedCategory === 'All Categories' ? "bg-blue-600 text-white" : "border-blue-300 text-blue-700 hover:bg-blue-50"}
                onClick={() => setSelectedCategory('All Categories')}
              >
                All Categories
              </Button>
              {categories.map((category, index) => (
                <Button 
                  key={index} 
                  variant={selectedCategory === category ? "default" : "ghost"} 
                  className={selectedCategory === category ? "bg-blue-600 text-white" : "text-slate-600 hover:text-blue-700"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-white border-2 border-slate-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Badge className="bg-blue-600 text-white px-4 py-2">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-slate-300 text-slate-600 text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button asChild variant="outline" className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 w-full py-3">
                    <Link href={post.slug}>
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
          <p className="text-xl text-slate-300 mb-8">
            Get the latest technology intelligence and market insights delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-slate-400 mt-4">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}