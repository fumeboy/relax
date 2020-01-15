import { h } from '../relax/dom/elem'

let $root = document.querySelector('#root')

let elem = h('ul').c('item 1', 'item 2')
let button = h('button')
    .c('button')
    .on({
        click: () => {
            elem.childNodes[0].replaceWith(h('p').c('abc'))
        }
    })

$root.appendChild(elem)
$root.appendChild(button)
