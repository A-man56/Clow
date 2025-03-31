import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolled = scrollY > 30;
  const scrollProgress = Math.min(scrollY / 150, 1); // Faster transition

  return (
    <nav
      className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-[0.8s] ease-in-out"
      style={{
        width: scrolled ? "900px" : "100%", // Fixed max width after scroll
        maxWidth: scrolled ? "900px" : "1200px",
        padding: scrolled ? "12px 20px" : "20px 40px",
        backgroundColor: `rgba(240, 240, 240, ${scrollProgress})`, // Gradual background appearance
        borderRadius: scrolled ? "20px" : "0px", // Rounded corners after scroll
        boxShadow: scrolled ? "0px 4px 12px rgba(0, 0, 0, 0.1)" : "none", // Soft shadow
        transition: "all 0.8s ease-in-out", // Reduced smoothing time
      }}
    >
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
        {/* Logo - Always on the left */}
        <a href="#home" className="text-3xl font-bold transition-all duration-[0.8s] ease-in-out">
          <Image
            src="/logo/logo.svg"
            alt="Clow Logo"
            width={scrolled ? 140 : 180} // Slightly reduces after scroll
            height={scrolled ? 50 : 65}
            style={{ transition: "width 0.8s ease-in-out, height 0.8s ease-in-out" }}
          />
        </a>

        {/* Menu Items - Always Centered */}
        <div
          className="flex items-center absolute left-1/2 transform -translate-x-1/2 transition-all duration-[0.8s] ease-in-out"
          style={{
            transform: `translateX(-50%)`,
            opacity: scrolled ? "1" : "1",
          }}
        >
          {["Home", "Services", "Products", "Blogs", "About Us"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                className="font-semibold text-gray-700 hover:text-black relative group transition-all duration-[0.8s] ease-in-out"
                style={{
                  fontSize: scrolled ? "13px" : "14px", // **Reduced font size**
                  padding: "6px 12px", // Fixed padding
                  margin: scrolled ? "0px 8px" : "0px 16px", // Reduce spacing after scroll
                  whiteSpace: "nowrap", // Prevent text from wrapping
                }}
              >
                {item}
                <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </a>
            )
          )}
        </div>

        {/* Get Started Button - Always on the right */}
        <a
          href="#get-started"
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold transition-all duration-[0.8s] ease-in-out shadow-lg"
          style={{
            padding: scrolled ? "6px 12px" : "8px 16px", // Adjust padding
            fontSize: scrolled ? "13px" : "14px", // **Reduced button text size**
          }}
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
