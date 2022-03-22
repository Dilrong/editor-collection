import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import EditorJS from '@editorjs/editorjs';
import List from '@editorjs/list';
import Layout from "./Layout";

export default class Editorjs implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Editor.js";
        Layout.current.content.append(
            this.container = el("section.editor-view",
                el("h1", "Editor.js"),
                el("div", { id: "editorjs" }),
            ),
        );
        this.init();
    }

    private init() {
        new EditorJS({
            holder: 'editorjs',
            tools: {
                list: {
                    class: List,
                    inlineToolbar: true
                }
            },
            data: {
                blocks: [
                    {
                        type: "paragraph",
                        data: {
                            text: "Hello, Editor.js",
                        }
                    }
                ]
            }
        });
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}