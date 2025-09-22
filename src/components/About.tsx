import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Calendar, Shield } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-yellow-600 uppercase tracking-wide">About BuildCraft</span>
              <h2 className="text-3xl md:text-4xl mt-2 mb-6">
                Building Excellence Since 2008
              </h2>
            </div>
            
            <p className="text-muted-foreground text-lg mb-6">
              With over 15 years of experience in the construction industry, BuildCraft has established 
              itself as a trusted partner for residential, commercial, and industrial construction projects. 
              Our commitment to quality, safety, and customer satisfaction drives everything we do.
            </p>

            <p className="text-muted-foreground mb-8">
              We specialize in delivering projects on time and within budget, using the latest construction 
              techniques and sustainable building practices. Our team of skilled professionals ensures that 
              every project meets the highest standards of craftsmanship.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="mb-1">Licensed & Certified</h4>
                  <p className="text-sm text-muted-foreground">Fully licensed and insured for your peace of mind</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="mb-1">Expert Team</h4>
                  <p className="text-sm text-muted-foreground">Skilled craftsmen and project managers</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Calendar className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="mb-1">On-Time Delivery</h4>
                  <p className="text-sm text-muted-foreground">Committed to meeting project deadlines</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="mb-1">Quality Guarantee</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive warranty on all our work</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtfGVufDF8fHx8MTc1ODUxNjg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Construction team working together"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border">
              <div className="text-center">
                <div className="text-2xl text-yellow-600 mb-1">500+</div>
                <p className="text-sm text-muted-foreground">Successful Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}