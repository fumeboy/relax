import { vnode } from '../dom/node'
import button from './components/button/index'
import todolist from './components/todoList/index'

let $root = document.querySelector('#root')
// let btn = new v('button').c('btn').on({ click: () => update(e, e2) })
// let e = new v('ul').c('item 1', 'item 2', btn)
// let e2 = new v('ul').c('item 1', 'item 2', 'item 3')
// e.live($root)

let e = new vnode('ul').c(button(), button(), button()).render()
// $root.appendChild(e)
// todolist.live($root)
$root.appendChild(todolist)
