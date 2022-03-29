import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import EditorJS from '@editorjs/editorjs';
import List from '@editorjs/list';
import Delimiter from '@editorjs/delimiter';
import Table from '@editorjs/table';
import Warning from '@editorjs/warning';
import InlineCode from '@editorjs/inline-code';
import Marker from '@editorjs/marker';
import Quote from '@editorjs/quote';
import Embed from '@editorjs/embed';
import SimpleImage from '@editorjs/simple-image';
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
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }
                },
                delimiter: Delimiter,
                table: Table,
                warning: Warning,
                quote: Quote,
                embed: Embed,
                image: SimpleImage,
                // image: {
                //     class: ImageTool,
                //     config: {
                //         endpoints: {
                //             byFile: 'http://localhost:8413/uploadFile',
                //             byUrl: 'http://localhost:8413/fetchUrl',
                //         }
                //     }
                // },
                inlineCode: {
                    class: InlineCode,
                    shortcut: 'CMD+SHIFT+I',
                },
                Marker: {
                    class: Marker,
                    shortcut: 'CMD+SHIFT+M',
                },
                // linkTool: {
                //     class: LinkTool,
                //     config: {
                //         endpoint: 'http://localhost:8413/fetchUrl',
                //     }
                // }
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