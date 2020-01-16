type events = {
    [k in keyof HTMLElementEventMap]?: EventListenerOrEventListenerObject
}

type IAttr = {
    [key: string]: string
}
// interface Element {
//     store: {
//         // 添加了存储单元，也不知道有没有副作用
//         attrs: IAttr
//         events: events
//     }
//     a(attr: IAttr): Element
//     on(events: events): Element
//     c(...children: (Element | string)[]): Element
//     del()
// }
