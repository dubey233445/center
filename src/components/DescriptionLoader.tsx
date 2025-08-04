import { motion } from "framer-motion";

const DescriptionLoader = () => {
  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        {/* Rotating AI Brain */}
        <motion.div
          className="w-20 h-20 mx-auto mb-6 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 border-4 border-primary/30 rounded-full"></div>
          <div className="absolute inset-2 border-4 border-primary/60 rounded-full"></div>
          <div className="absolute inset-4 border-4 border-primary rounded-full"></div>
          <motion.div
            className="absolute inset-6 bg-primary rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Data Stream Lines */}
        <div className="relative w-64 h-4 mx-auto mb-6 overflow-hidden rounded-full bg-card">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 h-full w-16 bg-gradient-to-r from-transparent via-primary to-transparent"
              animate={{ x: [-64, 320] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.p
          className="text-primary font-orbitron text-lg"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Initializing AI Description...
        </motion.p>

        {/* Neural Network Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DescriptionLoader;