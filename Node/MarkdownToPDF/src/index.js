var markdownPdf = require("markdown-pdf")
var fs = require("fs")
var path = require("path")

fs.createReadStream(path.join(__dirname,"../static/resume.md")).pipe(markdownPdf()).pipe(fs.createWriteStream(path.join(__dirname,"../static/resume.pdf")))



