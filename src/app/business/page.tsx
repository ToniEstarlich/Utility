import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { BusinessLogo } from "@/components/shared/brand-logos";

export const metadata: Metadata = {
  title: "Business",
  description: "Utility Business — practical business software and tools.",
};

export default function BusinessPage() {
  return (
    <>
      <SiteHeader />
      <main className="container brand-page business-page">
        <section className="brand-page-hero">
          <div>
            <p className="eyebrow">Business software · Better workflows</p>
            <h1>Work smarter.<br />Build better.</h1>
            <p className="hero-copy">
              Practical software for freelancers, entrepreneurs, and small
              businesses. Designed to make everyday work simpler.
            </p>
            <Link className="button button-dark" href="/tools/calculators">
              Explore business tools ↗
            </Link>
          </div>
          <div className="brand-page-logo">
            <BusinessLogo className="brand-page-logo-svg" />
            <p>THE B. TWO DOTS. ONE FAMILY.</p>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p className="section-label">01 · The Business identity</p>
              <h2>Clarity for getting things done.</h2>
            </div>
            <p>
              Sky blue signals clarity and progress. The charcoal B and
              two dots keep the logo connected to the Utility family.
            </p>
          </div>
          <div className="brand-feature-grid">
            <article className="tool-item">
              <h3>Business tools</h3>
              <p>Practical utilities for everyday business tasks.</p>
            </article>
            <article className="tool-item">
              <h3>Better workflows</h3>
              <p>Tools designed to reduce repetitive work and friction.</p>
            </article>
            <article className="tool-item">
              <h3>Business sky</h3>
              <p>The signature colour: #58B9FF.</p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
