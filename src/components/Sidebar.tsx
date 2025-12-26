import { motion } from "framer-motion";
import { Home, User, Code, Briefcase, GraduationCap, Mail } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Code, label: "Skills", href: "#skills" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: GraduationCap, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const Sidebar = () => {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 z-50 hidden h-screen w-16 flex-col items-center bg-sidebar py-6 md:flex"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-display font-bold text-sm"
      >
        MA
      </motion.div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col items-center gap-2">
        {navItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index + 0.3 }}
            className="group relative flex h-12 w-12 items-center justify-center rounded-xl text-sidebar-foreground transition-all hover:bg-sidebar-accent hover:text-primary"
          >
            <item.icon className="h-5 w-5" />
            <span className="absolute left-16 hidden whitespace-nowrap rounded-md bg-card px-3 py-1.5 text-sm font-medium text-foreground shadow-lg group-hover:block">
              {item.label}
            </span>
          </motion.a>
        ))}
      </nav>

      {/* Bottom indicator */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8 }}
        className="h-2 w-2 rounded-full bg-primary animate-pulse-glow"
      />
    </motion.aside>
  );
};

export default Sidebar;
