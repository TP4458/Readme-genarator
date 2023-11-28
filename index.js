// TODO: Include packages needed for this application
import inquirer from "inquirer"
import fs from "node:fs"
import { generateReadme } from "./utils/generator.js";
import { questions } from "./utils/userInput.js";
import { generateBadge } from "./utils/badges.js"


// TODO: Create a function to write README file
function writeToFile(userInput) {
    fs.mkdir("./generated-file", { recursive: true }, (error) => {if (error) throw error;})
    fs.writeFile(`./generated-file/README.md`, generateReadme(userInput), (error) => error ? console.error(error) : console.log("Your README.md has been succesfully created in the generated-file folder."));
}

// TODO: Create a function to initialize app
async function init() {
    const userInput = await inquirer.prompt(questions)
    userInput.generateBadge = generateBadge(userInput.licenseBadge);
    writeToFile(userInput)
}

// Function call to initialize app
init();
