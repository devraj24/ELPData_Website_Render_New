import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Mail, Globe, TrendingUp, Users, Target, Database } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

export default function BlogTMSSoftwareSuccess() {
  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <>
      <SEOHead title="Transportation Management System (TMS) Success Story | ELP Data" description="How ELP Data delivered 156,847 TMS companies and 589,234 verified contacts to accelerate transportation and logistics software sales." />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" onClick={scrollToTop} className="inline-flex items-center text-slate-600 hover:text-slate-800 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Blog</Link>
            <div className="mb-8">
              <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-600 text-white">TMS Success Story</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">🚀 Transforming Transportation Management System Outreach 🚀</h1>
              <p className="text-xl text-slate-600 leading-relaxed">How ELP Data delivered comprehensive TMS intelligence, enabling our client to connect with logistics decision-makers facing critical transportation challenges.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                <div className="flex items-center mb-3"><Database className="w-8 h-8 text-orange-600 mr-3" /><h3 className="font-semibold text-slate-900">Companies Delivered</h3></div>
                <p className="text-3xl font-bold text-orange-600">156,847</p>
                <p className="text-sm text-slate-600">Organizations using TMS solutions</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200">
                <div className="flex items-center mb-3"><Users className="w-8 h-8 text-emerald-600 mr-3" /><h3 className="font-semibold text-slate-900">Contacts Verified</h3></div>
                <p className="text-3xl font-bold text-emerald-600">589,234</p>
                <p className="text-sm text-slate-600">Logistics and supply chain professionals</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                <div className="flex items-center mb-3"><TrendingUp className="w-8 h-8 text-purple-600 mr-3" /><h3 className="font-semibold text-slate-900">Client Results</h3></div>
                <p className="text-2xl font-bold text-purple-600">Outstanding</p>
                <p className="text-sm text-slate-600">Supply chain executive engagement</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Transportation Management Systems Analyzed</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {['Oracle Transportation Management','SAP Transportation Management','Manhattan WMOS','JDA Transportation','Blue Yonder TMS','MercuryGate TMS','Descartes MacroPoint','FreightPOP','3Gtms','Kuebix TMS','McLeod Software','TMW Systems','Prophesy Transportation','Trimble Transportation','DAT Solutions','project44','FourKites','Transporeon','CargoSmart','LoadDex'].map((app,index)=>(
                <Card key={index} className="p-4 text-center bg-gradient-to-br from-slate-50 to-white border-slate-200">
                  <p className="font-medium text-slate-800">{app}</p>
                </Card>))}
            </div>
            <p className="text-sm text-slate-600 text-center">+ Many more specialized TMS & Logistics solutions</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-b from-red-50 to-orange-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">💡 Critical TMS Challenges Organizations Face</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[{challenge:"Carrier Integration Complexity",details:"TMS systems must integrate with hundreds of carriers, each with different APIs, EDI formats, and data requirements. Managing these connections while ensuring real-time visibility creates ongoing technical challenges.",impact:"75% struggle with carrier integration and data standardization"},{challenge:"Route Optimization Limitations",details:"While TMS promises optimal routing, real-world constraints like driver hours, vehicle capacity, delivery windows, and traffic conditions often result in suboptimal routes and increased transportation costs.",impact:"Organizations achieve only 60-70% of theoretical optimization potential"},{challenge:"Freight Cost Management",details:"Fluctuating fuel costs, carrier rate changes, accessorial charges, and invoice discrepancies make freight cost control difficult. Many organizations lack visibility into true transportation costs.",impact:"Freight audit processes identify 8-12% billing errors on average"},{challenge:"Real-Time Visibility Gaps",details:"Despite TMS investments, many organizations still lack end-to-end shipment visibility. Tracking inconsistencies, delayed updates, and communication gaps leave customers and stakeholders uninformed.",impact:"40% of shipments lack complete visibility throughout transit"},{challenge:"System Integration & Data Silos",details:"TMS systems must integrate with ERP, WMS, CRM, and other enterprise systems. Poor integration creates data silos, manual processes, and inconsistent information across the supply chain.",impact:"Data integration projects account for 50% of TMS implementation time"},{challenge:"User Adoption & Process Change",details:"TMS implementations often require significant process changes for dispatchers, drivers, and customer service teams. Resistance to change and inadequate training limit system effectiveness.",impact:"Only 45% of TMS users leverage advanced optimization features"}].map((item,index)=>(
                <Card key={index} className="p-6 bg-white border-l-4 border-red-500 shadow-lg">
                  <h3 className="font-bold text-xl text-slate-900 mb-3">{item.challenge}</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">{item.details}</p>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-red-700"><strong>Business Impact:</strong> {item.impact}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Accelerate Your TMS Sales?</h2>
            <p className="text-xl mb-8 text-slate-300">Connect with logistics decision-makers who understand transportation challenges and need better solutions.</p>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg" onClick={() => window.location.href = 'mailto:info@elpdata.com'}>
              <Mail className="w-5 h-5 mr-2" />Get TMS Market Intelligence</Button>
          </div>
        </section>

        <section className="py-8 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap gap-3 justify-center">
              {['#TMS','#TransportationManagement','#Logistics','#SupplyChain','#FreightManagement','#LogisticsTech','#TransportationTech'].map((tag,index)=>(
                <Badge key={index} variant="outline" className="text-sm px-3 py-1 border-slate-300 text-slate-600">{tag}</Badge>))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}