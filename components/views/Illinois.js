import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Illinois installerbio, Illinois door repair, Illinois window repair, Illinois window installer, Illinois door installer, Illinois window part installer, Illinois door part installer, Illinois handyman, Illinois door help, Illinois window help">
<meta name="keywords" content="door installation, window installation, Illinois window, Illinois door">
<meta name="author" content="Delfino Farfan">
<title>${state.view} Installers | InstallerBio</title>
</head>
<div class="container formPage">
<button onclick="history.back()"></button>
<h1 class="container text-center">Illinois</h1>
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
    ${state.illinoiss
      .map(illinois => {
        return `<tr><td><a href="/P${illinois._id}">${illinois.companyName}</a></td><td class="priority-6">${illinois.address}</td><td>${illinois.city}</td><td class="priority-8">${illinois.state
        }</td><td class="priority-4">${illinois.zipcode
        }</td><td><a href="tel:+1${illinois.phone}">${illinois.phone
        }</a></td><td class="priority-5"><a href="mailto:${illinois.email}">${illinois.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
  </div>
`;