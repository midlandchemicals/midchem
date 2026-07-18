import { Tractor, Car, Construction, Factory, ShoppingCart, ArrowRight } from "lucide-react";
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
        "Agricultural chemicals and formulations for crop protection and enhancement.",
      icon: Tractor,
      image:
        "https://images.unsplash.com/photo-1498408040764-ab6eb772a145?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      products: ["Concentrated Foliar Nutrients", "Biostimulants", "Seed Treatments"],
      applications: ["Crop Enhancement", "Higher Yield", "Soil Treatment"],
    },
    {
      id: 3,
      title: "Automotive",
      description:
        "High-performance chemicals for automotive manufacturing and maintenance.",
      icon: Car,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      products: ["Car Wash Products", "Screenwashes & De-Icers", "Leather Protection"],
      applications: ["Car Wash", "Professional Care", "Corporate Solutions"],
    },
    {
      id: 4,
      title: "Construction",
      description:
        "Construction chemicals for building, maintenance, and infrastructure projects.",
      icon: Construction,
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      products: ["Brick Acid", "Grafitti Remover", "Masonry Silicon"],
      applications: ["Building Chemicals", "Construction Sites", "New Build Homes"],
    },
    {
      id: 7,
      title: "Industrial Cleaning",
      description: "Professional-grade industrial cleaning chemicals and degreasers.",
      icon: Factory,
      image:
        "https://plus.unsplash.com/premium_photo-1663088651379-95c21dfbf72c?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      products: ["Industrial Degreasers", "Heavy-Duty Cleaners", "Alumuminium Cleaners"],
      applications: ["Equipment Cleaning", "Equipment Maintenance", "Paint Strippers"],
    },
    {
      id: 9,
      title: "Retail Cleaners",
      description: "Consumer and retail chemicals for various commercial applications.",
      icon: ShoppingCart,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      products: ["Floor Cleaners", "Surface Cleaners", "Washing-Up Liquid"],
      applications: ["Restaurants & Hotels", "Schools", "Gyms"],
    },
  ];

  const openCategory = (title: string) => {
    if (title === "Agricultural") {
      window.open("https://ilex-envirosciences.com/", "_blank");
      return;
    }
    navigate("/products");
    if (title === "Automotive" || title === "Power Generation") {
      setSelectedChemical("Automotive Chemicals");
    } else if (title === "Industrial Cleaning") {
      setSelectedChemical("Paint Strippers");
    } else if (title === "Construction") {
      setSelectedChemical("Building Chemicals");
    } else if (title === "Aerospace" || title === "Education") {
      setSelectedChemical("Speciality Chemicals");
    } else if (title === "Retail") {
      setSelectedChemical("Paint Strippers");
    } else if (title === "Healthcare") {
      setSelectedChemical("Hand Cleaners");
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
    <section id="products" ref={ref} style={{ background: "var(--porcelain-2)" }}>
      <div className="shell">
        <div className="sec-head">
          <div>
            <p className="eyebrow rv">Industries</p>
            <h2 className="lm-display rv rv-d1">
              One factory, <em style={{ color: "var(--aqua-deep)" }}>every sector.</em>
            </h2>
          </div>
          <p className="sec-lead rv rv-d2">
            From foliar nutrients to floor cleaners, we blend, pack and label for the industries
            that keep the country running.
          </p>
        </div>

        <div className="ind-grid">
          {industryCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <article key={category.id} className="ind-card rv">
                <div className="ind-media">
                  <ImageWithFallback src={category.image} alt={category.title} />
                  <h3 className="ind-title">{category.title}</h3>
                </div>
                <div className="ind-body">
                  <p className="ind-desc">{category.description}</p>
                  <div>
                    <p className="ind-k">
                      <IconComponent size={12} style={{ verticalAlign: "-1px", marginRight: "6px" }} />
                      Product examples
                    </p>
                    <div className="ind-tags">
                      {category.products.slice(0, 3).map((product) => (
                        <span key={product} className="ind-tag">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="ind-k">Applications</p>
                    <p className="ind-apps">{category.applications.join(" • ")}</p>
                  </div>
                  <button className="ind-link" onClick={() => openCategory(category.title)}>
                    Learn more <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="lm-panel-dark lm-grain rv on-dark">
          <p className="eyebrow">Custom solutions</p>
          <h3>
            Can't see your product? <em>We'll formulate it.</em>
          </h3>
          <p>
            Our highly knowledgeable research and development team, with a combined experience of
            over 70 years in the industry, is always available to discuss the formulation and
            specification of new products to your requirements.
          </p>
          <button className="btn-lm" onClick={scrollToContact}>
            Contact our R&amp;D team
          </button>
        </div>
      </div>
    </section>
  );
}
