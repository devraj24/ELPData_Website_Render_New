import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Database, Users } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Contact Us - ELP Data Technology Intelligence Solutions"
        description="Get in touch with ELP Data for premium technology intelligence, business data solutions, and enterprise consulting. Multiple contact options and global support available."
        keywords="contact ELP Data, technology intelligence support, business data consulting, enterprise solutions, Oracle Technology contact"
      />
      <Header />
      
      {/* Hero Section - Orange to Red Gradient */}
      <section className="bg-gradient-to-r from-orange-600 to-red-500 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-heading font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white mb-8 max-w-4xl mx-auto">
            Connect with our technology intelligence experts. We're here to help you access premium data solutions and transform your business operations.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                {/* ELP Data - Main Company */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
                        <Database className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-700">ELP Data</h3>
                        <p className="text-blue-600 font-semibold">Premium Technology Data & Business Intelligence</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-600 mr-2" />
                      <div>
                        <p className="font-semibold text-blue-700">Email Contacts</p>
                        <p className="text-blue-600">info@elpdata.com</p>
                        <p className="text-blue-600">support@elpdata.com</p>
                        <p className="text-blue-600">sales@elpdata.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-600 text-white p-3 rounded-lg mr-4">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-green-700">Phone Numbers</h3>
                        <p className="text-green-600 font-semibold">Direct Contact Lines</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-green-600 font-medium">(307) 224-2324</p>
                      <p className="text-green-600 font-medium">888-ELPDATA</p>
                      <p className="text-green-600 font-medium">(307) 522-3785</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-600 text-white p-3 rounded-lg mr-4">
                        <Globe className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-purple-700">Global Operations</h3>
                        <p className="text-purple-600 font-semibold">International Contact Database</p>
                      </div>
                    </div>
                    <p className="text-purple-600">Premium IT contact intelligence, lead generation, and technology adoption tracking services</p>
                  </div>
                </div>

                {/* Acquired Partners Section */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Acquired Partners</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 opacity-75">
                      <div className="flex items-center mb-4">
                        <div className="bg-gray-500 text-white p-3 rounded-lg mr-4">
                          <Database className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-700">Oracle Technology</h4>
                          <p className="text-gray-600">Enterprise Database Solutions & Technology Intelligence Services</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 opacity-75">
                      <div className="flex items-center mb-4">
                        <div className="bg-gray-500 text-white p-3 rounded-lg mr-4">
                          <Users className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-700">The IT Contacts</h4>
                          <p className="text-gray-600">Professional IT Contact Lists & Executive Email Solutions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-600 mr-2" />
                      <div>
                        <p className="font-semibold text-blue-700">Contact Intelligence</p>
                        <p className="text-blue-600">info@elpdata.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <div>
                      <p className="font-semibold text-blue-700">Global Operations</p>
                      <p className="text-blue-600">International - Contact Database & Lead Generation</p>
                    </div>
                  </div>
                  <p className="text-sm text-blue-600 font-medium">Premium IT contact intelligence, lead generation, and technology adoption tracking services</p>
                </div>

                {/* Business Hours */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-gray-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-500k">$100,000 - $500,000</option>
                        <option value="over-500k">Over $500,000</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select Timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 Month</option>
                        <option value="3-months">Within 3 Months</option>
                        <option value="6-months">Within 6 Months</option>
                        <option value="planning">Still Planning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interestArea" className="block text-sm font-medium text-gray-700 mb-2">
                      Area of Interest
                    </label>
                    <select
                      id="interestArea"
                      name="interestArea"
                      value={formData.interestArea}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select Service</option>
                      <option value="technology-data">Technology Intelligence Data</option>
                      <option value="contact-lists">Professional Contact Lists</option>
                      <option value="marketing-solutions">Marketing Solutions</option>
                      <option value="api-integration">API Integration</option>
                      <option value="custom-research">Custom Research</option>
                      <option value="enterprise-solutions">Enterprise Solutions</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800">Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800">There was an error sending your message. Please try again or contact us directly.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 transform hover:scale-105'
                    } text-white`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Presence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our technology intelligence services span across multiple continents with dedicated support teams in key business regions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">New York, USA</h3>
              <p className="text-gray-600 text-sm">1330 6th Ave Suite 23A<br/>New York, NY 10019<br/>info@elpdata.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <MapPin className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wyoming, USA</h3>
              <p className="text-gray-600 text-sm">30 N Gould St, STE R<br/>Sheridan, WY 82801<br/>info@elpdata.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <MapPin className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Netherlands</h3>
              <p className="text-gray-600 text-sm">Keizersgracht 391 A<br/>1016 EJ Amsterdam<br/>info@elpdata.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">United Kingdom</h3>
              <p className="text-gray-600 text-sm">14 Clifton Down Road<br/>Bristol BS8 4BF<br/>info@elpdata.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <MapPin className="h-8 w-8 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">India</h3>
              <p className="text-gray-600 text-sm">M3M, Block A, Sushant Lok III<br/>Sector 57, Gurugram, Haryana 122003<br/>info@elpdata.com</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Database className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Oracle Technology</h3>
              <p className="text-gray-600 text-sm">Enterprise Database Solutions<br/>Technology Intelligence Services</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The IT Contacts</h3>
              <p className="text-gray-600 text-sm">Professional IT Contact Lists<br/>Executive Email Solutions</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}