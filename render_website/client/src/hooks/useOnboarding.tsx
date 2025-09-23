import { useState, useEffect } from "react";

const ONBOARDING_STORAGE_KEY = "elp-data-onboarding-completed";

export function useOnboarding() {
  const [isOnboardingActive, setIsOnboardingActive] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Check if user has completed onboarding before
    const hasCompletedOnboarding = localStorage.getItem(ONBOARDING_STORAGE_KEY);
    
    if (!hasCompletedOnboarding) {
      // Skip welcome animation - allow direct homepage access
      localStorage.setItem(ONBOARDING_STORAGE_KEY, "true");
    }
  }, []);

  const completeWelcome = () => {
    setShowWelcome(false);
    // Skip onboarding tutorial entirely
    localStorage.setItem(ONBOARDING_STORAGE_KEY, "true");
  };

  const startOnboarding = () => {
    setIsOnboardingActive(true);
  };

  const completeOnboarding = () => {
    setIsOnboardingActive(false);
    localStorage.setItem(ONBOARDING_STORAGE_KEY, "true");
  };

  const skipOnboarding = () => {
    setIsOnboardingActive(false);
    localStorage.setItem(ONBOARDING_STORAGE_KEY, "true");
  };

  const resetOnboarding = () => {
    localStorage.removeItem(ONBOARDING_STORAGE_KEY);
    setIsFirstVisit(true);
    setIsOnboardingActive(true);
  };

  return {
    isOnboardingActive,
    isFirstVisit,
    showWelcome,
    startOnboarding,
    completeOnboarding,
    skipOnboarding,
    resetOnboarding,
    completeWelcome
  };
}