import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Wrench, Globe2, Award, CheckCircle, Zap, Target, Users, TrendingUp, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Epic parallax effect for hero
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    // Mouse tracking for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    // Revolutionary intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 🚀 REVOLUTIONARY HERO SECTION - WORLD CLASS */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Epic background with multiple layers */}
        <div 
          className="absolute inset-0 bg-gradient-hero-mega"
          style={{
            backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
            transition: 'background-position 0.5s ease-out',
          }}
        />
        <div 
          ref={heroRef}
          className="absolute inset-0 pattern-dots opacity-20"
        />
        
        {/* Floating geometric elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-float-epic blur-xl" />
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-secondary rounded-full opacity-15 animate-float-epic blur-2xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-fire rounded-full opacity-25 animate-pulse-epic blur-lg" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div 
              className={`transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              ref={addToRefs}
            >
              {/* Revolutionary badge */}
              <div className="inline-flex items-center px-8 py-3 mb-8 bg-gradient-glass backdrop-blur-sm border border-primary/30 rounded-full text-primary font-semibold text-sm tracking-wide shadow-glow">
                <Star className="w-4 h-4 mr-2 animate-pulse" />
                REVOLUTIONARY LUBRICATION SOLUTIONS
              </div>
              
              <h1 className="heading-hero mb-8 relative">
                Replace the Old.<br />
                <span className="text-gradient-fire animate-gradient-shift">Bring the New.</span>
                <div className="absolute -inset-4 bg-gradient-fire opacity-20 blur-3xl animate-pulse-epic" />
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 mb-6 leading-relaxed max-w-6xl mx-auto font-light tracking-wide">
                Weerlo Services is more than a business — it's a <span className="text-primary font-semibold">reflection of spirit</span>, 
                <span className="text-secondary font-semibold"> culture</span> & <span className="text-primary-glow font-semibold">connection to Country</span>.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground mb-16 font-medium max-w-4xl mx-auto">
                Compelling Value for <span className="text-primary">Financial</span>, <span className="text-secondary">Environmental</span> & <span className="text-primary-glow">Community</span> Supply.
              </p>

              <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                <Link to="/services" className="btn-hero-primary group relative">
                  <span className="relative z-10 flex items-center">
                    Our Services
                    <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                  </span>
                </Link>
                <Link to="/about" className="btn-hero-secondary group relative">
                  <span className="relative z-10 flex items-center">
                    Our Story
                    <Target className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Epic scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <div className="text-sm text-foreground/60 mb-2 font-medium tracking-wider">SCROLL TO EXPLORE</div>
          <div className="w-1 h-16 bg-gradient-primary rounded-full animate-pulse" />
          <ChevronDown className="w-6 h-6 text-primary mt-2 animate-bounce" />
        </div>
      </section>

      {/* 🎯 WHO WE ARE SECTION - INDUSTRIAL DESIGN */}
      <section className="relative bg-gradient-to-b from-background to-card/50 py-24 overflow-hidden">
        {/* Background industrial pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 fade-in-up" ref={addToRefs}>
              <div className="inline-flex items-center px-6 py-3 mb-6 bg-primary/10 border border-primary/20 rounded-2xl text-primary font-bold text-sm tracking-wider backdrop-blur-sm">
                <Star className="w-5 h-5 mr-3" />
                WHO WE ARE
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 leading-tight">
                Safe, Innovative <br/>
                <span className="text-gradient-fire">Automated Lubrication</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 fade-in-up" ref={addToRefs}>
                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl">
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Weerlo Services is an <span className="text-primary font-bold">Indigenous-owned Australian business</span> providing cutting-edge lubrication solutions 
                    for heavy vehicles, mining equipment, and process industries.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    Our name comes from the <span className="text-secondary font-bold">bush curlew</span> — 
                    a spiritual symbol of <span className="text-primary font-bold">resilience, protection, and connection to Country</span>.
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-10">
                    {[
                      { number: "500+", label: "Projects Completed", icon: "🏗️" },
                      { number: "24/7", label: "Support Available", icon: "🛠️" },
                      { number: "100%", label: "Client Satisfaction", icon: "⭐" },
                      { number: "15+", label: "Years Experience", icon: "🏆" },
                    ].map((stat, index) => (
                      <div key={index} className="relative group">
                        <div className="bg-background/80 border border-border/50 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                          <div className="text-3xl mb-2">{stat.icon}</div>
                          <div className="text-3xl font-black text-primary mb-2">{stat.number}</div>
                          <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/about" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg">
                    Learn More About Us
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </div>
              </div>
              
              {/* Right Visual */}
              <div className="lg:col-span-5 fade-in-up" ref={addToRefs}>
                <div className="relative">
                  <div className="bg-gradient-hero rounded-3xl p-12 relative overflow-hidden shadow-2xl border border-primary/20">
                    <div className="absolute inset-0 pattern-dots opacity-10"></div>
                    <div className="relative z-10 text-center text-white">
                      <div className="mb-8">
                        <img 
                          src="/lovable-uploads/222738a5-32e2-46fb-b95a-f49a880f3e51.png" 
                          alt="Bush Curlew - Weerlo Symbol" 
                          className="h-24 w-auto mx-auto filter drop-shadow-2xl"
                        />
                      </div>
                      <div className="text-4xl font-black mb-3">WEERLO</div>
                      <div className="text-xl font-medium opacity-90 mb-6">Connection to Country</div>
                      <div className="w-20 h-1 bg-white/40 mx-auto rounded-full" />
                    </div>
                  </div>
                  
                  {/* Floating accent elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full blur-xl animate-pulse" />
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 SERVICES GRID - INDUSTRIAL DESIGN */}
      <section className="relative bg-gradient-to-b from-card to-background py-24 overflow-hidden">
        {/* Industrial grid background */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000' stroke-width='1' opacity='0.1'%3E%3Cpath d='M0 50h100M50 0v100'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20 fade-in-up" ref={addToRefs}>
              <div className="inline-flex items-center px-6 py-3 mb-6 bg-secondary/10 border border-secondary/20 rounded-2xl text-secondary font-bold text-sm tracking-wider backdrop-blur-sm">
                <Target className="w-5 h-5 mr-3" />
                EXPLORE WEERLO
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 leading-tight">
                Our <span className="text-secondary">Services</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Services Card */}
              <div className="fade-in-up group" ref={addToRefs}>
                <div className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="h-64 bg-gradient-primary relative overflow-hidden">
                    <div className="absolute inset-0 pattern-dots opacity-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Wrench className="h-20 w-20 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black mb-4 text-foreground">Services</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Comprehensive automated lubrication solutions for all industries
                    </p>
                    <Link to="/services" className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Work With Us Card */}
              <div className="fade-in-up group" ref={addToRefs}>
                <div className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="h-64 bg-gradient-secondary relative overflow-hidden">
                    <div className="absolute inset-0 pattern-dots opacity-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="h-20 w-20 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black mb-4 text-foreground">Work With Us</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Join our team and be part of an Indigenous-owned success story
                    </p>
                    <Link to="/careers" className="inline-flex items-center text-secondary font-bold hover:text-secondary/80 transition-colors">
                      View Careers
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Community Card */}
              <div className="fade-in-up group" ref={addToRefs}>
                <div className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="h-64 bg-gradient-earth relative overflow-hidden">
                    <div className="absolute inset-0 pattern-dots opacity-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Globe2 className="h-20 w-20 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black mb-4 text-foreground">Community</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Creating positive impact in Indigenous communities across Australia
                    </p>
                    <Link to="/community-impact" className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors">
                      Our Impact
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Our Values Card */}
              <div className="fade-in-up group" ref={addToRefs}>
                <div className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="h-64 bg-gradient-industrial relative overflow-hidden">
                    <div className="absolute inset-0 pattern-dots opacity-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Award className="h-20 w-20 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black mb-4 text-foreground">Our Values</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Excellence, integrity, and connection to Country guide everything we do
                    </p>
                    <Link to="/about" className="inline-flex items-center text-secondary font-bold hover:text-secondary/80 transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Previous Projects Card */}
              <div className="fade-in-up group" ref={addToRefs}>
                <div className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="h-64 bg-gradient-fire relative overflow-hidden">
                    <div className="absolute inset-0 pattern-dots opacity-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TrendingUp className="h-20 w-20 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black mb-4 text-foreground">Previous Projects</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Successful implementations across mining, transport, and industry
                    </p>
                    <Link to="/news" className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors">
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* News Card */}
              <div className="fade-in-up group" ref={addToRefs}>
                <div className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="h-64 bg-gradient-glass backdrop-blur-sm border border-primary/30 relative overflow-hidden">
                    <div className="absolute inset-0 pattern-dots opacity-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Zap className="h-20 w-20 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black mb-4 text-foreground">News</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Latest updates, announcements, and industry insights
                    </p>
                    <Link to="/news" className="inline-flex items-center text-secondary font-bold hover:text-secondary/80 transition-colors">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🤝 PARTNERSHIPS SECTION - INDUSTRIAL DESIGN */}
      <section className="relative bg-gradient-to-b from-background to-card/50 py-24 overflow-hidden">
        {/* Industrial mesh background */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000' stroke-width='1' opacity='0.1'%3E%3Cpath d='M20 20h40v40h-40z'/%3E%3Cpath d='M0 0h80v80h-80z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 fade-in-up" ref={addToRefs}>
              <div className="inline-flex items-center px-6 py-3 mb-6 bg-primary/10 border border-primary/20 rounded-2xl text-primary font-bold text-sm tracking-wider backdrop-blur-sm">
                <Users className="w-5 h-5 mr-3" />
                PARTNERSHIPS
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 leading-tight">
                Trusted <span className="text-primary">Partners</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 fade-in-up" ref={addToRefs}>
                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl">
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Weerlo Services is proudly partnered with <span className="text-primary font-bold">Catmac</span> — the exclusive distributor of 
                    <span className="text-secondary font-bold"> Easylube®</span> products in Australia and New Zealand.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    This exclusive partnership delivers <span className="text-primary font-bold">world-class lubrication solutions</span> across Australia and New Zealand, combining global expertise with local knowledge and cultural understanding.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-background/80 border border-border/50 rounded-2xl p-6">
                      <div className="text-3xl mb-3">🤝</div>
                      <div className="text-lg font-bold text-primary mb-2">Exclusive Partnership</div>
                      <div className="text-sm text-muted-foreground">Sole distributor of Easylube® products</div>
                    </div>
                    <div className="bg-background/80 border border-border/50 rounded-2xl p-6">
                      <div className="text-3xl mb-3">🌏</div>
                      <div className="text-lg font-bold text-secondary mb-2">Regional Coverage</div>
                      <div className="text-sm text-muted-foreground">Australia & New Zealand markets</div>
                    </div>
                  </div>
                  
                  <Link to="/partners" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg">
                    Learn About Our Partners
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </div>
              </div>
              
              {/* Right Partnership Visual */}
              <div className="lg:col-span-5 fade-in-up" ref={addToRefs}>
                <div className="relative">
                  <div className="bg-gradient-hero rounded-3xl p-12 relative overflow-hidden shadow-2xl border border-primary/20">
                    <div className="absolute inset-0 pattern-dots opacity-10"></div>
                    <div className="relative z-10 text-center text-white">
                      <div className="flex items-center justify-center space-x-6 mb-8">
                        <div className="flex flex-col items-center">
                          <img 
                            src="/lovable-uploads/222738a5-32e2-46fb-b95a-f49a880f3e51.png" 
                            alt="Weerlo Services" 
                            className="h-16 w-auto mb-3 filter drop-shadow-2xl"
                          />
                          <div className="text-sm font-bold opacity-80">WEERLO</div>
                        </div>
                        
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-1 bg-white/40 mb-3 rounded-full" />
                          <div className="text-xs font-bold opacity-60">PARTNERSHIP</div>
                        </div>
                        
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-3 border border-white/20">
                            <div className="text-2xl font-black text-primary">C</div>
                          </div>
                          <div className="text-sm font-bold opacity-80">CATMAC</div>
                        </div>
                      </div>
                      
                      <div className="text-lg font-bold mb-2">EXCLUSIVE DISTRIBUTION</div>
                      <div className="text-sm opacity-80 max-w-xs mx-auto leading-relaxed">
                        Premium Easylube® solutions across Australia & New Zealand
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating accent elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full blur-xl animate-pulse" />
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 CAREERS SECTION - INDIGENOUS DESIGN */}
      <section className="relative py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Indigenous pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='1' opacity='0.3'%3E%3Ccircle cx='60' cy='60' r='50'/%3E%3Ccircle cx='60' cy='60' r='30'/%3E%3Ccircle cx='60' cy='60' r='10'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center min-h-[600px]">
              {/* Left Content - Dark Side */}
              <div className="lg:col-span-7 py-16 lg:py-24 pr-0 lg:pr-12">
                <div className="fade-in-up" ref={addToRefs}>
                  {/* Careers Badge */}
                  <div className="inline-flex items-center px-6 py-3 mb-8 border border-primary/30 rounded-2xl text-primary font-bold text-sm tracking-wider backdrop-blur-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" />
                    CAREERS
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-8 leading-tight">
                    Work With Us
                  </h2>
                  
                  <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl">
                    We are a proudly Western Australian Indigenous owned and operated business. With our diverse capabilities, we offer comprehensive solutions tailored to meet the unique needs of our clients with diversified and integrated services that optimise operations and reduce downtime.
                  </p>

                  <Link 
                    to="/careers" 
                    className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-2xl font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 shadow-lg group"
                  >
                    EXPLORE CAREERS
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </div>

                {/* Decorative Indigenous Pattern */}
                <div className="absolute bottom-8 left-6 opacity-20">
                  <div className="w-32 h-32 border border-primary/30 rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 border border-secondary/30 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 border border-primary/30 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Visual - Bird Image */}
              <div className="lg:col-span-5 relative h-full min-h-[600px] flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Main bird image */}
                  <div className="relative z-10">
                    <img 
                      src="/lovable-uploads/2daff3ff-a2e7-400e-88fe-52f5e8b67578.png" 
                      alt="Indigenous Curlew - Weerlo Symbol" 
                      className="h-96 w-auto filter drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Decorative background elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
                  </div>
                  
                  {/* Floating dots */}
                  <div className="absolute top-20 right-20 w-3 h-3 bg-primary rounded-full animate-bounce" />
                  <div className="absolute bottom-32 left-16 w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute top-40 left-12 w-4 h-4 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  
                  {/* Aboriginal-style dotted lines */}
                  <div className="absolute top-16 left-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                  <div className="absolute bottom-20 right-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 REVOLUTIONARY CTA - EPIC FINALE */}
      <section className="py-32 bg-gradient-fire text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container-custom text-center relative z-10">
          <div className="fade-in-up max-w-5xl mx-auto" ref={addToRefs}>
            <div className="inline-flex items-center px-8 py-3 mb-12 bg-black/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold text-sm tracking-wider shadow-mega">
              <Zap className="w-4 h-4 mr-2 animate-pulse" />
              TRANSFORM YOUR BUSINESS TODAY
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-8 leading-tight">
              Ready to Transform Your Operations?
            </h2>
            
            <p className="text-base md:text-lg mb-16 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Contact Weerlo Services today for a consultation on how automated lubrication can 
              <span className="font-bold"> revolutionize your business</span>.
            </p>
            
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-hero-secondary group">
                <span className="relative z-10 flex items-center">
                  Get Quote Today
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </Link>
              <Link to="/services" className="border-2 border-white text-white px-10 py-5 rounded-3xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-500 hover:scale-105 shadow-xl">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;