import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>&copy; 2026 Utility</span>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/tools">Tools</Link>
          <Link href="/lingua">Lingua</Link>
          <Link href="/business">Business</Link>
        </nav>
      </div>
    </footer>
  );
}

