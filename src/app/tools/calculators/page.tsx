import type { Metadata } from "next";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";

export const metadata: Metadata = { title: "Calculators" };

export default function CalculatorsPage() {
  return (
    <>
      <SiteHeader />
      <main className="container">
        <section className="page-intro">
          <p className="eyebrow">Utility Tools</p>
          <h1>Calculators</h1>
          <p>A dedicated home for practical calculators. More calculators can be added here as individual features.</p>
        </section>
        <section className="tool-list">
          <article className="tool-item">
            <h2>Coming soon</h2>
            <p>This category is ready for your first calculator.</p>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
