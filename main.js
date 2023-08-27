import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Work } from "./components/Work";
import { mobileNavbarToggle } from "./utils/mobileNavbarToggle";
import "./style.css";

const app = document.querySelector("#app");

function render(components) {
  app.appendChild(components);
}

render(Header());
render(About());
render(Work());
render(Contact());

mobileNavbarToggle();
