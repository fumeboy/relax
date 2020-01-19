type vchild = vnode | vtext | Element

type events = {
    [k in keyof HTMLElementEventMap]?: EventListenerOrEventListenerObject
}

type IAttr = {
    [key: string]: string
}

declare class vtext {
    text: string
    readonly vtype: number
    render(): Element
}

declare class vnode {
    readonly vtype: number
    readonly tag: string
    events: events
    attrs: IAttr
    children: vchild[]
    render(): Element
    c(...children: (vnode | string | vtext)[]): vnode
    on(events: events): vnode
    a(attrs: IAttr): vnode
}

interface Element {
    vtype: number
    v: vnode
    update(e: vchild)
    render(): Element
}
