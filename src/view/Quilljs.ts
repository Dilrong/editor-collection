import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Quill from "quill";
import Layout from "./Layout";

export default class Quilljs implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Quill.js";
        Layout.current.content.append(
            this.container = el("section.editor-view",
                el("h1", "Quill.js"),
                el("div", { id: "editor" }),
            ),
        );
        this.init();
    }

    private init() {
        new Quill("#editor", {
            theme: 'snow'
        });
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}