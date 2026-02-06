import { MainPage } from "./rlib/timeline/t2025/may/ToolsHomepage/Page";
import "./style.css";


const page = MainPage();

document.querySelector<HTMLDivElement>("#app")!.appendChild(page.getElement());
