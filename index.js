const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({projectTitle,description,installation,usage,license,contribution,username,email}) =>
    `
## Project-Title:

## 🌟${projectTitle}🌟

---

[![GitHub repo size](https://img.shields.io/github/repo-size/Amit-Ranjan22/ReadMe-Generator?style=for-the-badge)](https://github.com/Amit-Ranjan22/ReadMe-Generator.git)
[![Codecov](https://img.shields.io/codecov/c/github/Amit-Ranjan22/ReadMe-Generator?style=for-the-badge)](https://github.com/Amit-Ranjan22/ReadMe-Generator.git)
[![GitHub issues](https://img.shields.io/github/issues/Amit-Ranjan22/ReadMe-Generator?style=for-the-badge)](https://github.com/Amit-Ranjan22/ReadMe-Generator.git)
[![npm](https://img.shields.io/npm/v/inquirer?style=for-the-badge)](https://github.com/Amit-Ranjan22/ReadMe-Generator.git)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Amit-Ranjan22/ReadMe-Generator?style=for-the-badge)](https://github.com/Amit-Ranjan22/ReadMe-Generator.git)
[![License: MIT](https://img.shields.io/badge/License-${license}-yellow.svg?style=for-the-badge)](https://github.com/Amit-Ranjan22/ReadMe-Generator.git)

## 📚 Table Of Content :

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Questions](#questions)

---

## <h2 id='description'>📜 Application Description</h2>

    ${description}

---

<h2 id='user-story'>✍️ User-Story</h2>

    As a developer:<br>
    I Want: a README generator<br>
    So That: I can quickly create a professional README for a new project.

---

<h2 id='acceptance-criteria'>🤝 Acceptance-Criteria</h2>

    GIVEN a command-line application that accepts user input<br>
    WHEN: I am prompted for information about my application repository<br>
    THEN: a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions<br>
    WHEN: I enter my project title<br>
    THEN: this is displayed as the title of the README<br>
    WHEN: I enter a description, installation instructions, usage information, contribution guidelines, and test instructions<br>
    THEN: this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.<br>
    WHEN: I choose a license for my application from a list of options.<br>
    THEN: a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.<br>
    WHEN: I enter my GitHub username<br>
    THEN: this is added to the section of the README entitled Questions, with a link to my GitHub profile.<br>
    WHEN: I enter my email address<br>
    THEN: this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions.<br>
    WHEN: I click on the links in the Table of Contents<br>
    THEN: I am taken to the corresponding section of the README.

---

## <h2 id='installation'>💾 Installation</h2>

    ${installation}

---

<h2 id='usage'>💻 Usage</h2>

    ${usage}

---

<h2 id='license'>📛 License</h2>

    ${license}

---

<h2 id='contribution'>🧑‍🤝‍🧑 Contribution</h2>

    ${contribution}

---

<h2 id='questions'>❓ Questions</h2>

<h3>For any question you can reach me at:</h3>

---

<h3>😺GitHub: <a href='https://github.com/Amit-Ranjan22'>${username}</a></h3>

<h3>📩 Email: <a href='https://mail.google.com/'>${email}</a></h3>

---

## ©️ License & Copyright

Licensed under the [MIT License](License_Copyright/LICENSE)


`;

inquirer
.prompt([
    {
        type: 'input',
        name:  'projectTitle',
        message: 'What is the title of your project?\n'     
    },
    {
        type: 'input',
        name:  'description',
        message: 'Give a brief description of your project!\n'
    },
    {
        type: 'input',
        name:  'installation',
        message: 'Describe the installation process of your application!\n'
    },
    {
        type: 'input',
        name:  'usage',
        message: 'What is the usage of this application?\n'
    },
    {
        type: 'list',
        name:  'license',
        message: 'choose the applicable license for this project!\n',
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: 'input',
        name:  'contribution',
        message: 'Who are the contributor in this project?\n'
    },
    {
        type: 'input',
        name:  'test',
        message: 'Is there any test required?\n'
    },
    {
        type: 'input',
        name:  'questions',
        message: 'Do you have any question about the application?\n'
    },
    {
        type: 'input',
        name:  'username',
        message: 'Please enter your Github username:\n'
    },
    {
        type: 'input',
        name:  'email',
        message: 'Please enter your email-id:\n'
    }
])
.then((response) => {
    const readMeContent = generateReadme(response);

    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
});