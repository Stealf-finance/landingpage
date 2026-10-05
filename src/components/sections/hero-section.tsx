import { GOOGLE_PLAY_URL, siteConfig, TESTFLIGHT_URL } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section id="hero" className="w-full relative">
      <div className="relative flex flex-col items-center w-full px-6">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 -z-10 w-full h-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] rounded-b-xl"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 35%, transparent 95%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 35%, transparent 95%)",
            }}
          ></div>
        </div>
        <div className="relative z-10 pt-12 md:pt-16 max-w-3xl mx-auto h-full w-full flex flex-col gap-10 items-center justify-center">
          <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2">
            {hero.badgeIcon}
            {hero.badge}
          </p>
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-center text-foreground">
              {hero.title}
            </h1>
            <p className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
              {hero.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href={TESTFLIGHT_URL}
              target="_blank"
              rel="noreferrer"
              className="block transition-all ease-out hover:opacity-85 active:scale-95"
            >
              <Image
                src="/store-badges/testflight-badge.png"
                alt="Get the beta on TestFlight"
                width={360}
                height={120}
                className="h-11 md:h-12 w-auto"
              />
            </Link>
            <Link
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noreferrer"
              className="block transition-all ease-out hover:opacity-85 active:scale-95"
            >
              <Image
                src="/store-badges/google-play-badge.svg"
                alt="Get it on Google Play"
                width={180}
                height={53}
                className="h-11 md:h-12 w-auto"
              />
            </Link>
          </div>
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto mt-16 md:mt-20 px-6">
          <Image
            src="/screens/stealth.png"
            alt="Stealf app preview"
            width={2664}
            height={2008}
            priority
            className="w-full h-auto"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 35%, transparent 95%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 35%, transparent 95%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
