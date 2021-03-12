#!/usr/bin/env node

const inquirer = require('inquirer');
const expressGenerator = require('./generator/express-api');
const htmlSassGenerator = require('./generator/htmlSass');

const questions = [
  {
    name: 'projectName',
    type: 'input',
    message: 'What is the name of the project ?',
    default: 'hello-generator',
  },
  {
    name: 'projectType',
    type: 'list',
    message: 'What project Type would you like to generate ?',
    default: 'express-api',
    choices: ['express-api', 'html/sass', 'choice 3', 'choice 4'],
  },
];

(async () => {
  try {
    const answers = await inquirer.prompt(questions);
    switch (answers.projectType) {
      case 'express-api':
        expressGenerator.starter(answers.projectName);
        break;
      case 'html/sass':
        htmlSassGenerator.starter(answers.projectName);
        break;
      default:
        console.log('please select Type of the project');
        break;
    }
  } catch (err) {
    console.log(err);
  }
})();
