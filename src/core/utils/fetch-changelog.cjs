const fs = require('fs');
const path = require('path');

async function fetchReleases() {
  const response = await fetch('https://api.github.com/repos/SeanLuis/rest-data-validator/releases');
  const releases = await response.json();

  let markdownContent = `# Changelog\n\n`;
  releases.forEach(release => {
    markdownContent += `## ${release.name} - ${new Date(release.published_at).toLocaleDateString()}\n${release.body}\n\n`;
  });

  fs.writeFileSync(path.join(__dirname, '../../../docs/resources/changelog.md'), markdownContent);
}

fetchReleases();
