import EmailLink from "./email-link";
import { profile } from "./academic-data";
import type { ReactNode } from "react";
export function Arrow({ direction = "up-right" }: { direction?: "up-right" | "up" } = {}) { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d={direction === "up" ? "M12 20V4m-7 7 7-7 7 7" : "M6 18 18 6M6 6h12v12"} /></svg>; }
const navigation = [
  { id: "home", label: "Home", href: "/" },
  { id: "profile", label: "Profile", href: "/profile" },
  { id: "research", label: "Research", href: "/research" },
  { id: "lab", label: "Lab", href: "/lab" },
] as const;

export function AcademicShell({ active, children }: { active: typeof navigation[number]["id"]; children: ReactNode }) {
  return <>
    <a className="skip-link" href="#main">Skip to main content</a>
    <header className="site-header" id="top">
      <div className="header-inner">
        <a className="wordmark" href="/">Seong-ho Lee's website</a>
        <nav aria-label="Main navigation">
          {navigation.map(({ id, label, href }) => (
            <a key={id} href={href} className={active === id ? "active" : ""} aria-current={active === id ? "page" : undefined}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
    <div className="site-layout"><aside className={`profile${active === "home" ? "" : " profile-secondary"}`} aria-label="Seong-ho Lee's profile"><div className="portrait-frame"><img className="portrait" src="/images/seongho-lee.jpg" width="198" height="246" alt="Seong-ho Lee" fetchPriority="high" /></div><div className="profile-information"><h2 className="profile-name">{profile.name}</h2><p className="profile-role">{profile.role}</p><p className="profile-affiliation">{profile.department}</p><p className="profile-affiliation">{profile.university}</p><div className="profile-links"><a href={profile.scholarUrl} target="_blank" rel="noopener noreferrer"><span className="profile-link-label">Google Scholar</span><Arrow /></a><a href="/cv" target="_blank" rel="noopener noreferrer" aria-label="CV (opens in a new tab)"><span className="profile-link-label">CV</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M14 3H5v18h14V8zM14 3v5h5M8 12h8M8 16h8" /></svg></a><EmailLink /></div></div></aside><main id="main" className={`page-content page-${active}`}>{children}</main></div>
    <footer className="site-footer"><a href="#top" aria-label="Back to top"><span>Back to top</span><Arrow direction="up" /></a></footer>
  </>;
}
export function Section({ title, id, children }: { title: string; id: string; children: ReactNode }) { return <section className="content-section" id={id} aria-labelledby={`${id}-title`}><h2 id={`${id}-title`}>{title}</h2><div className="records">{children}</div></section>; }
export function RecordRow({ date, title, details, location }: { date: string; title: string; details: ReactNode; location?: string }) { return <div className="record-row"><p className="record-date">{date}</p><div className="record-body"><h3>{title}</h3><p>{details}</p>{location && <p className="record-location">{location}</p>}</div></div>; }
