import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { mobileNavbarToggle } from "./utils/mobileNavbarToggle";
import "./style.css";
import { Footer } from "./components/Footer";
import { NotFound } from "./components/404";
import { UnderDevelopment } from "./components/UnderDevelopment";

const app = document.querySelector("#app");
const initialContent = app.innerHTML;

function render(components) {
  app.appendChild(components);
}

function route() {
  const path = window.location.pathname;

  if (path == "/") {
    render(Header());
    render(About());
    render(Projects());
    render(Contact());
    render(Footer());
    mobileNavbarToggle();
  } else if (path == "/projects/all") {
    render(UnderDevelopment());
  } else {
    render(NotFound());
  }
}

function scrollTo(target) {
  const targetElement = document.querySelector(target);
  if (targetElement) {
    targetElement.scrollIntoView();
  }
}

document.addEventListener("click", (e) => {
  const { target } = e;

  if (target.tagName === "A" && target.getAttribute("href")) {
    e.preventDefault();
    const href = target.getAttribute("href");

    if (href.startsWith("/#")) {
      scrollTo(`${href.substring(1)}`);
    } else if (href.startsWith("/")) {
      app.innerHTML = initialContent;
      history.pushState(null, null, href);

      route();
    } else {
      window.open(href);
    }
  }
});

window.addEventListener("popstate", () => {
  app.innerHTML = initialContent;
  route();
});

route();
