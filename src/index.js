const routes = {
  "/": import("./pages/home"),
  "/about": import("./pages/about"),
  "/contact": import("./pages/contact")
};

function hashHandler() {
  if (window.location.hash) {
    var path = window.location.hash.substr(1).split("&");
    renderPage(path);
  }
}

async function renderPage(name) {
  const page = await routes[name];
  document.querySelector("#app").innerHTML = page.render();
}

window.addEventListener("hashchange", hashHandler, false);

// Trigger first action if there are no previous data on dom
if (document.querySelector("#app").innerHTML === "") {
  hashHandler();
}

// change location and load the home page in case of first visit
if (!window.location.hash) {
  location.href += "#/";
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}
