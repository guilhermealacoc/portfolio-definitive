import { useEffect, useState } from "react";

import {
  portfolioContent,
  sectionIds,
  type Locale,
  type SectionId,
} from "../components/portfolio/content";
import { InfoRail } from "../components/portfolio/info-rail";
import { ProjectCard } from "../components/portfolio/project-card";
import { SectionShell } from "../components/portfolio/section-shell";
import { PortfolioSidebar } from "../components/portfolio/sidebar";
import { WritingCard } from "../components/portfolio/writing-card";
import { Badge } from "../components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";

export default function Home() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const locale: Locale = normalizedPath === "/en" ? "en" : "pt";
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const content = portfolioContent[locale];

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  useEffect(() => {
    const elements = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((element): element is HTMLElement => element !== null);

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          )[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id as SectionId);
        }
      },
      {
        rootMargin: "-24% 0px -52% 0px",
        threshold: [0.2, 0.35, 0.5, 0.65],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: SectionId) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="portfolio-app-shell">
      <PortfolioSidebar
        sections={content.sidebar.sections}
        menuLabel={content.sidebar.menuLabel}
        languageLabel={content.sidebar.languageLabel}
        activeSection={activeSection}
        currentLocale={locale}
        mobileOpen={mobileMenuOpen}
        onNavigate={handleNavigate}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
      />

      <div className="portfolio-content-shell">
        <header className="portfolio-mobile-topbar">
          <strong className="portfolio-mobile-topbar__name">
            {content.sidebar.name}
          </strong>
          <button
            type="button"
            className="portfolio-mobile-topbar__menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            {content.sidebar.menuLabel}
          </button>
        </header>

        <div className="portfolio-main-grid">
          <main className="portfolio-document">
            <section className="portfolio-hero">
              <Badge>{content.hero.eyebrow}</Badge>
              <h2 className="portfolio-hero__title">{content.hero.title}</h2>
              <p className="portfolio-hero__description">
                {content.hero.description}
              </p>

              <div className="portfolio-feature-grid">
                {content.hero.features.map((feature) => (
                  <Card key={feature.title} className="portfolio-feature-card">
                    <CardHeader>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>

            <Separator className="portfolio-divider" />

            <SectionShell
              id="about"
              label={content.about.label}
              title={content.about.title}
              description={content.about.intro}
            >
              <div className="about-grid">
                <Card className="about-copy-card">
                  <CardContent>
                    <div className="about-copy-stack">
                      {content.about.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="about-copy-paragraph">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="about-card-grid">
                  {content.about.cards.map((card, index) => (
                    <Card key={card.title} className="about-detail-card">
                      <span
                        className="about-detail-card__index"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <CardHeader>
                        <CardTitle>{card.title}</CardTitle>
                        <CardDescription>{card.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="bullet-list">
                          {card.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="about-timeline">
                <h3 className="about-timeline__title">
                  {content.about.experienceTimelineTitle}
                </h3>
                <div className="about-timeline__list">
                  {content.about.experienceTimelineItems.map((item) => (
                    <article
                      key={`${item.period}-${item.title}`}
                      className="about-timeline__item"
                    >
                      <p className="about-timeline__period">{item.period}</p>
                      <div className="about-timeline__content">
                        <h4 className="about-timeline__item-title">
                          {item.title}
                        </h4>
                        <p className="about-timeline__item-subtitle">
                          {item.subtitle}
                        </p>
                        <p className="about-timeline__item-description">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="about-timeline">
                <h3 className="about-timeline__title">
                  {content.about.educationTimelineTitle}
                </h3>
                <div className="about-timeline__list">
                  {content.about.educationTimelineItems.map((item) => (
                    <article
                      key={`${item.period}-${item.title}`}
                      className="about-timeline__item"
                    >
                      <p className="about-timeline__period">{item.period}</p>
                      <div className="about-timeline__content">
                        <h4 className="about-timeline__item-title">
                          {item.title}
                        </h4>
                        <p className="about-timeline__item-subtitle">
                          {item.subtitle}
                        </p>
                        <p className="about-timeline__item-description">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </SectionShell>

            <Separator className="portfolio-divider" />

            <SectionShell
              id="projects"
              label={content.projects.label}
              title={content.projects.title}
              description={content.projects.intro}
            >
              <div className="project-grid">
                {content.projects.items.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </SectionShell>

            <Separator className="portfolio-divider" />

            <SectionShell
              id="expertise"
              label={content.expertise.label}
              title={content.expertise.title}
              description={content.expertise.intro}
            >
              <div className="writing-grid">
                {content.expertise.items.map((item) => (
                  <WritingCard key={item.title} item={item} />
                ))}
              </div>
            </SectionShell>
          </main>

          <InfoRail
            imageAlt={content.rail.imageAlt}
            summaryTitle={content.rail.summaryTitle}
            summaryItems={content.rail.summaryItems}
            focusTitle={content.rail.focusTitle}
            focusItems={content.rail.focusItems}
            noteTitle={content.rail.noteTitle}
            note={content.rail.note}
          />
        </div>
      </div>
    </div>
  );
}
