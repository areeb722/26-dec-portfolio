import { motion } from "framer-motion";
import { Youtube, Eye, Users, Clock } from "lucide-react";
import { Button } from "./ui/button";
import rukozaraBanner from "@/assets/rukozara-tv-banner.png";
import arixFactsBanner from "@/assets/arix-facts-banner.png";

const personalProjects = [
  {
    name: "Ruko Zara TV",
    description: "AI + Viral Real Moments + Reactions",
    banner: rukozaraBanner,
    youtubeUrl: "https://www.youtube.com/@RukoZaraTV",
    stats: [
      { icon: Eye, label: "Views (28 days)", value: "7.8M" },
      { icon: Users, label: "Subscribers", value: "45,815" },
      { icon: Clock, label: "Watch Time", value: "21.2K hrs" },
    ],
  },
  {
    name: "Arix Facts",
    description: "Facts Jo Aapko Sochne Par Majboor Kare",
    banner: arixFactsBanner,
    youtubeUrl: "https://www.youtube.com/@ArixFacts",
    stats: [],
  },
];

const PersonalProjects = () => {
  return (
    <section id="personal-projects" className="relative py-20 px-4 md:pl-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            Personal <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            My social media ventures and content creation
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {personalProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.banner}
                  alt={`${project.name} banner`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="mb-2 font-display text-xl font-semibold text-primary">
                  {project.name}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>

                {project.stats.length > 0 && (
                  <div className="mb-4 grid grid-cols-3 gap-4">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="mb-1 flex items-center justify-center">
                          <stat.icon className="h-4 w-4 text-primary" />
                        </div>
                        <p className="text-lg font-bold text-foreground">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <Button
                  asChild
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Youtube className="h-5 w-5" />
                    Visit YouTube Channel
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
