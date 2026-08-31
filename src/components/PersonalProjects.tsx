import { motion } from "framer-motion";
import { Youtube, Eye, Users, Clock, Facebook, Instagram, Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import rukozaraBanner from "@/assets/rukozara-tv-banner.png";
import arixFactsBanner from "@/assets/arix-facts-banner.png";

const youtubeProjects = [
  {
    name: "Arix Facts",
    description: "Movie Facts | Film Secrets | Movie Updates",
    banner: arixFactsBanner,
    url: "https://www.youtube.com/@ArixFacts",
    platform: "youtube" as const,
    stats: [
      { icon: Users, label: "Subscribers", value: "16.7K" },
      { icon: Eye, label: "Videos", value: "461" },
    ],
  },
  {
    name: "Ruko Zara TV",
    description: "AI + Viral Real Moments + Reactions",
    banner: rukozaraBanner,
    url: "https://www.youtube.com/@RukoZaraTV",
    platform: "youtube" as const,
    stats: [
      { icon: Eye, label: "Total Views", value: "12.5M" },
      { icon: Users, label: "Subscribers", value: "45,815" },
      { icon: Clock, label: "Watch Time (28d)", value: "21.2K hrs" },
      { icon: Eye, label: "Views (28d)", value: "7.8M" },
    ],
  },
];

const socialProjects = [
  {
    name: "Arix Facts - Facebook",
    description: "Real Facts. Real Stories. Real Cinema.",
    url: "https://www.facebook.com/ArixFacts",
    platform: "facebook" as const,
    gradient: "from-blue-600 to-blue-500",
    icon: Facebook,
    stats: [
      { icon: Users, label: "Followers", value: "212K" },
      { icon: Heart, label: "Following", value: "2" },
      { icon: Share2, label: "Role", value: "Digital Creator" },
    ],
  },
  {
    name: "Arix Facts - Instagram",
    description: "Your Daily Dose of Movie Facts & Film Secrets!",
    url: "https://www.instagram.com/arixfactsofficial/",
    platform: "instagram" as const,
    gradient: "from-purple-600 via-pink-500 to-orange-400",
    icon: Instagram,
    stats: [
      { icon: Users, label: "Followers", value: "34.9K" },
      { icon: MessageCircle, label: "Following", value: "3" },
      { icon: Share2, label: "Role", value: "Digital Creator" },
    ],
  },
];


const PersonalProjects = () => {
  return (
    <section id="personal-projects" className="relative py-16 sm:py-20 px-4 md:pl-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 text-center"
        >
          <h2 className="mb-3 sm:mb-4 font-display text-2xl sm:text-3xl font-bold md:text-4xl">
            Social Media <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            My social media ventures and content creation analytics
          </p>
        </motion.div>

        {/* YouTube Channels */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-4 sm:mb-6 flex items-center gap-2 font-display text-lg sm:text-xl font-semibold"
        >
          <Youtube className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
          YouTube Channels
        </motion.h3>
        <div className="mb-8 sm:mb-12 grid gap-6 sm:gap-8 md:grid-cols-2">
          {youtubeProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-36 sm:h-48 overflow-hidden">
                <img
                  src={project.banner}
                  alt={`${project.name} banner`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 flex items-center gap-1 rounded-full bg-red-600 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-white">
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white animate-pulse" />
                  LIVE STATS
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="mb-1.5 sm:mb-2 font-display text-lg sm:text-xl font-semibold text-primary">
                  {project.name}
                </h3>
                <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-3 sm:mb-4 grid grid-cols-2 gap-2 sm:gap-3">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-secondary/50 p-2 sm:p-3 text-center">
                      <div className="mb-0.5 sm:mb-1 flex items-center justify-center">
                        <stat.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      </div>
                      <p className="text-sm sm:text-lg font-bold text-foreground">{stat.value}</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  size="sm"
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
                    Visit YouTube Channel
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Media */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {socialProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              {/* Gradient Header */}
              <div className={`relative h-24 sm:h-32 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                <project.icon className="h-12 w-12 sm:h-16 sm:w-16 text-white/90" />
                <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-white">
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white animate-pulse" />
                  LIVE
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="mb-1.5 sm:mb-2 font-display text-lg sm:text-xl font-semibold text-primary">
                  {project.name}
                </h3>
                <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-3 sm:mb-4 grid grid-cols-3 gap-2 sm:gap-3">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-secondary/50 p-2 sm:p-3 text-center">
                      <div className="mb-0.5 sm:mb-1 flex items-center justify-center">
                        <stat.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      </div>
                      <p className="text-sm sm:text-lg font-bold text-foreground">{stat.value}</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  size="sm"
                  className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white border-0 text-xs sm:text-sm`}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <project.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    Visit {project.platform === "facebook" ? "Facebook" : "Instagram"} Page
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
