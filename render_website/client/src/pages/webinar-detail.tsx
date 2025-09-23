import { useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Video, Clock, ArrowLeft, Download } from "lucide-react";
import { Link } from "wouter";

const webinarData: Record<string, any> = {
  "building-high-converting-abm-campaigns": {
    title: "Building High-Converting ABM Campaigns with Quality Data",
    date: "January 18, 2025",
    time: "2:00 PM EST",
    duration: "45 minutes",
    speakers: [
      {
        name: "David Kim",
        title: "VP of Marketing Strategy",
        bio: "David has over 15 years of experience in B2B marketing and specializes in account-based marketing strategies for enterprise organizations."
      },
      {
        name: "Jennifer Walsh", 
        title: "Senior Data Analyst",
        bio: "Jennifer leads data analysis initiatives and has expertise in marketing attribution and campaign optimization."
      }
    ],
    status: "upcoming",
    description: "Learn how to leverage high-quality data to build ABM campaigns that drive meaningful engagement and accelerate deal velocity. This webinar covers targeting strategies, content personalization, and measurement frameworks for successful ABM programs.",
    agenda: [
      "ABM Campaign Planning and Strategy",
      "Data-Driven Account Selection",
      "Personalization at Scale",
      "Multi-Channel Orchestration",
      "Performance Measurement and Optimization",
      "Q&A Session"
    ],
    learningObjectives: [
      "Understand the fundamentals of data-driven ABM",
      "Learn how to identify and prioritize target accounts",
      "Master personalization techniques for ABM campaigns",
      "Implement effective measurement strategies",
      "Optimize campaigns for better ROI"
    ]
  },
  "data-privacy-compliance": {
    title: "Data Privacy and Compliance in B2B Marketing",
    date: "December 20, 2024",
    time: "1:00 PM EST", 
    duration: "60 minutes",
    speakers: [
      {
        name: "Amanda Foster",
        title: "Chief Compliance Officer",
        bio: "Amanda oversees compliance initiatives and has extensive experience in data privacy regulations across multiple jurisdictions."
      },
      {
        name: "Robert Martinez",
        title: "Legal Counsel",
        bio: "Robert specializes in data protection law and helps organizations navigate complex regulatory requirements."
      }
    ],
    status: "recorded",
    description: "Navigate the complex landscape of data privacy regulations including GDPR, CCPA, and emerging legislation. This comprehensive session covers compliance frameworks, best practices, and practical implementation strategies.",
    agenda: [
      "Overview of Global Privacy Regulations",
      "GDPR and CCPA Compliance Requirements",
      "Consent Management Best Practices",
      "Data Subject Rights and Requests",
      "Vendor Management and DPAs",
      "Incident Response Planning"
    ],
    learningObjectives: [
      "Understand key privacy regulations affecting B2B marketing",
      "Implement compliant data collection practices",
      "Manage consent and data subject rights",
      "Develop incident response procedures",
      "Create vendor compliance frameworks"
    ]
  },
  "intent-data-sales-acceleration": {
    title: "Intent Data Strategies for Sales Acceleration",
    date: "December 5, 2024",
    time: "3:00 PM EST",
    duration: "50 minutes",
    speakers: [
      {
        name: "Kevin Thompson",
        title: "Sales Intelligence Director",
        bio: "Kevin leads sales intelligence initiatives and has pioneered the use of intent data for sales acceleration in enterprise environments."
      },
      {
        name: "Maria Santos",
        title: "Revenue Operations Manager",
        bio: "Maria specializes in revenue operations and data-driven sales processes that maximize conversion rates and deal velocity."
      }
    ],
    status: "recorded",
    description: "Discover how to leverage buyer intent data to identify prospects at the perfect moment in their buying journey. Learn practical strategies for integrating intent signals into your sales processes for maximum impact.",
    agenda: [
      "Understanding Intent Data Types and Sources",
      "Building Intent-Based Scoring Models",
      "Sales and Marketing Alignment",
      "Outreach Timing and Messaging",
      "Technology Integration Strategies",
      "ROI Measurement and Optimization"
    ],
    learningObjectives: [
      "Understand different types of intent data",
      "Build effective intent scoring models",
      "Align sales and marketing around intent signals",
      "Optimize outreach timing and messaging",
      "Measure and improve intent data ROI"
    ]
  }
};

export default function WebinarDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  
  const webinar = slug ? webinarData[slug] : null;

  if (!webinar) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Webinar Not Found</h1>
          <p className="text-gray-600 mb-8">The webinar you're looking for doesn't exist.</p>
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
      
      {/* Webinar Header */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/resources" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Badge variant={webinar.status === 'upcoming' ? 'default' : 'secondary'} className="mb-4">
                {webinar.status === 'upcoming' ? 'Upcoming Webinar' : 'Recorded Webinar'}
              </Badge>
              <h1 className="text-4xl font-bold text-blue-900 mb-4">{webinar.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{webinar.description}</p>
              
              <div className="flex flex-wrap gap-6 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span>{webinar.date} at {webinar.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span>{webinar.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span>{webinar.speakers.length} Speakers</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle className="text-center">
                    {webinar.status === 'upcoming' ? 'Register Now' : 'Watch Recording'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold mb-4 flex items-center justify-center gap-2">
                    {webinar.status === 'upcoming' ? (
                      <>
                        <Calendar className="w-5 h-5" />
                        Register Free
                      </>
                    ) : (
                      <>
                        <Video className="w-5 h-5" />
                        Watch Now
                      </>
                    )}
                  </button>
                  <p className="text-sm text-gray-600 mb-4">
                    {webinar.status === 'upcoming' 
                      ? 'Free registration required. You\'ll receive a confirmation email with access details.'
                      : 'Access the full recording and presentation materials instantly.'
                    }
                  </p>
                  {webinar.status === 'recorded' && (
                    <button className="w-full border border-blue-600 text-blue-600 py-2 px-6 rounded hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download Slides
                    </button>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Meet the Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webinar.speakers.map((speaker: any, index: number) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{speaker.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{speaker.title}</p>
                  <p className="text-gray-600">{speaker.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Webinar Agenda</h2>
              <div className="space-y-4">
                {webinar.agenda.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Learning Objectives</h2>
              <div className="space-y-4">
                {webinar.learningObjectives.map((objective: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      ✓
                    </div>
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Webinars */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Related Webinars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(webinarData)
              .filter(([key]) => key !== slug)
              .slice(0, 2)
              .map(([key, relatedWebinar]) => (
                <Card key={key} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge variant={relatedWebinar.status === 'upcoming' ? 'default' : 'secondary'} className="mb-3">
                      {relatedWebinar.status === 'upcoming' ? 'Upcoming' : 'Recorded'}
                    </Badge>
                    <h3 className="font-bold text-blue-900 mb-3">{relatedWebinar.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span>{relatedWebinar.date}</span>
                      <span>{relatedWebinar.duration}</span>
                    </div>
                    <Link 
                      href="/contact-us"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More →
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