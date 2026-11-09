import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

export const legacyProfileRoutes = ['about-me', 'biography'];
const redirectPage = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url=/profile">
    <link rel="canonical" href="/profile">
    <title>Seong-ho Lee | Profile</title>
  </head>
  <body><a href="/profile">Profile</a></body>
</html>
`;

export async function writeProfileRedirects(output) {
  for (const route of legacyProfileRoutes) {
    const directory = join(output, route);
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, 'index.html'), redirectPage);
    await writeFile(join(output, `${route}.html`), redirectPage);
    // Keep the legacy static payloads aligned with the current Profile export.
    await copyFile(join(output, 'profile.rsc'), join(output, `${route}.rsc`));
  }
  const rules = legacyProfileRoutes.flatMap(route =>
    [`/${route}`, `/${route}/`, `/${route}.html`].map(path => `${path} /profile 301`)
  );
  await writeFile(join(output, '_redirects'), `${rules.join('\n')}\n`);
}
