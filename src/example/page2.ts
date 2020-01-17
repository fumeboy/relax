import { vnode } from '../dom/node'
import button from './components/button/index'

let $root = document.querySelector('#root')

let e = new vnode('ul').c(button(), button(), button()).render()
$root.appendChild(e)
