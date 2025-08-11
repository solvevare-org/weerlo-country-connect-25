import { useEffect, useRef } from "react";
import { Users, Heart, Award, ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
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
                Join Our <span className="text-primary">Team</span>
              </h1>
              <p className="text-base md:text-lg text-white leading-relaxed">
                Be part of a growing Indigenous-owned business that values culture, 
                innovation, and creating opportunities for Aboriginal and Torres Strait Islander people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="fade-in-up" ref={addToRefs}>
                <h2 className="heading-section">
                  Why Work with <span className="text-secondary">Weerlo Services?</span>
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="h-12 w-12" />,
                  title: "Cultural Connection",
                  description: "Work in an environment that celebrates Indigenous culture and values, where your heritage is respected and honored."
                },
                {
                  icon: <Award className="h-12 w-12" />,
                  title: "Professional Growth",
                  description: "Access to industry-leading training, mentorship programs, and career development opportunities in cutting-edge technology."
                },
                {
                  icon: <Users className="h-12 w-12" />,
                  title: "Community Impact",
                  description: "Make a real difference in Indigenous communities while building a successful career in the industrial sector."
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="fade-in-up text-center bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300"
                  ref={addToRefs}
                >
                  <div className="text-primary mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities for Indigenous Jobseekers */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up" ref={addToRefs}>
                <h2 className="heading-section mb-6">
                  Opportunities for <span className="text-primary">Indigenous Jobseekers</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Weerlo Services is committed to creating meaningful employment opportunities 
                    for Aboriginal and Torres Strait Islander people across Australia. We believe 
                    that Indigenous knowledge and perspectives are invaluable assets in the modern workplace.
                  </p>
                  <p>
                    Whether you're just starting your career, looking to change industries, or 
                    seeking to advance your existing skills, we offer comprehensive training programs 
                    and mentorship opportunities designed to help you succeed.
                  </p>
                  <p>
                    Our inclusive workplace celebrates diversity while providing the professional 
                    environment needed to build a successful career in the industrial lubrication 
                    and maintenance sector.
                  </p>
                </div>
              </div>
              
              <div className="fade-in-up" ref={addToRefs}>
                <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl aspect-square relative overflow-hidden shadow-medium">
                  <div className="absolute inset-0 pattern-dots opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-foreground">
                      <Users className="h-24 w-24 mx-auto mb-4 text-primary" />
                      <div className="text-2xl font-bold mb-2">Growing Team</div>
                      <div className="text-lg text-muted-foreground">Join Our Family</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="fade-in-up" ref={addToRefs}>
                <h2 className="heading-section">
                  Career <span className="text-secondary">Opportunities</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  We offer diverse career paths across technical, administrative, and leadership roles, 
                  with comprehensive training and development programs.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Technical Roles",
                  positions: [
                    "Field Service Technicians",
                    "Installation Specialists", 
                    "Maintenance Engineers",
                    "Technical Support Officers",
                    "Equipment Specialists",
                    "Quality Assurance Technicians"
                  ]
                },
                {
                  title: "Business & Support",
                  positions: [
                    "Sales Representatives",
                    "Customer Service Coordinators",
                    "Project Managers",
                    "Administrative Assistants",
                    "Training Coordinators",
                    "Community Liaison Officers"
                  ]
                },
                {
                  title: "Apprenticeships & Traineeships",
                  positions: [
                    "Mechanical Apprenticeships",
                    "Business Administration Traineeships",
                    "Technical Support Traineeships",
                    "Sales & Marketing Traineeships",
                    "Indigenous Leadership Programs",
                    "Graduate Development Programs"
                  ]
                },
                {
                  title: "Leadership Opportunities",
                  positions: [
                    "Team Leaders",
                    "Regional Managers",
                    "Training & Development Managers",
                    "Business Development Managers",
                    "Operations Supervisors",
                    "Cultural Advisors"
                  ]
                }
              ].map((area, index) => (
                <div 
                  key={index}
                  className="fade-in-up bg-card rounded-xl p-8 shadow-soft"
                  ref={addToRefs}
                >
                  <h3 className="text-xl font-semibold mb-6 text-foreground">{area.title}</h3>
                  <ul className="space-y-3">
                    {area.positions.map((position, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{position}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training & Development */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="fade-in-up" ref={addToRefs}>
                <h2 className="heading-section">
                  Training & <span className="text-primary">Development</span>
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Technical Training",
                  description: "Comprehensive training on Easylube® systems, industrial maintenance, and safety protocols.",
                  features: [
                    "Hands-on equipment training",
                    "Safety certification programs",
                    "Advanced technical skills",
                    "Industry best practices"
                  ]
                },
                {
                  title: "Professional Development",
                  description: "Building business skills, leadership capabilities, and career advancement opportunities.",
                  features: [
                    "Leadership development",
                    "Communication skills",
                    "Project management",
                    "Customer service excellence"
                  ]
                },
                {
                  title: "Cultural Learning",
                  description: "Honoring Indigenous knowledge while building modern skills for career success.",
                  features: [
                    "Cultural mentorship",
                    "Traditional knowledge integration",
                    "Community connection",
                    "Cultural competency"
                  ]
                }
              ].map((program, index) => (
                <div 
                  key={index}
                  className="fade-in-up bg-card rounded-xl p-8 shadow-soft"
                  ref={addToRefs}
                >
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{program.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Award className="h-4 w-4 text-secondary mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
              Ready to Build Your Career with Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join a team that values your culture, invests in your growth, and creates 
              opportunities for you to make a real difference in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:careers@weerlo.com.au" 
                className="bg-secondary hover:bg-secondary-glow text-secondary-foreground px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Apply Today
              </a>
              <Link to="/contact" className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg hover:bg-primary-foreground hover:text-primary transition-all duration-300 inline-flex items-center justify-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;