import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Hawaii installerbio, Hawaii door repair, Hawaii window repair, Hawaii window installer, Hawaii door installer, Hawaii window part installer, Hawaii door part installer, Hawaii handyman, Hawaii door help, Hawaii window help">
<meta name="keywords" content="door installation, window installation, Georgia window, Georgia door">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>
</head>
<div class="container">
<button onclick="history.back()"></button>
<h1 class="container text-center">Hawaii</h1>
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
    ${state.hawaiis
      .map(hawaii => {
        return `<tr><td class="priority-1"><a href="/P${hawaii._id}">${hawaii.companyName}</a></td><td class="priority-6">${hawaii.address}</td><td>${hawaii.city}</td><td class="priority-8">${hawaii.state
        }</td><td class="priority-4">${hawaii.zipcode
        }</td><td><a href="tel:+1${hawaii.phone}">${hawaii.phone
        }</a></td><td class="priority-5"><a href="mailto:${hawaii.email}">${hawaii.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
`;