const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the name of your project:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid title project:");
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
                return console.log("Enter a valid project description:");
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
                return console.log("Enter valid installation instructions:");
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
                return console.log("Enter valid usage instructions");
            }
        return true;
        }
    },
    {
        type: "input",
        name: "contribute",
        message: "Enter the names of contributors:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter valid names of the contributors:");
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
                return console.log("enter valid testig description:");
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
                return console.log("Enter a valid email address");
            }
        return true;
        }
    },
    {
        type: "input",
        name: "gitName",
        message: "Enter your GitHub username:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid GitHub username");
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