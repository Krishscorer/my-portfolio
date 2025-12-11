import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  ArrowLeft,
  ExternalLink,
  Target,
  Lightbulb,
  BarChart3,
  Settings,
  CheckCircle2,
  TrendingUp,
  Mail,
  Users,
  Zap,
} from "lucide-react";

const caseStudyData = {
  "email-automation": {
    title: "Email Automation Workflow Optimization",
    subtitle: "Improving Customer Engagement Through Smart Automation",
    overview:
      "This project focused on redesigning and optimizing email automation workflows to improve customer engagement, increase open rates, and enhance overall campaign performance. By implementing strategic segmentation and automated sequences, we achieved significant improvements in key metrics.",
    problem: {
      title: "Marketing Problem / Objective",
      description:
        "The existing email marketing campaigns were experiencing low engagement rates and lacked personalization. There was no systematic approach to customer segmentation, and manual processes were leading to inconsistent messaging and missed opportunities for customer re-engagement.",
      challenges: [
        "Low email open rates (below industry average)",
        "No customer segmentation strategy",
        "Manual and time-consuming campaign execution",
        "Inconsistent messaging across customer touchpoints",
        "Limited insight into customer lifecycle stages",
      ],
    },
    strategy: {
      title: "Strategy & Process",
      steps: [
        {
          title: "Audit & Analysis",
          description:
            "Conducted comprehensive audit of existing email campaigns, analyzed historical data, and identified key drop-off points in the customer journey.",
        },
        {
          title: "Segmentation Framework",
          description:
            "Developed customer segmentation groups based on behavior, engagement level, and lifecycle stage to enable targeted messaging.",
        },
        {
          title: "Workflow Design",
          description:
            "Created automated workflow sequences for onboarding, re-engagement, and nurturing campaigns with personalized content triggers.",
        },
        {
          title: "A/B Testing",
          description:
            "Implemented systematic A/B testing for subject lines, send times, and content variations to optimize performance.",
        },
        {
          title: "Analytics Integration",
          description:
            "Set up comprehensive tracking and reporting using Google Analytics and CRM dashboards to measure ROI and campaign effectiveness.",
        },
      ],
    },
    insights: {
      title: "Key Insights from Data",
      points: [
        "Personalized subject lines increased open rates by 18%",
        "Optimal send time identified as Tuesday 10 AM for B2B audience",
        "Re-engagement sequences recovered 15% of dormant subscribers",
        "Segmented campaigns showed 3x higher click-through rates",
        "Automated workflows reduced manual effort by 60%",
      ],
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { label: "Open Rate Improvement", value: "25%", icon: TrendingUp },
        { label: "Click-Through Rate", value: "+40%", icon: Mail },
        { label: "Customer Segments", value: "8+", icon: Users },
        { label: "Automation Workflows", value: "5", icon: Zap },
      ],
    },
    tools: ["HubSpot", "Mailchimp", "Google Analytics", "Postman", "Excel"],
  },
};

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudyData[id as keyof typeof caseStudyData];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Case Study Not Found</h1>
          <Button variant="hero" asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Button variant="ghost" asChild>
                <Link to="/#projects" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Projects
                </Link>
              </Button>
            </motion.div>

            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">{caseStudy.subtitle}</p>
              
              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {caseStudy.tools.map((tool) => (
                  <span key={tool} className="skill-chip">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.header>

            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">Overview</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.overview}</p>
            </motion.section>

            {/* Problem */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-destructive" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">{caseStudy.problem.title}</h2>
              </div>
              <p className="text-muted-foreground mb-6">{caseStudy.problem.description}</p>
              <div className="space-y-3">
                {caseStudy.problem.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-destructive">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{challenge}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Strategy */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">{caseStudy.strategy.title}</h2>
              </div>
              <div className="space-y-6">
                {caseStudy.strategy.steps.map((step, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-primary/20 last:border-transparent">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-gradient" />
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Workflow Diagram Placeholder */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="glass-card p-8 mb-8"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Automation Workflow Diagram</h2>
              <div className="aspect-video bg-gradient-to-br from-secondary to-muted rounded-xl flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Settings className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Workflow Diagram Placeholder</p>
                  <p className="text-sm text-muted-foreground mt-2">Visual representation of the automation funnel</p>
                </div>
              </div>
            </motion.section>

            {/* Insights */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">{caseStudy.insights.title}</h2>
              </div>
              <div className="space-y-3">
                {caseStudy.insights.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Results */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card p-8 mb-8"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">{caseStudy.results.title}</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {caseStudy.results.metrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-secondary/50">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <metric.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-display text-3xl font-bold gradient-text mb-1">{metric.value}</div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Screenshots Placeholder */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="glass-card p-8 mb-8"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Screenshots Gallery</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="aspect-video bg-gradient-to-br from-secondary to-muted rounded-xl flex items-center justify-center border border-border">
                    <p className="text-muted-foreground">Screenshot {num}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <Button variant="hero" size="lg" asChild>
                <a href="https://linkedin.com/in/krishna" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                  View on LinkedIn
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
