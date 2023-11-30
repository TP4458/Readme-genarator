// imported required packages using es6 syntax
import inquirer from "inquirer"
import fs from "node:fs"
import { generateReadme } from "./utils/generator.js";
import { questions } from "./utils/userInput.js";
import { generateBadge } from "./utils/badges.js"


//function to create a directory and readme file.
function writeToFile(userInput) {
    fs.mkdir("./generated-file", { recursive: true }, (error) => {if (error) throw error;})
    fs.writeFile(`./generated-file/README.md`, generateReadme(userInput), (error) => error ? console.error(error) : console.log("Your README.md has been succesfully created in the generated-file folder."));
}

// function will wait for questions to complete before initialising writeToFile.
async function init() {
    const userInput = await inquirer.prompt(questions)
    userInput.generateBadge = generateBadge(userInput.licenseBadge);
    writeToFile(userInput)
}

// Function call to initialize app
init();
