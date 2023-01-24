import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Oregon installerbio, Oregon door repair, Oregon window repair, Oregon window installer, Oregon door installer, Oregon window part installer, Oregon door part installer, Oregon handyman, Oregon door help, Oregon window help">
<meta name="keywords" content="door installation, window installation, Oregon window, Oregon door">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>
</head>
<div class="container">
<button onclick="history.back()">Go Back</button>
<h1 class="container text-center">Oregon</h1>
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
    ${state.oregons
      .map(oregon => {
        return `<tr><td><a href="/P${oregon._id}">${oregon.companyName}</a></td><td class="priority-6">${oregon.address}</td><td>${oregon.city}</td><td class="priority-8">${oregon.state
        }</td><td class="priority-4">${oregon.zipcode
        }</td><td><a href="tel:+1${oregon.phone}">${oregon.phone
        }</a></td><td class="priority-5"><a href="mailto:${oregon.email}">${oregon.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;