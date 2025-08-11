import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Heart } from "lucide-react";

const WeerloFooter = () => {
  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Technology", href: "/our-technology" },
      { label: "ESG Impact", href: "/esg-impact" },
      { label: "News", href: "/news" }
    ],
    services: [
      { label: "RFID Easylube® Systems", href: "/our-technology" },
      { label: "Supply & Installation", href: "/our-technology" },
      { label: "Maintenance & Support", href: "/our-technology" },
      { label: "Emergency Response", href: "/contact" }
    ],
    support: [
      { label: "Contact Us", href: "/contact" },
      { label: "Technical Support", href: "/contact" },
      { label: "Product Brochures", href: "/our-technology" },
      { label: "Emergency: 1800 WEERLO", href: "tel:1800933756" }
    ]
  };

  return (
    <footer className="bg-tertiary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/836f6d1a-293f-4366-87ef-488903b4c780.png" 
                alt="Weerlo Services" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed">
              Indigenous-owned provider of premium automated lubrication solutions, 
              combining cultural values with cutting-edge Easylube® technology across Australia.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-white/80">Pinjarra WA 6208, Australia</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <a href="tel:1800933756" className="text-sm text-white/80 hover:text-primary transition-colors">
                  1800 WEERLO (1800 933 756)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-ochre flex-shrink-0" />
                <a href="mailto:info@weerlo.com.au" className="text-sm text-white/80 hover:text-primary transition-colors">
                  info@weerlo.com.au
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-white/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-ochre">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-ochre transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Indigenous Acknowledgment */}
      <div className="border-t border-white/10 bg-tertiary-light">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Heart className="h-5 w-5 text-secondary" />
              <p className="text-sm text-white/80 leading-relaxed">
                <strong className="text-primary">Acknowledgment of Country:</strong> Weerlo Services acknowledges the Traditional Custodians 
                of the lands across Australia on which we operate. We pay our respects to Elders past, present, 
                and emerging, and recognize their continuing connection to Country.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-tertiary-medium">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-white/60">
              © {new Date().getFullYear()} Weerlo Services Pty Ltd. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Indigenous-Owned Business
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                Supply Nation Certified
              </span>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WeerloFooter;