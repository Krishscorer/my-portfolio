import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    title: "CRM and Marketing (Freelancer)",
    company: "Wildnasswald Zentrum. (B2B & B2C)",
    period: "April, 2025 - Sep, 2025",
    duration: "6 months",
    responsibilities: [
      "Implemented the CRM systems from Scratch for Marketing Automation (Zoho)",
      "Created Social media Strategies and Paid ad Strategies for the Optimization of Marketing Purpose.",
      "Developed Content for Marketing and Saels Purpose. Researched about the Ideal Customer Profile(ICP). ",
    ],
    achievements: [
      "Automated 15+ marketing workflows",
      "Improved lead nurturing effectiveness by 40%",
      "Reduced manual marketing tasks by 60%"
    ],
    tools: ["HubSpot", "Zoho CRM", "Google Analytics 4", "Tableau"]
  },
  {
    title: "Marketing and Technical Sales Trainee",
    company: "Plasmics GMBH (B2B)",
    period: "Jan, 2024 - Jan, 2025",
    duration: "1 years",
    responsibilities: [
      "Master Thesis on B2B market for adoption of 3D printing related to industries like Automotive, Medical Devices and Aerospace",
      "Used Power BI for data visualization and performance tracking, building dashboards to track key metrics including NPS (Net Promoter Score)",
      "Utilized SQL to store customer data and reduce data retrieval time from real-time Teradata (RDBMS)",
      "Integrated DRUPAL with MS Dynamics 365 for bi-directional data synchronization to keep both systems consistently updated",
      "Integrated the website with MS Dynamics 365 to track prospect engagement and assign lead score points",
      "Supported integration of data analysis into Microsoft Dynamics 365 CRM to automate email campaigns and enhance lead tracking",
      "Used Google Keyword Planner to identify essential keywords and optimize website content for better search engine performance",
      "Developed segments, triggers, personalized email campaigns, and journey designs with A/B testing",
      "Analyzed marketing data including CRM insights, SEO performance, and campaign effectiveness to refine marketing strategies",
      "Monitored key performance indicators (KPIs) such as CTR, conversion rates, and ROI to support data-driven decision making"
    ],
    achievements: [
      "Increased email engagement by 45%",
      "Grew client retention rate to 92%",
      "Managed database of 150K+ contacts"
    ],
    tools: ["Mailchimp", "Zoho CRM", "MSD365", "Jira"]
  },
  {
    title: "Project Manager",
    company: "European People’s Party (European Parliament)",
    period: "Jan, 2023 -June, 2024",
    duration: "6 Months",
    responsibilities: [
      "Developed and executed social media strategies using Microsoft Excel for planning and performance tracking",
      "Supervised social platforms, created engaging content, and enhanced promotional impact",
      "Collaborated with cross-functional teams to align social media campaigns with organizational goals",
      "Utilized analytics tools to optimize content strategies and track performance",
      "Guided project planning, managed resources, and ensured timely delivery of initiatives",
      "Provided regular performance reports and actionable insights to senior leadership",
      "Achieved 1st prize out of 227 participants from the European Parliament for best event organization"
    ],
    achievements: [
      "Reduced cost-per-acquisition by 30%",
      "Grew social media following by 150%",
      "Improved website conversion rate by 22%"
    ],
    tools: ["Google Ads", "Facebook Ads Manager", "WordPress", "SEMrush", "Canva"]
  },
  {
    title: "Key Account Manager (Sales & Business Analysis)",
    company: "Arihant Cars (B2C)",
    period: "Jan, 2019 - Oct, 2021",
    duration: "2.8 years",
    responsibilities: [
      "Managed comprehensive market research and data analysis to identify trends using Google Analytics and Google Ads, buyer preferences, and competitive environment",
      "Collaborated with cross-functional teams and managed stakeholders internally and externally to improve business processes, enhance operations, and streamline customer experience with a focus on business development and sales",
      "Worked extensively with Microsoft Dynamics 365 to manage customer relationships and optimize lead generation, resulting in 35% growth",
      "Utilized lead scoring based on customer engagement to prioritize outreach through targeted email marketing campaigns"
    ],
    achievements: [
      "Identified 3 new market segments",
      "Improved data accuracy by 95%",
      "Streamlined reporting process saving 10 hours/month"
    ],
    tools: ["Excel", "Google Analytics", "Power BI"]
  },
  {
    title: "Trainee",
    company: "Kumar Internationals (B2B)",
    period: "Jan, 2017 - Dec, 2019",
    duration: "2+ Year",
    responsibilities: [
      "Ensured timely Purchase Order booking in SAP with zero commercial errors",
      "Closed Product First Information Sheet (PFIS) internally and externally",
      "Coordinated with Product Development and Procurement teams for product development activities",
      "Managed coordination for raw materials and packing materials procurement (VN purchase or customer purchase)",
      "Collaborated with Regulatory, Finance, Purchase, Production, and Product Development teams for timely order completion",
      "Responded to customer-specific requirements to ensure customer satisfaction",
      "Supported TICs in product development, stability, raw material, and packing material activities from the customer side",
      "Monitored dispatches and Sales Hold status for system-booked orders",
      "Communicated timely updates to internal and external customers",
],

    achievements: [
      "Improved email open rates by 25%",
      "Built 5+ automated workflow sequences",
      "Managed 100+ marketing campaigns",
    ],
    tools: ["HubSpot", "SAP","Google Analytics"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 section-heading inline-block">
                Experience
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                My professional journey in Marketing & CRM
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="relative pl-8 md:pl-12"
                >
                  {/* Timeline line */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-gradient shadow-glow" />

                  {/* Content Card */}
                  <div className="glass-card p-8 mb-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <span className="px-3 py-1 rounded-full bg-primary-soft text-accent-foreground text-sm font-medium">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.achievements.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 rounded-xl bg-primary/10 text-accent-foreground text-sm font-medium border border-primary/20"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Tools & Platforms</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((tool) => (
                          <span key={tool} className="skill-chip">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default ExperienceSection;
