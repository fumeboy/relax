export type vchild = v | v_text

export class v {
    readonly type: number
    tag: string
    events: events
    attrs: IAttr
    children: vchild[]
    elem: Element
    a(attrs: IAttr): v {
        this.attrs = attrs
        return this
    }
    on(events: events): v {
        this.events = events
        return this
    }
    c(...children: (v | string | v_text)[]): v {
        for (let x in children) {
            if (typeof children[x] === 'string') children[x] = new v_text(<string>children[x])
        }
        this.children = <vchild[]>children
        return this
    }
    live(parent: Element): v {
        let e = this.render()
        parent.appendChild(e)
        return this
    }
    render(): Element {
        let ret = document.createElement(this.tag)
        for (let x in this.attrs) {
            ret.setAttribute(x, this.attrs[x])
        }
        for (let x in this.events) {
            ret.addEventListener(x, this.events[x])
        }
        for (let x in this.children) {
            ret.appendChild(this.children[x].render())
        }
        this.elem = ret
        return ret
    }
    constructor(tagName?: string) {
        if (!tagName) tagName = 'div'
        this.tag = tagName
        this.type = 0
    }
}

export class v_text {
    text: string
    elem: Element
    readonly type: number
    constructor(t: string) {
        this.text = t
        this.type = 1
    }
    render(): Element {
        let ret = (document.createTextNode(this.text) as any) as Element
        this.elem = ret
        return ret
    }
}
