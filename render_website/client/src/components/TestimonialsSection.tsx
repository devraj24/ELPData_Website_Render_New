export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "ELP Data's technology intelligence platform transformed our B2B prospecting. We identified 2,400 SAP users in our target market within hours, resulting in a 340% increase in qualified leads.",
      author: "Sarah Chen",
      position: "VP of Sales",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&crop=face",
      industry: "Enterprise Software",
      results: "+340% qualified leads"
    },
    {
      quote: "The precision of their Oracle database user lists is unmatched. We've closed $2.8M in new business by targeting companies with specific database implementations. The ROI speaks for itself.",
      author: "Michael Rodriguez",
      position: "Director of Marketing",
      company: "DataCore Systems",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&crop=face",
      industry: "Database Solutions",
      results: "$2.8M new business"
    },
    {
      quote: "Account-based marketing became incredibly effective with ELP Data's technology intelligence. We can now target decision-makers at companies using specific cloud platforms with surgical precision.",
      author: "Jennifer Park",
      position: "ABM Manager",
      company: "CloudFirst Analytics",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&crop=face",
      industry: "Cloud Services",
      results: "+280% engagement"
    }
  ];

  const clientLogos = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by Technology Leaders</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Leading enterprises rely on our technology intelligence to drive revenue growth and strategic decision-making.
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-60">
          {clientLogos.map((client, index) => (
            <div key={index} className="h-12 flex items-center">
              <img 
                src={client.logo} 
                alt={`${client.name} logo`}
                className="h-8 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-3d bg-white rounded-2xl p-8 border border-neutral-gray relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-teal/20">
                <i className="fas fa-quote-right text-4xl"></i>
              </div>
              
              {/* Testimonial Content */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar}
                  alt={`${testimonial.author} profile`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
              
              {/* Results Badge */}
              <div className="flex justify-between items-center">
                <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  {testimonial.industry}
                </span>
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                  {testimonial.results}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Client Success Metrics</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">340%</div>
              <div className="text-sm text-gray-600">Average Lead Increase</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-dollar-sign text-white text-2xl"></i>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">$2.8M</div>
              <div className="text-sm text-gray-600">New Business Closed</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-target text-white text-2xl"></i>
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Data Accuracy Rate</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">75%</div>
              <div className="text-sm text-gray-600">Time Saved on Research</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}