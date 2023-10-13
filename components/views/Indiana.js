import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Indiana installerbio, Indiana door repair, Indiana window repair, Indiana window installer, Indiana door installer, Indiana window part installer, Indiana door part installer, Indiana handyman, Indiana door help, Indiana window help">
<meta name="keywords" content="door installation, window installation, Indiana window, Indiana door">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>
</head>
<div class="container formPage">
<button onclick="history.back()"></button>
<h1 class="container text-center">Indiana</h1>
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
    ${state.indianas
      .map(indiana => {
        return `<tr><td class="priority-1"><a href="/P${indiana._id}">${indiana.companyName}</a></td><td class="priority-6">${indiana.address}</td><td>${indiana.city}</td><td class="priority-8">${indiana.state
        }</td><td class="priority-4">${indiana.zipcode
        }</td><td><a href="tel:+1${indiana.phone}">${indiana.phone
        }</a></td><td class="priority-5"><a href="mailto:${indiana.email}">${indiana.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
  </div>
`;