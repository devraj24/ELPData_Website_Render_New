import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Mail, Phone, MapPin, Clock, Database, Users, Globe, Send, CheckCircle, Building, Shield, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    budget: '',
    timeline: '',
    interestArea: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          budget: '',
          timeline: '',
          interestArea: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      <SEOHead 
        title="Contact ELP Data - Premium Technology Intelligence Solutions"
        description="Connect with ELP Data's technology intelligence experts. Global offices, 24/7 support, and comprehensive data solutions for enterprise clients worldwide."
        keywords="contact ELP Data, technology intelligence, business intelligence, enterprise data solutions, global support"
        canonical="/contact-us"
      />
      
      <Header />

      {/* Hero Section with Enhanced Visual Appeal */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 opacity-95"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Award className="h-5 w-5 text-orange-300 mr-2" />
              <span className="text-white font-medium">Premium Technology Intelligence Platform</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Connect with 
              <span className="block bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                ELP Data Experts
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Transform your business intelligence with our premium technology data solutions. 
              Global reach, enterprise-grade security, and unmatched expertise.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex items-center text-white">
                <Shield className="h-6 w-6 text-green-300 mr-3" />
                <span className="font-semibold">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center text-white">
                <Building className="h-6 w-6 text-blue-300 mr-3" />
                <span className="font-semibold">Global Offices</span>
              </div>
              <div className="flex items-center text-white">
                <Database className="h-6 w-6 text-orange-300 mr-3" />
                <span className="font-semibold">500+ Technologies</span>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/about" className="inline-flex items-center bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 border border-white/20">
                <Award className="h-5 w-5 mr-3" />
                Learn About ELP Data
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-20">
            
            {/* Contact Information Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Contact Cards */}
              <div className="grid grid-cols-1 gap-8">
                
                {/* ELP Data Main Contact */}
                <div className="group bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-blue-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-start mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                      <Database className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">ELP Data</h3>
                      <p className="text-blue-600 font-semibold text-lg">Premium Technology Intelligence Platform</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center group/email">
                      <Mail className="h-5 w-5 text-blue-500 mr-4 group-hover/email:scale-110 transition-transform" />
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">Primary Contacts</p>
                        <div className="space-y-1">
                          <a href="mailto:info@elpdata.com" className="block text-blue-600 hover:text-blue-800 transition-colors font-medium">info@elpdata.com</a>
                          <a href="mailto:support@elpdata.com" className="block text-blue-600 hover:text-blue-800 transition-colors font-medium">support@elpdata.com</a>
                          <a href="mailto:sales@elpdata.com" className="block text-blue-600 hover:text-blue-800 transition-colors font-medium">sales@elpdata.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-2xl p-8 lg:p-10 border border-green-200 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-start mb-6">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Direct Contact Lines</h3>
                      <p className="text-green-700 font-semibold text-lg">24/7 Support Available</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <a href="tel:+13072242324" className="bg-white rounded-xl p-4 text-center hover:bg-green-50 transition-colors group/phone">
                      <div className="text-green-600 font-bold text-lg group-hover/phone:scale-105 transition-transform">(307) 224-2324</div>
                      <div className="text-green-500 text-sm mt-1">Primary</div>
                    </a>
                    <a href="tel:888-ELPDATA" className="bg-white rounded-xl p-4 text-center hover:bg-green-50 transition-colors group/phone">
                      <div className="text-green-600 font-bold text-lg group-hover/phone:scale-105 transition-transform">888-ELPDATA</div>
                      <div className="text-green-500 text-sm mt-1">Toll-Free</div>
                    </a>
                    <a href="tel:+13075223785" className="bg-white rounded-xl p-4 text-center hover:bg-green-50 transition-colors group/phone">
                      <div className="text-green-600 font-bold text-lg group-hover/phone:scale-105 transition-transform">(307) 522-3785</div>
                      <div className="text-green-500 text-sm mt-1">Sales</div>
                    </a>
                  </div>
                </div>

                {/* Global Operations */}
                <div className="group bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl shadow-2xl p-8 lg:p-10 border border-purple-200 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-start mb-6">
                    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                      <Globe className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Operations</h3>
                      <p className="text-purple-700 font-semibold text-lg">International Technology Intelligence</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Premium IT contact intelligence, advanced lead generation, and comprehensive technology adoption tracking services across 195+ countries worldwide.
                  </p>
                </div>
              </div>

              {/* Acquired Partners Section */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 text-center lg:text-left">Strategic Partners</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl p-6 border border-gray-200 opacity-80">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-400 text-white p-3 rounded-xl mr-4">
                        <Database className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-700">Oracle Technology</h4>
                        <p className="text-gray-600">Enterprise Database Solutions</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl p-6 border border-gray-200 opacity-80">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-400 text-white p-3 rounded-xl mr-4">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-700">The IT Contacts</h4>
                        <p className="text-gray-600">Professional Contact Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-4 text-lg">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Monday - Friday:</span>
                    <span className="text-blue-600 font-semibold">8:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Saturday:</span>
                    <span className="text-blue-600 font-semibold">9:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-700">Sunday:</span>
                    <span className="text-gray-500 font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 sticky top-8">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                  <p className="text-gray-600 text-lg">Start your technology intelligence journey with us</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="John Smith"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="Your Company"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="budget" className="block text-sm font-semibold text-gray-700">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="under-25k">Under $25,000</option>
                        <option value="25k-100k">$25,000 - $100,000</option>
                        <option value="100k-500k">$100,000 - $500,000</option>
                        <option value="500k-1m">$500,000 - $1,000,000</option>
                        <option value="over-1m">Over $1,000,000</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                      >
                        <option value="">Select Timeline</option>
                        <option value="immediate">Immediate (Within 1 month)</option>
                        <option value="short-term">Short-term (1-3 months)</option>
                        <option value="medium-term">Medium-term (3-6 months)</option>
                        <option value="long-term">Long-term (6+ months)</option>
                        <option value="planning">Strategic Planning Phase</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interestArea" className="block text-sm font-semibold text-gray-700">
                      Area of Interest
                    </label>
                    <select
                      id="interestArea"
                      name="interestArea"
                      value={formData.interestArea}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                    >
                      <option value="">Select Service</option>
                      <option value="technology-intelligence">Technology Intelligence Data</option>
                      <option value="contact-lists">Executive Contact Lists</option>
                      <option value="marketing-automation">Marketing Automation</option>
                      <option value="api-integration">API Integration</option>
                      <option value="custom-research">Custom Research</option>
                      <option value="enterprise-solutions">Enterprise Solutions</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300 text-lg"
                      placeholder="Tell us about your technology intelligence needs and how we can help transform your business..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-green-50 border border-green-200 rounded-xl p-6 flex items-center"
                    >
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                      <p className="text-green-800 font-medium">Thank you! Your message has been sent successfully. We'll contact you within 24 hours.</p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-red-50 border border-red-200 rounded-xl p-6"
                    >
                      <p className="text-red-800 font-medium">There was an error sending your message. Please try again or contact us directly.</p>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-5 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg shadow-lg"
                  >
                    {submitStatus === 'submitting' ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-3" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our technology intelligence services span across multiple continents with dedicated support teams 
              and state-of-the-art facilities in key business regions worldwide.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { location: "Wyoming, USA", address: "30 N Gould St, STE R\nSheridan, WY 82801", color: "blue", flag: "🇺🇸" },
              { location: "Netherlands", address: "Keizersgracht 391 A\n1016 EJ Amsterdam", color: "green", flag: "🇳🇱" },
              { location: "United Kingdom", address: "14 Clifton Down Road\nBristol BS8 4BF", color: "purple", flag: "🇬🇧" },
              { location: "India", address: "M3M, Block A, Sushant Lok III\nSector 57, Gurugram, Haryana 122003", color: "red", flag: "🇮🇳" }
            ].map((office, index) => (
              <motion.div
                key={office.location}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${office.color}-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{office.flag}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{office.location}</h3>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line mb-3">{office.address}</p>
                <a href="mailto:info@elpdata.com" className={`text-${office.color}-600 hover:text-${office.color}-800 font-medium transition-colors`}>
                  info@elpdata.com
                </a>
              </motion.div>
            ))}
          </div>
          
          {/* Partner Offices */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Oracle Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                Enterprise Database Solutions<br/>
                Technology Intelligence Services
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The IT Contacts</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional IT Contact Lists<br/>
                Executive Email Solutions
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}