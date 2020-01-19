const _ = require('lodash')
const path = require('path')
const fs = require('fs')
class SimpleWebpackHTMLEntrypoint {
    constructor(options) {
        // Default options
        this.options = _.extend(
            {
                template: path.join(__dirname, 'default.html')
            },
            options
        )
    }

    apply(compiler) {
        compiler.plugin.bind(
            compiler,
            'afterEmit'
        )((compilation) => {
            let entrypoints = compilation.getStats().toJson().entrypoints
            let template = fs.readFileSync(this.options.template, null).toString()
            console.log(entrypoints)
            for (let x in entrypoints) {
                let insert_css = ''
                let insert_js = ''
                for (let y of entrypoints[x].assets) {
                    let ext = path.extname(y)
                    if (ext === '.css') {
                        insert_css += `<link href="` + y + `" rel="stylesheet">`
                    } else if (ext === '.js') {
                        insert_js += `<script type="text/javascript" src="` + y + `"></script>`
                    }
                }
                let text = template.replace('[css]', insert_css).replace('[js]', insert_js)
                fs.writeFileSync(path.join(compilation.options.output.path, x + '.html'), text)
            }
        })
    }
}

module.exports = SimpleWebpackHTMLEntrypoint
