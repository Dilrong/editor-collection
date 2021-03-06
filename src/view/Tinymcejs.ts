import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import tinymce from "tinymce";
import Layout from "./Layout";

export default class Tinymcejs implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Tinymce.Js";
        Layout.current.content.append(
            this.container = el("section.editor-view",
                el("h1", "Tinymce.js"),
                el("textarea", { id: "editor", name: "content" }),
            ),
        );
        this.init();
    }

    private init() {
        tinymce.init({
            selector: "#editor",
            theme: "modern",
            language: "ko",
        });
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}