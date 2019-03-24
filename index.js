import Home from "./pages/home";
import About from "./pages/about";

const routes = {
  "/": Home,
  "/about": About
};

function hashHandler() {
  console.log("The hash has changed!");
  if (window.location.hash) {
    var path = window.location.hash.substr(1).split("&");
    document.querySelector("#app").innerHTML = routes[path]();
  }
}

window.addEventListener("hashchange", hashHandler, false);

if(document.querySelector("#app").innerHTML === ""){
  hashHandler()
}

if (!window.location.hash) {
  location.href += "#/";
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}
