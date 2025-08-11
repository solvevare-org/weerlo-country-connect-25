import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const WeerloContact = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Head Office",
      details: ["Pinjarra WA 6208", "Australia"],
      color: "text-primary"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["1300-WEERLO (1300 933 756)", "Call for maintenance solutions expert"],
      color: "text-secondary"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@weerlo.com.au", "Send RFQ or tender documents"],
      color: "text-ochre"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 7:00 AM - 6:00 PM", "24/7 Emergency Support"],
      color: "text-earth"
    }
  ];

  const serviceAreas = [
    "Western Australia",
    "Northern Territory", 
    "Queensland",
    "New South Wales",
    "Victoria",
    "South Australia",
    "Tasmania",
    "Remote & Regional Areas"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up" ref={addToRefs}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-white">Get In Touch</span>
              </div>
              
              <h1 className="heading-hero mb-8 text-white">
                Contact <span className="text-primary">Weerlo Services</span>
              </h1>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-12">
                Ready to transform your lubrication strategy? Our Indigenous-owned team is here to provide 
                expert consultation and customized automated lubrication solutions for your specific needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild variant="hero-primary" size="hero" className="group">
                  <a href="#contact-form">
                    <Send className="mr-2 h-5 w-5" />
                    <span>Get Your Quote</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button asChild variant="outline-earth" size="hero">
                  <a href="tel:+61895311234">
                    <Phone className="mr-2 h-5 w-5" />
                    <span>Call Now</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="fade-in-up text-center mb-16" ref={addToRefs}>
              <h2 className="heading-section">
                How to <span className="text-gradient-earth">Reach Us</span>
              </h2>
              <p className="text-large max-w-3xl mx-auto">
                Multiple ways to connect with our team across Australia
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="fade-in-up card-premium text-center hover-lift group"
                  ref={addToRefs}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`${info.color} mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-body text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="contact-form" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="fade-in-left" ref={addToRefs}>
                <div className="card-premium">
                  <h3 className="heading-subsection mb-8">Send Us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="+61 4XX XXX XXX"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-sm font-medium text-foreground mb-2 block">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Your company"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full"
                        placeholder="Tell us about your lubrication requirements, equipment types, and any specific challenges you're facing..."
                      />
                    </div>
                    
                    <Button type="submit" variant="hero-primary" size="lg" className="w-full group">
                      <Send className="mr-2 h-5 w-5" />
                      <span>Send Message</span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    
                    <p className="text-sm text-muted-foreground text-center">
                      We'll respond within 24 hours during business days. For urgent matters, please call us directly.
                    </p>
                  </form>
                </div>
              </div>
              
              {/* Map & Location Info */}
              <div className="fade-in-right space-y-8" ref={addToRefs}>
                <div className="card-premium">
                  <h3 className="text-xl font-bold mb-6 text-foreground">Our Location</h3>
                  
                  <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-6">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-white/70 mx-auto mb-2" />
                      <span className="text-white/70 text-sm">Interactive Map</span>
                      <p className="text-white/50 text-xs mt-1">Pinjarra WA Office</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                     <div>
                        <p className="font-medium text-foreground">Weerlo Services Pty Ltd</p>
                        <p className="text-sm text-muted-foreground">Perth, Western Australia</p>
                        <p className="text-sm text-muted-foreground">Office & Training Facility in Pinjarra, WA</p>
                        <p className="text-sm text-muted-foreground">Serving clients Australia-wide</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Business Hours</p>
                        <p className="text-sm text-muted-foreground">Monday - Friday: 7:00 AM - 6:00 PM</p>
                        <p className="text-sm text-muted-foreground">24/7 Emergency Support Available</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card-premium">
                  <h3 className="text-xl font-bold mb-6 text-foreground">Service Areas</h3>
                  <p className="text-body mb-6">
                    We provide automated lubrication solutions across all Australian states and territories, 
                    including remote and regional areas.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up" ref={addToRefs}>
              <h2 className="heading-section text-white mb-8">
                Need <span className="text-primary">Emergency Support?</span>
              </h2>
              <p className="text-large text-white/90 mb-12">
                Our 24/7 emergency support team is ready to assist with critical lubrication system issues 
                to minimize downtime and keep your operations running smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild variant="hero-primary" size="hero" className="group">
                  <a href="tel:1800933756">
                    <Phone className="mr-2 h-5 w-5" />
                    <span>Emergency: 1800 WEERLO</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button asChild variant="outline-earth" size="hero">
                  <a href="mailto:support@weerlo.com.au">
                    <Mail className="mr-2 h-5 w-5" />
                    <span>Email Support</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeerloContact;