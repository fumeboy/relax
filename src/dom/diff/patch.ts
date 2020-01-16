import { nodePatchTypes, patchA, patchB, patchC, patchD, propPatchTypes } from './h'

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
            element.addEventListener(patchObj.key, patchObj.value)
        }
    }
}

// 给 DOM 打个补丁
export function patch(elem: Element, patchObj: patchB | patchC) {
    console.log(elem, patchObj)
    if (!elem || !elem.parentNode || !patchObj) {
        return
    }
    const parent = elem.parentNode

    // 新建元素
    if (patchObj.type === nodePatchTypes.CREATE) {
        return parent.appendChild((<patchB>patchObj).elem.render())
    }

    // 删除元素
    if (patchObj.type === nodePatchTypes.REMOVE) {
        return parent.removeChild(elem)
    }

    // 替换元素
    if (patchObj.type === nodePatchTypes.REPLACE) {
        return parent.replaceChild((<patchB>patchObj).elem.render(), elem)
    }

    // 更新元素
    if (patchObj.type === nodePatchTypes.UPDATE) {
        const { attr, event, children } = <patchC>patchObj
        updateAttr(elem, attr)
        updateEvents(elem, event)
        for (let i = 0, len = children.length; i < len; i++) {
            patch(elem.childNodes[i] as Element, children[i])
        }
    }
}
