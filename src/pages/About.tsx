import { useEffect, useRef } from "react";
import { Quote, Award, Users, Target } from "lucide-react";

const About = () => {
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
                Our <span className="text-primary">Story</span>
              </h1>
              <p className="text-base md:text-lg text-white leading-relaxed">
                Weerlo Services embodies the spirit of the bush curlew — resilient, protective, and deeply connected to Country. 
                We are an Indigenous-owned business bridging tradition with innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bush Curlew Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up" ref={addToRefs}>
                <div className="bg-primary/10 rounded-full w-24 h-24 flex items-center justify-center mb-8">
                  <img 
                    src="/lovable-uploads/222738a5-32e2-46fb-b95a-f49a880f3e51.png" 
                    alt="Bush Curlew" 
                    className="h-16 w-auto"
                  />
                </div>
                <h2 className="heading-section mb-6">
                  The <span className="text-secondary">Bush Curlew</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our name, Weerlo, comes from the bush curlew — a remarkable bird native to Australia. 
                  In Indigenous culture, the bush curlew represents resilience, protection, and an unbreakable 
                  connection to Country.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Just as the bush curlew watches over its territory with vigilance and care, Weerlo Services 
                  protects and maintains the critical equipment that powers Australia's industries. We bring 
                  the same dedication, wisdom, and connection to our work that our ancestors brought to caring for Country.
                </p>
              </div>
              
              <div className="fade-in-up" ref={addToRefs}>
                <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 pattern-dots opacity-20"></div>
                  <div className="relative">
                    <Quote className="h-12 w-12 text-primary mb-6" />
                    <blockquote className="text-xl text-foreground font-medium leading-relaxed mb-6">
                      "Our name is a reminder of where we come from and a promise of where we're going."
                    </blockquote>
                    <cite className="text-muted-foreground font-medium">— Weerlo Services</cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up" ref={addToRefs}>
                <div className="bg-gradient-earth rounded-2xl aspect-square relative overflow-hidden shadow-medium">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl font-playfair font-bold mb-4">LI</div>
                      <div className="text-xl">Founder Photo</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="fade-in-up" ref={addToRefs}>
                <h2 className="heading-section mb-6">
                  Meet <span className="text-primary">Lorena Indich</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Lorena Indich founded Weerlo Services with a vision to create an Indigenous-owned business 
                    that would serve Australia's industrial sector while maintaining deep cultural connections 
                    and community values.
                  </p>
                  <p>
                    With extensive experience in industrial solutions and a passion for Indigenous economic 
                    development, Lorena recognized the opportunity to bridge the gap between traditional 
                    wisdom and modern technology in the lubrication industry.
                  </p>
                  <p>
                    Under her leadership, Weerlo Services has grown to become a trusted partner for businesses 
                    across Australia, delivering not just products and services, but cultural understanding 
                    and genuine community connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="fade-in-up" ref={addToRefs}>
                <h2 className="heading-section">
                  Our <span className="text-secondary">Mission & Vision</span>
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="fade-in-up" ref={addToRefs}>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 h-full">
                  <div className="flex items-center mb-6">
                    <Target className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-semibold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To be a leading and respected Indigenous-owned supplier of safe, innovative lubrication solutions — 
                    built on integrity, cultural pride, and excellence. We envision a future where Indigenous businesses 
                    are recognized as leaders in their industries, creating pathways for the next generation.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="fade-in-up" ref={addToRefs}>
                <div className="bg-gradient-to-br from-secondary/10 to-ochre/10 rounded-xl p-8 h-full">
                  <div className="flex items-center mb-6">
                    <Award className="h-8 w-8 text-secondary mr-3" />
                    <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Delivering safe, reliable, and innovative automated lubrication solutions that protect equipment, 
                    reduce environmental impact, and support the communities we serve. We are committed to excellence 
                    in everything we do, while staying true to our cultural values and connection to Country.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quotes */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up" ref={addToRefs}>
              <Quote className="h-16 w-16 mx-auto mb-8 opacity-80" />
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                "Weerlo Services is committed to safeguarding the industries we serve with safe, reliable, 
                and competitive solutions."
              </blockquote>
              <div className="w-24 h-1 bg-secondary mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="fade-in-up" ref={addToRefs}>
                <h2 className="heading-section">
                  Our <span className="text-primary">Values</span>
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Community",
                  description: "Strong connections to Indigenous communities and commitment to creating opportunities for our people."
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  title: "Excellence",
                  description: "Delivering the highest quality solutions and services that exceed expectations in every project."
                },
                {
                  icon: <Target className="h-8 w-8" />,
                  title: "Integrity",
                  description: "Honest, transparent business practices built on trust, respect, and cultural authenticity."
                },
                {
                  icon: <Quote className="h-8 w-8" />,
                  title: "Innovation",
                  description: "Embracing new technologies while honoring traditional wisdom and sustainable practices."
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="fade-in-up text-center"
                  ref={addToRefs}
                >
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;