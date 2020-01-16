import '../dom/diff'
import { v } from '../dom/node'
import { update } from '../dom/diff/index'

let $root = document.querySelector('#root')
let btn = new v('button').c('btn').on({ click: () => update(e, e2) })
let e = new v('ul').c('item 1', 'item 2', btn)
let e2 = new v('ul').c('item 1', 'item 2', 'item 3')
e.live($root)
// $root.appendChild(a)
