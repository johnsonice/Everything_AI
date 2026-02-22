import { motion } from "framer-motion";

export default function InkMountains() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.4, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      <svg
        viewBox="0 0 1920 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full"
        style={{ minWidth: 1200 }}
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="mist1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#94B3D3" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#B0C5D6" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="mist2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6996CC" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#94B3D3" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="midMtn" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5D8BB4" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#6996CC" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#B0C5D6" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="nearMtn" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B68A2" stopOpacity="0.65" />
            <stop offset="35%" stopColor="#5D8BB4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#94B3D3" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="closeMtn" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1C3959" stopOpacity="0.7" />
            <stop offset="40%" stopColor="#3B68A2" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#6996CC" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="foreground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#122640" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#1C3959" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3B68A2" stopOpacity="0.1" />
          </linearGradient>
          <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <filter id="blur2" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <filter id="inkEdge" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="inkEdge2" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="4" seed="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        {/* Layer 1: Far distant peaks */}
        <path d="M-100 700 L80 480 L200 520 L350 380 L480 450 L600 360 L720 420 L880 310 L1020 390 L1150 340 L1300 400 L1420 350 L1580 410 L1720 370 L1860 430 L2020 380 L2020 1000 L-100 1000Z" fill="url(#mist1)" filter="url(#blur1)" />

        {/* Mist band */}
        <ellipse cx="960" cy="600" rx="1100" ry="30" fill="white" opacity="0.12" filter="url(#blur1)" />

        {/* Layer 2 */}
        <path d="M-100 740 L50 520 L150 560 L300 420 L410 480 L520 380 L640 440 L760 360 L900 420 L1020 370 L1150 430 L1280 380 L1420 440 L1560 370 L1700 420 L1840 380 L2020 450 L2020 1000 L-100 1000Z" fill="url(#mist2)" filter="url(#blur2)" />

        {/* Mist wisps */}
        <ellipse cx="350" cy="640" rx="450" ry="22" fill="white" opacity="0.1" filter="url(#blur1)" />
        <ellipse cx="1400" cy="620" rx="400" ry="18" fill="#B0C5D6" opacity="0.08" filter="url(#blur1)" />

        {/* Layer 3 */}
        <path d="M-100 790 L0 580 L80 620 L180 480 L260 530 L360 420 L440 480 L540 380 L640 440 L740 370 L850 430 L950 380 L1060 440 L1160 390 L1280 450 L1380 400 L1500 460 L1620 400 L1740 450 L1860 420 L2020 460 L2020 1000 L-100 1000Z" fill="url(#midMtn)" filter="url(#inkEdge)" />

        {/* Layer 4: Left peaks */}
        <path d="M-200 1000 L-120 750 L-60 780 L20 620 L60 660 L120 480 L155 530 L200 380 L230 420 L280 310 L310 350 L360 280 L385 330 L420 390 L460 430 L510 460 L560 500 L630 540 L720 580 L840 640 L1000 720 L1920 1000Z" fill="url(#nearMtn)" filter="url(#inkEdge)" />

        {/* Layer 4: Right peaks */}
        <path d="M900 1000 L1040 720 L1100 750 L1180 600 L1220 640 L1300 480 L1340 520 L1400 400 L1430 440 L1490 330 L1520 370 L1580 290 L1610 340 L1660 400 L1710 440 L1770 480 L1830 450 L1880 420 L1920 450 L2020 480 L2020 1000Z" fill="url(#nearMtn)" filter="url(#inkEdge2)" />

        {/* White mist */}
        <ellipse cx="960" cy="760" rx="800" ry="45" fill="white" opacity="0.22" filter="url(#blur1)" />
        <ellipse cx="280" cy="790" rx="300" ry="28" fill="white" opacity="0.15" filter="url(#blur1)" />
        <ellipse cx="1580" cy="770" rx="280" ry="22" fill="white" opacity="0.12" filter="url(#blur1)" />

        {/* Layer 5: Close left */}
        <path d="M-250 1000 L-150 820 L-80 850 L-20 700 L20 730 L80 580 L110 620 L170 480 L195 520 L250 420 L275 460 L320 510 L370 550 L430 600 L500 660 L580 1000Z" fill="url(#closeMtn)" filter="url(#inkEdge)" />

        {/* Layer 5: Close right */}
        <path d="M1380 1000 L1440 800 L1490 830 L1550 680 L1580 710 L1640 560 L1670 600 L1730 480 L1760 520 L1810 440 L1840 480 L1890 530 L1920 500 L2020 1000Z" fill="url(#closeMtn)" filter="url(#inkEdge2)" />

        {/* Layer 6: Foreground silhouettes */}
        <path d="M-250 1000 L-160 880 L-100 820 L-40 850 L30 740 L60 770 L120 680 L150 720 L200 780 L260 1000Z" fill="url(#foreground)" filter="url(#inkEdge)" />
        <path d="M1700 1000 L1750 840 L1800 810 L1840 760 L1870 790 L1920 710 L2020 750 L2020 1000Z" fill="url(#foreground)" filter="url(#inkEdge2)" />

        {/* Bottom mist */}
        <rect x="-100" y="920" width="2120" height="80" fill="white" opacity="0.06" filter="url(#blur1)" />
      </svg>
    </motion.div>
  );
}
