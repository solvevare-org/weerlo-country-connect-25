import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tertiary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-5"></div>
      
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/b9953a2a-1a20-477d-9e1b-92f018e02b85.png" 
                alt="Weerlo Services" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-white/90 leading-relaxed">
              Indigenous-owned Australian business providing safe, innovative automated lubrication solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-primary transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-primary transition-colors duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/partners", label: "Partners" },
                { href: "/careers", label: "Careers" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-white/80 hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Services</h4>
            <ul className="space-y-3">
              {[
                "Automated Lubrication",
                "Equipment Supply",
                "Installation Services",
                "Maintenance Support",
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-primary mt-1" />
                <div>
                  <a href="mailto:info@weerlo.com.au" className="text-white/80 hover:text-primary transition-colors duration-300">
                    info@weerlo.com.au
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-primary mt-1" />
                <div>
                  <a href="tel:+61234567890" className="text-white/80 hover:text-primary transition-colors duration-300">
                    +61 234 567 890
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1" />
                <div className="text-white/80">
                  Australia Wide<br />
                  Mining & Industrial
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indigenous Acknowledgment */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-6 mb-8">
            <p className="text-white/90 leading-relaxed text-center italic">
              "We acknowledge the traditional owners and custodians of Country throughout Australia and their continuing connection to land, waters and community. We pay our respects to the people, the cultures and the Elders past, present and emerging."
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>&copy; 2024 Weerlo Services. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-primary transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;