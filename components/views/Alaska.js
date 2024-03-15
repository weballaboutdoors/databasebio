import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Alaska installerbio, Alaska door repair, Alaska window repair, Alaska window installer, Alaska door installer, Alaska window part installer, Alaska door part installer, Alaska handyman, Alaska door help, Alaska window help">
<meta name="keywords" content="door installation, window installation, Alaska window, Alaska door">
<title>${state.view} Installers | InstallerBio</title>
</head>
<div class="container formPage">
<button onclick="history.back()"></button>
<h1 class="container text-center">Alaska</h1>
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
    ${state.alaskas
      .map(alaska => {
        return `<tr><td class="priority-1"><a href="/P${alaska._id}">${alaska.companyName}</a></td><td class="priority-6">${alaska.address}</td><td>${alaska.city}</td><td class="priority-8">${alaska.state
        }</td><td class="priority-4">${alaska.zipcode
        }</td><td><a href="tel:+1${alaska.phone}">${alaska.phone
        }</a></td><td class="priority-5"><a href="mailto:${alaska.email}">${alaska.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
  </div>
`;