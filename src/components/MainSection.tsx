import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, Zap, Users } from "lucide-react";

const MainSection = () => {
  const handleRegisterClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSegto-z74zObQzhSYVPd8l3UMe8E20TAMfC38OuJdMGxFNH2w/viewform",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neural network background */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-ai-glow rounded-full animate-ai-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-ai-electric rounded-full animate-ai-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-ai-neural rounded-full animate-ai-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-ai-glow rounded-full animate-ai-pulse" style={{ animationDelay: "0.5s" }} />
        
        {/* Floating lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-neural opacity-30"
            initial={{ width: 0, x: -100 }}
            animate={{ width: 200, x: window.innerWidth }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
            style={{
              top: `${30 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        {/* Main CTA */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-orbitron font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-foreground">Join the Future of </span>
            <span className="bg-gradient-ai-primary bg-clip-text text-transparent animate-glow-intense">
              Artificial Intelligence
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              onClick={handleRegisterClick}
              size="lg"
              className="group relative px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
            >
              <span className="relative z-10 flex items-center gap-3">
                Register Now
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-neural opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Description Card */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Glassmorphism Card */}
          <div className="relative backdrop-blur-lg bg-gradient-ai-card border border-border/30 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-neural opacity-20 blur-sm" />
            
            <div className="relative z-10 space-y-6">
              <motion.h3
                className="text-xl sm:text-2xl font-orbitron font-bold text-primary mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                About the Centre
              </motion.h3>
              
              <motion.p
                className="text-base sm:text-lg text-foreground/90 font-inter leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                The Centre of Excellence in AI is a dedicated space to foster innovation, research, 
                and collaboration among students and faculty, driving the future of intelligent technologies. 
                Join us in shaping tomorrow's AI landscape through cutting-edge research and practical applications.
              </motion.p>

              {/* Feature Icons */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-background/20 backdrop-blur-sm">
                  <Brain className="w-8 h-8 text-primary animate-ai-pulse" />
                  <span className="text-sm font-medium text-foreground/80">AI Research</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-background/20 backdrop-blur-sm">
                  <Zap className="w-8 h-8 text-ai-electric animate-ai-pulse" style={{ animationDelay: "0.5s" }} />
                  <span className="text-sm font-medium text-foreground/80">Innovation Hub</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-background/20 backdrop-blur-sm">
                  <Users className="w-8 h-8 text-ai-neural animate-ai-pulse" style={{ animationDelay: "1s" }} />
                  <span className="text-sm font-medium text-foreground/80">Collaboration</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainSection;