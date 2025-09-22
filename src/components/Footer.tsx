import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl mb-4">BuildCraft</h3>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Professional construction services with over 15 years of experience. 
                We build your vision into reality with quality craftsmanship and 
                reliable service.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-yellow-400" />
                  <span>info@buildcraft.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span>123 Construction Ave, Los Angeles, CA 90210</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection("home")}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("about")}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("services")}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("projects")}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("contact")}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg mb-4">Our Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Residential Construction</li>
                <li>Commercial Buildings</li>
                <li>Industrial Facilities</li>
                <li>Renovations & Remodeling</li>
                <li>General Contracting</li>
                <li>Maintenance Services</li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="max-w-md">
              <h4 className="text-lg mb-4">Stay Updated</h4>
              <p className="text-primary-foreground/80 mb-4">
                Subscribe to our newsletter for construction tips and project updates.
              </p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email address"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-primary-foreground/80 text-sm">
              © 2024 BuildCraft Construction. All rights reserved.
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                License Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}