type events = {
    [k in keyof HTMLElementEventMap]?: EventListenerOrEventListenerObject
}

interface Element {
    p(props: Element): Element
    on(events: events): Element
    c(...children: (Element | string)[]): Element
}
