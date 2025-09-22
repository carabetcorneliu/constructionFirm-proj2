import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Luxury Residential Estate",
      category: "Residential",
      location: "Beverly Hills, CA",
      year: "2023",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzU4NDgzNTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Custom 8,500 sq ft luxury home with modern amenities and sustainable features.",
      features: ["8,500 sq ft", "5 Bedrooms", "Pool & Spa", "Smart Home"]
    },
    {
      id: 2,
      title: "Corporate Office Complex",
      category: "Commercial",
      location: "Downtown LA",
      year: "2023",
      image: "https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMG1vZGVybnxlbnwxfHx8fDE3NTg1MTY5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Modern 15-story office building with LEED Gold certification and state-of-the-art facilities.",
      features: ["15 Stories", "LEED Gold", "300,000 sq ft", "Parking Garage"]
    },
    {
      id: 3,
      title: "Industrial Warehouse Facility",
      category: "Industrial",
      location: "Long Beach, CA",
      year: "2022",
      image: "https://images.unsplash.com/photo-1716915372367-c170ee1e7d24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzU4NTE2OTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Large-scale distribution center with advanced logistics systems and loading docks.",
      features: ["500,000 sq ft", "50 Loading Docks", "Advanced Security", "Climate Control"]
    },
    {
      id: 4,
      title: "Mixed-Use Development",
      category: "Commercial",
      location: "Santa Monica, CA",
      year: "2023",
      image: "https://images.unsplash.com/photo-1695509098533-e4b1ba1479f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTg1MTY5MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Contemporary mixed-use building featuring residential units, retail spaces, and amenities.",
      features: ["200 Units", "Ground Floor Retail", "Rooftop Amenities", "Underground Parking"]
    },
    {
      id: 5,
      title: "Modern Family Home",
      category: "Residential",
      location: "Pasadena, CA",
      year: "2023",
      image: "https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTg0OTYwODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Energy-efficient family home with open floor plan and contemporary design elements.",
      features: ["3,200 sq ft", "4 Bedrooms", "Solar Panels", "Energy Efficient"]
    },
    {
      id: 6,
      title: "Manufacturing Plant",
      category: "Industrial",
      location: "Riverside, CA",
      year: "2022",
      image: "https://images.unsplash.com/photo-1568151769173-e7784208c098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzU4NDc4MzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "State-of-the-art manufacturing facility with specialized equipment installations.",
      features: ["250,000 sq ft", "Clean Room", "Heavy Equipment", "Safety Systems"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-600 uppercase tracking-wide">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl mt-2 mb-6">
            Featured Construction Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse portfolio of successful construction projects across 
            residential, commercial, and industrial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-black">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.year}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                      {feature}
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="w-full justify-between text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50">
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your construction needs and create something extraordinary together.
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4"
            onClick={scrollToContact}
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}