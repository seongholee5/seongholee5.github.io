import type { Metadata } from "next";
import { academicSections, interests, profile, publications } from "../academic-data";
import PrintButton from "./print-button";
import "./cv.css";

export const metadata: Metadata = { title: "Seong-ho Lee | CV" };

export default function CVPage() {
  const published = publications.filter(p => p.journal !== "submitted");
  return <div className="cv-page">
    <a className="skip-link" href="#cv-main">Skip to curriculum vitae</a>
    <div className="cv-toolbar" aria-label="CV actions">
      <PrintButton />
    </div>
    <main className="cv-document" id="cv-main">
      <header className="cv-header">
        <h1>{profile.name}</h1>
        <p className="cv-role">{profile.role}</p>
        <p>{profile.department}, {profile.university}</p>
      </header>
      {academicSections.map(section => <section className="cv-section" key={section.id} aria-labelledby={`cv-${section.id}`}>
        <h2 id={`cv-${section.id}`}>{section.title}</h2>
        <div className="cv-records">
          {section.records.map(record => <article className="cv-entry" key={`${record.date}-${record.title}`}>
            <p className="cv-date">{record.date}</p>
            <div className="cv-entry-body">
              <h3>{record.title}</h3>
              <p>{record.details}</p>
              {record.location && <p className="cv-secondary">{record.location}</p>}
            </div>
          </article>)}
        </div>
      </section>)}
      <section className="cv-section" aria-labelledby="cv-interests">
        <h2 id="cv-interests">Research interests</h2>
        <div className="cv-interests">
          {interests.map(([title, description]) => <article className="cv-interest" key={title}>
            <h3>{title}</h3><p>{description}</p>
          </article>)}
        </div>
      </section>
      <section className="cv-section" aria-labelledby="cv-publications">
        <h2 id="cv-publications">Publications</h2>
        <p className="cv-author-key">* ⭢ corresponding author; ⁺ ⭢ lab member; ⁼ ⭢ co-first author</p>
        <ol className="cv-publications">
          {published.map(publication => <li className="cv-entry cv-publication" key={publication.title}>
            <p className="cv-date">{publication.year}</p>
            <div className="cv-entry-body">
              <h3><a href={publication.url} target="_blank" rel="noopener noreferrer">{publication.title}</a></h3>
              <p>{publication.authors}</p>
              <p className="cv-journal">{publication.journal}</p>
            </div>
          </li>)}
        </ol>
      </section>
    </main>
  </div>;
}
