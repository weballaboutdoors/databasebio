import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Vermont installerbio, Vermont door repair, Vermont window repair, Vermont window installer, Vermont door installer, Vermont window part installer, Vermont door part installer, Vermont handyman, Vermont door help, Vermont window help">
<meta name="keywords" content="door installation, window installation, Vermont window, Vermont door">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>
</head>
<div class="container">
<button onclick="history.back()">Go Back</button>
<h1 class="container text-center">Vermont</h1>
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
    ${state.vermonts
      .map(vermont => {
        return `<tr><td><a href="/P${vermont._id}">${vermont.companyName}</a></td><td class="priority-6">${vermont.address}</td><td>${vermont.city}</td><td class="priority-8">${vermont.state
        }</td><td class="priority-4">${vermont.zipcode
        }</td><td><a href="tel:+1${vermont.phone}">${vermont.phone
        }</a></td><td class="priority-5"><a href="mailto:${vermont.email}">${vermont.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;