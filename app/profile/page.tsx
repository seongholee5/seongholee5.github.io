import type { Metadata } from "next";
import { academicSections } from "../academic-data";
import { AcademicShell, RecordRow, Section } from "../site-components";

export const metadata: Metadata = { title: "Seong-ho Lee | Profile" };

export default function ProfilePage() {
  return (
    <AcademicShell active="profile">
      <h1 className="sr-only">Profile</h1>
      {academicSections.map(section => (
        <Section key={section.id} title={section.title} id={section.id}>
          {section.records.map(record => <RecordRow key={`${record.date}-${record.title}`} {...record} />)}
        </Section>
      ))}
    </AcademicShell>
  );
}
