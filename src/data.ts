import { WorkshopDetailCard, LearningOutcome, FAQItem } from './types';

export const WORKSHOP_META = {
  title: "AI & Robotics Summer Workshop",
  subtitle: "Empower Your Child to Engineer the Future",
  desc: "A hands-on, high-energy 4-week online program designed for ages 8–14. Students write their first AI triggers, program 3D digital robots in immersive virtual environments, and develop critical creative skills.",
  ageGroup: "8–14 Years",
  duration: "4 Weeks",
  mode: "Online (Live + Interactive Interactive Labs)",
  fee: "₹2,999",
  startDate: "15 July 2026",
  originalFee: "₹5,999",
  discountPercent: "50% OFF"
};

export const WORKSHOP_DETAILS: WorkshopDetailCard[] = [
  {
    id: "age",
    label: "Target Age",
    value: WORKSHOP_META.ageGroup,
    iconName: "Target",
    colorClass: "from-blue-500/20 to-cyan-500/10 text-cyan-400 border-cyan-500/20"
  },
  {
    id: "duration",
    label: "Program Duration",
    value: WORKSHOP_META.duration,
    iconName: "Clock",
    colorClass: "from-purple-500/20 to-pink-500/10 text-purple-400 border-purple-500/20"
  },
  {
    id: "mode",
    label: "Learning Mode",
    value: WORKSHOP_META.mode,
    iconName: "Laptop",
    colorClass: "from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/20"
  },
  {
    id: "startDate",
    label: "Cohort Starts",
    value: WORKSHOP_META.startDate,
    iconName: "Calendar",
    colorClass: "from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/20"
  },
  {
    id: "fee",
    label: "Tuition Fee",
    value: WORKSHOP_META.fee,
    iconName: "CreditCard",
    colorClass: "from-indigo-500/20 to-violet-500/10 text-indigo-400 border-indigo-500/20"
  }
];

export const LEARNING_OUTCOMES: LearningOutcome[] = [
  {
    id: "outcome-1",
    title: "Introduction to Artificial Intelligence",
    description: "Explore how machine learning model training works. Train digital brains to recognize simple objects, voice triggers, and dynamic gestures using visual block models.",
    badgeText: "Core Concept",
    illustration: "🤖"
  },
  {
    id: "outcome-2",
    title: "Basics of Robotics",
    description: "Understand central robotic components such as ultrasonic distance sensors, infrared pathway trackers, servo motors, and controller boards.",
    badgeText: "Hardware Logic",
    illustration: "⚙️"
  },
  {
    id: "outcome-3",
    title: "Problem Solving Skills",
    description: "Develop structural computational thinking. Apply debugging practices to step-by-step algorithms, fixing complex coding bugs systematically.",
    badgeText: "Life Skill",
    illustration: "🧠"
  },
  {
    id: "outcome-4",
    title: "Building Mini Projects",
    description: "Formulate over 5 playable mini-projects including an automated obstacle-avoidance car, an intelligent smart security system, and interactive robotic simulations.",
    badgeText: "Direct Application",
    illustration: "🚀"
  },
  {
    id: "outcome-5",
    title: "Understanding Automation",
    description: "Explore feedback systems connecting smart cities. Write control scripts to automate responsive digital actions to physical variables like light and touch.",
    badgeText: "Future Tech",
    illustration: "⚡"
  },
  {
    id: "outcome-6",
    title: "Team Collaboration",
    description: "Cooperate with peers on design mockups, presenting inventive ideas during live interactive lab sessions. Builds communications alongside engineering.",
    badgeText: "Cooperation",
    illustration: "🤝"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do we need to buy any expensive physical robotics kits for this online class?",
    answer: "No expensive physical purchase is necessary! We utilize interactive, browser-based 3D robotic simulators where children construct and code digital smart-bots. If you already have physical kits (like Arduino, LEGO Mindstorms, or micro:bit), we do provide additional supplementary worksheets so they can adapt the software skills directly to physical devices.",
    category: "Equipment & Kits"
  },
  {
    id: "faq-2",
    question: "What are the timings, and what happens if we have to miss a live weekend class?",
    answer: "Classes are held live on weekends (two 90-minute sessions per week; typically 10:30 AM and 3:00 PM cohorts). Don't worry! Every session is fully recorded in high-definition and uploaded to your personal student dashboard within 60 minutes, wraz with interactive visual summaries and coding challenges so your child can easily follow at their own pace.",
    category: "Schedule & Access"
  },
  {
    id: "faq-3",
    question: "Are there any coding prerequisites? My child is an absolute beginner.",
    answer: "This program is specifically engineered for absolute beginners with zero programming background! We start with simple, colorful visual block-coding elements before easing into clean scratchpad structures, ensuring children understand logic step-by-step without feeling intimidated by keyboard typing errors.",
    category: "Prerequisites"
  },
  {
    id: "faq-4",
    question: "Will my child get a certificate upon completed workshop sessions?",
    answer: "Absolutely! After completing key laboratory checkpoints, students will receive an official, print-ready Digital Certificate of Achiever (AI & Robotics Junior Engineer), featuring a customizable verification link displaying a digital portfolio of their personal student project builds.",
    category: "Certification"
  }
];
