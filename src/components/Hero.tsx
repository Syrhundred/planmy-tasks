import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-study.jpg";
import { Calendar, CheckSquare, Target, Clock } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Clean minimal overlay */}
      <div className="absolute inset-0 bg-background/50"></div>
      
      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Smart Study
                <span className="text-primary block">
                  Planner
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
                Organize your study tasks, manage deadlines, and boost productivity. 
                The only planner you need to excel in your studies.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4 text-foreground" />
                Calendar Integration
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckSquare className="w-4 h-4 text-foreground" />
                Task Management
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Target className="w-4 h-4 text-foreground" />
                Goal Tracking
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-foreground" />
                Deadline Alerts
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-base px-8 py-6 h-auto"
                onClick={() => {
                  // For now, just scroll to show more content
                  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                }}
              >
                Start Planning
              </Button>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative lg:order-last">
            <div className="relative border border-border overflow-hidden">
              <img 
                src={heroImage} 
                alt="Study planning workspace" 
                className="w-full h-[400px] lg:h-[500px] object-cover grayscale"
              />
              <div className="absolute inset-0 bg-background/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;