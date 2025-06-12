import { Page } from "./rlib/timeline/t2025/may/ToolsHomepage/Page";
import "./style.css";
import { CircleCheck } from "lucide";
import { Page as FileSearchPage } from "./rlib/timeline/t2025/may/FileSearch/Components";
import { Page as HtmlToMyLib } from "./rlib/timeline/t2025/may/HtmlToMyLib/index";

import { DEF_TITLE } from "./rlib/timeline/t2025/may/ToolsHomepage/Components";

const page = Page();
page.layout.s.wrapper.s.header.s.wrapper.s.goBack.s.img.update({
    src: "logo.png",
});

page.addApp({
    title: "Content Searching",
    description: "Search in your git repo files content",
    link: "task-manager/",
    routeFunc: () => {
        const fspage = FileSearchPage();
        page.mainBody.clear();
        page.mainBody.display(fspage);
        page.layout.s.wrapper.s.header.s.updateTitle(
            DEF_TITLE + " - " + "Content Searching"
        );
    },
    icon: CircleCheck,
});

page.addApp({
    title: "Links Opener",
    description: "Search in your git repo files content",
    link: "task-manager/",
    routeFunc: () => {
        const fspage = FileSearchPage();
        page.mainBody.clear();
        page.mainBody.display(fspage);
        page.layout.s.wrapper.s.header.s.updateTitle(
            DEF_TITLE + " - " + "Content Searching"
        );
    },
    icon: CircleCheck,
});

page.addApp({
    title: "HTML to my lib",
    description: "convert html to js format",
    link: "html-to-my-lib/",
    routeFunc: () => {
        const fspage = HtmlToMyLib();
        page.mainBody.clear();
        page.mainBody.display(fspage);
        page.layout.s.wrapper.s.header.s.updateTitle(
            DEF_TITLE + " - " + "HTML to my lib"
        );
    },
    icon: CircleCheck,
});
page.router.route();
document.querySelector<HTMLDivElement>("#app")!.appendChild(page.getElement());
