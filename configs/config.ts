import { Zap, Rocket, Layers, PenTool, Sliders, Package } from "lucide-react";

import {
  SiteConfig,
  FeatureSection,
  FAQProps,
  Problems,
  Reviews,
  PricingSectionFeatures,
  BuiltWithPathForgeAI,
} from "@/types";




export const pricingSectionFeatures: PricingSectionFeatures = [
  "🚀 Unlimited AI-Generated Roadmaps: No Limit to Creativity",
  "🎨 Professional Templates Library: Pre-built Roadmaps for Every Goal",
  "⚡ Real-time Collaboration: Work Together with Your Team Seamlessly",
  "📊 Progress Tracking & Analytics: Monitor Your Journey with Insights",
  "💾 Multi-Format Export: Download as PDF, PNG, or Share Online",
  "🔧 Smart AI Recommendations: Get Personalized Path Suggestions",
];
export const FAQList: FAQProps[] = [
  {
    question: "What makes PathForge AI different from other roadmap tools?",
    answer:
      "PathForge AI combines advanced AI algorithms with collaborative features, templates library, and progress tracking. It's not just a roadmap generator—it's your complete journey planning companion with analytics and team collaboration built-in.",
    value: "item-1",
  },
  {
    question: "Who can benefit from using PathForge AI?",
    answer:
      "PathForge AI is perfect for students, career changers, entrepreneurs, project managers, teams, and anyone looking to map out their learning journey, career path, or project timeline with AI assistance.",
    value: "item-2",
  },
  {
    question: "Can I collaborate with my team on roadmaps?",
    answer:
      "Yes! PathForge AI includes built-in collaboration features allowing you to share roadmaps, track progress together, and work as a team to achieve your goals.",
    value: "item-3",
  },
  
  {
    question: "What export formats are supported?",
    answer:
      "PathForge AI supports multiple export formats including PDF documents, high-quality PNG images, and shareable online links. You can also print directly or save to your roadmap library.",
    value: "item-4",
  },
  {
    question: "Are there ready-made templates available?",
    answer:
      "Absolutely! PathForge AI offers a comprehensive templates library covering various domains like software development, data science, business, design, and more. Start with a template and customize it to your needs.",
    value: "item-5",
  },
];
export const siteConfigs: SiteConfig = {
  name: "PathForge AI",
  tagline: "Forge Your Future with AI-Powered Roadmaps",
  description:
    "The ultimate AI-powered platform for creating, collaborating, and tracking personalized roadmaps. Transform your goals into actionable paths with intelligent guidance.",
};
export const footerConfig = {
  logo: "PathForge AI",
  brand: "PathForge AI",
  description: "Empowering individuals and teams to forge their path forward with AI-driven roadmaps and intelligent planning.",
  sections: [
    {
      title: "Links",
      links: [
        // { text: "Features", href: "#features" },
        // { text: "Pricing", href: "#pricing" },
        { text: "Twitter", href: "https://x.com/naman9271" },
        { text: "Contact", href: "mailto:namanjain9271@gmail.com" },
        { text: "Linkedin", href: "https://www.linkedin.com/in/naman9271/" },

      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Terms of Service", href: "/tos" },
        { text: "Privacy Policy", href: "/privacy" },
      ],
    },
  ],
};


