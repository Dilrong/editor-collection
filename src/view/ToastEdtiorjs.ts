import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import EditorCore from "@toast-ui/editor";
import Layout from "./Layout";

export default class ToastEdtiorjs implements View {

    private container: DomNode;

    private editor: DomNode;

    constructor() {
        Layout.current.title = "Toast.js";
        Layout.current.content.append(
            this.container = el("section.editor-view",
                el("h1", "Toast.js"),
                this.editor = el("div", { id: "editor" }),
            ),
        );
        this.init();
    }

    private init() {
        new EditorCore({
            el: this.editor.domElement,
            height: "500px",
            initialEditType: 'markdown',
            previewStyle: 'vertical',
        });
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}