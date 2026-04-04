import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Download, Rocket, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "areeb722@gmail.com",
    href: "mailto:areeb722@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8210967985",
    href: "tel:+918210967985",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Greater Noida, UP, India",
    href: "#",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/areeb722",
    href: "https://github.com/areeb722",
  },
];

const opportunities = [
  "SEO Strategy & Implementation",
  "Digital Marketing Campaigns",
  "Website Development",
  "Content Strategy & Optimization",
  "Technical SEO Audits",
  "PPC & Paid Advertising",
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-16 sm:py-20 px-4 md:pl-20 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 text-center"
        >
          <h2 className="mb-3 sm:mb-4 font-display text-2xl sm:text-3xl font-bold md:text-4xl">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Let's discuss your next project or opportunity
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-5 sm:p-8"
          >
            <h3 className="mb-4 sm:mb-6 font-display text-lg sm:text-xl font-semibold text-foreground">
              Contact Information
            </h3>
            <p className="mb-6 sm:mb-8 text-xs sm:text-base text-muted-foreground">
              Feel free to reach out for collaborations, SEO consultations, or just a friendly chat about digital marketing and web development!
            </p>

            <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 sm:gap-4 rounded-lg bg-secondary/50 p-3 sm:p-4 transition-colors hover:bg-secondary"
                >
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-sm sm:text-base font-medium text-foreground truncate">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-xs sm:text-sm" size="sm" asChild>
              <a href="#" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-5 sm:p-8"
          >
            <div className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-primary animate-float" />
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground">
                Available for Opportunities
              </h3>
            </div>
            <p className="mb-6 sm:mb-8 text-xs sm:text-base text-muted-foreground">
              I'm currently open to full-time positions, freelance projects, and consulting opportunities in:
            </p>

            <div className="mb-6 sm:mb-8 grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2">
              {opportunities.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2 rounded-lg bg-secondary/50 p-2.5 sm:p-3"
                >
                  <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-primary" />
                  <span className="text-xs sm:text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="rounded-xl bg-gradient-to-r from-primary/10 to-purple-400/10 p-4 sm:p-6 text-center">
              <p className="text-xs sm:text-sm text-muted-foreground">Response Time</p>
              <p className="font-display text-base sm:text-lg font-semibold text-foreground">
                Usually within 24 hours
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-xs sm:text-sm text-muted-foreground">
            Built with React, TypeScript & Framer Motion{" "}
            <a href="https://x.com/dev_areeb" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@dev_areeb</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
