import { diff } from './diff/diff'
import { patch } from './diff/patch'
import { vnode } from './node'

Element.prototype.update = function(new_: vnode) {
    const patchObj = diff(this.v, new_)
    patch(this, patchObj)
    this.v = new_
}

Element.prototype.render = function() {
    return this
}
