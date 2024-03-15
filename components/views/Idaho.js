import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Idaho installerbio, Idaho door repair, Idaho window repair, Idaho window installer, Idaho door installer, Idaho window part installer, Idaho door part installer, Idaho handyman, Idaho door help, Idaho window help">
<meta name="keywords" content="door installation, window installation, Idaho window, Idaho door">
<title>${state.view} Installers | InstallerBio</title>
</head>
<div class="container formPage">
<button onclick="history.back()"></button>
<h1 class="container text-center">Idaho</h1>
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
    ${state.idahos
      .map(idaho => {
        return `<tr><td class="priority-1"><a href="/P${idaho._id}">${idaho.companyName}</a></td><td class="priority-6">${idaho.address}</td><td>${idaho.city}</td><td class="priority-8">${idaho.state
        }</td><td class="priority-4">${idaho.zipcode
        }</td><td><a href="tel:+1${idaho.phone}">${idaho.phone
        }</a></td><td class="priority-5"><a href="mailto:${idaho.email}">${idaho.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
  </div>
`;