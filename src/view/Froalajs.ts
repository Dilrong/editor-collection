import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import FroalaEditor from "froala-editor";
import Layout from "./Layout";

export default class Froalajs implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Froala.Js";
        Layout.current.content.append(
            this.container = el("section.editor-view",
                el("h1", "Froala.js"),
                el("", { id: "editor" }),
            ),
        );
        this.init();
    }

    private init() {
        new FroalaEditor("#editor");
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}