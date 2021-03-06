const path = require('path');
const shell = require('shelljs');

/*
  📂 css
    📼 style.css
  📂 sass
    📼 main.scss
  📼 index.html
  📼 .gitignore
  📼 package.json
*/

exports.starter = (projectName) => {
  if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    return;
  }

  if (!shell.which('npm')) {
    shell.echo('Sorry, this script requires npm');
    return;
  }

  shell.mkdir(projectName);
  const WORK_DIR = path.join(process.cwd(), projectName);
  shell.cd(WORK_DIR);
  shell.exec('git clone https://github.com/abdelhamidaitayoub/sass-project-starter');
  shell.mv('-f', './sass-project-starter/*', '.');
  shell.mv('-f', './sass-project-starter/.gitignore', '.');
  shell.rm('-rf', './sass-project-starter');

  shell.exec('npm i');
};
