import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Louisiana installerbio, Louisiana door repair, Louisiana window repair, Louisiana window installer, Louisiana door installer, Louisiana window part installer, Louisiana door part installer, Louisiana handyman, Louisiana door help, Louisiana window help">
<meta name="keywords" content="door installation, window installation, Louisiana window, Louisiana door">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>
</head>
<div class="container">
<button onclick="history.back()">Go Back</button>
<h1 class="container text-center">Louisiana</h1>
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
    ${state.louisianas
      .map(louisiana => {
        return `<tr><td class="priority-1"><a href="/P${louisiana._id}">${louisiana.companyName}</td><td class="priority-6">${louisiana.address}</td><td>${louisiana.city}</td><td class="priority-8">${louisiana.state
        }</td><td class="priority-4">${louisiana.zipcode
        }</td><td><a href="tel:+1${louisiana.phone}">${louisiana.phone
        }</a></td><td class="priority-5"><a href="mailto:${louisiana.email}">${louisiana.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;