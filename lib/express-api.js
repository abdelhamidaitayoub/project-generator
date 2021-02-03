const path = require('path');
const shell = require('shelljs');

/*
  📂 controllers
  📂 views
  📂 models
  📂 routes
  📂 utils
  📂 public
  📼 .env
  📼 .eslintrc
  📼 .gitignore
  📼 .prettierrc
  📼 app.js
  📼 package.json
  📼 server.js
*/

exports.starter = (projectName) => {
  const DIRS = ['controllers', 'views', 'models', 'routes', 'utils', 'public'];
  const FILES = [
    '.env',
    '.eslintrc',
    '.gitignore',
    '.prettierrc',
    'app.js',
    'package.json',
    'server.js',
  ];

  shell.mkdir(projectName);
  const WORK_DIR = path.join(process.cwd(), projectName);

  shell.cd(WORK_DIR);
  shell.touch(FILES);
  shell.mkdir(DIRS);
};
