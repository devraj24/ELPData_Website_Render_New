import { useState } from 'react';
import { Search, BookOpen, Database, Users, Zap, Shield, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const glossaryTerms = [
    {
      category: "Technology Intelligence",
      terms: [
        {
          term: "Technology Intelligence",
          definition: "The systematic collection, analysis, and application of information about technology implementations, market trends, and competitive landscapes to inform business decisions and strategic planning.",
          relatedTerms: ["Business Intelligence", "Market Intelligence", "Competitive Intelligence"]
        },
        {
          term: "Technology Stack",
          definition: "The complete set of software applications, programming languages, frameworks, databases, and infrastructure tools that a company uses to build and run its digital operations.",
          relatedTerms: ["Software Architecture", "Enterprise Applications", "Technology Footprint"]
        },
        {
          term: "Enterprise Implementation",
          definition: "The process of deploying enterprise-grade software solutions across an organization, including planning, configuration, integration, training, and ongoing support.",
          relatedTerms: ["Software Deployment", "System Integration", "Change Management"]
        },
        {
          term: "Technology Adoption",
          definition: "The process by which organizations evaluate, select, and implement new technology solutions to improve business operations, efficiency, and competitive advantage.",
          relatedTerms: ["Digital Transformation", "Innovation Management", "Technology Assessment"]
        }
      ]
    },
    {
      category: "Data Management",
      terms: [
        {
          term: "Data Enrichment",
          definition: "The process of enhancing existing datasets by adding additional information from external sources to create more complete, accurate, and valuable customer or prospect profiles.",
          relatedTerms: ["Data Augmentation", "Profile Enhancement", "Contact Verification"]
        },
        {
          term: "ETL (Extract, Transform, Load)",
          definition: "A data integration process that extracts data from various sources, transforms it into a consistent format for analysis, and loads it into a target system such as a data warehouse or business intelligence platform.",
          relatedTerms: ["Data Pipeline", "Data Integration", "Data Processing"]
        },
        {
          term: "Master Data Management (MDM)",
          definition: "A comprehensive approach to defining and managing critical business data entities to provide a single point of reference for accurate, consistent, and complete master data across the enterprise.",
          relatedTerms: ["Data Governance", "Data Quality", "Single Source of Truth"]
        },
        {
          term: "Data Verification",
          definition: "The process of confirming the accuracy, completeness, and reliability of data through validation checks, cross-referencing with authoritative sources, and real-time confirmation.",
          relatedTerms: ["Data Validation", "Quality Assurance", "Accuracy Testing"]
        },
        {
          term: "Real-time Data Intelligence",
          definition: "The capability to collect, process, and analyze data as it's generated to provide immediate insights and enable instant decision-making for business operations.",
          relatedTerms: ["Streaming Analytics", "Live Data Processing", "Instant Intelligence"]
        }
      ]
    },
    {
      category: "Business Intelligence",
      terms: [
        {
          term: "Business Intelligence Platform",
          definition: "A comprehensive technology solution that combines data integration, analytics, reporting, and visualization tools to transform raw business data into actionable insights for strategic decision-making.",
          relatedTerms: ["Analytics Platform", "Reporting System", "Decision Support System"]
        },
        {
          term: "Decision Makers Database",
          definition: "A curated collection of verified contact information for key decision-makers, executives, and influencers within target organizations, used for strategic B2B outreach and relationship building.",
          relatedTerms: ["Executive Contacts", "C-Level Database", "Influencer Mapping"]
        },
        {
          term: "Market Intelligence",
          definition: "The systematic gathering and analysis of information about market conditions, competitor activities, customer behavior, and industry trends to support strategic business planning.",
          relatedTerms: ["Competitive Analysis", "Market Research", "Industry Intelligence"]
        },
        {
          term: "Predictive Analytics",
          definition: "The use of statistical algorithms, machine learning techniques, and historical data to identify patterns and predict future outcomes, behaviors, or trends in business contexts.",
          relatedTerms: ["Machine Learning", "Forecasting", "Statistical Modeling"]
        }
      ]
    },
    {
      category: "B2B Sales & Marketing",
      terms: [
        {
          term: "Account-Based Marketing (ABM)",
          definition: "A strategic B2B marketing approach that concentrates sales and marketing resources on clearly defined target accounts, personalizing campaigns for specific high-value prospects.",
          relatedTerms: ["Target Account Marketing", "Personalized Marketing", "Strategic Accounts"]
        },
        {
          term: "Lead Qualification",
          definition: "The process of evaluating potential customers to determine their likelihood to purchase, typically involving assessment of budget, authority, need, and timeline (BANT criteria).",
          relatedTerms: ["Prospect Scoring", "Sales Qualification", "BANT Framework"]
        },
        {
          term: "Contact Verification",
          definition: "The systematic process of confirming the accuracy and validity of contact information including email addresses, phone numbers, job titles, and company affiliations.",
          relatedTerms: ["Email Validation", "Phone Verification", "Data Accuracy"]
        },
        {
          term: "Sales Intelligence",
          definition: "The use of data analytics and technology insights to identify sales opportunities, understand prospect behavior, and optimize sales strategies for better conversion rates.",
          relatedTerms: ["Sales Analytics", "Prospect Intelligence", "Sales Enablement"]
        },
        {
          term: "Technology Trigger Events",
          definition: "Specific business events or changes in a prospect's technology environment that indicate a potential sales opportunity, such as software implementations, migrations, or expansions.",
          relatedTerms: ["Sales Triggers", "Buying Signals", "Opportunity Indicators"]
        }
      ]
    },
    {
      category: "Data Analytics",
      terms: [
        {
          term: "Big Data Analytics (BDA)",
          definition: "The process of examining large and complex datasets to uncover patterns, correlations, market trends, customer preferences, and other valuable business insights.",
          relatedTerms: ["Data Mining", "Advanced Analytics", "Large-Scale Data Processing"]
        },
        {
          term: "Digital Data",
          definition: "Information generated through digital interactions, transactions, and behaviors across online platforms, applications, and digital touchpoints, providing insights into user engagement and business performance.",
          relatedTerms: ["Digital Footprint", "Online Analytics", "Digital Intelligence"]
        },
        {
          term: "Data Visualization",
          definition: "The graphical representation of data and information through charts, graphs, maps, and interactive dashboards to make complex data more understandable and actionable.",
          relatedTerms: ["Data Dashboards", "Visual Analytics", "Information Graphics"]
        },
        {
          term: "Performance Metrics",
          definition: "Quantifiable measures used to evaluate the success and effectiveness of business processes, marketing campaigns, sales activities, or technology implementations.",
          relatedTerms: ["KPIs", "Success Metrics", "Performance Indicators"]
        }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen, color: 'blue' },
    { id: 'Technology Intelligence', name: 'Technology Intelligence', icon: Zap, color: 'purple' },
    { id: 'Data Management', name: 'Data Management', icon: Database, color: 'green' },
    { id: 'Business Intelligence', name: 'Business Intelligence', icon: TrendingUp, color: 'blue' },
    { id: 'B2B Sales & Marketing', name: 'B2B Sales & Marketing', icon: Users, color: 'orange' },
    { id: 'Data Analytics', name: 'Data Analytics', icon: Shield, color: 'red' }
  ];

  const filteredTerms = glossaryTerms.filter(category => {
    if (selectedCategory !== 'all' && category.category !== selectedCategory) return false;
    if (!searchTerm) return true;
    return category.terms.some(term => 
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200',
      green: 'bg-green-100 text-green-800 border-green-200',
      orange: 'bg-orange-100 text-orange-800 border-orange-200',
      red: 'bg-red-100 text-red-800 border-red-200'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Technology Intelligence Glossary - Business Intelligence & Data Terms | ELP Data"
        description="Comprehensive glossary of technology intelligence, business intelligence, data enrichment, ETL, MDM, and B2B marketing terms. Learn about enterprise implementations, decision makers databases, and data analytics."
        keywords="technology intelligence glossary, business intelligence terms, data enrichment definition, ETL meaning, MDM definition, digital data BDA, enterprise implementations, decision makers database, B2B marketing terms"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge className="bg-white/20 text-white border-0 px-6 py-3 text-lg font-semibold mb-8">
            Technology Intelligence Glossary
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Master the Language of
            </span>
            <br />
            <span className="text-white">Technology Intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Comprehensive definitions of technology intelligence, business intelligence, data enrichment, 
            and B2B marketing terms to accelerate your understanding and strategic decision-making.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search terms like 'data enrichment', 'ETL', 'technology intelligence'..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all ${
                    selectedCategory === category.id
                      ? `${getColorClasses(category.color)} shadow-lg scale-105`
                      : 'bg-white text-slate-600 border-2 border-slate-200 hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            {filteredTerms.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-4"></div>
                  {category.category}
                </h2>
                
                <div className="grid gap-6">
                  {category.terms
                    .filter(term => 
                      !searchTerm || 
                      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((term, termIndex) => (
                    <Card key={termIndex} className="bg-white border-2 border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{term.term}</h3>
                        <p className="text-slate-700 leading-relaxed text-lg">{term.definition}</p>
                      </div>
                      
                      {term.relatedTerms && term.relatedTerms.length > 0 && (
                        <div className="pt-4 border-t border-slate-100">
                          <h4 className="text-sm font-semibold text-slate-600 mb-3">Related Terms:</h4>
                          <div className="flex flex-wrap gap-2">
                            {term.relatedTerms.map((relatedTerm, relatedIndex) => (
                              <Badge key={relatedIndex} className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors">
                                {relatedTerm}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Apply These Concepts?</h2>
          <p className="text-xl mb-8 text-slate-300">
            Put technology intelligence, data enrichment, and business intelligence to work for your organization 
            with ELP Data's comprehensive platform and expert services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
              Explore Our Platform
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}