import type { Metadata } from "next";
import Link from "next/link";
import CholulaMedia from "@/components/cholula/CholulaMedia";
import {
  ChannelRow,
  OutcomeStrip,
  PillarGrid,
  SlateLockup,
} from "@/components/cholula/CholulaGraphics";
import {
  cholulaCredits,
  cholulaHero,
  cholulaMeta,
  cholulaScope,
  cholulaVideos,
} from "@/lib/cholula-case";
import "./cholula-case.css";

export const metadata: Metadata = {
  title: cholulaMeta.title,
  description: cholulaMeta.description,
  openGraph: {
    title: `${cholulaMeta.title} · Nadin Radwan`,
    description: cholulaMeta.description,
  },
};

export default function CholulaCaseStudyPage() {
  return (
    <article className="cholula-case">
      <header className="cholula-hero">
        <div className="cholula-wrap">
          <p className="cholula-kicker">{cholulaHero.kicker}</p>
          <p className="cholula-lockup-line">{cholulaHero.lockup}</p>
          <h1 className="cholula-page-h1">
            {cholulaHero.title}
            <span className="cholula-page-accent">*</span>
          </h1>
          <p className="cholula-deck">{cholulaHero.deck}</p>
          <ul className="cholula-tags">
            {cholulaHero.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <p className="cholula-intro">{cholulaHero.intro}</p>
        </div>
        <div className="cholula-hero-bar" aria-hidden="true" />
      </header>

      <div className="cholula-section cholula-section--flush">
        <div className="cholula-wrap-wide">
          <CholulaMedia
            src="/images/projects/cholula/cover-cholula.png"
            alt="Cholula Uncap Real Flavor print system with bottle, chalk type, and Mix and Mash social screens"
            id="C01"
            caption="Hero. The chalk-on-slate system on a print wall, and the same language in the Mix and Mash social executions."
            priority
            sizes="100vw"
          />
        </div>
      </div>

      <section className="cholula-section" aria-labelledby="brief">
        <div className="cholula-wrap">
          <h2 id="brief" className="cholula-h2">
            Handmade, not manufactured
          </h2>
          <p className="cholula-lede" style={{ marginTop: "1.25rem" }}>
            Cholula needed to compete against larger hot sauce brands with bigger budgets. The brief was to lean into authenticity and craft — a brand that looked handmade and warm, not manufactured. The visual language had to travel across everything from in-store displays to 30-second TV spots without losing the feeling.
          </p>
          <PillarGrid />
          <ChannelRow />
        </div>
      </section>

      <section className="cholula-section" aria-labelledby="role">
        <div className="cholula-wrap">
          <h2 id="role" className="cholula-h2">
            Three years as the lead on the biggest account
          </h2>
          <p className="cholula-lede" style={{ marginTop: "1.25rem" }}>
            I developed the visual system, drew the illustration library, and art-directed the work that ran nationally. Print, social, broadcast, and in-store all had to feel like they came from the same hand.
          </p>
          <div className="cholula-scope-grid" style={{ marginTop: "2rem" }}>
            {cholulaScope.map((item) => (
              <article key={item.title} className="cholula-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cholula-section" aria-labelledby="print">
        <div className="cholula-wrap">
          <h2 id="print" className="cholula-h2">
            Chalk on slate, drawn by hand
          </h2>
          <p className="cholula-lede" style={{ marginTop: "1.25rem" }}>
            I developed the chalk-on-slate visual system: hand-rendered typography, textured surfaces, real food photography with a deliberate artisan aesthetic. Every flavor illustration in the system is one I digitally drew from scratch — each ingredient, each pairing, each SKU.
          </p>
          <p className="cholula-copy cholula-muted" style={{ marginTop: "1.1rem" }}>
            As the illustration library grew, I built an asset library for agencies to download illustrations as I produced them and managed it for two years, so any agency in the Cholula ecosystem could pull the right asset without starting from scratch.
          </p>
          <SlateLockup />
        </div>
        <div className="cholula-wrap-wide">
          <CholulaMedia
            src="/images/projects/cholula/cover-cholula.png"
            alt="Uncap Real Flavor print wall with Cholula bottle, chalk illustrations, and wood table"
            id="C02"
            caption="The print system. Distressed white type, chalk illustrations, the bottle on wood — the same handmade register everywhere it landed."
            ratio="16 / 9"
          />
        </div>
      </section>

      <section className="cholula-section" aria-labelledby="digital">
        <div className="cholula-wrap">
          <h2 id="digital" className="cholula-h2">
            The same slate, every channel
          </h2>
          <p className="cholula-lede" style={{ marginTop: "1.25rem" }}>
            The visual system extended into social, digital, OOH, and promotional activations. MLB Gameday tie-ins, drag-and-drop interactive social executions, and platform-native social formats all inherited from the same chalk-on-slate foundation. Consistency across channels was the discipline.
          </p>
        </div>
        <div className="cholula-wrap-wide">
          <CholulaMedia
            src="/images/projects/cholula/cholula-mlb-gameday-mockup.jpg"
            alt="MLB.com Gameday takeover presented by Cholula, with bottle sidebar and chalkboard food pairings"
            id="C03"
            caption="MLB Gameday tie-in. Live baseball stats in the middle; Cholula wood, bottle, and chalkboard pairings holding the edges."
            ratio="16 / 9"
          />
        </div>
      </section>

      <section className="cholula-section" aria-labelledby="tv">
        <div className="cholula-wrap">
          <h2 id="tv" className="cholula-h2">
            Then the slate had to move
          </h2>
          <p className="cholula-lede" style={{ marginTop: "1.25rem" }}>
            The national TV commercial brought the aesthetic into motion. I art-directed the visual treatment: camera work, surface textures, typography integration, color grading. The spot ran across broadcast and was extended into social and digital cuts. Print ads ran alongside — same chalk-on-slate system, real quotes from real Cholula fans.
          </p>
          <OutcomeStrip />
        </div>
        <div className="cholula-wrap-wide">
          <div className="cholula-video-grid" style={{ marginTop: "2rem" }}>
            {cholulaVideos.map((video) => (
              <figure key={video.embed} className="cholula-video">
                <p className="cholula-video-title">{video.title}</p>
                <div className="cholula-video-frame">
                  <iframe
                    src={video.embed}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="cholula-section" aria-labelledby="reflection">
        <div className="cholula-wrap">
          <h2 id="reflection" className="cholula-h2">
            Grow the system. Do not break it.
          </h2>
          <p className="cholula-lede" style={{ marginTop: "1.25rem" }}>
            Three years on the same platform is rare in agency work. It meant the system had to grow, not just repeat. Each year we pushed the visual language a little further while protecting what made it distinctive. Learning to evolve a campaign without breaking it is a discipline I have used in every brand system job since.
          </p>
        </div>
      </section>

      <section className="cholula-section" aria-labelledby="credits">
        <div className="cholula-wrap">
          <h2 id="credits" className="cholula-h2">
            Who held what
          </h2>
          <div className="cholula-credit-grid" style={{ marginTop: "2rem" }}>
            {cholulaCredits.map((col) => (
              <section key={col.heading}>
                <h3>{col.heading}</h3>
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

      <footer className="cholula-section">
        <div className="cholula-wrap cholula-next">
          <div>
            <p className="cholula-kicker" style={{ marginBottom: "0.7rem" }}>
              Next project
            </p>
            <Link href="/work/raw-generation" className="cholula-next-title">
              Raw Generation
              <span className="cholula-page-accent">*</span>
            </Link>
          </div>
          <Link href="/work" className="cholula-all-work">
            ← All work
          </Link>
        </div>
      </footer>
    </article>
  );
}
