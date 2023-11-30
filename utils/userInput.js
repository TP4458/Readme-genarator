//inquirer questions for the readme content.
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
        message: "Enter the contributions instructions:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter valid instructions for contributors:");
            }
        return true;
        }
    },
    {
        type: "input",
        name: "test",
        message: "Enter the testing instructions:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("enter valid testig instructions:");
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
            "MIT License", 
            "Apache 2.0 License", 
            "GNU GPL v3.0",
            "Mozilla Public License 2.0",
            "WTFPL",
            "The Unlicense"
        ]
    },
]
export { questions };