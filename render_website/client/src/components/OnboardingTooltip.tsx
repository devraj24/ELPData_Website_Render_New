import { motion } from "framer-motion";

interface OnboardingTooltipProps {
  title: string;
  content: string;
  position: { x: number; y: number };
  arrowDirection: "top" | "bottom" | "left" | "right";
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  onSkip: () => void;
  canGoPrevious: boolean;
  isLastStep: boolean;
  actionHint?: string;
}

export default function OnboardingTooltip({
  title,
  content,
  position,
  arrowDirection,
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  onSkip,
  canGoPrevious,
  isLastStep,
  actionHint
}: OnboardingTooltipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed z-1002 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 max-w-sm"
      style={{
        left: arrowDirection === "right" ? position.x : 
              arrowDirection === "left" ? position.x - 384 :
              position.x - 192,
        top: arrowDirection === "bottom" ? position.y :
             arrowDirection === "top" ? position.y - 200 :
             position.y - 100,
        zIndex: 1002
      }}
    >
      {/* Arrow */}
      <div 
        className={`absolute w-3 h-3 bg-white border transform rotate-45 ${
          arrowDirection === "top" ? "bottom-[-6px] left-1/2 -translate-x-1/2 border-t-0 border-l-0" :
          arrowDirection === "bottom" ? "top-[-6px] left-1/2 -translate-x-1/2 border-b-0 border-r-0" :
          arrowDirection === "left" ? "right-[-6px] top-1/2 -translate-y-1/2 border-t-0 border-l-0" :
          "left-[-6px] top-1/2 -translate-y-1/2 border-b-0 border-r-0"
        }`}
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <button 
          onClick={onSkip}
          className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          title="Skip tutorial"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>

      {/* Content */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{content}</p>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span>Step {currentStep + 1} of {totalSteps}</span>
          <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <motion.div 
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Action Hint */}
      {actionHint && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200"
        >
          <p className="text-xs text-blue-700 flex items-center">
            <i className="fas fa-lightbulb mr-2"></i>
            {actionHint}
          </p>
        </motion.div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="px-3 py-2 text-sm text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <i className="fas fa-arrow-left mr-1"></i>
          Back
        </button>
        
        <div className="flex gap-2">
          <button
            onClick={onSkip}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Skip Tour
          </button>
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center gap-2"
          >
            {isLastStep ? (
              <>
                <i className="fas fa-check"></i>
                Finish
              </>
            ) : (
              <>
                Next
                <i className="fas fa-arrow-right"></i>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}