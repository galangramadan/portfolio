import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Work } from "./components/Work";
import "./style.css";

const app = document.querySelector("#app");

app.appendChild(Header());
app.appendChild(About());
app.appendChild(Work());
app.appendChild(Contact());
