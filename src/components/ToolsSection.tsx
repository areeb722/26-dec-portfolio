import { motion } from "framer-motion";
import { spotlightMove, spotlightLeave } from "@/lib/spotlight";
import { ExternalLink, Terminal, ShieldAlert, Search, Sparkles, Database } from "lucide-react";

const tools = [
  {
    title: "Socialmadaari",
    description: "SEO-focused platform with built-in audit & optimization tools (HTML, CSS, JS)",
    link: "https://socialmadaari.com/",
    icon: Search,
    tag: "SEO Platform",
  },
  {
    title: "Load & Stress Tester",
    description: "Python tool simulating high-volume concurrent requests to test site resilience against traffic spikes & DDoS-style attacks",
    link: "https://github.com/areeb722",
    icon: ShieldAlert,
    tag: "Python · Security",
  },
  {
    title: "OSINT Footprint Tool",
    description: "Linux-based OSINT script for username footprint analysis — B.Tech final year project",
    link: "https://github.com/areeb722",
    icon: Terminal,
    tag: "Linux · OSINT",
  },
  {
    title: "AI-Native Website Build",
    description: "Publish-ready business site built entirely with AI dev tools, deployed via Vercel & GitHub",
    link: "https://mywebsitereport.netlify.app/",
    icon: Sparkles,
    tag: "AI · Vercel",
  },
  {
    title: "Instant Website Report",
    description: "One-click website analysis generating SEO & performance reports",
    link: "https://mywebsitereport.netlify.app/",
    icon: Search,
    tag: "SEO Audit",
  },
  {
    title: "Indian Database",
    description: "Comprehensive searchable Indian data lookup application",
    link: "https://realdatabharat.netlify.app/",
    icon: Database,
    tag: "Web App",
  },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="relative py-16 sm:py-20 px-4 md:pl-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 text-center"
        >
          <h2 className="mb-3 sm:mb-4 font-display text-2xl sm:text-3xl font-bold md:text-4xl">
            Explore My <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Tools & scripts I've built across SEO, security and automation
          </p>
        </motion.div>

        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <motion.a
              key={tool.title}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onPointerMove={spotlightMove}
              onPointerLeave={spotlightLeave}
              className="spotlight group glass-card flex flex-col p-4 sm:p-6 hover:border-primary/50 hover:glow-border"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <tool.icon className="h-4 w-4 text-primary" />
                </div>
                <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="mb-1.5 font-display text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {tool.title}
              </h3>
              <p className="mb-3 flex-1 text-xs sm:text-sm text-muted-foreground">{tool.description}</p>
              <span className="self-start rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                {tool.tag}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
