// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = []



  const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your email address!');
                return false;
              }
            }
          },
      {
        type: 'input',
        name: 'title',
        message: 'What is your Project Title? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter your project description (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter your project description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?  (Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please enter instructions for installing your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please provide instructions and examples for use!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmCollaborators',
        message: 'Would you like to list any collaborators, third-party assets or tutorials?',
        default: true
      },
      {
        type: 'input',
        name: 'collaborators',
        message: 'Provide some information about your collaborators, third-party assets or tutorials:',
        when: ({ confirmCollaborators }) => confirmCollaborators
      },
      {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Do you have test for your applciation?',
        default: true
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide some information about your test:',
        when: ({ confirmTests }) => confirmTests
      },
      {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
    ]);
  };

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

  
  promptUser()