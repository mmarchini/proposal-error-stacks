'use strict';

const { promises: fs } = require('fs');
const { promisify } = require('util');
const execFile = promisify(require('child_process').execFile);

async function main() {
  let result = '';
  for (const file of await fs.readdir('./tests')) {
    if (file.startsWith('test-')) {
      const filepath = `./tests/${file}`
      result += `## ${file}\n\n`
      result += `### Source\n\n`
      result += '```js\n'
      result += await fs.readFile(filepath, { encoding: 'utf-8' });
      result += '```\n\n'

      // NOTE(mmarchini): needs modified version of eshost with --markdown
      const { stdout } = await execFile('npx', ['-q', 'eshost', '-t', '--markdown', '-g', 'd8,jsshell,jsc', filepath]);
      result += '### Results \n\n'
      result += `${stdout}\n`;
    }
  }

  result = `<!-- BEGIN -->\n${result}\n<!-- END -->`

  const readme = await fs.readFile('README.md', { encoding: 'utf-8' });
  const newReadme = readme.replace(/<!-- BEGIN -->[\s\S]+?<!-- END -->/, result);
  await fs.writeFile('README.md', newReadme);
}

main();
