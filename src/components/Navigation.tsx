import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "About us", href: "#about" },
    { label: "Industries", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className={`lm-nav ${scrolled ? "scrolled" : ""}`} aria-label="Main">
        <a className="lm-nav-logo" href="#top" aria-label="Midland Chemicals Home">
          <img src={logo} alt="Midland Chemicals Ltd logo" />
        </a>

        <div className="lm-nav-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a className="lm-nav-book" href="#contact">
            Get a quote
          </a>
          <button
            className="lm-nav-burger"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lm-nav-mobile">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Get a quote
          </a>
        </div>
      )}
    </>
  );
}
