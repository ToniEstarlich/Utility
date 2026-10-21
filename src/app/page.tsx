import Link from "next/link";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import {
  ToolsLogo,
  LinguaLogo,
  BusinessLogo,
} from "@/components/shared/brand-logos";

const products = [
  {
    title: "Utility Tools",
    description: "Simple, practical tools for everyday tasks.",
    href: "/tools",
    Logo: ToolsLogo,
    className: "tools-product",
  },
  {
    title: "Utility Lingua",
    description: "Language and writing tools designed to make communication simpler.",
    href: "/lingua",
    Logo: LinguaLogo,
    className: "lingua-product",
  },
  {
    title: "Utility Business",
    description: "Useful digital tools for work, productivity, and business.",
    href: "/business",
    Logo: BusinessLogo,
    className: "business-product",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="container">
        <section className="hero brand-hero">
          <div className="hero-copy-block">
            <p className="eyebrow">Everyday utility · Brand identity</p>
            <h1>
              Useful tools.
              <span>Simpler days.</span>
            </h1>
            <p className="hero-copy">
              Practical digital tools for everyday tasks. Simple to use,
              easy to understand, and designed to help you get things done.
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/tools">
                Explore tools <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button" href="#brands">
                Our brands
              </Link>
            </div>
          </div>

          <div className="hero-art" aria-label="Utility Tools brand symbol">
            <div className="hero-logo-tile">
              <ToolsLogo className="logo-large" />
            </div>
          </div>
        </section>

        <section className="section" id="brands">
          <div className="section-heading">
            <div>
              <p className="section-label">01 · The Utility family</p>
              <h2>Three brands. One simple idea.</h2>
            </div>
            <p>
              Every brand has its own symbol and signature colour, connected
              by the same two-dot identity.
            </p>
          </div>

          <div className="product-grid">
            {products.map(({ title, description, href, Logo, className }) => (
              <Link
                className={`product-card ${className}`}
                href={href}
                key={title}
              >
                <span className="product-logo">
                  <Logo className="product-logo-svg" />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="card-link">
                  Explore <span aria-hidden="true">↗</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="identity-section">
          <div className="identity-copy">
            <p className="section-label">02 · The signature</p>
            <h2>The symbol.<br />The two dots.<br />One family.</h2>
            <p>
              The two dots are a defining feature of the Utility identity.
              They appear above the U, L, and B marks, keeping each product
              recognizable while allowing its own colour and personality.
            </p>
          </div>
          <div className="identity-logos">
            <div className="identity-logo tools-tile">
              <ToolsLogo className="identity-logo-svg" />
              <span>TOOLS</span>
            </div>
            <div className="identity-logo lingua-tile">
              <LinguaLogo className="identity-logo-svg" />
              <span>LINGUA</span>
            </div>
            <div className="identity-logo business-tile">
              <BusinessLogo className="identity-logo-svg" />
              <span>BUSINESS</span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
