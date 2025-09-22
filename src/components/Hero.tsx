import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, CheckCircle } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1748771886624-0f0aa2729a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU4NDgyNjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              <CheckCircle className="h-4 w-4 mr-2" />
              Licensed & Insured
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Building Your
            <span className="text-yellow-400 block">Vision Into Reality</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            Professional construction services for residential, commercial, and industrial projects. 
            Quality craftsmanship with over 15 years of experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("contact")}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection("projects")}
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
            >
              View Our Work
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl text-yellow-400 mb-2">500+</div>
              <p className="text-gray-200">Projects Completed</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl text-yellow-400 mb-2">15+</div>
              <p className="text-gray-200">Years Experience</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl text-yellow-400 mb-2">98%</div>
              <p className="text-gray-200">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}