import { Page } from "./rlib/timeline/t2025/may/ToolsHomepage/Page";
import "./style.css";

const page = Page();
page.s.wrapper.s.header.s.wrapper.s.goBack.s.img.update({
    src: "logo.png",
});
console.log();

document.querySelector<HTMLDivElement>("#app")!.appendChild(page.getElement());
