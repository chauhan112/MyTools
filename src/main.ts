import { Page } from "./rlib/timeline/t2025/may/ToolsHomepage/Page";
import "./style.css";

const page = Page();

document.querySelector<HTMLDivElement>("#app")!.appendChild(page.getElement());
