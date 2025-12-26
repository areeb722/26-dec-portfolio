import { motion } from "framer-motion";
import { Github, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-600/10" />
      
      {/* Animated orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      
      <div className="container relative z-10 mx-auto grid max-w-6xl gap-12 py-20 md:grid-cols-2 md:items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="flex justify-center md:justify-end order-first md:order-none"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border-2 border-primary/30"
              style={{
                background: "conic-gradient(from 0deg, transparent, hsl(270 70% 60% / 0.3), transparent)",
              }}
            />
            
            {/* Inner ring */}
            <div className="absolute -inset-2 rounded-full border border-primary/50 purple-glow" />
            
            {/* Image container */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/60 md:h-80 md:w-80">
              <img
                src={profileImage}
                alt="MD Areeb Ansari"
                className="h-full w-full object-cover"
              />
              
              {/* Decorative dots */}
              <div className="absolute right-0 top-0 h-20 w-20">
                <svg viewBox="0 0 100 100" className="h-full w-full text-primary/40">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <circle
                      key={i}
                      cx={(i % 5) * 20 + 10}
                      cy={Math.floor(i / 5) * 20 + 10}
                      r="3"
                      fill="currentColor"
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-lg text-primary"
          >
            👋 Hello, I'm
          </motion.p>

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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8 text-lg text-muted-foreground md:text-xl"
          >
            Tech-Driven Digital Marketer | SEO Expert | Web Developer
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <Button
              asChild
              className="bg-primary hover:bg-primary/90"
            >
              <a href="https://github.com/areeb722" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-border bg-card/50 hover:bg-card"
            >
              <a href="mailto:areeb722@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-border bg-card/50 hover:bg-card"
            >
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
            className="flex justify-center gap-8 md:justify-start"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                className="text-center"
              >
                <div className="font-display text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
