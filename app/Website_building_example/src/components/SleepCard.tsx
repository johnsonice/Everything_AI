import { motion } from "framer-motion";

const sleepBarHeights = [
  8, 5, 3, 4, 6, 30, 10, 5, 3, 4, 7, 12, 8, 15, 35, 45, 55, 40, 60, 50, 70,
  35, 25, 45, 30, 18, 10, 5,
];

export default function SleepCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="widget-card hero-card-shadow overflow-hidden"
      style={{ width: 380, maxWidth: "90vw" }}
    >
      {/* Sky header */}
      <div
        className="relative overflow-hidden"
        style={{
          height: 150,
          background:
            "linear-gradient(180deg, #EAF2FA 0%, #DDE9F3 30%, #D0E0EE 60%, #C6D9E8 100%)",
        }}
      >
        {/* Clouds */}
        {[
          { top: 8, left: 20, w: 100, h: 35, opacity: 0.65, blur: 6 },
          { top: 18, left: 60, w: 70, h: 28, opacity: 0.5, blur: 4 },
          { top: 12, right: 30, w: 80, h: 30, opacity: 0.55, blur: 5 },
          { top: 5, right: 80, w: 50, h: 20, opacity: 0.4, blur: 3 },
          { top: 30, left: 140, w: 60, h: 22, opacity: 0.35, blur: 3 },
        ].map((cloud, i) => (
          <motion.div
            key={i}
            animate={{ x: [0, 8, 0] }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{
              top: cloud.top,
              left: cloud.left,
              right: (cloud as any).right,
              width: cloud.w,
              height: cloud.h,
              background: "white",
              borderRadius: cloud.h,
              opacity: cloud.opacity,
              filter: `blur(${cloud.blur}px)`,
            }}
          />
        ))}
        {/* Weather icon */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: -4,
            fontSize: 56,
            filter: "drop-shadow(0 6px 16px rgba(28,57,89,0.18))",
            lineHeight: 1,
          }}
        >
          🌧️
        </div>
      </div>

      {/* Content */}
      <div className="px-7 pt-5 pb-6">
        <p className="font-body text-ink-400 text-sm text-center" style={{ fontWeight: 400 }}>
          Time Asleep
        </p>
        <p
          className="font-display text-ink-800 text-center mt-1"
          style={{ fontSize: "2.4rem", fontWeight: 500, letterSpacing: "-0.02em" }}
        >
          8h 0m
        </p>
        <p className="font-body text-ink-300 text-xs text-center mt-1" style={{ fontWeight: 400 }}>
          Total duration 8h 30m
        </p>

        <div className="subtle-divider my-5" />

        {/* Sleep stages */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Awake", value: "0h 55m", color: "#3B68A2" },
            { label: "Light", value: "1h 25m", color: "#5D8BB4" },
            { label: "Deep", value: "4h 1m", color: "#1C3959" },
          ].map((stage, i) => (
            <div
              key={stage.label}
              className="text-center"
              style={
                i === 1
                  ? {
                      borderLeft: "1px solid rgba(28,57,89,0.08)",
                      borderRight: "1px solid rgba(28,57,89,0.08)",
                    }
                  : undefined
              }
            >
              <p className="text-xs font-medium" style={{ color: stage.color }}>
                {stage.label}
              </p>
              <p className="font-body text-ink-700 mt-1" style={{ fontSize: "1.05rem", fontWeight: 600 }}>
                {stage.value}
              </p>
            </div>
          ))}
        </div>

        {/* Sleep chart */}
        <div className="mt-5 relative" style={{ height: 80 }}>
          {/* Y-axis */}
          <div className="absolute right-0 top-0 text-right" style={{ fontSize: 9, color: "#94B3D3" }}>
            1s
          </div>
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 text-right"
            style={{ fontSize: 9, color: "#94B3D3" }}
          >
            30s
          </div>
          <div className="absolute right-0 bottom-0 text-right" style={{ fontSize: 9, color: "#94B3D3" }}>
            0s
          </div>

          {/* Grid */}
          {[0, 50, 100].map((pos) => (
            <div
              key={pos}
              className="absolute left-0 right-5"
              style={{
                top: `${pos}%`,
                height: 1,
                background: "rgba(28,57,89,0.05)",
                ...(pos === 100 ? { top: "auto", bottom: 0 } : {}),
              }}
            />
          ))}

          {/* Bars */}
          <div className="flex items-end gap-[3px] h-full pr-8 pl-1">
            {sleepBarHeights.map((h, i) => (
              <motion.div
                key={i}
                className="sleep-bar"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{
                  duration: 0.8,
                  delay: 0.8 + i * 0.03,
                  ease: [0.23, 1, 0.32, 1],
                }}
                style={{ width: 6 }}
              />
            ))}
          </div>

          {/* X-axis */}
          <div className="flex justify-between pr-8 pl-1 mt-1">
            {["0", "06", "12", "18"].map((label) => (
              <span key={label} style={{ fontSize: 9, color: "#94B3D3" }}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
