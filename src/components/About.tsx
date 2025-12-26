import { motion } from "framer-motion";
import { Search, Target, Code } from "lucide-react";
import workspaceImage from "@/assets/workspace.jpg";

const highlights = [
  {
    icon: Search,
    title: "SEO Mastery",
    description: "Expert in On-Page, Off-Page, Technical & Local SEO with proven results",
  },
  {
    icon: Target,
    title: "Digital Ads",
    description: "Skilled in Google Ads, Meta Ads, and performance marketing campaigns",
  },
  {
    icon: Code,
    title: "Full-Stack Dev",
    description: "Building responsive websites and custom WordPress solutions",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-20 px-4 md:pl-20 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground">
            Passionate about technology and digital growth
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={workspaceImage}
                alt="Workspace"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-xl bg-primary/20 blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Full-Stack Digital Marketer with 2+ years in SEO, Paid Ads, Content Strategy & Web Development. 
              Skilled in on-page, off-page, and technical SEO, WordPress, and Google API integrations. 
              Proven track record of boosting visibility, traffic, and leads for startups, e-commerce, and service businesses.
            </p>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-display font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
