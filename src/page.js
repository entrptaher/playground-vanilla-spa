// Import lit-html
import { html, render } from "lit-html";

function renderPage(name) {
  // Define a template
  const myTemplate = name =>
    // html is from lit-html
    // the comment is for vscode only and totally optional, see ES6 String HTML
    html/*html*/`
      <p>This is ${name} page</p>
    `;
  // Render the template to the document
  render(myTemplate(name), document.querySelector("#app"));
}

export default renderPage;
