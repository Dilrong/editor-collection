import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import ViewUtil from "./ViewUtil";

export default class Layout implements View {

    public static current: Layout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;
        BodyNode.append(
            (this.container = el(".layout",
                el("header",
                    el(".nav",
                        el("a", "Froala", {
                            click: () => {
                                ViewUtil.go("/froalajs")
                            }
                        }),
                        el("a", "CKEditor", {
                            click: () => {
                                ViewUtil.go("/ckeditor")
                            }
                        }),
                        el("a", "Quill.js", {
                            click: () => {
                                ViewUtil.go("/quilljs")
                            }
                        }),
                        el("a", "TOAST UI Editor", {
                            click: () => {
                                ViewUtil.go("/toastjs")
                            }
                        }),
                        el("a", "Editor.js", {
                            click: () => {
                                ViewUtil.go("/editorjs")
                            }
                        }),
                        el("a", "tinyMCE", {
                            click: () => {
                                ViewUtil.go("/tinymcejs")
                            }
                        }),
                    ),
                ),
                el("main", (this.content = el(".content"))),
                el("footer"),
            )),
        );
    }

    public set title(title: string) {
        document.title = `${title} | Editor Collection`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}