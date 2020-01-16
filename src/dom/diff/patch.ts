import { nodePatchTypes, patchA, patchB, patchC, patchD, propPatchTypes } from './h'
import { e } from '../../../build/tsc_build/dom/elem'

function updateAttr(element: Element, attr: patchA[]) {
    if (!attr) {
        return
    }
    for (let x in attr) {
        let patchObj: patchA = attr[x]
        // 删除属性
        if (patchObj.type === propPatchTypes.REMOVE) {
            element.removeAttribute(patchObj.key)
        }
        // 更新或新建属性
        else if (patchObj.type === propPatchTypes.UPDATE) {
            element.setAttribute(patchObj.key, patchObj.value)
        }
    }
}

function updateEvents(element: Element, events: patchD[]) {
    if (!events) {
        return
    }
    for (let x in events) {
        let patchObj: patchA = events[x]
        if (patchObj.type === propPatchTypes.REMOVE) {
            element.removeEventListener(patchObj.key, patchObj.value)
        } else if (patchObj.type === propPatchTypes.UPDATE) {
            element.removeEventListener(patchObj.key, patchObj.value[0])
            element.addEventListener(patchObj.key, patchObj.value[1])
        }
    }
}

// 给 DOM 打个补丁
export function patch(elem: Element, patchObj: patchB | patchC, parent?: Element) {
    if (!(parent || elem.parentNode) || !patchObj) {
        return
    }
    if (!parent) parent = elem.parentNode as Element

    // 新建元素
    if (patchObj.type === nodePatchTypes.CREATE) {
        console.log(1234)
        parent.appendChild((<patchB>patchObj).elem.render())
        return
    }

    // 删除元素
    if (patchObj.type === nodePatchTypes.REMOVE) {
        parent.removeChild(elem)
        return 1
    }

    // 替换元素
    if (patchObj.type === nodePatchTypes.REPLACE) {
        parent.replaceChild((<patchB>patchObj).elem.render(), elem)
        return
    }

    // 更新元素
    if (patchObj.type === nodePatchTypes.UPDATE) {
        const { attr, event, children } = <patchC>patchObj
        updateAttr(elem, attr)
        updateEvents(elem, event)
        for (let i = 0, j = 0, len = children.length; i < len; j++, i++) {
            const b = patch(elem.childNodes[i] as Element, children[j], elem)
            if (b === 1) i--
        }
    }
}
