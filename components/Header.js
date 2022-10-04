import html from "html-literal";

export default state => html`
  <header>
    <h1 class="headerClass">${state.header}</h1>
  </header>
`;