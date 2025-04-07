import { ShieldCheck, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C3455] text-[#F6F1E9] py-12">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter Signup</h3>
          <p className="text-[#D8C3B6] mb-4">Get free no-code tips & template discounts.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l-md text-[#1C3455]"
            />
            <button
              type="submit"
              className="bg-[#E0E8E8] text-[#1C3455] px-4 rounded-r-md font-semibold hover:bg-[#D8C3B6]"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Proof */}
        {/* Social Proof */}
<div>
  <h3 className="text-xl font-bold mb-4">Featured In</h3>
  <div className="flex space-x-4">
    <img src="/photos/techcrunch.png" alt="TechCrunch" className="h-16" />
    <img src="/photos/producthunt.png" alt="Product Hunt" className="h-12" />
  </div>
</div>


        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#services" className="hover:text-[#E0E8E8]">Services</a></li>
            <li><a href="#templates" className="hover:text-[#E0E8E8]">Templates</a></li>
            <li><a href="#blog" className="hover:text-[#E0E8E8]">Blog</a></li>
            <li><a href="#contact" className="hover:text-[#E0E8E8]">Contact</a></li>
          </ul>
        </div>

        {/* Trust Badges */}
        <div>
          <h3 className="text-xl font-bold mb-4">We Care About Your Trust</h3>
          <div className="space-y-3">
            <p className="flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-[#E0E8E8]" />
              <span>GDPR-compliant</span>
            </p>
            <p className="flex items-center space-x-3">
              <Lock className="w-5 h-5 text-[#E0E8E8]" />
              <span>Secure payments</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
