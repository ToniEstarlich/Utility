import type { Metadata } from "next";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";

export const metadata: Metadata = { title: "Converters" };

export default function ConvertersPage() {
  return (
    <>
      <SiteHeader />
      <main className="container">
        <section className="page-intro">
          <p className="eyebrow">Utility Tools</p>
          <h1>Converters</h1>
          <p>Convert common measurements with focused tools. This category is ready for more converters.</p>
        </section>
        <section className="tool-list">
          <article className="tool-item">
            <h2>Kilometers to miles</h2>
            <p>Conversion helper created in this feature's lib folder. A user interface can be added next.</p>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
