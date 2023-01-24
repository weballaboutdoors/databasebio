import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Colorado installerbio, Colorado door repair, Colorado window repair, Colorado window installer, Colorado door installer, Colorado window part installer, Colorado door part installer, Colorado handyman, Colorado door help, Colorado window help">
<meta name="keywords" content="door installation, window installation, Colorado window, Colorado door">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>
</head>
<div class="container">
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
    ${state.colorados
      .map(colorado => {
        return `<tr><td class="priority-1"><a href="/P${colorado._id}">${colorado.companyName}</a></td><td class="priority-6">${colorado.address}</td><td>${colorado.city}</td><td class="priority-8">${colorado.state
        }</td><td class="priority-4">${colorado.zipcode
        }</td><td><a href="tel:+1${colorado.phone}">${colorado.phone
        }</a></td><td class="priority-5"><a href="mailto:${colorado.email}">${colorado.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;