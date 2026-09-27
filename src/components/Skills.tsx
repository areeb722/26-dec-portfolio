import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Technical SEO & AEO / GEO",
    skills: [
      { name: "Technical SEO (crawl, index, redirects)", level: 94 },
      { name: "Schema & Structured Data", level: 92 },
      { name: "Core Web Vitals & Page Speed", level: 90 },
      { name: "AEO / GEO (AI Search & Overviews)", level: 85 },
    ],
  },
  {
    title: "On-Page, Off-Page & Local SEO",
    skills: [
      { name: "On-Page Optimization", level: 95 },
      { name: "Off-Page & Link Building", level: 90 },
      { name: "Local SEO & Google Business Profile", level: 92 },
      { name: "Keyword Research & Intent Mapping", level: 94 },
    ],
  },
  {
    title: "Paid Ads & Analytics",
    skills: [
      { name: "Google Ads (Search, Retargeting, Video)", level: 88 },
      { name: "Meta Ads & Lead Generation", level: 86 },
      { name: "GA4 & Search Console", level: 93 },
      { name: "Google Tag Manager & Conversion Tracking", level: 88 },
    ],
  },
  {
    title: "Web, Automation & AI",
    skills: [
      { name: "WordPress (custom, plugins, speed)", level: 92 },
      { name: "HTML / CSS / JavaScript", level: 85 },
      { name: "Python Tooling & Automation", level: 80 },
      { name: "AI-Native Builds & Vercel/GitHub Deploys", level: 90 },
    ],
  },
];

const additionalTools = [
  "Ahrefs", "SEMrush", "Screaming Frog", "Google Search Console",
  "GA4", "Google Tag Manager", "Moz", "Ubersuggest", "SERanking",
  "ChatGPT & AI Tools", "Canva", "Photoshop", "CapCut", "Filmora",
  "WordPress", "Wix", "Vercel", "GitHub",
];


const Skills = () => {
  return (
    <section id="skills" className="relative py-16 sm:py-20 px-4 md:pl-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 text-center"
        >
          <h2 className="mb-3 sm:mb-4 font-display text-2xl sm:text-3xl font-bold md:text-4xl">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Comprehensive toolkit for digital success
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-8 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="glass-card p-4 sm:p-6"
            >
              <h3 className="mb-4 sm:mb-6 font-display text-lg sm:text-xl font-semibold text-primary">
                {category.title}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="mb-1.5 sm:mb-2 flex justify-between text-xs sm:text-sm">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 sm:h-2 overflow-hidden rounded-full bg-muted">
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
          className="mt-8 sm:mt-12"
        >
          <h3 className="mb-4 sm:mb-6 text-center font-display text-lg sm:text-xl font-semibold">
            Additional Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {additionalTools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-full bg-card border border-border px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
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
