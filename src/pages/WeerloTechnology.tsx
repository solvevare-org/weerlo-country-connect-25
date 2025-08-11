import { useEffect, useRef } from "react";
import { Download, Shield, Zap, Wrench, CheckCircle, Award, Battery, Wifi, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WeerloTechnology = () => {
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

  const features = [
    {
      icon: <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />,
      title: "LED Status Indicators",
      description: "Red-Green LED lights provide instant visual confirmation of unit operation status."
    },
    {
      icon: <Battery className="h-6 w-6 text-ochre" />,
      title: "Superior Battery Life", 
      description: "Lithium battery technology tested in Australia's extreme temperatures, lasting 1-12 months."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Quality Assured",
      description: "2-year warranty with international certifications and comprehensive safety ratings."
    },
    {
      icon: <div className="flex items-center gap-1"><div className="w-2 h-6 bg-secondary rounded-sm"/><span className="text-xs font-bold">150psi</span></div>,
      title: "Proven Pressure",
      description: "Tested at 150psi (5-10 bar) with guaranteed lubricant quantity delivery."
    }
  ];

  const applications = [
    {
      title: "Heavy Vehicles",
      items: ["Trucks & Trailers", "Construction Equipment", "Agricultural Machinery", "Emergency Vehicles"],
      icon: <Wrench className="h-8 w-8 text-primary" />
    },
    {
      title: "Mining Equipment", 
      items: ["Excavators & Loaders", "Haul Trucks", "Drilling Equipment", "Processing Plants"],
      icon: <Shield className="h-8 w-8 text-secondary" />
    },
    {
      title: "Process Industries",
      items: ["Manufacturing Lines", "Conveyor Systems", "Pumps & Motors", "Industrial Fans"],
      icon: <Zap className="h-8 w-8 text-ochre" />
    }
  ];

  const benefits = [
    "Reduced maintenance costs by up to 60%",
    "Improved equipment reliability and uptime",
    "Enhanced worker safety through automation",
    "Precise lubrication delivery every time",
    "Complete traceability with RFID technology",
    "Environmental compliance and sustainability",
    "24/7 remote monitoring capabilities",
    "Flexible lubricant selection for any application"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up" ref={addToRefs}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                <Zap className="h-4 w-4 text-ochre" />
                <span className="text-sm font-medium text-white">RFID Easylube® Technology</span>
              </div>
              
              <h1 className="heading-hero mb-8 text-white">
                Advanced <span className="text-primary">Automated</span><br />
                Lubrication Systems
              </h1>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-12">
                As the master distributor of the EasyLube® Automated Lubrication System in Australia, 
                we supply state-of-the-art single-point lubricators with complete RFID tracking. 
                Our solutions ensure your machinery is always optimally greased with complete visibility and control.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="btn-orange-download relative z-10" asChild>
                  <a href="#brochure-download">
                    <Download className="mr-2 h-5 w-5" />
                    <span>Download Brochure</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button className="btn-orange-download relative z-10" asChild>
                  <Link to="/contact">
                    <span>Request Demo</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RFID Technology Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="fade-in-left" ref={addToRefs}>
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                  <Wifi className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">RFID Technology</span>
                </div>
                
                <h2 className="heading-section mb-8">
                  Complete <span className="text-gradient-earth">Visibility</span> & Control
                </h2>
                
                <div className="space-y-8">
                  <div className="card-premium border-l-4 border-l-primary pl-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">RFID & NFC Communication</h3>
                    <p className="text-body mb-4">
                      EasyLube single-point automatic lubricator attaches to lubrication points and dispenses grease 
                      at controlled intervals. Units come in multiple sizes (60ml, 150ml, 250ml cartridges) with 
                      reusable drive mechanisms and replaceable grease cartridges for minimal waste.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Real-time status monitoring",
                        "Maintenance scheduling alerts", 
                        "Performance analytics",
                        "Digital maintenance records"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="card-premium border-l-4 border-l-secondary pl-6">
                    <h3 className="text-xl font-bold mb-4 text-secondary">Complete Flexibility</h3>
                    <p className="text-body">
                      EasyLube applies precise Minimal Quantity Lubrication (MQL) calculations, ensuring just the right 
                      amount of lubricant every time. This prevents over-lubrication and under-lubrication while 
                      generating necessary pressure to push grease through extended feeder lines up to several meters.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="fade-in-right relative" ref={addToRefs}>
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 via-secondary/10 to-ochre/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-2xl">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Wifi className="h-12 w-12 text-white" />
                    </div>
                    <span className="text-white font-medium text-lg">RFID System Demo</span>
                    <p className="text-white/70 text-sm mt-2">Interactive Technology Preview</p>
                    <Button className="mt-4" variant="outline-earth">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Demo
                    </Button>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="fade-in-up text-center mb-16" ref={addToRefs}>
              <h2 className="heading-section">
                Advanced <span className="text-gradient-earth">Features</span>
              </h2>
              <p className="text-large max-w-3xl mx-auto">
                Cutting-edge technology engineered for Australia's extreme conditions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="fade-in-up card-premium text-center hover-lift group"
                  ref={addToRefs}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-body text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="fade-in-up text-center mb-16" ref={addToRefs}>
              <h2 className="heading-section">
                Industry <span className="text-gradient-earth">Applications</span>
              </h2>
              <p className="text-large max-w-3xl mx-auto">
                Proven solutions across Australia's most demanding industrial sectors
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {applications.map((application, index) => (
                <div 
                  key={index}
                  className="fade-in-up card-premium hover-lift group"
                  ref={addToRefs}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {application.icon}
                  </div>
                  <h3 className="heading-subsection mb-6">{application.title}</h3>
                  <ul className="space-y-3">
                    {application.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="fade-in-left" ref={addToRefs}>
                <h2 className="heading-section mb-8">
                  Proven <span className="text-gradient-earth">Benefits</span>
                </h2>
                <p className="text-large mb-8">
                  Transform your maintenance operations with measurable results
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="fade-in-right" ref={addToRefs}>
                <div className="card-premium bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-primary">60% Cost Reduction</h3>
                    <p className="text-body">
                      Our clients typically see maintenance cost reductions of 40-60% within the first year 
                      of implementing Easylube® automated lubrication systems.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="p-4 bg-white/50 rounded-lg">
                      <div className="text-2xl font-bold text-secondary mb-2">95%</div>
                      <div className="text-sm text-muted-foreground">Uptime Improvement</div>
                    </div>
                    <div className="p-4 bg-white/50 rounded-lg">
                      <div className="text-2xl font-bold text-ochre mb-2">150+</div>
                      <div className="text-sm text-muted-foreground">Days Battery Life</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Download CTA */}
      <section id="brochure-download" className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up" ref={addToRefs}>
              <h2 className="heading-section text-white mb-8">
                Get the Complete <span className="text-primary">Technical Specifications</span>
              </h2>
              <p className="text-large text-white/90 mb-12">
                Download our comprehensive brochure with detailed technical specifications, 
                application guides, and case studies from Australian implementations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="btn-orange-download relative z-10" asChild>
                  <a href="/weerlo-product-brochure.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    <span>Download PDF Brochure</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline-earth">
                  <Link to="/contact">
                    <span>Request Consultation</span>
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

export default WeerloTechnology;