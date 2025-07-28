import { useState } from "react";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <Dashboard />;
  }

  return (
    <div>
      <Hero />
      <div className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get organized?</h2>
          <p className="text-muted-foreground mb-8">
            Experience the dashboard and start managing your study tasks effectively.
          </p>
          <button 
            onClick={() => setShowDashboard(true)}
            className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-elegant"
          >
            View Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
