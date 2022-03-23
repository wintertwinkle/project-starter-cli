#!/usr/bin/env node

const chalk = require("chalk")
const yargs = require("yargs")
const path = require("path")
const fs = require("fs")

const options = yargs.usage("Usage: -n <project-name>").option("n", {
  alias: "name",
  describe: "Project name",
  type: "string",
  demandOption: true,
}).argv

const originBasePath = "C:\\Home\\Document\\CS\\Frontend\\50-projects"
const targetBasePath =
  "C:\\Home\\Document\\CS\\Frontend\\50-projects-in-react\\src\\components"

function generateProject(name) {
  const originPath = path.join(originBasePath, name)
  const targetPath = path.join(targetBasePath, name)
  fs.cp(originPath, targetPath, { recursive: true }, function (err) {
    if (err) throw err
    console.log(chalk.green("create project sucess"))
  })
}

generateProject(options.name)
