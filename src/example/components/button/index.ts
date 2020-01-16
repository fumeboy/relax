import { vnode } from '../../../dom/node'

export default () => {
    let num = 0
    let ret: Element
    let ck = () => {
        num += 1
        ret.update(t())
    }
    let t = () => {
        return new vnode('button').c(num + '').on({
            click: ck
        })
    }
    ret = t().render()
    return ret
}
