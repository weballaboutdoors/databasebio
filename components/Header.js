import html from "html-literal";

export default state => html`
  <header>
    <h2 class="headerClass">${state.header}</h2>
  </header>
`;