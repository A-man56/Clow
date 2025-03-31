"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Mail, MapPin, Phone, Twitter, Instagram, Github, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-4xl">
            Contact Us
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            Any Question Or Remarks? Just Write Us A Message!
          </p>
        </div>

        <div className="bg-background shadow-lg rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr]">
            {/* Left Side - Contact Information */}
            <div
              className="relative p-8 md:p-12 flex flex-col justify-between"
              style={{
                height: "75vh",
                background: `
                  radial-gradient(circle at top left, rgba(204, 224, 248, 1) 5%, rgba(204, 224, 248, 0) 50%),
                  radial-gradient(circle at top right, rgba(204, 242, 227, 1) 10%, rgba(204, 242, 227, 0) 50%),
                  linear-gradient(to bottom right, rgba(237, 233, 254, 1), rgba(219, 234, 254, 1))
                `,
                backgroundColor: "#E0E7FF",
              }}
            >
              {/* Contact Info */}
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-foreground mb-6 opacity-95">Contact Information</h2>
                <p className="text-muted-foreground mb-8">Say something to start a live chat!</p>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="h-10 w-6 text-foreground mr-4" />
                    <span className="text-foreground">+91 7220083365</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-foreground mr-4" />
                    <span className="text-foreground">demo@gmail.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-foreground mr-4 mt-1" />
                    <span className="text-foreground">
                      Hostel 9 Manit Bhopal
                      <br />
                      Madhya Pradesh, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="relative z-10 flex space-x-4 mt-12 justify-center">
                <a href="#" className="bg-background/10 hover:bg-background/20 p-3 rounded-full transition-colors">
                  <Twitter className="h-5 w-5 text-foreground" />
                </a>
                <a href="#" className="bg-background/10 hover:bg-background/20 p-3 rounded-full transition-colors">
                  <Instagram className="h-5 w-5 text-foreground" />
                </a>
                <a href="#" className="bg-background/10 hover:bg-background/20 p-3 rounded-full transition-colors">
                  <Github className="h-5 w-5 text-foreground" />
                </a>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white p-8 md:p-11">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="example@email.com" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" placeholder="+91 123-456-7890" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Select Subject?</Label>
                  <RadioGroup defaultValue="General Inquiry" value={formData.subject} onValueChange={handleRadioChange} className="flex flex-row flex-wrap gap-4">
                    {["General Inquiry", "Technical Support", "Billing Question", "Partnership"].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={option.replace(/\s+/g, "-").toLowerCase()} className="h-5 w-5 border-2 border-gray-800 text-gray-800 data-[state=checked]:bg-gray-800 data-[state=checked]:border-gray-800" />
                        <Label htmlFor={option.replace(/\s+/g, "-").toLowerCase()}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Write your message..." value={formData.message} onChange={handleChange} className="min-h-[80px]" required />
                </div>

                <div className="flex justify-end">
                  <Button type="submit" variant="blue" className="px-6 py-3 rounded flex items-center">
                    Send Message <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
