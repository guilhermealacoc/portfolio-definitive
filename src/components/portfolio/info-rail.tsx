import profileImage from "../../assets/profileImage.jpg";

type InfoRailProps = {
  imageAlt: string;
  summaryTitle: string;
  summaryItems: Array<{ label: string; value: string }>;
  focusTitle: string;
  focusItems: string[];
  noteTitle: string;
  note: string;
};

export function InfoRail({
  imageAlt,
  summaryTitle,
  summaryItems,
  focusTitle,
  focusItems,
  noteTitle,
  note,
}: InfoRailProps) {
  return (
    <aside className="portfolio-rail">
      <section className="portfolio-rail__section">
        <div className="portfolio-constellation">
          <img
            src={profileImage}
            alt={imageAlt}
            className="portfolio-constellation__image"
          />
        </div>
      </section>

      <section className="portfolio-rail__section">
        <h3 className="portfolio-rail__title">{summaryTitle}</h3>
        <dl className="summary-list">
          {summaryItems.map((item) => (
            <div key={item.label} className="summary-list__row">
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="portfolio-rail__section">
        <h3 className="portfolio-rail__title">{focusTitle}</h3>
        <ul className="rail-list">
          {focusItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="portfolio-rail__section">
        <h3 className="portfolio-rail__title">{noteTitle}</h3>
        <p className="rail-note">{note}</p>
      </section>
    </aside>
  );
}
