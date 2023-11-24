const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the name of your project:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("");
            }
        return true;
        }
    },
    {
        type: "input",
        name: "description",
        message: "Enter a project description:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("");
            }
        return true;
        }
    },
    {
        type: "input",
        name: "install",
        message: "Enter the installation instructions:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("");
            }
        return true;
        }
    },
    {
        type: "input",
        name: "use",
        message: "Enter the usage instructions:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("");
            }
        return true;
        }
    },
    {
        type: "input",
        name: "constribute",
        message: "Enter the names of contributors:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("");
            }
        return true;
        }
    },
    {
        type: "input",
        name: "test",
        message: "Enter the description of testing:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("");
            }
        return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("");
            }
        return true;
        }
    },
    {
        type: "input",
        name: "gitName",
        message: "Enter your GitHub username",
        validate: (answer) => {
            if (answer === "") {
                return console.log("");
            }
        return true;
        }
    },
    {
        type: "list",
        name: "licenseBadge",
        message: "Select your product license type:",
        choices: [
            "MIT license", 
            "Apache License 2.0", 
            "GNU General Public License v3.0",
            "Mozilla Public License 2.0",
            "Common Development and Distribution License 1.0 (CDDL)",
            "The Unlicense"
        ]
    },
]
export { questions };