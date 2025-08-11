import { useEffect, useRef, useState } from "react";
import { Calendar, Tag, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const News = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [email, setEmail] = useState("");

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

  const newsArticles = [
    {
      id: 1,
      title: "Weerlo Services Announces Major Partnership with Leading Mining Corporation",
      excerpt: "We're excited to announce our strategic partnership with one of Australia's largest mining companies to provide automated lubrication solutions across their entire fleet of heavy machinery.",
      content: "This groundbreaking partnership represents a significant milestone for Weerlo Services and demonstrates the trust that major industry players place in our expertise and cultural values. The multi-year agreement will see us supplying and maintaining Easylube® systems across mining operations in Western Australia, Queensland, and Northern Territory.",
      date: "March 15, 2024",
      category: "Partnership",
      featured: true
    },
    {
      id: 2,
      title: "Expanding Services to Remote Indigenous Communities",
      excerpt: "Our commitment to serving Indigenous communities extends to new remote locations across Northern Australia, bringing employment opportunities and technical expertise to where it's needed most.",
      content: "Weerlo Services is proud to announce the expansion of our service coverage to include remote Indigenous communities across Northern Australia. This initiative not only brings our world-class lubrication solutions to previously underserved areas but also creates meaningful employment and training opportunities for local community members.",
      date: "March 10, 2024",
      category: "Community",
      featured: false
    },
    {
      id: 3,
      title: "Sustainability in Industrial Lubrication: Reducing Environmental Impact",
      excerpt: "How automated lubrication systems reduce environmental impact while improving equipment longevity and operational efficiency in heavy industries.",
      content: "In today's environmentally conscious world, Weerlo Services is leading the charge in sustainable industrial practices. Our Easylube® automated lubrication systems significantly reduce lubricant waste, prevent over-lubrication, and extend equipment life - all contributing to a smaller environmental footprint for our clients.",
      date: "March 5, 2024",
      category: "Sustainability",
      featured: false
    },
    {
      id: 4,
      title: "New Training Program Launches for Indigenous Youth",
      excerpt: "Weerlo Services launches comprehensive training program designed to provide Indigenous youth with technical skills in automated lubrication systems and industrial maintenance.",
      content: "Education and opportunity are at the heart of what we do. Our new training program provides hands-on experience with cutting-edge lubrication technology while honoring traditional learning methods and cultural values. Participants gain nationally recognized qualifications and direct pathways to employment.",
      date: "February 28, 2024",
      category: "Education",
      featured: false
    },
    {
      id: 5,
      title: "Easylube® Technology Prevents Major Equipment Failure",
      excerpt: "Case study: How proactive lubrication monitoring helped a major transport company avoid catastrophic equipment failure and save hundreds of thousands in repairs.",
      content: "When one of Australia's largest transport companies noticed unusual patterns in their Easylube® system data, our technical team immediately investigated. The early detection and intervention prevented what could have been a catastrophic engine failure, saving the client over $500,000 in repairs and avoiding weeks of downtime.",
      date: "February 20, 2024",
      category: "Case Study",
      featured: false
    },
    {
      id: 6,
      title: "Recognition for Indigenous Business Excellence",
      excerpt: "Weerlo Services receives recognition for outstanding contribution to Indigenous business development and community engagement in the industrial sector.",
      content: "We are honored to receive recognition for our commitment to Indigenous business excellence and community development. This award acknowledges not just our business success, but our dedication to creating pathways for Indigenous people in industrial sectors while maintaining authentic cultural connections.",
      date: "February 15, 2024",
      category: "Awards",
      featured: false
    }
  ];

  const categories = ["All", "Partnership", "Community", "Sustainability", "Education", "Case Study", "Awards"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = selectedCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up" ref={addToRefs}>
              <h1 className="heading-hero mb-8">
                News & <span className="text-primary">Announcements</span>
              </h1>
              <p className="text-base md:text-lg text-white leading-relaxed">
                Stay updated with the latest news from Weerlo Services, our community initiatives, 
                industry insights, and partnership developments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {newsArticles.filter(article => article.featured).map(article => (
        <section key={article.id} className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="fade-in-up" ref={addToRefs}>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-muted-foreground text-sm">{article.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {article.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Tag className="h-4 w-4 text-primary" />
                      <span className="text-sm text-primary font-medium">{article.category}</span>
                    </div>
                    <Button variant="outline-earth">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Newsletter Signup */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="fade-in-up" ref={addToRefs}>
              <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Stay Informed
              </h2>
              <p className="text-muted-foreground mb-8">
                Join our mailing list to receive the latest news, updates, and insights from Weerlo Services.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" variant="hero-primary" size="hero">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="fade-in-up" ref={addToRefs}>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground shadow-medium'
                        : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-8 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.filter(article => !article.featured).map((article, index) => (
                <article 
                  key={article.id}
                  className="fade-in-up bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                  ref={addToRefs}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-accent/20 text-accent px-2 py-1 rounded text-sm font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-foreground leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <Button variant="ghost" size="sm" className="p-0">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </article>
              ))}
            </div>

            {filteredArticles.filter(article => !article.featured).length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;