import { SkyRouter } from "skyrouter";
import Wallet from "./klaytn/Wallet";
import msg from "msg.js";
import superagent from "superagent";
import BrowserInfo from "./BrowserInfo";
import Layout from "./view/Layout";
import Home from "./view/Home";
import Editorjs from "./view/Editorjs";
import Quilljs from "./view/Quilljs";
import Tinymcejs from "./view/Tinymcejs";
import Toastjs from "./view/toastjs";
import Froalajs from "./view/Froalajs";

(async () => {

    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("**", Layout);
    SkyRouter.route("", Home);
    SkyRouter.route("froalajs", Froalajs);
    SkyRouter.route("quilljs", Quilljs);
    SkyRouter.route("toastjs", Toastjs);
    SkyRouter.route("editorjs", Editorjs);
    SkyRouter.route("tinymcejs", Tinymcejs);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }

    if (await Wallet.connected() !== true) {
        await Wallet.connect();
    }
})();