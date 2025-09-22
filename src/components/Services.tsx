import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Home, Building2, Factory, Hammer, Wrench, Paintbrush } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, renovations, and residential building projects with attention to detail and quality craftsmanship.",
      features: ["Custom Home Building", "Kitchen & Bath Remodeling", "Home Extensions", "Interior Renovations"]
    },
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial facilities designed for functionality and aesthetic appeal.",
      features: ["Office Buildings", "Retail Spaces", "Restaurants", "Medical Facilities"]
    },
    {
      icon: Factory,
      title: "Industrial Construction",
      description: "Warehouses, manufacturing facilities, and industrial complexes built to meet specific operational needs.",
      features: ["Warehouses", "Manufacturing Plants", "Distribution Centers", "Industrial Facilities"]
    },
    {
      icon: Hammer,
      title: "General Contracting",
      description: "Complete project management from planning to completion, ensuring seamless execution of your vision.",
      features: ["Project Management", "Permit Assistance", "Timeline Coordination", "Quality Control"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Repairs",
      description: "Ongoing maintenance services and repair work to keep your property in excellent condition.",
      features: ["Preventive Maintenance", "Emergency Repairs", "System Upgrades", "Property Inspections"]
    },
    {
      icon: Paintbrush,
      title: "Finishing Services",
      description: "Professional finishing touches including painting, flooring, and interior design coordination.",
      features: ["Interior Painting", "Flooring Installation", "Trim & Molding", "Final Inspections"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-600 uppercase tracking-wide">Our Services</span>
          <h2 className="text-3xl md:text-4xl mt-2 mb-6">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From residential homes to commercial buildings and industrial facilities, 
            we provide complete construction services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
                  onClick={scrollToContact}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Get a free consultation and detailed quote for your construction project. 
              Our experts are ready to bring your vision to life.
            </p>
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4"
              onClick={scrollToContact}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}