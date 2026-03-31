import { motion } from "framer-motion";

interface HeroProfileImageProps {
  src: string;
  alt: string;
}

const HeroProfileImage = ({ src, alt }: HeroProfileImageProps) => {
  return (
    <div className="relative" style={{ perspective: "1000px" }}>
      {/* Outer dashed orbit ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-8 sm:-inset-10 md:-inset-12 rounded-full border border-dashed border-primary/15"
      />

      {/* Rotating text circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-6 sm:-inset-8 md:-inset-10"
      >
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <defs>
            <path
              id="textCircle"
              d="M 150, 150 m -125, 0 a 125,125 0 1,1 250,0 a 125,125 0 1,1 -250,0"
            />
          </defs>
          <text
            className="fill-primary/50"
            style={{
              fontSize: "13px",
              fontFamily: "'Space Grotesk', monospace",
              letterSpacing: "6px",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            <textPath href="#textCircle" startOffset="0%">
              SEO · CREATIVE · STRATEGY · SYSTEM · DESIGN · DEVELOPMENT · CODE ·&nbsp;
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Conic gradient ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-1.5 sm:-inset-2 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, hsl(var(--primary) / 0.6) 15%, transparent 30%, transparent 50%, hsl(var(--primary) / 0.4) 65%, transparent 80%)",
        }}
      />

      {/* Subtle inner glow */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -inset-1 sm:-inset-1.5 rounded-full border border-primary/30"
        style={{
          boxShadow: "0 0 30px hsl(var(--primary) / 0.2), inset 0 0 30px hsl(var(--primary) / 0.05)",
        }}
      />

      {/* Image container */}
      <motion.div
        whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative h-48 w-48 sm:h-64 sm:w-64 overflow-hidden rounded-full border-2 border-primary/40 md:h-80 md:w-80"
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />
        {/* Overlay sheen */}
        <motion.div
          animate={{ opacity: [0, 0.1, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-accent/10"
        />
      </motion.div>

      {/* Status badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
        className="absolute -right-2 -bottom-1 sm:-right-3 sm:-bottom-1 flex items-center gap-1.5 rounded-full border border-border/80 bg-card/90 backdrop-blur-md px-3 py-1.5 shadow-lg"
      >
        <motion.div
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-2 w-2 rounded-full bg-green-500"
        />
        <span className="text-[10px] sm:text-xs font-medium text-foreground tracking-wide">
          Available
        </span>
      </motion.div>

      {/* Orbit dots */}
      {[0, 90, 180, 270].map((deg) => (
        <motion.div
          key={deg}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ rotate: `${deg}deg` }}
        >
          <div
            className="absolute h-1.5 w-1.5 rounded-full bg-primary/40"
            style={{ top: "-2.5rem", left: "50%", transform: "translateX(-50%)" }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default HeroProfileImage;
