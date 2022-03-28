const fs = require("fs")

fs.promises
  .mkdir("test")
  .then((t) => {
    console.log("create directory success!")
  })
  .catch((err) => {
    console.log(`something bad happens: ${err}`)
  })
