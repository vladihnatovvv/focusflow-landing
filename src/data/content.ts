import type { LucideIcon } from "lucide-react";
import { BarChart3, BellOff, CalendarClock, Headphones, RefreshCw, Timer } from "lucide-react";

export interface NavLink {
    label: string;
    href: string;
}

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface Step {
    title: string;
    description: string;
}

export interface Plan {
    name: string;
    description: string;
    monthly: number;
    yearly: number;
    features: string[];
    cta: string;
    highlighted?: boolean;
    perUser?: boolean;
}

export interface Testimonial {
    quote: string;
    name: string;
    role: string;
    initials: string;
}

export const navLinks: NavLink[] = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" }
];

export const features: Feature[] = [
    {
        icon: Timer,
        title: "Adaptive focus timer",
        description: "Sessions that stretch or shrink to your energy. FocusFlow learns when you work best and suggests the right length."
    },
    {
        icon: BellOff,
        title: "Distraction shield",
        description: "Block noisy apps and notifications during a session, with a gentle unlock if something truly urgent comes up."
    },
    {
        icon: CalendarClock,
        title: "Calendar-aware planning",
        description: "Syncs with Google and Outlook to find your free blocks and protect them for deep work automatically."
    },
    {
        icon: BarChart3,
        title: "Insights that make sense",
        description: "Weekly reports show your focus peaks, streaks and what pulls you off track — without drowning you in charts."
    },
    {
        icon: Headphones,
        title: "Focus soundscapes",
        description: "Curated rain, café and brown-noise mixes designed to keep your mind in the zone for longer."
    },
    {
        icon: RefreshCw,
        title: "Sync everywhere",
        description: "Start on your phone, finish on your laptop. Sessions and tasks stay in sync across iOS, Android and web."
    }
];

export const steps: Step[] = [
    {
        title: "Set your intention",
        description: "Pick one task and how long you want to focus. FocusFlow suggests a session length based on your rhythm."
    },
    {
        title: "Enter the flow",
        description: "Hit start. Distractions are muted, a soundscape fades in and the timer quietly keeps you on track."
    },
    {
        title: "Review and grow",
        description: "Take a mindful break, log what you finished and watch your focus streak and weekly insights build up."
    }
];

export const plans: Plan[] = [
    {
        name: "Starter",
        description: "Everything you need to build a daily focus habit.",
        monthly: 0,
        yearly: 0,
        features: ["Unlimited focus sessions", "Basic distraction blocking", "3 soundscapes", "7-day history"],
        cta: "Start for free"
    },
    {
        name: "Pro",
        description: "For people who want to go deeper and track progress.",
        monthly: 6,
        yearly: 4,
        features: ["Everything in Starter", "Adaptive timer & smart breaks", "Calendar sync", "Full insights & weekly reports", "All soundscapes"],
        cta: "Try Pro free for 14 days",
        highlighted: true
    },
    {
        name: "Team",
        description: "Shared focus time and healthy habits for teams.",
        monthly: 12,
        yearly: 9,
        features: ["Everything in Pro", "Shared “quiet hours” for teams", "Team focus dashboard", "Slack & Teams status sync", "Priority support"],
        cta: "Contact sales",
        perUser: true
    }
];

export interface FooterLinkGroup {
    title: string;
    links: NavLink[];
}

export const footerLinks: FooterLinkGroup[] = [
    {
        title: "Product",
        links: [
            { label: "Features", href: "#features" },
            { label: "How it works", href: "#how-it-works" },
            { label: "Pricing", href: "#pricing" },
            { label: "Download", href: "#top" }
        ]
    },
    {
        title: "Company",
        links: [
            { label: "About", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Press kit", href: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Cookies", href: "#" }
        ]
    }
];

export const testimonials: Testimonial[] = [
    {
        quote: "I used to end the day busy but with nothing finished. After a month with FocusFlow I ship my most important task before lunch almost every day.",
        name: "Olena Kravets",
        role: "Product Designer",
        initials: "OK"
    },
    {
        quote: "The distraction shield is the killer feature. It blocks just enough to keep me honest without making me feel locked out of my own phone.",
        name: "Marcus Lee",
        role: "Software Engineer",
        initials: "ML"
    },
    {
        quote: "We rolled out Team plan to 40 people. Shared quiet hours alone cut our meeting creep and people actually talk about their focus streaks now.",
        name: "Sofia Martín",
        role: "Head of Operations",
        initials: "SM"
    }
];

export const stats = [
    { value: "250k+", label: "active users" },
    { value: "4.8", label: "App Store rating" },
    { value: "+38%", label: "avg. focus time" }
];
