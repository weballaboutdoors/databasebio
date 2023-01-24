import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Mississippi installerbio, Mississippi door repair, Mississippi window repair, Mississippi window installer, Mississippi door installer, Mississippi window part installer, Mississippi door part installer, Mississippi handyman, Mississippi door help, Mississippi window help">
<meta name="keywords" content="door installation, window installation, Mississippi window, Mississippi door">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>
</head>
<div class="container">
<button onclick="history.back()">Go Back</button>
<h1 class="container text-center">Mississippi</h1>
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
    ${state.mississippis
      .map(mississippi => {
        return `<tr><td><a href="/P${mississippi._id}">${mississippi.companyName}</a></td><td class="priority-6">${mississippi.address}</td><td>${mississippi.city}</td><td class="priority-8">${mississippi.state
        }</td><td class="priority-4">${mississippi.zipcode
        }</td><td><a href="tel:+1${mississippi.phone}">${mississippi.phone
        }</a></td><td class="priority-5"><a href="mailto:${mississippi.email}">${mississippi.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;