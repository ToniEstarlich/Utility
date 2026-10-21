import type { Metadata } from "next";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { LinguaLogo } from "@/components/shared/brand-logos";

export const metadata: Metadata = {
  title: "Lingua",
  description: "Utility Lingua — language and writing tools.",
};

export default function LinguaPage() {
  return (
    <>
      <SiteHeader />
      <main className="container brand-page lingua-page">
        <section className="brand-page-hero">
          <div>
            <p className="eyebrow">Utility family · Language tools</p>
            <h1>Language,<br />made simpler.</h1>
            <p className="hero-copy">
              Utility Lingua brings language assistance into a simple,
              recognizable experience for writing, communication, and learning.
            </p>
            <Link className="button button-dark" href="/tools/text-tools">
              Explore text tools ↗
            </Link>
          </div>
          <div className="brand-page-logo">
            <LinguaLogo className="brand-page-logo-svg" />
            <p>THE L. TWO DOTS. ONE FAMILY.</p>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p className="section-label">01 · The Lingua identity</p>
              <h2>One distinctive mark.</h2>
            </div>
            <p>
              Orange gives Lingua its own identity while the two dots connect
              it to the wider Utility family.
            </p>
          </div>
          <div className="brand-feature-grid">
            <article className="tool-item">
              <h3>The L</h3>
              <p>A geometric L-shaped mark representing Lingua.</p>
            </article>
            <article className="tool-item">
              <h3>The two dots</h3>
              <p>A shared signature across all Utility brand logos.</p>
            </article>
            <article className="tool-item">
              <h3>Lingua orange</h3>
              <p>The bright orange identity colour: #FF9500.</p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

import Link from "next/link";
