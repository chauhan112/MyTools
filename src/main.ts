import { Page } from "./rlib/timeline/t2025/may/ToolsHomepage/Page";
import "./style.css";
import { CircleCheck } from "lucide";
const page = Page();
page.layout.s.wrapper.s.header.s.wrapper.s.goBack.s.img.update({
    src: "logo.png",
});
page.router.route();
page.addApp({
    title: "Task Manager",
    description: "Organize your daily tasks and boost productivity.",
    link: "task-manager/",
    routeFunc: () => {
        page.mainBody.clear();
    },
    icon: CircleCheck,
});
page.router.route();
// CardComponent("Task Manager");
document.querySelector<HTMLDivElement>("#app")!.appendChild(page.getElement());
