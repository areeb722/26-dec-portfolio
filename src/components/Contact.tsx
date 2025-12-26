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
    <section id="contact" className="relative py-20 px-4 md:pl-20 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground">
            Let's discuss your next project or opportunity
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="mb-6 font-display text-xl font-semibold text-foreground">
              Contact Information
            </h3>
            <p className="mb-8 text-muted-foreground">
              Feel free to reach out for collaborations, SEO consultations, or just a friendly chat about digital marketing and web development!
            </p>

            <div className="mb-8 space-y-4">
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
                  className="flex items-center gap-4 rounded-lg bg-secondary/50 p-4 transition-colors hover:bg-secondary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90" asChild>
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
            className="glass-card p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <Rocket className="h-6 w-6 text-primary animate-float" />
              <h3 className="font-display text-xl font-semibold text-foreground">
                Available for Opportunities
              </h3>
            </div>
            <p className="mb-8 text-muted-foreground">
              I'm currently open to full-time positions, freelance projects, and consulting opportunities in:
            </p>

            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {opportunities.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2 rounded-lg bg-secondary/50 p-3"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="rounded-xl bg-gradient-to-r from-primary/10 to-purple-400/10 p-6 text-center">
              <p className="text-sm text-muted-foreground">Response Time</p>
              <p className="font-display text-lg font-semibold text-foreground">
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
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Built with ❤️ using React, TypeScript & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
