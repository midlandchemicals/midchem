import {
  Mail,
  Phone,
  User,
  CheckCircle,
  Sparkles,
  Star,
  Shield,
  Droplets,
  Building2,
} from "lucide-react";
import { useEffect, useState } from "react";

import ProductImg from "./ProductImg";
import { useNavigate, useParams } from "react-router-dom";
import { chemicals } from "../utils/chemicals";
import logo from "../assets/logo.png";
import useProductStore from "../store";

const availableSizes = [
  {
    size: "5L",
    label: "5 Litres",
    description: "Perfect for small offices and facilities",
    popular: false,
  },
  {
    size: "10L",
    label: "10 Litres",
    description: "Ideal for medium-sized establishments",
    popular: true,
  },
  {
    size: "25L",
    label: "25 Litres",
    description: "Great for large facilities and hotels",
    popular: false,
  },
  {
    size: "200L",
    label: "200 Litres",
    description: "Industrial grade for large operations",
    popular: false,
  },
  {
    size: "1000L",
    label: "1000 Litres",
    description: "Bulk supply for industrial facilities",
    popular: false,
  },
];

const ProductDetail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
    productCode: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
  });

  const [selectedSize, setSelectedSize] = useState("5L");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function findProductById(id: string) {
    return Object.values(chemicals)
      .flat()
      .find((product) => product.id === id);
  }

  const product = params.id ? findProductById(params.id) : null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      requirement: "",
    };

    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "This field is required";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "This field is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "This field is required";
      isValid = false;
    }

    // Requirement validation
    if (!formData.requirement.trim()) {
      newErrors.requirement = "This field is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const navigate = useNavigate();
  const { selectedChemical } = useProductStore();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);
    formDataObj.append("productCode", product?.code || "");
    formDataObj.append("selectedSize", selectedSize);

    try {
      const response = await fetch("https://formspree.io/f/myznqarl", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formDataObj,
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          requirement: "",
          productCode: "",
        });
        setErrors({
          name: "",
          email: "",
          phone: "",
          requirement: "",
        });
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert(`Network error ${error}. Please try again!`);
    }
  };

  if (product === null) return "Loading...";
  return (
    <>
      <style>{`
:root {
  --bg: #f5f7fa;
  --panel: #ffffff;
  --panel-2: #e3ebf5;
  --brand: #1f4e79;
  --brand-2: #3a7ca5;
  --text: #0d1b2a;
  --text-dim: #556b7a;
  --ring: rgba(102,246,193,.35);
  --radius: 20px;
  --shadow: 0 10px 40px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.04);
}
body {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
.theme-panel { background-color: var(--panel); border: 1px solid rgba(255,255,255,.08); border-radius: var(--radius); box-shadow: var(--shadow); }
.theme-card { background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02)); border: 1px solid rgba(255,255,255,.08); border-radius: var(--radius); box-shadow: var(--shadow); }
.theme-button { background: linear-gradient(135deg, var(--brand-2), var(--brand)); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; }
.theme-button:hover { background: linear-gradient(135deg, #25a25a, #177b55); transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,.2); }
.theme-text { color: var(--text); }
.theme-text-dim { color: var(--text-dim); }
.theme-brand { color: var(--brand); }
.theme-container { width: min(1200px, 92vw); margin: 0 auto; }
.theme-section { padding: 84px 0; }
      `}</style>
      <div
        className="min-h-[100dvh] flex flex-col"
        style={{
          background:
            "radial-gradient(1200px 800px at 80% -10%, rgba(102,246,193,.08), transparent 60%), radial-gradient(1200px 800px at -10% 10%, rgba(109,225,255,.08), transparent 50%), #f5f7fa",
        }}
      >
        {/* Header */}
        <header
          className="theme-panel theme-shadow"
          style={{ borderBottom: "4px solid var(--brand)" }}
        >
          <div className="theme-container px-6 py-6">
            <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 items-start md:items-center justify-start md:justify-between">
              <div
                onClick={() => navigate("/")}
                className="flex cursor-pointer items-center space-x-4"
              >
                <div>
                  <img
                    src={logo}
                    className="lg:h-18 h-12 w-20 lg:w-40"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="lg:text-2xl text-nowrap text-xl font-bold theme-text">
                    Midland Chemicals
                  </h1>
                  <p className="md:text-sm text-xs theme-brand font-medium">
                    Professional Cleaning Solutions
                  </p>
                </div>
              </div>
              <div className="md:text-right">
                <span
                  style={{
                    backgroundColor: "var(--brand-2)",
                    color: "var(--panel)",
                  }}
                  className="text-nowrap px-3 py-1 rounded-full text-xs md:text-sm font-semibold"
                >
                  Product Code: {product?.code}
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="theme-container px-6 py-12 flex-grow">
          {/* Product Hero Section */}
          <div className="theme-card overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex items-center justify-center">
                <div className="relative">
                  <div className="lg:w-140 lg:h-170 md:w-120 w-90 h-160  bg-white rounded-2xl shadow-2xl p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="lg:w-120 w-90 md:w-100 h-140 lg:h-140 px-2 bg-gray-100 rounded-lg mb-4 relative overflow-hidden">
                        <div className="absolute top-0 left-4 right-4">
                          <div className="bg-blue-600 text-white my-4 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                            {selectedChemical}
                          </div>
                          <div className="rounded-2xl overflow-hidden">
                            {product && (
                              <ProductImg product={product}></ProductImg>
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">
                        Professional Grade Container
                      </p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Product Information */}
              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      Professional Grade
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold theme-text mb-4">
                    {product?.name}
                  </h2>
                  <p className="text-lg theme-text-dim leading-relaxed mb-6">
                    {product?.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold theme-text mb-4">
                    Key Benefits
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {product?.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 bg-blue-50 p-3 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="theme-text-dim font-medium">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold theme-text mb-4">
                    Available Sizes
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    {availableSizes.map((sizeOption) => (
                      <div
                        key={sizeOption.size}
                        onClick={() => setSelectedSize(sizeOption.size)}
                        className={`relative cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-lg ${
                          selectedSize === sizeOption.size
                            ? "border-blue-500 bg-blue-50 shadow-lg"
                            : "border-gray-200 bg-white hover:border-blue-300"
                        }`}
                      >
                        {sizeOption.popular && (
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                              Popular
                            </span>
                          </div>
                        )}
                        <div className="text-center">
                          <div
                            className={`text-2xl font-bold mb-1 ${
                              selectedSize === sizeOption.size
                                ? "text-blue-600"
                                : "text-gray-800"
                            }`}
                          >
                            {sizeOption.size}
                          </div>
                          <div
                            className={`text-sm font-medium mb-2 ${
                              selectedSize === sizeOption.size
                                ? "text-blue-700"
                                : "text-gray-600"
                            }`}
                          >
                            {sizeOption.label}
                          </div>
                          <div
                            className={`text-xs ${
                              selectedSize === sizeOption.size
                                ? "text-blue-600"
                                : "text-gray-500"
                            }`}
                          >
                            {sizeOption.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Selected:</strong>{" "}
                      {
                        availableSizes.find((s) => s.size === selectedSize)
                          ?.label
                      }{" "}
                      -
                      {
                        availableSizes.find((s) => s.size === selectedSize)
                          ?.description
                      }
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                    <Droplets className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-800">
                      Ready to Use
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-800">
                      Safe Formula
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                    <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-800">
                      Streak-Free
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Features & Applications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Features */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold theme-text mb-6 flex items-center">
                <Sparkles className="w-6 h-6 theme-brand mr-2" />
                Product Features
              </h3>
              <div className="space-y-4">
                {product?.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold theme-text mb-6 flex items-center">
                <Building2
                  className="w-6 h-6 mr-2"
                  style={{ color: "#25a25a" }}
                />
                Ideal Applications
              </h3>
              <div className="space-y-4 mb-6">
                {product?.applications.map((app, i) => {
                  const Icon = app.icon;
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-blue-500" />
                      <span>{app.text}</span>
                    </div>
                  );
                })}
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Suitable Surfaces
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {product?.surfaces.map((surface, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm theme-text-dim">{surface}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="theme-card">
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold theme-text mb-4">
                  Request Product Information
                </h2>
                <p className="text-lg theme-text-dim">
                  {`  Interested in ${product?.name}? Get detailed pricing
                and availability information.`}
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    Your inquiry for ({product?.name}) ({selectedSize}) has been
                    submitted successfully. Our team will contact you soon with
                    detailed information!
                  </p>
                </div>
              ) : (
                <form id="inquiry-form" onSubmit={handleSubmit}>
                  <div className="max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                              errors.name
                                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                                : "border-gray-300"
                            }`}
                            placeholder="Enter your full name"
                          />
                        </div>
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                              errors.phone
                                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                                : "border-gray-300"
                            }`}
                            placeholder="Enter your phone number"
                          />
                        </div>
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                            errors.email
                              ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Enter your email address"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="requirement"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Requirement Details *
                      </label>
                      <div className="relative">
                        <textarea
                          id="requirement"
                          name="requirement"
                          value={formData.requirement}
                          onChange={(e) => {
                            const { name, value } = e.target;
                            setFormData({
                              ...formData,
                              [name]: value,
                            });

                            // Clear error when user starts typing
                            if (errors[name as keyof typeof errors]) {
                              setErrors({
                                ...errors,
                                [name]: "",
                              });
                            }
                          }}
                          rows={4}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical ${
                            errors.requirement
                              ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Tell us about your requirements"
                        />
                      </div>
                      {errors.requirement && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.requirement}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full theme-button py-4 px-8 cursor-pointer transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      Request Product Information
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          style={{ backgroundColor: "var(--brand)" }}
          className="text-white py-8 mt-16 pt-8"
        >
          <div className="theme-container px-6 text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div>
                <img src={logo} className="lg:h-18 h-12 w-20 lg:w-40" alt="" />
              </div>
              <span className="text-xl font-bold">Midland Chemicals</span>
            </div>
            <p className="text-white">
              Professional Glass Cleaning Solutions - Crystal Clear Results
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProductDetail;
