export class vtext {
    text: string
    readonly vtype: number = 1
    constructor(t: string) {
        this.text = t
    }
    render(): Element {
        return (document.createTextNode(this.text) as any) as Element
    }
}
