export default function Footer() {
  return (
    <footer id="about" className="relative py-16 px-6" style={{ background: "#1C3959" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img
              src="/brand_assets/20260221-220434.jpeg"
              alt="NarraNexus"
              className="h-10 w-auto object-contain"
              style={{ filter: "brightness(1.8) contrast(0.9)" }}
            />
          </div>
          <div className="flex items-center gap-8">
            {["Privacy", "Terms", "Support"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-sm transition-colors duration-300 hover:text-white"
                style={{ color: "#94B3D3" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div
          className="subtle-divider my-8"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(148,179,211,0.15), transparent)",
          }}
        />
        <p className="text-center font-body text-xs" style={{ color: "#5D8BB4" }}>
          &copy; 2026 NarraNexus. Crafted with serenity.
        </p>
      </div>
    </footer>
  );
}
