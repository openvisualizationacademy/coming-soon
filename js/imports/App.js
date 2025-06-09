import Accessibility from "./Accessibility.js";
import Logo from "./Logo.js";
import ThemePicker from "./ThemePicker.js";

export default class App {
  constructor(selector) {
    this.element = document.querySelector(selector) || document.body;
    this.setup();
  }

  setup() {
    this.accessibility = new Accessibility(this);

    this.logo = new Logo(this, {
      parent: ".logo",
      margin: 1,
      side: 96,
    });

    this.wave = new Logo(this, {
      parent: ".wave",
      margin: 168 / 2,
      side: 168,
      wave: true,
    });

    this.themePicker = new ThemePicker(".theme-picker");

    // Allow anchor navigation, but don’t change url
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      const id = a.hash.replace("#", "");
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const element = id ? document.getElementById(id) : document.body;
        element.scrollIntoView();
      });
    });
  }

  update() {}
}
