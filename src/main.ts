import "./style.css";
import { MainPage } from "./rlib/timeline/t2025/may/ToolsHomepage/Page";

const page = MainPage();

document.querySelector<HTMLDivElement>("#app")!.appendChild(page.getElement());
