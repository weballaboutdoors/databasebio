import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Connecticut installerbio, Connecticut door repair, Connecticut window repair, Connecticut window installer, Connecticut door installer, Connecticut window part installer, Connecticut door part installer, Connecticut handyman, Connecticut door help, Connecticut window help">
<meta name="keywords" content="door installation, window installation, Connecticut window, Connecticut door">
<title>${state.view} Installers | InstallerBio</title>
</head>
<div class="container formPage">
<button onclick="history.back()"></button>
<h1 class="container text-center">Connecticut</h1>
<div class="row">
<input class="col" id="searchbarCity" onkeyup="search_city()" type="search"
        name="search" placeholder="Search by City..">
<input class="col" id="searchbarZip" onkeyup="search_zip()" type="search"
        name="search" placeholder="Search by Zip Code..">
        </div>
       
<div class="container text-center">
<table class="tables" id="myTable">
</div>
    <tr>
      <th class="priority-1">Name / Company</th>
      <th class="priority-6">Address</th>
      <th class="priority-2">City</th>
      <th class="priority-8">State</th>
      <th class="priority-4">Zip Code</th>
      <th class="priority-3">Phone Number</th>
      <th class="priority-5">E-Mail</th>
    </tr>
    ${state.connecticuts
      .map(connecticut => {
        return `<tr><td class="priority-1"><a href="/P${connecticut._id}">${connecticut.companyName}</a></td><td class="priority-6">${connecticut.address}</td><td>${connecticut.city}</td><td class="priority-8">${connecticut.state
        }</td><td class="priority-4">${connecticut.zipcode
        }</td><td><a href="tel:+1${connecticut.phone}">${connecticut.phone
        }</a></td><td class="priority-5"><a href="mailto:${connecticut.email}">${connecticut.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
  </div>
`;