import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Maryland installerbio, Maryland door repair, Maryland window repair, Maryland window installer, Maryland door installer, Maryland window part installer, Maryland door part installer, Maryland handyman, Maryland door help, Maryland window help">
<meta name="keywords" content="door installation, window installation, Maryland window, Maryland door">
<meta name="author" content="Delfino Farfan">
<title>${state.view} Installers | InstallerBio</title>
</head>
<div class="container formPage">
<button onclick="history.back()"></button>
<h1 class="container text-center">Maryland</h1>
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
    ${state.marylands
      .map(maryland => {
        return `<tr><td class="priority-1"><a href="/P${maryland._id}">${maryland.companyName}</a></td><td class="priority-6">${maryland.address}</td><td>${maryland.city}</td><td class="priority-8">${maryland.state
        }</td><td class="priority-4">${maryland.zipcode
        }</td><td><a href="tel:+1${maryland.phone}">${maryland.phone
        }</a></td><td class="priority-5"><a href="mailto:${maryland.email}">${maryland.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
  </div>
`;