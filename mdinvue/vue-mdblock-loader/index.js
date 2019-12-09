var MarkdownIt = require('markdown-it')
const { compileTemplate } = require('@vue/component-compiler-utils')
const compiler = require('vue-template-compiler')

const md = new MarkdownIt()

const renderReg = /var render = (function\(\) \{([^\}]*?)+})/m

module.exports = function(source, map) {
  const tpl = '<div>' + md.render(source) + '</div>'
  let finalOptions = {
    source: tpl,
    filename: this.resourcePath,
    compiler: compiler
  }
    
  const { code } = compileTemplate(finalOptions)

  let renderFn = code.match(renderReg)[1]

  this.callback(
    null,
    `export default function (component) {
      component.options.__mdRender = ${renderFn}
    }`,
    map
  )
}