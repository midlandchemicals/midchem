import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { useNavigate } from "react-router-dom";
import useProductStore from "../store";
import { useReveal } from "./useReveal";

export function ProductsSection() {
  const navigate = useNavigate();
  const { setSelectedChemical } = useProductStore();
  const ref = useReveal<HTMLElement>();

  const industryCategories = [
    {
      id: 2,
      title: "Agricultural",
      description:
        "Concentrated foliar nutrients, biostimulants and seed treatments for crop protection and enhancement.",
      image:
        "https://images.unsplash.com/photo-1498408040764-ab6eb772a145?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      applications: ["Crop Enhancement", "Higher Yield", "Soil Treatment"],
    },
    {
      id: 3,
      title: "Automotive & Car Care",
      description:
        "Car wash products, screenwashes, de-icers and leather protection for manufacturing and professional care.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      applications: ["Car Wash", "Professional Care", "Corporate Solutions"],
    },
    {
      id: 4,
      title: "Construction",
      description:
        "Brick acid, graffiti remover and masonry silicon for building, maintenance and infrastructure projects.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      applications: ["Building Chemicals", "Construction Sites", "New Build Homes"],
    },
    {
      id: 7,
      title: "Industrial Cleaning",
      description:
        "Professional-grade degreasers, heavy-duty cleaners, aluminium cleaners and paint strippers.",
      image:
        "https://plus.unsplash.com/premium_photo-1663088651379-95c21dfbf72c?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      applications: ["Equipment Cleaning", "Maintenance", "Paint Strippers"],
    },
    {
      id: 9,
      title: "Retail Cleaners",
      description:
        "Floor cleaners, surface cleaners and washing-up liquid for restaurants, hotels, schools and gyms.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      applications: ["Restaurants & Hotels", "Schools", "Gyms"],
    },
  ];

  const openCategory = (title: string) => {
    if (title === "Agricultural") {
      window.open("https://ilex-envirosciences.com/", "_blank");
      return;
    }
    navigate("/products");
    if (title === "Automotive & Car Care") {
      setSelectedChemical("Automotive Chemicals");
    } else if (title === "Industrial Cleaning") {
      setSelectedChemical("Paint Strippers");
    } else if (title === "Construction") {
      setSelectedChemical("Building Chemicals");
    } else if (title === "Retail Cleaners") {
      setSelectedChemical("Paint Strippers");
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <section id="products" ref={ref} style={{ background: "var(--paper-2)" }}>
      <div className="shell">
        <div className="sec-head">
          <p className="eyebrow rv">Sectors we serve</p>
          <h2 className="lm-display rv rv-d1">Products for your market</h2>
          <p className="sec-lead rv rv-d2">
            We manufacture chemical products across specialist sectors — each with dedicated
            formulation expertise, regulatory knowledge and market understanding.
          </p>
        </div>

        <div className="ind-grid rv-stagger">
          {industryCategories.map((category) => (
            <article key={category.id} className="ind-card rv">
              <div className="ind-media">
                <ImageWithFallback src={category.image} alt={category.title} />
                <span className="ind-chip">{category.applications[0]}</span>
              </div>
              <div className="ind-body">
                <h3>{category.title}</h3>
                <p className="ind-desc">{category.description}</p>
                <button className="ind-link" onClick={() => openCategory(category.title)}>
                  View sector <ArrowRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="lm-panel-dark rv on-dark">
          <p className="eyebrow">Custom solutions</p>
          <h3>
            Can't see your product? <span className="green">We'll formulate it.</span>
          </h3>
          <p>
            Our research and development team, with a combined experience of over 70 years in the
            industry, is always available to discuss the formulation and specification of new
            products to your requirements.
          </p>
          <button className="btn-lm" onClick={scrollToContact}>
            Contact our R&amp;D team →
          </button>
        </div>
      </div>
    </section>
  );
}
