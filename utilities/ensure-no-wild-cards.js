'use strict';
const packageJson = require('../package.json');
const dependencySections = [packageJson.dependencies, packageJson.devDependencies];

const packagesWithWildCards = [];

console.log('Checking dependencies for wildcards');
dependencySections.forEach(checkDependencySection);

if (packagesWithWildCards.length >= 1) {
  throw new Error(
    `The following packages contain wild cards or a local file reference \n${packagesWithWildCards.join(
      '\n'
    )}`
  );
}

console.log('All dependencies are wildcard free');

function checkDependencySection(dependencySection) {
  Object.keys(dependencySection).forEach(function(dependencyName) {
    const versionString = dependencySection[dependencyName];

    // Prevent references to local packages
    if (versionString.includes('file:')) {
      packagesWithWildCards.push(dependencyName);
    }

    // Allow wild cards for ras dependencies
    if (dependencyName.substr(0, 4) === '@ras') {
      return;
    }

    if (versionString.toLowerCase() === 'latest' || versionString.toLowerCase() === 'next') {
      packagesWithWildCards.push(dependencyName);
    }

    const allowedCharacters = /^[a-zA-Z\d.\-]+$/;
    let valid = allowedCharacters.test(versionString);

    if (!valid) {
      packagesWithWildCards.push(`${dependencyName} ${versionString.substr(0, 1)}`);
    }
  });
}

return;
