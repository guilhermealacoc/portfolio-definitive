import type { ReactNode } from "react";

import { Badge } from "../ui/badge";

type SectionShellProps = {
  id: string;
  label: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function SectionShell({ id, label, title, description, children }: SectionShellProps) {
  return (
    <section id={id} className="portfolio-section">
      <div className="portfolio-section__header">
        <Badge variant="outline">{label}</Badge>
        <h2 className="portfolio-section__title">{title}</h2>
        <p className="portfolio-section__description">{description}</p>
      </div>
      {children}
    </section>
  );
}
