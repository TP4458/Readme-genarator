// TODO: Include packages needed for this application
import inquirer from "inquirer"
import fs from "node:fs"
import { generateReadme } from "./generator.js";
import { questions } from "./userInput.js"


// TODO: Create a function to write README file
function writeToFile(userInput) {
    fs.mkdir("./generated-file", (err) => {if (err) throw err;})
    fs.writeFile(`./generated-file/README.md`, generateReadme(userInput), (err) => err ? console.error(err) : console.log("Your README.md has been succesfully created in the generated-file folder."));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
