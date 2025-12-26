import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const tools = [
  {
    title: "Indian Database",
    description: "Comprehensive Indian database solution",
    link: "https://realdatabharat.netlify.app/",
  },
  {
    title: "Instant Website",
    description: "Quick website analysis & reports",
    link: "https://mywebsitereport.netlify.app/",
  },
  {
    title: "Normal Portfolio",
    description: "Classic portfolio design",
    link: "https://mohammadareeb.netlify.app/",
  },
  {
    title: "Space Portfolio",
    description: "React portfolio with space theme",
    link: "https://my-react-portfolio-rouge-three.vercel.app/",
  },
];

const ToolsSection = () => {
  return (
    <section className="relative py-20 px-4 md:pl-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            Explore My <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-muted-foreground">
            Check out my projects or get in touch!
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, index) => (
            <motion.a
              key={tool.title}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group glass-card p-6 transition-all hover:border-primary/50 hover:glow-border"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tool.title}
                </h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
