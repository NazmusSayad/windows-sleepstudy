const fs = require('fs')
const path = require('path')

const files = fs
  .readdirSync(__dirname)
  .filter(
    (file) =>
      file !== 'index.js' && file !== 'index.html' && file.endsWith('.html')
  )

fs.writeFileSync(
  path.join(__dirname, 'index.html'),
  files.map((file) => `<a href="./${file}">${file}</a>`).join('<br>')
)

console.log(files)
