import { motion } from "framer-motion";

interface TutorialProgressProps {
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
}

export default function TutorialProgress({ currentStep, totalSteps, stepTitle }: TutorialProgressProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
        <span className="font-medium">{stepTitle}</span>
        <span className="text-xs">
          {currentStep + 1} of {totalSteps}
        </span>
      </div>
      
      <div className="relative w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-sm"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
        />
        
        {/* Animated shine effect */}
        <motion.div
          className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
          animate={{
            x: ['-100%', '300%']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>Getting Started</span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
    </div>
  );
}