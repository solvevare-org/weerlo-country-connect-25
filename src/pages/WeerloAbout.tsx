import { useEffect, useRef } from "react";
import { Award, Heart, Shield, Users, Globe2, Target, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WeerloAbout = () => {
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

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Cultural Respect",
      description: "Honoring Indigenous heritage while delivering world-class technical solutions",
      color: "text-secondary"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Operational Excellence",
      description: "Uncompromising commitment to safety, quality, and reliability in every project",
      color: "text-primary"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Partnership",
      description: "Building lasting relationships that benefit local communities and economic development",
      color: "text-ochre"
    },
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: "Environmental Stewardship",
      description: "Protecting Country through sustainable practices and environmental responsibility",
      color: "text-earth"
    }
  ];

  const timeline = [
    {
      year: "1992",
      title: "Easylube® Innovation Begins",
      description: "Easylube® pioneers the world's first mechanical single-point automatic lubricator"
    },
    {
      year: "2018",
      title: "Weerlo Services Founded",
      description: "Established as an Indigenous-owned distributor of premium lubrication solutions"
    },
    {
      year: "2020",
      title: "Technology Partnership",
      description: "Became exclusive Australian distributor for Easylube® RFID technology"
    },
    {
      year: "2023",
      title: "National Expansion",
      description: "Expanded operations to serve clients across all Australian states and territories"
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
                <div className="w-2 h-2 bg-ochre rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white">About Weerlo Services</span>
              </div>
              
              <h1 className="heading-hero mb-8 text-white">
                The Meaning of <span className="text-primary">Weerlo</span>
              </h1>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8">
                Weerlo Services is more than a company – it's a reflection of culture, resilience, and connection to Country. 
                "Weerlo" is the word for the bush curlew, a night bird whose call echoes across the Australian bush and is 
                often seen as a messenger between physical and spiritual worlds.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                The bush curlew symbolizes awareness, protection, and resilience – qualities that guide our approach to 
                business and inspire our commitment to safeguard the industries we serve. As an Indigenous-owned business, 
                we build on a foundation of respect for our people, our place, and the knowledge passed down through generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="fade-in-left" ref={addToRefs}>
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Leadership</span>
                </div>
                
                <h2 className="heading-section mb-8">
                  Meet Our <span className="text-gradient-earth">Founder</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="card-premium border-l-4 border-l-primary pl-6">
                    <h3 className="text-xl font-bold mb-3 text-primary">Lorena Indich</h3>
                    <p className="text-sm text-muted-foreground mb-4">Managing Director & Founder</p>
                    <p className="text-body mb-4">
                      Lorena Indich, a proud First Nations woman with cultural ties to the Southern Yamatji, Noongar Nations, 
                      and the Ngadju group of Western Australia. Raised in a family deeply connected to farming and fishing on Country, 
                      Lorena carries a lifelong understanding of land, sustainability, and community.
                    </p>
                    <p className="text-body">
                      She brings over 15 years of hands-on experience in mining operations, project delivery, and heavy vehicle 
                      maintenance – walking in the boots of the workers who keep industry moving. Coupled with a decade in 
                      commercial banking, she leads Weerlo with cultural integrity and operational know-how.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="fade-in-right relative" ref={addToRefs}>
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <span className="text-white font-medium">Lorena Indich</span>
                    <p className="text-white/70 text-sm">Managing Director</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="fade-in-up" ref={addToRefs}>
                <div className="card-premium bg-gradient-to-br from-primary/5 to-transparent border-l-4 border-l-primary pl-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="heading-subsection text-primary">Our Mission</h3>
                  </div>
                  <p className="text-body">
                    To deliver reliable, advanced automated lubrication systems that improve our clients' operations 
                    while honoring the land and people. We strive to drive excellence and sustainability in industrial 
                    maintenance, blending modern technology with cultural respect. This means building strong partnerships 
                    with customers while creating opportunities for Aboriginal and Torres Strait Islander peoples.
                  </p>
                </div>
              </div>
              
              <div className="fade-in-up" ref={addToRefs}>
                <div className="card-premium bg-gradient-to-br from-secondary/5 to-transparent border-l-4 border-l-secondary pl-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Eye className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="heading-subsection text-secondary">Our Vision</h3>
                  </div>
                  <p className="text-body">
                    To be a leading and respected Indigenous-owned supplier of safe, innovative lubrication solutions — 
                    built on integrity, cultural pride, and excellence. We envision a future where Indigenous businesses 
                    are recognized as leaders in their industries, creating pathways for the next generation where 
                    cutting-edge industrial maintenance goes hand-in-hand with empowerment of Indigenous communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="fade-in-up text-center mb-16" ref={addToRefs}>
              <h2 className="heading-section">
                Our <span className="text-gradient-earth">Values</span>
              </h2>
              <p className="text-large max-w-3xl mx-auto">
                Guiding principles that shape every aspect of our business and community relationships
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="fade-in-up card-premium text-center hover-lift group"
                  ref={addToRefs}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`${value.color} mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-body text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="fade-in-up text-center mb-16" ref={addToRefs}>
              <h2 className="heading-section">
                Our <span className="text-gradient-earth">Journey</span>
              </h2>
              <p className="text-large">
                From innovation to Indigenous excellence
              </p>
            </div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className="fade-in-up flex items-start gap-8"
                  ref={addToRefs}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">{item.year}</span>
                    </div>
                  </div>
                  <div className="card-premium flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-body">{item.description}</p>
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
                Partner with <span className="text-primary">Indigenous Excellence</span>
              </h2>
              <p className="text-large text-white/90 mb-12">
                Join Australia's leading companies who trust Weerlo Services for their automated lubrication needs
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild variant="hero-primary" size="hero" className="group">
                  <Link to="/contact">
                    <span>Start Your Project</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Link to="/our-technology" className="btn-outline-premium">
                  <span>Explore Technology</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeerloAbout;