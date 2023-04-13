import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Utah installerbio, Utah door repair, Utah window repair, Utah window installer, Utah door installer, Utah window part installer, Utah door part installer, Utah handyman, Utah door help, Utah window help">
<meta name="keywords" content="door installation, window installation, Utah window, Utah door">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>
</head>
<div class="container">
<button onclick="history.back()"></button>
<h1 class="container text-center">Utah</h1>
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
    ${state.utahs
      .map(utah => {
        return `<tr><td><a href="/P${utah._id}">${utah.companyName}</a></td><td class="priority-6">${utah.address}</td><td>${utah.city}</td><td class="priority-8">${utah.state
        }</td><td class="priority-4">${utah.zipcode
        }</td><td><a href="tel:+1${utah.phone}">${utah.phone
        }</a></td><td class="priority-5"><a href="mailto:${utah.email}">${utah.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
`;