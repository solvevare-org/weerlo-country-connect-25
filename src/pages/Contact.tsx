import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    serviceType: ""
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for contacting Weerlo Services. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
      serviceType: ""
    });
  };

  const serviceRegions = [
    "Queensland",
    "New South Wales", 
    "Victoria",
    "Western Australia",
    "South Australia",
    "Northern Territory",
    "Tasmania",
    "Australian Capital Territory"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up" ref={addToRefs}>
              <h1 className="heading-hero mb-8">
                Contact <span className="text-primary">Weerlo Services</span>
              </h1>
              <p className="text-base md:text-lg text-white leading-relaxed mb-8">
                Ready to transform your operations with automated lubrication solutions? 
                Get in touch with our team for a consultation tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+61234567890" className="btn-hero-primary">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
                <a href="mailto:info@weerlo.com.au" className="btn-hero-secondary">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="fade-in-up" ref={addToRefs}>
                <h2 className="heading-section mb-8">
                  Get Your <span className="text-secondary">Custom Quote</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+61 xxx xxx xxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-foreground mb-2">
                      Service Interest
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service</option>
                      <option value="supply">Equipment Supply</option>
                      <option value="installation">Installation Services</option>
                      <option value="maintenance">Maintenance Programs</option>
                      <option value="consultation">Technical Consultation</option>
                      <option value="training">Training Programs</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your requirements, equipment details, or any specific questions you have..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="btn-hero-primary w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="fade-in-up" ref={addToRefs}>
                <h2 className="heading-section mb-8">
                  Contact <span className="text-primary">Information</span>
                </h2>

                <div className="space-y-8">
                  {/* Direct Contact */}
                  <div className="bg-card rounded-xl p-6 shadow-soft">
                    <h3 className="text-xl font-semibold text-foreground mb-6">Direct Contact</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-foreground">Phone</div>
                          <a href="tel:+61234567890" className="text-muted-foreground hover:text-primary transition-colors">
                            +61 234 567 890
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-foreground">Email</div>
                          <a href="mailto:info@weerlo.com.au" className="text-muted-foreground hover:text-secondary transition-colors">
                            info@weerlo.com.au
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-ochre mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-foreground">Business Hours</div>
                          <div className="text-muted-foreground">
                            Mon - Fri: 7:00 AM - 6:00 PM<br />
                            Emergency Support: 24/7
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Coverage */}
                  <div className="bg-card rounded-xl p-6 shadow-soft">
                    <h3 className="text-xl font-semibold text-foreground mb-6">Service Coverage</h3>
                    <div className="flex items-start space-x-4 mb-4">
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground mb-2">Australia Wide</div>
                        <div className="text-muted-foreground text-sm">
                          We provide services across all Australian states and territories:
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 ml-10">
                      {serviceRegions.map((region, index) => (
                        <div key={index} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                          {region}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Quick Response Guarantee</h3>
                    <p className="text-muted-foreground">
                      We respond to all inquiries within 24 hours during business days. 
                      For emergency support, our team is available 24/7 to assist with critical equipment issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="fade-in-up text-center mb-12" ref={addToRefs}>
              <h2 className="heading-section">
                Our <span className="text-secondary">Service Areas</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Weerlo Services operates across Australia, with special focus on supporting 
                Indigenous communities and remote industrial operations.
              </p>
            </div>
            
            <div className="fade-in-up" ref={addToRefs}>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl aspect-video relative overflow-hidden shadow-medium">
                <div className="absolute inset-0 pattern-dots opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-foreground">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <div className="text-2xl font-bold mb-2">Australia Wide Coverage</div>
                    <div className="text-lg text-muted-foreground">Interactive Map Coming Soon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;