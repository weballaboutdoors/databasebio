import html from "html-literal";


export default links => html`
  <nav class="fixed-nav-bar">
    <i class="fa-solid fa-bars"></i>    
    <h1><a href="/Home">InstallerBio</a></h1>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
`;