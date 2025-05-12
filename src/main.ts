import { Page } from "./rlib/timeline/t2025/may/ToolsHomepage/Page";
import "./style.css";
import { CircleCheck } from "lucide";
import { Page as FileSearchPage } from "./rlib/timeline/t2025/may/FileSearch/Components";
import {
    LightFsWrapper,
    IsoGitWrapper,
    // ContentSearch,
} from "./rlib/timeline/t2025/may/FileSearch/model";
import { DEF_TITLE } from "./rlib/timeline/t2025/may/ToolsHomepage/Components";
// import { Tools } from "./rlib/timeline/t2025/april/tools";

const fs = new LightFsWrapper("git-search-repo-fs");
const igw = new IsoGitWrapper(fs);
// const cs = new ContentSearch();

const page = Page();
page.layout.s.wrapper.s.header.s.wrapper.s.goBack.s.img.update({
    src: "logo.png",
});
const fspage = FileSearchPage();
page.addApp({
    title: "Content Searching",
    description: "Search in your git repo files content",
    link: "task-manager/",
    routeFunc: () => {
        page.mainBody.clear();
        page.mainBody.display(fspage);
        page.layout.s.wrapper.s.header.s.updateTitle(
            DEF_TITLE + " - " + "Content Searching"
        );
    },
    icon: CircleCheck,
});

page.addApp({
    title: "Git Clone Test",
    description: "Just Testing Git Clone",
    link: "git-clone/",
    routeFunc: () => {
        page.mainBody.clear();
        // page.mainBody.comp.update({
        //     textContent: "Git Clone Test",
        // });
        // igw.clone("https://github.com/chauhan112/JSlib.git").then(() => {
        //     console.log("Cloned");
        // });
        // igw.pull({ name: "chauhan112", email: "rajababuchauhan500@gmail.com" });
        // fs.listfilesWithIgnore("/", [".git"]).then((res) => {
        //     console.log(res);
        // });
        // fs.read("/repo/timeline/t2024/unblock.js").then((res) => {
        //     let area = Tools.comp("textarea", {
        //         placeholder: "Hello",
        //         class: "flex-1",
        //     });
        //     area.getElement().value = res;
        //     // area.update({ value: res });
        //     page.mainBody.display(area);
        // });
    },
    icon: CircleCheck,
});
page.router.route();
// CardComponent("Task Manager");
document.querySelector<HTMLDivElement>("#app")!.appendChild(page.getElement());
