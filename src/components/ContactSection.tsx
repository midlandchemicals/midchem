import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    text: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Required fields
    const requiredFields = {
      name: "Name",
      email: "Email",
      phone: "Phone",
      company: "Company",
      text: "Requirements",
    };

    Object.entries(requiredFields).forEach(([field]) => {
      if (!formData[field as keyof typeof formData].trim()) {
        newErrors[field] = "This field is required";
      }
    });

    // Email validation
    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrblpgvd", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formDataObj,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert(`Network error ${error}. Please try again.`);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "UK Headquarters",
      details: [
        "Midland Chemicals Ltd",
        "Atherstone, Warwickshire",
        "United Kingdom",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "Main: 01827 722911",
        "Available during business hours",
        "UK & International calls welcome",
      ],
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "Sales: sales@midlandchem.com",
        "General enquiries welcome",
        "Technical support available",
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "UK Time (GMT/BST)",
        "Response within 24 hours",
      ],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900">
            Contact Midland Chemicals
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your chemical manufacturing requirements? Our
            experienced team based in Atherstone, Warwickshire is here to help
            with custom solutions for UK and worldwide customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-3 text-lg">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <span>{info.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <Mail className="h-10 w-10 mx-auto mb-3" />
                  <h3 className="font-medium mb-2 text-lg">Email Us Now</h3>
                  <p className="text-sm opacity-90 mb-4">
                    sales@midlandchem.com
                  </p>
                  <Button variant="secondary" className="w-full py-3 text-base">
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-green-600 text-white">
                <CardContent className="p-6 text-center">
                  <Phone className="h-10 w-10 mx-auto mb-3" />
                  <h3 className="font-medium mb-2 text-lg">Call Us Now</h3>
                  <p className="text-sm opacity-90 mb-4">01827 722911</p>
                  <Button variant="secondary" className="w-full py-3 text-base">
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          {isSubmitted ? (
            <div className="bg-green-50 col-span-2 border border-green-200 max-h-160 rounded-xl p-8 text-center flex flex-col justify-center items-center min-h-[300px]">
              <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                Thank You!
              </h3>
              <p className="text-green-700 max-w-md">
                Your inquiry has been submitted successfully. Our team will
                contact you soon with detailed information!
              </p>
            </div>
          ) : (
            <div id="contact-form" className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Get a Quote</CardTitle>
                  <p className="text-gray-600">
                    Tell us about your chemical manufacturing requirements and
                    we'll get back to you within 24 hours with a detailed
                    proposal.
                  </p>
                </CardHeader>
                <form id="inquiry-form" onSubmit={handleSubmit}>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className={`py-3 ${
                          errors.name ? "border-red-500" : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          className={`py-3 ${
                            errors.email ? "border-red-500" : ""
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          type="tel"
                          placeholder="+44 1234 567890"
                          className={`py-3 ${
                            errors.phone ? "border-red-500" : ""
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company Name"
                        className={`py-3 ${
                          errors.company ? "border-red-500" : ""
                        }`}
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm">
                          {errors.company}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Requirements *</Label>
                      <Textarea
                        id="message"
                        name="text"
                        value={formData.text}
                        onChange={handleInputChange}
                        placeholder="Please describe your chemical requirements, quantities needed, specifications, target markets, or any specific questions about our toll manufacturing or private label services..."
                        className={`min-h-[120px] ${
                          errors.text ? "border-red-500" : ""
                        }`}
                      />
                      {errors.text && (
                        <p className="text-red-500 text-sm">{errors.text}</p>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row ">
                      <Button
                        type="submit"
                        size="lg"
                        className="flex-1 py-4 cursor-pointer text-lg h-auto"
                      >
                        Send Enquiry
                      </Button>
                    </div>

                    <p className="text-xs text-gray-500">
                      * Required fields. We respect your privacy and will only
                      use your information to respond to your enquiry. Company
                      Registration: 02591575
                    </p>
                  </CardContent>
                </form>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
