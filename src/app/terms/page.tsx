import { FooterSection } from "@/components/sections/footer-section";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Stealf",
  description: "The terms that govern your use of Stealf.",
};

export default function TermsPage() {
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
              Terms of Use
            </h1>
            <p className="text-sm text-muted-foreground">
              Last Updated: October 24, 2026
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              1. Introduction
            </h2>
            <p className="text-muted-foreground">
              Stealf is a self-custodial, privacy-focused financial app on
              Solana, operated by Stealf Corporation, a Delaware corporation
              (&quot;Stealf&quot;, &quot;we&quot;, &quot;our&quot;,
              &quot;us&quot;). These Terms of Use (&quot;Terms&quot;) are a
              binding agreement between you and us, and they cover the Stealf
              mobile app, the website at stealf.xyz and any related services
              (together, the &quot;Service&quot;).
            </p>
            <p className="text-muted-foreground">
              By downloading, accessing or using the Service, you agree to these
              Terms and to our{" "}
              <Link
                href="/privacy"
                className="text-foreground hover:underline"
              >
                Privacy Policy
              </Link>
              . If you don&apos;t agree, don&apos;t use the Service.
            </p>
            <p className="text-muted-foreground">
              <span className="text-foreground">What we store.</span> To run the
              Service, we keep a small set of data: your email address
              (encrypted, used to sign you in and contact you), a pseudonym,
              your Turnkey account identifier, your public wallet address, your
              points balance, and records of your gift-card orders (product,
              amount, status and payment details) so we can track them and
              recover a failed order. Our servers also keep a temporary cache of
              your public balance and transaction history so the app can update
              in real time. We never hold your private keys, and our servers
              never store or cache your private balance. Retention periods and
              the providers we use are set out in our Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              2. What Stealf Is, and What It Isn&apos;t
            </h2>
            <p className="text-muted-foreground">
              Stealf is a software company. We build an interface that lets you
              use your own wallet with third-party protocols on Solana. We are
              not a bank, a money transmitter, a broker, an investment adviser
              or a regulated financial institution, and we never hold, pool or
              move your funds for you. Nothing in the Service is a bank deposit,
              and none of it is covered by deposit insurance.
            </p>
            <p className="text-muted-foreground">
              The Service is in early access. Features are still changing, some
              are rolled out progressively, and the app may behave in ways we
              didn&apos;t expect. The Stealf app itself has not yet been audited
              by an independent security firm. The protocols we connect to have
              been audited by independent firms, and their providers publish
              those reports. Those audits cover the providers&apos; code, not
              ours, and no audit rules out every bug.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              3. Eligibility
            </h2>
            <p className="text-muted-foreground">
              By using the Service, you confirm that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                you&apos;re at least 18 and legally able to enter into these
                Terms;
              </li>
              <li>
                you aren&apos;t located in, or a resident of, a country or
                region under comprehensive sanctions (currently including Cuba,
                Iran, North Korea and the Crimea, so-called Donetsk People&apos;s
                Republic and Luhansk People&apos;s Republic regions of Ukraine),
                and you aren&apos;t on a sanctions list kept by the United
                States, the European Union, the United Kingdom or the United
                Nations;
              </li>
              <li>
                using the Service, including privacy-enhancing features, is
                legal where you live and where you are;
              </li>
              <li>
                you understand how self-custodial wallets work, including that
                blockchain transactions can&apos;t be reversed.
              </li>
            </ul>
            <p className="text-muted-foreground">
              Some features carry extra geographic limits, described in their
              own sections. We may block, limit or end access to any feature
              where we believe the law requires it, including based on your IP
              address, device signals or other location indicators. Don&apos;t
              use a VPN or similar tool to get around these limits.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              4. What Stealf Provides
            </h2>
            <p className="text-muted-foreground">
              The Service is an interface to the following, each run by a third
              party:
            </p>
            <div className="overflow-x-auto border border-border rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left px-4 py-3 font-medium text-foreground">
                      Feature
                    </th>
                    <th className="text-left px-4 py-3 font-medium text-foreground">
                      Provided by
                    </th>
                    <th className="text-left px-4 py-3 font-medium text-foreground">
                      Section
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    [
                      "Self-custodial Solana wallet, with a public balance and, once registered with Umbra, a private balance",
                      "Turnkey (key infrastructure)",
                      "6",
                    ],
                    [
                      "Private transfers and shielded balances",
                      "Umbra protocol, built on Arcium",
                      "7",
                    ],
                    [
                      "Token swaps",
                      "Jupiter and the liquidity sources it routes to",
                      "8",
                    ],
                    ["Liquid staking (JitoSOL)", "Jito stake pool", "9"],
                    ["Gift cards", "Bitrefill and the issuing merchants", "10"],
                  ].map(([feature, provider, section]) => (
                    <tr
                      key={feature}
                      className="border-b border-border last:border-b-0"
                    >
                      <td className="px-4 py-3 text-foreground">{feature}</td>
                      <td className="px-4 py-3">{provider}</td>
                      <td className="px-4 py-3">{section}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground">
              We may add, change or remove features and providers at any time.
              Cash-out to a bank account, payment cards and identity
              verification aren&apos;t part of the Service today; if we add
              them, we&apos;ll update these Terms first.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">5. Fees</h2>
            <p className="text-muted-foreground">
              Stealf charges no fees and takes no commission. We don&apos;t add
              a margin to swaps, staking, private transfers or gift cards, we don&apos;t take a referral cut from the providers we
              route to, and there&apos;s no subscription.
            </p>
            <p className="text-muted-foreground">
              Other parties still charge for what they run, and those costs show
              up in the quote or rate you see before you confirm:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Solana network and priority fees;</li>
              <li>
                fees and price impact from the liquidity pools Jupiter routes
                through;
              </li>
              <li>
                Umbra protocol fees on shielded deposits, private transfers and
                withdrawals, and relayer fees;
              </li>
              <li>
                fees the Jito stake pool takes from staking rewards or on
                withdrawal;
              </li>
              <li>Bitrefill&apos;s pricing on gift cards.</li>
            </ul>
            <p className="text-muted-foreground">
              If we ever start charging, we&apos;ll tell you in the app at least
              30 days beforehand and show the fee before every transaction it
              applies to. A fee will never apply to a transaction you confirmed
              before the change.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              6. Self-Custody and Your Keys
            </h2>
            <p className="text-muted-foreground">
              You hold your assets; we don&apos;t. The app creates one Solana
              wallet for you, and its private key is never in our hands.
            </p>
            <p className="text-muted-foreground">
              Your wallet runs on Turnkey&apos;s key infrastructure. Its private
              key is generated and kept inside Turnkey&apos;s secure hardware
              environments, and you sign in through OAuth or email. Stealf
              can&apos;t see that key, export it or sign transactions with it.
            </p>
            <p className="text-muted-foreground">
              <span className="text-foreground">Two balances, one wallet.</span>{" "}
              Your public balance sits in standard Solana token accounts that
              anyone can see on a block explorer. When you register your wallet
              with Umbra, you also get a private balance whose amounts are
              encrypted inside the Umbra protocol (see section 7). The keys
              Umbra needs are derived from a signature by your wallet, so the
              same Turnkey wallet controls both balances.
            </p>
            <p className="text-muted-foreground">
              That also means a single point of failure: if you lose access to
              your login and Turnkey recovery methods, you lose access to both
              balances, and nobody, including us, can restore it.
            </p>
            <p className="text-muted-foreground">
              You&apos;re responsible for keeping your phone, login and recovery
              methods safe, for checking every transaction before you sign it,
              and for understanding what each operation does. Transactions on
              Solana are final once confirmed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              7. Private Transfers (Umbra)
            </h2>
            <p className="text-muted-foreground">
              Private balances and private transfers run on the Umbra protocol,
              operated by Phoenix DAO LLC (Republic of the Marshall Islands),
              which relies on Arcium&apos;s encrypted computation network. When
              you first turn these features on, you also accept Umbra&apos;s{" "}
              <a
                href="https://app.umbraprivacy.com/legal/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:underline"
              >
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a
                href="https://app.umbraprivacy.com/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:underline"
              >
                Privacy Policy
              </a>
              . Where they conflict with
              these Terms on how the protocol itself works, Umbra&apos;s terms
              control.
            </p>
            <p className="text-muted-foreground">
              Read those documents; the points below matter most.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <span className="text-foreground">
                  Privacy isn&apos;t guaranteed.
                </span>{" "}
                It reduces what others can see on-chain, but timing, amounts,
                metadata and future advances in cryptography can all weaken it.
              </li>
              <li>
                <span className="text-foreground">What stays visible.</span>{" "}
                Your public balance and its history are public. Your private
                balance is attached to your wallet: others can see that your
                wallet uses Umbra and when you move funds in or out, even though
                the amounts held privately are encrypted. Private transfers
                through Umbra&apos;s pool are what break the link between
                sender and recipient. Moving an exact amount out of your private
                balance right before you spend it makes it easier to connect the
                two.
              </li>
              <li>
                <span className="text-foreground">
                  Screening and relayers.
                </span>{" "}
                Umbra may screen deposits for sanctions or risk and refuse some.
                Withdrawals depend on independent relayers, so an outage can
                delay or block a transfer for a while.
              </li>
              <li>
                <span className="text-foreground">Disclosure.</span> Viewing
                keys let you share your history with an auditor or accountant.
                Keep them safe; authorities may legally require you to hand them
                over.
              </li>
              <li>
                <span className="text-foreground">Legality.</span> Don&apos;t
                use private features where privacy-enhancing technology is
                restricted.
              </li>
            </ul>
            <p className="text-muted-foreground">
              Stealf doesn&apos;t operate Umbra or Arcium and isn&apos;t
              responsible for how either works, fails or changes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              8. Swaps
            </h2>
            <p className="text-muted-foreground">
              Swaps go through Jupiter, which picks a route across decentralized
              exchanges. We don&apos;t set prices or choose routes, and we
              can&apos;t guarantee execution. The price can move between the
              quote and the moment your transaction lands, because of slippage,
              liquidity or network load. A confirmed swap is final.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              9. Liquid Staking (JitoSOL)
            </h2>
            <p className="text-muted-foreground">
              You can turn SOL into JitoSOL, a token from the Jito stake pool
              that represents staked SOL and grows in value as staking and MEV
              rewards come in. You get JitoSOL by depositing into the Jito stake
              pool. Stealf doesn&apos;t run the pool, pick its
              validators or hold your JitoSOL.
            </p>
            <p className="text-muted-foreground">Before you stake, know that:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                rewards vary with network conditions and validator performance,
                and can drop;
              </li>
              <li>
                the pool&apos;s smart contracts or the validators it delegates
                to can fail or be exploited;
              </li>
              <li>
                getting back to SOL may take until the end of the current Solana
                epoch (often around two days), or cost you a discount if you
                swap out on the market instead;
              </li>
              <li>
                JitoSOL can trade below its underlying value, especially when
                markets are stressed;
              </li>
              <li>
                the Jito pool takes its own fees, as set out in Jito&apos;s
                documentation.
              </li>
            </ul>
            <p className="text-muted-foreground">
              We don&apos;t promise any return, and we don&apos;t promise
              you&apos;ll get back the SOL you put in.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              10. Gift Cards
            </h2>
            <p className="text-muted-foreground">
              Gift cards are digital vouchers sold and delivered by Bitrefill
              and issued by each merchant. You pay in crypto from your wallet,
              and Bitrefill&apos;s terms apply to the purchase. Which cards you
              can buy, and where they work, depends on the merchant and your
              country.
            </p>
            <p className="text-muted-foreground">
              Once a code is delivered, the purchase is final and can&apos;t be
              refunded, except where the law says otherwise. Check the country,
              currency and amount before you pay. Expiry, acceptance and usage
              rules are set by the merchant, not by us; for problems with a
              code, contact Bitrefill support first, and we&apos;ll help where
              we can.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              11. Acceptable Use
            </h2>
            <p className="text-muted-foreground">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                break any law or sanction, or use the Service for money
                laundering, terrorist financing, fraud or sanctions evasion;
              </li>
              <li>
                use private features to hide the proceeds of crime or to get
                around a provider&apos;s screening;
              </li>
              <li>get around geographic limits, including with a VPN;</li>
              <li>
                reverse engineer, scrape or decompile the app or our backend,
                except where the law allows it;
              </li>
              <li>
                disrupt the Service, abuse rate limits or create automated or
                fake accounts;
              </li>
              <li>
                use the Service in a way that harms Stealf, other users or
                anyone else.
              </li>
            </ul>
            <p className="text-muted-foreground">
              If you do, we may cut off your access to our interface and report
              you where the law requires. We can&apos;t freeze or move funds in
              your wallet.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              12. Third-Party Services
            </h2>
            <p className="text-muted-foreground">
              The Service connects to providers that run under their own terms:
              Turnkey (keys and sign-in), Umbra and Arcium (private transfers),
              Jupiter (swaps), Jito (liquid staking),
              Bitrefill (gift cards) and Helius (Solana infrastructure). We may
              add, swap or drop providers. We aren&apos;t responsible for their
              outages, fees, policies, data handling or failures, or for any
              on-chain protocol.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">13. Taxes</h2>
            <p className="text-muted-foreground">
              You&apos;re responsible for working out, reporting and paying any
              taxes on your activity, including swaps, staking rewards and
              private transfers. We don&apos;t give tax advice or file anything
              for you. Keep your own records; your viewing keys can help you
              rebuild private transaction history for an accountant.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              14. Campaigns and Rewards
            </h2>
            <p className="text-muted-foreground">
              We may run waitlist perks, referral programs, giveaways or similar
              campaigns, each with its own rules shown when it starts. We decide
              who&apos;s eligible, and we may change, pause or end a campaign,
              or withhold a reward in cases of fraud, abuse or a breach of these
              Terms. You may earn points for using the Service. Points have no
              cash value, can&apos;t be sold or transferred, and aren&apos;t an
              investment. Holding points doesn&apos;t promise you any token,
              airdrop, allocation or price. If we ever run an airdrop, it will
              come with its own terms and eligibility rules, and it may exclude
              some countries, including the United States.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              15. Disclaimers
            </h2>
            <p className="text-muted-foreground">
              The Service is provided &quot;as is&quot; and &quot;as
              available&quot;, without warranties of any kind, express or
              implied. In particular, we don&apos;t promise that the Service
              will be uninterrupted or free of bugs and vulnerabilities, that
              any feature, provider or protocol will stay available or stay
              solvent, or that you&apos;ll earn anything or avoid losses. We
              also don&apos;t promise that your activity will stay private (see
              section 7). Some places don&apos;t allow these disclaimers, so
              parts of this section may not apply to you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              16. Limitation of Liability
            </h2>
            <p className="text-muted-foreground">
              To the fullest extent the law allows, Stealf isn&apos;t liable for
              indirect, incidental, special, consequential or punitive damages,
              or for lost assets, profits, rewards, data or opportunities. That
              includes losses from market moves, depegs, exploits,
              smart-contract bugs, relayer or protocol failures, lost keys, your
              own mistakes, or anything a third-party provider does or fails to
              do.
            </p>
            <p className="text-muted-foreground">
              Our total liability for any claim connected to these Terms or the
              Service is capped at the greater of US$100 and the fees you paid
              us in the 12 months before the claim. Since we charge no fees
              today, that means US$100.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              17. Indemnity
            </h2>
            <p className="text-muted-foreground">
              Where the law allows, you&apos;ll cover Stealf&apos;s reasonable
              costs, including legal fees, for third-party claims that come from
              your breach of these Terms or your violation of a law or of
              someone else&apos;s rights. This doesn&apos;t apply to claims
              caused by our own fault, and it doesn&apos;t apply where consumer
              law prohibits it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              18. Your Consumer Rights
            </h2>
            <p className="text-muted-foreground">
              Nothing in these Terms takes away rights you have under consumer
              protection laws that can&apos;t be waived by contract, including
              those of the European Union and your country of residence. Where
              those laws apply, sections 15, 16, 17 and 19 apply only as far as
              those laws allow.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              19. Governing Law and Disputes
            </h2>
            <p className="text-muted-foreground">
              These Terms are governed by the laws of the State of Delaware and
              applicable US federal law, without regard to conflict-of-laws
              rules, unless mandatory consumer law where you live says
              otherwise.
            </p>
            <p className="text-muted-foreground">
              Where your local law permits it, disputes will go to binding
              individual arbitration in Wilmington, Delaware, under the American
              Arbitration Association&apos;s rules then in force, and you give
              up class actions and jury trials. If you live in the EU or the UK,
              this paragraph doesn&apos;t apply to you, and you can bring a
              claim in the courts of your country of residence. You can opt out
              of arbitration within 30 days of accepting these Terms by emailing{" "}
              <a
                href="mailto:louis@stealf.xyz"
                className="text-foreground hover:underline"
              >
                louis@stealf.xyz
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              20. App Store and Google Play
            </h2>
            <p className="text-muted-foreground">
              If you got the app from Apple&apos;s App Store, these Terms are
              between you and Stealf only, not Apple. Apple isn&apos;t
              responsible for the app, its content, support or maintenance, or
              for any claim about it, including product liability, legal
              compliance, consumer protection or intellectual property claims.
              If the app fails to meet a warranty that applies by law, you can
              notify Apple, which may refund the app&apos;s price (zero, since
              it&apos;s free); Apple has no other warranty duty. Your use must
              also follow the App Store&apos;s Usage Rules. Apple and its
              subsidiaries are third-party beneficiaries of these Terms and can
              enforce them against you. Similar terms apply to Google if you got
              the app from Google Play.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              21. Suspension and Termination
            </h2>
            <p className="text-muted-foreground">
              We may suspend or end your access to our interface at any time,
              including for a breach of these Terms or for legal, security or
              fraud reasons. You may stop using the Service whenever you want.
              Either way, your funds stay in your wallet, and you can reach them
              with your keys through any compatible wallet software. Sections 6,
              13, 15 to 19 and 23 survive termination.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              22. Changes to These Terms
            </h2>
            <p className="text-muted-foreground">
              We may update these Terms. We&apos;ll post the new version with a
              new &quot;Last Updated&quot; date, and for material changes
              we&apos;ll tell you in the app at least 15 days before they take
              effect. If you keep using the Service after that, you accept the
              new Terms; if you don&apos;t agree, stop using it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">23. General</h2>
            <p className="text-muted-foreground">
              If a court finds part of these Terms unenforceable, the rest stays
              in force. If we don&apos;t enforce a right right away, we
              haven&apos;t given it up. You can&apos;t transfer these Terms
              without our consent; we may transfer them as part of a merger,
              acquisition or sale of assets. We aren&apos;t liable for delays or
              failures caused by events outside our reasonable control, such as
              network outages, protocol failures or government action. These
              Terms and the Privacy Policy are the whole agreement between you
              and us about the Service. If we translate them, the English
              version controls.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">24. Contact</h2>
            <address className="not-italic text-muted-foreground space-y-1">
              <div className="text-foreground">Stealf Corporation</div>
              <div>1111b South Governors Avenue, STE 40928</div>
              <div>Dover, DE 19904, United States</div>
              <div>
                Legal questions and arbitration opt-out:{" "}
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
