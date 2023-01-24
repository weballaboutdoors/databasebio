import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Tennessee installerbio, Tennessee door repair, Tennessee window repair, Tennessee window installer, Tennessee door installer, Tennessee window part installer, Tennessee door part installer, Tennessee handyman, Tennessee door help, Tennessee window help">
<meta name="keywords" content="door installation, window installation, Tennessee window, Tennessee door">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>
</head>
<div class="container">
<button onclick="history.back()"></button>
<h1 class="container text-center">Tennessee</h1>
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
    ${state.tennessees
      .map(tennessee => {
        return `<tr><td><a href="/P${tennessee._id}">${tennessee.companyName}</a></td><td class="priority-6">${tennessee.address}</td><td>${tennessee.city}</td><td class="priority-8">${tennessee.state
        }</td><td class="priority-4">${tennessee.zipcode
        }</td><td><a href="tel:+1${tennessee.phone}">${tennessee.phone
        }</a></td><td class="priority-5"><a href="mailto:${tennessee.email}">${tennessee.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;