import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Home implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Home";
        Layout.current.content.append(
            this.container = el("section.home-view",
                el("h1", "Editor Collection"),
                el("h2", "에디터 비교를 위해 만들진 웹 사이트로 상단 메뉴를 통해 각 에디터 데모 사용이 가능합니다."),
            ),
        );
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}