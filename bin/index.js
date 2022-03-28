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

  fs.promises
    .cp(originPath, targetPath, { recursive: true })
    .then(() => {
      // create style direcotry
      const styleDir = path.resolve(targetPath, "style")
      return fs.promises.mkdir(styleDir)
    })
    .then(() => {
      // move style.css into style/index.css
      const sytleFile = path.resolve(targetPath, "style.css")
      const newStyleFile = path.resolve(targetPath, "style", "index.css")
      return fs.promises.rename(sytleFile, newStyleFile)
    })
    .then(() => {
      // move script.js into index.js
      const jsFile = path.resolve(targetPath, "script.js")
      const newJsFile = path.resolve(targetPath, "index.js")
      return fs.promises.rename(jsFile, newJsFile)
    })
    .then(() => {
      console.log(chalk.green(`create project ${targetPath} success!`))
    })
    .catch((err) => {
      console.log(chalk.red(`Failed to create project ${targetPath}`))
      console.log(err)
    })
}

generateProject(options.name)
