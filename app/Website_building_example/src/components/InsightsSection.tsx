import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const insights = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B68A2" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    bg: "rgba(59,104,162,0.08)",
    title: "Sleep Pattern Detected",
    text: "Your deep sleep increases by 18% when you finish dinner before 7pm. Consider earlier meals.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#AE7133" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    bg: "rgba(174,113,51,0.08)",
    title: "Recovery Score: 92",
    text: "Excellent recovery overnight. Your HRV is 12% above your baseline — great day for high intensity.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C3959" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    bg: "rgba(28,57,89,0.08)",
    title: "Weekly Trend",
    text: "Stress levels are trending 15% lower this week compared to last. Your evening walks are making a difference.",
  },
];

export default function InsightsSection() {
  return (
    <section
      id="insights"
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F4F6F8 0%, #E4ECF2 50%, #D6E0EA 100%)",
      }}
    >
      {/* Mountain backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="0 0 1920 500"
          fill="none"
          className="absolute bottom-0 w-full"
          style={{ minWidth: 1200 }}
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="ins-mist2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6996CC" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#94B3D3" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="ins-midMtn" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5D8BB4" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#6996CC" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#B0C5D6" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d="M0 500 L100 350 L250 400 L400 280 L550 350 L700 260 L850 330 L1000 240 L1150 310 L1300 250 L1450 320 L1600 260 L1750 310 L1920 500Z"
            fill="url(#ins-mist2)"
            opacity="0.6"
          />
          <path
            d="M0 500 L150 380 L300 420 L500 300 L680 370 L850 290 L1050 360 L1200 280 L1400 350 L1600 300 L1800 370 L1920 500Z"
            fill="url(#ins-midMtn)"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <p className="stat-pill inline-block mb-4">AI Insights</p>
          <h2
            className="font-display text-ink-700"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, letterSpacing: "-0.03em" }}
          >
            Intelligence That <span style={{ color: "#3B68A2" }}>Understands You</span>
          </h2>
          <p
            className="font-body text-ink-400 mt-4 max-w-lg mx-auto"
            style={{ fontWeight: 300, lineHeight: 1.7 }}
          >
            Your ring learns your patterns and surfaces insights that matter, when they matter.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {insights.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <motion.div
                className="widget-card p-6 text-left"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: card.bg }}
                >
                  {card.icon}
                </div>
                <p className="font-body text-ink-700 text-sm font-medium">{card.title}</p>
                <p className="font-body text-ink-400 text-xs mt-2" style={{ lineHeight: 1.6 }}>
                  {card.text}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
