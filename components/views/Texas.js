import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Texas installerbio, Texas door repair, Texas window repair, Texas window installer, Texas door installer, Texas window part installer, Texas door part installer, Texas handyman, Texas door help, Texas window help">
<meta name="keywords" content="door installation, window installation, Texas window, Texas door">
<title>${state.view} Installers | InstallerBio</title>
</head>
<div class="container formPage">
<button onclick="history.back()"></button>
<h1 class="container text-center">Texas</h1>
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
    ${state.texass
      .map(texas => {
        return `<tr><td><a href="/P${texas._id}">${texas.companyName}</a></td><td class="priority-6">${texas.address}</td><td>${texas.city}</td><td class="priority-8">${texas.state
        }</td><td class="priority-4">${texas.zipcode
        }</td><td><a href="tel:+1${texas.phone}">${texas.phone
        }</a></td><td class="priority-5"><a href="mailto:${texas.email}">${texas.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
  </div>
`;