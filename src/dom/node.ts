import './elem'
import { vtext } from './text'

export class vnode {
    readonly vtype: number = 0
    tag: string
    events: events
    attrs: IAttr
    children: vchild[]
    a(attrs: IAttr): vnode {
        this.attrs = attrs
        return this
    }
    on(events: events): vnode {
        this.events = events
        return this
    }
    c(...children: (vnode | string | vtext | Element)[]): vnode {
        for (let x in children) {
            if (typeof children[x] === 'string') children[x] = new vtext(<string>children[x])
        }
        this.children = <vchild[]>children
        return this
    }
    render(): Element {
        let ret = document.createElement(this.tag) as Element
        ret.v = this
        ret.vtype = 2
        for (let x in this.attrs) {
            ret.setAttribute(x, this.attrs[x])
        }
        for (let x in this.events) {
            ret.addEventListener(x, this.events[x])
        }
        for (let i = 0, len = this.children.length; i < len; i++) {
            ret.appendChild(this.children[i].render())
        }
        return ret
    }
    constructor(tagName?: string) {
        if (!tagName) tagName = 'div'
        this.tag = tagName
        this.children = []
    }
}
