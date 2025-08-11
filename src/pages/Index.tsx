import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Wrench, Globe2, Award, CheckCircle, Play, Star, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Enhanced parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setScrollY(scrolled);
      
      if (heroRef.current) {
        const rate = scrolled * -0.3;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    // Enhanced intersection observer with stagger delays
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('in-view');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    
    // Trigger initial visibility
    setTimeout(() => setIsVisible(true), 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "500+", label: "Projects Completed" },
    { icon: <Star className="h-8 w-8" />, value: "95.9%", label: "Uptime Guarantee" },
    { icon: <Shield className="h-8 w-8" />, value: "100%", label: "Safety Record" },
    { icon: <Zap className="h-8 w-8" />, value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - World-Class Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        {/* Background Elements */}
        <div 
          ref={heroRef}
          className="absolute inset-0 pattern-indigenous opacity-5"
        />
        
        {/* Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 lg:w-[600px] lg:h-[600px] opacity-8">
            <img 
              src="/lovable-uploads/222738a5-32e2-46fb-b95a-f49a880f3e51.png" 
              alt="Weerlo Logo Background" 
              className="w-full h-full object-contain grayscale"
            />
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white">Indigenous-Owned • Premium Solutions</span>
              </div>
              
              <h1 className="heading-hero mb-8 text-white">
                Replace the Old.<br />
                <span className="text-primary animate-glow">Bring the New.</span>
              </h1>
              
              <p className="text-base md:text-lg mb-12 text-white/90 max-w-4xl mx-auto">
                Indigenous-owned Weerlo Services provides premium automated lubrication solutions across Australia, 
                combining cultural values with cutting-edge Easylube® technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Button asChild variant="hero-primary" size="hero" className="group">
                  <Link to="/services">
                    <span>Our Services</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Link to="/about" className="btn-outline-premium">
                  <span>Our Story</span>
                </Link>
                <button className="btn-ghost-premium group text-white hover:text-tertiary">
                  <Play className="mr-2 h-5 w-5" />
                  <span>Watch Video</span>
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover-lift"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="text-primary mb-3 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
          <p className="text-xs text-white/60 mt-2 text-center">Scroll to explore</p>
        </div>
      </section>

      {/* Premium Services Preview */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="fade-in-up text-center mb-12" ref={addToRefs}>
            <h2 className="heading-section">
              Our <span className="text-gradient-earth">Core Services</span>
            </h2>
            <p className="text-large max-w-3xl mx-auto">
              Comprehensive solutions for all your automated lubrication needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <Wrench className="h-12 w-12 text-primary" />,
                title: "Supply & Installation",
                description: "Comprehensive supply and professional installation of Easylube® automated lubrication systems for all equipment types.",
                features: ["Heavy Vehicles", "Mining Equipment", "Process Industries"],
              },
              {
                icon: <Shield className="h-12 w-12 text-secondary" />,
                title: "Maintenance & Support",
                description: "Ongoing maintenance programs ensuring your systems operate safely and efficiently with minimal downtime.",
                features: ["24/7 Support", "Preventive Maintenance", "Emergency Response"],
              },
              {
                icon: <Globe2 className="h-12 w-12 text-ochre" />,
                title: "Australia Wide",
                description: "Serving clients across Australia with local knowledge and cultural understanding of diverse communities.",
                features: ["Remote Areas", "Urban Centers", "Indigenous Communities"],
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="card-premium hover-lift group"
                ref={addToRefs}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="heading-subsection mb-4">{service.title}</h3>
                <p className="text-body mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button variant="ghost" className="group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild variant="hero-primary" size="hero">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced Design */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container-custom relative z-10">
          <div className="fade-in-up text-center mb-12" ref={addToRefs}>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
            </div>
            <h2 className="heading-section mb-8">
              Weerlo Services is the Premier Provider of <span className="text-gradient-earth">Easylube® for Australia</span>
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="card-premium border-l-4 border-l-primary pl-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">Innovation Since 1992</h3>
                  <p className="text-body">
                    Easylube® pioneered the world's first mechanical single-point automatic lubricator and continues to produce 
                    the market's most advanced total lubrication management system with cutting-edge technology.
                  </p>
                </div>
                
                <div className="card-premium border-l-4 border-l-secondary pl-8">
                  <h3 className="text-xl font-bold mb-4 text-secondary">Cultural Values + Technology</h3>
                  <p className="text-body">
                    Weerlo Services brings together Indigenous cultural values with cutting-edge lubrication technology, 
                    providing premium automated lubrication systems across mining to manufacturing industries.
                  </p>
                </div>
                
                <div className="card-premium border-l-4 border-l-ochre pl-8">
                  <h3 className="text-xl font-bold mb-4 text-ochre">Commitment to Country</h3>
                  <p className="text-body">
                    Today, we proudly deliver, install and support Easylube's full range of products to Australia's 
                    largest companies while maintaining our commitment to Country and community.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <div className="text-center">
                    <Globe2 className="h-16 w-16 text-primary mx-auto mb-4" />
                    <span className="text-muted-foreground">Company Vision</span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Enhanced RFID Design */}
      <section className="section-padding bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-ochre/5 to-primary/5" />
        <div className="container-custom relative z-10">
          <div className="fade-in-up text-center mb-12" ref={addToRefs}>
            <div className="inline-flex items-center gap-2 bg-ochre/10 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-ochre" />
              <span className="text-sm font-semibold text-ochre uppercase tracking-wider">Products</span>
            </div>
            <h2 className="heading-section">
              <span className="text-gradient-earth">RFID Series</span>
            </h2>
            <p className="text-large max-w-3xl mx-auto mt-6">
              Advanced technology meets proven reliability in our premium RFID-enabled lubrication systems
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-12">
            <div className="space-y-10">
              <div className="card-premium bg-gradient-to-br from-primary/5 to-transparent border-l-4 border-l-primary pl-8" ref={addToRefs}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="heading-subsection">RFID & NFC Technology</h3>
                </div>
                <p className="text-body mb-6">
                  Read RFID tags with handheld PDA or smartphone using Easylube Guardwatch program. 
                  Direct NFC communication records lubrication issues, providing complete visibility 
                  of your equipment's critical moving parts.
                </p>
                <Button variant="orange-gradient">
                  Product Brochure
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="card-premium bg-gradient-to-br from-secondary/5 to-transparent border-l-4 border-l-secondary pl-8" ref={addToRefs}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="heading-subsection">Complete Flexibility</h3>
                </div>
                <p className="text-body mb-6">
                  Choose any lubricant for your specific application. We provide the exact lubricant 
                  you need in precisely measured cups for optimal performance.
                </p>
                <Button variant="outline-earth">
                  Discover Benefits
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary/20 via-secondary/10 to-ochre/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-2xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <span className="text-white font-medium">RFID Product Showcase</span>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />,
                title: "LED Status Indicators",
                description: "Red-Green LED lights provide instant visual confirmation of unit operation status."
              },
              {
                icon: <div className="w-8 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-sm" />,
                title: "Superior Battery Life", 
                description: "Lithium battery technology tested in Australia's extreme temperatures, lasting 1-12 months."
              },
              {
                icon: <Award className="h-6 w-6 text-ochre" />,
                title: "Quality Assured",
                description: "2-year warranty with international certifications and comprehensive safety ratings."
              },
              {
                icon: <div className="flex items-center gap-1"><div className="w-2 h-6 bg-primary rounded-sm"/><span className="text-xs font-bold">150psi</span></div>,
                title: "Proven Pressure",
                description: "Tested at 150psi (5-10 bar) with guaranteed lubricant quantity delivery."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="card-premium hover-lift group text-center"
                ref={addToRefs}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Enhanced Design */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary/5 to-ochre/5" />
        <div className="container-custom relative z-10">
          <div className="fade-in-up text-center mb-12" ref={addToRefs}>
            <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
              <Globe2 className="h-4 w-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Industries</span>
            </div>
            <h2 className="heading-section mb-8">
              <span className="text-gradient-earth">Applicable Industries</span>
            </h2>
            <p className="text-large max-w-4xl mx-auto">
              Trusted across Australia's most demanding industries, our Easylube solutions deliver proven performance 
              from remote mining sites to urban manufacturing facilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: "Mining", 
                icon: "⛏️",
                description: "Heavy-duty lubrication for extreme conditions",
                color: "primary"
              },
              { 
                name: "Manufacturing", 
                icon: "🏭",
                description: "Precision lubrication for production lines",
                color: "secondary"
              },
              { 
                name: "Transport & Logistics", 
                icon: "🚛",
                description: "Fleet maintenance and reliability solutions",
                color: "ochre"
              },
              { 
                name: "Agriculture", 
                icon: "🚜",
                description: "Reliable systems for farming equipment",
                color: "primary"
              },
              { 
                name: "Marine", 
                icon: "⚓",
                description: "Corrosion-resistant maritime applications",
                color: "secondary"
              },
              { 
                name: "Construction", 
                icon: "🏗️",
                description: "Robust solutions for construction machinery",
                color: "ochre"
              }
            ].map((industry, index) => (
              <div 
                key={index}
                className="group relative"
                ref={addToRefs}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="card-premium hover-lift text-center relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${industry.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                    <h3 className={`heading-subsection mb-3 group-hover:text-${industry.color} transition-colors`}>
                      {industry.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed px-2">
                      {industry.description}
                    </p>
                    <div className={`w-12 h-1 bg-${industry.color} mx-auto mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="card-premium max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Successful Installations</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-secondary">99.5%</div>
                  <div className="text-sm text-muted-foreground">System Reliability</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-ochre">24/7</div>
                  <div className="text-sm text-muted-foreground">Australia-Wide Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="fade-in-up text-center mb-12" ref={addToRefs}>
            <h2 className="heading-section">
              Latest <span className="text-gradient-earth">News</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card-premium hover-lift" ref={addToRefs}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="w-full h-48 bg-muted/50 rounded-xl flex items-center justify-center">
                  <span className="text-muted-foreground">News Image</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">15 Sep 2023</p>
                  <h3 className="heading-subsection mb-4">Weerlo Services Expands Across Australia</h3>
                  <p className="text-body mb-6">
                    Weerlo Services continues to grow its presence across Australia, bringing Indigenous-owned 
                    excellence in automated lubrication solutions to new markets and communities.
                  </p>
                  <Button asChild variant="hero-primary" size="hero">
                    <Link to="/news">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Design */}
      <section className="section-padding bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots-subtle opacity-10" />
        
        <div className="container-custom relative z-10">
          <div className="fade-in-up max-w-4xl mx-auto text-center" ref={addToRefs}>
            <h2 className="heading-section text-white mb-8">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-large mb-12 text-white/90">
              Contact Weerlo Services today for a consultation on how automated lubrication can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-hero-secondary">
                Get Quote Today
              </Link>
              <Link to="/services" className="btn-outline-premium border-white text-white hover:bg-white hover:text-foreground">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;