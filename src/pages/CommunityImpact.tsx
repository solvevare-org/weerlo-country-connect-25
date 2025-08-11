import { useEffect, useRef } from "react";
import { Heart, Users, Award, Globe } from "lucide-react";

const CommunityImpact = () => {
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
                Community <span className="text-primary">Impact</span>
              </h1>
              <p className="text-base md:text-lg text-white leading-relaxed">
                Building stronger communities through employment, training, and cultural support across Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Users className="h-12 w-12" />, title: "Employment", value: "50+", description: "Indigenous jobs created" },
                { icon: <Award className="h-12 w-12" />, title: "Training", value: "200+", description: "People trained in technical skills" },
                { icon: <Heart className="h-12 w-12" />, title: "Communities", value: "25+", description: "Communities served across Australia" },
                { icon: <Globe className="h-12 w-12" />, title: "Investment", value: "$2M+", description: "Invested in community programs" }
              ].map((impact, index) => (
                <div key={index} className="fade-in-up text-center bg-card rounded-xl p-8 shadow-soft" ref={addToRefs}>
                  <div className="text-primary mb-4">{impact.icon}</div>
                  <div className="text-3xl font-bold text-foreground mb-2">{impact.value}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{impact.title}</h3>
                  <p className="text-muted-foreground text-sm">{impact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityImpact;