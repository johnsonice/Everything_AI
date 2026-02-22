import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

/* ─── Heart Rate Widget ─── */
function HeartRateWidget() {
  return (
    <div className="widget-card p-7">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, rgba(59,104,162,0.1), rgba(105,150,204,0.08))" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B68A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <div>
            <p className="font-body text-xs text-ink-400" style={{ fontWeight: 400 }}>Heart Rate</p>
            <p className="font-body text-ink-300" style={{ fontSize: 10 }}>Live monitoring</p>
          </div>
        </div>
        <div className="heart-pulse">
          <span className="stat-pill">Normal</span>
        </div>
      </div>

      <div className="text-center py-4">
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="font-display text-ink-800"
          style={{ fontSize: "3.5rem", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1 }}
        >
          72
        </motion.p>
        <p className="font-body text-ink-400 text-sm mt-1">BPM</p>
      </div>

      {/* Heart rate wave */}
      <div className="mt-3" style={{ height: 50, overflow: "hidden" }}>
        <svg viewBox="0 0 300 50" fill="none" className="w-full" style={{ height: 50 }}>
          <defs>
            <linearGradient id="heartGrad" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6996CC" />
              <stop offset="50%" stopColor="#3B68A2" />
              <stop offset="100%" stopColor="#1C3959" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 25 L30 25 L40 25 L50 15 L55 35 L60 10 L65 40 L70 20 L80 25 L110 25 L120 25 L130 15 L135 35 L140 10 L145 40 L150 20 L160 25 L190 25 L200 25 L210 15 L215 35 L220 10 L225 40 L230 20 L240 25 L270 25 L280 25 L290 15 L295 35 L300 25"
            stroke="url(#heartGrad)"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </svg>
      </div>

      <div className="flex justify-between mt-4">
        {[
          { label: "Min", value: "58 bpm" },
          { label: "Avg", value: "72 bpm" },
          { label: "Max", value: "98 bpm" },
        ].map((s) => (
          <div key={s.label} className={s.label === "Max" ? "text-right" : ""}>
            <p className="text-xs text-ink-300">{s.label}</p>
            <p className="font-body text-ink-600 text-sm font-medium">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Activity Ring Widget ─── */
function ActivityRingWidget() {
  return (
    <div className="widget-card p-7">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-2xl flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, rgba(174,113,51,0.1), rgba(212,160,74,0.08))" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AE7133" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
          </svg>
        </div>
        <div>
          <p className="font-body text-xs text-ink-400" style={{ fontWeight: 400 }}>Daily Activity</p>
          <p className="font-body text-ink-300" style={{ fontSize: 10 }}>Today's progress</p>
        </div>
      </div>

      <div className="flex justify-center py-4">
        <div className="relative" style={{ width: 160, height: 160 }}>
          {[
            { r: 70, color: "#3B68A2", dash: 440, offset: 88 },
            { r: 55, color: "#AE7133", dash: 345.6, offset: 103.7 },
            { r: 40, color: "#5D8BB4", dash: 251.3, offset: 50.3 },
          ].map((ring) => (
            <svg key={ring.r} className="absolute inset-0" width="160" height="160" viewBox="0 0 160 160">
              <circle cx="80" cy="80" r={ring.r} stroke={`${ring.color}1a`} strokeWidth="10" fill="none" />
              <motion.circle
                cx="80"
                cy="80"
                r={ring.r}
                stroke={ring.color}
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                className="progress-ring-circle"
                strokeDasharray={ring.dash}
                initial={{ strokeDashoffset: ring.dash }}
                whileInView={{ strokeDashoffset: ring.offset }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
              />
            </svg>
          ))}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-display text-ink-800" style={{ fontSize: "1.6rem", fontWeight: 500, lineHeight: 1 }}>486</p>
            <p className="font-body text-ink-300 text-xs">kcal</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-4 px-2">
        {[
          { color: "#3B68A2", label: "Move", value: "486/600" },
          { color: "#AE7133", label: "Exercise", value: "28/30" },
          { color: "#5D8BB4", label: "Stand", value: "10/12" },
        ].map((r) => (
          <div key={r.label} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: r.color }} />
            <div>
              <p className="text-xs text-ink-400">{r.label}</p>
              <p className="font-body text-ink-600 text-sm font-medium">{r.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Blood Oxygen Widget ─── */
function BloodOxygenWidget() {
  return (
    <div className="widget-card p-7">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, rgba(28,57,89,0.1), rgba(59,104,162,0.08))" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C3959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>
          <div>
            <p className="font-body text-xs text-ink-400" style={{ fontWeight: 400 }}>Blood Oxygen</p>
            <p className="font-body text-ink-300" style={{ fontSize: 10 }}>SpO2 level</p>
          </div>
        </div>
        <span className="stat-pill" style={{ background: "rgba(28,57,89,0.06)", color: "#1C3959" }}>Optimal</span>
      </div>

      <div className="flex justify-center py-4">
        <div className="relative" style={{ width: 140, height: 140 }}>
          <svg width="140" height="140" viewBox="0 0 140 140">
            <defs>
              <linearGradient id="spo2Grad" x1="0" y1="0" x2="140" y2="140" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3B68A2" />
                <stop offset="100%" stopColor="#1C3959" />
              </linearGradient>
            </defs>
            <circle cx="70" cy="70" r="60" stroke="rgba(28,57,89,0.06)" strokeWidth="12" fill="none" />
            <motion.circle
              cx="70"
              cy="70"
              r="60"
              stroke="url(#spo2Grad)"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              className="progress-ring-circle"
              strokeDasharray="377"
              initial={{ strokeDashoffset: 377 }}
              whileInView={{ strokeDashoffset: 18.85 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-display text-ink-800" style={{ fontSize: "2.2rem", fontWeight: 500, lineHeight: 1 }}>
              98<span style={{ fontSize: "1rem", color: "#94B3D3" }}>%</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-xs text-ink-300 mb-2">
          <span>90%</span>
          <span>100%</span>
        </div>
        <div className="h-2 rounded-full" style={{ background: "rgba(28,57,89,0.06)" }}>
          <motion.div
            className="h-2 rounded-full"
            style={{ background: "linear-gradient(90deg, #5D8BB4, #1C3959)" }}
            initial={{ width: "0%" }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          />
        </div>
        <p className="text-xs text-ink-300 mt-3 text-center">Measured 5 min ago</p>
      </div>
    </div>
  );
}

/* ─── Stress Level Widget ─── */
function StressWidget() {
  const stressHeights = [30, 20, 40, 60, 35, 25, 45, 50, 30, 20, 15, 28];

  return (
    <div className="widget-card p-7">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-2xl flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, rgba(105,150,204,0.12), rgba(93,139,180,0.08))" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5D8BB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        </div>
        <div>
          <p className="font-body text-xs text-ink-400" style={{ fontWeight: 400 }}>Stress Level</p>
          <p className="font-body text-ink-300" style={{ fontSize: 10 }}>HRV-based analysis</p>
        </div>
      </div>

      <div className="flex justify-center py-2">
        <div className="relative" style={{ width: 180, height: 100, overflow: "hidden" }}>
          <svg width="180" height="100" viewBox="0 0 180 100">
            <defs>
              <linearGradient id="stressGrad" x1="15" y1="90" x2="165" y2="90" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6996CC" />
                <stop offset="100%" stopColor="#3B68A2" />
              </linearGradient>
            </defs>
            <path d="M 15 90 A 75 75 0 0 1 165 90" stroke="rgba(93,139,180,0.1)" strokeWidth="14" fill="none" strokeLinecap="round" />
            <motion.path
              d="M 15 90 A 75 75 0 0 1 70 20"
              stroke="url(#stressGrad)"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            />
          </svg>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
            <p className="font-display text-ink-800" style={{ fontSize: "2rem", fontWeight: 500, lineHeight: 1 }}>28</p>
            <p className="font-body text-ink-300 text-xs">Low stress</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-end gap-1" style={{ height: 40 }}>
        {stressHeights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
            style={{
              flex: 1,
              background: h > 40 ? "rgba(59,104,162,0.4)" : `rgba(105,150,204,${0.15 + (h / 100) * 0.2})`,
              borderRadius: 2,
            }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-1">
        {["6am", "12pm", "6pm"].map((t) => (
          <span key={t} style={{ fontSize: 9, color: "#94B3D3" }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── Temperature Widget ─── */
function TemperatureWidget() {
  return (
    <div className="widget-card p-7">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, rgba(174,113,51,0.1), rgba(212,160,74,0.06))" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AE7133" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
            </svg>
          </div>
          <div>
            <p className="font-body text-xs text-ink-400" style={{ fontWeight: 400 }}>Skin Temperature</p>
            <p className="font-body text-ink-300" style={{ fontSize: 10 }}>Deviation from baseline</p>
          </div>
        </div>
      </div>

      <div className="text-center py-3">
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display"
          style={{ fontSize: "3rem", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, color: "#AE7133" }}
        >
          +0.2<span style={{ fontSize: "1.2rem", color: "#D4A04A" }}>°C</span>
        </motion.p>
        <p className="font-body text-ink-300 text-xs mt-2">Within normal range</p>
      </div>

      <div className="mt-4" style={{ height: 60 }}>
        <svg viewBox="0 0 300 60" fill="none" className="w-full" style={{ height: 60 }}>
          <defs>
            <linearGradient id="tempFill" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#AE7133" />
              <stop offset="100%" stopColor="#AE7133" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 40 C30 38, 50 35, 80 30 S130 20, 160 25 S210 35, 240 28 S280 22, 300 20"
            stroke="#AE7133"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <path d="M0 40 C30 38, 50 35, 80 30 S130 20, 160 25 S210 35, 240 28 S280 22, 300 20 L300 60 L0 60Z" fill="url(#tempFill)" opacity="0.15" />
        </svg>
      </div>
      <div className="flex justify-between mt-1">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <span key={d} style={{ fontSize: 9, color: "#94B3D3" }}>{d}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── Steps Widget ─── */
function StepsWidget() {
  const weekData = [
    { h: 25, label: "M" },
    { h: 35, label: "T" },
    { h: 30, label: "W" },
    { h: 40, label: "T" },
    { h: 20, label: "F" },
    { h: 45, label: "S" },
    { h: 38, label: "S", active: true },
  ];

  return (
    <div className="widget-card p-7">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-2xl flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, rgba(59,104,162,0.1), rgba(105,150,204,0.06))" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B68A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 4v16" /><path d="M17 4v16" /><path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />
          </svg>
        </div>
        <div>
          <p className="font-body text-xs text-ink-400" style={{ fontWeight: 400 }}>Steps</p>
          <p className="font-body text-ink-300" style={{ fontSize: 10 }}>Daily count</p>
        </div>
      </div>

      <div className="text-center py-3">
        <p className="font-display text-ink-800" style={{ fontSize: "3rem", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1 }}>
          8,432
        </p>
        <p className="font-body text-ink-300 text-xs mt-2">Goal: 10,000 steps</p>
      </div>

      <div className="mt-4">
        <div className="h-3 rounded-full" style={{ background: "rgba(59,104,162,0.08)" }}>
          <motion.div
            className="h-3 rounded-full relative"
            style={{ background: "linear-gradient(90deg, #6996CC, #3B68A2)" }}
            initial={{ width: "0%" }}
            whileInView={{ width: "84%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white"
              style={{ background: "#3B68A2", boxShadow: "0 2px 6px rgba(59,104,162,0.3)" }}
            />
          </motion.div>
        </div>
        <p className="text-xs text-ink-400 mt-2 text-center font-medium">84% complete</p>
      </div>

      <div className="flex items-end gap-2 mt-5" style={{ height: 50 }}>
        {weekData.map((day, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <motion.div
              className="w-full rounded-sm"
              initial={{ height: 0 }}
              whileInView={{ height: day.h }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
              style={{
                background: day.active
                  ? "linear-gradient(180deg, #3B68A2, #6996CC)"
                  : `rgba(59,104,162,${0.1 + (day.h / 200)})`,
                borderRadius: 2,
              }}
            />
            <span
              style={{
                fontSize: 8,
                color: day.active ? "#3B68A2" : "#94B3D3",
                fontWeight: day.active ? 600 : 400,
              }}
            >
              {day.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Features Section ─── */
export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-6" style={{ background: "#F4F6F8" }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="stat-pill inline-block mb-4">Widget Collection</p>
          <h2
            className="font-display text-ink-700"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, letterSpacing: "-0.03em" }}
          >
            Every Metric, <span style={{ color: "#3B68A2" }}>Thoughtfully Designed</span>
          </h2>
          <p
            className="font-body text-ink-400 mt-4 max-w-lg mx-auto"
            style={{ fontWeight: 300, lineHeight: 1.7 }}
          >
            Health data presented as serene, focused widgets — each one a window into your wellbeing.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[HeartRateWidget, ActivityRingWidget, BloodOxygenWidget, StressWidget, TemperatureWidget, StepsWidget].map(
            (Widget, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Widget />
              </ScrollReveal>
            )
          )}
        </div>
      </div>
    </section>
  );
}
