import { motion } from "framer-motion";
import { FloatingPaths } from "@/components/ui/background-paths";
import InkMountains from "./InkMountains";
import SleepCard from "./SleepCard";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #F0F2F4 0%, #EBECED 25%, #E4E9EE 55%, #DCE3EB 100%)",
        }}
      />

      {/* Animated flowing paths — layered between sky and mountains */}
      <div className="absolute inset-0 z-[1]">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <InkMountains />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
        style={{ marginTop: -20 }}
      >
        {/* Tagline pill */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="stat-pill mb-6"
          style={{ background: "rgba(59,104,162,0.06)", borderColor: "rgba(59,104,162,0.1)" }}
        >
          AI Agent Framework
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="font-display text-ink-700"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          <span style={{ color: "#3B68A2" }}>NarraNexus</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="font-body text-ink-500 mt-5 max-w-xl"
          style={{ fontSize: "1.05rem", lineHeight: 1.7, fontWeight: 300 }}
        >
          Elegant widgets that transform complex health data into clarity. Sleep, heart
          rate, activity — all presented with the serenity of ink on paper.
        </motion.p>

        {/* Floating sleep card */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="mt-12"
        >
          <SleepCard />
        </motion.div>
      </div>

      {/* Carousel dots */}
      <div
        className="absolute z-20 hidden lg:block"
        style={{ right: "calc(50% - 240px)", top: "50%", transform: "translateY(-50%)" }}
      >
        <div className="flex flex-col gap-2">
          <div className="w-2 h-2 rounded-full" style={{ background: "#1C3959" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#B0C5D6" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#B0C5D6" }} />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(180deg, transparent, #F4F6F8)" }}
      />
    </section>
  );
}
