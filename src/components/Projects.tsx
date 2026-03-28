import { motion } from "framer-motion";
import { Trophy, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Houszy",
    description: "E-commerce Store",
    url: "https://houszy.co.uk/",
    favicon: "https://houszy.co.uk/cdn/shop/files/Houszy_Logo.png?v=1717523526&width=200",
    color: "from-orange-400 to-amber-500",
    category: "E-commerce",
  },
  {
    title: "Astir Care",
    description: "Health & Beauty",
    url: "https://astircare.co.uk/",
    favicon: "https://astircare.co.uk/wp-content/uploads/2024/06/logo-astir-care-header.png",
    color: "from-slate-400 to-slate-600",
    category: "E-commerce",
  },
  {
    title: "Direct Care",
    description: "Health & Beauty Shack",
    url: "https://www.direct-care.co.uk/",
    favicon: "https://www.direct-care.co.uk/wp-content/uploads/2023/01/cropped-logo-3.png",
    color: "from-emerald-500 to-teal-600",
    category: "Healthcare",
  },
  {
    title: "Spacebox Storage",
    description: "Self Storage Solutions",
    url: "https://www.spaceboxstorage.co.uk/",
    favicon: "https://www.spaceboxstorage.co.uk/wp-content/uploads/2022/10/spacebox-logo-dark.svg",
    color: "from-red-500 to-red-700",
    category: "Storage",
  },
  {
    title: "Comfort Diva",
    description: "Cat-Themed Gifts",
    url: "https://www.comfortdiva.com/",
    favicon: "https://static.wixstatic.com/media/9b1e4a_2b22c5f2b2a44bb38b3a15acc29c2666~mv2.png/v1/fill/w_100,h_100/comfort-diva-logo.png",
    color: "from-orange-500 to-yellow-500",
    category: "E-commerce",
  },
  {
    title: "Inklore Tattoos",
    description: "Tattoo Studio",
    url: "https://inkloretattoos.com/",
    favicon: "https://inkloretattoos.com/wp-content/uploads/2023/10/cropped-Logo.png",
    color: "from-yellow-500 to-amber-600",
    category: "Services",
  },
  {
    title: "Prakriti Dental",
    description: "Dental Care Clinic",
    url: "http://prakritidentalcare.in/",
    favicon: "http://prakritidentalcare.in/wp-content/uploads/2022/09/cropped-Prakriti-logo.png",
    color: "from-cyan-400 to-teal-500",
    category: "Healthcare",
  },
  {
    title: "Socialmadaari",
    description: "SEO Tools Platform",
    url: "https://socialmadaari.com/",
    favicon: "",
    color: "from-violet-500 to-purple-600",
    category: "Web Dev",
  },
];

const certifications = [
  "SEO Basic & Advanced - Skills Nation",
  "Google Analytics Certification",
  "Google Ads & Meta Ads Program",
  "Advanced ChatGPT & AI Tools",
  "Google Digital Garage",
  "10-Finger Typing Certification",
];

const Projects = () => {
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
            Websites & platforms I've built and optimized
          </p>
        </motion.div>

        {/* App Icon Grid */}
        <div className="mb-12 sm:mb-16 grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative"
            >
              {/* Animated border wrapper */}
              <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div className="absolute inset-0 rounded-2xl animate-border-spin bg-[conic-gradient(from_0deg,transparent_0%,hsl(var(--primary))_25%,transparent_50%,hsl(var(--primary))_75%,transparent_100%)]" />
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute -inset-2 rounded-3xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              <div className="relative flex flex-col items-center gap-2 sm:gap-3 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-3 sm:p-5 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-card">
                {/* App icon */}
                <div className={`relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${project.color} p-0.5 shadow-lg`}>
                  <div className="flex h-full w-full items-center justify-center rounded-[10px] sm:rounded-[14px] bg-background/90 overflow-hidden">
                    {project.favicon ? (
                      <img
                        src={project.favicon}
                        alt={project.title}
                        className="h-7 w-7 sm:h-10 sm:w-10 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <span className={`font-display text-base sm:text-lg font-bold bg-gradient-to-br ${project.color} bg-clip-text text-transparent ${project.favicon ? 'hidden' : ''}`}>
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-30 group-hover:animate-pulse transition-opacity" 
                       style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
                </div>

                <div className="text-center">
                  <h3 className="font-display text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1 justify-center">
                    {project.title}
                    <ExternalLink className="h-2.5 w-2.5 sm:h-3 sm:w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="mt-0.5 text-[10px] sm:text-xs text-muted-foreground line-clamp-1">{project.description}</p>
                </div>

                <span className="rounded-full bg-primary/10 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium text-primary">
                  {project.category}
                </span>

                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:animate-pulse" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:animate-pulse" />
                    <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent group-hover:animate-pulse" />
                    <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent group-hover:animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

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
