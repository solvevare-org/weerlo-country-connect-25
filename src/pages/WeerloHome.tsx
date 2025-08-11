import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Wrench, Globe2, Award, CheckCircle, Play, Star, Users, Zap, Download, PhoneCall, MapPin, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const WeerloHome = () => {
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
    { icon: <Award className="h-8 w-8" />, value: "Zero", label: "CapEx Model", subtext: "Investment" },
    { icon: <Zap className="h-8 w-8" />, value: "100%", label: "ESG Impact", subtext: "Compliance" },
    { icon: <Users className="h-8 w-8" />, value: "Native", label: "Indigenous", subtext: "Owned" },
    { icon: <Globe2 className="h-8 w-8" />, value: "24/7", label: "Australia Wide", subtext: "Support" }
  ];

  const clientLogos = [
    "Rio Tinto", "BHP", "Fortescue", "Newcrest", "Alcoa", "Wesfarmers"
  ];

  const testimonials = [
    {
      quote: "Weerlo's automated lubrication solutions have transformed our maintenance operations, reducing downtime by 60% while supporting Indigenous business.",
      author: "Sarah Chen",
      position: "Operations Manager",
      company: "Mining Corp Australia"
    },
    {
      quote: "The RFID technology and cultural approach Weerlo brings sets them apart. Professional, reliable, and authentically Indigenous-owned.",
      author: "David Williams", 
      position: "Plant Supervisor",
      company: "Industrial Systems Ltd"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Premium Indigenous Branding */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        {/* Background Elements */}
        <div 
          ref={heroRef}
          className="absolute inset-0 pattern-indigenous opacity-10"
        />
        
        {/* Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/lovable-uploads/39aa4b18-7447-46cb-9e10-d7d76959ba02.png"
            alt="Weerlo Services logo background watermark"
            aria-hidden="true"
            className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] opacity-10 object-contain grayscale"
          />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-ochre/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container-custom relative z-10">
          <div className="max-w-7xl mx-auto text-center mt-24 md:mt-36">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 mb-8">
                <div className="w-3 h-3 bg-ochre rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white">Indigenous-Owned • Premium Lubrication Solutions</span>
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              
              <h1 className="heading-hero mb-8 text-white">
                Automated Lubrication<br />
                <span className="text-gradient-fire">Solutions & Indigenous Innovation</span>
              </h1>
              
              <p className="text-base md:text-lg mb-12 text-white/90 max-w-4xl mx-auto">
                Weerlo is a leading Indigenous-owned supplier of automated lubrication systems in Australia, 
                delivering advanced maintenance technology with a unique zero-CapEx model and an ESG-driven approach. 
                We help heavy industries reduce downtime, cut maintenance costs, and improve safety through precise, 
                reliable lubrication automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Button className="btn-orange-download relative z-10" asChild>
                  <Link to="/our-technology">
                    <Wrench className="mr-2 h-5 w-5" />
                    <span>Our Technology</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild className="btn-outline-premium">
                  <Link to="/esg-impact">
                    <Shield className="mr-2 h-5 w-5" />
                    <span>ESG Impact</span>
                  </Link>
                </Button>
                <Button asChild className="btn-outline-premium">
                  <Link to="/contact">
                    <PhoneCall className="mr-2 h-5 w-5" />
                    <span>Get Quote</span>
                  </Link>
                </Button>
              </div>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover-lift">
                  <div className="text-primary mb-3 flex justify-center"><Award className="h-8 w-8" /></div>
                  <div className="text-2xl font-bold text-white mb-1">Zero</div>
                  <div className="text-sm text-white/70 font-medium">CapEx Model</div>
                  <div className="text-xs text-white/50">Investment Required</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover-lift">
                  <div className="text-primary mb-3 flex justify-center"><Shield className="h-8 w-8" /></div>
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-white/70 font-medium">Indigenous</div>
                  <div className="text-xs text-white/50">Owned & Operated</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover-lift">
                  <div className="text-primary mb-3 flex justify-center"><Zap className="h-8 w-8" /></div>
                  <div className="text-2xl font-bold text-white mb-1">57%</div>
                  <div className="text-sm text-white/70 font-medium">Bearing Failures</div>
                  <div className="text-xs text-white/50">Prevented</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover-lift">
                  <div className="text-primary mb-3 flex justify-center"><Globe2 className="h-8 w-8" /></div>
                  <div className="text-2xl font-bold text-white mb-1">5 Days</div>
                  <div className="text-sm text-white/70 font-medium">Fast Shipping</div>
                  <div className="text-xs text-white/50">Australia Wide</div>
                </div>
              </div>

              {/* Client Logos Carousel */}
              <div className="mb-8">
                <p className="text-sm text-white/60 mb-6">Trusted by Australia's Leading Companies</p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {clientLogos.map((logo, index) => (
                    <div key={index} className="px-6 py-3 bg-white/10 rounded-lg backdrop-blur-sm">
                      <span className="text-white/80 font-medium text-sm">{logo}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Technology Solutions Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="fade-in-up text-center mb-12" ref={addToRefs}>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Technology</span>
            </div>
            <h2 className="heading-section">
              RFID Easylube® <span className="text-gradient-earth">Solutions</span>
            </h2>
            <p className="text-large max-w-3xl mx-auto">
              Advanced automated lubrication technology with complete visibility and control
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="card-premium border-l-4 border-l-primary pl-8" ref={addToRefs}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">RFID & NFC Technology</h3>
                </div>
                <p className="text-body mb-6">
                  EasyLube® single-point automatic lubricator ensures each bearing receives the right amount 
                  of grease at the right time, eliminating guesswork. Preventing both under-lubrication and 
                  over-greasing with RFID tracking for complete equipment visibility.
                </p>
                <Button 
                  className="btn-orange-download relative z-10"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/weerlo-product-brochure.pdf';
                    link.download = 'Weerlo-RFID-Easylube-Brochure.pdf';
                    link.click();
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="card-premium border-l-4 border-l-secondary pl-8" ref={addToRefs}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">Zero CapEx Model</h3>
                </div>
                <p className="text-body mb-6">
                  Upgrade to automatic lubricators with no upfront capital expense – Weerlo provides drive units 
                  free of charge under a consumables plan (100% OpEx). Pay only for grease cartridges and batteries 
                  at competitive rates, turning lubrication into a predictable operating cost.
                </p>
                <Button variant="outline-earth">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
              </div>
            </div>
            
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 via-secondary/10 to-ochre/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-12 w-12 text-white" />
                  </div>
                  <span className="text-white font-medium text-lg">RFID Technology Showcase</span>
                  <p className="text-white/70 text-sm mt-2">Interactive Product Demo</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="fade-in-up text-center mb-12" ref={addToRefs}>
            <h2 className="heading-section">
              What Our <span className="text-gradient-earth">Clients Say</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-premium hover-lift" ref={addToRefs}>
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>
                <blockquote className="text-body mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up" ref={addToRefs}>
              <h2 className="heading-section text-white mb-8">
                Ready to Transform Your <span className="text-primary">Lubrication Strategy?</span>
              </h2>
              <p className="text-large text-white/90 mb-12">
                Contact our Indigenous-owned team for a customized automated lubrication solution that meets your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild variant="hero-primary" size="hero" className="group">
                  <Link to="/contact">
                    <PhoneCall className="mr-2 h-5 w-5" />
                    <span>Get Your Quote</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  className="btn-orange-download relative z-10"
                  size="hero"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/weerlo-product-brochure.pdf';
                    link.download = 'Weerlo-RFID-Easylube-Brochure.pdf';
                    link.click();
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  <span>Download Brochure</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeerloHome;