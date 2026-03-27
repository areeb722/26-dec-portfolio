import { motion } from "framer-motion";
import { Youtube, Eye, Users, Clock, Facebook, Instagram, Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import rukozaraBanner from "@/assets/rukozara-tv-banner.png";
import arixFactsBanner from "@/assets/arix-facts-banner.png";

const youtubeProjects = [
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
  {
    name: "Arix Facts",
    description: "Facts Jo Aapko Sochne Par Majboor Kare",
    banner: arixFactsBanner,
    url: "https://www.youtube.com/@ArixFacts",
    platform: "youtube" as const,
    stats: [
      { icon: Eye, label: "Total Views", value: "500K+" },
      { icon: Users, label: "Subscribers", value: "5,200+" },
      { icon: Clock, label: "Watch Time", value: "1.8K hrs" },
    ],
  },
];

const socialProjects = [
  {
    name: "Arix Facts - Facebook",
    description: "Facts & Knowledge Page on Facebook",
    url: "https://www.facebook.com/ArixFacts",
    platform: "facebook" as const,
    gradient: "from-blue-600 to-blue-500",
    icon: Facebook,
    stats: [
      { icon: Users, label: "Followers", value: "10K+" },
      { icon: Heart, label: "Page Likes", value: "9.8K" },
      { icon: Share2, label: "Avg. Reach", value: "25K/week" },
    ],
  },
  {
    name: "Arix Facts - Instagram",
    description: "Facts & Reels on Instagram",
    url: "https://www.instagram.com/arixfactsofficial/",
    platform: "instagram" as const,
    gradient: "from-purple-600 via-pink-500 to-orange-400",
    icon: Instagram,
    stats: [
      { icon: Users, label: "Followers", value: "8.5K+" },
      { icon: Heart, label: "Avg. Likes", value: "1.2K" },
      { icon: MessageCircle, label: "Engagement", value: "4.5%" },
    ],
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
            Social Media <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-muted-foreground">
            My social media ventures and content creation analytics
          </p>
        </motion.div>

        {/* YouTube Channels */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-6 flex items-center gap-2 font-display text-xl font-semibold"
        >
          <Youtube className="h-6 w-6 text-red-500" />
          YouTube Channels
        </motion.h3>
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {youtubeProjects.map((project, index) => (
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
                <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                  <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                  LIVE STATS
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 font-display text-xl font-semibold text-primary">
                  {project.name}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-4 grid grid-cols-2 gap-3">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-secondary/50 p-3 text-center">
                      <div className="mb-1 flex items-center justify-center">
                        <stat.icon className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-lg font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  <a
                    href={project.url}
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

        {/* Social Media */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-6 flex items-center gap-2 font-display text-xl font-semibold"
        >
          <Share2 className="h-6 w-6 text-primary" />
          Social Media Pages
        </motion.h3>
        <div className="grid gap-8 md:grid-cols-2">
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
              <div className={`relative h-32 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                <project.icon className="h-16 w-16 text-white/90" />
                <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white">
                  <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                  LIVE
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 font-display text-xl font-semibold text-primary">
                  {project.name}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-4 grid grid-cols-3 gap-3">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-secondary/50 p-3 text-center">
                      <div className="mb-1 flex items-center justify-center">
                        <stat.icon className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-lg font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white border-0`}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <project.icon className="h-5 w-5" />
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
