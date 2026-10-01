import { FooterSection } from "@/components/sections/footer-section";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Stealf",
  description: "How Stealf collects, uses, and protects your data.",
};

function DataTable({
  headers,
  rows,
}: {
  headers: [string, string, string];
  rows: [string, string, string][];
}) {
  return (
    <div className="overflow-x-auto border border-border rounded-lg">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-secondary/30">
            {headers.map((header) => (
              <th
                key={header}
                className="text-left px-4 py-3 font-medium text-foreground"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-muted-foreground">
          {rows.map(([first, second, third]) => (
            <tr key={first} className="border-b border-border last:border-b-0">
              <td className="px-4 py-3 text-foreground">{first}</td>
              <td className="px-4 py-3">{second}</td>
              <td className="px-4 py-3">{third}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      <div className="flex-1 w-full max-w-3xl mx-auto px-6 py-12 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="size-4" />
          Back
        </Link>

        <article className="space-y-10 leading-relaxed">
          <header className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              Last Updated: October 1, 2026
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              1. Introduction
            </h2>
            <p className="text-muted-foreground">
              Stealf Corporation, a Delaware corporation (&quot;Stealf&quot;,
              &quot;we&quot;, &quot;us&quot;), runs the Stealf mobile app and
              the website at stealf.xyz (the &quot;Service&quot;). This policy
              explains what personal data we collect, why, who receives it, how
              long we keep it and what you can do about it. For the purposes of
              the EU and UK General Data Protection Regulation (GDPR), Stealf
              Corporation is the controller of the data described here.
            </p>
            <p className="text-muted-foreground">
              We built Stealf around keeping your financial activity yours, so
              we try to collect as little as we can. We&apos;d rather be precise
              about what we do keep than make broad promises. This policy goes
              with our{" "}
              <Link href="/terms" className="text-foreground hover:underline">
                Terms of Use
              </Link>
              ; where they mention privacy features, section 7 of the Terms
              explains what those features hide and what stays visible.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              2. What We Collect
            </h2>
            <DataTable
              headers={["Category", "What it includes", "Where it comes from"]}
              rows={[
                [
                  "Account",
                  "Email address (stored encrypted, plus a one-way hash used to look up your account), pseudonym, sign-in method, Turnkey account identifier, account status, sign-up and last sign-in dates",
                  "You, and Turnkey when you sign in",
                ],
                [
                  "Wallet",
                  "Your public Solana wallet address",
                  "Created through Turnkey when you sign up",
                ],
                [
                  "Public on-chain activity",
                  "Public balances and transaction history of your wallet, kept in a short-lived server cache so the app updates in real time",
                  "Read from the Solana blockchain through Helius",
                ],
                [
                  "Points",
                  "Your points balance",
                  "Our records of your activity in the app",
                ],
                [
                  "Gift-card orders",
                  "Product, country and currency, amount, order and invoice identifiers, payment address, amount paid, any Umbra fee, order status and dates",
                  "You, Bitrefill and the Solana blockchain",
                ],
                [
                  "Diagnostics and usage",
                  "IP address, device model, operating system, app version, crash reports and error logs, in-app usage events; all linked to your account identifier so we can fix problems on your account",
                  "Your device, through Sentry and PostHog",
                ],
                ["Messages", "Anything you send us by email", "You"],
              ]}
            />
            <p className="text-muted-foreground">
              We don&apos;t collect your name, phone number, postal address,
              government ID or bank details.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              3. What We Don&apos;t Collect, and What We Can&apos;t See
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <span className="text-foreground">Private keys.</span> Your
                wallet&apos;s private key is generated and held inside
                Turnkey&apos;s secure hardware environments. We never receive
                it, and we can&apos;t use it to sign anything.
              </li>
              <li>
                <span className="text-foreground">Your private balance.</span>{" "}
                Amounts in your private balance are encrypted by the Umbra
                protocol. Our servers never store or cache them.
              </li>
              <li>
                <span className="text-foreground">Biometrics.</span> Face ID,
                Touch ID or fingerprint unlock runs entirely on your phone. We
                only learn whether it succeeded.
              </li>
              <li>
                <span className="text-foreground">Gift-card codes.</span>{" "}
                Bitrefill delivers the code to you; we don&apos;t keep it.
              </li>
              <li>
                <span className="text-foreground">Identity documents.</span> We
                don&apos;t run identity checks today, so we hold no ID scans,
                selfies or similar data.
              </li>
            </ul>
            <p className="text-muted-foreground">
              One thing we do keep, and you should know about: when you pay for
              a gift card from your private balance, our order record shows the
              amount, the time and the Bitrefill payment address, tied to your
              account. The payment stays private on-chain, but our database
              knows it was you. We keep these records to track orders and
              recover failed ones.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              4. How We Use Your Data, and on What Legal Basis
            </h2>
            <DataTable
              headers={["Purpose", "Data used", "Legal basis (GDPR)"]}
              rows={[
                [
                  "Create your account and sign you in",
                  "Account, wallet",
                  "Performance of our contract with you",
                ],
                [
                  "Show your balances and history in real time",
                  "Wallet, public on-chain activity",
                  "Performance of our contract with you",
                ],
                [
                  "Process and recover gift-card orders",
                  "Gift-card orders, account",
                  "Performance of our contract with you",
                ],
                [
                  "Run points programs and check eligibility for any future rewards",
                  "Points, wallet, account",
                  "Performance of our contract with you (the program's rules)",
                ],
                [
                  "Find and fix bugs, keep the Service secure, prevent abuse",
                  "Diagnostics and usage, account",
                  "Our legitimate interest in a working, secure app",
                ],
                [
                  "Understand how features are used so we can improve them",
                  "Diagnostics and usage",
                  "Your consent where the law requires it (including in the EU); otherwise our legitimate interest",
                ],
                [
                  "Send sign-in codes and important service notices",
                  "Email",
                  "Performance of our contract with you",
                ],
                [
                  "Send product news",
                  "Email",
                  "Your consent; you can opt out at any time",
                ],
                [
                  "Meet legal obligations and answer lawful requests",
                  "Any of the above, only as needed",
                  "Legal obligation",
                ],
              ]}
            />
            <p className="text-muted-foreground">
              We don&apos;t sell your data, share it for advertising or use it
              to build advertising profiles. We don&apos;t make automated
              decisions about you that have legal or similar effects. Using the
              Service isn&apos;t the same as consenting to everything here;
              where we rely on consent, we&apos;ll ask for it separately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              5. Who Receives Your Data
            </h2>
            <p className="text-muted-foreground">
              Service providers that work for us only process data on our
              instructions:
            </p>
            <DataTable
              headers={["Provider", "What they do for us", "What they receive"]}
              rows={[
                [
                  "Turnkey",
                  "Wallet keys and sign-in (OAuth, email codes)",
                  "Email, sign-in details, wallet address",
                ],
                [
                  "MongoDB Atlas",
                  "Database",
                  "Account data, points, gift-card orders",
                ],
                [
                  "Railway",
                  "Hosting our backend",
                  "Everything our backend processes, including the real-time cache",
                ],
                [
                  "Helius",
                  "Solana data access",
                  "Wallet addresses (public on-chain)",
                ],
                [
                  "Resend",
                  "Sending sign-in and service emails",
                  "Email address",
                ],
                [
                  "Sentry",
                  "Error and crash monitoring",
                  "Diagnostics linked to your account identifier",
                ],
                [
                  "PostHog",
                  "Product analytics",
                  "Usage events linked to your account identifier",
                ],
              ]}
            />
            <p className="text-muted-foreground">
              When you use a feature, the third party behind it also receives
              what it needs to run it, under its own privacy policy:
            </p>
            <DataTable
              headers={["Third party", "Feature", "What they receive"]}
              rows={[
                [
                  "Umbra and Arcium",
                  "Private balance and transfers",
                  "Wallet address and transaction data; amounts in encrypted form",
                ],
                [
                  "Jupiter",
                  "Swaps and xStocks",
                  "Wallet address and swap details",
                ],
                [
                  "Jito",
                  "Liquid staking",
                  "Wallet address and staking transactions",
                ],
                [
                  "Backed Assets",
                  "xStocks issuer",
                  "On-chain transactions involving xStocks",
                ],
                [
                  "Bitrefill",
                  "Gift cards",
                  "Product, amount and payment details; not your email",
                ],
                ["CoinGecko", "Price data", "No personal data"],
              ]}
            />
            <p className="text-muted-foreground">
              If the app calls one of these services directly from your phone,
              that service may also see your IP address. We may also disclose
              data where the law requires it, to protect people&apos;s safety or
              our rights, or to a buyer if Stealf is acquired; the buyer would
              then be bound by this policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              6. Blockchain Data and Umbra
            </h2>
            <p className="text-muted-foreground">
              Everything on your public balance is recorded on Solana, where
              anyone can read it and nobody, including us, can change or delete
              it. Your rights under section 9 apply to the data we hold, not to
              the blockchain.
            </p>
            <p className="text-muted-foreground">
              Private features run on the Umbra protocol, operated by Phoenix
              DAO LLC, which handles data under its own{" "}
              <a
                href="https://app.umbraprivacy.com/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:underline"
              >
                Privacy Policy
              </a>
              . Umbra&apos;s SDK, which we use, doesn&apos;t send personal data
              or telemetry to Phoenix DAO by default, and Umbra doesn&apos;t ask
              for your identity.
            </p>
            <p className="text-muted-foreground">
              Privacy features reduce what others can see on-chain; they
              don&apos;t make you anonymous. Timing, amounts and other metadata
              can still link activity together, and authorities can legally
              require you to disclose viewing keys. Section 7 of our{" "}
              <Link href="/terms" className="text-foreground hover:underline">
                Terms of Use
              </Link>{" "}
              explains what stays visible.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              7. International Transfers
            </h2>
            <p className="text-muted-foreground">
              Stealf is a US company, and most of our providers store data in
              the United States. If you use Stealf from the European Economic
              Area, the UK or Switzerland, your data is transferred there. We
              rely on the EU-US Data Privacy Framework where a provider is
              certified under it, and on the European Commission&apos;s Standard
              Contractual Clauses otherwise. You can ask us for a copy of the
              safeguards that apply.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              8. How Long We Keep Data
            </h2>
            <div className="overflow-x-auto border border-border rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left px-4 py-3 font-medium text-foreground">
                      Data
                    </th>
                    <th className="text-left px-4 py-3 font-medium text-foreground">
                      How long
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    [
                      "Account, wallet address, points",
                      "While your account is open, then deleted within 90 days of closing it",
                    ],
                    [
                      "Gift-card orders",
                      "While your account is open, then deleted within 90 days of closing it",
                    ],
                    [
                      "Real-time balance and history cache",
                      "Refreshed continuously; not kept as a lasting record",
                    ],
                    ["Crash reports and error logs (Sentry)", "30 days"],
                    ["Usage events (PostHog)", "12 months"],
                    [
                      "Emails you send us",
                      "As long as needed to handle your request, then up to 2 years",
                    ],
                  ].map(([data, duration]) => (
                    <tr
                      key={data}
                      className="border-b border-border last:border-b-0"
                    >
                      <td className="px-4 py-3 text-foreground">{data}</td>
                      <td className="px-4 py-3">{duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground">
              We may keep some data longer where the law requires it or to
              settle a dispute. On-chain data stays on Solana permanently.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              9. Your Rights
            </h2>
            <p className="text-muted-foreground">
              If you&apos;re in the EEA, the UK or Switzerland, you can ask us
              to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                give you a copy of your data, or send it to you in a portable
                format;
              </li>
              <li>correct it if it&apos;s wrong;</li>
              <li>delete it;</li>
              <li>
                stop or limit certain processing, including anything based on
                our legitimate interests;
              </li>
              <li>
                withdraw a consent you gave, without affecting what we did
                before.
              </li>
            </ul>
            <p className="text-muted-foreground">
              You can also complain to your local data protection authority; in
              France, that&apos;s the CNIL (
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:underline"
              >
                cnil.fr
              </a>
              ).
            </p>
            <p className="text-muted-foreground">
              If you&apos;re a California resident, you can ask what personal
              information we collect and how we use it, and ask us to delete it.
              We don&apos;t sell or share personal information for
              cross-context advertising, and we won&apos;t treat you differently
              for using these rights.
            </p>
            <p className="text-muted-foreground">
              To use any of these rights, email{" "}
              <a
                href="mailto:louis@stealf.xyz"
                className="text-foreground hover:underline"
              >
                louis@stealf.xyz
              </a>{" "}
              from the address linked to your account, so we can confirm
              it&apos;s you. We&apos;ll reply within one month. Deleting your
              account deletes the data we hold, but it can&apos;t touch your
              wallet or anything on-chain; your funds stay yours, reachable with
              your keys.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              10. Security
            </h2>
            <p className="text-muted-foreground">
              We encrypt data in transit (HTTPS and secure WebSockets) and at
              rest, encrypt your email in our database, limit who on our team
              can access production data, rate-limit our APIs and monitor for
              abuse. No system is fully secure, though. If a breach puts your
              data at risk, we&apos;ll tell you and the relevant authorities as
              the law requires. Keeping your phone and your Turnkey login safe
              is up to you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              11. Children
            </h2>
            <p className="text-muted-foreground">
              Stealf is for people aged 18 and over. We don&apos;t knowingly
              collect data from anyone younger; if you think a minor has an
              account, tell us and we&apos;ll delete it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              12. Changes to This Policy
            </h2>
            <p className="text-muted-foreground">
              When we change this policy, we&apos;ll post the new version here
              with a new &quot;Last Updated&quot; date. For material changes,
              such as collecting a new kind of data or using it for a new
              purpose, we&apos;ll tell you in the app or by email before the
              change takes effect.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">13. Contact</h2>
            <address className="not-italic text-muted-foreground space-y-1">
              <div className="text-foreground">Stealf Corporation</div>
              <div>1111b South Governors Avenue, STE 40928</div>
              <div>Dover, DE 19904, United States</div>
              <div>
                Privacy questions and requests:{" "}
                <a
                  href="mailto:louis@stealf.xyz"
                  className="text-foreground hover:underline"
                >
                  louis@stealf.xyz
                </a>
              </div>
              <div>
                Security reports:{" "}
                <a
                  href="mailto:thomas@stealf.xyz"
                  className="text-foreground hover:underline"
                >
                  thomas@stealf.xyz
                </a>
              </div>
            </address>
          </section>
        </article>
      </div>

      <FooterSection />
    </main>
  );
}
