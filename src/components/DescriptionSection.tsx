import { motion } from "framer-motion";
import collegeLogoPng from "@/assets/college-logo.png";
import coeAiLogoPng from "@/assets/coe-ai-logo.png";

const DescriptionSection = () => {
  return (
    <motion.div
      className="min-h-screen bg-background px-4 sm:px-6 lg:px-8 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Logos Section */}
        <motion.div
          className="flex items-center justify-center gap-8 mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img
            src={collegeLogoPng}
            alt="K.R. Mangalam University"
            className="h-16 sm:h-20 w-auto"
          />
          <div className="h-12 w-px bg-gradient-neural"></div>
          <img
            src={coeAiLogoPng}
            alt="Centre of Excellence in AI"
            className="h-16 sm:h-20 w-auto"
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="glass-card p-8 sm:p-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Header */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-primary mb-8 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            🚀 Your AI Career Starts at K.R. Mangalam University!
          </motion.h1>

          {/* Welcome Text */}
          <motion.p
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Welcome! This is your application to join{" "}
            <span className="text-primary font-semibold">
              K.R. Mangalam University's
            </span>{" "}
            Centre of Excellence in AI (CoE-AI), an exclusive launchpad for
            students ready to move beyond textbooks and build the future.
          </motion.p>

          {/* Features List */}
          <motion.div
            className="mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold text-foreground mb-6">
              At the CoE-AI, you will get:
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  icon: "⚡",
                  text: "Access to a high-end GPU cluster for your most ambitious projects."
                },
                {
                  icon: "🛠️",
                  text: "The chance to build a real-world project portfolio that gets you hired."
                },
                {
                  icon: "🤝",
                  text: "Direct mentorship from seasoned industry experts and academics."
                },
                {
                  icon: "🎓",
                  text: "A direct pathway to exclusive internship opportunities."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/30"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer Text */}
          <motion.p
            className="text-muted-foreground leading-relaxed text-center p-6 bg-card/30 rounded-lg border border-border/20"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            This application is for driven, passionate, and committed students
            who want to become leaders in the AI revolution. Please fill out the
            form carefully, as your responses will be used for the shortlisting
            process.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DescriptionSection;