import { nodePatchTypes, patchA, patchB, patchC, patchD, propPatchTypes } from './h'
import { v, v_text, vchild } from '../node'

export function diff(old: vchild, new_: vchild): patchB | patchC {
    // 新建 node
    if (old == undefined) {
        return <patchB>{
            type: nodePatchTypes.CREATE,
            elem: new_
        }
    }

    // 删除 node
    if (new_ == undefined) {
        return <patchB>{
            type: nodePatchTypes.REMOVE
        }
    }
    if (!(old.type || new_.type) && (<v>old).tag === (<v>new_).tag) {
        // v v :           (F || F)
        // v string :      (F || T)
        // string string : (T || T)
        // 更新 node
        // 比较 attrs 的变化
        const attrDiff = diffAttr(<v>old, <v>new_)
        const eventDiff = diffEvents(<v>old, <v>new_)
        // 比较 children 的变化
        const childrenDiff = diffChildren(<v>old, <v>new_)
        // 如果 attr 或者 children 有变化，才需要更新
        if (attrDiff.length > 0 || eventDiff.length > 0 || childrenDiff.some((patchObj) => patchObj !== undefined)) {
            return <patchC>{
                type: nodePatchTypes.UPDATE,
                event: eventDiff,
                attr: attrDiff,
                children: childrenDiff
            }
        } else return
    }

    // 替换 node
    // 只有 string === string 可能发生
    if (old.type && new_.type && (<v_text>old).text === (<v_text>new_).text) {
        return
    }
    return <patchB>{
        type: nodePatchTypes.REPLACE,
        elem: new_
    }
}

// 比较 attr 的变化
function diffAttr(old: v, new_: v): patchA[] {
    const patches: patchA[] = []
    const allAttr = { ...old.attrs, ...new_.attrs }
    // 获取新旧所有属性名后，再逐一判断新旧属性值
    Object.keys(allAttr).forEach((key) => {
        const oldValue = old.attrs[key]
        const newValue = new_.attrs[key]
        // 删除属性
        if (newValue == undefined) {
            patches.push(<patchA>{
                type: propPatchTypes.REMOVE,
                key,
                value: null
            })
        }
        // 更新属性
        else if (oldValue !== newValue) {
            patches.push(<patchA>{
                type: propPatchTypes.UPDATE,
                key,
                value: newValue
            })
        }
    })
    return patches
}

// 比较 events 的变化
function diffEvents(old: v, new_: v): patchD[] {
    const patches: patchD[] = []
    const allEvents = { ...old.events, ...new_.events }
    // 获取新旧所有事件名后，再逐一判断新旧值
    Object.keys(allEvents).forEach((key) => {
        const oldValue = old.events[key]
        const newValue = new_.events[key]
        // 删除事件
        if (newValue == undefined) {
            patches.push(<patchA>{
                type: propPatchTypes.REMOVE,
                key,
                value: null
            })
        }
        // 更新事件
        else if (oldValue == undefined || oldValue !== newValue) {
            patches.push(<patchA>{
                type: propPatchTypes.UPDATE,
                key,
                value: newValue
            })
        }
    })
    return patches
}

// 比较 children 的变化
function diffChildren(old: v, new_: v): patchB[] {
    // 可优化点
    const patches = []
    // 获取子元素最大长度
    const childLength = Math.max(old.children.length, new_.children.length)
    // 遍历并diff子元素
    for (let i = 0; i < childLength; i++) {
        patches.push(diff(old.children[i], new_.children[i]))
    }
    return patches
}
