export let h = function(tagName: string) {
    return document.createElement(tagName)
}

Element.prototype.on = function(events: events) {
    for (let k in events) {
        this.addEventListener(k, events[k])
    }
    return this
}

Element.prototype.p = function(props: Element) {
    for (let k in props) {
        this[k] = props[k]
    }
    return this
}

Element.prototype.c = function(...children: (Element | string)[]) {
    for (let i = 0, len = children.length; i < len; i++) {
        if (typeof children[i] === 'string') {
            this.appendChild(document.createTextNode(<string>children[i]))
        } else {
            this.appendChild(<Element>children[i])
        }
    }
    return this
}
