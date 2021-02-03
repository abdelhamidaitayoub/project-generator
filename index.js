#!/usr/bin/env node

const inquirer = require('inquirer');
const expressGenerator = require('./lib/express-api');

const questions = [
  {
    name: 'projectName',
    type: 'input',
    message: 'What is the name of the project ?',
    default: 'hello-generator',
  },
  // {
  //   name: 'projectType',
  //   type: 'list',
  //   message: 'What project Type would you like to generate ?',
  //   default: 'express-api',
  //   choices: ['express-api', 'html/sass', 'choice 3', 'choice 4'],
  // },
];

(async () => {
  try {
    const answers = await inquirer.prompt(questions);
    expressGenerator.starter(answers.projectName);
  } catch (err) {
    console.log(err);
  }
})();
