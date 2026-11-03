/**
 * Markdown Loader for Artifacts
 * Eagerly imports all .md files in src/artifacts/ using Vite's glob import.
 * Works seamlessly in development, production builds, and GitHub Pages.
 */

const markdownModules = import.meta.glob('/src/artifacts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

/**
 * Retrieves the raw Markdown string for a given artifact ID or filename.
 * @param {string} artifactId - e.g. "autonomous-agent-engine"
 * @returns {string|null} - The raw markdown content or null if not found
 */
export function getArtifactMarkdown(artifactId) {
  if (!artifactId) return null;

  // 1. Direct match on filename
  for (const [path, content] of Object.entries(markdownModules)) {
    if (path.endsWith(`/${artifactId}.md`)) {
      return content;
    }
  }

  // 2. Normalized match (ignoring case, hyphens, and underscores)
  const normalizedTarget = artifactId.toLowerCase().replace(/[-_]/g, '');
  for (const [path, content] of Object.entries(markdownModules)) {
    const filename = path.split('/').pop()?.replace('.md', '').toLowerCase().replace(/[-_]/g, '');
    if (filename === normalizedTarget) {
      return content;
    }
  }

  return null;
}

/**
 * Returns a list of all loaded artifact filenames.
 */
export function getAvailableMarkdownFiles() {
  return Object.keys(markdownModules).map((p) => p.split('/').pop() || '');
}

