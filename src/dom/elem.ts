// export let e = function(tagName?: string) {
//     if (!tagName) {
//         tagName = 'div'
//     }
//     let ret = document.createElement(tagName)
//     ret.store = { attrs: null, events: null }
//     return ret
// }
//
// Element.prototype.del = function() {
//     this.parentNode.removeChild(this)
// }
//
// Element.prototype.on = function(events: events) {
//     this.store.events = events
//     return this
// }
//
// Element.prototype.a = function(attr: IAttr) {
//     this.store.attrs = attr
//     return this
// }
//
// Element.prototype.c = function(...children: (Element | string)[]) {
//     for (let i = 0, len = children.length; i < len; i++) {
//         if (typeof children[i] === 'string') {
//             this.appendChild(document.createTextNode(<string>children[i]))
//         } else if (children[i] instanceof Element) {
//             this.appendChild(<Element>children[i])
//         }
//     }
//     return this
// }
