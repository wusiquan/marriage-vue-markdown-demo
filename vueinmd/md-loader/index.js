const MarkdownIt = require('markdown-it')

const md = new MarkdownIt({
  html: true
})

module.exports = function(source) {
  const content = md.render(source)

  return `
    <template>
      <div>
        ${content}
      </div>
    </template>
  `
}