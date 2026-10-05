import { BankWalletIllustration } from "@/components/illustrations/bank-wallet-illustration";
import { StealthWalletIllustration } from "@/components/illustrations/stealth-wallet-illustration";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "p-1 py-0.5 font-medium dark:font-semibold text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
};

export const BLUR_FADE_DELAY = 0.15;

// Single source of truth — referenced by hero, navbar, mobile drawer, and CTA section.
export const WAITLIST_URL = "https://form.typeform.com/to/ZA5GecRj";
export const DOCS_URL = "https://stealf-fi.gitbook.io/docs";

// App download links (beta).
export const TESTFLIGHT_URL = "https://testflight.apple.com/join/TXbFmeER";
export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.stealf.app";

export const siteConfig = {
  name: "Stealf",
  description:
    "Stealf is built on two layers: a stablecoin payment account to spend like cash anywhere, and a privacy layer on your wallet that keeps your funds yours.",
  cta: "Join Waitlist",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://stealf.xyz",
  keywords: [
    "Solana",
    "neobank",
    "privacy",
    "Umbra",
    "stealth wallet",
    "encrypted balance",
    "Turnkey",
    "Arcium",
    "self-custody",
    "stablecoin",
  ],
  links: {
    email: "louis@stealf.xyz",
    twitter: "https://x.com/STEALFxyz",
    discord: "https://discord.com/invite/7w2TFCm6Ft",
    github: "https://github.com/Stealf-finance",
    telegram: "https://t.me/+1KiIlJTX5WIzMmM0",
  },
  nav: {
    links: [
      { id: 1, name: "Home", href: "#hero" },
      { id: 2, name: "How it Works", href: "#bento" },
      { id: 3, name: "FAQ", href: "#faq" },
    ],
  },
  hero: {
    badgeIcon: (
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
        <span className="relative inline-flex size-1.5 rounded-full bg-foreground" />
      </span>
    ),
    badge: "Built on Solana",
    title: "The privacy layer for everyday finance",
    description:
      "Stealf is built on two layers: a stablecoin payment account to spend like cash anywhere, and a privacy layer on your wallet that keeps your funds yours.",
  },
  companyShowcase: {
    companyLogos: [
      {
        id: 1,
        name: "Arcium",
        role: "encrypted compute (MPC)",
        href: "https://www.arcium.com",
        logo: (
          <Image
            src="/icons-protocols/arcium.svg"
            alt="Arcium"
            width={140}
            height={32}
            className="h-7 w-auto object-contain brightness-0 invert opacity-85"
          />
        ),
      },
      {
        id: 2,
        name: "Umbra",
        role: "private transfers",
        href: "https://www.umbraprivacy.com",
        logo: (
          <Image
            src="/icons-protocols/umbra.svg"
            alt="Arcium"
            width={160}
            height={40}
            className="h-7 w-auto object-contain brightness-0 invert opacity-85"
          />
        ),
      },
      {
        id: 3,
        name: "Solana",
        role: "settlement",
        href: "https://solana.com/",
        logo: (
          <Image
            src="/icons-protocols/solana.svg"
            alt="Solana"
            width={140}
            height={32}
            className="h-9 w-auto object-contain brightness-0 invert opacity-85"
          />
        ),
      },
      {
        id: 4,
        name: "Turnkey",
        role: "key management (TEE)",
        href: "https://www.turnkey.com",
        logo: (
          <Image
            src="/icons-protocols/turnkey.svg"
            alt="Turnkey"
            width={140}
            height={32}
            className="h-9 w-auto object-contain brightness-0 invert opacity-85"
          />
        ),
      },
    ],
  },
  bentoSection: {
    title: "No on-chain link between them.",
    description:
      "Spend without revealing your wallet. Trade without revealing your identity.",
    items: [
      {
        id: 1,
        content: <BankWalletIllustration />,
        title: "Stablecoin account",
        description:
          "Your money for everyday life. Tap your card at the counter or send a transfer, on a compliant account wired to the real banking system. Secured by Turnkey.",
      },
      {
        id: 2,
        content: <StealthWalletIllustration />,
        title: "Your private wallet",
        description:
          "Yours, and only yours. Create it or import it; either way you hold the keys, and your transfers stay private. Powered by Umbra.",
      },
    ],
  },
  faqSection: {
    title: "Frequently Asked Questions",
    description:
      "Answers to the most common questions about Stealf. If something isn't covered here, reach out directly.",
    faQitems: [
      {
        id: 1,
        question: "Who is Stealf for?",
        answer:
          "Crypto-native users whose financial life already lives onchain: traders, freelancers paid in USDC, founders. They want to run their money from their phone and stay private by default, without giving up the cards and bank transfers they still rely on every day.",
      },
      {
        id: 2,
        question: "Does Stealf require identity verification?",
        answer:
          "Only for the banking side: cards, virtual account, bank transfers. The private wallet stays permissionless, and you can use it without ever passing KYC. We apply KYC where the law demands it, not across the whole product.",
      },
      {
        id: 3,
        question: "What is your current stage?",
        answer:
          "Stealf is in private beta with private transfers and the dual-layer architecture already live. We're currently raising our first round.",
      },
      {
        id: 4,
        question: "How can I contact the founders?",
        answer: "Reach us on Telegram: @CECOR2B",
      },
      {
        id: 5,
        question: "Is Stealf only available on Solana?",
        answer:
          "Yes. Arcium brings protocol-level confidentiality to Solana without giving up the liquidity and DeFi depth that make the chain worth using. Zcash and Monero solved privacy years ago, but neither has that ecosystem around it, so you'd be trading one problem for another.",
      },
      {
        id: 6,
        question: "Can I export my private keys?",
        answer:
          "Yes. Stealf is self-custodial. Turnkey holds your stablecoin account key inside a Trusted Execution Environment, so it's never exposed. Your private wallet key never leaves your device.",
      },
    ],
  },
  footerLinks: [
    {
      title: "Company",
      links: [
        { id: 1, title: "About", url: "#" },
        { id: 2, title: "Contact", url: "#" },
        { id: 3, title: "Blog", url: "#" },
        { id: 4, title: "Story", url: "#" },
      ],
    },
    {
      title: "Products",
      links: [
        { id: 5, title: "Company", url: "#" },
        { id: 6, title: "Product", url: "#" },
        { id: 7, title: "Press", url: "#" },
        { id: 8, title: "More", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { id: 9, title: "Press", url: "#" },
        { id: 10, title: "Careers", url: "#" },
        { id: 11, title: "Newsletters", url: "#" },
        { id: 12, title: "More", url: "#" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
