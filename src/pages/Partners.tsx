import { useEffect, useRef } from "react";
import { ExternalLink, Award, Globe, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Partners = () => {
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

  // SEO metadata for Partners page
  useEffect(() => {
    document.title = 'Partners | Weerlo x Catmacs – Easylube Master Distributor Australia';
    const description = 'Weerlo partners with Catmacs, the Master Distributor of Easylube in Australia. RFID & NFC-enabled automated lubrication systems with delivery, install and support.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + '/partners';

    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Weerlo Services & Catmacs Partnership',
      url: window.location.origin + '/partners',
      sameAs: ['https://catmacs.com']
    } as const;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(ld);
    document.head.appendChild(script);

    return () => {
      if (script && document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
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
                Our <span className="text-primary">Partners</span>
              </h1>
              <p className="text-base md:text-lg text-white leading-relaxed">
                Weerlo Services partners with Catmacs to deliver world-class automated lubrication solutions across Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catmac Partnership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up" ref={addToRefs}>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 text-center shadow-medium">
                  <div className="text-4xl font-bold text-primary mb-4">CATMAC</div>
                  <div className="text-lg text-muted-foreground mb-6">Master Distributor of Easylube®</div>
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <Globe className="h-5 w-5" />
                    <span>Australia</span>
                  </div>
                </div>
              </div>
              
              <div className="fade-in-up" ref={addToRefs}>
                <h2 className="heading-section mb-6">
                  Partnership with <span className="text-secondary">Catmac</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Weerlo Services is proudly partnered with Catmac — the Master Distributor of 
                  Easylube® in Australia. Catmacs delivers, installs and supports Easylube’s total 
                  lubrication management systems, including the RFID Series with RFID & NFC capability.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  In 1992, Easylube® pioneered the world's first mechanical single-point automatic 
                  lubricator and continues to lead with advanced, connected solutions. Catmacs commenced 
                  in 2010 and today serves industries from mining to manufacturing. Weerlo Services
                  provides the cultural understanding and community connections that make us the preferred
                  choice for Indigenous and remote communities.
                </p>
                <a 
                  href="https://catmacs.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline-earth inline-flex items-center"
                >
                  Visit Catmac Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="fade-in-up" ref={addToRefs}>
                <h2 className="heading-section">
                  Partnership <span className="text-primary">Benefits</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our collaboration with Catmac brings together technical excellence and cultural understanding 
                  to deliver unmatched value to our clients.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Award className="h-12 w-12" />,
                  title: "World-Class Products",
                  description: "Access to the latest Easylube® technology and innovations from global leaders."
                },
                {
                  icon: <Users className="h-12 w-12" />,
                  title: "Expert Support",
                  description: "Combined technical expertise and cultural understanding for complete solutions."
                },
                {
                  icon: <Globe className="h-12 w-12" />,
                  title: "Wide Coverage",
                  description: "Comprehensive service coverage across Australia and New Zealand territories."
                },
                {
                  icon: <ArrowRight className="h-12 w-12" />,
                  title: "Fast Response",
                  description: "Rapid deployment and support through our integrated partner network."
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="fade-in-up text-center bg-background rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
                  ref={addToRefs}
                >
                  <div className="text-primary mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Easylube Brand Spotlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up" ref={addToRefs}>
                <h2 className="heading-section mb-6">
                  About <span className="text-secondary">Easylube®</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Easylube® is a world-renowned brand of automated lubrication systems delivering a
                    complete, connected lubrication management approach. The RFID Series features RFID &
                    NFC included for smart identification and tracking.
                  </p>
                  <p>
                    In 1992, Easylube® pioneered the world's first mechanical single-point automatic
                    lubricator and has continued to innovate with precise, reliable solutions for
                    critical equipment.
                  </p>
                  <p>
                    Through Catmacs, Australian customers receive world-class products backed by local
                    delivery, installation and ongoing support.
                  </p>
                </div>
              </div>
              
              <div className="fade-in-up" ref={addToRefs}>
                <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl aspect-square relative overflow-hidden shadow-medium">
                  <div className="absolute inset-0 pattern-dots opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-foreground">
                      <div className="text-5xl font-bold text-secondary mb-4">Easylube®</div>
                      <div className="text-xl">Automated Lubrication</div>
                      <div className="text-lg text-muted-foreground">World Leader</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Network */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="fade-in-up" ref={addToRefs}>
                <h2 className="heading-section">
                  Extended <span className="text-primary">Partner Network</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Through our partnership with Catmac, we have access to an extensive network of 
                  suppliers, technicians, and industry experts across the region.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Equipment Manufacturers",
                "Technical Specialists",
                "Training Providers",
                "Service Technicians",
                "Parts Suppliers",
                "Industry Consultants",
                "Regional Distributors",
                "Support Services"
              ].map((partner, index) => (
                <div 
                  key={index}
                  className="fade-in-up bg-card rounded-lg p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300"
                  ref={addToRefs}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary-foreground rounded-full"></div>
                  </div>
                  <h3 className="text-sm font-medium text-foreground">{partner}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="fade-in-up max-w-3xl mx-auto" ref={addToRefs}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Our Partnership Advantage?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact Weerlo Services today to learn how our partnership with Catmac 
              can deliver the best lubrication solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-secondary hover:bg-secondary-glow text-secondary-foreground px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105">
                Get Quote Today
              </Link>
              <Link to="/services" className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg hover:bg-primary-foreground hover:text-primary transition-all duration-300">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;