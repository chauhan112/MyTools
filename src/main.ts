// import { Home } from "./rlib/timeline/t2025/april/DomainOps/Home";
import { Page } from "./rlib/timeline/t2025/may/ToolsHomepage/Page";
import "./style.css";
import { StructureForm } from "./rlib/timeline/t2025/april/DomainOps/StructureForm";
// const home = new Home();
const page = Page();
// const cf = StructureForm();

// document
//     .querySelector<HTMLDivElement>("#app")!
//     .appendChild(cf.crud.layout.getElement());

document.querySelector<HTMLDivElement>("#app")!.appendChild(page.getElement());
