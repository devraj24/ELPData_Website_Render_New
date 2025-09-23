import { motion } from "framer-motion";

interface WelcomeAnimationProps {
  isVisible: boolean;
  onComplete: () => void;
}

export default function WelcomeAnimation({ isVisible, onComplete }: WelcomeAnimationProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 z-50 flex items-center justify-center"
    >
      <div className="text-center text-white max-w-2xl px-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <i className="fas fa-chart-network text-4xl text-white"></i>
          </div>
          <h1 className="text-5xl font-bold mb-4">Welcome to ELP Data</h1>
          <p className="text-xl text-white">Your Enterprise Technology Intelligence Platform</p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-database text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2 text-white">Technology Intelligence</h3>
              <p className="text-sm text-white">Access comprehensive enterprise technology data</p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-chart-line text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2 text-white">Market Intelligence</h3>
              <p className="text-sm text-white">Strategic insights and competitive analysis</p>
            </motion.div>
          </div>

          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onComplete();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Start Exploring
            <i className="fas fa-arrow-right ml-2"></i>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-8"
        >
          <p className="text-sm text-blue-300">
            We'll show you around with a quick interactive tour
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}