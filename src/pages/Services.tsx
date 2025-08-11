import { useEffect, useRef } from "react";
import { CheckCircle, Truck, Pickaxe, Factory, Wrench, Shield, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up" ref={addToRefs}>
              <h1 className="heading-hero mb-8">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-base md:text-lg text-white leading-relaxed mb-8">
                Comprehensive automated lubrication solutions designed to protect your equipment, 
                reduce downtime, and improve operational efficiency across all industries.
              </p>
              <Link to="/contact" className="btn-hero-primary">
                Get Your Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Focus - Easylube */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="fade-in-up" ref={addToRefs}>
                <h2 className="heading-section">
                  Powered by <span className="text-secondary">Easylube®</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  World-leading automated lubrication systems that deliver precise, consistent lubrication 
                  to critical components, reducing maintenance costs and extending equipment life.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up" ref={addToRefs}>
                <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl aspect-square relative overflow-hidden shadow-medium">
                  <div className="absolute inset-0 pattern-dots opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-foreground">
                      <Wrench className="h-24 w-24 mx-auto mb-4 text-primary" />
                      <div className="text-2xl font-bold">Easylube®</div>
                      <div className="text-lg">System Demo</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="fade-in-up" ref={addToRefs}>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Why Choose Easylube® Systems?
                </h3>
                <div className="space-y-4">
                  {[
                    "Proven performance across industries worldwide",
                    "Reduces lubrication costs by up to 50%",
                    "Minimizes equipment downtime and failures",
                    "Environmental-friendly precision application",
                    "Easy installation and maintenance",
                    "Compatible with all equipment types"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="fade-in-up" ref={addToRefs}>
                <h2 className="heading-section">
                  Industry <span className="text-primary">Applications</span>
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Truck className="h-12 w-12" />,
                  title: "Heavy Vehicles",
                  description: "Automated lubrication for trucks, buses, construction vehicles, and fleet operations.",
                  applications: [
                    "Long-haul trucking fleets",
                    "Construction equipment",
                    "Public transport buses",
                    "Agricultural machinery"
                  ]
                },
                {
                  icon: <Pickaxe className="h-12 w-12" />,
                  title: "Mining Equipment",
                  description: "Robust solutions for harsh mining environments and heavy-duty machinery.",
                  applications: [
                    "Excavators and dozers",
                    "Haul trucks and loaders",
                    "Drilling equipment",
                    "Conveyor systems"
                  ]
                },
                {
                  icon: <Factory className="h-12 w-12" />,
                  title: "Process Industries",
                  description: "Precision lubrication for manufacturing and industrial processing equipment.",
                  applications: [
                    "Manufacturing lines",
                    "Processing equipment",
                    "Material handling",
                    "Pumps and compressors"
                  ]
                }
              ].map((industry, index) => (
                <div 
                  key={index}
                  className="fade-in-up bg-background rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300"
                  ref={addToRefs}
                >
                  <div className="text-primary mb-6">{industry.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{industry.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="fade-in-up" ref={addToRefs}>
                <h2 className="heading-section">
                  Complete <span className="text-secondary">Service Solutions</span>
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Wrench className="h-16 w-16" />,
                  title: "Supply & Installation",
                  description: "End-to-end supply and professional installation services for all Easylube® systems.",
                  features: [
                    "System design and specification",
                    "Equipment supply and delivery",
                    "Professional installation",
                    "System commissioning",
                    "Operator training",
                    "Documentation and certification"
                  ]
                },
                {
                  icon: <Shield className="h-16 w-16" />,
                  title: "Maintenance Programs",
                  description: "Comprehensive maintenance programs to ensure optimal system performance and longevity.",
                  features: [
                    "Scheduled maintenance visits",
                    "System health monitoring",
                    "Parts replacement and upgrades",
                    "Performance optimization",
                    "Emergency repair services",
                    "Detailed reporting and analytics"
                  ]
                },
                {
                  icon: <Phone className="h-16 w-16" />,
                  title: "Support Services",
                  description: "Ongoing technical support and consultation to maximize your system benefits.",
                  features: [
                    "24/7 technical support hotline",
                    "Remote system diagnostics",
                    "On-site troubleshooting",
                    "System optimization consulting",
                    "Training and education",
                    "Warranty and service agreements"
                  ]
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="fade-in-up text-center"
                  ref={addToRefs}
                >
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8">
                    <div className="text-primary mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <ul className="text-left space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-secondary text-secondary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up" ref={addToRefs}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                The Weerlo Advantage
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  {
                    title: "Safe & Reliable",
                    description: "Proven systems with safety certifications and consistent performance records."
                  },
                  {
                    title: "Cost Effective",
                    description: "Reduce maintenance costs, extend equipment life, and improve operational efficiency."
                  },
                  {
                    title: "Indigenous Values",
                    description: "Cultural understanding and community connection in every business relationship."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="opacity-90">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="fade-in-up max-w-3xl mx-auto" ref={addToRefs}>
            <h2 className="heading-section mb-6">
              Ready to Protect Your <span className="text-primary">Equipment?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Contact Weerlo Services today for a consultation on how automated lubrication 
              can transform your operations and reduce maintenance costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-hero-primary">
                Request Consultation
              </Link>
              <Link to="/partners" className="btn-outline-earth">
                Learn About Our Partners
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;