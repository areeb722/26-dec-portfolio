import { motion } from "framer-motion";
import { Code2, Terminal, Braces, Database, Globe, Cpu, Layers, Zap } from "lucide-react";

const floatingIcons = [
  { Icon: Code2, x: "8%", y: "12%", delay: 0, size: 16 },
  { Icon: Terminal, x: "88%", y: "18%", delay: 0.5, size: 14 },
  { Icon: Braces, x: "78%", y: "72%", delay: 1, size: 18 },
  { Icon: Database, x: "6%", y: "68%", delay: 1.5, size: 14 },
  { Icon: Globe, x: "92%", y: "48%", delay: 2, size: 16 },
  { Icon: Cpu, x: "18%", y: "82%", delay: 0.8, size: 14 },
  { Icon: Layers, x: "50%", y: "8%", delay: 1.2, size: 12 },
  { Icon: Zap, x: "72%", y: "88%", delay: 0.3, size: 14 },
];

const HeroBackground = () => {
  return (
    <>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Dot matrix pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--primary) / 0.8) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Vertical data stream lines */}
      {[15, 35, 55, 75, 90].map((left, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: ["0%", "30%", "0%"] }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
          className="absolute top-0 w-px bg-gradient-to-b from-primary/20 via-primary/10 to-transparent"
          style={{ left: `${left}%` }}
        />
      ))}

      {/* Scanning line */}
      <motion.div
        animate={{ y: ["-100%", "250%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />

      {/* Floating tech icons */}
      <div className="hidden sm:block">
        {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.08, 0.2, 0.08],
              y: [0, -10, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, delay }}
            className="absolute text-primary/30"
            style={{ left: x, top: y }}
          >
            <Icon size={size} strokeWidth={1.5} />
          </motion.div>
        ))}
      </div>

      {/* Gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-1/4 top-1/4 h-48 w-48 sm:h-80 sm:w-80 rounded-full bg-primary/15 blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute left-1/4 bottom-1/4 h-36 w-36 sm:h-60 sm:w-60 rounded-full bg-accent/10 blur-[80px]"
      />

      {/* Corner accents */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 md:left-24 w-16 h-16 sm:w-24 sm:h-24 border-l border-t border-primary/15 rounded-tl-lg" />
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 border-r border-b border-primary/15 rounded-br-lg" />
    </>
  );
};

export default HeroBackground;
