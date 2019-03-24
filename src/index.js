import Navigo from "navigo";
import renderPage from './page';

// Initial Navigo
var root = null;
var useHash = true; // Defaults to: false
var hash = "#!"; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

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
