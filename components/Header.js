import html from "html-literal";

export default state => html`
  <header>
    <div class="container justify-content-start">
  <h1><a href="/Home">InstallerBio</a></h1>
  </div>
    <h2 class="headerClass">${state.header}</h2>
  </header>
`;