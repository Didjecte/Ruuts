const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.vue') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
};

const files = walk('c:/didjecte/info/theRuuts/app');
let modifiedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Remove await from useSanity... calls
  content = content.replace(/await\s+(useSanity(?:HomepageContent|Experiences|Testimonials|SiteSettings)\([^)]*\))/g, '$1');

  if (content !== original) {
    fs.writeFileSync(file, content);
    modifiedCount++;
    console.log('Modified:', file);
  }
});

console.log('Total modified:', modifiedCount);
