import { motion } from "framer-motion";
import { TrendingUp, Trophy } from "lucide-react";

const projects = [
  {
    category: "E-commerce SEO",
    title: "Khushboo Collection",
    description: "Increased brand visibility and customer reach through strategic On-page & Local SEO optimization. Implemented comprehensive keyword strategy and technical improvements.",
    tags: ["SEO", "Local SEO", "E-commerce"],
    stats: ["150% traffic increase", "Top 3 rankings"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
  },
  {
    category: "Healthcare Marketing",
    title: "Prakriti's Dental Care",
    description: "Optimized GMB & local SEO for a dental clinic in Pune, leading to consistent growth in appointment bookings through improved local search visibility.",
    tags: ["GMB", "Local SEO", "Healthcare"],
    stats: ["200% more bookings", "5-star GMB rating"],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=400&fit=crop",
  },
  {
    category: "Web Development",
    title: "Socialmadaari.com",
    description: "Built an SEO tool-rich website using HTML, CSS & JavaScript, integrating multiple SEO utilities for digital marketers and SEO professionals.",
    tags: ["Web Dev", "JavaScript", "SEO Tools"],
    stats: ["10+ tools integrated", "2000+ users"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
  },
  {
    category: "Social Media Marketing",
    title: "Inklore Tattoo",
    description: "Managed paid ads & social campaigns for a tattoo studio, boosting online engagement and customer inquiries through targeted Meta and Google Ads.",
    tags: ["Paid Ads", "Social Media", "Design"],
    stats: ["300% engagement boost", "50+ new clients"],
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&h=400&fit=crop",
  },
  {
    category: "Multi-Brand SEO",
    title: "Direct Care & Spacebox Storage",
    description: "Executed comprehensive SEO strategies for multiple brands at Mezzex Technology, including technical audits, content optimization, and link building campaigns.",
    tags: ["Technical SEO", "Content", "Analytics"],
    stats: ["400% organic growth", "Top 10 keywords"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop",
  },
  {
    category: "Software Development",
    title: "OSINT Tool Project",
    description: "Created a Linux-based OSINT script for username footprint analysis as part of B.Tech final year project, demonstrating cybersecurity and programming skills.",
    tags: ["Python", "Linux", "Cybersecurity"],
    stats: ["Open source", "B.Tech Project"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop",
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
    <section id="projects" className="relative py-20 px-4 md:pl-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            Showcasing successful campaigns and development work
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-primary/20 px-3 py-1 text-xs text-primary backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 text-xs">
                  {project.stats.map((stat) => (
                    <span
                      key={stat}
                      className="flex items-center gap-1 text-primary"
                    >
                      <TrendingUp className="h-3 w-3" />
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-8 text-center font-display text-2xl font-semibold">
            Certifications
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card flex items-center gap-3 p-4 hover:border-primary/50 transition-all"
              >
                <Trophy className="h-5 w-5 shrink-0 text-yellow-500" />
                <span className="text-sm text-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
