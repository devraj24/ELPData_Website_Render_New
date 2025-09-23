import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Mail, Globe, TrendingUp, Users, Database } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

export default function BlogAnaplanSuccessStory() {
  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <>
      <SEOHead title="Anaplan Connected Planning Success Story | ELP Data" description="How ELP Data delivered 89,573 Anaplan companies and 318,442 verified contacts to accelerate connected planning platform sales." />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" onClick={scrollToTop} className="inline-flex items-center text-slate-600 hover:text-slate-800 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Blog</Link>
            <div className="mb-8">
              <Badge className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">Anaplan Success Story</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">🚀 Anaplan Connected Planning Market Intelligence 🚀</h1>
              <p className="text-xl text-slate-600 leading-relaxed">Comprehensive intelligence on Anaplan connected planning implementations to help vendors connect with organizations transforming their planning processes through cloud-native platforms.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
                <div className="flex items-center mb-3"><Database className="w-8 h-8 text-indigo-600 mr-3" /><h3 className="font-semibold text-slate-900">Anaplan Companies</h3></div>
                <p className="text-3xl font-bold text-indigo-600">89,573</p>
                <p className="text-sm text-slate-600">Organizations using Anaplan platform</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200">
                <div className="flex items-center mb-3"><Users className="w-8 h-8 text-emerald-600 mr-3" /><h3 className="font-semibold text-slate-900">Planning Professionals</h3></div>
                <p className="text-3xl font-bold text-emerald-600">318,442</p>
                <p className="text-sm text-slate-600">Business planners and model builders</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                <div className="flex items-center mb-3"><TrendingUp className="w-8 h-8 text-orange-600 mr-3" /><h3 className="font-semibold text-slate-900">Market Position</h3></div>
                <p className="text-2xl font-bold text-orange-600">Leader</p>
                <p className="text-sm text-slate-600">Connected planning platform innovator</p>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-gradient-to-b from-indigo-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">💡 Anaplan Implementation Challenges</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[{challenge:"Model Building Complexity",details:"While Anaplan offers powerful modeling capabilities, creating sophisticated connected planning models requires significant expertise. Complex business logic and relationships can be challenging to implement and maintain.",impact:"70% require specialized Anaplan model builders"},{challenge:"Change Management & Adoption",details:"Transitioning from traditional planning tools to Anaplan's connected approach requires significant organizational change management. Users need training on new workflows and collaborative planning concepts.",impact:"Adoption projects take 25% longer than technical implementation"},{challenge:"Integration Architecture",details:"Connecting Anaplan with enterprise data sources, ERP systems, and other business applications requires careful integration design and ongoing maintenance of data flows.",impact:"Integration complexity accounts for 40% of project timeline"},{challenge:"Scaling & Performance Optimization",details:"As Anaplan models grow in size and complexity, organizations may encounter performance challenges requiring model optimization, data management strategies, and usage governance.",impact:"30% experience performance issues as models scale"},{challenge:"Total Cost of Ownership",details:"Beyond licensing costs, organizations must factor in implementation services, ongoing model maintenance, integration costs, and specialized resources required for complex implementations.",impact:"TCO often 150-200% higher than initial estimates"},{challenge:"Vendor Dependency & Skills Gap",details:"Heavy reliance on Anaplan-specific skills creates resource constraints. Organizations struggle to find qualified professionals and face risks from knowledge concentration.",impact:"90% report difficulty finding qualified Anaplan resources"}].map((item,index)=>(
                <Card key={index} className="p-6 bg-white border-l-4 border-indigo-500 shadow-lg">
                  <h3 className="font-bold text-xl text-slate-900 mb-3">{item.challenge}</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">{item.details}</p>
                  <div className="bg-indigo-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-indigo-700"><strong>Business Impact:</strong> {item.impact}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Connect with Anaplan Decision-Makers</h2>
            <p className="text-xl mb-8 text-slate-300">Target organizations using Anaplan's connected planning platform with precision intelligence and verified contacts.</p>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg" onClick={() => window.location.href = 'mailto:info@elpdata.com'}>
              <Mail className="w-5 h-5 mr-2" />Get Anaplan Market Intelligence</Button>
          </div>
        </section>
        <section className="py-8 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap gap-3 justify-center">
              {['#Anaplan','#ConnectedPlanning','#CloudPlanning','#BusinessPlanning','#PerformanceManagement','#PlanningPlatform','#EnterpriseModeling'].map((tag,index)=>(
                <Badge key={index} variant="outline" className="text-sm px-3 py-1 border-slate-300 text-slate-600">{tag}</Badge>))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}