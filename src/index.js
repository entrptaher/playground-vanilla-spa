import Navigo from "navigo";
import renderPage from './page';

var router = new Navigo();

router
  .on({
    "/": () => {
      renderPage("Home");
    },
    "/about": () => {
      renderPage("Another");
    },
    "/contact": () => {
      renderPage("Contact");
    }
  })
  .resolve();
