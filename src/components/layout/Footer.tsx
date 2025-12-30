import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charity-navy text-charity-cream">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Heart className="h-5 w-5 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="font-display text-xl font-bold">
                Charity<span className="text-primary">Hub</span>
              </span>
            </Link>
            <p className="text-sm text-charity-cream/70 leading-relaxed">
              Making a difference in the world, one donation at a time. Join us in our mission to create positive change.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-charity-cream/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-charity-cream/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-charity-cream/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-charity-cream/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/causes", label: "Our Causes" },
                { path: "/donate", label: "Donate" },
                { path: "/about", label: "About Us" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-charity-cream/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Causes */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Our Causes</h4>
            <ul className="space-y-3">
              {["Education", "Healthcare", "Environment", "Food & Water", "Disaster Relief"].map(
                (cause) => (
                  <li key={cause}>
                    <Link
                      to="/causes"
                      className="text-sm text-charity-cream/70 hover:text-primary transition-colors"
                    >
                      {cause}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-charity-cream/70">
                  123 Charity Lane, Hope City, HC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-charity-cream/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-charity-cream/70">contact@charityhub.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charity-cream/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-charity-cream/60">
            © {currentYear} CharityHub. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-sm text-charity-cream/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-charity-cream/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
