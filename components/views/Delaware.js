import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Delaware installerbio, Delaware door repair, Delaware window repair, Delaware window installer, Delaware door installer, Delaware window part installer, Delaware door part installer, Delaware handyman, Delaware door help, Delaware window help">
<meta name="keywords" content="door installation, window installation, Delaware window, Delaware door">
<title>${state.view} Installers | InstallerBio</title>
</head>
<div class="container formPage">
<button onclick="history.back()"></button>
<h1 class="container text-center">Delaware</h1>
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
    ${state.delawares
      .map(delaware => {
        return `<tr><td class="priority-1"><a href="/P${delaware._id}">${delaware.companyName}</a></td><td class="priority-6">${delaware.address}</td><td>${delaware.city}</td><td class="priority-8">${delaware.state
        }</td><td class="priority-4">${delaware.zipcode
        }</td><td><a href="tel:+1${delaware.phone}">${delaware.phone
        }</a></td><td class="priority-5"><a href="mailto:${delaware.email}">${delaware.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
  </div>
`;