import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, ExternalLink, TrendingUp, Wrench, Target } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  url: string;
  favicon: string;
  color: string;
  category: string;
  role: string;
  challenge: string;
  actions: string[];
  results: string[];
};

const projects: Project[] = [
  {
    title: "Houszy",
    description: "E-commerce Store",
    url: "https://houszy.co.uk/",
    favicon: "https://www.google.com/s2/favicons?domain=houszy.co.uk&sz=128",
    color: "from-orange-400 to-amber-500",
    category: "E-commerce",
    role: "SEO Expert — Mezzex Technology",
    challenge:
      "UK home & living store with thin category structure and weak organic visibility against established marketplaces.",
    actions: [
      "Restructured category & product architecture with intent-mapped keywords",
      "Implemented Product, Breadcrumb and Organization schema",
      "Fixed Core Web Vitals (LCP, CLS) and crawl-budget waste",
      "Built authority through targeted outreach and guest posting",
    ],
    results: [
      "Consistent keyword ranking growth within one quarter",
      "Stronger SERP visibility across commercial category terms",
    ],
  },
  {
    title: "Astir Care",
    description: "Health & Beauty",
    url: "https://astircare.co.uk/",
    favicon: "https://www.google.com/s2/favicons?domain=astircare.co.uk&sz=128",
    color: "from-slate-400 to-slate-600",
    category: "E-commerce",
    role: "SEO Expert — Mezzex Technology",
    challenge:
      "Health & beauty catalogue competing in a high-authority niche with limited backlink profile.",
    actions: [
      "Deep-dive audit using Ahrefs, Screaming Frog and Search Console",
      "On-page optimization: meta, internal linking, content structure",
      "Schema implementation and indexation clean-up",
      "Link-building campaign to lift domain authority",
    ],
    results: [
      "Improved domain authority and referring-domain growth",
      "Prioritized action framework delivering quarter-on-quarter ranking gains",
    ],
  },
  {
    title: "Direct Care",
    description: "Health & Beauty Shack",
    url: "https://www.direct-care.co.uk/",
    favicon: "https://www.google.com/s2/favicons?domain=direct-care.co.uk&sz=128",
    color: "from-emerald-500 to-teal-600",
    category: "Healthcare",
    role: "SEO Expert — Mezzex Technology",
    challenge:
      "Healthcare retail site with technical debt, crawl errors and untracked conversions.",
    actions: [
      "Technical SEO fixes: crawlability, indexing, redirects and Core Web Vitals",
      "Google Tag Manager setup — event triggers, button clicks, conversion tracking",
      "Keyword mapping and competitor gap analysis",
    ],
    results: [
      "Clean index coverage and faster page experience scores",
      "Accurate conversion attribution for performance decisions",
    ],
  },
  {
    title: "Spacebox Storage",
    description: "Self Storage Solutions",
    url: "https://www.spaceboxstorage.co.uk/",
    favicon: "https://www.google.com/s2/favicons?domain=spaceboxstorage.co.uk&sz=128",
    color: "from-red-500 to-red-700",
    category: "Local SEO",
    role: "SEO Expert — Mezzex Technology",
    challenge:
      "Local self-storage brand invisible in the Google Maps 3-pack despite serviceable demand.",
    actions: [
      "Google Business Profile optimization — categories, services, posts, photos",
      "Citation audit and NAP consistency clean-up",
      "Location-intent landing pages and local schema",
    ],
    results: [
      "Achieved top-3 Google Maps rankings",
      "Increased local inquiries and storage bookings",
    ],
  },
  {
    title: "Comfort Diva",
    description: "Cat-Themed Gifts (USA)",
    url: "https://www.comfortdiva.com/",
    favicon: "https://www.google.com/s2/favicons?domain=comfortdiva.com&sz=128",
    color: "from-orange-500 to-yellow-500",
    category: "Technical Rescue",
    role: "SEO & Web Lead",
    challenge:
      "USA client site previously handled by another agency: poorly structured Blogger setup, and the entire domain was redirecting HTTPS → HTTP, making it insecure and effectively inaccessible to users and crawlers.",
    actions: [
      "Diagnosed and fixed the site-wide HTTPS → HTTP redirect loop",
      "Rebuilt the store as a proper e-commerce site on Wix",
      "Resolved multiple additional technical SEO errors and indexation blocks",
      "Rebuilt information architecture, on-page content and internal linking",
    ],
    results: [
      "Restored site accessibility, HTTPS security and search visibility",
      "Recovered indexation and a crawlable, conversion-ready store",
    ],
  },
  {
    title: "Inklore Tattoos",
    description: "Tattoo Studio",
    url: "https://inkloretattoos.com/",
    favicon: "https://www.google.com/s2/favicons?domain=inkloretattoos.com&sz=128",
    color: "from-yellow-500 to-amber-600",
    category: "Web + Ads",
    role: "Web Developer & Paid Media",
    challenge:
      "Studio had no web presence and relied entirely on walk-ins and word of mouth.",
    actions: [
      "Designed and developed the full website",
      "Managed paid ads and social media campaigns",
      "Produced creatives and optimized the inquiry funnel",
    ],
    results: [
      "Improved engagement and a steady stream of customer inquiries",
    ],
  },
  {
    title: "Prakriti Dental",
    description: "Dental Care Clinic, Pune",
    url: "http://prakritidentalcare.in/",
    favicon: "https://www.google.com/s2/favicons?domain=prakritidentalcare.in&sz=128",
    color: "from-cyan-400 to-teal-500",
    category: "Web + Ads",
    role: "Web Developer & Growth Marketer",
    challenge:
      "Clinic needed a website plus a reliable channel for appointment bookings.",
    actions: [
      "Developed and managed the complete website",
      "Ran Google Ads & Meta Ads — search, retargeting and video campaigns",
      "Created and edited ad creatives and video content",
      "Optimized funnels for lead generation",
    ],
    results: [
      "Better lead quality and more appointment bookings",
      "Improved CTR with reduced CPC across campaigns",
    ],
  },
  {
    title: "Socialmadaari",
    description: "SEO Tools Platform",
    url: "https://socialmadaari.com/",
    favicon: "https://www.google.com/s2/favicons?domain=socialmadaari.com&sz=128",
    color: "from-violet-500 to-purple-600",
    category: "Web Dev",
    role: "Builder",
    challenge:
      "Wanted a fast, SEO-first platform with usable optimization tooling built in.",
    actions: [
      "Built the site from scratch with HTML, CSS and JavaScript",
      "Integrated SEO tools and on-page optimization features",
      "Applied technical SEO best practices from the ground up",
    ],
    results: ["A lightweight, fully SEO-optimized live platform"],
  },
  {
    title: "Naman Darshan",
    description: "Spiritual Brand Platform",
    url: "https://namandarshan.com/",
    favicon: "https://www.google.com/s2/favicons?domain=namandarshan.com&sz=128",
    color: "from-orange-500 to-red-500",
    category: "SEO + Engagement",
    role: "SEO & Product Lead",
    challenge:
      "Spiritual content site needed both search visibility and a reason for visitors to stay.",
    actions: [
      "Managed On-Page, Off-Page and Technical SEO end to end",
      "Added a live Darshan YouTube embed for daily return visits",
      "Built mythology-themed quizzes and games",
      "Site-wide speed and structure optimization",
    ],
    results: [
      "Higher engagement and longer time-on-site",
      "Improved organic visibility across devotional search terms",
    ],
  },
];

const certifications = [
  "SEO Basic & Advanced - Skills Nation",
  "Google Analytics Certification",
  "Google Ads & Meta Ads Program",
  "Advanced ChatGPT & AI Tools Training",
  "Google Digital Garage - Digital Marketing",
  "10-Finger Typing Certification",
];

const Projects = () => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-16 sm:py-20 px-4 md:pl-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 text-center"
        >
          <h2 className="mb-3 sm:mb-4 font-display text-2xl sm:text-3xl font-bold md:text-4xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Tap any project to see the problem, the work and the result
          </p>
        </motion.div>

        {/* App Icon Grid */}
        <div className="mb-12 sm:mb-16 grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.button
              key={project.title}
              type="button"
              onClick={() => setActive(project)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative text-left"
            >
              {/* Animated border wrapper */}
              <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div className="absolute inset-0 rounded-2xl animate-border-spin bg-[conic-gradient(from_0deg,transparent_0%,hsl(var(--primary))_25%,transparent_50%,hsl(var(--primary))_75%,transparent_100%)]" />
              </div>

              {/* Glow effect on hover */}
              <div className="absolute -inset-2 rounded-3xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              <div
                onPointerMove={spotlightMove}
                onPointerLeave={spotlightLeave}
                className="spotlight flex h-full flex-col items-center gap-2 sm:gap-3 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-3 sm:p-5 group-hover:border-primary/30 group-hover:bg-card"
              >
                {/* App icon */}
                <div className={`relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${project.color} p-0.5 shadow-lg`}>
                  <div className="flex h-full w-full items-center justify-center rounded-[10px] sm:rounded-[14px] bg-white overflow-hidden">
                    <img
                      src={project.favicon}
                      alt={project.title}
                      className="h-7 w-7 sm:h-10 sm:w-10 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                      }}
                    />
                    <span className={`hidden font-display text-base sm:text-lg font-bold bg-gradient-to-br ${project.color} bg-clip-text text-transparent`}>
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="font-display text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 text-[10px] sm:text-xs text-muted-foreground line-clamp-1">
                    {project.description}
                  </p>
                </div>

                <span className="mt-auto rounded-full bg-primary/10 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium text-primary">
                  {project.category}
                </span>

                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/60 opacity-0 transition-opacity group-hover:opacity-100">
                  View case study
                </span>

                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
                    <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Case study dialog */}
        <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
          <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
            {active && (
              <>
                <DialogHeader>
                  <div className="mb-2 flex items-center gap-3">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${active.color} p-0.5`}>
                      <div className="flex h-full w-full items-center justify-center rounded-[9px] bg-white overflow-hidden">
                        <img src={active.favicon} alt="" className="h-6 w-6 object-contain" />
                      </div>
                    </div>
                    <div>
                      <DialogTitle className="font-display text-left text-lg">{active.title}</DialogTitle>
                      <p className="text-left font-mono text-[11px] uppercase tracking-wider text-primary">
                        {active.role}
                      </p>
                    </div>
                  </div>
                  <DialogDescription className="text-left text-sm leading-relaxed">
                    {active.challenge}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-5">
                  <BeforeAfterSlider before={[active.challenge]} after={active.results} />
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 font-display text-sm font-semibold text-foreground">
                      <Wrench className="h-4 w-4 text-primary" />
                      What I did
                    </h4>
                    <ul className="space-y-1.5">
                      {active.actions.map((a) => (
                        <li key={a} className="flex gap-2 text-xs sm:text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 flex items-center gap-2 font-display text-sm font-semibold text-foreground">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Result
                    </h4>
                    <ul className="space-y-1.5">
                      {active.results.map((r) => (
                        <li key={r} className="flex gap-2 rounded-lg bg-primary/5 p-2.5 text-xs sm:text-sm text-foreground">
                          <Target className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <a href={active.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Live Site
                    </a>
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-6 sm:mb-8 text-center font-display text-xl sm:text-2xl font-semibold">
            Certifications
          </h3>
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card flex items-center gap-2 sm:gap-3 p-3 sm:p-4 hover:border-primary/50 transition-all"
              >
                <Trophy className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-yellow-500" />
                <span className="text-xs sm:text-sm text-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
