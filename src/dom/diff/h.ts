import { vnode } from '../node'

export const nodePatchTypes = {
    CREATE: 0,
    REMOVE: 1,
    REPLACE: 2,
    UPDATE: 3
}

export const propPatchTypes = {
    REMOVE: 0,
    UPDATE: 1
}

export interface patchA {
    type: 0 | 1
    key: string
    value: any
}

export interface patchD {
    type: 0 | 1
    key: string
    value: EventListenerOrEventListenerObject
}

export interface patchB {
    type: 0 | 1 | 2 | 3
    elem: vchild
}

export interface patchC {
    type: 0 | 1 | 2 | 3
    event: patchD[]
    attr: patchA[]
    children: patchB[]
}
