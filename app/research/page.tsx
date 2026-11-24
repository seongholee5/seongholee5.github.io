import type { Metadata } from "next";
import { interests, publications } from "../academic-data";
import { AcademicShell, Arrow } from "../site-components";

export const metadata: Metadata = { title: "Seong-ho Lee | Research" };

function PaperList({ papers }: { papers: typeof publications }) {
  return (
    <ol className="publication-list">
      {papers.map(p => (
        <li className="publication" key={p.title}>
          <span className="publication-year">{p.year}</span>
          <article>
            <h3>{p.url ? <a href={p.url} target="_blank" rel="noopener noreferrer">{p.title}<Arrow /></a> : p.title}</h3>
            <p className="authors">{p.authors}</p>
            <p className={p.journal === "submitted" ? "publication-status" : "journal"}>{p.journal}</p>
          </article>
        </li>
      ))}
    </ol>
  );
}

export default function ResearchPage() {
  const authorKey = <p className="author-key">* ⭢ corresponding author; ⁺ ⭢ lab member; ⁼ ⭢ co-first author</p>;
  const published = publications.filter(p => p.journal !== "submitted");
  const preprints = publications.filter(p => p.journal === "submitted");

  return (
    <AcademicShell active="research">
      <header className="page-heading research-heading"><h1>Research interests</h1></header>
      <div className="interests-grid">
        {interests.map(([title, description]) => (
          <section className="interest" key={title}><h2>{title}</h2><p>{description}</p></section>
        ))}
      </div>
      <section className="publications-section" aria-labelledby="publications-title">
        <div className="section-heading"><h2 id="publications-title">Publications</h2></div>
        {authorKey}
        <PaperList papers={published} />
      </section>
      {preprints.length > 0 && (
        <section className="publications-section" aria-labelledby="preprints-title">
          <div className="section-heading"><h2 id="preprints-title">Preprints</h2></div>
          {authorKey}
          <PaperList papers={preprints} />
        </section>
      )}
    </AcademicShell>
  );
}
