import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Our Products", href: "#products" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <nav 
      className="sticky top-0 z-50 text-white border-b border-white/10"
      style={{
        backdropFilter: 'saturate(1.4) blur(10px)',
        background: 'linear-gradient(180deg, rgba(7,11,18,.85), rgba(7,11,18,.45))',
        backgroundColor: '#1f4e79',
        backgroundBlendMode: 'multiply'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a className="flex items-center gap-3 font-bold tracking-wide" href="#top" aria-label="Midland Chemicals Home">
           
            <img src={logo} alt="Midland Chemicals Ltd logo" className="h-16 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="bg-[#2b648a] text-white px-4 py-2.5 rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 hover:scale-105 transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="bg-[#2b648a] text-white px-4 py-2.5 rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
