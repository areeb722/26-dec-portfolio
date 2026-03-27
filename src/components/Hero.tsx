import { motion } from "framer-motion";
import { Github, Mail, Download, Code2, Terminal, Braces, Database, Globe, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "5+", label: "Certifications" },
];

const floatingIcons = [
  { Icon: Code2, x: "10%", y: "15%", delay: 0, size: 20 },
  { Icon: Terminal, x: "85%", y: "20%", delay: 0.5, size: 18 },
  { Icon: Braces, x: "75%", y: "75%", delay: 1, size: 22 },
  { Icon: Database, x: "8%", y: "70%", delay: 1.5, size: 16 },
  { Icon: Globe, x: "90%", y: "50%", delay: 2, size: 20 },
  { Icon: Cpu, x: "20%", y: "85%", delay: 0.8, size: 18 },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 md:pl-20"
    >
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Scanning line */}
      <motion.div
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.15, 0.4, 0.15],
            y: [0, -15, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, delay }}
          className="absolute text-primary/40"
          style={{ left: x, top: y }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute left-1/4 bottom-1/4 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="container relative z-10 mx-auto grid max-w-6xl gap-12 py-20 md:grid-cols-2 md:items-center">
        {/* Profile Image with 3D tech frame */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="flex justify-center md:justify-end order-first md:order-none"
        >
          <div className="relative" style={{ perspective: "1000px" }}>
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, transparent 0%, hsl(270 70% 60% / 0.5) 25%, transparent 50%, hsl(270 70% 60% / 0.3) 75%, transparent 100%)",
              }}
            />

            {/* Tech corner brackets */}
            <div className="absolute -inset-8">
              {/* Top-left */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/70 rounded-tl-lg" />
              {/* Top-right */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/70 rounded-tr-lg" />
              {/* Bottom-left */}
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/70 rounded-bl-lg" />
              {/* Bottom-right */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/70 rounded-br-lg" />
            </div>

            {/* Pulsing glow ring */}
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.98, 1.02, 0.98] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-3 rounded-full border border-primary/50 purple-glow"
            />

            {/* Image container */}
            <motion.div
              whileHover={{ rotateY: 5, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/60 glow-border md:h-80 md:w-80"
            >
              <img
                src={profileImage}
                alt="MD Areeb Ansari"
                className="h-full w-full object-cover"
              />
              {/* Holographic overlay */}
              <motion.div
                animate={{ opacity: [0, 0.15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20"
              />
            </motion.div>

            {/* Floating status badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -right-4 -bottom-2 flex items-center gap-2 rounded-full border border-border bg-card/90 backdrop-blur-sm px-3 py-1.5 shadow-lg"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-2.5 w-2.5 rounded-full bg-primary"
              />
              <span className="text-xs font-medium text-foreground">Available</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="text-center md:text-left">
          {/* Terminal-style greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur-sm px-4 py-2"
          >
            <Terminal className="h-4 w-4 text-primary" />
            <span className="font-mono text-sm text-primary">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="inline-block overflow-hidden whitespace-nowrap"
              >
                Hello, I'm_
              </motion.span>
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-primary"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 font-display text-4xl font-bold leading-tight gradient-text md:text-6xl text-glow"
          >
            MD Areeb
            <br />
            Ansari
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8 flex flex-wrap justify-center gap-2 md:justify-start"
          >
            {["Digital Marketer", "SEO Expert", "Web Developer"].map((role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="rounded-md border border-border bg-card/50 px-3 py-1 font-mono text-sm text-muted-foreground"
              >
                {`<${role} />`}
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <Button asChild className="bg-primary hover:bg-primary/90 glow-border">
              <a href="https://github.com/areeb722" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild className="border-border bg-card/50 hover:bg-card">
              <a href="mailto:areeb722@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            <Button variant="outline" asChild className="border-border bg-card/50 hover:bg-card">
              <a href="#contact">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Stats with tech cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-6 md:justify-start"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="group relative rounded-xl border border-border bg-card/40 backdrop-blur-sm px-4 py-3 text-center transition-colors hover:border-primary/50"
              >
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative font-display text-2xl font-bold text-primary md:text-3xl">
                  {stat.value}
                </div>
                <div className="relative text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-primary/50 p-1"
        >
          <div className="h-2 w-1 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
