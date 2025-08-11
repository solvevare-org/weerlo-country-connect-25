import { useEffect, useRef } from "react";
import { Leaf, Users, Target, TrendingUp, Heart, Shield, Globe2, Award, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WeerloESG = () => {
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

  const esgMetrics = [
    {
      icon: <Leaf className="h-12 w-12" />,
      title: "Environmental",
      value: "40%",
      description: "Reduction in lubricant waste through precision delivery",
      color: "text-primary"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Social",
      value: "85%",
      description: "Indigenous workforce participation rate",
      color: "text-secondary"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Governance",
      value: "100%",
      description: "Compliance with cultural protocols and safety standards",
      color: "text-ochre"
    }
  ];

  const sustainabilityBenefits = [
    "Reduced lubricant consumption by up to 80%",
    "Minimized environmental contamination risks",
    "Extended equipment lifespan reducing waste",
    "Lower carbon footprint through efficiency",
    "Compliance with environmental regulations",
    "Sustainable procurement practices"
  ];

  const communityImpacts = [
    {
      title: "Employment Creation",
      description: "Direct employment opportunities for Indigenous Australians in technical roles",
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      title: "Skills Development",
      description: "Training programs in advanced automation and lubrication technology",
      icon: <TrendingUp className="h-8 w-8 text-secondary" />
    },
    {
      title: "Cultural Preservation",
      description: "Supporting Indigenous cultural activities and traditional knowledge sharing",
      icon: <Heart className="h-8 w-8 text-ochre" />
    },
    {
      title: "Economic Development",
      description: "Contributing to Indigenous economic sovereignty and community prosperity",
      icon: <Target className="h-8 w-8 text-earth" />
    }
  ];

  const complianceAreas = [
    {
      standard: "ISO 14001",
      description: "Environmental Management Systems certification ensuring systematic environmental protection"
    },
    {
      standard: "Indigenous Procurement Policy",
      description: "Certified supplier for government and corporate Indigenous procurement requirements"
    },
    {
      standard: "Reconciliation Action Plan",
      description: "Committed to reconciliation through practical actions and meaningful partnerships"
    },
    {
      standard: "Supply Nation",
      description: "Certified Indigenous business contributing to economic reconciliation"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up" ref={addToRefs}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                <Leaf className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-white">ESG & Indigenous Impact</span>
                <Globe2 className="h-4 w-4 text-ochre" />
              </div>
              
              <h1 className="heading-hero mb-8 text-white">
                Sustainable Solutions for <span className="text-primary">Country</span> & Community
              </h1>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-12">
                Weerlo Services delivers measurable ESG outcomes through Indigenous ownership, 
                environmental stewardship, and community investment while providing world-class 
                automated lubrication solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild variant="hero-primary" size="hero" className="group">
                  <Link to="/contact">
                    <Heart className="mr-2 h-5 w-5" />
                    <span>Partner With Us</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline-earth" size="hero">
                  <a href="#impact-metrics">
                    <span>View Impact Data</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Metrics */}
      <section id="impact-metrics" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="fade-in-up text-center mb-16" ref={addToRefs}>
              <h2 className="heading-section">
                Measurable <span className="text-gradient-earth">ESG Impact</span>
              </h2>
              <p className="text-large max-w-3xl mx-auto">
                Our Indigenous-owned business model creates tangible environmental, social, and governance outcomes
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {esgMetrics.map((metric, index) => (
                <div 
                  key={index}
                  className="fade-in-up card-premium text-center hover-lift group"
                  ref={addToRefs}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`${metric.color} mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {metric.icon}
                  </div>
                  <div className="text-4xl font-bold mb-4 text-foreground">{metric.value}</div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{metric.title}</h3>
                  <p className="text-body text-sm">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Stewardship */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="fade-in-left" ref={addToRefs}>
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                  <Leaf className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Environmental</span>
                </div>
                
                <h2 className="heading-section mb-8">
                  Protecting <span className="text-gradient-earth">Country</span>
                </h2>
                
                <div className="space-y-6 mb-8">
                  <p className="text-body">
                    Our automated lubrication systems significantly reduce environmental impact through 
                    precise delivery, minimizing waste and contamination risks. This aligns with Indigenous 
                    values of caring for Country and sustainable resource management.
                  </p>
                  
                  <div className="card-premium border-l-4 border-l-primary pl-6">
                    <h3 className="text-lg font-bold mb-3 text-primary">Sustainability Benefits</h3>
                    <div className="grid gap-3">
                      {sustainabilityBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button asChild variant="outline-earth">
                  <Link to="/our-technology">
                    <Leaf className="mr-2 h-4 w-4" />
                    Explore Technology
                  </Link>
                </Button>
              </div>
              
              <div className="fade-in-right relative" ref={addToRefs}>
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Leaf className="h-10 w-10 text-white" />
                    </div>
                    <span className="text-white font-medium text-lg">Environmental Impact</span>
                    <p className="text-white/70 text-sm mt-2">Sustainable Solutions</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="fade-in-up text-center mb-16" ref={addToRefs}>
              <h2 className="heading-section">
                Community <span className="text-gradient-earth">Impact</span>
              </h2>
              <p className="text-large max-w-3xl mx-auto">
                Creating lasting positive change for Indigenous communities across Australia
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {communityImpacts.map((impact, index) => (
                <div 
                  key={index}
                  className="fade-in-up card-premium hover-lift group"
                  ref={addToRefs}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {impact.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">{impact.title}</h3>
                  <p className="text-body text-sm">{impact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Indigenous Procurement Benefits */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="fade-in-left" ref={addToRefs}>
                <div className="card-premium bg-gradient-to-br from-secondary/10 to-ochre/10 border-2 border-secondary/20">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-secondary">Indigenous Procurement Partner</h3>
                    <p className="text-body">
                      Partnering with Weerlo Services helps your organization meet Indigenous procurement 
                      targets while accessing world-class automated lubrication technology and expertise.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                      <Award className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-sm font-medium">Supply Nation Certified Business</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                      <Users className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">Indigenous Workforce Development</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                      <Target className="h-5 w-5 text-ochre flex-shrink-0" />
                      <span className="text-sm font-medium">RAP Alignment & Support</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="fade-in-right" ref={addToRefs}>
                <h2 className="heading-section mb-8">
                  Indigenous <span className="text-gradient-earth">Procurement</span> Benefits
                </h2>
                
                <div className="space-y-6">
                  <p className="text-body">
                    When you choose Weerlo Services, you're not just getting premium automated lubrication 
                    solutions – you're supporting Indigenous economic development and contributing to 
                    meaningful reconciliation outcomes.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white/50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Compliance Support</h4>
                        <p className="text-sm text-muted-foreground">
                          Meet government and corporate Indigenous procurement requirements with certified documentation
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white/50 rounded-lg">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Measurable Impact</h4>
                        <p className="text-sm text-muted-foreground">
                          Receive detailed reporting on social and economic impact outcomes from your partnership
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white/50 rounded-lg">
                      <div className="w-2 h-2 bg-ochre rounded-full mt-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Technical Excellence</h4>
                        <p className="text-sm text-muted-foreground">
                          Access to premium technology and expertise without compromising on quality or service
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="fade-in-up text-center mb-16" ref={addToRefs}>
              <h2 className="heading-section">
                Compliance & <span className="text-gradient-earth">Standards</span>
              </h2>
              <p className="text-large max-w-3xl mx-auto">
                Meeting the highest standards in governance, compliance, and cultural protocols
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {complianceAreas.map((area, index) => (
                <div 
                  key={index}
                  className="fade-in-up card-premium hover-lift"
                  ref={addToRefs}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-3 text-primary">{area.standard}</h3>
                      <p className="text-body text-sm">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up" ref={addToRefs}>
              <h2 className="heading-section text-white mb-8">
                Partner for <span className="text-primary">Positive Impact</span>
              </h2>
              <p className="text-large text-white/90 mb-12">
                Join leading Australian companies who choose Weerlo Services for premium technology 
                solutions that deliver measurable ESG and Indigenous procurement outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="btn-orange-download relative z-10" asChild>
                  <Link to="/contact">
                    <Heart className="mr-2 h-5 w-5" />
                    <span>Start Partnership</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="btn-outline-premium">
                  <Link to="/about">
                    <span>Our Story</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeerloESG;