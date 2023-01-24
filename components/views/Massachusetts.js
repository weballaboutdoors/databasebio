import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Massachusetts installerbio, Massachusetts door repair, Massachusetts window repair, Massachusetts window installer, Massachusetts door installer, Massachusetts window part installer, Massachusetts door part installer, Massachusetts handyman, Massachusetts door help, Massachusetts window help">
<meta name="keywords" content="door installation, window installation, Massachusetts window, Massachusetts door">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>
</head>
<div class="container">
<button onclick="history.back()"></button>
<h1 class="container text-center">Massachusetts</h1>
<div class="row">
<input class="col" id="searchbarCity" onkeyup="search_city()" type="search"
        name="search" placeholder="Search by City..">
<input class="col" id="searchbarZip" onkeyup="search_zip()" type="search"
        name="search" placeholder="Search by Zip Code..">
        </div>
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
    ${state.massachusettss
      .map(massachusetts => {
        return `<tr><td class="priority-1"><a href="/P${massachusetts._id}">${massachusetts.companyName}</a></td><td class="priority-6">${massachusetts.address}</td><td>${massachusetts.city}</td><td class="priority-8">${massachusetts.state
        }</td><td class="priority-4">${massachusetts.zipcode
        }</td><td><a href="tel:+1${massachusetts.phone}">${massachusetts.phone
        }</a></td><td class="priority-5"><a href="mailto:${massachusetts.email}">${massachusetts.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;