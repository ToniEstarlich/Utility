import Link from "next/link";
import { ToolsLogo } from "@/components/shared/brand-logos";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link className="brand" href="/" aria-label="Utility home">
          <span className="brand-icon">
            <ToolsLogo className="header-logo" aria-hidden="true" />
          </span>
          <span className="brand-name">
            Utility <span>TOOLS</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/tools">Tools</Link>
          <Link href="/lingua">Lingua</Link>
          <Link href="/business">Business</Link>
        </nav>
      </div>
    </header>
  );
}
