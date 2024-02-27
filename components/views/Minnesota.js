import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Minnesota installerbio, Minnesota door repair, Minnesota window repair, Minnesota window installer, Minnesota door installer, Minnesota window part installer, Minnesota door part installer, Minnesota handyman, Minnesota door help, Minnesota window help">
<meta name="keywords" content="door installation, window installation, Minnesota window, Minnesota door">
<meta name="author" content="Delfino Farfan">
<title>${state.view} Installers | InstallerBio</title>
</head>
<div class="container formPage">
<button onclick="history.back()"></button>
<h1 class="container text-center">Minnesota</h1>
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
    ${state.minnesotas
      .map(minnesota => {
        return `<tr><td><a href="/P${minnesota._id}">${minnesota.companyName}</a></td><td class="priority-6">${minnesota.address}</td><td>${minnesota.city}</td><td class="priority-8">${minnesota.state
        }</td><td class="priority-4">${minnesota.zipcode
        }</td><td><a href="tel:+1${minnesota.phone}">${minnesota.phone
        }</a></td><td class="priority-5"><a href="mailto:${minnesota.email}">${minnesota.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
  </div>
`;