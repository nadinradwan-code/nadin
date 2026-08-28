import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignosMedia from "@/components/signos/SignosMedia";
import {
  AiFramework,
  BudgetBlock,
  ColorPhysiology,
  FallbackFonts,
  PillarGrid,
  PricePlaceholders,
  ProductionQueue,
  StickerRow,
  TypeWidths,
} from "@/components/signos/SignosGraphics";
import {
  signosCredits,
  signosHero,
  signosIdeas,
  signosMeta,
  signosOutcomes,
  signosRisks,
  signosScope,
  signosContentColumns,
} from "@/lib/signos-case";
import { archivo, jetbrainsMono } from "@/lib/signos-fonts";
import "./signos-case.css";

export const metadata: Metadata = {
  title: signosMeta.title,
  description: signosMeta.description,
  openGraph: {
    title: `${signosMeta.title} — Nadin Radwan`,
    description: signosMeta.description,
  },
};

function ActLabel({ children }: { children: string }) {
  return <p className="signos-kicker">{children}</p>;
}

export default function SignosCaseStudyPage() {
  return (
    <article className={`${archivo.variable} ${jetbrainsMono.variable} signos-case`}>
      <header className="signos-hero">
        <div className="signos-wrap">
          <Image
            src="/images/projects/signos/case/logo/signos-lockup.svg"
            alt="Signos"
            className="signos-lockup"
            width={170}
            height={52}
            unoptimized
            priority
          />
          <p className="signos-kicker">{signosHero.kicker}</p>
          <h1 className="signos-display">
            {signosHero.title}
            <em> {signosHero.titleMark}</em>
          </h1>
          <p className="signos-deck">{signosHero.deck}</p>
          <ul className="signos-tags">
            {signosHero.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <p className="signos-intro">{signosHero.intro}</p>
        </div>
      </header>

      <div className="signos-wrap-wide">
        <SignosMedia
          src="/images/projects/signos/case/a01-hero.jpg"
          alt="Draw the Line campaign still: Signos wordmark and a member stretching outdoors with a CGM visible on her arm"
          id="A01"
          caption="Hero, full bleed. Campaign still from Draw the Line — the glucose line as brand, not just a graph."
          priority
          sizes="100vw"
        />
      </div>

      <section className="signos-section" aria-labelledby="thesis">
        <div className="signos-wrap">
          <ActLabel>Thesis</ActLabel>
          <h2 id="thesis" className="signos-h2">
            A smart friend with a degree in physiology
          </h2>
          <p className="signos-lede" style={{ marginTop: "1.25rem" }}>
            The category defaults to white coats and test tubes. Our customer is not looking for a clinic. The brand had to earn medical credibility without ever feeling clinical, then hold that voice from an in-app glucose curve to a billboard.
          </p>
          <PillarGrid />
          <p className="signos-copy" style={{ marginTop: "2.25rem" }}>
            Colour is physiology. The line runs hot and cold. Cerise is always a positive action — a CTA, a high you can do something with — never a warning, never a no. Gold is oversaturated. Violet is resting. Sky needs energy. Green is lean mass.
          </p>
          <ColorPhysiology />
        </div>
      </section>

      <section className="signos-section" aria-labelledby="role">
        <div className="signos-wrap">
          <ActLabel>Role · Scope · Outcomes</ActLabel>
          <h2 id="role" className="signos-h2">
            Sole visual designer, then art director
          </h2>
          <p className="signos-lede" style={{ marginTop: "1.25rem" }}>
            Senior Visual Designer from February 2022, Art Director from February 2025. Partnered with the VP of Design, marketing leadership, and product. The job was the whole expression, not a lane inside it.
          </p>
          <div className="signos-grid-3" style={{ marginTop: "2rem" }}>
            {signosScope.map((item) => (
              <article key={item.title} className="signos-card">
                <p className="signos-kicker">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="signos-grid-2" style={{ marginTop: "1.25rem" }}>
            {signosOutcomes.map((item) => (
              <article key={item.title} className="signos-card">
                <p className="signos-kicker">Outcome</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="signos-section" aria-labelledby="act-i">
        <div className="signos-wrap">
          <div className="signos-act">
            <ActLabel>Act I</ActLabel>
            <ActLabel>The rebrand</ActLabel>
          </div>
          <h2 id="act-i" className="signos-h2">
            Hold the mandate. Spend it on a system.
          </h2>
          <p className="signos-lede" style={{ marginTop: "1.25rem" }}>
            Brand advisor Andy Cunningham’s mandate was differentiation you can feel in a second and still trust in a medical context. I translated that into type, color, and rules a small team could actually ship against — not a poster that died in a deck.
          </p>
          <div className="signos-risks">
            {signosRisks.map((risk) => (
              <article key={risk.n}>
                <p className="signos-kicker">{risk.n}</p>
                <h3>{risk.title}</h3>
                <p>{risk.body}</p>
              </article>
            ))}
          </div>
          <TypeWidths />
          <p className="signos-copy signos-muted" style={{ marginTop: "1rem" }}>
            Archivo, extra-condensed through expanded. JetBrains Mono for data, labels, and numerals. Stone (#21263A) instead of black.
          </p>
        </div>
        <div className="signos-wrap-wide">
          <SignosMedia
            src="/images/projects/signos/signos-hero.png"
            alt="Signos S-mark in cerise, plus a grid of app icons filled with food textures"
            id="A04"
            caption="After: the mark, and the food-texture icon set. A brand you can eat with your eyes without looking like a grocery circular."
            ratio="16 / 9"
          />
          <div className="signos-grid-2" style={{ marginTop: "1.25rem" }}>
            {signosIdeas.map((idea) => (
              <article key={idea.title} className="signos-card">
                <p className="signos-kicker">Contributed</p>
                <h3>{idea.title}</h3>
                <p>{idea.body}</p>
              </article>
            ))}
          </div>
          <SignosMedia
            src="/images/projects/signos/signos-in-app.png"
            alt="Brand specification for glucose line construction, mapping color to metabolic state, with an in-app phone mockup"
            id="A03"
            caption="The line runs hot and cold. Brand construction on the left, the in-app curve on the right."
            ratio="16 / 10"
          />
          <div className="signos-grid-2" style={{ marginTop: "1.25rem" }}>
            <SignosMedia
              src="/images/projects/signos/case/app-home.jpg"
              alt="Signos iPhone app home screen showing current glucose, a predicted fast rise, and the color-graded curve"
              caption="In-app home. The curve, the prediction, and Stone type — brand and product in the same file."
              ratio="9 / 16"
              contain
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <SignosMedia
              src="/images/projects/signos/case/app-gal.jpg"
              alt="Signos app in a member's hand over a picnic, with food in the frame"
              caption="The same home screen in the world. Working with UI/UX on how the system carries into the hand."
              ratio="1 / 1"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="signos-section" aria-labelledby="act-ii">
        <div className="signos-wrap">
          <div className="signos-act">
            <ActLabel>Act II</ActLabel>
            <ActLabel>Two shoots</ActLabel>
          </div>
          <h2 id="act-ii" className="signos-h2">
            June, then November.
          </h2>
          <p className="signos-lede" style={{ marginTop: "1.25rem" }}>
            Two productions, five months apart. June 2025 was appetite and refusal — Food Fight and DON&apos;T WANT. November was the lookbook: kitchen, table, the brand at home in real rooms. Same system. Different temperature.
          </p>
        </div>
        <div className="signos-wrap-wide">
          <div className="signos-shoot-grid">
            <SignosMedia
              src="/images/projects/signos/case/food-burger.jpg"
              alt="Overhead of a burger and fries, high-appetite food photography"
              id="A08"
              caption="June 2025. Appetite as a brand register — the fight, not the salad."
              ratio="3 / 2"
            />
            <SignosMedia
              src="/images/projects/signos/case/kitchen-editorial.jpg"
              alt="Editorial kitchen still life with plated fish, herbs, and olive oil"
              id="A06"
              caption="November 2025 lookbook. The brand sitting at a table, not a seamless."
              ratio="4 / 5"
            />
          </div>
          <div className="signos-grid-2" style={{ marginTop: "1.25rem" }}>
            <SignosMedia
              src="/images/projects/signos/case/coastal-restaurant.jpg"
              alt="Couple dining outdoors at a coastal restaurant"
              caption="November, still. Range inside the lookbook — not every frame is a hero bowl."
              ratio="4 / 5"
            />
            <SignosMedia
              src="/images/projects/signos/case/editorial-portrait.jpg"
              alt="Editorial portrait in warm indoor light"
              caption="November, still. Faces in the system, not stock wellness."
              ratio="4 / 5"
            />
          </div>
          <BudgetBlock />
        </div>
      </section>

      <section className="signos-section" aria-labelledby="range">
        <div className="signos-wrap">
          <div className="signos-act">
            <ActLabel>Act II</ActLabel>
            <ActLabel>Range</ActLabel>
          </div>
          <h2 id="range" className="signos-h2">
            Times Square to a sticker on a pole
          </h2>
          <p className="signos-lede" style={{ marginTop: "1.25rem" }}>
            January 2023, Times Square. Later, guerilla stickers. In between, campaign work that went after the GLP-1 cultural moment on the brand’s terms — then, later, merchandising for the program itself. If it only worked at one scale, it was a campaign, not a system.
          </p>
        </div>
        <div className="signos-wrap-wide">
          <div className="signos-range-grid">
            <SignosMedia
              src="/images/projects/signos/case/a01-hero.jpg"
              alt="Draw the Line out-of-home style campaign frame"
              id="A09"
              caption="OOH register. The line as a physical object in the world — Times Square, January 2023, and the boards that followed."
              ratio="16 / 9"
            />
            <div>
              <SignosMedia
                src="/images/projects/signos/case/a01-hero-model.jpg"
                alt="Studio portrait of a woman in athletic wear with red headphones, mid-workout"
                caption="Campaign talent in the system. Energy as a color, not as a cliché leap."
                ratio="1 / 1"
              />
              <StickerRow />
              <p className="signos-caption">
                <span className="signos-id">A10</span>
                <span>Guerilla stickers. The same condensed voice, built to survive a lamp post.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="signos-section" aria-labelledby="systems">
        <div className="signos-wrap">
          <div className="signos-act">
            <ActLabel>Act III</ActLabel>
            <ActLabel>Why systems</ActLabel>
          </div>
          <h2 id="systems" className="signos-h2">
            The queue is the craft
          </h2>
          <p className="signos-lede" style={{ marginTop: "1.25rem" }}>
            In the launch week of August 2025 we shipped a new product, a rebuilt site, a new app interface, and a refreshed brand on the same week. That only works if the work is a queue of named jobs, not a pile of one-offs.
          </p>
          <div className="signos-systems" style={{ marginTop: "2rem" }}>
            <div>
              <p className="signos-kicker">A11 · The queue</p>
              <ProductionQueue />
            </div>
            <div className="signos-grid-3" style={{ gridTemplateColumns: "1fr" }}>
              {signosContentColumns.map((col) => (
                <article key={col.title} className="signos-card">
                  <h3>{col.title}</h3>
                  <p>{col.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="signos-section" aria-labelledby="email">
        <div className="signos-wrap">
          <div className="signos-act">
            <ActLabel>Act III</ActLabel>
            <ActLabel>Email</ActLabel>
          </div>
          <h2 id="email" className="signos-h2">
            If it fails over to Arial, it still has to be us
          </h2>
          <p className="signos-lede" style={{ marginTop: "1.25rem" }}>
            Email was the highest-volume customer touchpoint. Before the system, every send was a one-off. I built a modular library that shares components with the marketing site — header, footer, hero, product card, CTA — so marketing can assemble sends in Iterable without a designer in the loop, and a card fix improves both surfaces.
          </p>
          <FallbackFonts />
        </div>
        <div className="signos-wrap-wide">
          <SignosMedia
            src="/images/projects/signos/signos-marketing-ui.png"
            alt="Signos marketing UI kit: color tokens, type hierarchy, buttons, forms, and selection cards"
            id="A12"
            caption="Email library and the site it shares parts with. Fallback fonts are a first-class state, not an afterthought."
            ratio="16 / 10"
          />
        </div>
      </section>

      <section className="signos-section" aria-labelledby="ai">
        <div className="signos-wrap">
          <div className="signos-act">
            <ActLabel>Act IV</ActLabel>
            <ActLabel>AI as context</ActLabel>
          </div>
          <h2 id="ai" className="signos-h2">
            Everyone was already using AI. None of it looked like Signos.
          </h2>
          <p className="signos-lede" style={{ marginTop: "1.25rem" }}>
            Engineers in Cursor, marketing in ChatGPT, contractors wherever they liked. We already had the answer: a brand guide, a voice guide, a mobile design system, a brand library, an email component library. What was missing was the instruction to load them first.
          </p>
          <p className="signos-kicker" style={{ marginTop: "2rem" }}>
            A13 · AI context framework
          </p>
          <AiFramework />
        </div>
        <div className="signos-wrap-wide">
          <SignosMedia
            src="/images/projects/signos/signos-ai-variance-hero.png"
            alt="Grid of AI-assisted Signos ad concepts and refined vertical variants"
            caption="Two worked examples in one frame: strategy-model volume on top, design-reviewed refinement underneath. Verified volume is the GLP-1 launch library that ran out of these parts — not a vanity count."
            ratio="16 / 10"
          />
        </div>
      </section>

      <section className="signos-section" aria-labelledby="selling">
        <div className="signos-wrap">
          <div className="signos-act">
            <ActLabel>Act V</ActLabel>
            <ActLabel>Selling what we attacked</ActLabel>
          </div>
          <h2 id="selling" className="signos-h2">
            Merchandising the thing the culture already knew
          </h2>
          <p className="signos-lede" style={{ marginTop: "1.25rem" }}>
            The campaign work had already been in the GLP-1 conversation. Then the offer had to sit in the same system: vial renders, membership cards, partner pages. Pricing on this page stays in the placeholder state. The design problem was the object, not the number.
          </p>
          <PricePlaceholders />
        </div>
        <div className="signos-wrap-wide">
          <div className="signos-grid-2" style={{ marginTop: "1.5rem" }}>
            <SignosMedia
              src="/images/projects/signos/case/product.jpg"
              alt="Signos app on a phone beside a CGM sensor and a cerise hexagonal patch with the S mark"
              id="A14"
              caption="Render matrix: hardware, patch, and the curve in one object family. Vial, not a prop from someone else’s brand."
              ratio="1 / 1"
              contain
            />
            <SignosMedia
              src="/images/projects/signos/case/glp1-shake.jpg"
              alt="Protein shake and gym floor, merchandising photography for the GLP-1 program"
              id="A15"
              caption="Merchandising, v5. The program in a kitchen and a gym — not a clinical tray."
              ratio="4 / 5"
            />
          </div>
          <div className="signos-grid-2" style={{ marginTop: "1.25rem" }}>
            <SignosMedia
              src="/images/projects/signos/case/product-pack.jpg"
              alt="Signos CGM sensor pack and applicator on a dark surface"
              id="A17"
              caption="Partner and B2B surfaces reuse the same object photography. No commercial model numbers on this page."
              ratio="16 / 10"
              contain
            />
            <SignosMedia
              src="/images/projects/signos/case/lifestyle-phone.jpg"
              alt="Member holding a phone with the Signos app over a picnic spread"
              id="A18"
              caption="Affiliate and paid banners pull from the same crop, type, and CTA. Cerise stays a yes."
              ratio="16 / 10"
            />
          </div>
        </div>
      </section>

      <section className="signos-section" aria-labelledby="credits">
        <div className="signos-wrap">
          <ActLabel>Credits</ActLabel>
          <h2 id="credits" className="signos-h2">
            Who held what
          </h2>
          <div className="signos-credit-grid" style={{ marginTop: "2rem" }}>
            {signosCredits.map((col) => (
              <section key={col.heading}>
                <p className="signos-kicker">{col.heading}</p>
                <ul>
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <footer className="signos-section">
        <div className="signos-wrap signos-next">
          <div>
            <p className="signos-kicker">Next project</p>
            <Link href="/work/cholula" className="signos-next-title">
              Cholula Hot Sauce
            </Link>
          </div>
          <Link href="/work" className="signos-all-work">
            ← All work
          </Link>
        </div>
      </footer>
    </article>
  );
}
