import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, Users, Download } from 'lucide-react';

interface NotificationData {
  id: number;
  name: string;
  company: string;
  action: string;
  technology: string;
  timeAgo: string;
  icon: 'purchase' | 'enrolled' | 'acquired';
}

const socialProofData: NotificationData[] = [
  { id: 1, name: "Sarah M.", company: "Microsoft", action: "acquired", technology: "SAP ERP Users List (368,700)", timeAgo: "2 hours ago", icon: "acquired" },
  { id: 2, name: "David L.", company: "Oracle", action: "purchased", technology: "VMware Users Database (391,200)", timeAgo: "6 hours ago", icon: "purchase" },
  { id: 3, name: "Jennifer K.", company: "IBM", action: "enrolled", technology: "Salesforce.com List (599,000)", timeAgo: "1 day ago", icon: "enrolled" },
  { id: 4, name: "Michael R.", company: "Salesforce", action: "acquired", technology: "PEO/EOR Services (167,365)", timeAgo: "3 hours ago", icon: "acquired" },
  { id: 5, name: "Lisa T.", company: "Amazon", action: "purchased", technology: "JD Edwards Users (47,982)", timeAgo: "8 hours ago", icon: "purchase" },
  { id: 6, name: "Robert W.", company: "Google", action: "enrolled", technology: "Microsoft Dynamics AX (26,322)", timeAgo: "5 hours ago", icon: "enrolled" },
  { id: 7, name: "Maria G.", company: "VMware", action: "acquired", technology: "Oracle CRM Database (3,339)", timeAgo: "12 hours ago", icon: "acquired" },
  { id: 8, name: "James H.", company: "Adobe", action: "purchased", technology: "Microsoft Dynamics CRM (18,348)", timeAgo: "4 hours ago", icon: "purchase" },
  { id: 9, name: "Amanda S.", company: "Zapier (USA)", action: "enrolled", technology: "Marketing Automation Users List", timeAgo: "this week", icon: "enrolled" },
  { id: 10, name: "Kevin P.", company: "Notion (USA)", action: "acquired", technology: "AI Agents Workflow Integration", timeAgo: "this month", icon: "acquired" },
  { id: 11, name: "Rachel B.", company: "Buffer (UK)", action: "purchased", technology: "Social Media Management Database", timeAgo: "two days ago", icon: "purchase" },
  { id: 12, name: "Thomas A.", company: "Calendly (USA)", action: "acquired", technology: "AI Agents Scheduling Intelligence", timeAgo: "last week", icon: "acquired" },
  { id: 13, name: "Nicole F.", company: "Personio (Germany)", action: "enrolled", technology: "SAP Implementation Users Database", timeAgo: "this month", icon: "enrolled" },
  { id: 14, name: "Daniel C.", company: "Monday.com (Israel)", action: "purchased", technology: "Authorize.Net Payment Gateway Users", timeAgo: "this week", icon: "purchase" },
  { id: 15, name: "Jessica L.", company: "Loom (USA)", action: "acquired", technology: "AI Agents Video Communication", timeAgo: "last week", icon: "acquired" },
  { id: 16, name: "Mark D.", company: "Criteo (France)", action: "enrolled", technology: "Digital Advertising Users Database", timeAgo: "this month", icon: "enrolled" },
  { id: 17, name: "Stephanie M.", company: "Airtable (USA)", action: "purchased", technology: "AI Agents Database Intelligence", timeAgo: "two days ago", icon: "purchase" },
  { id: 18, name: "Christopher E.", company: "Figma (USA)", action: "acquired", technology: "Design Software Users List", timeAgo: "last week", icon: "acquired" },
  { id: 19, name: "Lauren J.", company: "Miro (Netherlands)", action: "enrolled", technology: "AI Agents Collaboration Platform", timeAgo: "this month", icon: "enrolled" },
  { id: 20, name: "Andrew K.", company: "Linear (UK)", action: "purchased", technology: "Development Tools Users Database", timeAgo: "this week", icon: "purchase" },
  { id: 21, name: "Melissa R.", company: "Intercom (Ireland)", action: "acquired", technology: "AI Agents Customer Support", timeAgo: "last month", icon: "acquired" },
  { id: 22, name: "Ryan T.", company: "Mixpanel (USA)", action: "purchased", technology: "Analytics Software Users List", timeAgo: "last week", icon: "purchase" },
  { id: 23, name: "Hannah W.", company: "Typeform (Spain)", action: "enrolled", technology: "AI Agents Lead Generation", timeAgo: "this month", icon: "enrolled" },
  { id: 24, name: "Brandon G.", company: "Segment (USA)", action: "acquired", technology: "Braintree Payment Gateway Users", timeAgo: "last month", icon: "acquired" },
  { id: 25, name: "Samantha H.", company: "Branch (USA)", action: "purchased", technology: "AI Agents Mobile Analytics", timeAgo: "last week", icon: "purchase" },
  { id: 26, name: "Justin P.", company: "Adyen (Netherlands)", action: "enrolled", technology: "Stripe Payment Gateway Users", timeAgo: "this month", icon: "enrolled" },
  { id: 27, name: "Natalie S.", company: "Sage (UK)", action: "acquired", technology: "AI Agents Financial Automation", timeAgo: "last month", icon: "acquired" },
  { id: 28, name: "Tyler B.", company: "Element AI (Canada)", action: "purchased", technology: "Enterprise AI Users List", timeAgo: "last week", icon: "purchase" },
  { id: 29, name: "Victoria A.", company: "Freshworks (USA)", action: "enrolled", technology: "AI Agents Customer Experience", timeAgo: "this month", icon: "enrolled" },
  { id: 30, name: "Zachary F.", company: "Klaviyo (USA)", action: "acquired", technology: "E-commerce Marketing Database", timeAgo: "last month", icon: "acquired" },
  { id: 31, name: "Brittany L.", company: "Aircall (France)", action: "purchased", technology: "AI Agents Call Center Intelligence", timeAgo: "last week", icon: "purchase" },
  { id: 32, name: "Jonathan D.", company: "Lightspeed (Canada)", action: "enrolled", technology: "Retail Technology Users Database", timeAgo: "this month", icon: "enrolled" },
  { id: 33, name: "Courtney M.", company: "Xero (UK)", action: "acquired", technology: "AI Agents Accounting Automation", timeAgo: "last month", icon: "acquired" },
  { id: 34, name: "Austin E.", company: "Lemlist (France)", action: "purchased", technology: "Sales Outreach Users List", timeAgo: "last week", icon: "purchase" },
  { id: 35, name: "Kayla J.", company: "Contentful (Germany)", action: "enrolled", technology: "AI Agents Content Management", timeAgo: "this month", icon: "enrolled" },
  { id: 36, name: "Trevor K.", company: "Mollie (Netherlands)", action: "acquired", technology: "PayPal Payment Gateway Users", timeAgo: "last month", icon: "acquired" },
  { id: 37, name: "Alexis R.", company: "Coupa (Canada)", action: "purchased", technology: "AI Agents Procurement Intelligence", timeAgo: "last week", icon: "purchase" },
  { id: 38, name: "Cody T.", company: "Monzo (UK)", action: "enrolled", technology: "Worldpay Payment Gateway Users", timeAgo: "this month", icon: "enrolled" },
  { id: 39, name: "Sierra W.", company: "BlaBlaCar (France)", action: "acquired", technology: "AI Agents Travel Platform Intelligence", timeAgo: "last month", icon: "acquired" },
  { id: 40, name: "Blake G.", company: "Ubisoft (France)", action: "purchased", technology: "Gaming Technology Users Database", timeAgo: "last month", icon: "purchase" }
];

export default function SocialProofNotification() {
  const [currentNotification, setCurrentNotification] = useState<NotificationData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [notificationIndex, setNotificationIndex] = useState(0);

  useEffect(() => {
    const showNotification = () => {
      if (notificationIndex < socialProofData.length) {
        setCurrentNotification(socialProofData[notificationIndex]);
        setIsVisible(true);
        
        // Hide notification after 4 seconds
        setTimeout(() => {
          setIsVisible(false);
        }, 4000);
        
        // Move to next notification after 5 seconds
        setTimeout(() => {
          setNotificationIndex((prev) => (prev + 1) % socialProofData.length);
        }, 5000);
      }
    };

    // Start showing notifications after 3 seconds
    const initialDelay = setTimeout(showNotification, 3000);
    
    // Continue showing notifications every 6 seconds
    const interval = setInterval(showNotification, 6000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [notificationIndex]);

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'purchase':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'enrolled':
        return <Users className="w-4 h-4 text-blue-500" />;
      case 'acquired':
        return <Download className="w-4 h-4 text-purple-500" />;
      default:
        return <CheckCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getActionColor = (action: string) => {
    switch (action) {
      case 'purchased':
        return 'text-green-600';
      case 'enrolled':
        return 'text-blue-600';
      case 'acquired':
        return 'text-purple-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isVisible && currentNotification && (
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                {getIcon(currentNotification.icon)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-900 text-sm">
                    {currentNotification.name}
                  </span>
                  <span className="text-xs text-gray-500">from</span>
                  <span className="font-medium text-gray-700 text-sm">
                    {currentNotification.company}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className={`font-medium ${getActionColor(currentNotification.action)}`}>
                    {currentNotification.action}
                  </span>
                  <span className="mx-1">the</span>
                  <span className="font-medium text-gray-800">
                    {currentNotification.technology}
                  </span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {currentNotification.timeAgo}
                </div>
              </div>
            </div>
            
            {/* Progress bar */}
            <motion.div
              className="h-1 bg-gray-100 rounded-full mt-3 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}