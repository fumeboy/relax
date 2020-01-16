// data

import { vnode } from '../../../dom/node'

interface ITodoItem {
    content: string
    done: boolean
}
let todoList: ITodoItem[] = []
let currentFilter = 0 // 0-全部 1-已完成 2-未完成

try {
    todoList = JSON.parse(localStorage['todoList'])
} catch {
    todoList = [
        { content: 'item a', done: true },
        { content: 'item b', done: false },
        { content: 'item c', done: false }
    ]
}

// data

function renderList(list = todoList) {
    let ret = new vnode('ul')
    let children = []
    for (let x in list) {
        children.push(new vnode('li').c(list[x].content))
    }
    ret.c(...children)
    return ret
}

function filter(filter: number = currentFilter) {
    currentFilter = filter
    let showList = []
    if (filter === 1) {
        showList = todoList.filter((n) => n.done)
    } else if (filter === 2) {
        showList = todoList.filter((n) => !n.done)
    } else {
        showList = todoList
        currentFilter = 0
    }
    list.update(renderList(showList))
}

// elem

let title = new vnode('h1').c('TODO list')
let tabs = new vnode().c(
    new vnode().c('all').on({ click: () => filter(0) }),
    new vnode().c('finished').on({ click: () => filter(1) }),
    new vnode().c('todo').on({ click: () => filter(2) })
)
let list = renderList().render()
let input = new vnode('input')
    .a({
        type: 'text'
    })
    .render()
let button = new vnode('button').c('input').on({
    click: () => {
        let target = (input as any) as HTMLInputElement
        let data = {
            content: target.value,
            done: false
        }
        todoList.push(data)
        list.update(renderList())
        target.value = ''
    }
})

export default new vnode().c(title, tabs, list, input, button).render()
