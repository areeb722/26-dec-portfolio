import { motion } from "framer-motion";
import { Github, Mail, Download, Terminal, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBackground from "@/components/hero/HeroBackground";
import HeroProfileImage from "@/components/hero/HeroProfileImage";
import profileImage from "@/assets/profile.png";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "5+", label: "Certifications" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 md:pl-20"
    >
      <HeroBackground />

      <div className="container relative z-10 mx-auto grid max-w-6xl gap-8 py-16 md:gap-16 md:py-20 md:grid-cols-2 md:items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="flex justify-center md:justify-end order-first md:order-none"
        >
          <HeroProfileImage src={profileImage} alt="MD Areeb Ansari" />
        </motion.div>

        {/* Content */}
        <div className="text-center md:text-left">
          {/* Terminal-style greeting */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4 sm:mb-5 inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md px-4 py-2"
          >
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-red-500/70" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
              <span className="h-2 w-2 rounded-full bg-green-500/70" />
            </div>
            <Terminal className="h-3.5 w-3.5 text-primary" />
            <span className="font-mono text-xs sm:text-sm text-primary">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="inline-block overflow-hidden whitespace-nowrap"
              >
                ~/areeb
              </motion.span>
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-1.5 h-4 bg-primary rounded-sm"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-2 sm:mb-3 font-display text-4xl sm:text-5xl font-bold leading-[1.1] md:text-7xl"
          >
            <span className="text-foreground">MD Areeb</span>
            <br />
            <span className="gradient-text text-glow">Ansari</span>
          </motion.h1>

          {/* Subtitle with line accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 sm:mb-8 flex items-center justify-center gap-3 md:justify-start"
          >
            <div className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
            <p className="font-mono text-sm sm:text-base text-muted-foreground tracking-wide uppercase">
              Digital Marketer · SEO Expert · Developer
            </p>
          </motion.div>

          {/* Tech role tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mb-8 sm:mb-10 flex flex-wrap justify-center gap-2 md:justify-start"
          >
            {["React", "TypeScript", "SEO", "Analytics", "Node.js"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + i * 0.06 }}
                className="rounded-md border border-border/60 bg-card/30 backdrop-blur-sm px-2.5 py-1 font-mono text-[11px] sm:text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary/80"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-10 sm:mb-14 flex flex-wrap justify-center gap-3 md:justify-start"
          >
            <Button asChild className="bg-primary hover:bg-primary/90 glow-border text-sm h-10 px-5">
              <a href="https://github.com/areeb722" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild className="border-primary/30 bg-primary/5 hover:bg-primary/10 backdrop-blur-sm text-sm h-10 px-5">
              <a href="mailto:areeb722@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </a>
            </Button>
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-primary text-sm h-10 px-5">
              <a href="#contact">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-6 sm:gap-8 md:justify-start"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                className="group relative text-center"
              >
                <div className="font-display text-2xl sm:text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
                {index < stats.length - 1 && (
                  <div className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 h-8 w-px bg-border/50" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-4 w-4 text-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
