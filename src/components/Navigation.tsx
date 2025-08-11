import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/our-technology", label: "Our Technology" },
    { href: "/esg-impact", label: "ESG Impact" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={
      // Opaque navbar to match Home look across all pages
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-tertiary shadow-xl border-b border-border/20'
    }>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Premium Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/836f6d1a-293f-4366-87ef-488903b4c780.png" 
                alt="Weerlo Services" 
                className="h-16 lg:h-20 w-auto transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute -inset-2 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>


          {/* Premium Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative py-2 px-1 font-medium transition-all duration-300 group ${
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-white hover:text-primary'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <div className={`absolute inset-0 bg-primary/10 rounded-lg opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 ${
                  location.pathname === item.href ? 'opacity-100 scale-100' : ''
                }`} />
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                  location.pathname === item.href ? 'scale-x-100' : ''
                }`} />
              </Link>
            ))}
            
            <Link
              to="/contact"
              className="btn-hero-primary ml-6"
            >
              Get Quote
            </Link>
          </div>

          {/* Premium Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-xl transition-all duration-300 text-white hover:text-primary hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? 'rotate-45 -translate-x-1/2 -translate-y-1/2' : '-translate-x-1/2 -translate-y-2'
              }`} />
              <span className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? 'opacity-0' : '-translate-x-1/2 -translate-y-1/2'
              }`} />
              <span className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-x-1/2 -translate-y-1/2' : '-translate-x-1/2 translate-y-1'
              }`} />
            </div>
          </button>
        </div>

        {/* Premium Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-1 bg-white/95 backdrop-blur-lg rounded-2xl mx-4 mb-4 shadow-2xl border border-border/50">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block py-4 px-6 mx-2 rounded-xl font-medium transition-all duration-300 ${
                  location.pathname === item.href
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-2 pt-4">
              <Link
                to="/contact"
                className="btn-hero-primary w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;