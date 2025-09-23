import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isLoading?: boolean;
}

interface ResearchQuery {
  query: string;
  category: 'market-size' | 'competitors' | 'trends' | 'technology-adoption' | 'general';
}

export default function AIMarketResearchChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI Technology Assistant. I can help you with:\n\n**Application Analysis**\n• Comprehensive application summaries\n• Industry usage patterns\n• Responsible departments & key stakeholders\n• Implementation challenges\n• Market adoption statistics\n\n**Market Research**\n• Market size analysis\n• Competitor intelligence\n• Technology adoption trends\n• Company technology stacks\n\nJust ask about any application or technology!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const categorizeQuery = (query: string): ResearchQuery['category'] => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes('market size') || lowerQuery.includes('market value') || lowerQuery.includes('revenue')) {
      return 'market-size';
    }
    if (lowerQuery.includes('competitor') || lowerQuery.includes('competition') || lowerQuery.includes('rivals')) {
      return 'competitors';
    }
    if (lowerQuery.includes('trend') || lowerQuery.includes('future') || lowerQuery.includes('growth')) {
      return 'trends';
    }
    if (lowerQuery.includes('adoption') || lowerQuery.includes('using') || lowerQuery.includes('implement')) {
      return 'technology-adoption';
    }
    return 'general';
  };

  const isApplicationQuery = (query: string): boolean => {
    const lowerQuery = query.toLowerCase();
    const applicationKeywords = [
      'salesforce', 'oracle', 'sap', 'microsoft', 'aws', 'azure', 'google cloud',
      'quickbooks', 'wordpress', 'mainframe', 'sql server', 'mysql', 'postgresql',
      'jd edwards', 'peoplesoft', 'workday', 'servicenow', 'tableau', 'power bi',
      'adobe', 'autodesk', 'zoom', 'slack', 'sharepoint', 'exchange', 'office 365',
      'sage', 'netsuite', 'dynamics', 'hubspot', 'marketo', 'pardot'
    ];
    
    return applicationKeywords.some(keyword => lowerQuery.includes(keyword)) ||
           lowerQuery.includes('application') ||
           lowerQuery.includes('software') ||
           lowerQuery.includes('platform') ||
           lowerQuery.includes('system') ||
           lowerQuery.includes('tool') ||
           lowerQuery.includes('technology');
  };

  const generateResponse = async (query: string): Promise<string> => {
    // Check if this is an application-specific query
    if (isApplicationQuery(query)) {
      try {
        const response = await fetch('/api/application-analysis', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ applicationName: query }),
        });

        if (response.ok) {
          const data = await response.json();
          return data.analysis;
        }
      } catch (error) {
        console.error('Error fetching application analysis:', error);
      }
    }

    // Fall back to market research if application analysis fails or isn't applicable
    const category = categorizeQuery(query);
    
    try {
      const response = await fetch('/api/market-research', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, category }),
      });

      if (!response.ok) {
        throw new Error('Failed to get research data');
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error fetching research data:', error);
      return generateFallbackResponse(query, category);
    }
  };

  const generateFallbackResponse = (query: string, category: ResearchQuery['category']): string => {
    const responses = {
      'market-size': `Based on our enterprise technology database analysis for "${query}":\n\n📊 **Market Insights:**\n• Current market penetration analysis\n• Company adoption rates\n• Revenue impact assessment\n• Growth trajectory indicators\n\n💡 **Key Finding:** We track 45,000+ companies using related technologies. Would you like specific company lists or deeper market analysis?`,
      
      'competitors': `**Competitive Intelligence for "${query}":**\n\n🏢 **Market Leaders:**\n• Primary market players analysis\n• Technology stack comparisons\n• Market share insights\n• Competitive positioning\n\n📈 **Strategic Insights:**\n• Emerging challengers\n• Technology differentiation\n• Customer overlap analysis\n\nWould you like detailed competitor profiles or customer migration patterns?`,
      
      'trends': `**Technology Trends Analysis for "${query}":**\n\n📈 **Current Trends:**\n• Adoption velocity indicators\n• Enterprise implementation patterns\n• Technology evolution tracking\n• Investment flow analysis\n\n🔮 **Future Outlook:**\n• Predicted growth trajectories\n• Emerging technology integration\n• Market consolidation signals\n\nNeed specific trend data or predictive analytics?`,
      
      'technology-adoption': `**Technology Adoption Intelligence for "${query}":**\n\n🎯 **Adoption Metrics:**\n• Current user base: 25,000+ companies tracked\n• Implementation timeframes\n• Success rate indicators\n• ROI performance data\n\n🏗️ **Implementation Insights:**\n• Common integration challenges\n• Best practice patterns\n• Decision-maker profiles\n\nWant company-specific adoption data or implementation guides?`,
      
      'general': `**Market Research Summary for "${query}":**\n\n🔍 **Available Intelligence:**\n• Company technology profiles\n• Market penetration data\n• Competitive landscape analysis\n• Growth opportunity assessment\n\n📊 **Data Coverage:**\n• 200+ technology categories\n• 500,000+ company profiles\n• Real-time adoption tracking\n• Decision-maker contacts\n\nHow can I provide more specific insights for your research needs?`
    };

    return responses[category];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Add loading message
    const loadingMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: 'Analyzing application data and market intelligence...',
      sender: 'bot',
      timestamp: new Date(),
      isLoading: true
    };

    setMessages(prev => [...prev, loadingMessage]);

    try {
      const response = await generateResponse(inputText);
      
      // Remove loading message and add actual response
      setMessages(prev => {
        const filtered = prev.filter(msg => !msg.isLoading);
        return [...filtered, {
          id: (Date.now() + 2).toString(),
          text: response,
          sender: 'bot',
          timestamp: new Date()
        }];
      });
    } catch (error) {
      setMessages(prev => {
        const filtered = prev.filter(msg => !msg.isLoading);
        return [...filtered, {
          id: (Date.now() + 2).toString(),
          text: 'I apologize, but I encountered an issue accessing the latest market data. Please try rephrasing your question or contact our research team for detailed analysis.',
          sender: 'bot',
          timestamp: new Date()
        }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "Tell me about Salesforce",
    "Oracle database challenges",
    "Mainframe technology users",
    "Microsoft Office 365 analysis",
    "SAP implementation insights"
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          boxShadow: isOpen ? "0 0 0 rgba(59, 130, 246, 0)" : "0 0 20px rgba(59, 130, 246, 0.5)"
        }}
      >
        <i className="fas fa-brain text-2xl"></i>
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl h-[600px] flex flex-col overflow-hidden"
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-brain text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">AI Technology Assistant</h3>
                    <p className="text-sm text-white/80">Application analysis & market intelligence</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {message.isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                          <span className="text-sm">{message.text}</span>
                        </div>
                      ) : (
                        <div className="text-sm font-sans whitespace-pre-wrap">
                          {message.text.split('\n').map((line, index) => {
                            // Bold headers
                            if (line.startsWith('**') && line.endsWith('**')) {
                              return (
                                <div key={index} className="font-bold text-gray-900 mt-3 mb-2">
                                  {line.replace(/\*\*/g, '')}
                                </div>
                              );
                            }
                            // Bullet points
                            if (line.startsWith('• ')) {
                              return (
                                <div key={index} className="ml-2 mb-1">
                                  <span className="text-blue-600 mr-2">•</span>
                                  {line.substring(2)}
                                </div>
                              );
                            }
                            // Regular lines
                            return line ? <div key={index} className="mb-1">{line}</div> : <br key={index} />;
                          })}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="px-4 pb-2">
                  <p className="text-xs text-gray-500 mb-2">Quick questions to get started:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => setInputText(question)}
                        className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t bg-gray-50">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about any application: 'Tell me about Salesforce', 'Mainframe challenges', 'Oracle users'..."
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isLoading}
                    className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}