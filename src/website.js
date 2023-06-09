import "./style.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function initialWebsite() {
  createHeader();
  createMain();
  loadHome();
}

function createHeader() {
  const content = document.querySelector("#content");

  const headerBox = document.createElement("div");
  headerBox.className = "header-box";
  content.appendChild(headerBox);

  const nameBox = document.createElement("div");
  nameBox.className = "logo";
  nameBox.textContent = "Molten Cave";
  headerBox.appendChild(nameBox);

  const navBox = document.createElement("div");
  navBox.className = "nav-box";
  headerBox.appendChild(navBox);

  const homeBtn = document.createElement("button");
  homeBtn.className = "nav-button";
  homeBtn.textContent = "Home";
  homeBtn.classList.add("active");
  navBox.appendChild(homeBtn);
  homeBtn.addEventListener("click", (e) => {
    setAnimation(e);
    loadHome();
  });

  const menuBtn = document.createElement("button");
  menuBtn.className = "nav-button";
  menuBtn.textContent = "Menu";
  navBox.appendChild(menuBtn);
  menuBtn.addEventListener("click", (e) => {
    setAnimation(e);
    loadMenu();
  });

  const contactBtn = document.createElement("button");
  contactBtn.className = "nav-button";
  contactBtn.textContent = "Contact";
  navBox.appendChild(contactBtn);
  contactBtn.addEventListener("click", (e) => {
    setAnimation(e);
    loadContact();
  });

  return homeBtn;
}

function createMain() {
  const mainBox = document.createElement("div");
  mainBox.className = "main-box";
  content.appendChild(mainBox);
}

function setAnimation(e) {
  const navButtons = document.querySelectorAll(".nav-button");
  navButtons.forEach((button) => {
    button.classList.remove("active");
  });

  e.target.classList.add("active");
}

export default initialWebsite;
