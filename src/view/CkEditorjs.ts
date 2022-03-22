import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class CkEditorjs implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "CKEditor.js";
        Layout.current.content.append(
            this.container = el("section.editor-view",
                el("h1", "CKEditor.js"),
                el("div", { id: "editor" }),
            ),
        );
        this.init();
    }

    private init() {
        ClassicEditor
            .create(document.querySelector('#editor'))
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}