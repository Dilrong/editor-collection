import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import { EditorCore } from "@toast-ui/editor";
import Layout from "./Layout";

export default class Toastjs implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Toast.js";
        Layout.current.content.append(
            this.container = el("section.editor-view",
                el("h1", "Toast.js"),
                el("div", { id: "editor" }),
            ),
        );
        this.init();
    }

    private init() {
        new EditorCore({
            el: document.querySelector('#editor')!,
            height: '600px',
            initialEditType: 'markdown',
            previewStyle: 'vertical'
        });
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}