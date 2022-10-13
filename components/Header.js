import html from "html-literal";

export default state => html`
  <header>
  <h1><a href="/Home">InstallerBio</a></h1>
    <h2 class="headerClass">${state.header}</h2>
  </header>
`;