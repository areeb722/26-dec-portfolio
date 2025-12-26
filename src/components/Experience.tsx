import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const experiences = [
  {
    role: "SEO Expert",
    company: "Mezzex Technology",
    period: "Feb 2024 – Present",
    type: "Full Time",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    points: [
      "Managed SEO for multiple brands (Direct Care, Houszy, Astir Care & Spacebox Storage)",
      "Executed on-page & technical SEO strategies including schema audits and Core Web Vitals optimization",
      "Developed link-building and guest posting campaigns, strengthening domain authority",
      "Conducted comprehensive site audits using Ahrefs, Screaming Frog & GSC",
      "Improved local visibility through GMB optimization and citation building",
    ],
  },
  {
    role: "Digital Marketing Executive",
    company: "Apple Education & Immigration Consultancy",
    period: "Feb 2023 – Jan 2024",
    type: "Full Time",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
    points: [
      "Designed SEO campaigns integrating on-page optimization and content creation",
      "Enhanced Google Business Profile visibility for improved local search performance",
      "Resolved crawl errors and optimized site performance with Core Web Vitals fixes",
      "Conducted keyword mapping, competitor analysis, and schema implementation",
    ],
  },
  {
    role: "Digital Marketing Intern",
    company: "Digital Dhanu Pvt. Ltd.",
    period: "Dec 2022 – Feb 2023",
    type: "Full Time",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
    points: [
      "Assisted in comprehensive SEO audits and keyword research for client websites",
      "Supported link-building outreach campaigns and performance reporting",
      "Learned industry best practices in digital marketing and SEO",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Technology - Information Technology",
    institution: "IIMT College of Engineering, Greater Noida",
    period: "2020 – 2024",
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "Barhi Inter College Barhi, Hazaribag, Jharkhand",
    period: "2018 – 2020",
  },
  {
    degree: "High School (Class X)",
    institution: "Vivekananda Central School, Hazaribagh, Jharkhand",
    period: "2017 – 2018",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 px-4 md:pl-20 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground">
            My professional journey in digital marketing
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="mb-16 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={exp.image}
                  alt={`${exp.company} banner`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="mb-1 font-display text-xl font-semibold text-primary">
                  {exp.role}
                </h3>
                <p className="mb-4 font-medium text-foreground">{exp.company}</p>
                <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </span>
                  {exp.type && (
                    <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary">
                      {exp.type}
                    </span>
                  )}
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-8 text-center font-display text-2xl font-semibold">
            Education
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 text-center hover:border-primary/50 transition-all"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl">🎓</span>
                </div>
                <h4 className="mb-2 font-display font-semibold text-foreground">
                  {edu.degree}
                </h4>
                <p className="mb-2 text-sm text-muted-foreground">{edu.institution}</p>
                <p className="text-sm text-primary">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
