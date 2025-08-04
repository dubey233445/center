import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AILoaderProps {
  onComplete: () => void;
}

const AILoader = ({ onComplete }: AILoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center space-y-8">
        {/* Neural Network Animation */}
        <div className="relative w-32 h-32 mx-auto">
          {/* Central Node */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full animate-ai-pulse" />
          
          {/* Orbital Nodes */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-ai-electric rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, ease: "linear", delay: i * 1 },
                scale: { duration: 2, repeat: Infinity, delay: i * 0.5 },
              }}
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: `${20 + i * 15}px 0`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
          
          {/* Circuit Lines */}
          <div className="absolute inset-0 animate-circuit-rotate">
            <svg className="w-full h-full" viewBox="0 0 128 128">
              <circle
                cx="64"
                cy="64"
                r="50"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="1"
                strokeDasharray="5,5"
                className="animate-neural-flow"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--ai-glow))" />
                  <stop offset="50%" stopColor="hsl(var(--ai-electric))" />
                  <stop offset="100%" stopColor="hsl(var(--ai-neural))" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <motion.h2
            className="text-2xl font-orbitron font-bold text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Initializing AI System
          </motion.h2>
          
          {/* Progress Bar */}
          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto">
            <motion.div
              className="h-full bg-gradient-neural rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          
          <motion.p
            className="text-muted-foreground font-inter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Loading neural pathways... {progress}%
          </motion.p>
        </div>

        {/* Floating Data Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-ai-glow rounded-full"
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut",
            }}
            style={{
              left: `${20 + i * 10}%`,
              bottom: "20%",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AILoader;