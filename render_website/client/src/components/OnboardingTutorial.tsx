import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TutorialProgress from "./TutorialProgress";

interface TooltipStep {
  id: string;
  target: string;
  title: string;
  content: string;
  position: "top" | "bottom" | "left" | "right";
  action?: "click" | "hover" | "scroll";
}

const tutorialSteps: TooltipStep[] = [
  {
    id: "ai-expert",
    target: ".ai-chat-section",
    title: "AI Technology Expert",
    content: "Ask questions about any technology to get comprehensive market intelligence, user data, and implementation insights. Try asking 'Tell me about SAP users'.",
    position: "top",
    action: "click"
  },
  {
    id: "navigation",
    target: ".dropdown:first-child",
    title: "Technology Database",
    content: "Browse 45+ technology categories with detailed user lists, industry breakdowns, and decision-maker contacts.",
    position: "bottom",
    action: "hover"
  },
  {
    id: "services",
    target: ".dropdown:nth-child(2)",
    title: "Professional Services",
    content: "Access technology research, market analysis, competitive intelligence, and API integration services.",
    position: "bottom",
    action: "hover"
  },
  {
    id: "industries",
    target: ".dropdown:nth-child(3)",
    title: "Industry Solutions",
    content: "Explore technology adoption patterns across fintech, healthcare, manufacturing, and sustainability sectors.",
    position: "bottom",
    action: "hover"
  },
  {
    id: "resources",
    target: ".dropdown:nth-child(4)",
    title: "Knowledge Resources",
    content: "Access documentation, API references, case studies, and research white papers for strategic insights.",
    position: "bottom",
    action: "hover"
  },
  {
    id: "data-tables",
    target: ".data-tables-section",
    title: "Interactive Data Tables",
    content: "Explore real enterprise technology adoption data with filtering, sorting, and export capabilities.",
    position: "top"
  },
  {
    id: "api-integration",
    target: ".api-integration-section",
    title: "API Integration",
    content: "Integrate our technology intelligence directly into your applications and workflows with our comprehensive APIs.",
    position: "top"
  }
];

interface OnboardingTutorialProps {
  isActive: boolean;
  onComplete: () => void;
  onSkip: () => void;
}

export default function OnboardingTutorial({ isActive, onComplete, onSkip }: OnboardingTutorialProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isActive || currentStep >= tutorialSteps.length) return;

    const step = tutorialSteps[currentStep];
    const element = document.querySelector(step.target) as HTMLElement;
    
    if (element) {
      setTargetElement(element);
      
      // Calculate tooltip position
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      
      let x = 0, y = 0;
      
      switch (step.position) {
        case "top":
          x = rect.left + scrollLeft + rect.width / 2;
          y = rect.top + scrollTop - 20;
          break;
        case "bottom":
          x = rect.left + scrollLeft + rect.width / 2;
          y = rect.bottom + scrollTop + 20;
          break;
        case "left":
          x = rect.left + scrollLeft - 20;
          y = rect.top + scrollTop + rect.height / 2;
          break;
        case "right":
          x = rect.right + scrollLeft + 20;
          y = rect.top + scrollTop + rect.height / 2;
          break;
      }
      
      setTooltipPosition({ x, y });
      
      // Scroll element into view
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "center",
        inline: "center" 
      });
      
      // Add highlight effect with enhanced visibility
      element.style.position = "relative";
      element.style.zIndex = "1001";
      element.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)";
      element.style.borderRadius = "12px";
      element.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
      element.style.backgroundColor = "rgba(59, 130, 246, 0.05)";
    }

    return () => {
      if (element) {
        element.style.position = "";
        element.style.zIndex = "";
        element.style.boxShadow = "";
        element.style.borderRadius = "";
        element.style.transition = "";
        element.style.backgroundColor = "";
      }
    };
  }, [currentStep, isActive]);

  const nextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    // Clean up any highlights
    if (targetElement) {
      targetElement.style.position = "";
      targetElement.style.zIndex = "";
      targetElement.style.boxShadow = "";
      targetElement.style.borderRadius = "";
      targetElement.style.transition = "";
      targetElement.style.backgroundColor = "";
    }
    onSkip();
  };

  if (!isActive || currentStep >= tutorialSteps.length) {
    return null;
  }

  const step = tutorialSteps[currentStep];

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-1000"
        style={{ zIndex: 1000 }}
      />

      {/* Tooltip */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed z-1002 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 max-w-sm"
          style={{
            left: step.position === "right" ? tooltipPosition.x : 
                  step.position === "left" ? tooltipPosition.x - 384 :
                  tooltipPosition.x - 192,
            top: step.position === "bottom" ? tooltipPosition.y :
                 step.position === "top" ? tooltipPosition.y - 200 :
                 tooltipPosition.y - 100,
            zIndex: 1002
          }}
        >
          {/* Arrow */}
          <div 
            className={`absolute w-3 h-3 bg-white border transform rotate-45 ${
              step.position === "top" ? "bottom-[-6px] left-1/2 -translate-x-1/2 border-t-0 border-l-0" :
              step.position === "bottom" ? "top-[-6px] left-1/2 -translate-x-1/2 border-b-0 border-r-0" :
              step.position === "left" ? "right-[-6px] top-1/2 -translate-y-1/2 border-t-0 border-l-0" :
              "left-[-6px] top-1/2 -translate-y-1/2 border-b-0 border-r-0"
            }`}
          />

          {/* Content */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
              <button 
                onClick={handleSkip}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{step.content}</p>
          </div>

          {/* Progress indicator */}
          <TutorialProgress 
            currentStep={currentStep}
            totalSteps={tutorialSteps.length}
            stepTitle={step.title}
          />

          {/* Action buttons */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-3 py-2 text-sm text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            
            <div className="flex gap-2">
              <button
                onClick={handleSkip}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Skip Tour
              </button>
              <button
                onClick={nextStep}
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                {currentStep === tutorialSteps.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>

          {/* Action hint */}
          {step.action && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200"
            >
              <p className="text-xs text-blue-700 flex items-center">
                <i className="fas fa-lightbulb mr-2"></i>
                {step.action === "click" && "Try interacting with this feature"}
                {step.action === "hover" && "Hover over this menu to explore options"}
                {step.action === "scroll" && "Scroll to explore more content"}
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Floating help button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-1001"
        style={{ zIndex: 1001 }}
      >
        <button
          onClick={handleSkip}
          className="w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
          title="Skip tutorial"
        >
          <i className="fas fa-question text-lg"></i>
        </button>
      </motion.div>
    </>
  );
}