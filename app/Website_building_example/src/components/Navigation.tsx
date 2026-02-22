import { motion } from "framer-motion";

export default function Navigation() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="nav-blur fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/brand_assets/20260221-220434.jpeg"
            alt="NarraNexus"
            className="h-9 w-auto object-contain"
          />
          <span
            className="font-display text-ink-700 hidden sm:inline"
            style={{ fontSize: "1.15rem", fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            NarraNexus
          </span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "#features", label: "Features" },
            { href: "#insights", label: "Insights" },
            { href: "#about", label: "About" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="font-body text-sm text-ink-700 tracking-wide hover:text-ink-600
                         transition-colors duration-300"
              style={{ fontWeight: 400 }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm
                     font-medium text-white transition-transform duration-300
                     hover:scale-[1.03] active:scale-[0.98]
                     focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-600"
          style={{
            background: "linear-gradient(135deg, #3B68A2 0%, #1C3959 100%)",
            boxShadow: "0 2px 8px rgba(28,57,89,0.25)",
          }}
        >
          Get Started
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </motion.nav>
  );
}
