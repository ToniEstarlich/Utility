import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";

export const metadata: Metadata = { title: "Tools" };

const categories = [
  { title: "Text tools", description: "Count words and characters in your text.", href: "/tools/text-tools" },
  { title: "Calculators", description: "Practical calculators for everyday numbers.", href: "/tools/calculators" },
  { title: "Converters", description: "Make common unit conversions easier.", href: "/tools/converters" },
];

export default function ToolsPage() {
  return (
    <>
      <SiteHeader />
      <main className="container">
        <section className="page-intro">
          <p className="eyebrow">Utility Tools</p>
          <h1>Small tools. Big help.</h1>
          <p>Choose a category to find simple utilities designed to get the job done without unnecessary complexity.</p>
        </section>
        <section className="tool-list">
          {categories.map((item) => (
            <article className="tool-item" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <Link className="card-link" href={item.href}>Open category ↗</Link>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
