// Import lit-html
import { html, render } from "lit-html";

function renderPage(name) {
  // Define a template
  const myTemplate = name =>
    html`
      <p>This is ${name} page</p>
    `;
  // Render the template to the document
  render(myTemplate(name), document.querySelector("#app"));
}

export default renderPage;
