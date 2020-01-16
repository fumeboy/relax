export class vtext {
    text: string
    readonly type: number = 1
    constructor(t: string) {
        this.text = t
    }
    render(): Element {
        return (document.createTextNode(this.text) as any) as Element
    }
}
