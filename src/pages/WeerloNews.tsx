import { useEffect, useRef } from "react";
import { Calendar, ArrowRight, Tag, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WeerloNews = () => {
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

  const featuredArticle = {
    title: "Weerlo Services Expands RFID Technology Across Australia's Mining Sector",
    excerpt: "Our Indigenous-owned company announces major expansion of automated lubrication solutions, bringing cutting-edge RFID technology to mining operations across remote Australia.",
    date: "March 15, 2024",
    category: "Technology",
    readTime: "5 min read",
    image: "/placeholder-news-hero.jpg"
  };

  const newsArticles = [
    {
      title: "Partnership with Rio Tinto Delivers 60% Maintenance Cost Reduction",
      excerpt: "Comprehensive case study reveals significant operational improvements through Easylube® automated lubrication systems implementation.",
      date: "March 8, 2024",
      category: "Case Study",
      readTime: "3 min read",
      image: "/placeholder-news-1.jpg"
    },
    {
      title: "Weerlo Services Achieves Supply Nation Certification",
      excerpt: "Official recognition as certified Indigenous business opens new opportunities for corporate procurement partnerships.",
      date: "February 28, 2024", 
      category: "Company News",
      readTime: "2 min read",
      image: "/placeholder-news-2.jpg"
    },
    {
      title: "RFID Technology Revolutionizes Equipment Monitoring",
      excerpt: "Advanced tracking capabilities provide unprecedented visibility into lubrication system performance across industrial applications.",
      date: "February 20, 2024",
      category: "Technology",
      readTime: "4 min read",
      image: "/placeholder-news-3.jpg"
    },
    {
      title: "Indigenous Workforce Development Program Launches",
      excerpt: "New training initiative creates technical career pathways for Indigenous Australians in automated lubrication technology.",
      date: "February 10, 2024",
      category: "Community",
      readTime: "3 min read", 
      image: "/placeholder-news-4.jpg"
    },
    {
      title: "ESG Impact Report Shows Measurable Environmental Benefits",
      excerpt: "Annual sustainability report highlights 40% reduction in lubricant waste and significant environmental improvements.",
      date: "January 30, 2024",
      category: "Sustainability",
      readTime: "6 min read",
      image: "/placeholder-news-5.jpg"
    },
    {
      title: "Expansion into Western Australia's Remote Mining Operations",
      excerpt: "Strategic growth brings automated lubrication solutions to some of Australia's most challenging industrial environments.",
      date: "January 15, 2024",
      category: "Company News", 
      readTime: "3 min read",
      image: "/placeholder-news-6.jpg"
    }
  ];

  const categories = ["All", "Technology", "Company News", "Case Study", "Community", "Sustainability"];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up" ref={addToRefs}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-white">Latest News & Updates</span>
              </div>
              
              <h1 className="heading-hero mb-8 text-white">
                News & <span className="text-primary">Announcements</span>
              </h1>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                Stay updated with the latest developments in automated lubrication technology, 
                company milestones, and Indigenous business success stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="fade-in-up mb-16" ref={addToRefs}>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Tag className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Featured</span>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredArticle.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredArticle.readTime}
                    </span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {featuredArticle.category}
                    </span>
                  </div>
                  
                  <h2 className="heading-subsection mb-6">{featuredArticle.title}</h2>
                  <p className="text-body mb-8">{featuredArticle.excerpt}</p>
                  
                  <Button asChild variant="hero-primary" className="group">
                    <Link to="/news/featured-article">
                      <span>Read Full Article</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-xl">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Calendar className="h-8 w-8 text-white" />
                      </div>
                      <span className="text-white font-medium">Featured Article</span>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="fade-in-up text-center" ref={addToRefs}>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      index === 0 
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'bg-white/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-lg'
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <article 
                  key={index}
                  className="fade-in-up card-premium hover-lift group cursor-pointer"
                  ref={addToRefs}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mb-6 flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-white/70" />
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-body text-sm mb-6">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="group/btn">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mt-16">
              <Button variant="outline-earth" size="lg">
                Load More Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up" ref={addToRefs}>
              <h2 className="heading-section text-white mb-8">
                Stay <span className="text-primary">Informed</span>
              </h2>
              <p className="text-large text-white/90 mb-12">
                Subscribe to our newsletter for the latest updates on technology innovations, 
                company news, and Indigenous business success stories.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button variant="hero-primary" className="px-8">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-white/60 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeerloNews;