import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "SEO Expertise",
    skills: [
      { name: "On-Page SEO", level: 95 },
      { name: "Off-Page SEO", level: 90 },
      { name: "Technical SEO", level: 92 },
      { name: "Local SEO", level: 88 },
    ],
  },
  {
    title: "Digital Marketing",
    skills: [
      { name: "Google Ads", level: 90 },
      { name: "Meta Ads", level: 85 },
      { name: "Analytics", level: 92 },
      { name: "Content Strategy", level: 88 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML/CSS/JS", level: 90 },
      { name: "React", level: 85 },
      { name: "WordPress", level: 92 },
      { name: "PHP", level: 80 },
    ],
  },
  {
    title: "Tools & Tech",
    skills: [
      { name: "Google Analytics", level: 95 },
      { name: "SEMrush/Ahrefs", level: 90 },
      { name: "GTM", level: 85 },
      { name: "Screaming Frog", level: 88 },
    ],
  },
];

const additionalTools = [
  "ChatGPT", "Canva", "Adobe Suite", "DaVinci Resolve",
  "Google Search Console", "Moz", "Ubersuggest", "SERanking",
  "WordPress Plugins", "Google API",
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 px-4 md:pl-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground">
            Comprehensive toolkit for digital success
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="mb-6 font-display text-xl font-semibold text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-purple-400"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="mb-6 text-center font-display text-xl font-semibold">
            Additional Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-full bg-card border border-border px-4 py-2 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
