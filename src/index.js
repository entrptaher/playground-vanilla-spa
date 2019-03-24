const routes = {
  "/": import("./pages/home"),
  "/about": import("./pages/about")
};

async function hashHandler() {
  if (window.location.hash) {
    var path = window.location.hash.substr(1).split("&");
    const page = await routes[path];
    document.querySelector("#app").innerHTML = page.render();
  }
}

window.addEventListener("hashchange", hashHandler, false);

if (document.querySelector("#app").innerHTML === "") {
  hashHandler();
}

if (!window.location.hash) {
  location.href += "#/";
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}
