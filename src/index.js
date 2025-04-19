import "./css/style.css";
import { loadPage as loadHomePage } from "./home.js";
import { loadPage as loadMenuPage } from "./menu.js";
import { loadPage as loadAboutPage } from "./about.js";


loadHomePage();
const homeTab = document.querySelector("div .Home");
homeTab.addEventListener("click", loadHomePage);
const menuTab = document.querySelector("div .Menu");
menuTab.addEventListener("click", loadMenuPage);
const aboutTab = document.querySelector("div .About");
aboutTab.addEventListener("click", loadAboutPage);