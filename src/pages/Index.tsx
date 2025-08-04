import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AILoader from "@/components/AILoader";
import DescriptionLoader from "@/components/DescriptionLoader";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import DescriptionSection from "@/components/DescriptionSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showDescription, setShowDescription] = useState(false);
  const [isDescriptionLoading, setIsDescriptionLoading] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleDescriptionClick = () => {
    setIsDescriptionLoading(true);
    setTimeout(() => {
      setIsDescriptionLoading(false);
      setShowDescription(true);
    }, 2000);
  };

  const handleBackToMain = () => {
    setShowDescription(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <AILoader onComplete={handleLoadingComplete} />
        ) : isDescriptionLoading ? (
          <DescriptionLoader />
        ) : showDescription ? (
          <div>
            <Header onDescriptionClick={handleBackToMain} />
            <DescriptionSection />
          </div>
        ) : (
          <div>
            <Header onDescriptionClick={handleDescriptionClick} />
            <MainSection />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
