import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { mobileNavbarToggle } from "./utils/mobileNavbarToggle";
import "./style.css";
import { Footer } from "./components/Footer";
import { NotFound } from "./components/404";

const app = document.querySelector("#app");

function render(components) {
  app.appendChild(components);
}

function location() {
  return window.location.pathname;
}

if (location() == "/") {
  render(Header());
  render(About());
  render(Projects());
  render(Contact());
  render(Footer());
} else {
  render(NotFound());
}

mobileNavbarToggle();
