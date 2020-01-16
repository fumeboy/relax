import { diff } from './diff'
import { patch } from './patch'
import { v } from '../node'

export function update(old: v, new_: v) {
    // 生成差异对象
    const patchObj = diff(old, new_)
    console.log(patchObj)
    patch(old.elem, patchObj)
}
