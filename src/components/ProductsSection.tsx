import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  
  Tractor,
  Car,
  Construction,
  
  
  Factory,
  
  ShoppingCart,
} from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { useNavigate } from "react-router-dom";
import useProductStore from "../store";

export function ProductsSection() {
  const navigate = useNavigate();
  const { setSelectedChemical } = useProductStore();
  const industryCategories = [
    
    {
      id: 2,
      title: "Agricultural",
      description:
        "Agricultural chemicals and formulations for crop protection and enhancement.",
      icon: Tractor,
      image:
        "https://images.unsplash.com/photo-1743362814840-bc41dd1b3a2d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      products: [
        "Concentrated Foliar Nutrients",
        "Biostimulants",
        "Seed Treatments",
      ],
      applications: [
        "Crop Enhancement",
        "Higher Yield",
        "Soil Treatment",
      ],
    },
    {
      id: 3,
      title: "Automotive",
      description:
        "High-performance chemicals for automotive manufacturing and maintenance.",
      icon: Car,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      products: [
        "Car Wash Products",
        "Screenwashes & De-Icers",
        "Leather Protection",
      ],
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
      products: [
        "Brick Acid",
        "Grafitti Remover",
        "Masonry Silicon",
      ],
      applications: ["Building Chemicals", "Construction Sites", "New Build Homes"],
    },
  
   
    {
      id: 7,
      title: "Industrial Cleaning",
      description:
        "Professional-grade industrial cleaning chemicals and degreasers.",
      icon: Factory,
      image:
        "https://plus.unsplash.com/premium_photo-1663088651379-95c21dfbf72c?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      products: [
        "Industrial Degreasers",
        "Heavy-Duty Cleaners",
        "Alumuminium Cleaners",
      ],
      applications: [
        "Equipment Cleaning",
        "Equipment Maintenance",
        "Paint Strippers",
      ],
    },
   
    {
      id: 9,
      title: "Retail Cleaners",
      description:
        "Consumer and retail chemicals for various commercial applications.",
      icon: ShoppingCart,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      products: [
        "Floor Cleaners",
        "Surface Cleaners",
        "Washing-Up Liquid",
      ],
      applications: [
        "Restaurants & Hotels",
        "Schools",
        "Gyms",
      ],
    },
  ];

  return (
    <>
      <style>{`
        .custom-card {
          background: #17263A !important;
          transition: background 0.3s;
        }
        .custom-card:hover {
          background: #2B648A !important;
        }
      `}</style>
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900">
            Industries We Serve
          </h2>
         
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className="custom-card group hover:shadow-lg flex flex-col justify-between transition-shadow duration-300"
              >
                <CardHeader className="flex flex-col gap-y-4">
                  <div className="flex justify-center">
                    <div className="inline-flex items-center space-x-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                    </div>
                  </div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col  gap-y-5 flex-1">
                  <p className="text-gray-200 min-h-16">
                    {category.description}
                  </p>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-medium text-white">
                      Product Examples:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {category.products.slice(0, 3).map((product) => (
                        <Badge
                          key={product}
                          variant="secondary"
                          className="text-xs px-3 py-1"
                        >
                          {product}
                        </Badge>
                      ))}
                      {category.products.length > 3 && (
                        <Badge variant="outline" className="text-xs px-3 py-1">
                          +{category.products.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-medium text-white">
                      Applications:
                    </h4>
                    <div className="text-sm text-gray-200">
                      {category.applications.join(" • ")}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full cursor-pointer py-3 text-base"
                      onClick={() => {
                        if (category.title === "Agricultural") {
                          window.open("https://ilex-envirosciences.com/", "_blank");
                        } else {
                          navigate("/products");
                          if (
                            category.title === "Automotive" ||
                            category.title === "Power Generation"
                          ) {
                            setSelectedChemical("Automotive Chemicals");
                          } else if (category.title === "Industrial Cleaning") {
                            setSelectedChemical("Paint Strippers");
                          } else if (category.title === "Construction") {
                            setSelectedChemical("Building Chemicals");
                          } else if (
                            category.title === "Aerospace" ||
                            category.title === "Education"
                          ) {
                            setSelectedChemical("Speciality Chemicals");
                          } else if (category.title === "Retail") {
                            setSelectedChemical("Paint Strippers");
                          } else if (category.title === "Healthcare") {
                            setSelectedChemical("Hand Cleaners");
                          }
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl text-gray-900 mb-4">
            Custom Chemical Solutions
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our highly knowledgeable research and development team, with a
            combined experience of over 70 years in the industry, is always
            available to discuss the formulation and specification of new
            products to your requirements.
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById("contact-form");
              if (element) {
                const topOffset =
                  element.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({
                  top: topOffset,
                  behavior: "smooth",
                });
              }
            }}
            size="lg"
            className="px-8 bg-[#008060] hover:bg-[#00694e] transition-colors py-4 cursor-pointer text-lg h-auto"
          >
            Contact Our R&D Team
          </Button>
        </div>
      </div>
    </section>
    </>
  );
}
