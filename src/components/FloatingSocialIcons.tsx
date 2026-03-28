import { motion } from "framer-motion";
import { Youtube, Facebook, Instagram } from "lucide-react";

const socialLinks = [
  {
    icon: Youtube,
    label: "YouTube",
    color: "bg-red-600 hover:bg-red-700 shadow-red-600/30",
    href: "#personal-projects",
  },
  {
    icon: Facebook,
    label: "Facebook",
    color: "bg-blue-600 hover:bg-blue-700 shadow-blue-600/30",
    href: "#personal-projects",
  },
  {
    icon: Instagram,
    label: "Instagram",
    color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:opacity-90 shadow-pink-500/30",
    href: "#personal-projects",
  },
];

const FloatingSocialIcons = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-3 sm:right-4 bottom-4 sm:bottom-6 z-40 flex flex-col gap-2 sm:gap-3"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          onClick={(e) => handleClick(e, social.href)}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1.2 + index * 0.15, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.2, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className={`group relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full text-white shadow-lg ${social.color} transition-all duration-300`}
          title={social.label}
        >
          <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="absolute right-12 sm:right-14 hidden whitespace-nowrap rounded-lg bg-card px-3 py-1.5 text-sm font-medium text-foreground shadow-lg border border-border group-hover:block">
            {social.label}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FloatingSocialIcons;
