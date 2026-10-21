import type { Metadata } from "next";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { TextCounter } from "./components/text-counter";

export const metadata: Metadata = { title: "Text Tools" };

export default function TextToolsPage() {
  return (
    <>
      <SiteHeader />
      <main className="container">
        <section className="page-intro">
          <p className="eyebrow">Utility Tools / Text</p>
          <h1>Text counter</h1>
          <p>Count words, characters, and lines in your text. Your text is processed when you submit the form.</p>
        </section>
        <TextCounter />
      </main>
      <SiteFooter />
    </>
  );
}
