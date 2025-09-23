import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I can help you with technology information. Ask me about specific technologies and I'll provide detailed analysis including applications, target industries, target audience, and current challenges.", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    setMessages(prev => [...prev, { text, sender }]);
  };

  const analyzeMutation = useMutation({
    mutationFn: async (query: string) => {
      console.log('Analyzing technology:', query);
      const response = await fetch(`/api/analyze-technology`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ technology: query })
      });
      
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error(`Failed to analyze technology: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Analysis data received:', data);
      return data;
    },
    onSuccess: (data) => {
      console.log('Processing successful response:', data);
      try {
        const formattedResponse = formatAnalysisResponse(data);
        addMessage(formattedResponse, 'bot');
        setIsTyping(false);
      } catch (error) {
        console.error('Error formatting response:', error);
        addMessage("I received the analysis but had trouble formatting it. Please try again.", 'bot');
        setIsTyping(false);
      }
    },
    onError: (error) => {
      console.error('Mutation error:', error);
      addMessage("I'm having trouble analyzing that technology right now. Please try again or ask about a different technology.", 'bot');
      setIsTyping(false);
    }
  });

  const formatAnalysisResponse = (analysis: any): string => {
    if (!analysis) return "I couldn't analyze that technology. Please try asking about a specific technology like 'Cloud Computing', 'Artificial Intelligence', or 'Blockchain'.";

    let response = `${analysis.description}\n\n`;
    
    if (analysis.applications && analysis.applications.length > 0) {
      response += `🔧 Key Applications:\n${analysis.applications.slice(0, 5).map((app: string) => `• ${app}`).join('\n')}\n\n`;
    }
    
    if (analysis.targetIndustries && analysis.targetIndustries.length > 0) {
      response += `🏢 Target Industries:\n${analysis.targetIndustries.slice(0, 5).map((industry: string) => `• ${industry}`).join('\n')}\n\n`;
    }
    
    if (analysis.targetAudience && analysis.targetAudience.length > 0) {
      response += `👥 Target Audience:\n${analysis.targetAudience.slice(0, 5).map((audience: string) => `• ${audience}`).join('\n')}\n\n`;
    }
    
    if (analysis.challenges && analysis.challenges.length > 0) {
      response += `⚠️ Current Challenges:\n${analysis.challenges.slice(0, 5).map((challenge: string, index: number) => `${index + 1}. ${challenge}`).join('\n')}`;
    }
    
    return response;
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addMessage(userMessage, 'user');
    setInputValue("");
    setIsTyping(true);

    // Try OpenAI analysis first
    analyzeMutation.mutate(userMessage);
  };

  return (
    <section className="py-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-600 to-red-700 rounded-lg shadow-md">
              <i className="fas fa-robot text-sm text-white"></i>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">AI Technology Expert</h2>
              <p className="text-xs text-orange-600 font-medium">Powered by Advanced AI Analytics</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Get instant insights on any enterprise technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg">
            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto custom-scrollbar p-4 space-y-3 bg-white">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-md px-4 py-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-50 text-gray-800 border border-gray-200'
                    }`}
                  >
                    {message.sender === 'bot' && (
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mr-2">
                          <i className="fas fa-robot text-white text-xs"></i>
                        </div>
                        <span className="text-xs font-semibold text-gray-700">AI Technology Expert</span>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-50 text-gray-800 border border-gray-200 px-4 py-3 rounded-lg max-w-md">
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mr-2">
                        <i className="fas fa-robot text-white text-xs"></i>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">AI Technology Expert</span>
                    </div>
                    <div className="flex items-center">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="ml-2 text-xs text-gray-600">Analyzing...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 bg-gray-50 p-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e as any)}
                  placeholder="Ask about any technology (e.g., 'Tell me about SAP users')"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent bg-white text-gray-800 placeholder-gray-500 text-sm"
                  disabled={isTyping}
                />
                <button
                  type="button"
                  onClick={() => handleSubmit({ preventDefault: () => {} } as any)}
                  disabled={!inputValue.trim() || isTyping}
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-1 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <i className="fas fa-paper-plane text-sm"></i>
                </button>
              </div>
              
              {/* Quick Actions */}
              <div className="flex flex-wrap gap-1 mt-2">
                {[
                  "SAP",
                  "VMware",
                  "Salesforce",
                  "Oracle",
                  "AWS",
                  "Microsoft"
                ].map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setInputValue(suggestion)}
                    className="text-xs bg-white text-gray-700 px-2 py-1 rounded border hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}