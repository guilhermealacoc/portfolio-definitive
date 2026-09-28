import { Fragment } from "react";

import type { Locale, SectionId, SidebarSection } from "./content";
import { cn } from "../../lib/utils";

type SidebarProps = {
  sections: SidebarSection[];
  menuLabel: string;
  languageLabel: string;
  activeSection: SectionId;
  currentLocale: Locale;
  mobileOpen: boolean;
  onNavigate: (sectionId: SectionId) => void;
  onCloseMobileMenu: () => void;
};

export function PortfolioSidebar({
  sections,
  menuLabel,
  languageLabel,
  activeSection,
  currentLocale,
  mobileOpen,
  onNavigate,
  onCloseMobileMenu,
}: SidebarProps) {
  return (
    <>
      <div
        className={cn("portfolio-sidebar__backdrop", mobileOpen && "is-open")}
        aria-hidden={!mobileOpen}
        onClick={onCloseMobileMenu}
      />
      <aside className={cn("portfolio-sidebar", mobileOpen && "is-open")}>
        <div className="portfolio-sidebar__panel">
          <div
            className="portfolio-sidebar__language-row"
            role="group"
            aria-label={languageLabel}
          >
            {(["pt", "en"] as const).map((locale, index) => (
              <Fragment key={locale}>
                {index > 0 ? (
                  <span
                    className="portfolio-sidebar__language-divider"
                    aria-hidden="true"
                  >
                    |
                  </span>
                ) : null}
                <a
                  href={locale === "pt" ? "/" : "/en/"}
                  className={cn(
                    "portfolio-sidebar__language-button",
                    currentLocale === locale && "is-active",
                  )}
                  aria-current={currentLocale === locale ? "page" : undefined}
                  hrefLang={locale === "pt" ? "pt-BR" : "en"}
                  onClick={onCloseMobileMenu}
                >
                  {locale.toUpperCase()}
                </a>
              </Fragment>
            ))}
          </div>

          <nav className="portfolio-sidebar__nav" aria-label={menuLabel}>
            {sections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <button
                  key={section.id}
                  type="button"
                  className={cn(
                    "portfolio-sidebar__nav-button",
                    isActive && "is-active",
                  )}
                  onClick={() => onNavigate(section.id)}
                >
                  {section.label}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
