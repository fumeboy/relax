// import { e } from '../../../dom/elem'
//
// // data
//
// interface ITodoItem {
//     content: string
//     done: boolean
// }
// let todoList: ITodoItem[] = []
// let currentFilter = 0 // 0-全部 1-已完成 2-未完成
//
// try {
//     todoList = JSON.parse(localStorage['todoList'])
// } catch {
//     todoList = [
//         { content: 'item a', done: true },
//         { content: 'item b', done: false },
//         { content: 'item c', done: false }
//     ]
// }
//
// // data
//
// function itemRender(data: ITodoItem) {
//     let ret = <bundle<ITodoItem>>e('li')
//         .p(<Element>{ className: data.done ? 'done' : '' })
//         .c(
//             e('span')
//                 .on({
//                     click: () => {
//                         ret.data.done = !ret.data.done
//                     }
//                 })
//                 .c(data.content)
//         )
//     ret.data = data
//     return ret
// }
//
// let todoList_elem = todoList.mirror(itemRender)
//
// function filter(filter: number = currentFilter) {
//     currentFilter = filter
//     let showList: bundleO<ITodoItem>[] = []
//     if (filter === 1) {
//         showList = todoList_elem.filter((n) => n.data.done)
//     } else if (filter === 2) {
//         showList = todoList_elem.filter((n) => !n.data.done)
//     } else {
//         showList = todoList_elem
//         currentFilter = 0
//     }
//     list.c(...showList)
// }
//
// // elem
//
// let title = e('h1').c('TODO list')
// let tabs = e().c(
//     e()
//         .c('all')
//         .on({ click: () => filter(0) }),
//     e()
//         .c('finished')
//         .on({ click: () => filter(1) }),
//     e()
//         .c('todo')
//         .on({ click: () => filter(2) })
// )
// let list = e('ul').c(...todoList_elem)
// let input = e('input').a({
//     type: 'text'
// })
// let button = e('button')
//     .c('input')
//     .on({
//         click: () => {
//             let target = input as HTMLInputElement
//             let data = {
//                 content: target.value,
//                 done: false
//             }
//             let elem = itemRender(data)
//             todoList.push(data)
//             todoList_elem.push(elem)
//             list.appendChild(elem)
//             target.value = ''
//         }
//     })
//
// export default e().c(title, tabs, list, input, button)
