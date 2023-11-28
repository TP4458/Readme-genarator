const generateReadme = (input) => {
return `
# ${input.title}

## Description
${input.description}

${input.generateBadge}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation
${input.install}

## Usage
${input.use}

## Contributing
${input.contribute}

## Tests
${input.test}

## Questions
Any questions regarding this project can be directed to:
* Email: [${input.email}](${input.email})
* GitHub [${input.gitName}](https://github.com/${input.gitName})

## License
This product is licensed with ${input.licenseBadge}. Please click on the badge below, or at the top of this document to find out more.
\n ${input.generateBadge}
`
}

export { generateReadme };

