import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Toastjs implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Toast.js";
        Layout.current.content.append(
            this.container = el("section.editor-view",
                el("h1", "Toast.js"),
                el("p", "el 문법 충돌"),
            ),
        );
        this.init();
    }

    private init() {
        // new Editor({
        //     el: '#editor',
        //     height: '500px',
        //     initialEditType: 'markdown',
        //     previewStyle: 'vertical'
        // }),
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}